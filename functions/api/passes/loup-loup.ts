interface Env {
  WSDOT_API_ACCESS_CODE?: string;
}

// In-memory cache for Cloudflare isolate reuse
let cache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL

interface WSDOTPassCondition {
  DateUpdated: string;
  ElevationInFeet: number;
  Latitude: number;
  Longitude: number;
  MountainPassId: number;
  MountainPassName: string;
  RoadCondition: string;
  TemperatureInFahrenheit: number | string | null;
  TravelAdvisoryActive: boolean;
  WeatherCondition: string;
  RestrictionOne: { RestrictionText: string; TravelDirection: string } | null;
  RestrictionTwo: { RestrictionText: string; TravelDirection: string } | null;
}

function parseWSDOTDate(dateStr: string): Date {
  if (!dateStr) return new Date();
  
  // Microsoft JSON date format e.g. /Date(1724245600000-0700)/
  const msDateMatch = dateStr.match(/\/Date\((-?\d+)(?:[+-]\d+)?\)\//);
  if (msDateMatch) {
    return new Date(parseInt(msDateMatch[1], 10));
  }
  
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

function formatRelativeTime(date: Date): string {
  const diffMs = Date.now() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) {
    return 'Just now';
  }
  if (diffMins === 1) {
    return '1 minute ago';
  }
  if (diffMins < 60) {
    return `${diffMins} minutes ago`;
  }
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours === 1) {
    return '1 hour ago';
  }
  if (diffHours < 24) {
    return `${diffHours} hours ago`;
  }
  
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const accessCode = context.env.WSDOT_API_ACCESS_CODE;
  
  // If no Access Code is set, return a mock/fallback response with status UNKNOWN
  if (!accessCode) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'WSDOT_API_ACCESS_CODE is not configured on Cloudflare.',
        status: 'UNKNOWN',
        roadCondition: 'Live conditions unavailable (API access code missing).',
        weather: null,
        lastUpdated: 'Configuration missing',
        source: 'WSDOT'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }

  // Check in-memory cache
  const now = Date.now();
  if (cache && (now - cache.timestamp < CACHE_TTL_MS)) {
    return new Response(JSON.stringify(cache.data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Cache': 'HIT'
      }
    });
  }

  try {
    const wsdotUrl = `http://wsdot.wa.gov/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode=${accessCode}`;
    const response = await fetch(wsdotUrl, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000) // 8 seconds timeout
    });

    if (!response.ok) {
      throw new Error(`WSDOT API responded with status: ${response.status}`);
    }

    const data: WSDOTPassCondition[] = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('Invalid JSON response format from WSDOT');
    }

    // Find Loup Loup Pass
    const item = data.find(
      p => p.MountainPassName && p.MountainPassName.toLowerCase().includes('loup loup')
    );

    if (!item) {
      throw new Error('Loup Loup Pass data not found in WSDOT API response');
    }

    // Parse values
    const dateUpdated = parseWSDOTDate(item.DateUpdated);
    const lastUpdated = formatRelativeTime(dateUpdated);
    
    // Normalize status
    let status: 'OPEN' | 'CAUTION' | 'CLOSED' | 'UNKNOWN' = 'OPEN';
    const roadCondLower = (item.RoadCondition || '').toLowerCase();
    const restText1 = (item.RestrictionOne?.RestrictionText || '').toLowerCase();
    const restText2 = (item.RestrictionTwo?.RestrictionText || '').toLowerCase();
    
    if (roadCondLower.includes('closed')) {
      status = 'CLOSED';
    } else if (
      (restText1 && !restText1.includes('no restriction') && !restText1.includes('none')) ||
      (restText2 && !restText2.includes('no restriction') && !restText2.includes('none')) ||
      roadCondLower.includes('chains required') ||
      roadCondLower.includes('traction tires required') ||
      roadCondLower.includes('slush') ||
      roadCondLower.includes('snow') ||
      roadCondLower.includes('ice')
    ) {
      status = 'CAUTION';
    }

    // Parse temperature
    let tempF: number | null = null;
    if (item.TemperatureInFahrenheit !== null && item.TemperatureInFahrenheit !== undefined) {
      const parsedTemp = parseFloat(item.TemperatureInFahrenheit.toString());
      if (!isNaN(parsedTemp)) {
        tempF = parsedTemp;
      }
    }
    const tempC = tempF !== null ? Math.round((tempF - 32) * 5 / 9) : null;

    // Build restrictions list
    const restrictions: string[] = [];
    if (item.RestrictionOne?.RestrictionText && !item.RestrictionOne.RestrictionText.toLowerCase().includes('no restriction')) {
      restrictions.push(item.RestrictionOne.RestrictionText);
    }
    if (item.RestrictionTwo?.RestrictionText && !item.RestrictionTwo.RestrictionText.toLowerCase().includes('no restriction')) {
      restrictions.push(item.RestrictionTwo.RestrictionText);
    }

    const normalizedData = {
      success: true,
      id: 'loup-loup-pass',
      name: 'Loup Loup Pass',
      state: 'Washington',
      highway: 'SR 20',
      status,
      roadCondition: item.RoadCondition || 'Open to all traffic.',
      weather: {
        tempF,
        tempC,
        condition: item.WeatherCondition || 'N/A'
      },
      elevation: item.ElevationInFeet || 4020,
      restrictions: restrictions.length > 0 ? restrictions : ['No current restriction reported.'],
      travelAdvisory: item.TravelAdvisoryActive || false,
      dateUpdated: dateUpdated.toISOString(),
      lastUpdated,
      source: 'WSDOT'
    };

    // Update in-memory cache
    cache = {
      data: normalizedData,
      timestamp: Date.now()
    };

    return new Response(JSON.stringify(normalizedData), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Cache': 'MISS'
      }
    });

  } catch (error: any) {
    console.error('Error fetching/parsing WSDOT data:', error);
    
    // In case of error, if we have cache, return cache with a warning header
    if (cache) {
      return new Response(JSON.stringify(cache.data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Cache': 'STALE_FALLBACK',
          'X-Warning': 'WSDOT API failed, returning stale cache.'
        }
      });
    }

    // Return failure payload matching frontend expectations
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'WSDOT API fetch failed.',
        status: 'UNKNOWN',
        roadCondition: 'Live Loup Loup Pass data temporarily unavailable.',
        weather: null,
        lastUpdated: 'Live data offline',
        source: 'WSDOT'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
};
