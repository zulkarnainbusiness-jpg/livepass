import { KeywordItem, KeywordCluster, SearchIntent } from '../../types/seoTypes';

export class ClusteringEngine {
  /**
   * Automatically groups keywords into semantic topic clusters and produces content gap blueprints.
   */
  static clusterKeywords(keywords: KeywordItem[], seedKeyword: string, targetUrl: string): KeywordCluster[] {
    const clustersMap = new Map<string, KeywordItem[]>();

    const getClusterKey = (kw: string): string => {
      const lower = kw.toLowerCase();
      if (lower.includes('webcam') || lower.includes('camera') || lower.includes('cam') || lower.includes('cctv')) {
        return 'Webcam & Live Cameras';
      }
      if (lower.includes('weather') || lower.includes('snow') || lower.includes('forecast') || lower.includes('temp') || lower.includes('blizzard')) {
        return 'Weather, Snow & Alpine Forecast';
      }
      if (lower.includes('open') || lower.includes('closed') || lower.includes('opening date') || lower.includes('closing date') || lower.includes('when does') || lower.includes('season')) {
        return 'Seasonal Status & Opening Dates';
      }
      if (lower.includes('elevation') || lower.includes('map') || lower.includes('direction') || lower.includes('route') || lower.includes('highway') || lower.includes('how high') || lower.includes('where is')) {
        return 'Elevation, Route & Travel Guide';
      }
      return 'Road Conditions & Travel Alerts';
    };

    // Group keywords
    for (const item of keywords) {
      const key = getClusterKey(item.keyword);
      if (!clustersMap.has(key)) {
        clustersMap.set(key, []);
      }
      clustersMap.get(key)!.push(item);
    }

    const resultClusters: KeywordCluster[] = [];

    clustersMap.forEach((kws, clusterTitle) => {
      // Sort keywords by opportunity score descending
      kws.sort((a, b) => b.opportunityScore - a.opportunityScore);
      const primary = kws[0]?.keyword || `${seedKeyword} ${clusterTitle}`;

      let totalVol = 0;
      let totalDiff = 0;
      let totalOpp = 0;

      for (const k of kws) {
        if (typeof k.searchVolume === 'number') totalVol += k.searchVolume;
        totalDiff += k.difficulty;
        totalOpp += k.opportunityScore;
      }

      const avgDifficulty = Math.round(totalDiff / (kws.length || 1));
      const avgOpportunity = Math.round(totalOpp / (kws.length || 1));

      // Determine intent & page type
      let intent: SearchIntent = 'Real-Time Intent';
      let pageType: KeywordCluster['recommendedPageType'] = 'Live Status Page';
      let contentGaps: string[] = [];
      let h1 = `${seedKeyword} Road Conditions & Live Travel Status`;
      let h2s: string[] = [];
      let faqs: { question: string; answer: string }[] = [];

      if (clusterTitle === 'Webcam & Live Cameras') {
        intent = 'Real-Time Intent';
        pageType = 'Webcam & Cameras Page';
        contentGaps = [
          'Live image snapshot auto-refreshing every 2 minutes',
          'Milepost and directional camera angles (Eastbound vs Westbound)',
          'Clearance agency attribution (WSDOT / Caltrans / CDOT / BRO)',
          'Traction tire and chain requirement indicator directly next to cameras'
        ];
        h1 = `${seedKeyword} Live Webcams & Summit Cameras`;
        h2s = [
          `Current Live Camera Feeds on ${seedKeyword}`,
          `Highway Milepost Camera Locations & Viewing Angles`,
          `Weather & Road Conditions at Camera Checkpoints`,
          `How Frequently do ${seedKeyword} Cameras Refresh?`
        ];
        faqs = [
          {
            question: `Where can I see live webcams for ${seedKeyword}?`,
            answer: `You can view live traffic and summit cameras for ${seedKeyword} directly on LivePassWatch, refreshed automatically every 2-5 minutes from official highway transportation feeds.`
          },
          {
            question: `Are ${seedKeyword} cameras working 24/7?`,
            answer: `Yes, official highway cameras operate continuously. During heavy blizzards or severe weather, camera lenses may experience temporary snow accumulation.`
          }
        ];
      } else if (clusterTitle === 'Weather, Snow & Alpine Forecast') {
        intent = 'Informational';
        pageType = 'Weather & Snow Guide';
        contentGaps = [
          '5-day summit weather forecast with high/low temperatures',
          'Current snow depth in both centimeters and inches',
          'Wind speed, direction, and mountain wind chill warnings',
          'Traction tire advisories correlated with snowfall'
        ];
        h1 = `${seedKeyword} Weather Forecast, Snow Depth & Wind`;
        h2s = [
          `Today's Mountain Weather Forecast at ${seedKeyword} Summit`,
          `Current Snow Depth & Pavement Conditions`,
          `Wind Speed & Alpine Winter Advisories`,
          `5-Day Weather Outlook for Travelers`
        ];
        faqs = [
          {
            question: `How much snow is currently on ${seedKeyword}?`,
            answer: `Check the real-time snow depth tracker on LivePassWatch for current summit snow depth, roadside accumulation, and winter traction tire rules.`
          },
          {
            question: `What is the winter temperature at ${seedKeyword} summit?`,
            answer: `Temperatures at the summit crest can drop significantly below freezing during winter months. Check the live summit thermometer before driving.`
          }
        ];
      } else if (clusterTitle === 'Seasonal Status & Opening Dates') {
        intent = 'Travel/Planning';
        pageType = 'FAQ / Seasonal Guide';
        contentGaps = [
          'Exact typical seasonal closure and spring reopening dates',
          'Winter gate closure milepost coordinates',
          'Historical opening timeline over past 5 years',
          'Alternative year-round bypass routes when closed'
        ];
        h1 = `When Does ${seedKeyword} Open and Close? Seasonal Timeline`;
        h2s = [
          `Is ${seedKeyword} Open Today?`,
          `Typical Seasonal Opening & Closing Windows`,
          `Historical Opening Dates and Snow Removal Operations`,
          `Best Alternative Routes When ${seedKeyword} is Closed`
        ];
        faqs = [
          {
            question: `Is ${seedKeyword} open year-round?`,
            answer: `Depending on elevation and snowfall, some high mountain passes undergo scheduled seasonal winter closures while others are maintained 24/7 with snowplows.`
          },
          {
            question: `When does ${seedKeyword} usually reopen in the spring?`,
            answer: `Spring reopening depends on snowpack clearance by transportation maintenance crews, typically occurring between May and June.`
          }
        ];
      } else if (clusterTitle === 'Elevation, Route & Travel Guide') {
        intent = 'Travel/Planning';
        pageType = 'Travel / Directions Guide';
        contentGaps = [
          'Exact summit elevation in both feet and meters',
          'Connecting cities, origin-to-destination mileage and driving duration',
          'Key waypoints and rest areas along the highway corridor',
          'Nearby mountain passes comparison'
        ];
        h1 = `${seedKeyword} Elevation, Highway Route & Travel Guide`;
        h2s = [
          `Summit Elevation & Geographic Coordinates`,
          `Route Overview: Connecting Cities & Driving Time`,
          `Key Highway Waypoints, Rest Stops & Mileposts`,
          `Nearby Mountain Passes & Regional Scenic Byways`
        ];
        faqs = [
          {
            question: `What is the summit elevation of ${seedKeyword}?`,
            answer: `The summit crest reaches high altitude across the mountain range, offering panoramic views and alpine pass conditions.`
          },
          {
            question: `What highway passes over ${seedKeyword}?`,
            answer: `The highway corridor serves as a primary transportation artery across the mountain range.`
          }
        ];
      } else {
        // Road Conditions & Travel Alerts
        intent = 'Real-Time Intent';
        pageType = 'Live Status Page';
        contentGaps = [
          'Instant status badge: OPEN (Green), CAUTION (Yellow), CLOSED (Red)',
          'Real-time chain laws & traction requirements (Code 15 / R-1 / R-2)',
          'Direct official transportation department source links',
          'Interactive road conditions map with live traffic layers'
        ];
        h1 = `${seedKeyword} Road Conditions, Live Status & Restrictions`;
        h2s = [
          `Current ${seedKeyword} Status: Open, Caution, or Closed`,
          `Tire Chain & Traction Requirements in Effect`,
          `Live Road Hazard & Maintenance Bulletins`,
          `Official Transportation Department Data Sources`
        ];
        faqs = [
          {
            question: `Are tire chains required on ${seedKeyword} right now?`,
            answer: `Tire chain requirements are updated in real-time on LivePassWatch. Check the restriction badge above before ascending the summit corridor.`
          },
          {
            question: `How often are ${seedKeyword} road conditions updated?`,
            answer: `LivePassWatch aggregates official highway department feeds 24/7 to provide continuous road status, plowing updates, and incident alerts.`
          }
        ];
      }

      resultClusters.push({
        id: `cluster-${clusterTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: `${seedKeyword} ${clusterTitle}`,
        seedKeyword,
        intent,
        primaryKeyword: primary,
        keywords: kws,
        totalVolume: totalVol,
        avgDifficulty,
        avgOpportunity,
        recommendedPageType: pageType,
        targetUrl,
        contentGapTopics: contentGaps,
        headingOutline: {
          h1,
          h2s,
          faqs
        }
      });
    });

    // Sort clusters by total volume descending
    resultClusters.sort((a, b) => b.totalVolume - a.totalVolume);

    return resultClusters;
  }
}
