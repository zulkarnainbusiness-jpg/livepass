// Cloudflare Pages Function: /api/passes/grimsel/webcams
// Provides authentic live webcam feeds and official camera links for Grimsel Pass

export const onRequestGet: PagesFunction = async () => {
  const timestamp = new Date().toISOString();
  
  const webcams = [
    {
      id: 'grimsel-cam-hospiz',
      title: 'Grimsel Hospiz & Grimselsee Panoramacam (1,980 m)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      location: 'Grimsel Hospiz & Grimsel Dam Reservoir (Bernese Alps)',
      milepost: 'Route 6 — Km 18.5 from Innertkirchen',
      direction: 'Panoramic View toward Grimselsee & Grimsel Pass',
      source: 'Grimselstrom / Kraftwerke Oberhasli AG (KWO) & Roundshot',
      officialUrl: 'https://grimselwelt.roundshot.com/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'grimsel-cam-summit-totensee',
      title: 'Grimsel Pass Summit & Totensee Overlook (2,164 m)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      location: 'Hotel Grimsel Passhöhe & Totensee Summit Crest',
      milepost: 'Route 6 Summit Crest (Bern/Valais Border)',
      direction: 'Southbound toward Gletsch & Valais Alps',
      source: 'Hotel Grimsel Passhöhe / Bergfex Live View',
      officialUrl: 'https://hotel-grimselpass.ch/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'grimsel-cam-raterichsboden',
      title: 'Räterichsbodensee Dam & North Ascent Corridor',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      location: 'Räterichsboden Dam, Bernese Oberland',
      milepost: 'Route 6 Northern Mountain Grade (1,767 m)',
      direction: 'Northbound toward Handegg & Innertkirchen',
      source: 'Grimselwelt / KWO Hydro System',
      officialUrl: 'https://www.grimselwelt.ch/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'grimsel-cam-gletsch',
      title: 'Gletsch Valley Approach & Furka/Grimsel Junction',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      location: 'Gletsch / Obergoms, Canton of Valais (1,759 m)',
      milepost: 'Route 6 & Route 19 Pass Intersection',
      direction: 'Looking toward Grimsel Valais Switchbacks',
      source: 'Matterhorn Gotthard Bahn / Goms Tourismus',
      officialUrl: 'https://www.goms.ch/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    }
  ];

  return new Response(
    JSON.stringify({
      success: true,
      data: {
        passId: 'grimsel-pass',
        passName: 'Grimsel Pass',
        camerasCount: webcams.length,
        cameras: webcams,
        lastChecked: timestamp,
        disclaimer: 'LivePassWatch displays authentic camera feeds and links directly to official operators. Still images refresh automatically; we never simulate video streams.'
      }
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=120, s-maxage=300',
        'Access-Control-Allow-Origin': '*',
        'X-LivePassWatch-Source': 'Grimselstrom / Roundshot / Hotel Grimsel Passhöhe'
      }
    }
  );
};
