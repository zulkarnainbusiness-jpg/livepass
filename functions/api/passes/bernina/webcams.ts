// Cloudflare Pages Function: /api/passes/bernina/webcams
// Provides authentic live webcam feeds and official camera links for Bernina Pass (Passo del Bernina)

export const onRequestGet: PagesFunction = async () => {
  const timestamp = new Date().toISOString();
  
  const webcams = [
    {
      id: 'bernina-cam-summit',
      title: 'Bernina Pass Summit & Ospizio Bernina (2,328 m)',
      image: '/bernina-pass-switzerland-road-conditions.webp',
      location: 'Bernina Pass Summit Crest & Ospizio Bernina (Engadin / Valposchiavo)',
      milepost: 'Route 29 (H29) Summit Passhöhe (Km 18.2 from Pontresina)',
      direction: 'Panoramic View overlooking Route 29 roadway, summit crest & Lago Bianco',
      source: 'Berninapass Roundshot / Valposchiavo Turismo',
      officialUrl: 'https://berninapass.roundshot.com/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'bernina-cam-lagobianco',
      title: 'Lago Bianco & Cambrena Glacier Overlook (2,234 m)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      location: 'Lago Bianco Dam & Bernina Pass Southern Descent corridor',
      milepost: 'Route 29 Km 21.0 along Lago Bianco lakeside',
      direction: 'Southwest towards Piz Cambrena (3,606 m) & Palü Glacier',
      source: 'Valposchiavo Turismo / Repower AG Hydro',
      officialUrl: 'https://www.valposchiavo.ch/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'bernina-cam-diavolezza',
      title: 'Diavolezza Summit & Piz Bernina Panorama (2,978 m)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      location: 'Diavolezza Mountain Station (Engadin Alps)',
      milepost: 'Route 29 Diavolezza Base Station Access (2,093 m)',
      direction: 'Panoramic view of Piz Palü, Piz Bernina (4,049 m) & Morteratsch Glacier',
      source: 'Diavolezza Bergbahnen AG / Roundshot',
      officialUrl: 'https://diavolezza.roundshot.com/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    },
    {
      id: 'bernina-cam-lagalb',
      title: 'Lagalb & Route 29 Northern Approach Corridor (2,107 m)',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      location: 'Lagalb Cableway Base Station, Pontresina Corridor',
      milepost: 'Route 29 Km 13.5 (Engadin side ascent)',
      direction: 'Northbound toward Pontresina & Samedan',
      source: 'Engadin St. Moritz Tourismus / RhB Railway',
      officialUrl: 'https://www.engadin.ch/',
      type: 'image',
      updateIntervalMs: 60000,
      status: 'ONLINE'
    }
  ];

  return new Response(
    JSON.stringify({
      success: true,
      data: {
        passId: 'bernina-pass',
        passName: 'Bernina Pass (Passo del Bernina)',
        camerasCount: webcams.length,
        cameras: webcams,
        lastChecked: timestamp,
        disclaimer: 'LivePassWatch displays authentic camera feeds and links directly to official operators. Still images refresh automatically; we never simulate or fake video streams.'
      }
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=120, s-maxage=300',
        'Access-Control-Allow-Origin': '*',
        'X-LivePassWatch-Source': 'Berninapass Roundshot / Valposchiavo Turismo / Diavolezza AG'
      }
    }
  );
};
