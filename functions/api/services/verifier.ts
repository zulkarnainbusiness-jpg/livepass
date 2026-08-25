// Backend Verifier Service for LivePassWatch

export interface PassRow {
  id: string;
  pass_name: string;
  country: string;
  state_or_region: string;
  latitude: number;
  longitude: number;
  official_authority: string;
  official_source_url: string;
  status: string;
  status_reason: string;
  restrictions: string;
  last_checked_at: string;
  last_status_change_at: string;
  source_published_at: string;
  source_evidence: string;
  source_url: string;
  verification_status: string;
  confidence: string;
  next_check_at: string;
}

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

function parseWSDOTDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString();
  const msDateMatch = dateStr.match(/\/Date\((-?\d+)(?:[+-]\d+)?\)\//);
  if (msDateMatch) {
    return new Date(parseInt(msDateMatch[1], 10)).toISOString();
  }
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

/**
 * Generate AI explanation/summary using Gemini API or Cloudflare Workers AI
 */
async function generateAISummary(
  passName: string,
  status: string,
  evidence: string,
  restrictions: string,
  env: any
): Promise<string> {
  const prompt = `Summarize the road status of ${passName} into a concise, professional explanation (1-2 sentences) for drivers.
Status: ${status}
Details: ${evidence || 'None provided'}
Restrictions: ${restrictions || 'None'}
Rules:
- Be factual.
- Do NOT hallucinate.
- Use only the provided information.
- Write in a professional, travel-advisory tone.`;

  // 1. Try Gemini API
  if (env.GEMINI_API_KEY) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 120 }
        })
      });
      if (response.ok) {
        const json: any = await response.json();
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text.trim();
      }
    } catch (e) {
      console.error('Gemini API call failed:', e);
    }
  }

  // 2. Try Cloudflare Workers AI if bound
  if (env.AI) {
    try {
      const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
        messages: [
          { role: 'system', content: 'You are an official highway transport system assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100
      });
      if (response && response.response) {
        return response.response.trim();
      }
    } catch (e) {
      console.error('Cloudflare Workers AI failed:', e);
    }
  }

  // Fallback to rules-based templates if AI is unavailable
  let summary = `${passName} is currently ${status}.`;
  if (restrictions && restrictions !== 'None') {
    summary += ` Restrictions apply: ${restrictions}.`;
  }
  if (evidence) {
    summary += ` Official report: ${evidence}`;
  }
  return summary;
}

/**
 * Rules-based status parsing from raw HTML text
 */
function parseHtmlStatus(htmlText: string, passName: string): {
  status: string;
  restrictions: string;
  evidence: string;
  confidence: string;
} {
  const text = htmlText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').toLowerCase();

  let status = 'UNKNOWN';
  let restrictions = 'None';
  let evidence = '';
  let confidence = 'LOW';

  // Helper to extract surrounding context/sentence of a keyword
  const extractContext = (keyword: string): string => {
    const idx = text.indexOf(keyword);
    if (idx === -1) return '';
    const start = Math.max(0, idx - 80);
    const end = Math.min(text.length, idx + keyword.length + 80);
    return '...' + text.substring(start, end).trim() + '...';
  };

  // 1. Seasonal closures (English + French + Italian + German)
  if (
    text.includes('closed for the season') ||
    text.includes('seasonal closure') ||
    text.includes('winter closure') ||
    text.includes('closed for winter') ||
    text.includes('fermeture hivernale') ||
    text.includes('fermé pour la saison') ||
    text.includes('fermeture pour l\'hiver') ||
    text.includes('chiusura invernale') ||
    text.includes('passo chiuso per la stagione') ||
    text.includes('wintersperre')
  ) {
    status = 'SEASONAL_CLOSURE';
    evidence = extractContext('fermeture') || extractContext('closed for') || extractContext('chiusura') || extractContext('wintersperre');
    confidence = 'HIGH';
  }
  // 2. Road closed (English + French + Italian + German)
  else if (
    text.includes('road closed') ||
    text.includes('pass closed') ||
    text.includes('traffic suspended') ||
    text.includes('closed due to') ||
    text.includes('col fermé') ||
    text.includes('route fermée') ||
    text.includes('circulation interdite') ||
    text.includes('strada chiusa') ||
    text.includes('passo chiuso') ||
    text.includes('gesperrt')
  ) {
    status = 'CLOSED';
    evidence = extractContext('fermé') || extractContext('closed') || extractContext('chiusa') || extractContext('gesperrt');
    confidence = 'HIGH';
  }
  // 3. Restrictions (English + French + Italian + German)
  else if (
    text.includes('chains required') ||
    text.includes('traction tires advised') ||
    text.includes('traction tires required') ||
    text.includes('one-way traffic') ||
    text.includes('restricted') ||
    text.includes('équipements obligatoires') ||
    text.includes('loi montagne') ||
    text.includes('circulation alternée') ||
    text.includes('catene obbligatorie') ||
    text.includes('pneumatici invernali obbligatori') ||
    text.includes('schneeketten erforderlich')
  ) {
    status = 'RESTRICTED';
    evidence = extractContext('obligatoire') || extractContext('required') || extractContext('obbligatorie') || extractContext('erforderlich');
    restrictions = 'Traction/winter vehicle equipment required';
    confidence = 'HIGH';
  }
  // 4. Road open (English + French + Italian + German)
  else if (
    text.includes('road open') ||
    text.includes('pass open') ||
    text.includes('open to traffic') ||
    text.includes('reopened') ||
    text.includes('col ouvert') ||
    text.includes('route ouverte') ||
    text.includes('ouvert à la circulation') ||
    text.includes('strada aperta') ||
    text.includes('passo aperto') ||
    text.includes('transitabile') ||
    text.includes('offen') ||
    text.includes('befahrbar') ||
    text.includes('normal roads') ||
    text.includes('dry road')
  ) {
    status = 'OPEN';
    evidence = extractContext('ouvert') || extractContext('open') || extractContext('aperto') || extractContext('transitabile') || extractContext('offen') || extractContext('dry road');
    confidence = 'HIGH';
  }

  if (status === 'UNKNOWN') {
    evidence = 'No definitive status keywords detected on the official website.';
  }

  return { status, restrictions, evidence, confidence };
}

/**
 * Verify a single pass using its configured official source URL
 */
export async function verifyPass(
  db: D1Database,
  pass: PassRow,
  env: any
): Promise<{ success: boolean; statusChanged: boolean; newStatus: string; error?: string }> {
  const timestamp = new Date().toISOString();
  let nextCheckIntervalHours = 24; // Normal frequency

  let extractedStatus = 'UNKNOWN';
  let extractedReason = '';
  let extractedRestrictions = 'None';
  let extractedPublishedAt = timestamp;
  let extractedEvidence = '';
  let extractedConfidence = 'LOW';
  let verificationStatus = 'NEEDS_VERIFICATION';

  try {
    // Check WSDOT API if applicable
    if (pass.official_authority === 'WSDOT') {
      const accessCode = env.WSDOT_API_ACCESS_CODE;
      
      if (accessCode) {
        const wsdotUrl = `http://wsdot.wa.gov/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode=${accessCode}`;
        const response = await fetch(wsdotUrl, { signal: AbortSignal.timeout(8000) });
        if (!response.ok) throw new Error(`WSDOT API HTTP error: ${response.status}`);
        
        const data: WSDOTPassCondition[] = await response.json();
        
        // Find matching item
        const wsdotNameMap: Record<string, string> = {
          'snoqualmie-pass': 'snoqualmie',
          'stevens-pass': 'stevens',
          'blewett-pass': 'blewett',
          'loup-loup-pass': 'loup loup',
          'status-pass': 'satus'
        };
        
        const searchKey = wsdotNameMap[pass.id] || pass.pass_name.toLowerCase();
        const item = data.find(p => p.MountainPassName && p.MountainPassName.toLowerCase().includes(searchKey));
        
        if (!item) {
          throw new Error(`WSDOT pass item "${searchKey}" not found in JSON response.`);
        }
        
        // Parse WSDOT values
        extractedPublishedAt = parseWSDOTDate(item.DateUpdated);
        const roadCondition = item.RoadCondition || '';
        extractedEvidence = `Road condition: ${roadCondition}. Weather: ${item.WeatherCondition || 'N/A'}`;
        extractedConfidence = 'HIGH';
        verificationStatus = 'VERIFIED';
        
        const r1 = (item.RestrictionOne?.RestrictionText || '').toLowerCase();
        const r2 = (item.RestrictionTwo?.RestrictionText || '').toLowerCase();
        const rList: string[] = [];
        if (r1 && !r1.includes('no restriction') && !r1.includes('none')) rList.push(item.RestrictionOne!.RestrictionText);
        if (r2 && !r2.includes('no restriction') && !r2.includes('none')) rList.push(item.RestrictionTwo!.RestrictionText);
        extractedRestrictions = rList.length > 0 ? rList.join(', ') : 'None';
        
        // Normalization
        const condLower = roadCondition.toLowerCase();
        if (condLower.includes('closed') || condLower.includes('closed for winter') || condLower.includes('closed for the season')) {
          extractedStatus = condLower.includes('season') || condLower.includes('winter') ? 'SEASONAL_CLOSURE' : 'CLOSED';
        } else if (
          rList.length > 0 ||
          condLower.includes('chains required') ||
          condLower.includes('traction tires required') ||
          condLower.includes('oversize vehicles prohibited')
        ) {
          extractedStatus = 'RESTRICTED';
        } else {
          extractedStatus = 'OPEN';
        }
      } else {
        // No access code, fallback to public scraping
        console.log(`No WSDOT_API_ACCESS_CODE. Falling back to scraping ${pass.official_source_url}`);
        const response = await fetch(pass.official_source_url, { signal: AbortSignal.timeout(8000) });
        if (!response.ok) throw new Error(`Fallback HTTP error: ${response.status}`);
        const html = await response.text();
        
        const parsed = parseHtmlStatus(html, pass.pass_name);
        extractedStatus = parsed.status;
        extractedRestrictions = parsed.restrictions;
        extractedEvidence = `Scraped WSDOT HTML text: ${parsed.evidence}`;
        extractedConfidence = parsed.confidence;
        verificationStatus = parsed.status === 'UNKNOWN' ? 'NEEDS_VERIFICATION' : 'VERIFIED';
      }
    } else {
      // General HTML Scraper for non-WSDOT passes
      const response = await fetch(pass.official_source_url, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error(`HTML Scraper HTTP error: ${response.status}`);
      const html = await response.text();
      
      const parsed = parseHtmlStatus(html, pass.pass_name);
      extractedStatus = parsed.status;
      extractedRestrictions = parsed.restrictions;
      extractedEvidence = parsed.evidence;
      extractedConfidence = parsed.confidence;
      verificationStatus = parsed.status === 'UNKNOWN' ? 'NEEDS_VERIFICATION' : 'VERIFIED';
    }

    // Call AI to generate description
    extractedReason = await generateAISummary(
      pass.pass_name,
      extractedStatus,
      extractedEvidence,
      extractedRestrictions,
      env
    );

  } catch (error: any) {
    console.error(`Verification failed for pass ${pass.id}:`, error);
    
    // Safety failure handling: do NOT change status, keep previous status but mark NEEDS_VERIFICATION
    extractedStatus = pass.status;
    extractedReason = pass.status_reason || 'Verification check failed.';
    extractedRestrictions = pass.restrictions || 'None';
    extractedPublishedAt = pass.source_published_at || timestamp;
    extractedEvidence = `Error fetching official website: ${error.message || error}. Official status could not be reverified.`;
    extractedConfidence = 'LOW';
    verificationStatus = 'NEEDS_VERIFICATION';
  }

  // Determine scheduling interval based on status priority
  // High priority: checks every 6 hours
  // Inactive/Seasonal closure passes: check every 24 hours (less frequent to reduce traffic)
  if (extractedStatus === 'SEASONAL_CLOSURE') {
    nextCheckIntervalHours = 24; 
  } else {
    nextCheckIntervalHours = 6; // Standard test pass priority
  }
  
  const nextCheckAt = new Date(Date.now() + nextCheckIntervalHours * 60 * 60 * 1000).toISOString();

  // Check for status changes
  const statusChanged = pass.status !== extractedStatus;
  const lastStatusChangeAt = statusChanged ? timestamp : pass.last_status_change_at;

  // Update passes database
  await db
    .prepare(
      `UPDATE passes SET
        status = ?,
        status_reason = ?,
        restrictions = ?,
        last_checked_at = ?,
        last_status_change_at = ?,
        source_published_at = ?,
        source_evidence = ?,
        source_url = ?,
        verification_status = ?,
        confidence = ?,
        next_check_at = ?
      WHERE id = ?`
    )
    .bind(
      extractedStatus,
      extractedReason,
      extractedRestrictions,
      timestamp,
      lastStatusChangeAt,
      extractedPublishedAt,
      extractedEvidence,
      pass.official_source_url,
      verificationStatus,
      extractedConfidence,
      nextCheckAt,
      pass.id
    )
    .run();

  // If status changed, insert record into status history
  if (statusChanged) {
    const changeMessage = `${pass.pass_name} was updated to ${extractedStatus} after the latest official road-status information was verified.`;
    await db
      .prepare(
        `INSERT INTO status_history (
          pass_id, timestamp, status, reason, source, source_url
        ) VALUES (?, ?, ?, ?, ?, ?)`
      )
      .bind(
        pass.id,
        timestamp,
        extractedStatus,
        extractedReason || changeMessage,
        pass.official_authority,
        pass.official_source_url
      )
      .run();
  }

  return {
    success: verificationStatus === 'VERIFIED',
    statusChanged,
    newStatus: extractedStatus
  };
}
