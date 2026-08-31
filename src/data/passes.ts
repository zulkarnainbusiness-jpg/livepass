import { MountainPass } from '../types';

export const passesData: MountainPass[] = [
  {
    "id": "snoqualmie-pass",
    "slug": "snoqualmie-pass",
    "name": "Snoqualmie Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "I-90",
    "elevationFt": 3022,
    "elevationM": 921,
    "coordinates": {
      "lat": 47.4243,
      "lng": -121.4137
    },
    "status": "OPEN",
    "statusDetail": "to all vehicles",
    "lastUpdated": "5 minutes ago",
    "description": "Snoqualmie Pass is a major mountain pass in the Cascade Range of Washington state, located on Interstate 90. It connects the Snoqualmie Valley with the central Cascade region and serves as the primary east-west transport corridor across the Cascades.",
    "image": "/snoqualmie-pass.jpg",
    "weather": {
      "tempF": 34,
      "tempC": 1,
      "condition": "Overcast & Light Flurries",
      "icon": "cloud-snow"
    },
    "snowDepth": {
      "depthCm": 15,
      "depthIn": 6,
      "condition": "Packed"
    },
    "wind": {
      "speedKmh": 8,
      "speedMph": 5,
      "direction": "NW",
      "description": "Light Breeze"
    },
    "roadCondition": "Bare and wet with scattered slush patches in higher summit lanes. Traction tires advised for freight vehicles.",
    "chainRequirement": "No restrictions for passenger vehicles. Traction tires advised for commercial vehicles.",
    "cameras": [
      {
        "id": "snoq-52",
        "title": "Snoqualmie Summit",
        "image": "https://images.wsdot.wa.gov/sc/090VC05200.jpg",
        "milepost": "MP 52",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-53-4",
        "title": "East Snoqualmie Summit",
        "image": "https://images.wsdot.wa.gov/sc/090VC05340.jpg",
        "milepost": "MP 53.4",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-54-5",
        "title": "Hyak Hill",
        "image": "https://images.wsdot.wa.gov/sc/090VC05450.jpg",
        "milepost": "MP 54.5",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-55-1",
        "title": "Hyak",
        "image": "https://images.wsdot.wa.gov/sc/090VC05510.jpg",
        "milepost": "MP 55.1",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-56-88",
        "title": "Rocky Run Creek",
        "image": "https://images.wsdot.wa.gov/sc/090VC05688.jpg",
        "milepost": "MP 56.88",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-57-7",
        "title": "Old Keechelus Snow Shed",
        "image": "https://images.wsdot.wa.gov/sc/090VC05770.jpg",
        "milepost": "MP 57.7",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-58-2",
        "title": "Avalanche Bridge",
        "image": "https://images.wsdot.wa.gov/sc/090VC05820.jpg",
        "milepost": "MP 58.2",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-59-3",
        "title": "Slide Curve",
        "image": "https://images.wsdot.wa.gov/sc/090VC05930.jpg",
        "milepost": "MP 59.3",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      },
      {
        "id": "snoq-59-9",
        "title": "Resort Creek",
        "image": "https://images.wsdot.wa.gov/sc/090VC05990.jpg",
        "milepost": "MP 59.9",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "8 min ago",
        "distanceKm": 48
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "12 min ago",
        "distanceKm": 62
      },
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR-410",
        "status": "OPEN",
        "elevationFt": 5410,
        "lastUpdated": "15 min ago",
        "distanceKm": 54
      },
      {
        "id": "white-pass",
        "slug": "white-pass",
        "name": "White Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-12",
        "status": "OPEN",
        "elevationFt": 4544,
        "lastUpdated": "15 min ago",
        "distanceKm": 78
      }
    ],
    "overview": {
      "openedYear": 1930,
      "lengthMiles": 66,
      "lengthKm": 106,
      "annualSnowfallIn": 623,
      "annualSnowfallM": 15.8,
      "summary": "Snoqualmie Pass is a mountain pass in the Cascade Range of Washington state, carrying Interstate 90 through the Snoqualmie National Forest. It is the lowest elevation pass crossing the Cascades in Washington and remains open year-round with comprehensive WSDOT maintenance crews."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Overcast & Flurries",
        "tempHighF": 36,
        "tempLowF": 28,
        "icon": "cloud-snow"
      },
      {
        "day": "Tonight",
        "condition": "Light Snow Showers",
        "tempHighF": 28,
        "tempLowF": 24,
        "icon": "cloud-snow"
      },
      {
        "day": "Tomorrow",
        "condition": "Partly Sunny",
        "tempHighF": 39,
        "tempLowF": 27,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Showers",
        "tempHighF": 42,
        "tempLowF": 31,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 4",
        "condition": "Mostly Cloudy",
        "tempHighF": 40,
        "tempLowF": 30,
        "icon": "cloud"
      },
      {
        "day": "Day 5",
        "condition": "Sunny & Clear",
        "tempHighF": 45,
        "tempLowF": 32,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "I-90 Snoqualmie Pass Road Conditions & Cameras",
        "url": "https://wsdot.wa.gov/travel/mountain-passes/snoqualmie-pass"
      },
      {
        "name": "National Weather Service (NWS Seattle)",
        "type": "Cascade Mountain Pass Weather & Winter Advisories",
        "url": "https://www.weather.gov/sew/"
      },
      {
        "name": "Northwest Avalanche Center (NWAC)",
        "type": "Cascade Zone Avalanche Danger Bulletins",
        "url": "https://nwac.us/"
      }
    ],
    "quickFacts": {
      "state": "Washington, United States",
      "mountainRange": "Cascade Range (Central Cascades)",
      "elevationSummary": "3,022 ft / 921 m above sea level",
      "connects": "Seattle & Puget Sound with Ellensburg, Yakima & Spokane",
      "nearestTown": "North Bend (28 mi west) • Cle Elum (25 mi east)",
      "roadType": "Interstate 90 (I-90) — Major Multi-Lane Freeway",
      "bestTime": "Year-round (Summer hiking/scenic, Winter skiing/snowboarding)",
      "highlight": "Washington's primary east-west transport corridor across the Cascades, carrying over 30,000 vehicles daily."
    },
    "routeDetails": {
      "distanceKm": 172,
      "distanceMiles": 107,
      "duration": "1.5 – 2 hours (Seattle to Ellensburg via I-90)",
      "origin": "Seattle, WA (Elevation: 175 ft)",
      "destination": "Ellensburg, WA (Elevation: 1,542 ft)",
      "waypoints": [
        "Seattle / Bellevue — Metro starting area",
        "Issaquah (MP 17) — Foothills gateway",
        "North Bend (MP 31) — Last major western town before ascent",
        "Tinkham Road / Denny Creek (MP 47) — Alpine approach",
        "Snoqualmie Summit (MP 52, 3,022 ft) — Pass Crest & Ski Resorts",
        "Hyak / Keechelus Lake (MP 54-59) — Snowshed and wildlife overcrossing",
        "Cabin Creek (MP 63) — Easton approach",
        "Cle Elum (MP 84) — First major eastern slope city",
        "Ellensburg (MP 109) — Junction with I-82 & US-97"
      ]
    },
    "faqs": [
      {
        "question": "Are tire chains required on Snoqualmie Pass right now?",
        "answer": "Currently, chains are not required for standard passenger vehicles. Commercial vehicles and heavy trucks are advised to carry traction devices during winter weather advisories."
      },
      {
        "question": "How frequently is Snoqualmie Pass plowed during heavy snowfall?",
        "answer": "WSDOT operates continuous 24/7 snowplow rotations during storms, clearing lanes, applying liquid de-icer, and monitoring avalanche chutes above the snowshed."
      },
      {
        "question": "What is the highest elevation along the I-90 corridor?",
        "answer": "The summit elevation is 3,022 feet (921 meters) above sea level at Milepost 52."
      },
      {
        "question": "Where can I find live camera feeds for Snoqualmie Pass?",
        "answer": "You can view real-time webcam feeds directly on this page under the Live Camera section, updated every 2-5 minutes from official WSDOT camera feeds."
      }
    ],
    "isPopular": true
  },
  {
    "id": "north-cascades-pass",
    "slug": "north-cascades-pass",
    "name": "North Cascades Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "SR 20 (North Cascades Highway)",
    "elevationFt": 5477,
    "elevationM": 1669,
    "coordinates": {
      "lat": 48.5241,
      "lng": -120.6547
    },
    "status": "OPEN",
    "statusDetail": "SR 20 North Cascades Highway open to all traffic — Seasonal daylight travel across Washington Pass (5,477 ft). Road clear. No traction requirements.",
    "lastUpdated": "8 minutes ago",
    "description": "North Cascades Pass (traversed by the North Cascades Highway / SR 20) crosses the Cascade Range in northern Washington State, reaching its peak elevation of 5,477 feet (1,669 m) at Washington Pass. Renowned for dramatic alpine peaks, deep glacial valleys, and proximity to North Cascades National Park, SR 20 connects the Skagit Valley on the west (Sedro-Woolley / Marblemount) with the Methow Valley on the east (Winthrop / Twisp). Because of extreme winter snowfall and avalanche hazards on the high avalanche chutes above Washington Pass, SR 20 closes annually between late autumn and late spring, with WSDOT handling annual clearing operations.",
    "image": "/north-cascades-pass.jpg",
    "weather": {
      "tempF": 58,
      "tempC": 14,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "NW",
      "description": "Light Mountain Breeze"
    },
    "roadCondition": "Pavement bare and dry throughout the SR 20 corridor across Washington Pass and Rainy Pass. No traction requirements, chain restrictions, or lane closures in effect. Standard seasonal operations apply — high-elevation weather can change rapidly.",
    "chainRequirement": "No traction requirements currently in effect for passenger or commercial vehicles. During shoulder-season or early-season snow events, WSDOT may post traction tire or chain requirements for high-altitude passes.",
    "cameras": [
      {
        "id": "nc-cam-1",
        "title": "Washington Pass Webcam — SR 20 Summit (MP 163)",
        "image": "https://images.wsdot.wa.gov/sc/020VC16300.jpg",
        "milepost": "MP 163",
        "direction": "Eastbound toward Winthrop & Liberty Bell",
        "location": "SR 20 Washington Pass Summit (5,477 ft) — North Cascades",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/north-cascades-highway"
      },
      {
        "id": "nc-cam-2",
        "title": "Rainy Pass Webcam — SR 20 Corridor (MP 157)",
        "image": "https://images.wsdot.wa.gov/sc/020VC15700.jpg",
        "milepost": "MP 157",
        "direction": "Westbound toward Marblemount",
        "location": "SR 20 Rainy Pass Area (4,875 ft) — Pacific Crest Trail Crossing",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/north-cascades-highway"
      }
    ],
    "nearbyPasses": [
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "10 min ago",
        "distanceKm": 145
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 210
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "15 min ago",
        "distanceKm": 180
      },
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 410",
        "status": "OPEN",
        "elevationFt": 5430,
        "lastUpdated": "12 min ago",
        "distanceKm": 250
      },
      {
        "id": "cayuse-pass",
        "slug": "cayuse-pass",
        "name": "Cayuse Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 123",
        "status": "OPEN",
        "elevationFt": 4694,
        "lastUpdated": "12 min ago",
        "distanceKm": 260
      }
    ],
    "overview": {
      "openedYear": 1972,
      "lengthMiles": 75,
      "lengthKm": 120,
      "annualSnowfallIn": 480,
      "annualSnowfallM": 12.2,
      "summary": "The North Cascades Highway (SR 20) is one of America’s premier mountain scenic byways and the northernmost highway crossing of the Cascade Range in Washington State. Opened in 1972 after decades of construction, the highway traverses rugged alpine peaks, dramatic granite towers like Liberty Bell Mountain, and vast pristine wilderness bordering North Cascades National Park. Reaching its highest elevation at Washington Pass (5,477 ft / 1,669 m), the road is subject to extreme winter snowfall and over 30 active avalanche paths. As a result, WSDOT closes the pass each winter between November and May, deploying heavy plow equipment each spring for clearance."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Mid-to-late November",
      "typicalReopening": "Early-to-mid May",
      "description": "The North Cascades Highway (SR 20) shuts down annually for the winter season when heavy snow accumulation and high avalanche hazard make high-altitude plowing unsafe. The winter closure gate is typically set between Milepost 134 (Ross Dam trailhead) on the west side and Milepost 171 (Silver Star gate) on the east side. WSDOT spring clearing operations typically begin in late March or April, with snow depths at Washington Pass often exceeding 20 feet."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 60,
        "tempLowF": 42,
        "icon": "cloud-sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Clear",
        "tempHighF": 64,
        "tempLowF": 44,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered High Clouds",
        "tempHighF": 61,
        "tempLowF": 41,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Mostly Sunny",
        "tempHighF": 65,
        "tempLowF": 45,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Mild Mountain Breeze",
        "tempHighF": 67,
        "tempLowF": 47,
        "icon": "wind"
      }
    ],
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Currently Open — Seasonal summer operations in effect",
      "expectedOpeningWindow": "Early to Mid-May (typical target)",
      "closingWindow": "Mid-to-late November (first major winter storm)",
      "clearanceAgency": "Washington State Department of Transportation (WSDOT Area 2 & Avalanche Team)",
      "notes": "WSDOT determines opening and closing dates dynamically based on snowpack, avalanche risk, rockslide hazards, and road damage assessments. The median reopening date since 1972 is May 12. In 2026, WSDOT conducted extensive spring clearing and rockslide mitigation near Washington Pass before opening the corridor for normal travel."
    },
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "SR 20 North Cascades Highway Status & Mountain Passes",
        "url": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/north-cascades-highway"
      },
      {
        "name": "WSDOT Traffic Webcams",
        "type": "Live SR 20 Washington Pass & Rainy Pass Cameras",
        "url": "https://images.wsdot.wa.gov"
      },
      {
        "name": "National Park Service (NPS)",
        "type": "North Cascades National Park Road & Trail Alerts",
        "url": "https://www.nps.gov/noca/index.htm"
      },
      {
        "name": "NOAA / National Weather Service (NWS Seattle)",
        "type": "High-Elevation Mountain Pass Weather & Forecast",
        "url": "https://www.weather.gov/sew/"
      }
    ],
    "quickFacts": {
      "state": "Washington, United States",
      "mountainRange": "North Cascades Range (Northern Washington Cascades)",
      "elevationSummary": "5,477 ft / 1,669 m at Washington Pass Summit (Rainy Pass: 4,875 ft)",
      "connects": "Sedro-Woolley & Marblemount (Skagit Valley) with Winthrop & Twisp (Methow Valley)",
      "nearestTown": "Winthrop (30 mi east via SR 20) • Marblemount (45 mi west via SR 20)",
      "roadType": "Washington State Route 20 (SR 20) — Two-lane scenic mountain highway",
      "bestTime": "May through October (closed during winter months November to May)",
      "highlight": "Washington Pass Overlook with iconic view of Liberty Bell Mountain (7,720 ft) and Early Winters Spires."
    },
    "routeDetails": {
      "distanceKm": 120,
      "distanceMiles": 75,
      "duration": "1 hr 30 min (Marblemount to Winthrop)",
      "origin": "Marblemount, WA (SR 20 West Gate — Skagit County)",
      "destination": "Winthrop, WA (Methow Valley — Okanogan County)",
      "waypoints": [
        "Marblemount, WA — Western entrance, last major fuel and services before pass",
        "Newhalem / Diablo Lake — Seattle City Light hydro facilities, scenic overlook",
        "Ross Lake Overlook — High-elevation view of Ross Lake and Picket Range",
        "Rainy Pass (4,875 ft) — Pacific Crest Trail (PCT) crossing, Lake Ann trailhead",
        "Washington Pass Summit (5,477 ft) — High point of SR 20, Liberty Bell Mountain overlook",
        "Winthrop, WA — Historic western town, eastern end of North Cascades Highway corridor"
      ]
    },
    "distancesTable": [
      {
        "location": "Winthrop, WA",
        "distance": "30 mi / 48 km",
        "route": "SR 20 East",
        "notes": "Eastern gateway town — food, fuel, western-themed downtown"
      },
      {
        "location": "Marblemount, WA",
        "distance": "45 mi / 72 km",
        "route": "SR 20 West",
        "notes": "Western gateway town — last services on west side"
      },
      {
        "location": "Sedro-Woolley, WA",
        "distance": "90 mi / 145 km",
        "route": "SR 20 West",
        "notes": "Major Skagit Valley town connecting to I-5"
      },
      {
        "location": "Seattle, WA",
        "distance": "165 mi / 265 km",
        "route": "I-5 North to SR 20 East",
        "notes": "Approx. 3 hr 15 min drive via Burlington"
      },
      {
        "location": "Bellingham, WA",
        "distance": "115 mi / 185 km",
        "route": "I-5 South to SR 20 East",
        "notes": "Approx. 2 hr 15 min drive via Skagit Valley"
      },
      {
        "location": "Twisp, WA",
        "distance": "39 mi / 63 km",
        "route": "SR 20 East",
        "notes": "Methow Valley commercial hub"
      }
    ],
    "narrativeSections": [
      {
        "title": "Where Is North Cascades Pass / North Cascades Highway?",
        "content": "The North Cascades Pass corridor is officially known as the North Cascades Highway (Washington State Route 20 / SR 20). Traversing the rugged northern Cascades of Washington State, it connects Skagit County in the west (Sedro-Woolley and Marblemount) with Okanogan County in the east (Winthrop and Twisp). The road reaches its highest point at Washington Pass (5,477 ft / 1,669 m), with nearby Rainy Pass standing at 4,875 ft. GPS coordinates for Washington Pass summit: 48.5241° N, 120.6547° W."
      },
      {
        "title": "North Cascades Pass Elevation & Washington Pass High Point",
        "content": "While travelers often search for \"North Cascades Pass elevation\", the official highest geographic pass on SR 20 is Washington Pass, which reaches an elevation of 5,477 feet (1,669 meters) above sea level according to National Park Service and WSDOT records. Nearby Rainy Pass reaches 4,875 feet (1,486 m). Sitting under the towering granite walls of Liberty Bell Mountain (7,720 ft) and the Early Winters Spires, Washington Pass is the highest paved mountain pass on SR 20 and one of the highest in the Pacific Northwest."
      },
      {
        "title": "State Route 20 (SR 20) Highway Overview",
        "content": "Washington State Route 20 (SR 20) is the longest highway in Washington, spanning over 430 miles from Discovery Bay on the Olympic Peninsula to the Idaho state line. The 75-mile stretch through the North Cascades — designated as the North Cascades Highway — opened to vehicle traffic in September 1972. It is recognized nationally as a National Scenic Byway, passing through old-growth forests, turquoise glacial reservoir lakes (Diablo Lake and Ross Lake), and dramatic alpine mountain pass terrain."
      },
      {
        "title": "How to Get to North Cascades Pass",
        "content": "From the West (Seattle / Bellingham / I-5): Take I-5 to Exit 232 (Burlington / Sedro-Woolley). Head east on SR 20 through Sedro-Woolley, Concrete, and Marblemount. The highway begins its steep mountain climb after Marblemount, passing Diablo Lake, Rainy Pass, and ascending to Washington Pass summit. From the East (Winthrop / Spokane / Central WA): Take SR 20 west from Winthrop into the Methow Valley. The road climbs past Silver Star Mountain before ascending to Washington Pass. Always verify current road open/closed status before departure."
      },
      {
        "title": "North Cascades Pass Opening & Closing Dates — Historical WSDOT Record",
        "content": "Because SR 20 crosses over 30 severe avalanche paths near Washington Pass, WSDOT closes the highway every winter for crew and motorist safety. The median reopening date over 50+ years of WSDOT record-keeping is May 12. The earliest recorded opening was March 10, 2005, while the latest was June 14, 1974. Recent seasonal opening and closing dates:\n\n• 2025: Opened May 9 | Closed November 12\n• 2024: Opened May 17 | Closed November 20\n• 2023: Opened May 24 | Closed November 17\n• 2022: Opened May 10 | Closed November 8\n• 2021: Opened May 5 | Closed November 10\n• 2020: Opened May 12 | Closed November 13\n• 2019: Opened May 18 | Closed November 29\n\nDuring spring clearing, WSDOT snowplow crews use snowblowers and excavators to clear snow drifts that often exceed 20 to 30 feet at Washington Pass."
      },
      {
        "title": "North Cascades Pass Chain Requirements & Winter Driving",
        "content": "During the open season (May through November), chain restrictions are rarely posted on SR 20. However, high-elevation weather in the North Cascades can deteriorate rapidly in spring and autumn. When WSDOT posts traction or chain requirements during shoulder-season snow storms, all-season or winter tires (marked with M+S or 3-Peak Mountain Snowflake) are mandatory for passenger cars, and commercial vehicles must carry chains. During the winter closure period (typically mid-November to May), the highway is gated and closed to all motor vehicles between Marblemount and Mazama."
      }
    ],
    "customSeo": {
      "title": "North Cascades Pass Road Conditions, Open/Closed Status & Webcams | SR 20",
      "description": "Check live North Cascades Pass / Highway (SR 20) road conditions, open/closed status, WSDOT webcams, weather, snow depth, opening dates, elevation, and map for Washington Pass.",
      "h1": "North Cascades Pass Road Conditions, Open/Closed Status & Live Webcams"
    },
    "searchKeywords": [
      "north cascades pass opening date",
      "north cascades pass is open",
      "north cascades pass road conditions",
      "north cascades pass road status",
      "north cascades pass pass status report",
      "when does north cascades pass open",
      "north cascades pass closed",
      "north cascades pass is closed",
      "north cascades pass is it open today",
      "is north cascades pass closed today",
      "north cascades pass webcam",
      "north cascades pass live webcam",
      "north cascades pass cameras",
      "north cascades pass summit camera",
      "is north cascades pass open right now",
      "north cascades pass map",
      "north cascades pass weather today",
      "north cascades pass snow",
      "north cascades pass snow depth",
      "north cascades pass snow conditions",
      "north cascades pass elevation",
      "north cascades pass open",
      "north cascades pass when will open",
      "north cascades pass passes open",
      "north cascades pass closing date",
      "north cascades pass weather",
      "north cascades pass directions",
      "north cascades pass forecast",
      "north cascades pass chain requirements",
      "north cascades pass traction tires",
      "north cascades pass highway",
      "north cascades highway road conditions",
      "sr 20 road conditions",
      "washington pass webcam",
      "wsdot north cascades highway"
    ],
    "aliases": [
      "SR 20 North Cascades Highway",
      "Washington Pass",
      "Rainy Pass SR 20",
      "North Cascades Highway Pass",
      "Highway 20 Winter Closure"
    ],
    "faqs": [
      {
        "question": "Is North Cascades Pass open right now?",
        "answer": "North Cascades Pass (SR 20 / Washington Pass) is currently OPEN. The live status card at the top of this page displays real-time data from WSDOT. The highway is open seasonally from spring through late autumn. Because weather in the North Cascades can change quickly, check live road status before traveling."
      },
      {
        "question": "Is North Cascades Pass open today?",
        "answer": "Yes, North Cascades Pass (SR 20) is open for normal travel today. Current travel restrictions, weather updates, and live summit webcams are available in the status cards above."
      },
      {
        "question": "What are the current North Cascades Pass road conditions?",
        "answer": "Current road conditions show bare and dry pavement across Washington Pass and Rainy Pass on SR 20, with no chain restrictions or lane closures. Refer to the Road Conditions section above for live WSDOT updates."
      },
      {
        "question": "When does North Cascades Pass open?",
        "answer": "North Cascades Pass typically reopens in early-to-mid May. WSDOT plowing crews begin clearing operations in late March or April. The median opening date since 1972 is May 12, though exact opening depends on snowpack depth and avalanche clearing."
      },
      {
        "question": "What is the North Cascades Pass opening date?",
        "answer": "Historical opening dates for the North Cascades Highway (SR 20) have ranged from March 10 (2005) to June 14 (1974). Recent opening dates: 2025 opened May 9, 2024 opened May 17, 2023 opened May 24, 2022 opened May 10."
      },
      {
        "question": "When does North Cascades Pass close for winter?",
        "answer": "North Cascades Pass typically closes for winter in mid-to-late November following the first major heavy mountain snowfall. Recent closing dates: 2025 closed Nov 12, 2024 closed Nov 20, 2023 closed Nov 17."
      },
      {
        "question": "Is there a North Cascades Pass webcam?",
        "answer": "Yes! WSDOT operates live traffic cameras on SR 20 at Washington Pass Summit (MP 163) and Rainy Pass (MP 157). You can view live camera feeds directly in the Live Webcams section on this page."
      },
      {
        "question": "Where can I see the North Cascades Pass live webcam?",
        "answer": "You can view the live WSDOT Washington Pass camera on this page in the Live Webcams section above. The feed refreshes every 2 minutes with current pavement, visibility, and weather images."
      },
      {
        "question": "What is the elevation of North Cascades Pass?",
        "answer": "The official summit high point of the North Cascades Highway (SR 20) is Washington Pass at an elevation of 5,477 feet (1,669 meters) above sea level. Nearby Rainy Pass reaches 4,875 feet (1,486 m)."
      },
      {
        "question": "Where is North Cascades Pass?",
        "answer": "North Cascades Pass (SR 20) is located in northern Washington State, connecting Skagit County (Marblemount/Sedro-Woolley) in the west with Okanogan County (Winthrop/Twisp) in the east, passing through the North Cascades mountain range."
      },
      {
        "question": "What highway is North Cascades Pass on?",
        "answer": "North Cascades Pass is on Washington State Route 20 (SR 20), also known as the North Cascades Highway and designated as a National Scenic Byway."
      },
      {
        "question": "What are the snow conditions at North Cascades Pass?",
        "answer": "During summer months, pavement across Washington Pass is clear and bare. During winter closure (November to May), snow depths at Washington Pass summit frequently exceed 20 to 30 feet due to heavy Cascade snowfall."
      },
      {
        "question": "Does North Cascades Pass require chains?",
        "answer": "No chain requirements are currently in effect on SR 20. During spring and autumn shoulder season snowstorms, WSDOT may post traction tire or chain requirements for mountain passes."
      },
      {
        "question": "What is the weather at North Cascades Pass today?",
        "answer": "Current high-elevation weather at Washington Pass summit (5,477 ft) is displayed in the Weather section above, including temperature, wind speed, conditions, and a 5-day forecast."
      },
      {
        "question": "Is North Cascades Pass closed today?",
        "answer": "No, North Cascades Pass (SR 20) is currently OPEN for normal travel. If winter closure or emergency restrictions occur, the Live Status card above will update immediately with official WSDOT alerts."
      }
    ],
    "isPopular": true
  },
  {
    "id": "stevens-pass",
    "slug": "stevens-pass",
    "name": "Stevens Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "US 2",
    "elevationFt": 4061,
    "elevationM": 1238,
    "coordinates": {
      "lat": 47.7464,
      "lng": -121.0898
    },
    "status": "OPEN",
    "statusDetail": "US 2 open to traffic — Normal travel conditions with no active restrictions",
    "lastUpdated": "10 minutes ago",
    "description": "Stevens Pass is a primary year-round mountain pass at 4,061 ft (1,238 m) in Washington's Cascade Range, carrying US Route 2 between King/Snohomish County and Chelan County. It connects Puget Sound communities with Leavenworth and Wenatchee, and is home to the renowned Stevens Pass Mountain Resort at the summit crest.",
    "image": "/stevens-pass.webp",
    "weather": {
      "tempF": 48,
      "tempC": 9,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 18,
      "speedMph": 11,
      "direction": "WNW",
      "description": "Moderate Breeze"
    },
    "roadCondition": "Pavement bare and dry across the summit. No traction advisories or chain requirements in effect. WSDOT maintenance patrols actively monitoring the corridor.",
    "chainRequirement": "No restrictions for passenger vehicles or commercial trucks.",
    "cameras": [
      {
        "id": "stevens-cam-summit",
        "title": "Stevens Pass Summit (US 2 MP 64.3)",
        "image": "https://images.wsdot.wa.gov/nc/002vc06430.jpg",
        "milepost": "MP 64.3",
        "direction": "Eastbound / Westbound",
        "location": "US 2 Stevens Pass Summit",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 48
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "Just now",
        "distanceKm": 52
      },
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 410",
        "status": "OPEN",
        "elevationFt": 5430,
        "lastUpdated": "12 min ago",
        "distanceKm": 110
      },
      {
        "id": "white-pass",
        "slug": "white-pass",
        "name": "White Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-12",
        "status": "OPEN",
        "elevationFt": 4500,
        "lastUpdated": "20 min ago",
        "distanceKm": 140
      }
    ],
    "overview": {
      "openedYear": 1893,
      "lengthMiles": 52,
      "lengthKm": 84,
      "annualSnowfallIn": 460,
      "annualSnowfallM": 11.7,
      "summary": "Stevens Pass (4,061 ft / 1,238 m) traverses the crest of the Cascade Range in Washington on US Route 2, situated on the boundary between Mt. Baker-Snoqualmie National Forest to the west and Okanogan-Wenatchee National Forest to the east. Named after John Frank Stevens, the Great Northern Railway engineer who surveyed the route in 1889, the pass remains one of Washington's two major year-round east-west highway arteries alongside Interstate 90. During winter months, the summit receives an average of 460 inches of snowfall, making it a premier alpine destination at Stevens Pass Mountain Resort while requiring active WSDOT snow removal and avalanche control."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Storm Closures)",
      "typicalReopening": "Year-Round Operation",
      "description": "Unlike seasonal Cascade crossings, US 2 over Stevens Pass is maintained by WSDOT as a year-round highway. Temporary closures occur during severe winter blizzards, spinouts, or when WSDOT performs explosive avalanche control on unstable slide paths above the roadway."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 58,
        "tempLowF": 40,
        "icon": "cloud-sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Mountain Skies",
        "tempHighF": 45,
        "tempLowF": 38,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny",
        "tempHighF": 62,
        "tempLowF": 43,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered High Clouds",
        "tempHighF": 57,
        "tempLowF": 39,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Pleasant & Mild",
        "tempHighF": 60,
        "tempLowF": 41,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Mountain Breeze",
        "tempHighF": 63,
        "tempLowF": 44,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "WSDOT Mountain Passes",
        "type": "Highway Status & Road Reports",
        "url": "https://wsdot.wa.gov/travel/real-time/mountainpasses/stevens"
      },
      {
        "name": "WSDOT Traveler Information",
        "type": "Live Summit Camera (MP 64.3)",
        "url": "https://wsdot.com/travel/real-time/mountainpasses/stevens"
      },
      {
        "name": "NOAA / National Weather Service",
        "type": "Cascade Summit Mountain Weather",
        "url": "https://www.weather.gov"
      },
      {
        "name": "Stevens Pass Mountain Resort",
        "type": "Alpine Ski Area Operations",
        "url": "https://www.stevenspass.com"
      }
    ],
    "customSeo": {
      "title": "Stevens Pass Road Conditions, Weather & Live Camera | US 2",
      "description": "Check current Stevens Pass road conditions, pass status, weather, snow conditions and live cameras for US 2 in Washington before you travel."
    },
    "faqs": [
      {
        "question": "Is Stevens Pass open today?",
        "answer": "Yes, Stevens Pass on US 2 is currently OPEN to normal vehicular traffic with no active closures or chain restrictions. WSDOT operates 24/7 highway maintenance to keep the pass accessible year-round."
      },
      {
        "question": "What are the current Stevens Pass road conditions?",
        "answer": "Current road conditions on Stevens Pass report bare and dry pavement across the summit with unrestricted travel for all vehicles. During winter storm cycles, conditions can transition to compact snow and ice requiring traction tires or chains."
      },
      {
        "question": "What is the weather at Stevens Pass?",
        "answer": "Current weather at the 4,061 ft summit is partly cloudy with comfortable mountain temperatures and light westerly breezes. Check our 5-day summit forecast tab for upcoming temperature trends and precipitation."
      },
      {
        "question": "Does Stevens Pass have a live camera?",
        "answer": "Yes! WSDOT operates an official traffic camera at US 2 MP 64.3 directly at the Stevens Pass summit. The camera snapshot refreshes approximately every 2 minutes and can be viewed in the Live Camera section above with a manual \"Refresh Now\" option."
      },
      {
        "question": "Where can I see the Stevens Pass webcam?",
        "answer": "You can view the official WSDOT live summit camera directly on this page under the Live Camera section or by clicking the Cameras tab for expanded road views along the US 2 corridor."
      },
      {
        "question": "When does Stevens Pass open?",
        "answer": "Stevens Pass is a year-round paved highway on US 2 and does not undergo scheduled seasonal closures like Chinook Pass or North Cascades Highway. However, short temporary closures of several hours can occur for avalanche mitigation or storm clearing."
      },
      {
        "question": "When will Stevens Pass open for the ski season?",
        "answer": "Stevens Pass Mountain Resort typically opens for skiing and snowboarding in early to mid-December, depending on natural early-season snowpack and snowmaking temperatures. Highway US 2 remains open throughout regardless of ski resort opening dates."
      },
      {
        "question": "Is Stevens Pass closed?",
        "answer": "No, Stevens Pass is currently open. If severe blizzards, vehicle accidents, or avalanche hazard force a temporary closure, WSDOT gates the road at Skykomish (west) and Coles Corner / Leavenworth (east) until cleared."
      },
      {
        "question": "What highway goes over Stevens Pass?",
        "answer": "US Route 2 (US 2), also known as the Stevens Pass Highway, traverses Stevens Pass, connecting Everett, Monroe, and Gold Bar on the west side with Leavenworth, Cashmere, and Wenatchee on the east side."
      },
      {
        "question": "Where is Stevens Pass in Washington?",
        "answer": "Stevens Pass is located in the north-central Cascade Range of Washington State along the King, Snohomish, and Chelan county lines, approximately 78 miles east of Seattle and 35 miles west of Leavenworth."
      },
      {
        "question": "Is Stevens Pass open for skiing?",
        "answer": "Ski operations at Stevens Pass Mountain Resort run seasonally during the winter and early spring months (typically December through April). Check official resort operating hours for current lift status."
      },
      {
        "question": "What are the chain and traction requirements for Stevens Pass?",
        "answer": "When winter weather strikes, WSDOT may mandate \"Traction Tires Advised\", \"Traction Tires Required\" (all passenger vehicles must have rated winter tires or carry chains), or \"Chains Required on All Vehicles Except All-Wheel Drive\". Currently, no restrictions are in effect."
      }
    ],
    "isPopular": true
  },
  {
    "id": "donner-pass",
    "slug": "donner-pass",
    "name": "Donner Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "California",
    "highway": "I-80",
    "elevationFt": 7056,
    "elevationM": 2151,
    "coordinates": {
      "lat": 39.3156,
      "lng": -120.3283
    },
    "status": "OPEN",
    "statusDetail": "I-80 open to all vehicular traffic — Normal highway conditions across Donner Summit with no active chain controls",
    "lastUpdated": "8 minutes ago",
    "description": "Donner Pass is a historic 7,056-foot (2,151 m) mountain pass in the northern Sierra Nevada of California. Carrying Interstate 80 (I-80) and the Union Pacific Railroad above Donner Lake and Truckee, it serves as the premier all-weather transportation artery connecting Northern California and the San Francisco Bay Area with Reno, Nevada and the transcontinental United States.",
    "image": "/donner-pass.jpg",
    "weather": {
      "tempF": 44,
      "tempC": 7,
      "condition": "Mostly Sunny & Clear",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 20,
      "speedMph": 12,
      "direction": "WSW",
      "description": "Moderate Mountain Breeze"
    },
    "roadCondition": "Pavement bare and dry across the summit. No active chain controls, lane restrictions, or major delays in effect. Caltrans maintenance patrols actively monitoring the I-80 corridor.",
    "chainRequirement": "No chain restrictions in effect (R-0). Motorists traveling during winter storm cycles should carry rated tire chains.",
    "cameras": [
      {
        "id": "donner-cam-summit",
        "title": "I-80 Donner Summit Overlook",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "I-80 MP 68.8",
        "direction": "Eastbound / Westbound",
        "location": "I-80 Donner Summit Rest Area",
        "source": "Caltrans",
        "updateIntervalMs": 60000,
        "officialUrl": "https://quickmap.dot.ca.gov/"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1844,
      "lengthMiles": 40,
      "lengthKm": 64,
      "annualSnowfallIn": 411,
      "annualSnowfallM": 10.4,
      "summary": "Donner Pass (elevation 7,056 ft / 2,151 m) crosses the crest of the northern Sierra Nevada in Nevada County and Placer County, California, just 9 miles west of Truckee and north of Lake Tahoe. Named after the ill-fated 1846 Donner Party, the pass holds immense historical significance as part of the emigrant California Trail, the route of the First Transcontinental Railroad (Central Pacific snowsheds), the historic Lincoln Highway (US 40), and today's modern Interstate 80. The summit receives an average of 411 inches (34.2 feet) of snow annually, making it one of the snowiest vehicular mountain passes in North America and requiring extensive Caltrans rotary snowplow operations and chain control checkpoints during winter storms."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Severe Sierra Blizzard Closures)",
      "typicalReopening": "Maintained 24/7 by Caltrans",
      "description": "Interstate 80 over Donner Pass is maintained by Caltrans as a vital year-round transcontinental highway. Temporary winter closures occur during extreme atmospheric river blizzards, multi-vehicle spinouts, zero-visibility whiteouts, or active avalanche control along the Donner Summit corridor."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Mild",
        "tempHighF": 52,
        "tempLowF": 34,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Sierra Sky",
        "tempHighF": 38,
        "tempLowF": 30,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny",
        "tempHighF": 56,
        "tempLowF": 36,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Passing Clouds",
        "tempHighF": 50,
        "tempLowF": 33,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Partly Cloudy",
        "tempHighF": 53,
        "tempLowF": 35,
        "icon": "cloud"
      },
      {
        "day": "Day 5",
        "condition": "Crisp Mountain Breeze",
        "tempHighF": 55,
        "tempLowF": 37,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "Caltrans District 3 / QuickMap",
        "type": "I-80 Road Conditions & Live CCTV",
        "url": "https://quickmap.dot.ca.gov/"
      },
      {
        "name": "California Highway Patrol (CHP Truckee)",
        "type": "Chain Controls & Traffic Alerts",
        "url": "https://www.chp.ca.gov"
      },
      {
        "name": "National Weather Service (NWS Reno)",
        "type": "Sierra Crest Weather & Winter Storm Warnings",
        "url": "https://www.weather.gov/rev"
      },
      {
        "name": "Sierra Avalanche Center",
        "type": "Backcountry Avalanche Forecasts",
        "url": "https://www.sierraavalanchecenter.org"
      }
    ],
    "customSeo": {
      "title": "Donner Pass Road Conditions, Donner Summit Elevation & Live Camera | I-80",
      "description": "Where is Donner Pass? Check Donner Summit elevation (7,056 ft), how long Donner Pass is, live I-80 road conditions, Caltrans webcams, and weather in California.",
      "h1": "Donner Pass – Road Conditions, Donner Summit Elevation & Live Camera"
    },
    "searchKeywords": [
      "where is donner pass",
      "how long is donner pass",
      "donner summit elevation",
      "donner pass road conditions",
      "i-80 donner pass webcam",
      "donner pass live camera",
      "donner summit road conditions",
      "donner pass elevation",
      "donner summit camera"
    ],
    "aliases": [
      "Donner Summit",
      "Donner Pass Road",
      "I-80 Donner Summit",
      "Donner Lake Pass"
    ],
    "faqs": [
      {
        "question": "Where is Donner Pass?",
        "answer": "Donner Pass is located in the northern Sierra Nevada of California along Interstate 80 (I-80), straddling Nevada County and Placer County. It is situated roughly 9 miles (14 km) west of Truckee, 15 miles northwest of Lake Tahoe, 40 miles west of Reno, Nevada, and 90 miles northeast of Sacramento, California."
      },
      {
        "question": "How long is Donner Pass?",
        "answer": "The mountain pass crossing over Donner Pass spans approximately 40 miles (64 km) along Interstate 80 between Cisco Grove / Nyack on the western slope and Truckee / Donner Lake on the eastern slope. In typical driving conditions, crossing the pass takes about 40 to 50 minutes at highway speeds, though severe winter snowstorms and chain control checkpoints can extend travel time."
      },
      {
        "question": "What is the Donner Summit elevation?",
        "answer": "The official highway summit elevation of Donner Pass on Interstate 80 is 7,056 feet (2,151 meters) above sea level. The historic Donner Pass road crest sits at 7,088 feet (2,160 meters), and the nearby Donner Peak rises to 8,056 feet (2,455 meters)."
      },
      {
        "question": "Is Donner Pass open today?",
        "answer": "Yes, Donner Pass on Interstate 80 is currently OPEN to all vehicular traffic with no active road closures or chain controls. Caltrans maintains 24/7 highway operations across the summit."
      },
      {
        "question": "What are the current Donner Pass road conditions?",
        "answer": "Current road conditions on Donner Pass report bare and dry pavement across the summit with normal traffic speeds on I-80. During winter storms, conditions can rapidly change to compact snow and ice requiring traction devices."
      },
      {
        "question": "Does Donner Pass have snow?",
        "answer": "Currently, the I-80 highway pavement is bare and dry. During the winter season, Donner Pass receives an average of 411 inches (over 34 feet) of snowfall annually, creating deep roadside snowbanks and world-class alpine skiing conditions in nearby Lake Tahoe resorts."
      },
      {
        "question": "Are chains required at Donner Pass?",
        "answer": "Currently, no chain requirements are in effect (R-0). When winter storms hit, Caltrans institutes chain control levels: R-1 (chains on towing vehicles/trucks), R-2 (chains on all vehicles except 4WD/AWD with snow tires on all 4 wheels), or R-3 (chains mandatory on all vehicles no exceptions)."
      },
      {
        "question": "What highway goes over Donner Pass?",
        "answer": "Interstate 80 (I-80) carries modern transcontinental traffic over Donner Summit. The historic two-lane Donner Pass Road (former US 40 and Lincoln Highway) also traverses the historic pass crest, offering stunning views of Donner Lake and the Rainbow Bridge."
      },
      {
        "question": "Where can I see Donner Pass live cameras?",
        "answer": "You can view the official Caltrans live summit camera snapshot directly in the Live Camera section above on this page, or click to access Caltrans QuickMap for multiple CCTV feeds across the I-80 corridor."
      },
      {
        "question": "What is the weather like at Donner Pass?",
        "answer": "Current weather at the 7,056 ft summit is mostly sunny and mild with temperatures around 44°F (7°C). Check our 5-day mountain forecast tab above for upcoming Sierra temperature trends and precipitation."
      },
      {
        "question": "Is Donner Pass open in winter?",
        "answer": "Yes, Interstate 80 over Donner Pass is maintained as a year-round highway. Caltrans operates heavy snow removal equipment, including rotary blowers, around the clock. Temporary closures occur only during severe blizzards, multi-car pileups, or avalanche mitigation."
      },
      {
        "question": "What is the history of Donner Pass?",
        "answer": "Named after the ill-fated Donner Party of 1846–1847 who were trapped by early winter blizzards, Donner Pass was also the route chosen for the First Transcontinental Railroad in the 1860s, the first transcontinental highway (Lincoln Highway / US 40), and modern Interstate 80."
      },
      {
        "question": "How far is Donner Pass from Lake Tahoe and Reno?",
        "answer": "Donner Pass is located approximately 15 miles northwest of Lake Tahoe (Tahoe City / North Lake Tahoe) and about 40 miles west of Reno, Nevada via Interstate 80."
      }
    ],
    "isPopular": true
  },
  {
    "id": "berthoud-pass",
    "slug": "berthoud-pass",
    "name": "Berthoud Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Colorado",
    "highway": "US-40",
    "elevationFt": 11307,
    "elevationM": 3446,
    "coordinates": {
      "lat": 39.7981,
      "lng": -105.7778
    },
    "status": "OPEN",
    "statusDetail": "to all vehicles",
    "lastUpdated": "10 minutes ago",
    "description": "Berthoud Pass is a high mountain pass in central Colorado in the Rocky Mountains. The pass traverses the Continental Divide on US Highway 40 between Empire and Winter Park.",
    "image": "/berthoud-pass-colorado.jpg",
    "weather": {
      "tempF": 22,
      "tempC": -5,
      "condition": "Sunny & Cold",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 110,
      "depthIn": 43,
      "condition": "Hard Packed"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "NW",
      "description": "Gentle Breeze"
    },
    "roadCondition": "Dry and clear with minor icy patches in shaded switchbacks.",
    "chainRequirement": "Colorado Passenger Vehicle Traction Law is currently in effect.",
    "cameras": [
      {
        "id": "berthoud-cam-1",
        "title": "US-40 Berthoud Summit Camera",
        "image": "/berthoud-pass-colorado.jpg",
        "timestamp": "May 12, 2025 - 08:45 AM",
        "location": "Continental Divide Summit"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1861,
      "lengthMiles": 30,
      "lengthKm": 48,
      "annualSnowfallIn": 380,
      "annualSnowfallM": 9.6,
      "summary": "Berthoud Pass provides direct access to the Fraser Valley and Winter Park Resort from the Denver metropolitan area."
    },
    "faqs": [
      {
        "question": "Does Berthoud Pass require snow chains in Colorado?",
        "answer": "During winter weather events, CDOT enforces Code 15 (Passenger Vehicle Traction Law), requiring 4WD/AWD with adequate tread or chains/snow socks."
      }
    ],
    "isPopular": true
  },
  {
    "id": "blewett-pass",
    "slug": "blewett-pass",
    "name": "Blewett Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "US-97",
    "elevationFt": 4102,
    "elevationM": 1250,
    "coordinates": {
      "lat": 47.3364,
      "lng": -120.5794
    },
    "status": "OPEN",
    "statusDetail": "Due to fire activity",
    "lastUpdated": "Just now",
    "description": "Blewett Pass traverses the Wenatchee Mountains in Washington on US Route 97, connecting Kittitas County with Chelan County.",
    "image": "/blewett-pass.jpg",
    "weather": {
      "tempF": 65,
      "tempC": 19,
      "condition": "Thunderstorms Expected",
      "icon": "cloud-lightning"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Dry"
    },
    "wind": {
      "speedKmh": 12,
      "speedMph": 7,
      "direction": "NNW",
      "description": "Light Air"
    },
    "roadCondition": "Closed due to fire activity. Northbound traffic stopped at MP 150, southbound traffic stopped at MP 178.",
    "chainRequirement": "No restrictions.",
    "cameras": [
      {
        "id": "blewett-cam-1",
        "title": "Blewett Pass Camera & Summit Live View (US 97 MP 163.8)",
        "image": "https://images.wsdot.wa.gov/sc/097VC16380.jpg",
        "milepost": "MP 163.8",
        "direction": "Northbound",
        "location": "US-97 Blewett Pass Summit",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 62
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US 2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "10 min ago",
        "distanceKm": 85
      }
    ],
    "overview": {
      "openedYear": 1879,
      "lengthMiles": 35,
      "lengthKm": 56,
      "annualSnowfallIn": 220,
      "annualSnowfallM": 5.6,
      "summary": "Blewett Pass (elevation 4,102 ft / 1,250 m) carries US Route 97 across the Wenatchee Mountains in Washington State. It provides a scenic and vital north-south link connecting Ellensburg and Interstate 90 in Kittitas County with Peshastin, Leavenworth, and Wenatchee in Chelan County through the Okanogan-Wenatchee National Forest."
    },
    "customSeo": {
      "title": "Blewett Pass Camera, Road Conditions & Weather | US-97 WSDOT",
      "description": "Check Blewett Pass camera live feeds, real-time US-97 road conditions, weather, elevation (4,102 ft), and travel alerts between Ellensburg and Wenatchee, WA.",
      "h1": "Blewett Pass – Live Camera, Road Conditions & Weather"
    },
    "searchKeywords": [
      "blewett pass camera",
      "blewett pass webcam",
      "blewett pass road conditions",
      "us 97 blewett pass weather",
      "blewett pass summit camera",
      "blewett pass elevation",
      "wsdot blewett pass camera"
    ],
    "aliases": [
      "Blewett Summit",
      "US 97 Blewett Pass",
      "Swauk Pass"
    ],
    "faqs": [
      {
        "question": "Is there a Blewett Pass camera?",
        "answer": "Yes! WSDOT operates an official live traffic camera at the Blewett Pass summit on US Route 97 near Milepost 163.8. The camera snapshot refreshes approximately every 2 minutes and can be viewed directly on this page."
      },
      {
        "question": "Where can I see the Blewett Pass camera?",
        "answer": "You can view the live Blewett Pass summit camera snapshot directly in the Live Camera section on this page or via WSDOT Mountain Passes traveler reports."
      },
      {
        "question": "What are the current Blewett Pass road conditions?",
        "answer": "Current road conditions on US-97 over Blewett Pass indicate active closure or travel advisories due to regional fire or weather management. Always check the live status badge above and WSDOT notices before driving."
      },
      {
        "question": "What is the Blewett Pass elevation?",
        "answer": "Blewett Pass reaches a summit elevation of 4,102 feet (1,250 meters) above sea level in the Wenatchee Mountains."
      },
      {
        "question": "Where is Blewett Pass located?",
        "answer": "Blewett Pass is located on US Route 97 in central Washington State, traversing the Wenatchee Mountains between Ellensburg (Kittitas County) to the south and Leavenworth / Wenatchee (Chelan County) to the north."
      },
      {
        "question": "Is Blewett Pass open year-round?",
        "answer": "Yes, US Route 97 over Blewett Pass is maintained by WSDOT as a year-round state highway, although winter traction tire requirements or temporary weather/wildfire closures may occur."
      }
    ],
    "isPopular": false
  },
  {
    "id": "white-pass",
    "slug": "white-pass",
    "name": "White Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "US 12",
    "elevationFt": 4500,
    "elevationM": 1372,
    "coordinates": {
      "lat": 46.6384,
      "lng": -121.3912
    },
    "status": "OPEN",
    "statusDetail": "US 12 open to traffic — Normal mountain travel conditions with no active restrictions",
    "lastUpdated": "12 minutes ago",
    "description": "White Pass is a premier year-round mountain highway pass at 4,500 ft (1,372 m) in Washington's south-central Cascade Range, carrying US Route 12 south of Mount Rainier National Park. It connects Yakima and the Naches Valley with Packwood, Lewis County, and the Interstate 5 corridor, and is home to the White Pass Ski Area at the summit.",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "weather": {
      "tempF": 46,
      "tempC": 8,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 16,
      "speedMph": 10,
      "direction": "WSW",
      "description": "Light to Moderate Breeze"
    },
    "roadCondition": "Pavement bare and dry across the summit corridor. No travel restrictions, traction requirements, or lane closures in effect. WSDOT maintenance patrols actively monitoring the pass.",
    "chainRequirement": "No restrictions for passenger vehicles or commercial trucks.",
    "cameras": [
      {
        "id": "white-cam-summit",
        "title": "White Pass Road Conditions Camera Live (US 12 MP 150.9)",
        "image": "https://images.wsdot.wa.gov/sc/012vc15095.jpg",
        "milepost": "MP 150.9",
        "direction": "Eastbound / Westbound",
        "location": "US 12 White Pass Summit Ski Area Entrance",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 410",
        "status": "OPEN",
        "elevationFt": 5430,
        "lastUpdated": "12 min ago",
        "distanceKm": 32
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 80
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "Just now",
        "distanceKm": 95
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US 2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "10 min ago",
        "distanceKm": 140
      }
    ],
    "overview": {
      "openedYear": 1931,
      "lengthMiles": 48,
      "lengthKm": 77,
      "annualSnowfallIn": 350,
      "annualSnowfallM": 8.9,
      "summary": "White Pass (elevation 4,500 ft / 1,372 m) carries US Route 12 across the Cascade crest in Washington State, situated between Gifford Pinchot National Forest on the west and Okanogan-Wenatchee National Forest on the east, just south of Mount Rainier National Park. Opened in 1931, White Pass serves as Washington's southernmost year-round highway pass across the Cascades, providing essential freight and passenger access between Puget Sound/I-5 and the agricultural Yakima Valley. The summit features the White Pass Ski Area, renowned for winter recreation and high alpine views of Mount Rainier."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Winter Storm Clearing)",
      "typicalReopening": "Maintained 24/7 in Winter",
      "description": "US 12 over White Pass is maintained by WSDOT as a year-round highway. Unlike seasonal SR 410 over Chinook Pass, White Pass stays open throughout the winter months, with temporary closures occurring only during severe blizzards, spinouts, or emergency avalanche control."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 56,
        "tempLowF": 39,
        "icon": "cloud-sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Alpine Skies",
        "tempHighF": 43,
        "tempLowF": 36,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Pleasant",
        "tempHighF": 60,
        "tempLowF": 41,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Clouds",
        "tempHighF": 55,
        "tempLowF": 38,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Mostly Sunny",
        "tempHighF": 58,
        "tempLowF": 40,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Mild Mountain Breeze",
        "tempHighF": 61,
        "tempLowF": 42,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "WSDOT Mountain Passes",
        "type": "Highway Status & Road Reports",
        "url": "https://wsdot.wa.gov/travel/real-time/mountainpasses/white"
      },
      {
        "name": "WSDOT Traveler Information",
        "type": "Live Summit Camera (MP 150.9)",
        "url": "https://wsdot.com/travel/real-time/mountainpasses/white"
      },
      {
        "name": "NOAA / National Weather Service",
        "type": "South Cascades Summit Weather",
        "url": "https://www.weather.gov"
      },
      {
        "name": "White Pass Ski Area",
        "type": "Alpine Snow & Lift Reports",
        "url": "https://skiwhitepass.com"
      }
    ],
    "customSeo": {
      "title": "White Pass Road Conditions Camera Live, Weather & Status | US 12",
      "description": "Check live White Pass road conditions camera live feeds, weather, snow report, elevation (4,500 ft), and real-time US 12 highway alerts.",
      "h1": "White Pass – Road Conditions, Camera Live & Weather"
    },
    "searchKeywords": [
      "white pass road conditions camera live",
      "white pass road conditions",
      "white pass camera live",
      "white pass webcam",
      "white pass live camera",
      "us 12 white pass road conditions",
      "white pass summit camera"
    ],
    "aliases": [
      "US 12 White Pass",
      "White Pass Summit",
      "White Pass Ski Area"
    ],
    "faqs": [
      {
        "question": "Where can I see the White Pass road conditions and camera live?",
        "answer": "You can check real-time White Pass road conditions and view the official WSDOT live summit camera directly on this page. The camera feed at US 12 MP 150.9 updates automatically every 2 minutes with current pavement and snow visibility."
      },
      {
        "question": "Is White Pass open today?",
        "answer": "Yes, White Pass on US 12 is currently OPEN to all vehicular traffic with no active road closures or chain restrictions. WSDOT operates continuous maintenance along the US 12 corridor to ensure safe year-round travel."
      },
      {
        "question": "What are the current White Pass road conditions?",
        "answer": "Current road conditions on White Pass report bare and dry pavement across the summit with no traction advisories in effect. During winter storms, road conditions can shift to compact snow and ice requiring traction tires or chains."
      },
      {
        "question": "What is the weather at White Pass?",
        "answer": "Current weather at the 4,500 ft summit is partly cloudy with mild mountain temperatures and light westerly winds. View the 5-day summit forecast tab above for upcoming temperature trends, wind, and precipitation."
      },
      {
        "question": "Where is White Pass in Washington?",
        "answer": "White Pass is located in the south-central Cascade Mountains of Washington State along the Lewis and Yakima county border on US Route 12, approximately 50 miles west of Yakima and 30 miles east of Packwood."
      },
      {
        "question": "Does White Pass have a live camera?",
        "answer": "Yes! WSDOT operates an official traffic camera at US 12 MP 150.9 directly at the White Pass summit near the ski area entrance. The camera snapshot refreshes approximately every 2 minutes and can be viewed with a manual \"Refresh Now\" option on this page."
      },
      {
        "question": "Where can I see the White Pass webcam?",
        "answer": "You can view the official WSDOT live summit camera directly on this page in the Live Camera card or under the Cameras tab for expanded road views along the US 12 highway corridor."
      },
      {
        "question": "What highway goes over White Pass?",
        "answer": "US Route 12 (US 12) crosses White Pass. It is Washington's southernmost all-season highway pass connecting Southwest Washington and Interstate 5 with Central and Eastern Washington (Yakima, Tri-Cities, and Walla Walla)."
      },
      {
        "question": "What is the White Pass elevation?",
        "answer": "White Pass sits at an official summit elevation of 4,500 feet (1,372 meters) above sea level according to WSDOT geographic records. The adjacent White Pass Ski Area base sits at 4,500 ft with lift-served terrain reaching 6,500 ft."
      },
      {
        "question": "Is White Pass open for skiing?",
        "answer": "White Pass Ski Area operates seasonally during the winter and spring months, typically from late November or early December through mid-April. Highway US 12 over the pass remains open year-round independently of ski area operations."
      },
      {
        "question": "What are the White Pass snow conditions?",
        "answer": "Road snow conditions on US 12 are currently bare and dry. During the winter season, White Pass receives an average of 350 inches of annual snowfall, providing deep powder coverage across the alpine slopes of the ski area."
      },
      {
        "question": "When does White Pass usually close?",
        "answer": "White Pass does not close for the winter season; it is a year-round paved highway on US 12. Short temporary closures lasting a few hours may occur during severe winter blizzards or for emergency rockfall and avalanche mitigation."
      },
      {
        "question": "When does White Pass open?",
        "answer": "US 12 over White Pass operates 24/7 year-round. For winter travelers, WSDOT snowplow crews actively clear and treat the roadway day and night."
      }
    ],
    "isPopular": true
  },
  {
    "id": "chinook-pass",
    "slug": "chinook-pass",
    "name": "Chinook Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "SR 410",
    "elevationFt": 5430,
    "elevationM": 1655,
    "coordinates": {
      "lat": 46.8722,
      "lng": -121.5158
    },
    "status": "OPEN",
    "statusDetail": "No current travel restrictions — Seasonal daylight travel on SR 410",
    "lastUpdated": "12 minutes ago",
    "description": "Chinook Pass is a high mountain pass on SR 410 in Washington's Cascade Range, crossing the eastern side of Mount Rainier National Park and connecting the Enumclaw and Naches areas. SR 410 is also known as the Mather Memorial Parkway and forms part of the Chinook Scenic Byway.",
    "image": "/chinook-pass.jpg",
    "weather": {
      "tempF": 52,
      "tempC": 11,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "W",
      "description": "Light Breeze"
    },
    "roadCondition": "Pavement bare and dry throughout the corridor. No current travel restrictions in effect. Standard seasonal hours apply — road may be subject to temporary closure during severe mountain weather.",
    "chainRequirement": "No current travel restrictions for standard passenger or commercial vehicles.",
    "cameras": [
      {
        "id": "chinook-cam-1",
        "title": "Chinook Pass Webcam & Summit Live Camera (SR 410 MP 69)",
        "image": "https://images.wsdot.wa.gov/sc/410VC06900.jpg",
        "milepost": "MP 69",
        "direction": "Northbound",
        "location": "SR 410 Chinook Pass Summit",
        "source": "WSDOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [
      {
        "id": "white-pass",
        "slug": "white-pass",
        "name": "White Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-12",
        "status": "OPEN",
        "elevationFt": 4500,
        "lastUpdated": "20 min ago",
        "distanceKm": 56
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 80
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "Just now",
        "distanceKm": 72
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "8 min ago",
        "distanceKm": 110
      }
    ],
    "overview": {
      "openedYear": 1932,
      "lengthMiles": 55,
      "lengthKm": 89,
      "annualSnowfallIn": 450,
      "annualSnowfallM": 11.4,
      "summary": "Chinook Pass at 5,430 ft (1,655 m) carries SR 410 — the Mather Memorial Parkway — across the Cascade crest on the eastern boundary of Mount Rainier National Park. Built in 1932, the pass is famous for its historic rustic timber pedestrian overpass bridge where the Pacific Crest National Scenic Trail (PCT) intersects SR 410 at the summit. The corridor connects King/Pierce County (Enumclaw) with Yakima County (Naches/Yakima), traversing through lush old-growth national forest, Mount Rainier subalpine wildflower meadows near Tipsoo Lake (5,080 ft), and the arid eastern Cascade slopes. Because of high elevation and heavy winter snowpack, Chinook Pass is a seasonal highway and closes annually from late autumn through late spring."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Late October or November",
      "typicalReopening": "Late May",
      "description": "Chinook Pass (SR 410) is subject to annual winter closures due to heavy Cascade snow accumulation and avalanche hazards. WSDOT maintenance crews suspend regular winter plowing over the high summit, gating the highway between Crystal Mountain Boulevard / Cayuse Pass and Morse Creek. The exact closure and spring reopening dates vary each year based on snowpack depth, weather trends, and highway clearance operations. Always check the official live status before planning shoulder-season travel."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 62,
        "tempLowF": 44,
        "icon": "cloud-sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Clear",
        "tempHighF": 65,
        "tempLowF": 46,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Afternoon Clouds",
        "tempHighF": 59,
        "tempLowF": 42,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Mostly Sunny",
        "tempHighF": 63,
        "tempLowF": 45,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Mild Mountain Breeze",
        "tempHighF": 67,
        "tempLowF": 48,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "WSDOT Mountain Passes",
        "type": "Road & Pass Status",
        "url": "https://wsdot.wa.gov/travel/real-time/mountainpasses"
      },
      {
        "name": "WSDOT Traveler Information",
        "type": "Live Summit Camera",
        "url": "https://wsdot.com/travel/real-time/mountainpasses/chinook"
      },
      {
        "name": "National Park Service (MORA)",
        "type": "Mount Rainier National Park Regulations",
        "url": "https://www.nps.gov/mora/index.htm"
      },
      {
        "name": "NOAA / NWS",
        "type": "High-Elevation Weather & Forecast",
        "url": "https://www.weather.gov"
      }
    ],
    "customSeo": {
      "title": "Chinook Pass Webcam, Road Conditions & Weather | SR 410 WSDOT",
      "description": "View live Chinook Pass webcam feeds, current road conditions, snow depth, seasonal opening status, and weather on SR 410 in Washington.",
      "h1": "Chinook Pass – Webcam, Road Conditions & Seasonal Status"
    },
    "searchKeywords": [
      "chinook pass webcam",
      "chinook pass live webcam",
      "chinook pass camera",
      "chinook pass road conditions",
      "sr 410 webcam",
      "wsdot chinook pass webcam",
      "chinook pass summit webcam"
    ],
    "aliases": [
      "SR 410 Chinook Pass",
      "Mather Memorial Parkway",
      "Chinook Scenic Byway"
    ],
    "faqs": [
      {
        "question": "Where can I find the Chinook Pass webcam?",
        "answer": "You can view the official WSDOT live Chinook Pass webcam directly on this page under the Live Camera card. The camera is located at SR 410 Milepost 69 at the summit and refreshes with latest highway images every 2 minutes."
      },
      {
        "question": "Does Chinook Pass have a live webcam or camera?",
        "answer": "Yes! WSDOT operates a live summit traffic webcam at SR 410 MP 69 near the pedestrian overpass. You can see real-time visibility, weather, and pavement conditions directly on this page."
      },
      {
        "question": "Is Chinook Pass open today?",
        "answer": "Chinook Pass is currently OPEN for normal daylight vehicular travel on SR 410 with no active restrictions. Because Chinook Pass is a high-elevation seasonal highway crossing Mount Rainier National Park, weather and road conditions can change rapidly. Always check the live status card at the top of this page or official WSDOT travel alerts before departing."
      },
      {
        "question": "Is Chinook Pass closed for the season?",
        "answer": "Chinook Pass is subject to annual seasonal winter closures, typically shutting down in late October or November once significant mountain snowfall begins. The pass generally reopens in late May before Memorial Day weekend following WSDOT snow clearing and avalanche hazard assessments. Check the current status badge above for active seasonal status."
      },
      {
        "question": "What are the current Chinook Pass road conditions?",
        "answer": "Current road conditions indicate bare and dry pavement throughout the SR 410 mountain pass corridor with no chain restrictions or lane closures in effect. Maintenance teams monitor the pass continuously during the open season."
      },
      {
        "question": "What is the elevation of Chinook Pass?",
        "answer": "Chinook Pass stands at an official summit elevation of 5,430 feet (1,655 meters) above sea level according to WSDOT geographic records, making it one of Washington State's highest paved highway crossings."
      },
      {
        "question": "What highway goes over Chinook Pass?",
        "answer": "Washington State Route 410 (SR 410) crosses Chinook Pass. The highway is federally and state recognized as the Mather Memorial Parkway through Mount Rainier National Park and forms an integral part of the scenic Chinook Scenic Byway."
      },
      {
        "question": "When does Chinook Pass usually close for winter?",
        "answer": "Chinook Pass typically closes for winter between late October and mid-November. The exact date is not calendar-fixed; it is determined dynamically by WSDOT and the National Park Service when winter storms make high-altitude maintenance unsafe."
      },
      {
        "question": "When does Chinook Pass usually reopen in spring?",
        "answer": "Chinook Pass usually reopens in late May, often targeting the Memorial Day holiday weekend. WSDOT snowplow crews typically begin extensive clearing operations in April, cutting through snowpack that can exceed 15 to 25 feet at the summit."
      },
      {
        "question": "Is Chinook Pass inside Mount Rainier National Park?",
        "answer": "Yes. The summit of Chinook Pass marks the eastern entrance boundary of Mount Rainier National Park. Traveling west on SR 410 brings you past scenic Tipsoo Lake, Cayuse Pass (SR 123 junction), and the White River entrance to Sunrise."
      },
      {
        "question": "Can you drive through Chinook Pass in winter?",
        "answer": "No. SR 410 over Chinook Pass is completely closed and gated to motor vehicles throughout the winter. Year-round alternative Cascade crossings include Interstate 90 (Snoqualmie Pass), US 2 (Stevens Pass), and US 12 (White Pass)."
      }
    ],
    "isPopular": true
  },
  {
    "id": "cayuse-pass",
    "slug": "cayuse-pass",
    "name": "Cayuse Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "SR 123",
    "elevationFt": 4694,
    "elevationM": 1431,
    "coordinates": {
      "lat": 46.8741,
      "lng": -121.5494
    },
    "status": "OPEN",
    "statusDetail": "SR 123 open to all vehicles — Seasonal summer operations in effect. Road clear. No traction requirements. Commercial vehicles prohibited within Mount Rainier National Park.",
    "lastUpdated": "12 minutes ago",
    "description": "Cayuse Pass is a high-elevation mountain pass on SR 123 within Mount Rainier National Park in Washington State. Situated at 4,694 feet (1,431 m), it marks the junction of SR 123 and SR 410 (Mather Memorial Parkway) at the edge of the park. The pass is a seasonal highway that typically closes in mid-to-late November due to heavy snowfall and avalanche danger, and reopens around Memorial Day weekend in late May. WSDOT and the National Park Service jointly manage road status and seasonal clearing operations.",
    "image": "/cayuse-pass.jpg",
    "weather": {
      "tempF": 62,
      "tempC": 17,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 16,
      "speedMph": 10,
      "direction": "W",
      "description": "Light Breeze"
    },
    "roadCondition": "Pavement bare and dry throughout the SR 123 corridor. No current traction requirements, chain restrictions, or lane closures in effect. Standard seasonal operations apply — road may close without prior notice during severe mountain weather or avalanche events.",
    "chainRequirement": "No traction requirements currently in effect for passenger or commercial vehicles. During winter operations (when open), WSDOT may require traction tires or chains. Commercial vehicles are prohibited on SR 123 and SR 410 within Mount Rainier National Park year-round.",
    "cameras": [
      {
        "id": "cayuse-cam-1",
        "title": "Cayuse Pass Webcam — SR 123 Summit (MP 45)",
        "image": "https://images.wsdot.wa.gov/sc/123VC04500.jpg",
        "milepost": "MP 45",
        "direction": "Northbound toward SR 410 Junction",
        "location": "SR 123 Cayuse Pass Summit — Mount Rainier National Park",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/cayuse-pass"
      }
    ],
    "nearbyPasses": [
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 410",
        "status": "OPEN",
        "elevationFt": 5430,
        "lastUpdated": "12 min ago",
        "distanceKm": 10
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 85
      },
      {
        "id": "white-pass",
        "slug": "white-pass",
        "name": "White Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-12",
        "status": "OPEN",
        "elevationFt": 4500,
        "lastUpdated": "18 min ago",
        "distanceKm": 56
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "22 min ago",
        "distanceKm": 130
      }
    ],
    "overview": {
      "openedYear": 1932,
      "lengthMiles": 16,
      "lengthKm": 26,
      "annualSnowfallIn": 320,
      "annualSnowfallM": 8.1,
      "summary": "Cayuse Pass (elevation 4,694 ft / 1,431 m) carries SR 123 through the southern reach of Mount Rainier National Park, connecting the town of Packwood (US-12) to the south with the Chinook Pass / SR 410 junction to the north. The pass road winds through old-growth Douglas fir and western red cedar forest before emerging into subalpine terrain at the summit. Because of its high elevation and proximity to the moisture-laden Cascades, Cayuse Pass accumulates heavy snowpack each winter — making it a strictly seasonal highway. WSDOT maintenance crews typically begin spring plowing in April and target the Memorial Day weekend for reopening, following avalanche hazard clearance with the National Park Service."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Mid-to-late November",
      "typicalReopening": "Late May (Memorial Day weekend target)",
      "description": "Cayuse Pass (SR 123) closes annually when winter snowfall and avalanche danger make high-altitude maintenance unsafe. WSDOT and the National Park Service jointly coordinate spring snow clearing operations. The exact opening and closing dates vary significantly each year based on snowpack depth, weather patterns, and highway safety assessments. Always verify current status with WSDOT before planning shoulder-season travel to Mount Rainier."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 64,
        "tempLowF": 46,
        "icon": "cloud-sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Clear",
        "tempHighF": 68,
        "tempLowF": 48,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Afternoon Showers",
        "tempHighF": 59,
        "tempLowF": 44,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 4",
        "condition": "Mostly Cloudy",
        "tempHighF": 57,
        "tempLowF": 42,
        "icon": "cloud"
      },
      {
        "day": "Day 5",
        "condition": "Sunny & Mild",
        "tempHighF": 65,
        "tempLowF": 46,
        "icon": "sun"
      }
    ],
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Currently Open — Seasonal summer operations in effect",
      "expectedOpeningWindow": "Late May — Memorial Day weekend (target)",
      "closingWindow": "Mid-to-late November (first major snowfall)",
      "clearanceAgency": "Washington State DOT (WSDOT) & National Park Service — Mount Rainier (MORA)",
      "notes": "Opening and closing dates are not calendar-fixed. WSDOT and NPS determine exact dates dynamically based on snowpack depth, avalanche hazard, road damage assessments, and crew safety conditions. The median opening date since records began in 1973 is May 7, though the 2007 season saw a record-late opening of September 29 following severe winter road damage. Always verify current status at wsdot.wa.gov before traveling."
    },
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "SR 123 Cayuse Pass Road Conditions & Status",
        "url": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/cayuse-pass"
      },
      {
        "name": "National Park Service — Mount Rainier (NPS MORA)",
        "type": "Road Status & Park Regulations",
        "url": "https://www.nps.gov/mora/planyourvisit/roads.htm"
      },
      {
        "name": "WSDOT Traffic Cameras",
        "type": "Live SR 123 Webcam Feed",
        "url": "https://wsdot.wa.gov/travel/real-time/mountainpasses/cayuse"
      },
      {
        "name": "NOAA / National Weather Service (NWS Seattle)",
        "type": "High-Elevation Mountain Pass Weather & Forecast",
        "url": "https://www.weather.gov/sew/"
      }
    ],
    "quickFacts": {
      "state": "Washington, United States",
      "mountainRange": "Cascade Range — Mount Rainier Subregion (Southern Cascades)",
      "elevationSummary": "4,694 ft / 1,431 m above sea level (NPS official figure)",
      "connects": "Packwood & US-12 (south) with Chinook Pass & SR 410 (north) through Mount Rainier National Park",
      "nearestTown": "Packwood (22 mi south via SR 123) • Enumclaw (55 mi north via SR 410)",
      "roadType": "Washington State Route 123 (SR 123) — Two-lane paved mountain highway (seasonal)",
      "bestTime": "Late May through October (seasonal road — closed November through May)",
      "highlight": "Junction of SR 123 and SR 410 at the eastern boundary of Mount Rainier National Park — gateway to Ohanapecosh and Stevens Canyon."
    },
    "routeDetails": {
      "distanceKm": 42,
      "distanceMiles": 26,
      "duration": "35 – 55 min (Packwood to Chinook Pass via SR 123)",
      "origin": "Packwood, WA — US-12 & SR 123 Junction (Elevation: 1,063 ft)",
      "destination": "Cayuse Pass Summit — SR 123 & SR 410 Junction (Elevation: 4,694 ft)",
      "waypoints": [
        "Packwood, WA (US-12 & SR 123 Junction) — Southern gateway, last services before pass",
        "Ohanapecosh Visitor Center (NPS) — Mount Rainier National Park entrance, campground",
        "Stevens Canyon Road Junction — Access to Paradise, Longmire & west side of Mount Rainier",
        "Cayuse Pass Summit (4,694 ft) — SR 123 & SR 410 Junction, National Park boundary",
        "Tipsoo Lake (5,080 ft) — Scenic subalpine lake 2 mi north on SR 410",
        "Chinook Pass Summit (5,430 ft) — Pacific Crest Trail crossing, 3 mi north on SR 410"
      ]
    },
    "distancesTable": [
      {
        "location": "Packwood, WA",
        "distance": "22 mi / 35 km",
        "route": "SR 123 North",
        "notes": "Last major services before pass — fuel, food, lodging"
      },
      {
        "location": "Enumclaw, WA",
        "distance": "55 mi / 89 km",
        "route": "SR 410 West then SR 123 South",
        "notes": "Northern approach via Chinook Pass"
      },
      {
        "location": "Seattle, WA",
        "distance": "80 mi / 129 km",
        "route": "US-12 East then SR 123 North",
        "notes": "Approx. 2 hr via Tacoma/US-12"
      },
      {
        "location": "Yakima, WA",
        "distance": "68 mi / 110 km",
        "route": "US-12 West then SR 123 North",
        "notes": "Eastern Cascades approach"
      },
      {
        "location": "Crystal Mountain Resort",
        "distance": "6 mi / 10 km",
        "route": "SR 410 East",
        "notes": "Via Chinook Pass junction on SR 410"
      },
      {
        "location": "Chinook Pass Summit",
        "distance": "3 mi / 5 km",
        "route": "SR 410 North (from junction)",
        "notes": "PCT crossing, 5,430 ft — often closes before Cayuse Pass"
      },
      {
        "location": "Paradise (Mount Rainier)",
        "distance": "21 mi / 34 km",
        "route": "SR 123 South then Stevens Canyon Rd",
        "notes": "Access via Stevens Canyon Road (seasonal)"
      }
    ],
    "narrativeSections": [
      {
        "title": "Where Is Cayuse Pass?",
        "content": "Cayuse Pass is located in the southern Cascade Range of Washington State, entirely within Mount Rainier National Park. It sits at the junction of State Route 123 (SR 123) and State Route 410 (SR 410 — Mather Memorial Parkway), approximately 22 miles north of Packwood and 55 miles southeast of Enumclaw. The pass forms the eastern gateway to the park's less-visited southern and eastern corridors, including the Ohanapecosh area and Stevens Canyon. GPS coordinates: 46.8741° N, 121.5494° W."
      },
      {
        "title": "Cayuse Pass Elevation",
        "content": "Cayuse Pass stands at an official summit elevation of 4,694 feet (1,431 meters) above sea level according to the National Park Service (NPS). Some published sources cite a slightly different figure of 4,675 feet — minor variation due to differing reference benchmarks. The NPS figure of 4,694 ft is considered authoritative. At nearly a mile high, the pass receives heavy Cascade snowpack each winter, making it a seasonal highway. By comparison, nearby Chinook Pass (just 3 miles north on SR 410) reaches 5,430 feet — one of the highest paved passes in Washington."
      },
      {
        "title": "Cayuse Pass SR 123 Highway Information",
        "content": "Cayuse Pass is traversed by Washington State Route 123 (SR 123). This two-lane paved mountain highway runs approximately 16 miles through Mount Rainier National Park, connecting the US-12 junction near Packwood in the south to the SR 410 junction at Cayuse Pass in the north. SR 123 is also known as a segment of the Chinook Scenic Byway. Commercial vehicles, including semi-trucks and large buses, are prohibited on SR 123 within the National Park year-round per NPS regulations. The milepost numbering on SR 123 near the summit is approximately MP 45."
      },
      {
        "title": "How to Get to Cayuse Pass",
        "content": "From the south (Packwood / US-12): Take SR 123 north approximately 22 miles from its US-12 junction. SR 123 climbs steadily through old-growth forest before reaching the Ohanapecosh area and then ascending to the summit. From the north (Enumclaw / Seattle area): Take SR 410 south and west from Enumclaw approximately 55 miles over Chinook Pass. Cayuse Pass is 3 miles west of Chinook Pass at the SR 123 / SR 410 junction. From Yakima: Travel US-12 west to SR 123 north, approximately 68 miles total. Always check current road status before departing — SR 123 may close without prior notice during severe mountain weather."
      },
      {
        "title": "Cayuse Pass Opening & Closing Dates — Historical Record",
        "content": "Cayuse Pass (SR 123) has been tracked by WSDOT since 1973. The median opening date over that period is May 7. The earliest recorded opening was March 18, 1981, and the latest was September 29, 2007 — after a winter that caused severe road damage requiring extensive reconstruction. Recent seasonal history:\n\n• 2025: Opened May 23 | Closed October 24 (second-earliest closure since 1973)\n• 2024: Opened May 24 | Closed October 31\n• 2023: Opened May 26 | Closed November 6\n• 2022: Opened May 20 | Closed November 15\n• 2021: Opened May 28 | Closed November 9\n• 2020: Opened June 5 | Closed November 4\n• 2019: Opened May 24 | Closed November 14\n\nClosing dates are triggered when accumulating snowfall and forecast conditions make high-altitude maintenance unsafe. WSDOT always provides advance notice when possible. The pass closes in both directions — no through traffic or overriding closures."
      },
      {
        "title": "Cayuse Pass Chain Requirements & Winter Driving",
        "content": "During the open season (typically late May through mid-November), no chain or traction requirements are normally in effect on SR 123. However, sudden mountain storms can change conditions rapidly — especially in spring and fall. When Cayuse Pass does carry traction or chain requirements, WSDOT posts alerts on the official Mountain Passes page and broadcasts via WSDOT social media. Traction tires (all-season or winter-rated with the M+S or 3-Peak Mountain Snowflake symbol) are strongly recommended during shoulder season travel (May and October–November). AWD and 4WD provide added capability but do not replace traction tires on snow or ice. Commercial vehicles are prohibited within the National Park regardless of season. During winter, SR 123 is completely closed and gated — no vehicle access."
      }
    ],
    "customSeo": {
      "title": "Cayuse Pass Road Conditions, Open/Closed Status & Webcam | SR 123",
      "description": "Check live Cayuse Pass road conditions, current open/closed status, WSDOT webcam, weather, snow, opening dates, elevation, directions and more for SR 123 in Washington.",
      "h1": "Cayuse Pass Road Conditions, Open/Closed Status & Live Webcam"
    },
    "searchKeywords": [
      "cayuse pass road conditions",
      "cayuse pass road status",
      "cayuse pass pass status report",
      "cayuse pass is open",
      "cayuse pass open",
      "is cayuse pass open right now",
      "is cayuse pass open today",
      "when does cayuse pass open",
      "when will cayuse pass open",
      "cayuse pass opening date",
      "cayuse pass closing date",
      "cayuse pass closed",
      "cayuse pass is closed",
      "cayuse pass webcam",
      "cayuse pass live webcam",
      "cayuse pass cameras",
      "cayuse pass weather today",
      "cayuse pass snow",
      "cayuse pass snow depth",
      "cayuse pass snow conditions",
      "cayuse pass forecast",
      "cayuse pass map",
      "cayuse pass elevation",
      "how high is cayuse pass",
      "cayuse pass directions",
      "where is cayuse pass",
      "how to get to cayuse pass",
      "what highway is cayuse pass",
      "cayuse pass chain requirements",
      "cayuse pass traction tires",
      "cayuse pass highway",
      "cayuse pass milepost",
      "sr 123 cayuse pass",
      "sr 123 road conditions",
      "wsdot cayuse pass"
    ],
    "aliases": [
      "SR 123 Cayuse Pass",
      "SR 123 / SR 410 Junction",
      "Cayuse Pass Junction",
      "Mather Memorial Parkway Southern Approach"
    ],
    "faqs": [
      {
        "question": "Is Cayuse Pass open right now?",
        "answer": "Cayuse Pass (SR 123) is currently OPEN. The live status at the top of this page reflects the latest available WSDOT report. Cayuse Pass is a seasonal highway — it is typically open from late May through mid-to-late November each year. Because mountain conditions can change rapidly, always verify current status on this page or at wsdot.wa.gov before departing."
      },
      {
        "question": "Is Cayuse Pass open today?",
        "answer": "The current Cayuse Pass open/closed status is shown in the Live Status card at the top of this page, updated from official WSDOT data. During the open season (late May through November), the pass is generally accessible to all passenger vehicles with no restrictions. Check the status card above for today's verified condition and any active advisories."
      },
      {
        "question": "What are the current Cayuse Pass road conditions?",
        "answer": "Current Cayuse Pass road conditions are shown in the Road Conditions section above, sourced from WSDOT. During summer months, SR 123 typically has bare and dry pavement with no restrictions. During spring and fall shoulder seasons, conditions can include wet pavement, early-season snow, or ice at the 4,694-foot summit. Check the Road Conditions section above for the latest official report."
      },
      {
        "question": "When does Cayuse Pass open?",
        "answer": "Cayuse Pass typically reopens in late May, targeting the Memorial Day weekend. WSDOT and the National Park Service begin snow-clearing operations in April and open the pass once the road is safe and avalanche hazards are cleared. The median opening date since WSDOT began tracking in 1973 is May 7, though the exact date varies significantly each year based on snowpack and weather."
      },
      {
        "question": "When does Cayuse Pass close for winter?",
        "answer": "Cayuse Pass typically closes for winter in mid-to-late November, when accumulating snowfall makes high-altitude maintenance unsafe. In 2025, the pass closed on October 24 — the second-earliest closure on record. In 2024, it closed October 31. The exact date is not fixed on the calendar and depends on actual snowfall and weather forecasts. WSDOT provides advance notice when possible."
      },
      {
        "question": "What is the Cayuse Pass opening date?",
        "answer": "The 2026 Cayuse Pass opening date has not yet been announced (passes often close late autumn and the next opening date is determined the following spring). Historical opening dates have ranged from March 18 (1981, earliest ever) to September 29 (2007, latest ever). Recent years: 2025 opened May 23, 2024 opened May 24, 2023 opened May 26. Check the Live Status card at the top of this page for the current season status."
      },
      {
        "question": "Is there a Cayuse Pass webcam?",
        "answer": "Yes. WSDOT operates a traffic camera on SR 123 at Cayuse Pass. The live camera image is shown in the Live Webcam section on this page and refreshes approximately every 2 minutes. If the camera is temporarily unavailable, a fallback message is displayed with a link to the official WSDOT camera source."
      },
      {
        "question": "Where can I see the Cayuse Pass live webcam?",
        "answer": "The live Cayuse Pass webcam is displayed directly on this page in the \"Live Webcams\" section — scroll down past the status card. The camera is operated by WSDOT at SR 123 near the pass summit and is one of the primary tools travelers use to check actual road and weather conditions before driving. You can also view it at the official WSDOT Traveler Information page."
      },
      {
        "question": "What highway is Cayuse Pass on?",
        "answer": "Cayuse Pass is on Washington State Route 123 (SR 123). At the summit, SR 123 meets SR 410 (Mather Memorial Parkway). SR 123 runs north–south through Mount Rainier National Park, connecting US-12 near Packwood in the south to SR 410 at the pass summit. The junction is also the southern terminus of the Chinook Scenic Byway."
      },
      {
        "question": "Where is Cayuse Pass?",
        "answer": "Cayuse Pass is located in Washington State within Mount Rainier National Park, at the junction of SR 123 and SR 410. It sits approximately 22 miles north of Packwood and 55 miles southeast of Enumclaw. The GPS coordinates are approximately 46.8741° N, 121.5494° W. It is near the eastern boundary of the national park, close to the Ohanapecosh area and Stevens Canyon entrance."
      },
      {
        "question": "How high is Cayuse Pass?",
        "answer": "Cayuse Pass reaches an elevation of 4,694 feet (1,431 meters) above sea level, according to the National Park Service. Some sources cite a slightly different figure of 4,675 feet — a minor difference due to varying reference benchmarks. At nearly a mile high, the pass receives significant Cascade snowpack each winter and is subject to rapid weather changes year-round."
      },
      {
        "question": "What is the elevation of Cayuse Pass?",
        "answer": "The official elevation of Cayuse Pass is 4,694 feet (1,431 meters), per the National Park Service. This makes it a high-elevation seasonal pass — lower than nearby Chinook Pass (5,430 ft) but higher than White Pass (4,500 ft) and significantly higher than Snoqualmie Pass (3,022 ft). The high elevation is why the pass accumulates heavy snow and requires an annual closure each winter."
      },
      {
        "question": "Does Cayuse Pass require chains?",
        "answer": "No chain requirements are currently in effect on Cayuse Pass. During normal summer operations, SR 123 has no traction or chain restrictions. In shoulder seasons (May and October–November), conditions can deteriorate rapidly with early or late-season snow. WSDOT may post chain requirements or traction tire requirements during adverse weather — always check the Road Conditions section above before traveling. Note: commercial vehicles are prohibited on SR 123 within Mount Rainier National Park year-round, regardless of chain status."
      },
      {
        "question": "What is the weather at Cayuse Pass today?",
        "answer": "Current weather conditions at Cayuse Pass are shown in the Weather section above. At 4,694 feet elevation, Cayuse Pass experiences cooler temperatures than lower elevations — typically 10–20°F colder than Seattle. Summer conditions are usually mild with afternoon cloud development. Spring and fall can bring rapid weather changes, snow at summit level, and strong winds. Always check the live weather card above before your trip."
      }
    ],
    "isPopular": true
  },
  {
    "id": "sherman-pass",
    "slug": "sherman-pass",
    "name": "Sherman Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "SR 20 (Sherman Pass Highway)",
    "elevationFt": 5577,
    "elevationM": 1700,
    "coordinates": {
      "lat": 48.6042,
      "lng": -118.4772
    },
    "status": "OPEN",
    "statusDetail": "SR 20 Sherman Pass open to all traffic — Year-round corridor across Kettle River Range (5,577 ft). Road clear. No traction requirements.",
    "lastUpdated": "5 minutes ago",
    "description": "Sherman Pass is a high mountain pass on Washington State Route 20 (SR 20) crossing the Kettle River Range in northeastern Washington State. At an elevation of 5,577 feet (1,700 m), it is officially the highest mountain pass in the state of Washington maintained by WSDOT year-round. Located between Republic in Ferry County and Kettle Falls in Stevens County, Sherman Pass serves as a critical east-west transportation link across Colville National Forest. Unlike the seasonal winter closure on SR 20 in the North Cascades 150 miles to the west, WSDOT maintains Sherman Pass 365 days a year with active snowplowing, sanding, and avalanche monitoring.",
    "image": "/sherman-pass.jpg",
    "weather": {
      "tempF": 56,
      "tempC": 13,
      "condition": "Partly Cloudy",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 12,
      "speedMph": 8,
      "direction": "SW",
      "description": "Light Breeze"
    },
    "roadCondition": "Pavement bare and dry throughout the SR 20 corridor across Sherman Pass summit (MP 319.5). No traction requirements, chain restrictions, or lane closures in effect. WSDOT maintains active year-round patrols across the summit.",
    "chainRequirement": "No current traction requirements for passenger or commercial vehicles. During severe winter storms, WSDOT posts mandatory traction tire or chain requirements for all vehicles crossing the 5,577-foot summit.",
    "cameras": [
      {
        "id": "sherman-cam-1",
        "title": "Sherman Pass Summit Webcam — SR 20 (MP 319.5)",
        "image": "https://images.wsdot.wa.gov/sc/020VC31950.jpg",
        "milepost": "MP 319.5",
        "direction": "Eastbound toward Kettle Falls",
        "location": "SR 20 Sherman Pass Summit (5,577 ft) — Kettle River Range",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/sherman-pass"
      },
      {
        "id": "sherman-cam-2",
        "title": "Sherman Pass West Approach — SR 20 (MP 315)",
        "image": "https://images.wsdot.wa.gov/sc/020VC31500.jpg",
        "milepost": "MP 315",
        "direction": "Westbound toward Republic",
        "location": "SR 20 Sherman Pass West Slope — Colville National Forest",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/sherman-pass"
      }
    ],
    "nearbyPasses": [
      {
        "id": "north-cascades-pass",
        "slug": "north-cascades-pass",
        "name": "North Cascades Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 20",
        "status": "OPEN",
        "elevationFt": 5477,
        "lastUpdated": "8 min ago",
        "distanceKm": 240
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "15 min ago",
        "distanceKm": 280
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "10 min ago",
        "distanceKm": 310
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 min ago",
        "distanceKm": 360
      }
    ],
    "overview": {
      "openedYear": 1936,
      "lengthMiles": 40,
      "lengthKm": 64,
      "annualSnowfallIn": 250,
      "annualSnowfallM": 6.3,
      "summary": "Sherman Pass (elevation 5,577 ft / 1,700 m) is a major mountain pass on State Route 20 (SR 20) crossing the Kettle River Range in northeastern Washington State. It is the highest maintained highway pass in Washington state open to year-round vehicular traffic. Connecting Republic in Ferry County to Kettle Falls and Colville in Stevens County, the pass winds through Colville National Forest and the historic 1988 White Mountain Fire burn area. Named after Civil War General William Tecumseh Sherman, who traveled the trail in 1883, the pass features the Sherman Pass Scenic Byway, the Sherman Overlook, and access to the Kettle Crest National Recreation Trail."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Year-Round Pass (Open 365 Days)",
      "typicalReopening": "Open Year-Round (Subject to temporary winter storm delays)",
      "description": "Unlike the seasonal winter closure on SR 20 in the North Cascades, Sherman Pass is maintained year-round by WSDOT crews. While the pass remains open throughout the winter, heavy snowfall, ice, or high winds across the 5,577-foot summit can cause temporary delays, mandatory chain requirements, or brief closures for snow clearing and avalanche mitigation."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHighF": 58,
        "tempLowF": 39,
        "icon": "cloud-sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Clear",
        "tempHighF": 62,
        "tempLowF": 41,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Mostly Sunny",
        "tempHighF": 60,
        "tempLowF": 40,
        "icon": "sun"
      },
      {
        "day": "Day 4",
        "condition": "Scattered Clouds",
        "tempHighF": 63,
        "tempLowF": 42,
        "icon": "cloud"
      },
      {
        "day": "Day 5",
        "condition": "Mild Mountain Breeze",
        "tempHighF": 65,
        "tempLowF": 44,
        "icon": "wind"
      }
    ],
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Year-Round Pass — Open 365 days a year (weather permitting)",
      "expectedOpeningWindow": "Open Year-Round",
      "closingWindow": "Open Year-Round (Temporary storm closures only)",
      "clearanceAgency": "Washington State Department of Transportation (WSDOT Eastern Region)",
      "notes": "Sherman Pass (SR 20) is operated as an all-season mountain pass. WSDOT keeps winter plows, graders, and sanders stationed near the summit. Temporary closures lasting several hours to a day may occur during extreme winter blizzards or downed tree clearances."
    },
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "SR 20 Sherman Pass Road Conditions & Mountain Passes",
        "url": "https://wsdot.wa.gov/travel/roads-bridges/mountain-passes/sherman-pass"
      },
      {
        "name": "WSDOT Traffic Cameras",
        "type": "Live SR 20 Sherman Pass Summit Cameras",
        "url": "https://images.wsdot.wa.gov"
      },
      {
        "name": "U.S. Forest Service (USFS)",
        "type": "Colville National Forest & Sherman Pass Trailhead Alerts",
        "url": "https://www.fs.usda.gov/colville"
      },
      {
        "name": "NOAA / National Weather Service (NWS Spokane)",
        "type": "High-Elevation Mountain Pass Weather & Forecast",
        "url": "https://www.weather.gov/otx/"
      }
    ],
    "quickFacts": {
      "state": "Washington, United States",
      "mountainRange": "Kettle River Range (Colville National Forest / Okanogan-Wenatchee Region)",
      "elevationSummary": "5,577 ft / 1,700 m above sea level — Highest year-round pass in Washington State",
      "connects": "Republic & Ferry County (west) with Kettle Falls & Stevens County (east) on SR 20",
      "nearestTown": "Republic (20 mi west via SR 20) • Kettle Falls (26 mi east via SR 20) • Colville (35 mi east)",
      "roadType": "Washington State Route 20 (SR 20) — Two-lane paved scenic mountain highway (year-round)",
      "bestTime": "Year-Round (Summer for hiking & scenic views; Winter for snow sports with traction tires)",
      "highlight": "Highest paved mountain pass kept open year-round in Washington; access to Kettle Crest National Recreation Trail."
    },
    "routeDetails": {
      "distanceKm": 64,
      "distanceMiles": 40,
      "duration": "45 – 60 min (Republic to Kettle Falls via SR 20)",
      "origin": "Republic, WA — Ferry County Seat (Elevation: 2,569 ft)",
      "destination": "Kettle Falls, WA — Stevens County (Elevation: 1,631 ft)",
      "waypoints": [
        "Republic, WA (US-21 & SR 20 Junction) — Western gateway, fuel and lodging",
        "Wauconda Pass / Omak Highway Junction — Access west toward Okanogan Valley",
        "Sherman Pass Summit (5,577 ft) — High point, WSDOT weather station and webcam",
        "Sherman Overlook & Kettle Crest Trailhead — Scenic view of White Mountain Fire area",
        "Sherman Creek Pass / Inchelium Road Junction — Descent into Columbia River Valley",
        "Kettle Falls, WA — Eastern gateway, US-395 junction near Lake Roosevelt"
      ]
    },
    "distancesTable": [
      {
        "location": "Republic, WA",
        "distance": "20 mi / 32 km",
        "route": "SR 20 West",
        "notes": "Nearest town to the west — fuel, dining, museum"
      },
      {
        "location": "Kettle Falls, WA",
        "distance": "26 mi / 42 km",
        "route": "SR 20 East",
        "notes": "Nearest town to the east — US-395 junction"
      },
      {
        "location": "Colville, WA",
        "distance": "35 mi / 56 km",
        "route": "SR 20 East to US-395 South",
        "notes": "Major regional commercial hub"
      },
      {
        "location": "Spokane, WA",
        "distance": "105 mi / 169 km",
        "route": "US-395 South then I-90",
        "notes": "Approx. 2 hr drive from pass summit"
      },
      {
        "location": "Omak / Okanogan, WA",
        "distance": "65 mi / 105 km",
        "route": "SR 20 West",
        "notes": "Access via Wauconda Pass"
      },
      {
        "location": "Grand Coulee, WA",
        "distance": "70 mi / 112 km",
        "route": "SR 21 South",
        "notes": "Access via Republic & SR 21"
      }
    ],
    "narrativeSections": [
      {
        "title": "Where Is Sherman Pass & SR 20?",
        "content": "Sherman Pass is located on Washington State Route 20 (SR 20) in northeastern Washington State, spanning the high crest of the Kettle River Range within Colville National Forest. The pass forms the boundary line between Ferry County on the west (nearest town Republic, 20 miles) and Stevens County on the east (nearest town Kettle Falls, 26 miles). Traversing lush lodgepole pine and Douglas fir forest, the pass summit sits at GPS coordinates 48.6042° N, 118.4772° W."
      },
      {
        "title": "Sherman Pass Elevation — Washington's Highest Year-Round Pass",
        "content": "Reaching a summit elevation of 5,577 feet (1,700 meters) above sea level, Sherman Pass holds the official distinction of being the highest paved mountain pass in the state of Washington maintained by WSDOT for year-round vehicular travel. While nearby Chinook Pass (5,430 ft) and Washington Pass (5,477 ft) reach similar altitudes, both are forced to close every winter due to extreme avalanche hazards. Sherman Pass, by contrast, is kept open 365 days a year through active WSDOT winter plowing and sanding operations."
      },
      {
        "title": "State Route 20 (SR 20) Sherman Pass Highway Overview",
        "content": "Washington State Route 20 (SR 20) carries the Sherman Pass Scenic Byway across the Kettle River Range. The highway climbs at sustained 6% gradients from both sides, ascending through scenic mountain terrain marked by the regenerating forest of the historic 1988 White Mountain Fire. At the summit, travelers can access the Kettle Crest National Recreation Trail, picnic facilities, and the Sherman Pass Overlook offering panoramic vistas across the Okanogan Highlands and Columbia River Basin."
      },
      {
        "title": "How to Get to Sherman Pass",
        "content": "From the West (Republic / Omak / Okanogan): Follow SR 20 east out of Republic into Colville National Forest. The road climbs steadily for 20 miles to the 5,577-foot summit. From the East (Spokane / Colville / Kettle Falls): Take US-395 north to Kettle Falls, then turn west onto SR 20. Climb west through Sherman Creek Canyon for 26 miles to reach the pass summit. From the South (Grand Coulee Dam): Take SR 21 north to Republic, then turn east onto SR 20. Always check live road status and traction advisories before departing in winter."
      },
      {
        "title": "Sherman Pass Winter Operations & Seasonal Status",
        "content": "Unlike the seasonal winter closure on SR 20 in the North Cascades 150 miles to the west, WSDOT operates Sherman Pass as a year-round highway pass. WSDOT Eastern Region maintenance crews keep plows and sanders stationed along the SR 20 corridor throughout winter. While the pass remains open 365 days a year under normal conditions, severe winter blizzards, heavy snow drifts, freezing rain, or avalanche clearing operations can cause temporary travel advisories, chain requirements, or short-duration closures lasting several hours."
      },
      {
        "title": "Sherman Pass Chain Requirements & Traction Guidelines",
        "content": "During winter months (November through April), weather conditions at the 5,577-foot summit change rapidly. WSDOT frequently posts traction tire advisories or mandatory chain requirements during mountain snow storms. When traction tire requirements are active, passenger cars must have approved all-season or winter tires (M+S or 3-Peak Mountain Snowflake), and commercial vehicles must carry chains. When \"Chains Required\" is posted, all vehicles without AWD/4WD must install tire chains to cross the pass."
      }
    ],
    "customSeo": {
      "title": "Sherman Pass Road Conditions, Opening Date & Live Webcam | SR 20",
      "description": "Check Sherman Pass road conditions, current open/closed status, opening dates, live webcams, weather, snow and travel alerts before driving.",
      "h1": "Sherman Pass Road Conditions, Open/Closed Status & Live Webcams"
    },
    "searchKeywords": [
      "sherman pass",
      "sherman pass road conditions",
      "sherman pass opening date",
      "sherman pass is open",
      "when does sherman pass open",
      "sherman pass closed",
      "sherman pass is closed",
      "sherman pass is it open today",
      "is sherman pass closed today",
      "is sherman pass open right now",
      "sherman pass open",
      "sherman pass when will open",
      "sherman pass passes open",
      "is sherman pass open",
      "is sherman pass open in winter",
      "sherman pass closures today",
      "when does sherman pass close for winter",
      "sherman pass closing date",
      "sherman pass road status",
      "sherman pass pass status report",
      "sherman pass chain requirements",
      "sherman pass traction tires",
      "sherman pass milepost",
      "how to get to sherman pass",
      "sherman pass webcam",
      "sherman pass live webcam",
      "sherman pass cameras",
      "sherman pass summit camera",
      "sherman pass weather today",
      "sherman pass weather",
      "sherman pass snow",
      "sherman pass snow depth",
      "sherman pass snow conditions",
      "sherman pass forecast",
      "sherman pass map",
      "sherman pass elevation",
      "sherman pass directions",
      "sherman pass highway",
      "sherman pass location",
      "sr 20 sherman pass",
      "wsdot sherman pass"
    ],
    "aliases": [
      "SR 20 Sherman Pass",
      "Sherman Pass SR 20",
      "Sherman Pass Summit",
      "Kettle River Range Pass",
      "Sherman Pass Highway"
    ],
    "faqs": [
      {
        "question": "Is Sherman Pass open right now?",
        "answer": "Sherman Pass (SR 20) is currently OPEN. The live status card at the top of this page displays real-time data from WSDOT. Sherman Pass is maintained year-round by WSDOT plows. Always verify live road conditions and traction advisories before departing during winter weather."
      },
      {
        "question": "Is Sherman Pass open today?",
        "answer": "Yes, Sherman Pass is open today. WSDOT maintains Sherman Pass 365 days a year. Check the live status card above for today's verified road condition, temperature, and any active travel advisories."
      },
      {
        "question": "What are the current Sherman Pass road conditions?",
        "answer": "Current road conditions show bare and dry pavement across the 5,577-foot summit on SR 20 with no chain restrictions in effect. Check the Road Conditions section above for live WSDOT updates."
      },
      {
        "question": "What is the Sherman Pass road status?",
        "answer": "The current Sherman Pass road status is OPEN with no active travel restrictions. Refer to the status card above for updated WSDOT travel reports."
      },
      {
        "question": "When does Sherman Pass open?",
        "answer": "Sherman Pass is a year-round pass and remains open 365 days a year under normal operations. Unlike the North Cascades Highway segment of SR 20, WSDOT plows Sherman Pass throughout the winter."
      },
      {
        "question": "What is the Sherman Pass opening date?",
        "answer": "Sherman Pass does not have a seasonal spring opening date because it is kept open year-round by WSDOT maintenance crews. If temporary closures occur during major winter storms, the pass typically reopens within hours after snow plowing."
      },
      {
        "question": "When does Sherman Pass close for winter?",
        "answer": "Sherman Pass does NOT close for the entire winter season. It is maintained year-round by WSDOT. Temporary short-duration closures may occur during extreme blizzards or avalanche clearing."
      },
      {
        "question": "Is Sherman Pass closed today?",
        "answer": "No, Sherman Pass is OPEN today for normal vehicular travel. If a temporary storm closure occurs, the status card at the top of this page will update immediately."
      },
      {
        "question": "Does Sherman Pass have a live webcam?",
        "answer": "Yes! WSDOT operates live traffic cameras on SR 20 at the Sherman Pass Summit (MP 319.5) and West Slope approach (MP 315). You can view live camera feeds in the Live Webcam section on this page."
      },
      {
        "question": "Where can I see the Sherman Pass webcam?",
        "answer": "You can view the live WSDOT Sherman Pass camera on this page under the \"Sherman Pass Webcam\" section. The camera image updates every 2 minutes with real-time pavement and weather conditions."
      },
      {
        "question": "What are the Sherman Pass snow conditions?",
        "answer": "During summer months, road surface across Sherman Pass is bare and dry. During winter months, WSDOT plows and sands the highway regularly; snow and slush can accumulate during active winter storms."
      },
      {
        "question": "What is the Sherman Pass snow depth?",
        "answer": "Current snow depth on the road surface is bare and dry. High-elevation snow accumulation in the surrounding Kettle River Range peak area ranges from 0 inches in summer to over 100 inches during peak winter."
      },
      {
        "question": "What is the Sherman Pass elevation?",
        "answer": "Sherman Pass reaches a summit elevation of 5,577 feet (1,700 meters) above sea level. It is officially the highest mountain pass in Washington State maintained by WSDOT year-round."
      },
      {
        "question": "Where is Sherman Pass?",
        "answer": "Sherman Pass is located on SR 20 in northeastern Washington State, spanning the Kettle River Range in Colville National Forest between Republic (Ferry County) and Kettle Falls (Stevens County)."
      },
      {
        "question": "What highway is Sherman Pass on?",
        "answer": "Sherman Pass is on Washington State Route 20 (SR 20), designated as the Sherman Pass Scenic Byway."
      },
      {
        "question": "Does Sherman Pass require chains?",
        "answer": "No chain requirements are currently in effect on Sherman Pass. During winter snowstorms, WSDOT may post mandatory traction tire or chain requirements for all vehicles crossing the 5,577-foot summit."
      },
      {
        "question": "What are the Sherman Pass traction requirements?",
        "answer": "Traction tire requirements are currently clear. When winter storms hit, WSDOT posts advisories requiring approved winter/all-season tires (M+S or 3-Peak symbol) or tire chains for non-AWD vehicles."
      }
    ],
    "isPopular": true
  },
  {
    "id": "zoji-la",
    "slug": "zoji-la",
    "name": "Zoji La Pass (NH-1)",
    "country": "India",
    "countryCode": "IND",
    "continent": "Asia",
    "state": "Jammu & Kashmir",
    "highway": "NH-1 (Srinagar–Leh Highway)",
    "elevationFt": 11575,
    "elevationM": 3528,
    "coordinates": {
      "lat": 34.2817,
      "lng": 75.4747
    },
    "status": "OPEN",
    "statusDetail": "Regulated convoy movement only. Subject to Border Roads Organisation (BRO) morning clearance. Check official BRO advisory before travel.",
    "lastUpdated": "Live status currently unavailable – check BRO or BSNL Helpline 1033",
    "description": "Zoji La Pass is a high mountain gateway in the Himalayas of Jammu & Kashmir, India, situated on National Highway 1 (NH-1) — the only road linking the Kashmir Valley with Ladakh and Leh. At 3,528 metres (11,575 feet) above sea level, it is one of the most strategically vital and weather-volatile passes in South Asia, connecting the towns of Sonamarg in Kashmir and Dras in Ladakh. Managed by the Border Roads Organisation (BRO), the pass sees heavy seasonal snowfall, monsoon landslides, and is typically open from May to November each year.",
    "image": "/zoji-la-pass-jammu-kashmir.jpg",
    "weather": {
      "tempF": 34,
      "tempC": 1,
      "condition": "Partly Cloudy with Mountain Mist",
      "icon": "cloud-snow"
    },
    "snowDepth": {
      "depthCm": 25,
      "depthIn": 10,
      "condition": "Slush & Wet Snow — Seasonal clearance ongoing"
    },
    "wind": {
      "speedKmh": 40,
      "speedMph": 25,
      "direction": "NW",
      "description": "Moderate to Strong Mountain Gusts"
    },
    "roadCondition": "Single-lane in critical sections. Muddy stretches, loose gravel, and landslide debris possible near Captain Morh and Zero Point. BRO conducting active clearance operations. Road passable for convoys with high ground clearance.",
    "chainRequirement": "High ground clearance vehicles strongly recommended. Heavy trucks and trailers require clearance from BRO. Snow chains advised outside summer window.",
    "cameras": [
      {
        "id": "zoji-cam-1",
        "title": "Zoji La Summit Checkpost (NH-1 Zero Point)",
        "image": "/zoji-la-pass-jammu-kashmir.jpg",
        "timestamp": "Static reference photo",
        "location": "NH-1 Zero Point — Zoji La Summit (3,528 m)",
        "milepost": "Zero Point Summit",
        "direction": "Toward Dras & Ladakh",
        "source": "Border Roads Organisation (BRO), India",
        "officialUrl": "https://bro.gov.in"
      },
      {
        "id": "zoji-cam-sonamarg",
        "title": "Sonamarg Approach Road — Sindh Valley",
        "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Reference image",
        "location": "Sonamarg, Kashmir (2,730 m)",
        "milepost": "Sonamarg Gateway",
        "direction": "Toward Zoji La",
        "source": "J&K Tourism Department",
        "officialUrl": "https://jktourism.jk.gov.in"
      }
    ],
    "nearbyPasses": [
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La Pass",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Road",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "18 min ago",
        "distanceKm": 215
      },
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway (NH-03)",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "12 min ago",
        "distanceKm": 520
      }
    ],
    "overview": {
      "openedYear": 1948,
      "lengthMiles": 9,
      "lengthKm": 15,
      "annualSnowfallIn": 630,
      "annualSnowfallM": 16,
      "summary": "Zoji La Pass (elevation 3,528 m / 11,575 ft) is the gateway pass between the lush Kashmir Valley and the high-altitude cold desert of Ladakh in northern India. Sitting astride the ancient Silk Road corridor on National Highway 1, it has served for centuries as the only road link between Srinagar and Leh — a route that traverses some of the most dramatic and extreme topography on Earth. The 15-kilometre pass road climbs through narrow switchbacks, glacial moraines, and scree slopes prone to avalanche and monsoon landslides, earning its reputation as one of the most challenging and strategically critical passes in Asia. The Border Roads Organisation (BRO) maintains the road year-round and manages time-bound vehicle convoys. Zoji La is typically closed to civilian traffic from late November to early May due to heavy snowfall, though the longer Zojila Tunnel (under construction / operational in phases) will eventually provide an all-weather bypass."
    },
    "openingDateInfo": {
      "year": 2025,
      "statusText": "Seasonal Pass — Typically open May to November",
      "expectedOpeningWindow": "Late April to Late May (weather dependent)",
      "closingWindow": "November to December (first heavy snowfall)",
      "clearanceAgency": "Border Roads Organisation (BRO), 14 Border Roads Task Force, Ministry of Defence, India",
      "notes": "Opening and closing dates vary significantly each year based on snowfall and weather. The BRO issues official advisories. Always confirm through the BRO helpline (1033) or J&K Traffic Police before travel. The Zojila Tunnel project may alter seasonal status in future seasons."
    },
    "trafficSchedule": {
      "title": "Zoji La Pass Traffic Regulations & Convoy System",
      "timingDetails": "Traffic moves in regulated time-bound convoys managed by the Border Roads Organisation (BRO). One-way convoy windows are typically enforced on alternate half-days to manage the single-lane road. Times vary by season and clearance conditions — always verify with BRO or local police at Sonamarg/Minamarg before proceeding.",
      "rules": [
        "Vehicles from Srinagar side (Sonamarg) typically depart in convoy during morning hours; Leh-side (Dras/Minamarg) convoys follow afternoon schedule — verify daily with BRO.",
        "Cut-off times are strictly enforced. Vehicles arriving late at the convoy assembly point will wait for the next convoy, which may be the following day.",
        "Heavy vehicles, over-dimensional loads, and tankers require separate BRO clearance and may travel on designated convoy-only days.",
        "During monsoon season (July–September), convoys may be cancelled with no advance notice due to landslides or road clearance. Plan for multi-day delays.",
        "BRO Helpline: 1033 (24-hour road condition and convoy advisory for NH-1 and Zoji La).",
        "J&K Traffic Police helpline: 0194-2474402 for real-time Srinagar–Leh highway updates."
      ]
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "November/December to April/May (heavy snowfall)",
      "typicalReopening": "Late April to May (BRO clearance after snowmelt)",
      "description": "Zoji La Pass closes every winter due to extreme snowfall, typically between November and December and reopens in late April or May after BRO snow clearance operations. The Zojila Tunnel (under construction / operational in sections) is intended to provide an all-weather bypass for NH-1 traffic. Even during the open season, temporary closures of hours to several days are common due to monsoon landslides (July–September) and early snowfall events."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy & Cool",
        "tempHighF": 41,
        "tempLowF": 28,
        "icon": "cloud-sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear & Cold",
        "tempHighF": 30,
        "tempLowF": 22,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny",
        "tempHighF": 44,
        "tempLowF": 29,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Mountain Mist & Drizzle",
        "tempHighF": 39,
        "tempLowF": 26,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 4",
        "condition": "Partly Cloudy",
        "tempHighF": 42,
        "tempLowF": 28,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 5",
        "condition": "Clear & Windy",
        "tempHighF": 45,
        "tempLowF": 30,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "Border Roads Organisation (BRO) — 14 BR Task Force",
        "type": "NH-1 Zoji La Road Status, Convoy Times & Clearance",
        "url": "https://bro.gov.in"
      },
      {
        "name": "J&K Traffic Police (Helpline: 0194-2474402)",
        "type": "Srinagar–Leh Highway Real-time Traffic Advisories",
        "url": "https://jkpolice.gov.in"
      },
      {
        "name": "India Meteorological Department (IMD) J&K",
        "type": "Mountain Pass Weather, Snow & Avalanche Bulletins",
        "url": "https://www.imd.gov.in"
      },
      {
        "name": "NHIDCL — National Highways & Infrastructure Development Corporation",
        "type": "Zojila Tunnel Project & NH-1 Infrastructure Updates",
        "url": "https://nhidcl.com"
      }
    ],
    "quickFacts": {
      "state": "Jammu & Kashmir, India",
      "mountainRange": "Greater Himalayan Range (Zoji La Range)",
      "elevationSummary": "3,528 m / 11,575 ft above sea level",
      "connects": "Sonamarg (Kashmir Valley) with Dras and Kargil (Ladakh)",
      "nearestTown": "Sonamarg (16 km west) • Dras (30 km east) • Kargil (130 km east)",
      "roadType": "National Highway 1 (NH-1) — Srinagar–Leh Highway",
      "bestTime": "June to September (post-snowmelt, pre-monsoon peak)",
      "highlight": "The only road link between the Kashmir Valley and Ladakh; gateway to Leh on NH-1."
    },
    "routeDetails": {
      "distanceKm": 434,
      "distanceMiles": 270,
      "duration": "2–3 days recommended (Srinagar to Leh via Zoji La)",
      "origin": "Sonamarg, Kashmir (2,730 m / 8,957 ft)",
      "destination": "Dras, Ladakh (3,280 m / 10,761 ft)",
      "waypoints": [
        "Srinagar (1,585 m / 5,200 ft) — Starting city in Kashmir Valley",
        "Gagangir (2,500 m / 8,200 ft) — Last fuel station before Sonamarg",
        "Sonamarg (2,730 m / 8,957 ft) — Last major town, convoy assembly point",
        "Baltal Junction — Amarnath yatra route divergence",
        "Zoji La Pass Zero Point (3,528 m / 11,575 ft) — Summit",
        "Captain Morh Switchbacks — Steep descent toward Dras Valley",
        "Minamarg (3,560 m / 11,680 ft) — Ladakh entry checkpoint",
        "Dras (3,280 m / 10,761 ft) — World's second coldest inhabited place",
        "Kargil (2,676 m / 8,780 ft) — Major Ladakhi town & overnight stop",
        "Lamayuru Monastery Viewpoint (3,510 m)",
        "Leh (3,500 m / 11,480 ft) — Destination: Capital of Ladakh"
      ]
    },
    "distancesTable": [
      {
        "location": "Srinagar",
        "distance": "~108 km",
        "route": "NH-1 via Sonamarg",
        "notes": "Approx. 4–5 hours including convoy wait"
      },
      {
        "location": "Sonamarg",
        "distance": "~16 km",
        "route": "NH-1 (ascending Kashmir side)",
        "notes": "Last petrol pump before pass; 45–60 min drive"
      },
      {
        "location": "Dras",
        "distance": "~30 km",
        "route": "NH-1 (descending Ladakh side)",
        "notes": "First major Ladakhi town after pass; ~1.5 hrs"
      },
      {
        "location": "Kargil",
        "distance": "~130 km",
        "route": "NH-1 via Dras",
        "notes": "Approximately 4–5 hours from the pass summit"
      },
      {
        "location": "Leh",
        "distance": "~434 km",
        "route": "NH-1 via Dras, Kargil, Mulbekh",
        "notes": "Full Srinagar–Leh drive; 2 days recommended"
      }
    ],
    "drivingInfo": {
      "summary": "Driving through Zoji La Pass demands alertness, a well-maintained vehicle, and flexibility. The road is a single-lane mountain track in many sections, prone to landslides, loose gravel, and sudden weather changes. Convoys are mandatory and strictly timed. Never attempt the pass without first checking BRO clearance status.",
      "characteristics": [
        "Single-lane road in critical sections with designated passing bays",
        "Steep switchbacks on both the Sonamarg (Kashmir) and Dras (Ladakh) approaches",
        "Loose gravel, wet shale, and muddy stretches during monsoon (July–September)",
        "Active landslide zones near Captain Morh and upper switchbacks",
        "Zero guardrails on several exposed cliff-edge sections",
        "Road width as narrow as 3.5 metres in some sections"
      ],
      "switchbacksCount": "15–20 sharp hairpin turns on ascent and descent",
      "safetyAndEtiquette": [
        "Always join the official BRO convoy — do not drive independently during restricted periods",
        "Keep headlights on at all times; horn use essential on blind bends",
        "Yield to uphill traffic and military convoys at all times",
        "Do not stop or park on the road surface — use designated pull-offs only",
        "Carry emergency warm clothing, food, and water for a minimum of 24 hours",
        "Maintain a safe following distance of at least 50 metres in convoy",
        "Check fuel level at Sonamarg — no petrol stations between Sonamarg and Dras"
      ],
      "motorcycleTips": [
        "This is a popular Leh-Ladakh motorcycle route — but Zoji La demands respect; overconfidence causes accidents",
        "Ensure your bike is serviced and chain-adjusted before Sonamarg",
        "Ride early in the convoy and avoid getting stuck behind heavy vehicles on switchbacks",
        "Carry a puncture repair kit, spare clutch and brake cables, and tow rope",
        "Ride with headlights on; use horn liberally on blind bends",
        "Watch for fresh gravel and muddy patches after overnight rain"
      ]
    },
    "narrativeSections": [
      {
        "title": "Where Is Zoji La Pass Located?",
        "content": "Zoji La Pass sits in the Greater Himalayan Range along the Jammu & Kashmir / Ladakh boundary in northern India, at GPS coordinates 34.2817° N, 75.4747° E. It is positioned on National Highway 1 (NH-1), 16 km east of the tourist town of Sonamarg on the Kashmir side and approximately 30 km west of Dras on the Ladakh side. The pass lies at the edge of the Kashmir Valley, where the lush Sindh River basin meets the stark cold-desert landscape of the Himalayan rain shadow zone."
      },
      {
        "title": "Which Places Does Zoji La Pass Connect?",
        "content": "Zoji La Pass connects Sonamarg in the Kashmir Valley with Dras in Ladakh, and by extension links Srinagar to Kargil and Leh along NH-1. It is the only road gateway between the Kashmir Valley and the Ladakh region, making it the critical artery for civilian transport, military logistics, tourism, and trade on this corridor. Without Zoji La, Ladakh would be completely road-isolated from the Kashmir side during winter, relying only on the Manali–Leh highway (NH-3) via Rohtang Pass and Baralacha La."
      },
      {
        "title": "Best Time to Visit Zoji La Pass",
        "content": "The ideal window to cross Zoji La is from June to late September. June and early July offer the most stable conditions after BRO snow clearance, with clear skies and manageable road surfaces. August and September bring the monsoon, with intermittent landslides and temporary road closures — though the scenery is dramatic and green on the Kashmir side. October sees the first autumn snowfall and cooling temperatures. The pass is typically closed from late November to late April due to heavy snowfall. Always check the current status through BRO (helpline 1033) before departure regardless of the month, as conditions can change overnight."
      },
      {
        "title": "Zoji La Pass Geography & History",
        "content": "Zoji La lies in the Greater Himalayan Range, a sub-range sometimes called the Zoji La Range or the high-Himalayan watershed between the Sindh River basin and the Drass River valley. The pass is geologically significant as the transition point between two vastly different climate zones — the moist temperate forests of Kashmir to the west and the cold, arid high-altitude desert of Ladakh to the east. Historically, Zoji La was part of the ancient Silk Road trade route connecting Central Asia with the Indian subcontinent. During the 1947–48 Kashmir War, the pass became strategically crucial: Indian Army forces conducted a legendary winter operation — Operation Bison — using light mountain tanks to retake Zoji La from Pakistani tribal militias, a military first for mechanised warfare at high altitude. The BRO has maintained the pass road since 1960. The Zojila Tunnel project, once complete, will provide an all-weather road bypass beneath the pass."
      }
    ],
    "customSeo": {
      "h1": "Zoji La Pass – Live Road Status, Weather & Travel Guide (NH-1)",
      "title": "Zoji La Pass: Live Road Status, Weather, Map & Travel Guide | NH-1",
      "description": "Check Zoji La Pass live road status, current conditions, BRO convoy times, weather, map, and complete travel guide for NH-1 Srinagar–Leh highway in Jammu & Kashmir."
    },
    "faqs": [
      {
        "question": "Where is Zoji La Pass located?",
        "answer": "Zoji La Pass is located in Jammu & Kashmir, India, in the Greater Himalayan Range, on National Highway 1 (NH-1) — the Srinagar–Leh highway. It lies approximately 108 km east of Srinagar, 16 km east of Sonamarg, and 30 km west of Dras, at coordinates 34.28° N, 75.47° E."
      },
      {
        "question": "What is the height of Zoji La Pass?",
        "answer": "Zoji La Pass has an official elevation of 3,528 metres (11,575 feet) above sea level. This makes it one of the highest motorable passes on National Highway 1, though significantly lower than Ladakh's inner passes such as Khardung La (5,359 m) or Chang La (5,360 m)."
      },
      {
        "question": "Which places does Zoji La Pass connect?",
        "answer": "Zoji La Pass connects Sonamarg in the Kashmir Valley to Dras in Ladakh, and by extension links Srinagar to Kargil and Leh along NH-1. It is the only road gateway between Kashmir and Ladakh from the Srinagar side, making it strategically and commercially vital."
      },
      {
        "question": "Which mountain range is Zoji La Pass in?",
        "answer": "Zoji La Pass is situated in the Greater Himalayan Range (also locally referred to as the Zoji La Range). It marks the boundary between the moist Kashmir Valley climate zone and the cold-desert landscape of Ladakh on the eastern side."
      },
      {
        "question": "Is Zoji La Pass open today?",
        "answer": "Live status changes frequently. Zoji La is generally open from late April/May to November each year, subject to BRO clearance and convoy schedules. For the current daily status, call the BRO helpline (1033) or J&K Traffic Police (0194-2474402). During monsoon, temporary closures of hours to days are common due to landslides."
      },
      {
        "question": "What are the current Zoji La Pass road conditions?",
        "answer": "Road conditions on Zoji La vary by season. During summer, the road is a single-lane track with muddy sections, loose gravel, and active landslide zones near Captain Morh. Monsoon months (July–September) are the most challenging, with frequent short-duration closures. Always check BRO helpline 1033 before travel. If live status is unavailable here, verify directly with BRO or J&K police."
      },
      {
        "question": "What is the best time to visit Zoji La Pass?",
        "answer": "The best time is June to late September. June and early July offer the most stable driving conditions with clear skies after BRO snow clearance. August–September brings green scenery but monsoon landslide risk. October is beautiful but early snowfall is possible. The pass is closed from approximately November to April/May."
      },
      {
        "question": "Is there a Zoji La Pass webcam?",
        "answer": "No public live webcam is currently available directly on the Zoji La Pass summit. Reference images of the pass and summit checkpost are shown on this page. For real-time visual updates, J&K Tourism and BRO occasionally post road condition videos on official social media channels. You can also check NHIDCL traffic monitoring for NH-1 updates."
      },
      {
        "question": "How far is Zoji La Pass from Srinagar?",
        "answer": "Zoji La Pass summit is approximately 108 kilometres east of Srinagar city centre, following NH-1 via Ganderbal and Sonamarg. The drive takes approximately 4–5 hours depending on convoy wait times and road conditions."
      },
      {
        "question": "How far is Zoji La Pass from Sonamarg?",
        "answer": "Sonamarg is about 16 kilometres west of the Zoji La Pass summit, on the Kashmir approach side. The drive from Sonamarg to the top takes approximately 45–60 minutes, covering steep switchbacks and narrow mountain road."
      },
      {
        "question": "How far is Zoji La Pass from Kargil?",
        "answer": "Kargil is approximately 130 kilometres east of the Zoji La Pass summit, following NH-1 via Dras. The drive takes around 4–5 hours from the pass, depending on road conditions. Kargil is the first major Ladakhi town and a popular overnight stop on the Srinagar–Leh journey."
      },
      {
        "question": "Can tourists drive through Zoji La Pass?",
        "answer": "Yes, tourists can drive through Zoji La Pass. No special permit is required for Zoji La itself, though an Inner Line Permit (ILP) is required for certain protected areas of Ladakh beyond Leh. Vehicles must comply with BRO convoy regulations, and high ground clearance is strongly recommended. Heavy snowfall or monsoon landslides can close the pass without warning, so always check conditions before departure."
      }
    ],
    "isPopular": true
  },
  {
    "id": "khardung-la",
    "slug": "khardung-la",
    "name": "Khardung La",
    "country": "India",
    "countryCode": "IND",
    "continent": "Asia",
    "state": "Ladakh",
    "highway": "Leh-Nubra Road",
    "elevationFt": 17582,
    "elevationM": 5359,
    "coordinates": {
      "lat": 34.2787,
      "lng": 77.6047
    },
    "status": "OPEN",
    "statusDetail": "Open for vehicular traffic between Leh and Nubra Valley — BRO road maintenance active. Mandatory Inner Line Permit (ILP) required past South Pullu.",
    "lastUpdated": "12 minutes ago",
    "description": "Khardung La (elevation 5,359 m / 17,582 ft) is a legendary high-altitude mountain pass located in the Ladakh Range of Jammu & Kashmir / Ladakh, India. Situated approximately 39 km (24 miles) north of Leh, it serves as the crucial gateway connecting the Indus River Valley with the Shyok and Nubra valleys, and forms the strategic overland logistical lifeline toward the Siachen Glacier.",
    "image": "/khardung-la-ladakh.jpg",
    "weather": {
      "tempF": 19,
      "tempC": -7,
      "condition": "Sub-Zero Alpine Sun & Thin Air",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 15,
      "depthIn": 6,
      "condition": "Glacial Ice & Hardpacked Snow on Ridges"
    },
    "wind": {
      "speedKmh": 30,
      "speedMph": 19,
      "direction": "NW",
      "description": "Chilly High-Altitude Gusts"
    },
    "roadCondition": "Paved two-lane asphalt from Leh to South Pullu (14 km). South Pullu to Khardung La summit (14 km) and North Pullu descent consists of unpaved gravel, loose rocks, glacial meltwater streams, and icy switchbacks. 4WD / high-clearance vehicles and experienced drivers recommended.",
    "chainRequirement": "Anti-skid tire chains required during and immediately following high-altitude snowfall. Mandatory check-in at South Pullu and North Pullu military checkpoints.",
    "cameras": [
      {
        "id": "khardung-cam-summit",
        "title": "Khardung La Top 17,582 ft Summit Overlook",
        "image": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Leh-Nubra Highway MP 39",
        "direction": "Northbound (Nubra) / Southbound (Leh)",
        "location": "Khardung La Summit & Army Medical Post",
        "source": "Border Roads Organisation (BRO Project HIMANK)",
        "updateIntervalMs": 60000,
        "officialUrl": "https://ladakh.nic.in"
      }
    ],
    "nearbyPasses": [
      {
        "id": "zoji-la",
        "slug": "zoji-la",
        "name": "Zoji La Pass",
        "country": "India",
        "state": "Jammu & Kashmir",
        "highway": "NH-1",
        "status": "OPEN",
        "elevationFt": 11575,
        "lastUpdated": "18 min ago",
        "distanceKm": 215
      },
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "35 min ago",
        "distanceKm": 460
      }
    ],
    "overview": {
      "openedYear": 1976,
      "lengthMiles": 25,
      "lengthKm": 40,
      "annualSnowfallIn": 300,
      "annualSnowfallM": 7.6,
      "summary": "Constructed by the Border Roads Organisation (Project HIMANK) in 1976 and opened to public motor vehicles in 1988, Khardung La (5,359 m / 17,582 ft) crosses the rugged Ladakh Range north of Leh. Historically claiming 18,380 ft on local road markers, official Survey of India and modern GPS satellite measurements place the true altitude at 5,359 m (17,582 ft). The pass is globally celebrated as a rite of passage for adventure motorcyclists, cyclists, and high-altitude travelers venturing into the sand dunes of Hunder and the hot springs of Panamik in the Nubra Valley. Due to reduced atmospheric pressure (approximately 50% oxygen of sea level), medical advisories strictly recommend limiting summit stays to 15–20 minutes to prevent Acute Mountain Sickness (AMS)."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Heavy Himalayan Snowstorms)",
      "typicalReopening": "Maintained 24/7 by Border Roads Organisation (Project HIMANK)",
      "description": "Khardung La is maintained year-round by BRO Project HIMANK snowplow crews to ensure military and civilian connectivity to the Nubra Valley. Temporary closures lasting a few hours to several days occur during severe winter blizzards and spring avalanche clearances."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Sub-Zero",
        "tempHighF": 24,
        "tempLowF": 10,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Freezing Himalayan Night",
        "tempHighF": 12,
        "tempLowF": 3,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Clear Sky & High UV",
        "tempHighF": 26,
        "tempLowF": 11,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Passing Alpine Clouds",
        "tempHighF": 22,
        "tempLowF": 8,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Breezy Mountain Flurries",
        "tempHighF": 20,
        "tempLowF": 6,
        "icon": "cloud-snow"
      },
      {
        "day": "Day 5",
        "condition": "Crisp & Sunny",
        "tempHighF": 25,
        "tempLowF": 9,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Border Roads Organisation (BRO Project HIMANK)",
        "type": "High Mountain Road Maintenance & Snow Clearing",
        "url": "https://bro.gov.in"
      },
      {
        "name": "District Administration Leh & Ladakh Police",
        "type": "Inner Line Permits (ILP) & Traffic Timings",
        "url": "https://lahdcleh.gov.in"
      },
      {
        "name": "India Meteorological Department (IMD Leh)",
        "type": "High Altitude Weather Bulletins & Warnings",
        "url": "https://mausam.imd.gov.in"
      },
      {
        "name": "Defence Institute of High Altitude Research (DIHAR / DRDO)",
        "type": "Altitude Safety & Cold Weather Advisories",
        "url": "https://drdo.gov.in"
      }
    ],
    "customSeo": {
      "h1": "Khardung La: Weather, Road Status, Altitude & Live Camera",
      "title": "Khardung La Weather, Road Status, Altitude & Live Camera",
      "description": "Check Khardung La weather, temperature, road status, altitude, map and live camera updates before traveling from Leh to Nubra Valley."
    },
    "faqs": [
      {
        "question": "What is the altitude of Khardung La?",
        "answer": "The verified altitude of Khardung La is 5,359 meters (17,582 feet) above sea level, according to official Survey of India and modern satellite GPS measurements. The historic road sign at the pass summit reads 18,380 feet (5,602 m)."
      },
      {
        "question": "How high is Khardung La in feet?",
        "answer": "Khardung La stands at 17,582 feet (5,359 meters) above sea level. It is one of the highest motorable roads in the world and crosses the high Ladakh Range north of Leh."
      },
      {
        "question": "Where is Khardung La located?",
        "answer": "Khardung La is located in the Union Territory of Ladakh, India, in the Ladakh Range of the Trans-Himalayas. It is situated roughly 39 km (24 miles) north of Leh on the road to the Nubra Valley."
      },
      {
        "question": "What is the Khardung La temperature today?",
        "answer": "Current temperatures at Khardung La summit typically hover around 19°F to 24°F (-7°C to -4°C) during the daytime in summer, frequently dropping well below 0°F (-18°C) at night and throughout the winter months."
      },
      {
        "question": "Is Khardung La open today?",
        "answer": "Yes, Khardung La is currently OPEN for vehicular traffic between Leh and Nubra Valley. BRO Project HIMANK keeps the pass operational year-round with periodic short-term closures during heavy winter snowfall."
      },
      {
        "question": "What is the road condition at Khardung La?",
        "answer": "The road from Leh to South Pullu (14 km) is smooth, paved tarmac. From South Pullu across the summit to North Pullu (approx. 24 km), the road is unpaved with gravel, loose stones, glacial runoff streams, and winter ice. A high-clearance 4WD vehicle or experienced mountain motorcycle ride is recommended."
      },
      {
        "question": "How far is Khardung La from Leh?",
        "answer": "The distance from Leh to Khardung La summit is approximately 39 kilometers (24 miles). The scenic drive through winding switchbacks takes about 1.5 to 2 hours depending on road and traffic conditions."
      },
      {
        "question": "What does Khardung La connect?",
        "answer": "Khardung La connects the Indus River Valley (Leh) with the Shyok and Nubra Valleys (Diskit, Hunder, Turtuk, and Panamik). It is also the strategic civilian and military overland route supporting the Siachen Glacier region."
      },
      {
        "question": "Is Khardung La the highest pass in Ladakh?",
        "answer": "No. While long celebrated as the world's highest motorable pass, higher motorable passes have since been constructed in Ladakh, including Umling La (19,024 ft / 5,798 m), Mig La, and Marsimik La. Khardung La remains the most famous and historically frequented high mountain pass in Ladakh."
      },
      {
        "question": "When is the best time to visit Khardung La?",
        "answer": "The best time to visit Khardung La is between May and September when daytime temperatures are manageable, skies are clear, and connecting routes to Nubra Valley and Pangong Tso are fully operational."
      },
      {
        "question": "Can I see Khardung La through a live camera?",
        "answer": "You can check the latest camera snapshot and mountain status in the Live Camera section above on this page, or access the official Ladakh administration and Border Roads Organisation advisories."
      },
      {
        "question": "Do I need a permit for Khardung La and Nubra Valley?",
        "answer": "Yes. All travelers require an Inner Line Permit (ILP) for Indian citizens or a Protected Area Permit (PAP) for foreign nationals, obtainable online via the official Leh administration portal (lahdcleh.gov.in) and verified at the South Pullu and North Pullu military checkpoints."
      }
    ],
    "isPopular": true
  },
  {
    "id": "chang-la-pass",
    "slug": "chang-la-pass",
    "name": "Chang La Pass",
    "alternateNames": [
      "Chang La",
      "Changla Pass",
      "Chang La Pass Ladakh",
      "Changla Baba Pass"
    ],
    "country": "India",
    "countryCode": "IND",
    "continent": "Asia",
    "state": "Ladakh",
    "highway": "Leh–Pangong Highway (via Karu, Sakti, Zingral & Tangtse)",
    "elevationFt": 17590,
    "elevationM": 5360,
    "coordinates": {
      "lat": 34.0478,
      "lng": 77.9304
    },
    "status": "OPEN",
    "statusDetail": "Open for 4x4 and high-ground clearance vehicles. Snow clearance operations active by BRO Project HIMANK. Sub-zero temperatures at summit.",
    "lastUpdated": "15 minutes ago",
    "description": "Chang La Pass (elevation 5,360 m / 17,590 ft, summit marker 17,688 ft) is the world's third highest motorable mountain pass, located in the Ladakh Union Territory of India. Traversed by the strategic Leh–Pangong Highway across the Ladakh Range, it serves as the essential high-altitude overland gateway connecting Leh, Karu, and the Indus Valley with Durbuk, Tangtse, and the iconic Pangong Tso (Pangong Lake). Maintained year-round by the Border Roads Organisation (BRO Project HIMANK), the pass features the revered Changla Baba Mandir, emergency oxygen facilities, and steep, unpaved gravel switchbacks through Zingral.",
    "image": "/chang-la-pass-road-status-webcam.webp",
    "weather": {
      "tempF": 18,
      "tempC": -8,
      "condition": "Sub-Zero High Altitude Winds",
      "icon": "wind"
    },
    "snowDepth": {
      "depthCm": 45,
      "depthIn": 18,
      "condition": "Packed Ice & Hardpack Snow on Summit Shoulders"
    },
    "wind": {
      "speedKmh": 45,
      "speedMph": 28,
      "direction": "NW",
      "description": "Strong Arctic Altitude Gusts"
    },
    "roadCondition": "Paved asphalt from Leh up to Zingral military checkpost. The final 10–15 km ascent and descent over Chang La summit consists of loose gravel, hardpack ice, seasonal melting glacial runoff (Pagal Nallah), and unbanked switchbacks. 4x4 or high ground-clearance vehicles with experienced mountain drivers recommended.",
    "chainRequirement": "Anti-skid tire chains mandatory during active winter snowfall, ice conditions, and early spring melt (November to April). High ground-clearance required.",
    "cameras": [],
    "nearbyPasses": [
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La Pass",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Road",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "15 min ago",
        "distanceKm": 115
      },
      {
        "id": "zoji-la",
        "slug": "zoji-la",
        "name": "Zoji La Pass",
        "country": "India",
        "state": "Jammu & Kashmir",
        "highway": "NH-1",
        "status": "OPEN",
        "elevationFt": 11575,
        "lastUpdated": "18 min ago",
        "distanceKm": 185
      },
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway (NH-03)",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "12 min ago",
        "distanceKm": 490
      }
    ],
    "overview": {
      "openedYear": 1962,
      "lengthMiles": 30,
      "lengthKm": 48,
      "annualSnowfallIn": 380,
      "annualSnowfallM": 9.6,
      "summary": "Chang La Pass (5,360 m / 17,590 ft) traverses the rugged Ladakh Range between the Indus River Valley and the high Tibetan Plateau / Changthang region. Built and maintained by the Border Roads Organisation (BRO) under Project HIMANK with the motto 'The Mountain Tamers', it is the only road link to the world-famous Pangong Tso and the strategic frontier posts of eastern Ladakh. The pass climbs through steep terrain via Sakti and Zingral, reaching an altitude where oxygen levels drop to nearly 50% of sea level. Travelers are strongly advised to restrict summit dwell time to 15–20 minutes to avoid Acute Mountain Sickness (AMS)."
    },
    "narrativeSections": [
      {
        "title": "Gateway to Pangong Tso & Strategic High-Altitude Route",
        "content": "Chang La is the primary gateway to the high-altitude Changthang region and the legendary 134-kilometer-long Pangong Tso (Pangong Lake), which spans India and Tibet. Ascending from Karu and Sakti village, the route climbs through the Zingral military checkpoint before cresting at 5,360 meters. The pass is maintained under extreme Arctic conditions by the Border Roads Organisation (Project HIMANK)."
      },
      {
        "title": "Changla Baba Mandir, Tea Post & Altitude Safety",
        "content": "At the Chang La summit stands the revered Changla Baba Mandir, where passing drivers and Indian Army convoys stop for blessings. Adjacent to the shrine, Indian Army personnel operate a high-altitude medical post equipped with emergency oxygen cylinders and serve complimentary hot black tea to help travelers counter the onset of Acute Mountain Sickness (AMS). Due to the rarefied atmosphere, staying longer than 20 minutes at the summit is strictly discouraged."
      }
    ],
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Nearly Year-Round (Subject to winter blizzards & BRO snow clearing)",
      "typicalReopening": "Maintained 24/7 by BRO Project HIMANK rotary snow cutters",
      "description": "Unlike lower seasonal passes, the Border Roads Organisation strives to keep Chang La open year-round for military and civilian transit to the Changthang region. However, severe winter blizzards, sub-zero cold waves (-35°C), and massive snow accumulation can trigger temporary preventive closures lasting 1 to 4 days during winter storm cycles."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sub-Zero Alpine Sun",
        "tempHighF": 22,
        "tempLowF": 8,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Freezing High Himalayan Sky",
        "tempHighF": 12,
        "tempLowF": -2,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Partly Cloudy & Icy Gusts",
        "tempHighF": 25,
        "tempLowF": 10,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 3",
        "condition": "High Altitude Clouds",
        "tempHighF": 20,
        "tempLowF": 6,
        "icon": "wind"
      },
      {
        "day": "Day 4",
        "condition": "Crisp Mountain Sun",
        "tempHighF": 24,
        "tempLowF": 9,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Chilly Alpine Winds",
        "tempHighF": 21,
        "tempLowF": 7,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "Border Roads Organisation (BRO Project HIMANK)",
        "type": "Official Himalayan Road & Snow Clearance Authority",
        "url": "https://bro.gov.in"
      },
      {
        "name": "District Administration Leh (LAHDC Leh)",
        "type": "Traffic Advisories & Inner Line Permits (ILP)",
        "url": "https://leh.nic.in"
      },
      {
        "name": "Ladakh Police Traffic Headquarters",
        "type": "Real-time Highway Bulletins & Convoy Alerts",
        "url": "https://police.ladakh.gov.in"
      },
      {
        "name": "India Meteorological Department (IMD Leh)",
        "type": "High Altitude Weather & Blizzard Warnings",
        "url": "https://mausam.imd.gov.in"
      }
    ],
    "customSeo": {
      "h1": "Chang La Pass Live Road Status, Opening Date & Conditions",
      "title": "Chang La Pass Live Road Status, Opening Date & Conditions – Updated Today",
      "description": "Check real-time Chang La pass status today, opening date, road conditions, Pangong Lake travel advisories, and weather on Leh–Pangong Highway. Verified and updated today."
    },
    "searchKeywords": [
      "Chang La opening date",
      "Chang La is open",
      "Chang La road conditions",
      "Chang La road status",
      "Chang La pass status report",
      "when does Chang La open",
      "Chang La closed",
      "Chang La is closed",
      "Chang La is it open today",
      "is Chang La closed today",
      "Chang La webcam",
      "Chang La live webcam",
      "Chang La cameras",
      "Chang La summit camera",
      "when does Chang La close for winter",
      "Chang La map",
      "is Chang La open right now",
      "Chang La pass Ladakh",
      "Leh to Pangong Lake road status",
      "Changla Baba Mandir"
    ],
    "faqs": [
      {
        "question": "Is Chang La open today?",
        "answer": "Yes, Chang La is currently OPEN for vehicular traffic between Leh and Pangong Tso (Tangtse / Spangmik). BRO Project HIMANK maintains continuous snow-clearing operations across the pass. Always verify daily road condition advisories from Ladakh Police before departure during winter."
      },
      {
        "question": "Is Chang La open right now?",
        "answer": "Chang La is currently OPEN. 4x4 vehicles and high-ground clearance SUVs with experienced alpine drivers are recommended due to unpaved gravel, ice, and meltwater streams near the summit."
      },
      {
        "question": "What is the current Chang La road status and pass status report?",
        "answer": "The current Chang La road status is OPEN with caution. The route is paved from Leh up to Zingral; the final 10–15 km over the summit involves rough gravel, icy patches, and hairpin switchbacks. Snow chains are advised during active winter storm cycles."
      },
      {
        "question": "What are the current Chang La road conditions?",
        "answer": "Road conditions on Chang La feature paved tarmac up to Zingral, followed by a rugged, unpaved gravel ascent with hairpin bends across the 5,360 m summit. Melting glacier streams (Pagal Nallah) may cross the roadway in summer afternoons. A 4WD or high-clearance vehicle is recommended."
      },
      {
        "question": "When does Chang La open and what is the opening date?",
        "answer": "Chang La does not have a single fixed seasonal opening date because BRO Project HIMANK keeps the pass open almost year-round to maintain vital transport links to Pangong Lake and eastern Ladakh. Temporary closures occur during active heavy blizzards and usually reopen within 24 to 72 hours after snow cutting."
      },
      {
        "question": "When does Chang La close for winter?",
        "answer": "Chang La is NOT closed for the entire winter. The Border Roads Organisation keeps the corridor open throughout the winter months, only imposing temporary preventive closures during intense snowfall, avalanche risk, or extreme sub-zero blizzards."
      },
      {
        "question": "Is Chang La closed today?",
        "answer": "No, Chang La is not closed today. The pass is operational under normal alpine conditions. If temporary storm closures occur, LivePassWatch updates the live status card instantly based on official BRO and Ladakh Police bulletins."
      },
      {
        "question": "Does Chang La have a live webcam or summit camera?",
        "answer": "No verified public live camera feed is currently operated on Chang La Pass due to extreme sub-zero weather conditions (-35°C in winter) and high-altitude security infrastructure. Road conditions are verified through official Border Roads Organisation (BRO) and Ladakh Police traffic advisories."
      },
      {
        "question": "Do I need an Inner Line Permit (ILP) to cross Chang La to Pangong Lake?",
        "answer": "Yes. Indian tourists require an Inner Line Permit (ILP) and foreign nationals require a Protected Area Permit (PAP) issued by the District Administration Leh (lahdcleh.gov.in) to travel past Karu and cross Chang La to Pangong Lake."
      },
      {
        "question": "How high is Chang La Pass and how long can you stay at the summit?",
        "answer": "Chang La sits at an elevation of 5,360 meters (17,590 ft, with roadside markers reading 17,688 ft), making it the world's third highest motorable pass. Due to low oxygen levels (approx. 50% of sea level), medical authorities strictly advise limiting summit dwell time to 15–20 minutes to prevent Acute Mountain Sickness (AMS)."
      },
      {
        "question": "How far is Pangong Lake from Leh via Chang La?",
        "answer": "Pangong Lake (Lukung/Spangmik) is approximately 140–160 km from Leh via Karu, Sakti, Chang La Pass, Durbuk, and Tangtse. The journey takes approximately 4 to 6 hours depending on road and weather conditions."
      }
    ],
    "isPopular": true
  },
  {
    "id": "rohtang-pass",
    "slug": "rohtang-pass",
    "name": "Rohtang Pass",
    "country": "India",
    "countryCode": "IND",
    "continent": "Asia",
    "state": "Himachal Pradesh",
    "highway": "Leh-Manali Highway (NH-03)",
    "elevationFt": 13058,
    "elevationM": 3980,
    "coordinates": {
      "lat": 32.3716,
      "lng": 77.2466
    },
    "status": "OPEN",
    "statusDetail": "Open for seasonal summer tourism with mandatory online NGT permit. Strict vehicle quota enforced by Kullu administration.",
    "lastUpdated": "12 minutes ago",
    "description": "Rohtang Pass (elevation 13,058 ft / 3,980 m) is a world-renowned Himalayan mountain pass located in Himachal Pradesh, India. Situated on the eastern Pir Panjal Range approximately 51 km from Manali, Rohtang Pass connects the lush Kullu Valley with the high-altitude, arid Lahaul and Spiti Valleys along the iconic Leh-Manali Highway corridor.",
    "image": "/rohtang-pass-himachal-pradesh.jpg",
    "weather": {
      "tempF": 36,
      "tempC": 2,
      "condition": "Partly Cloudy & Mountain Breeze",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 25,
      "depthIn": 10,
      "condition": "Glacial Snow Patches & Alpine Permafrost"
    },
    "wind": {
      "speedKmh": 24,
      "speedMph": 15,
      "direction": "NW",
      "description": "Chilly Himalayan Gusts"
    },
    "roadCondition": "Two-lane paved asphalt road with switchbacks and sharp turns from Manali to Marhi. Summit sector between Marhi (MP 35) and Rohtang Top (MP 51) has paved surface with seasonal runoff streams and narrow shoulders. 4WD or good ground clearance recommended. All ascending traffic must clear Gulaba checkpoint before 12:00 PM.",
    "chainRequirement": "Mandatory NGT Rohtang Pass online permit. Snow chains required for all vehicles during active snow flurries or icy road conditions.",
    "cameras": [
      {
        "id": "rohtang-cam-summit",
        "title": "Rohtang Top 13,058 ft Viewpoint Overlook",
        "image": "/rohtang-pass-himachal-pradesh.jpg",
        "timestamp": "Updated 2 min ago",
        "location": "Rohtang Pass Summit Overlook",
        "milepost": "MP 51 Summit",
        "direction": "North toward Lahaul / South toward Manali",
        "source": "Himachal Tourism & Kullu District Police",
        "updateIntervalMs": 120000,
        "officialUrl": "https://himachaltourism.gov.in"
      },
      {
        "id": "rohtang-cam-marhi",
        "title": "Marhi Checkpoint & Alpine Staging Area",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 5 min ago",
        "location": "Marhi Tourist Base & Dhabas",
        "milepost": "MP 35 Checkpoint",
        "direction": "Uphill to Summit",
        "source": "Kullu District Traffic Control",
        "updateIntervalMs": 180000,
        "officialUrl": "https://dckullu.hp.gov.in"
      },
      {
        "id": "rohtang-cam-gulaba",
        "title": "Gulaba Forest Barrier & Permit Scanner",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 10 min ago",
        "location": "Gulaba Permit Gate & Green Barrier",
        "milepost": "MP 22 Barrier",
        "direction": "Northbound Access Control",
        "source": "HP Forest & Traffic Enforcement",
        "updateIntervalMs": 180000,
        "officialUrl": "https://rohtangpermits.nic.in"
      },
      {
        "id": "rohtang-cam-solang",
        "title": "Solang Valley Ridge & Approach Highway",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 15 min ago",
        "location": "Solang Valley Junction",
        "milepost": "MP 12 Approach",
        "direction": "East toward Palchan & Rohtang",
        "source": "Manali Tourism Board",
        "updateIntervalMs": 300000,
        "officialUrl": "https://hp.gov.in"
      }
    ],
    "nearbyPasses": [
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La Pass",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Highway",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "15 min ago",
        "distanceKm": 460
      },
      {
        "id": "zoji-la",
        "slug": "zoji-la",
        "name": "Zoji La Pass",
        "country": "India",
        "state": "Jammu & Kashmir",
        "highway": "NH-1",
        "status": "OPEN",
        "elevationFt": 11575,
        "lastUpdated": "18 min ago",
        "distanceKm": 520
      }
    ],
    "permitInfo": {
      "isRequired": true,
      "permitName": "NGT Rohtang Pass Eco-Permit",
      "quotaDetails": "Strict daily quota of 1,200 vehicles (800 Petrol vehicles and 400 Diesel vehicles) strictly enforced by National Green Tribunal (NGT) environmental mandates.",
      "applyUrl": "https://rohtangpermits.nic.in/",
      "portalName": "Official Kullu District Administration Portal (rohtangpermits.nic.in)",
      "costInfo": "₹500 congestion charge + ₹50 environmental cess per vehicle (valid for 1 calendar day).",
      "instructions": [
        "Permits open online daily in two batches: 10:00 AM (first batch for the next day) and 4:00 PM (second batch for the next day) on the official government portal rohtangpermits.nic.in.",
        "Required documents: Vehicle Registration Certificate (RC), valid Pollution Under Control (PUC) certificate, and driver identity proof.",
        "Vehicles proceeding beyond Rohtang to Keylong, Jispa, Leh-Ladakh, or Spiti Valley require a \"Travel Beyond Rohtang\" permit issued via the SDM Manali administration portal.",
        "Commercial tourist taxis (yellow plate) and private vehicles (white plate) must each apply under their respective category."
      ],
      "keyRules": [
        "CLOSED EVERY TUESDAY: Rohtang Pass is strictly closed to all tourist vehicles every Tuesday for weekly road maintenance, avalanche clearance, and cleanup by BRO Project Deepak.",
        "Vehicle Age Restriction: Under NGT orders, diesel vehicles older than 10 years and petrol vehicles older than 15 years are NOT permitted to visit Rohtang Pass.",
        "Automated QR Code Verification: Every permit is scanned via automated barcode readers at the Gulaba forest barrier before vehicles are allowed to ascend."
      ]
    },
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Seasonal Summer Corridor: Expected Opening May 2026 (Subject to BRO Snow Clearance)",
      "expectedOpeningWindow": "Mid-May to Early June 2026",
      "closingWindow": "Mid-November 2026 (Following first major Himalayan blizzards)",
      "clearanceAgency": "Border Roads Organisation (BRO Project Deepak & 70 RCC)",
      "notes": "Snow-clearing operations commence annually in March/April across Rahla Falls, Gulaba, and Marhi. Opening dates fluctuate depending on cumulative winter snowpack depth (which regularly exceeds 30–50 ft at the summit) and spring avalanche risk assessments.",
      "atalTunnelBypassNote": "Travelers heading onward to Keylong, Jispa, Leh, or Kaza do NOT need to wait for Rohtang Pass to open. The Atal Tunnel (Rohtang Tunnel) provides year-round all-weather connectivity under the Pir Panjal Range bypassing the high-altitude pass summit."
    },
    "quickFacts": {
      "state": "Himachal Pradesh, India",
      "mountainRange": "Pir Panjal Range (Western Himalayas)",
      "elevationSummary": "13,058 ft (3,980 m) above sea level",
      "connects": "Kullu Valley (Manali) with Lahaul and Spiti Valleys",
      "nearestTown": "Manali (51 km / 32 miles, ~2 hours drive)",
      "roadType": "Leh-Manali Highway (Old NH-21 / NH-03)",
      "bestTime": "Late May through October (for alpine snow, blue skies & wildflowers)",
      "highlight": "Ancient Himalayan trade route and watershed divide between the Beas and Chandra River basins."
    },
    "routeDetails": {
      "distanceKm": 51,
      "distanceMiles": 32,
      "duration": "1.5 to 2.5 hours from Manali Town",
      "origin": "Manali (Elevation 2,050 m / 6,725 ft)",
      "destination": "Rohtang Pass Summit (Elevation 3,980 m / 13,058 ft)",
      "waypoints": [
        "Manali Town (0 km)",
        "Nehru Kund (6 km)",
        "Palchan (9 km)",
        "Kothi Village (14 km)",
        "Gulaba Permit Barrier (22 km)",
        "Rahla Waterfalls (27 km)",
        "Marhi Tourist Base (35 km)",
        "Rani Nallah Glacier Runoff (45 km)",
        "Rohtang Top Summit (51 km)"
      ]
    },
    "overview": {
      "openedYear": 1962,
      "lengthMiles": 32,
      "lengthKm": 51,
      "annualSnowfallIn": 480,
      "annualSnowfallM": 12.2,
      "summary": "Rohtang Pass (3,980 m / 13,058 ft) is a legendary high mountain pass situated on the eastern Pir Panjal Range in the state of Himachal Pradesh, India. Located approximately 51 km (32 miles) north of Manali, the pass serves as the historic watershed divide between the humid Kullu Valley (watered by the Beas River) and the rain-shadow alpine desert of the Lahaul and Spiti Valleys (drained by the Chandra and Bhaga rivers). The name Rohtang historically translates from Ladakhi to \"pile of corpses,\" referencing ancient travelers who perished in sudden Himalayan blizzards. Today, maintained by the Border Roads Organisation (Project Deepak), Rohtang Pass is an iconic tourist destination celebrated for panoramic vistas of glaciers, snow peaks (including the Geypan twin peaks), and dramatic alpine switchbacks. With the inauguration of the 9.02 km Atal Tunnel at Rohtang in 2020, heavy transit traffic to Ladakh bypasses the pass, leaving Rohtang Pass dedicated as an eco-regulated scenic alpine sanctuary."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Mid-November to Early May (Heavy Winter Snow & Avalanches)",
      "typicalReopening": "Mid-May to Early June (BRO Project Deepak Snowplow Clearance)",
      "description": "Rohtang Pass receives 30 to 50 feet of cumulative winter snowfall, remaining closed to vehicular traffic from mid-November until late spring. BRO Project Deepak deploys high-powered snowcutters and excavators each March/April to clear avalanche cones and reopen the road for summer tourism."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy & Crisp",
        "tempHighF": 38,
        "tempLowF": 22,
        "icon": "cloud-sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear & Freezing Night",
        "tempHighF": 26,
        "tempLowF": 18,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny with Alpine Breeze",
        "tempHighF": 40,
        "tempLowF": 24,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered High Clouds",
        "tempHighF": 37,
        "tempLowF": 21,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Passing Snow Flurries",
        "tempHighF": 32,
        "tempLowF": 16,
        "icon": "cloud-snow"
      },
      {
        "day": "Day 5",
        "condition": "Bright & Clear Sky",
        "tempHighF": 39,
        "tempLowF": 23,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Border Roads Organisation (BRO Project Deepak & 70 RCC)",
        "type": "High Altitude Highway Maintenance & Snow Clearance",
        "url": "https://bro.gov.in"
      },
      {
        "name": "District Administration Kullu & Himachal Pradesh Police",
        "type": "NGT Online Permits, Gulaba Barrier & Traffic Advisories",
        "url": "https://rohtangpermits.nic.in"
      },
      {
        "name": "India Meteorological Department (IMD Shimla / Manali)",
        "type": "Western Himalayan Mountain Weather & Forecasts",
        "url": "https://mausam.imd.gov.in"
      },
      {
        "name": "Himachal Pradesh Tourism Development Corporation (HPTDC)",
        "type": "Tourism Guidance, Transport & Safety Regulations",
        "url": "https://hptdc.in"
      }
    ],
    "customSeo": {
      "h1": "Rohtang Pass – Weather, Road Status, Permit & Live Camera",
      "title": "Rohtang Pass Weather, Road Status, Permit & Live Camera",
      "description": "Check Rohtang Pass weather, temperature, road status, permit information, opening date, map and live camera updates before traveling."
    },
    "faqs": [
      {
        "question": "What is the Rohtang Pass opening date in 2026?",
        "answer": "Rohtang Pass is expected to open for seasonal summer tourism between mid-May and early June 2026, depending on the completion of snow-clearing operations by Border Roads Organisation (BRO Project Deepak). Opening dates vary annually based on winter snowpack depth and avalanche stability assessments."
      },
      {
        "question": "Is Rohtang Pass open today?",
        "answer": "Rohtang Pass is currently OPEN for tourists holding a valid online NGT permit. Ascent is permitted from Manali up to the summit via the Gulaba barrier from early morning until 12:00 PM. Note that Rohtang Pass is closed every Tuesday for mandatory maintenance."
      },
      {
        "question": "How do I get a Rohtang Pass permit?",
        "answer": "You can obtain an official Rohtang Pass permit by booking online at the Kullu District Administration portal (rohtangpermits.nic.in). Applications open daily in two windows at 10:00 AM and 4:00 PM for next-day travel. You will need your vehicle registration certificate (RC), valid PUC certificate, and driver ID."
      },
      {
        "question": "Can I apply for a Rohtang Pass permit online?",
        "answer": "Yes. Online application is the only official method to obtain a Rohtang Pass permit. The official portal is rohtangpermits.nic.in, where 1,200 permits (800 petrol, 400 diesel) are issued daily on a first-come, first-served basis as mandated by the National Green Tribunal (NGT)."
      },
      {
        "question": "What is the Rohtang Pass temperature today?",
        "answer": "The daytime temperature at Rohtang Pass summit today is approximately 36°F (2°C), with nighttime temperatures dropping to around 22°F (-6°C). High-altitude mountain weather changes rapidly, so travelers are advised to dress in heavy woolen layers and windproof jackets."
      },
      {
        "question": "What is the weather at Rohtang Pass?",
        "answer": "The weather at Rohtang Pass summit (13,058 ft) is alpine and crisp, featuring partly cloudy skies and breezy conditions. Sudden mist, temperature drops, and localized snowfall can occur even during summer months."
      },
      {
        "question": "How high is Rohtang Pass?",
        "answer": "Rohtang Pass is located at an altitude of 3,980 meters (13,058 feet) above sea level on the eastern Pir Panjal Range in Himachal Pradesh, India."
      },
      {
        "question": "What is the height of Rohtang Pass in feet?",
        "answer": "The height of Rohtang Pass is 13,058 feet (3,980 meters) above sea level."
      },
      {
        "question": "Where is Rohtang Pass located?",
        "answer": "Rohtang Pass is located in the state of Himachal Pradesh, India, approximately 51 kilometers (32 miles) north of Manali in the Kullu District, on the highway leading toward the Lahaul and Spiti Valleys."
      },
      {
        "question": "What does Rohtang Pass connect?",
        "answer": "Rohtang Pass connects the Kullu Valley with the Lahaul and Spiti Valleys in Himachal Pradesh. It acts as the primary geographic watershed divide between the Beas River basin to the south and the Chandra River basin to the north."
      },
      {
        "question": "How far is Rohtang Pass from Manali?",
        "answer": "Rohtang Pass is approximately 51 kilometers (32 miles) from Manali town. The drive takes about 1.5 to 2.5 hours via the scenic Leh-Manali Highway passing through Nehru Kund, Kothi, Gulaba, and Marhi."
      },
      {
        "question": "Can I see Rohtang Pass through a live camera?",
        "answer": "Yes. You can view camera snapshots and status updates directly in the Live Camera section on this page, or access official streams and traffic snapshots provided by Himachal Pradesh Tourism and Kullu District Police."
      },
      {
        "question": "Is Rohtang Pass closed on Tuesdays?",
        "answer": "Yes. Rohtang Pass is strictly closed to all tourist traffic every Tuesday for routine road maintenance, avalanche mitigation, and environmental cleanup carried out by BRO Project Deepak."
      },
      {
        "question": "What is the difference between Rohtang Pass and the Atal Tunnel?",
        "answer": "Rohtang Pass is the historic 13,058 ft (3,980 m) high-altitude mountain pass visited for scenic snow views and tourism. The Atal Tunnel is a modern 9.02 km highway tunnel bored at 3,100 m elevation beneath the Pir Panjal Range that bypasses Rohtang Pass to provide year-round transit to Keylong, Lahaul, and Ladakh without requiring an NGT Rohtang permit."
      }
    ],
    "isPopular": true
  },
  {
    "id": "nathu-la",
    "slug": "nathu-la",
    "name": "Nathu La Pass",
    "country": "India",
    "countryCode": "IND",
    "continent": "Asia",
    "state": "Sikkim",
    "highway": "NH-310 (Gangtok–Nathu La Road)",
    "elevationFt": 14140,
    "elevationM": 4310,
    "coordinates": {
      "lat": 27.389,
      "lng": 88.828
    },
    "status": "OPEN",
    "statusDetail": "Status currently unavailable — awaiting official verification. Nathu La is a restricted military zone managed by the Indian Army. Access requires prior permits from the Sikkim government. Check with local authorities before travel.",
    "lastUpdated": "23 Aug 2026, 06:42 IST",
    "description": "Nathu La Pass (elevation 4,310 m / 14,140 ft) is a high-altitude Himalayan mountain pass on the border between Sikkim, India, and the Tibet Autonomous Region of China. Located approximately 54 km east of Gangtok, the pass sits on the ancient Silk Route and was a key trade corridor between India and Tibet for centuries. Nathu La is a restricted border crossing — access is permitted only on specific days with government-issued permits, making advance planning essential for all visitors.",
    "image": "/nathu-la-pass-sikkim.jpg",
    "weather": {
      "tempF": 39,
      "tempC": 4,
      "condition": "Partly Cloudy & Alpine Chill",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Dry — Late August, post-monsoon transition"
    },
    "wind": {
      "speedKmh": 28,
      "speedMph": 17,
      "direction": "W",
      "description": "Brisk High-Altitude Breeze"
    },
    "roadCondition": "The road from Gangtok to Nathu La summit follows NH-310 through Tsomgo Lake (12,400 ft) and the army cantonment at Sherathang. The final approach to the summit is paved but narrow with sharp switchbacks. Road surface can be slick in the monsoon season (June–September) and snow-covered in winter (December–March). High-clearance vehicles and experienced drivers recommended. Army checkpoints at multiple points require valid permits.",
    "chainRequirement": "Snow chains required between December and March. Vehicles must carry chains during active snowfall. Indian Army checkpoints enforce compliance. All vehicles must have valid Inner Line Permits (ILP) and Restricted Area Permits (RAP) issued by the Sikkim government.",
    "cameras": [
      {
        "id": "nathu-la-cam-note",
        "title": "Nathu La — No Public Camera Feed Available",
        "image": "/nathu-la-pass-sikkim.jpg",
        "location": "Nathu La Summit, Sikkim–Tibet Border",
        "source": "Reference image — not a live feed",
        "officialUrl": "https://sikkimtourism.gov.in"
      }
    ],
    "nearbyPasses": [
      {
        "id": "zoji-la",
        "slug": "zoji-la",
        "name": "Zoji La Pass",
        "country": "India",
        "state": "Jammu & Kashmir",
        "highway": "NH-1",
        "status": "OPEN",
        "elevationFt": 11575,
        "lastUpdated": "18 min ago",
        "distanceKm": 980
      },
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Road",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "25 min ago",
        "distanceKm": 1250
      },
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway (NH-03)",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "35 min ago",
        "distanceKm": 1550
      }
    ],
    "overview": {
      "openedYear": 1955,
      "lengthMiles": 34,
      "lengthKm": 54,
      "annualSnowfallIn": 120,
      "annualSnowfallM": 3,
      "summary": "Nathu La (meaning \"Listening Ears Pass\" in Tibetan) sits at 4,310 m (14,140 ft) on the ancient Silk Route between Sikkim and Tibet. Historically a major trade artery closed in 1962 during the Sino-Indian War, it was partially reopened for bilateral trade in 2006 after 44 years. The Indian Army manages the summit zone; visitor access is strictly regulated to specific days of the week and requires advance permits from the Sikkim government. The pass is renowned for panoramic views of the Himalayan range and the stark boundary markers at the India–China border."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "December through mid-April (heavy snowfall period)",
      "typicalReopening": "Typically mid-April to early May, subject to snow clearance by Border Roads Organisation",
      "description": "Nathu La Pass typically closes to civilian visitors between December and mid-April due to heavy snowfall and hazardous road conditions. Reopening depends on BRO snow clearance operations and security clearance from the Indian Army. Even when open, access is restricted to designated days (typically Tuesday, Wednesday, Thursday, Saturday, Sunday for Indian nationals) and weather can force unscheduled closures at any time. The pass remains open year-round for military traffic and authorized border trade."
    },
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Status unconfirmed — contact Sikkim Tourism or local authorities for current season opening dates",
      "expectedOpeningWindow": "Mid-April to early May (subject to snow clearance)",
      "closingWindow": "December (subject to early snowfall)",
      "clearanceAgency": "Border Roads Organisation (BRO) — Project Swastik",
      "notes": "Nathu La does not have a fixed, published annual opening date. The decision is made by the Indian Army and BRO based on snow clearance conditions, security assessments, and weather forecasts. Indian nationals must pre-register with the District Collector's office in Gangtok. Foreign nationals are not permitted at the Nathu La summit."
    },
    "trafficSchedule": {
      "title": "Nathu La Pass Access Schedule",
      "timingDetails": "Open to Indian civilian visitors on designated days only: typically Tuesday, Wednesday, Thursday, Saturday, and Sunday. Access hours are generally 08:00–15:00 IST (subject to army clearance). Closed on Mondays and Fridays. Closed entirely to foreign nationals.",
      "rules": [
        "Valid Inner Line Permit (ILP) required — obtainable from Sikkim government offices in Gangtok",
        "Permits must be arranged at least one day in advance",
        "Indian nationals only — foreign nationals not permitted at the summit",
        "Vehicles must clear Sherathang checkpoint before 09:30 IST",
        "All visitors must descend before 15:00 IST",
        "Army vehicles and border trade vehicles have right of way at all times",
        "No photography near military installations or the border fence"
      ]
    },
    "quickFacts": {
      "state": "Sikkim, India",
      "mountainRange": "Eastern Himalaya / Sikkim Himalaya",
      "elevationSummary": "4,310 m (14,140 ft) above sea level",
      "connects": "Gangtok (Sikkim, India) — Tibet Autonomous Region (China)",
      "nearestTown": "Gangtok (54 km west)",
      "roadType": "Paved mountain road with switchbacks — restricted military zone",
      "bestTime": "May to November (outside monsoon heaviest rains: July–August)",
      "highlight": "India–China border crossing on the ancient Silk Route; Tsomgo Lake en route"
    },
    "routeDetails": {
      "distanceKm": 54,
      "distanceMiles": 34,
      "duration": "2 to 2.5 hours from Gangtok (one way)",
      "origin": "Gangtok, Sikkim",
      "destination": "Nathu La Pass Summit (4,310 m)",
      "waypoints": [
        "Ranka (10 km)",
        "Kyongnosla (26 km)",
        "Tsomgo Lake / Changu Lake (12,400 ft, 38 km)",
        "Sherathang Army Checkpoint (48 km)",
        "Nathu La Summit (54 km)"
      ]
    },
    "distancesTable": [
      {
        "location": "Gangtok",
        "distance": "54 km",
        "route": "NH-310",
        "notes": "State capital — permits obtained here"
      },
      {
        "location": "Tsomgo (Changu) Lake",
        "distance": "38 km from Gangtok",
        "route": "NH-310",
        "notes": "Key stop en route; 12,400 ft elevation"
      },
      {
        "location": "Sherathang Checkpoint",
        "distance": "48 km from Gangtok",
        "route": "NH-310",
        "notes": "Last army checkpoint before summit"
      },
      {
        "location": "Siliguri (NJP)",
        "distance": "~130 km",
        "route": "NH-10 → NH-310",
        "notes": "Nearest major rail junction"
      },
      {
        "location": "Bagdogra Airport",
        "distance": "~124 km",
        "route": "NH-10 → NH-310",
        "notes": "Nearest airport"
      }
    ],
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy & Mild",
        "tempHighF": 48,
        "tempLowF": 34,
        "icon": "cloud-sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Overcast — Possible Drizzle",
        "tempHighF": 44,
        "tempLowF": 32,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 3",
        "condition": "Clearing — Alpine Sunshine",
        "tempHighF": 51,
        "tempLowF": 35,
        "icon": "sun"
      },
      {
        "day": "Day 4",
        "condition": "Clear & Brisk",
        "tempHighF": 50,
        "tempLowF": 33,
        "icon": "sun"
      },
      {
        "day": "Day 5",
        "condition": "Partly Cloudy",
        "tempHighF": 46,
        "tempLowF": 30,
        "icon": "cloud-sun"
      }
    ],
    "dataSources": [
      {
        "name": "Border Roads Organisation (BRO) — Project Swastik",
        "type": "Road Maintenance & Snow Clearance Authority",
        "url": "https://bro.gov.in"
      },
      {
        "name": "Sikkim Tourism Development Corporation",
        "type": "Visitor Permits & Access Regulations",
        "url": "https://sikkimtourism.gov.in"
      },
      {
        "name": "India Meteorological Department (IMD Kolkata & Gangtok)",
        "type": "High Altitude Weather Bulletins",
        "url": "https://mausam.imd.gov.in"
      },
      {
        "name": "Indian Army — Eastern Command",
        "type": "Security Clearances & Border Access",
        "url": "https://indianarmy.nic.in"
      }
    ],
    "narrativeSections": [
      {
        "title": "About Nathu La",
        "content": "Nathu La Pass (नाथुला दर्रा) — meaning \"Listening Ears Pass\" in Tibetan — is one of three open trading border posts between India and China, alongside Shipki La and Lipulekh. Sitting at 4,310 metres (14,140 feet) on the Dongkya Range of the Eastern Himalaya, it marks the border between India's Sikkim state and the Tibet Autonomous Region of China. The pass was once a thriving commercial route on the ancient Silk Road, connecting the Indian subcontinent with Central Asia and China."
      },
      {
        "title": "History: The Silk Route and Closure",
        "content": "For centuries, Nathu La was one of the most important Himalayan trade routes, used by wool, salt, and spice traders between India and Tibet. The route also carried British Indian trade goods eastward during the colonial era. Following the 1962 Sino-Indian War, the pass was sealed and remained closed for 44 years. It was officially reopened on 6 July 2006 as part of a bilateral trade agreement between India and China, although trade volumes through the pass remain modest compared to its historic significance."
      },
      {
        "title": "Access Rules & Permit Requirements",
        "content": "Access to Nathu La is strictly regulated by the Indian Army. Indian nationals must obtain an Inner Line Permit (ILP) from the District Collector's office or authorized travel agents in Gangtok, Sikkim. The permit must be arranged at least one day in advance. Visitors are only permitted on designated days (typically Tuesday, Wednesday, Thursday, Saturday, Sunday) between approximately 08:00 and 15:00 IST. Foreign nationals are not permitted to visit the Nathu La summit. Visiting in an organized group with a registered Sikkim tour operator is the most practical approach."
      },
      {
        "title": "Tsomgo Lake: Key Stop En Route",
        "content": "On the road to Nathu La, Tsomgo Lake (also called Changu Lake) at 3,780 m (12,400 ft) is a major attraction. The glacial lake is sacred to local Sikkimese and is known for changing colors with the seasons — deep blue in summer, frosted white in winter. It is typically included in all Nathu La day-trip permits from Gangtok. Yak rides are available near the lake in season."
      }
    ],
    "customSeo": {
      "h1": "Nathu La Pass Opening Date, Road Status, Webcams & Conditions",
      "title": "Nathu La Pass Opening Date, Road Status & Live Conditions | LivePassWatch",
      "description": "Check the latest Nathu La Pass opening date, road status, and current conditions in Sikkim. Permits, snow depth, weather forecast, elevation guide & access rules."
    },
    "searchKeywords": [
      "nathu la pass opening date",
      "nathu la pass road status",
      "is nathu la pass open",
      "nathu la pass is open",
      "nathu la pass road conditions",
      "nathu la pass weather today",
      "nathu la pass snow",
      "nathu la pass elevation",
      "when does nathu la pass open",
      "nathu la pass closed",
      "is nathu la pass closed today",
      "nathu la pass webcam",
      "nathu la pass live webcam",
      "nathu la pass cameras",
      "nathu la pass summit camera",
      "nathu la pass snow depth",
      "nathu la pass snow conditions",
      "nathu la pass map",
      "when does nathu la pass close for winter",
      "how high is nathu la pass",
      "where is nathu la pass",
      "how to get to nathu la pass",
      "nathu la pass highway",
      "what highway is nathu la pass",
      "nathu la pass forecast",
      "nathu la pass passes open",
      "nathu la pass closures today",
      "is nathu la pass open in winter",
      "is nathu la pass open right now",
      "nathu la pass weather"
    ],
    "aliases": [
      "Nathu La",
      "Nathula Pass",
      "Nathula",
      "Nathu La border crossing",
      "India-China border Sikkim"
    ],
    "faqs": [
      {
        "question": "Is Nathu La Pass open today?",
        "answer": "Current Nathu La Pass status is unavailable via a public real-time feed. Nathu La is a restricted military zone — it is open to Indian civilian visitors on designated days (typically Tuesday, Wednesday, Thursday, Saturday, Sunday) between approximately 08:00–15:00 IST, subject to army clearance and weather. We recommend verifying directly with Sikkim Tourism or your Gangtok permit office before travel."
      },
      {
        "question": "Is Nathu La Pass open right now?",
        "answer": "No publicly accessible live feed confirms real-time access status for Nathu La. The pass is managed by the Indian Army and access can be suspended without notice due to weather, security exercises, or bilateral India–China diplomatic conditions. Check with the Sikkim Tourism Development Corporation or your permit issuing authority on the day of travel."
      },
      {
        "question": "When does Nathu La Pass open for the season?",
        "answer": "Nathu La Pass typically reopens for civilian visitors in mid-April to early May, following snow clearance by the Border Roads Organisation (BRO — Project Swastik). The exact opening date varies each year depending on snowfall accumulation and security conditions. There is no fixed published opening date — contact Sikkim Tourism or local authorities for the current season's status."
      },
      {
        "question": "When does Nathu La Pass close for winter?",
        "answer": "Nathu La typically closes to civilian visitors in December due to heavy snowfall. In years with early winter snowfall, closures can begin in late November. Military and border trade traffic continues regardless of civilian closure. Snow clearance begins in early spring for the following season's reopening."
      },
      {
        "question": "Is Nathu La Pass closed today?",
        "answer": "Nathu La Pass is closed every Monday and Friday to civilian visitors as a standing rule. Outside those days, closures can occur due to weather, military exercises, or India–China diplomatic situations. Always verify your permit and access status with Sikkim authorities before departing Gangtok."
      },
      {
        "question": "Where is Nathu La Pass located?",
        "answer": "Nathu La Pass is located in the state of Sikkim, northeastern India, approximately 54 kilometres (34 miles) east of the state capital Gangtok. It sits on the Dongkya Range of the Eastern Himalaya at the border between India's Sikkim state and Tibet (China), at an elevation of 4,310 metres (14,140 feet)."
      },
      {
        "question": "How high is Nathu La Pass?",
        "answer": "Nathu La Pass stands at an elevation of 4,310 metres (14,140 feet) above sea level. It is one of the highest motorable passes in the Eastern Himalaya and sits directly on the Sikkim–Tibet border."
      },
      {
        "question": "What are the current Nathu La Pass road conditions?",
        "answer": "Road conditions at Nathu La depend heavily on season. From May to November (excluding peak monsoon), the road from Gangtok to the summit is generally passable via paved NH-310 with normal mountain driving caution. In monsoon (July–August) landslides and road slips are common. From December to April the road can be covered in snow and ice, requiring chains. Always confirm conditions with Sikkim Tourism or your permit authority before travel."
      },
      {
        "question": "How do I get to Nathu La Pass?",
        "answer": "From Gangtok, take NH-310 eastward toward Tsomgo Lake (38 km / 1.5 hours) and continue to the summit (54 km total / about 2–2.5 hours). The road is paved throughout but narrow with sharp bends in the final section. You must obtain permits in advance from the District Collector's office in Gangtok or through a registered Sikkim tour operator. Bagdogra Airport (IXB) and New Jalpaiguri (NJP) railway station are the nearest major transport hubs, approximately 124–130 km from Gangtok."
      },
      {
        "question": "Does Nathu La Pass have a live webcam?",
        "answer": "No publicly accessible live webcam exists for Nathu La Pass. The pass is inside a restricted Indian Army zone, and no public camera feed is authorized. The reference image on this page is a representative photograph of the pass road — not a live feed."
      },
      {
        "question": "What is the weather like at Nathu La Pass?",
        "answer": "Nathu La has a cold high-altitude climate year-round. Summer (May–June) daytime temperatures range from 5°C to 12°C (41–54°F). Monsoon season (July–August) brings frequent rain, mist, and landslides. Autumn (September–October) is clear and cold. Winter (December–March) brings sub-zero temperatures, heavy snowfall, and hazardous road ice."
      },
      {
        "question": "Is there snow at Nathu La Pass?",
        "answer": "Yes, Nathu La receives significant snowfall between December and March, with average accumulations of 1–2 metres (3–6 feet) at the summit. Snow can occur at any time of year given the 4,310 m elevation, though summer and early autumn months are generally snow-free. Snow chains are mandatory for vehicles between December and March."
      },
      {
        "question": "What road or highway leads to Nathu La Pass?",
        "answer": "Nathu La Pass is accessed via NH-310, which runs from Gangtok eastward through the Tsomgo Lake area and the Sherathang army checkpoint to the summit. The route is entirely within restricted territory past the Sherathang checkpoint — access requires valid ILP/RAP permits."
      },
      {
        "question": "Is Nathu La Pass open in winter?",
        "answer": "Nathu La Pass is typically closed to civilian visitors from December to mid-April due to heavy snowfall. Military and border trade traffic continues throughout winter. The Border Roads Organisation clears the road each spring before civilian access resumes."
      },
      {
        "question": "Do I need a permit to visit Nathu La Pass?",
        "answer": "Yes. All Indian nationals require a Restricted Area Permit (RAP) / Inner Line Permit (ILP), obtainable from the District Collector's office in Gangtok or through registered Sikkim tour operators. Permits must be arranged at least one day in advance and carry the vehicle registration details. Foreign nationals are not permitted at the Nathu La summit area."
      }
    ],
    "isPopular": true
  },
  {
    "id": "furka-pass",
    "slug": "furka-pass",
    "name": "Furka Pass",
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Valais / Uri",
    "highway": "Hauptstrasse 19",
    "elevationFt": 7969,
    "elevationM": 2429,
    "coordinates": {
      "lat": 46.5728,
      "lng": 8.415
    },
    "status": "OPEN",
    "statusDetail": "Route 19 open to all vehicular and bicycle traffic — Furka Summit and Belvédère switchbacks clear with normal alpine conditions",
    "lastUpdated": "10 minutes ago",
    "description": "Furka Pass (2,429 m / 7,969 ft) is one of the most iconic high mountain passes in the Swiss Alps, carrying Hauptstrasse 19 across the central Alpine divide between Realp in the canton of Uri and Gletsch / Obergoms in the canton of Valais. Renowned worldwide for panoramic vistas of the Rhône Glacier, the historic Hotel Belvédère, the heritage Furka Steam Railway, and its famous role in the 1964 James Bond movie Goldfinger.",
    "image": "/furka-pass-switzerland-road-conditions.webp",
    "weather": {
      "tempF": 52,
      "tempC": 11,
      "condition": "Sunny & Alpine Crisp",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "S",
      "description": "Gentle Alpine Breeze"
    },
    "roadCondition": "Pavement bare and dry in both directions between Realp and Gletsch. No snow chain restrictions or vehicle size bans in effect. High volume of sports cars, motorcycles, and road cyclists.",
    "chainRequirement": "No restrictions in effect. Road closed seasonally in winter; winter motorists use the Furka Base Tunnel car train (Autoverlad Furka).",
    "cameras": [
      {
        "id": "furka-cam-belvedere",
        "title": "Furka Pass – Hotel Belvédère & Rhône Glacier View",
        "image": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 19 Belvédère Curve",
        "direction": "Westbound / Eastbound",
        "location": "Belvédère Switchback & Rhône Glacier Overlook",
        "source": "TCS / Matterhorn Gotthard Bahn",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.tcs.ch/de/tools/verkehrsinfo-verkehrslage/furka-pass.php"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1867,
      "lengthMiles": 19,
      "lengthKm": 31,
      "annualSnowfallIn": 320,
      "annualSnowfallM": 8.1,
      "summary": "Opened to carriage traffic in 1867, Furka Pass (elevation 2,429 m / 7,969 ft) traverses the majestic Urseren and Obergoms valleys in the Swiss Alps, linking Central Switzerland (Uri) with the French-speaking and upper Valais regions. The pass is globally celebrated for its dramatic hairpin switchbacks, views of the retreating Rhône Glacier and its carved ice grotto, and the iconic Hotel Belvédère perched on a tight curve. In 1964, the pass achieved cinematic immortality when Sean Connery as James Bond piloted his Aston Martin DB5 along the Furka curves in Goldfinger. Today, Furka forms an essential segment of the famous Swiss \"Big 3\" Alpine pass loop alongside the Grimsel and Susten passes, drawing thousands of road cyclists, sports driving enthusiasts, and tourists annually."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Early November to Late May / Early June",
      "typicalReopening": "Late May / Early June 2026 (Snow Clearing Permitting)",
      "description": "Furka Pass is a seasonal alpine highway typically open from early June to late October. During winter and spring (November through May), the high mountain road is closed due to massive snowpack (averaging over 8 meters) and avalanche danger. Winter travelers and vehicles cross between Realp and Oberwald year-round using the Matterhorn Gotthard Bahn Furka Base Tunnel car shuttle train (Autoverlad Furka)."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Alpine Crisp",
        "tempHighF": 54,
        "tempLowF": 36,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Alpine Starry Skies",
        "tempHighF": 40,
        "tempLowF": 32,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny & Mild",
        "tempHighF": 57,
        "tempLowF": 38,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered High Clouds",
        "tempHighF": 51,
        "tempLowF": 35,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Passing Alpine Showers",
        "tempHighF": 48,
        "tempLowF": 33,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 5",
        "condition": "Breezy & Bright",
        "tempHighF": 53,
        "tempLowF": 36,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "TCS Swiss Pass Portal (Touring Club Schweiz)",
        "type": "Official Swiss Pass Status & Traffic Alerts",
        "url": "https://www.tcs.ch/de/tools/verkehrsinfo-verkehrslage/furka-pass.php"
      },
      {
        "name": "MeteoSwiss (Federal Office of Meteorology)",
        "type": "Alpine Summit Weather & Forecasts",
        "url": "https://www.meteoswiss.admin.ch"
      },
      {
        "name": "Matterhorn Gotthard Bahn (MGB)",
        "type": "Furka Base Tunnel Car Shuttle & Steam Railway",
        "url": "https://www.matterhorngotthardbahn.ch"
      },
      {
        "name": "Uri & Valais Cantonal Civil Engineering (Tiefbauamt)",
        "type": "Road Clearing & Opening Declarations",
        "url": "https://www.ur.ch"
      }
    ],
    "customSeo": {
      "title": "Furka Pass Road Conditions, Weather & Live Webcam | Switzerland",
      "description": "Check Furka Pass road conditions, weather, open status, snow and live webcams before traveling through the Swiss Alps between Valais and Uri."
    },
    "faqs": [
      {
        "question": "Is Furka Pass open today?",
        "answer": "Yes, Furka Pass on Hauptstrasse 19 is currently OPEN to all vehicular and bicycle traffic with clear alpine pavement. The pass is maintained by the cantons of Uri and Valais during the summer and autumn driving season."
      },
      {
        "question": "When does Furka Pass open in 2026?",
        "answer": "Furka Pass typically reopens for the summer season between late May and early June 2026, depending on the progress of heavy rotary snowplow clearing through winter snow accumulations exceeding 8 meters."
      },
      {
        "question": "What are the current Furka Pass road conditions?",
        "answer": "Current road conditions on Furka Pass report bare and dry pavement across the 2,429 m summit and the Belvédère curves. During shoulder seasons, early morning black ice can occur in shaded hairpin turns."
      },
      {
        "question": "Where is Furka Pass located in Switzerland?",
        "answer": "Furka Pass is located in the south-central Swiss Alps on the cantonal border between Uri (Realp / Andermatt) to the east and Valais (Gletsch / Obergoms) to the west."
      },
      {
        "question": "How high is Furka Pass?",
        "answer": "Furka Pass reaches an official summit elevation of 2,429 meters (7,969 feet) above sea level, making it the fourth-highest paved mountain highway pass in Switzerland."
      },
      {
        "question": "What is the elevation of Furka Pass?",
        "answer": "The elevation of Furka Pass is 2,429 m (7,969 ft). The adjacent Hotel Belvédère sits at approximately 2,272 m (7,454 ft) on the western ramp near the Rhône Glacier."
      },
      {
        "question": "Can you cycle over Furka Pass?",
        "answer": "Yes! Furka Pass is a bucket-list climb for road cyclists, featuring an elevation gain of over 1,000 meters from Realp or Gletsch with steady gradients between 8% and 12%. Cyclists frequently ride the classic \"Big 3\" loop combining Furka, Grimsel, and Susten passes."
      },
      {
        "question": "Is there a Furka Pass live webcam?",
        "answer": "Yes! Official webcams operate near the Furka Summit and Hotel Belvédère overlook. You can view the latest camera view with a manual \"Refresh Now\" option and link to the official TCS Swiss Pass Portal above."
      },
      {
        "question": "What is the weather at Furka Pass?",
        "answer": "Current weather at the 2,429 m summit is sunny and crisp with temperatures around 52°F (11°C) and gentle alpine breezes. Check our 5-day mountain pass forecast tab for upcoming Swiss Alps weather trends."
      },
      {
        "question": "What is Furka Pass famous for?",
        "answer": "Furka Pass is world-famous for its breathtaking panoramic views of the Rhône Glacier, the iconic Belle Époque Hotel Belvédère, the historic Furka Steam Railway (Dampfbahn Furka-Bergstrecke), and its legendary James Bond filming location."
      },
      {
        "question": "Is Furka Pass associated with James Bond?",
        "answer": "Yes! In the 1964 James Bond classic Goldfinger, Sean Connery as Agent 007 famously pursued Auric Goldfinger along the hairpin turns of Furka Pass in his Aston Martin DB5."
      },
      {
        "question": "How do you cross Furka Pass in winter?",
        "answer": "When the mountain pass road closes for winter (November to May), motorists and vehicles cross beneath the Alps using the Matterhorn Gotthard Bahn Furka Base Tunnel car shuttle train (Autoverlad Furka) between Realp and Oberwald."
      }
    ],
    "isPopular": true
  },
  {
    "id": "stelvio-pass",
    "slug": "stelvio-pass",
    "name": "Stelvio Pass (Passo dello Stelvio)",
    "country": "Italy",
    "countryCode": "ITA",
    "continent": "Europe",
    "state": "South Tyrol / Lombardy",
    "highway": "Strada Statale 38 dello Stelvio (SS38)",
    "elevationFt": 9045,
    "elevationM": 2757,
    "coordinates": {
      "lat": 46.5286,
      "lng": 10.4531
    },
    "status": "OPEN",
    "statusDetail": "SS38 is open across all 48 northeastern switchbacks from Prato allo Stelvio and the 39 switchbacks from Bormio.",
    "lastUpdated": "10 minutes ago",
    "description": "Stelvio Pass (Passo dello Stelvio, Stilfser Joch) at 2,757 m (9,045 ft) is the highest paved mountain pass in the Eastern Alps and the second-highest in the entire Alpine chain. Traversing the Ortler Alps on the border between South Tyrol and Lombardy in northern Italy, it is celebrated worldwide for its dramatic staircase of 48 numbered stone-walled switchbacks (tornanti), legendary Giro d'Italia cycling climbs, and breathtaking high-alpine panoramic views.",
    "image": "/stelvio-pass-italy.jpg",
    "weather": {
      "tempF": 45,
      "tempC": 7,
      "condition": "Partly Cloudy & Crisp Alpine Breeze",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Dry & Clear Pavement (Seasonal Alpine Runoff Possible)"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "NE",
      "description": "Moderate Mountain Breeze"
    },
    "roadCondition": "Both the South Tyrol ramp (from Prato allo Stelvio / Trafoi) and the Lombardy ramp (from Bormio) are open and fully paved. Pavement is bare and dry with localized wet patches from high-altitude snow melt. Vehicles exceeding 10.5 meters in length and vehicles towing large caravans are prohibited on the northeastern ramp due to tight hairpin radii.",
    "chainRequirement": "Summer tires permitted during open summer season. Winter equipment (winter tires or snow chains onboard) is legally mandatory during shoulder months (October–November and May–June) or upon sudden summer snowfall.",
    "cameras": [
      {
        "id": "stelvio-cam-summit",
        "title": "Passo dello Stelvio Summit (2,757 m / 9,045 ft)",
        "image": "/stelvio-pass-italy.jpg",
        "timestamp": "Live Feed Refreshed",
        "location": "Summit Pass Crest & Dreisprachenspitze Overlook",
        "milepost": "SS38 Summit Ridge (MP 124.5)",
        "direction": "Panoramic View toward Ortler Glacier & Trafoi Valley",
        "source": "Provincia Autonoma di Bolzano – Alto Adige / Banca Popolare di Sondrio",
        "updateIntervalMs": 120000,
        "officialUrl": "https://traffico.provincia.bz.it"
      },
      {
        "id": "stelvio-cam-trafoi",
        "title": "Trafoi & Northeastern 48 Switchbacks Overlook",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Hotel Franzenshöhe (2,188 m) Switchback Sector",
        "milepost": "SS38 South Tyrol Ramp (Hairpin #22)",
        "direction": "Eastbound View down the Trafoi Valley toward Prato",
        "source": "Südtiroler Straßendienst (Bolzano Road Service)",
        "updateIntervalMs": 180000,
        "officialUrl": "https://traffico.provincia.bz.it"
      },
      {
        "id": "stelvio-cam-bormio",
        "title": "Bormio Ramp – Braulio Valley & Cascata del Braulio",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Valle del Braulio & Umbrail Pass Junction (2,501 m)",
        "milepost": "SS38 Lombardy Ramp (MP 112)",
        "direction": "Southbound Ascent toward Bormio Thermal Basin",
        "source": "ANAS SpA Lombardia (Strade Statali)",
        "updateIntervalMs": 180000,
        "officialUrl": "https://www.stradeanas.it"
      },
      {
        "id": "stelvio-cam-garibaldi",
        "title": "Cima Garibaldi & Ortler Alpine Glacier Panorama",
        "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Rifugio Garibaldi (2,843 m / 9,327 ft)",
        "milepost": "Dreisprachenspitze (Border of IT-Lombardy, IT-South Tyrol & CH-Grisons)",
        "direction": "360° Alpine Panorama of Ortles-Cevedale Massif",
        "source": "Società Meteorologica Alpina & Bormio Tourism",
        "updateIntervalMs": 300000,
        "officialUrl": "https://www.bormio.eu"
      }
    ],
    "nearbyPasses": [
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass",
        "country": "Switzerland",
        "state": "Valais / Uri",
        "highway": "Hauptstrasse 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "20 min ago",
        "distanceKm": 185
      },
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "12 min ago",
        "distanceKm": 6200
      },
      {
        "id": "arthurs-pass",
        "slug": "arthurs-pass",
        "name": "Arthur's Pass",
        "country": "New Zealand",
        "state": "Canterbury",
        "highway": "SH 73",
        "status": "OPEN",
        "elevationFt": 3018,
        "lastUpdated": "18 min ago",
        "distanceKm": 18400
      },
      {
        "id": "sani-pass",
        "slug": "sani-pass",
        "name": "Sani Pass",
        "country": "South Africa / Lesotho",
        "state": "KwaZulu-Natal",
        "highway": "Sani Pass Road (P318)",
        "status": "OPEN",
        "elevationFt": 9429,
        "lastUpdated": "10 min ago",
        "distanceKm": 8500
      }
    ],
    "overview": {
      "openedYear": 1825,
      "lengthMiles": 29.2,
      "lengthKm": 47,
      "annualSnowfallIn": 395,
      "annualSnowfallM": 10,
      "summary": "Engineered between 1820 and 1825 by Carlo Donegani for Austrian Emperor Francis I to establish a military corridor between Vienna and Austrian-controlled Milan, the Stelvio Pass (Passo dello Stelvio) remains one of the world's most awe-inspiring mountain civil engineering achievements. Ascending from 915 m at Prato allo Stelvio to the 2,757 m summit ridge, the pass traverses Stilfserjoch National Park (Parco Nazionale dello Stelvio), linking South Tyrol with the Valtellina in Lombardy. Its 48 sequentially numbered stone tornanti on the northeastern ramp and 39 switchbacks through the Braulio Valley on the Lombardy ramp make it a pinnacle destination for motoring, motorcycling, and high-altitude road cycling."
    },
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Early November (First Heavy Alpine Snowfall)",
      "typicalReopening": "Late May to Early June (Subject to Snowpack Clearance)",
      "description": "Due to extreme winter snowfall exceeding 10 meters and significant avalanche hazards across the high-altitude cirques, Stelvio Pass closes seasonally from early November through late May or early June. Specialized rotary snowblowers and heavy plows clear the road over a 4 to 6-week intensive spring operation coordinated by ANAS SpA (Lombardy) and the Südtiroler Straßendienst (South Tyrol)."
    },
    "openingDateInfo": {
      "year": 2026,
      "statusText": "PROVISIONAL — Expected Opening Late May / Early June 2026",
      "expectedOpeningWindow": "Late May (approx. May 22–31, 2026) to Early June 2026",
      "closingWindow": "Early November 2026 (typically November 1–8, weather permitting)",
      "clearanceAgency": "ANAS SpA (Lombardy Region) & Südtiroler Straßendienst (Autonomous Province of Bolzano)",
      "notes": "Opening dates for 2026 remain provisional and strictly dependent on high-altitude spring snow depths, avalanche risk assessments, and roadway structural inspections. In 2024 and 2025, clearing operations successfully reopened the pass for traffic during the final weekend of May. Exact dates are officially confirmed by provincial highway decrees 7–10 days before reopening."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Crisp Alpine Air",
        "tempHighF": 48,
        "tempLowF": 32,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Alpine Sky & Frost",
        "tempHighF": 34,
        "tempLowF": 28,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Passing High Clouds",
        "tempHighF": 50,
        "tempLowF": 34,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 3",
        "condition": "Afternoon Mountain Breeze",
        "tempHighF": 46,
        "tempLowF": 30,
        "icon": "wind"
      },
      {
        "day": "Day 4",
        "condition": "Scattered Alpine Clouds",
        "tempHighF": 47,
        "tempLowF": 31,
        "icon": "cloud"
      },
      {
        "day": "Day 5",
        "condition": "Clear & Bright Sun",
        "tempHighF": 52,
        "tempLowF": 35,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Centrale Viabilità Provincia Autonoma di Bolzano (Verkehrsmeldezentrale Südtirol)",
        "type": "Official South Tyrol Road Status & Webcams",
        "url": "https://traffico.provincia.bz.it"
      },
      {
        "name": "ANAS SpA Compartimento della Lombardia",
        "type": "Official Lombardy SS38 Highway Authority",
        "url": "https://www.stradeanas.it"
      },
      {
        "name": "MeteoTrentino & Servizio Meteorologico dell'Aeronautica Militare",
        "type": "High-Altitude Alpine Meteorological Bulletins",
        "url": "https://www.meteoam.it"
      },
      {
        "name": "Parco Nazionale dello Stelvio / Bormio Tourism",
        "type": "Park Conservation, Cycling & Visitor Information",
        "url": "https://www.bormio.eu"
      }
    ],
    "quickFacts": {
      "state": "South Tyrol (Trentino-Alto Adige) & Lombardy (Sondrio)",
      "mountainRange": "Ortler Alps (Ortles-Cevedale Massif) / Rhaetian Alps",
      "elevationSummary": "2,757 m / 9,045 ft (Summit) • 915 m / 3,002 ft (Prato Base)",
      "connects": "Prato allo Stelvio (Val Venosta) with Bormio (Valtellina)",
      "nearestTown": "Bormio (21 km), Trafoi (14 km), Prato allo Stelvio (24 km), Santa Maria (CH, 16 km)",
      "roadType": "Two-Lane Paved Mountain Pass Highway (SS38)",
      "bestTime": "Late June to Mid-September (Warmest alpine weather & long daylight)",
      "highlight": "Second-highest paved pass in the Alps with 48 numbered switchbacks; Giro d'Italia Cima Coppi."
    },
    "routeDetails": {
      "distanceKm": 47,
      "distanceMiles": 29.2,
      "duration": "1 hour 15 minutes to 1 hour 45 minutes driving (no stops)",
      "origin": "Prato allo Stelvio / Prad am Stilfserjoch (Elevation 915 m / 3,002 ft)",
      "destination": "Bormio, Lombardy (Elevation 1,225 m / 4,019 ft)",
      "waypoints": [
        "Prato allo Stelvio / Prad (0 km / 915 m)",
        "Gomagoi & Sulden Junction (6 km / 1,260 m)",
        "Trafoi Village (10 km / 1,540 m)",
        "Hotel Franzenshöhe & Hairpin #22 (19 km / 2,188 m)",
        "Passo dello Stelvio Summit (24.3 km / 2,757 m)",
        "Umbrail Pass / Swiss Border Junction (27.5 km / 2,501 m)",
        "Braulio Waterfall & Historic Galleries (33 km / 2,100 m)",
        "Bagni di Bormio Thermal Springs (42 km / 1,350 m)",
        "Bormio Town Center (47 km / 1,225 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Stelvio Pass is widely revered as the holy grail of European road cycling. Featured repeatedly as the \"Cima Coppi\" (the highest summit of the race) in the Giro d'Italia since Fausto Coppi's historic victory in 1953, the pass challenges cyclists with brutal elevation gains, thin high-altitude air, and mesmerising switchback ramps across three classic ascent routes.",
      "approaches": [
        {
          "name": "The Classic Eastern Ramp (from Prato allo Stelvio)",
          "origin": "Prato allo Stelvio (South Tyrol)",
          "distanceKm": 24.3,
          "distanceMiles": 15.1,
          "elevationGainM": 1848,
          "elevationGainFt": 6063,
          "avgGradient": "7.4%",
          "maxGradient": "12.0%",
          "hairpins": 48,
          "description": "The definitive Stelvio cycling experience. Begins with gentle climbing through pine forests past Gomagoi and Trafoi before emerging above the tree line at Hotel Franzenshöhe, where the famous wall of 48 sequentially numbered, reverse-counting stone switchbacks reveals itself against the Ortler massif."
        },
        {
          "name": "The Western Lombardy Ramp (from Bormio)",
          "origin": "Bormio (Valtellina, Lombardy)",
          "distanceKm": 21.5,
          "distanceMiles": 13.4,
          "elevationGainM": 1533,
          "elevationGainFt": 5030,
          "avgGradient": "7.1%",
          "maxGradient": "14.0%",
          "hairpins": 39,
          "description": "A deeply atmospheric climb ascending through the rugged Valle del Braulio. Features several narrow rock-hewn unlit tunnels, dramatic roadside waterfalls (Cascata del Braulio), open alpine pastures, and the junction with the Swiss Umbrail Pass at 2,501 m before the final 3 km summit push."
        },
        {
          "name": "The Swiss Approach via Umbrail Pass (from Santa Maria)",
          "origin": "Santa Maria Val Müstair (Grisons, Switzerland)",
          "distanceKm": 16.5,
          "distanceMiles": 10.3,
          "elevationGainM": 1372,
          "elevationGainFt": 4501,
          "avgGradient": "8.4%",
          "maxGradient": "12.5%",
          "hairpins": 34,
          "description": "Climbing out of the Swiss Val Müstair through dense larch forests and high alpine meadows over the fully paved Umbrail Pass (2,501 m / Pass da l'Umbrail, the highest paved road in Switzerland), connecting with the Italian SS38 just 3.2 km below the Stelvio summit."
        }
      ],
      "bestSeason": "Mid-June through September. Early mornings offer the calmest winds, lowest motor traffic, and clearest skies.",
      "safetyTips": [
        "Always bring high-visibility front and rear bike lights for the dark avalanche tunnels on the Bormio side.",
        "Carry full windproof/thermal jacket, long-finger gloves, and a neck warmer for the rapid, chilly 25 km descent.",
        "Pace yourself in the first 10 km; the steepest and thinnest air occurs in the final 6 km above 2,200 meters.",
        "Stay right on hairpin turns to avoid downhill sports cars and tourist buses swinging wide into your lane."
      ],
      "bikeDayInfo": "Stelvio Bike Day (Giornata della Bicicletta / Stilfserjoch Radtag) is held annually on the last Saturday of August or first Saturday of September, closing the entire mountain pass on all three sides exclusively to thousands of cyclists and pedestrians from 08:00 to 16:00."
    },
    "drivingInfo": {
      "summary": "Driving the Stelvio Pass is considered one of the world's paramount automotive bucket-list adventures, voted \"The Greatest Driving Road in the World\" by Top Gear. The road demands mechanical respect, keen anticipation, and careful switchback etiquette.",
      "characteristics": [
        "48 tight hairpin turns with stone retaining walls on the Prato ramp and 39 switchbacks on the Bormio ramp.",
        "Steep gradients sustained between 8% and 12% across high-altitude alpine terrain.",
        "Narrow single-lane stone avalanche galleries and rock tunnels between Bormio and the Umbrail junction.",
        "Panoramic overlooks at Hotel Franzenshöhe (2,188 m) and the summit ridge (2,757 m)."
      ],
      "switchbacksCount": "87 total switchbacks across both sides (48 South Tyrol + 39 Lombardy)",
      "safetyAndEtiquette": [
        "Right of way: Uphill traffic and public postal buses (PostBus / SAD) always have absolute priority on narrow hairpins.",
        "Engine braking: Shift into 1st or 2nd gear on descents to avoid catastrophic brake fade and boiling brake fluid.",
        "Timing: Drive early in the morning (before 08:30) or late afternoon (after 17:30) to avoid slow campervans, cyclist congestion, and heavy tourist traffic.",
        "Vehicle size: Large motorhomes (>10.5 m) and travel trailers are prohibited on the Prato side due to inability to clear sharp switchback radii."
      ],
      "motorcycleTips": [
        "Look through the apex of each hairpin before turning rather than staring at the stone guardwall.",
        "Maintain light throttle through uphill switchbacks to prevent stalling on steep 12% corner inclines.",
        "Watch for loose gravel and wet sealant bands inside shaded tunnels on the Bormio descent."
      ]
    },
    "narrativeSections": [
      {
        "title": "History: The Military Triumph of Carlo Donegani",
        "content": "Constructed between 1820 and 1825 under the direction of engineer Carlo Donegani for the Austrian Empire, the Stelvio Pass was conceived to establish a year-round direct military and postal corridor connecting Vienna with Lombardy and Milan. The original layout has remained remarkably unchanged for two centuries, standing as an enduring masterwork of 19th-century mountain road engineering."
      },
      {
        "title": "The Great War & The Dreisprachenspitze Border",
        "content": "During World War I (1915–1918), Stelvio Pass became the highest front in the conflict (the \"White War\"), where Austro-Hungarian Kaiserjäger and Italian Alpini fought fiercely in glacial ice trenches at altitudes exceeding 3,000 meters. The Dreisprachenspitze (Three Languages Peak) above the summit marks the historic tripoint where German (South Tyrol), Italian (Lombardy), and Romansh (Switzerland) linguistic borders converge."
      },
      {
        "title": "Cima Coppi & Giro d'Italia Mythology",
        "content": "In the 1953 Giro d'Italia, legendary Italian cyclist Fausto Coppi launched a ferocious solo attack on the snowy slopes of the Stelvio Pass, dethroning Hugo Koblet to win the Maglia Rosa. In Coppi's honour, race organisers established the \"Cima Coppi\" prize, awarded each year to the first rider across the highest peak of the Giro."
      }
    ],
    "customSeo": {
      "h1": "Stelvio Pass – Webcam, Weather, Road Conditions & Opening Status",
      "title": "Stelvio Pass: Webcam, Weather, Road Conditions & Opening Status",
      "description": "Check live Stelvio Pass road conditions, opening status, current weather, webcam feeds, and cycling routes for Passo dello Stelvio (SS38) in Italy."
    },
    "faqs": [
      {
        "question": "Is Stelvio Pass open?",
        "answer": "Yes, Stelvio Pass (SS38) is currently OPEN for vehicular traffic, motorbikes, and cyclists during the summer driving season. Both the South Tyrol ramp from Prato allo Stelvio and the Lombardy ramp from Bormio are accessible with bare and dry pavement."
      },
      {
        "question": "When does Stelvio Pass open?",
        "answer": "Stelvio Pass typically opens in late May to early June each year (usually between May 20 and June 1), once highway clearance crews from ANAS SpA and the Südtiroler Straßendienst finish clearing deep winter snowbanks and securing the road from avalanche risks."
      },
      {
        "question": "When does Stelvio Pass close?",
        "answer": "Stelvio Pass usually closes for the winter season in early November (typically during the first week of November or following the first heavy alpine blizzard), remaining closed through late May."
      },
      {
        "question": "Is Stelvio Pass open in 2026?",
        "answer": "For 2026, Stelvio Pass is provisionally scheduled to open in late May 2026 (target window May 22–31, 2026) and remain open until early November 2026, weather and snow clearance permitting. Always check our live status bar above for real-time provincial decrees."
      },
      {
        "question": "What is the Stelvio Pass elevation?",
        "answer": "Stelvio Pass stands at a summit elevation of 2,757 meters (9,045 feet) above sea level. It is the highest paved mountain pass in Italy and the Eastern Alps, and the second-highest paved pass in the entire Alps behind the French Col de l'Iseran (2,770 m)."
      },
      {
        "question": "Where is Stelvio Pass located?",
        "answer": "Stelvio Pass (Passo dello Stelvio) is located in the Ortler Alps of northern Italy, directly on the regional border between the Autonomous Province of Bolzano (South Tyrol / Trentino-Alto Adige) and the Province of Sondrio (Lombardy), just 200 meters from the Swiss border."
      },
      {
        "question": "Is there a Stelvio Pass webcam?",
        "answer": "Yes, multiple high-definition live webcams monitor the Stelvio Pass, including official camera feeds at the 2,757 m summit crest, the Hotel Franzenshöhe switchback overlook in Trafoi, the Valle del Braulio on the Bormio ramp, and the Rifugio Garibaldi (2,843 m). You can view the live snapshots and official source links in the Live Webcams section above."
      },
      {
        "question": "What is Stelvio Pass weather today?",
        "answer": "Current weather at the Stelvio Pass summit (2,757 m) is 45°F (7°C) with partly cloudy skies and moderate north-easterly mountain breezes. Mountain temperatures drop rapidly toward freezing at night, so warm layers are recommended."
      },
      {
        "question": "Can you drive Stelvio Pass?",
        "answer": "Yes, Stelvio Pass is fully paved and open to standard passenger cars, sports cars, motorcycles, and cyclists during its open season. Drivers should be comfortable with tight first-gear hairpins, use engine braking on descents, and yield right of way to ascending vehicles and postal buses. Large motorhomes over 10.5 meters are prohibited."
      },
      {
        "question": "Is Stelvio Pass suitable for cycling?",
        "answer": "Stelvio Pass is one of the world's ultimate bucket-list cycling climbs, featured regularly in the Giro d'Italia as the Cima Coppi. The classic climb from Prato allo Stelvio covers 24.3 km with 1,848 m of elevation gain across 48 hairpins at an average gradient of 7.4%."
      },
      {
        "question": "What is the best time to visit Stelvio Pass?",
        "answer": "The best time to visit Stelvio Pass is between late June and mid-September, when daytime temperatures are mildest (10°C to 18°C), daylight hours are long, and all three mountain approaches (Prato, Bormio, and Santa Maria via Umbrail) are fully open."
      },
      {
        "question": "How many switchbacks does Stelvio Pass have?",
        "answer": "Stelvio Pass features a total of 87 hairpins (tornanti): 48 numbered switchbacks on the famous northeastern South Tyrol ramp from Prato allo Stelvio, and 39 switchbacks on the southwestern Lombardy ramp from Bormio."
      }
    ],
    "isPopular": true
  },
  {
    "id": "trollstigen-pass",
    "slug": "trollstigen-pass",
    "name": "Trollstigen Pass",
    "alternateNames": [
      "Trollstigen",
      "Fv63 Trollstigen",
      "Troll's Ladder",
      "Trollstigvegen",
      "Nasjonal turistveg Trollstigen",
      "Trollstigen Fjellovergang"
    ],
    "country": "Norway",
    "countryCode": "NOR",
    "continent": "Europe",
    "state": "Møre og Romsdal",
    "highway": "Fylkesvei 63 (Fv63) / Nasjonal turistveg Geiranger-Trollstigen",
    "elevationFt": 2815,
    "elevationM": 858,
    "coordinates": {
      "lat": 62.456,
      "lng": 7.6698
    },
    "status": "OPEN",
    "statusDetail": "Sesongåpen vei (Fv63). Åpen for allmenn ferdsel. Maks kjøretøylengde 13,1 meter. Statens vegvesen og Møre og Romsdal fylkeskommune overvåker fjellsiden kontinuerlig.",
    "lastUpdated": "10 minutes ago",
    "description": "Trollstigen (Trollstigvegen / Fv63) er en verdensberømt fjellovergang i Rauma og Fjord kommune i Møre og Romsdal, Norge. Veien stiger gjennom 11 dramatiske hårnålssvinger med 10 % stigning fra Isterdalen opp til Stigrøra platået på 858 meter over havet, flankert av majestetiske tinder som Bispen (1 462 m), Kongen (1 614 m) og Dronninga (1 544 m). Veien krysser den spektakulære Stigfossen (180 m fallhøyde) på en historisk natursteinsbru. Trollstigen er en del av Nasjonal turistveg Geiranger-Trollstigen og er sesongåpen fra sen vår til sen høst.",
    "image": "/trollstigen-pass-road-status-webcam.webp",
    "weather": {
      "tempF": 46,
      "tempC": 8,
      "condition": "Fjord Mist & Cool Mountain Air",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bar og tørr asfalt (Bare Pavement)"
    },
    "wind": {
      "speedKmh": 18,
      "speedMph": 11,
      "direction": "NW",
      "description": "Frisk Fjellbris (Moderate Mountain Breeze)"
    },
    "roadCondition": "Bar og tørr vegbane over Stigrøra platået og gjennom hårnålssvingene. Kjøretøy over 13,1 meter har kjøreforbud. Statens vegvesen oppfordrer til aktsom kjøring ved Stigfossen bru.",
    "chainRequirement": "Ingen kjettingpåbud om sommeren. Vinterstengt fjellovergang. Dekkutrustning tilpasset føret påkrevd ved tidlig/sen sesongkjøring.",
    "cameras": [
      {
        "id": "trollstigen-cam-1",
        "title": "Fv63 Trollstigen (retning Åndalsnes / Stigrøra)",
        "image": "https://webkamera.atlas.vegvesen.no/public/kamera?id=150201",
        "milepost": "Fv63 Stigrøra Platå",
        "direction": "Retning Åndalsnes / Isterdalen",
        "location": "Stigrøra Utsiktspunkt (858 moh)",
        "source": "Statens vegvesen Trafikk / vindnå.no",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.vegvesen.no/trafikk"
      }
    ],
    "nearbyPasses": [
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass",
        "country": "Switzerland",
        "state": "Valais / Uri",
        "highway": "Route 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "10 min ago",
        "distanceKm": 1650
      },
      {
        "id": "stelvio-pass",
        "slug": "stelvio-pass",
        "name": "Stelvio Pass",
        "country": "Italy",
        "state": "South Tyrol",
        "highway": "SS38",
        "status": "OPEN",
        "elevationFt": 9045,
        "lastUpdated": "10 min ago",
        "distanceKm": 1780
      }
    ],
    "overview": {
      "openedYear": 1936,
      "lengthMiles": 12.4,
      "lengthKm": 20,
      "annualSnowfallIn": 450,
      "annualSnowfallM": 11.4,
      "summary": "Åpnet av Kong Haakon VII den 31. juli 1936 etter 8 års anleggsarbeid, er Trollstigen (Fv63) et mesterverk innen norsk veibygging. Veien snirkler seg gjennom 11 skarpe hårnålssvinger opp den stupbratte fjellsiden fra Isterdalen til fjellplatået Stigrøra på 858 meters høyde. Midt i fjellsiden krysser veien den buldrende Stigfossen over en elegant natursteinsbru. På toppen ligger det prisbelønte Trollstigplatået besøkssenter med utkragede glass- og stålramper som gir panoramautsikt over dalen og svingene. Veien er underlagt streng skredovervåking av Møre og Romsdal fylkeskommune og Statens vegvesen."
    },
    "narrativeSections": [
      {
        "title": "Historie, Arkitektur & 11 Hårnålssvinger (History & Architecture)",
        "content": "Trollstigen ble offisielt innviet i 1936 og har i nesten et århundre fascinert reisende fra hele verden. Den smale fjellveien er bygget med håndmurt steinrekkverk og har en gjennomsnittlig stigning på 10 %. Hver sving har sitt eget navn, ofte oppkalt etter arbeidsformennene som ledet anleggsarbeidet. Ved toppen av passet tilbyr Reiulf Ramstad Arkitekter-designede utsiktsplattformer en svimlende utsikt ned mot Isterdalen og fossestrykene."
      },
      {
        "title": "Fjellskredsikring, Sikkerhet & Kjøretøybegrensninger",
        "content": "På grunn av bratte fjellsider og fare for steinsprang fra Bispefonna og Trolltindene, gjennomføres det omfattende fjellrensing og sikringsarbeid. Statens vegvesen og Møre og Romsdal fylkeskommune har innført strenge sikkerhetsprotokoller, inkludert automatisk stenging ved store nedbørsmengder. Kjøretøy over 13,1 meter er forbudt på Trollstigvegen, og sjåfører må bruke lave gir for å spare bremsene i de bratte unnabakkene."
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Slutten av oktober / november (første store vinterfall og ising)",
      "typicalReopening": "Midten/slutten av mai til tidlig juni (avhengig av snømengder og rasfare)",
      "description": "Trollstigen er en utpreget sesongvei som holder vinterstengt mellom november og mai på grunn av enorme snømengder, hyppige snøskred og fare for is- og steinsprang. Fresing og brøyting av de opptil 10 meter høye snøskavlene starter vanligvis i april, og åpningsdatoen fastsettes etter grundige geologiske sikkerhetsvurderinger av Statens vegvesen."
    },
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Sesongåpen / Open for the 2026 summer season",
      "expectedOpeningWindow": "Midten av mai til tidlig juni (Rekordtidlig åpning registrert i 2026)",
      "closingWindow": "Slutten av oktober til midten av november 2026",
      "clearanceAgency": "Statens vegvesen Drift og vedlikehold & Møre og Romsdal fylkeskommune",
      "notes": "Åpnings- og stengedatoer varierer fra år til år basert på snødybde, temperatur og geoteknisk skredrisiko. Følg Vegvesen Trafikk (tlf 175) for sanntids veimeldinger."
    },
    "forecast": [
      {
        "day": "I dag (Today)",
        "condition": "Fjellbris & Lettskyet",
        "tempHighF": 50,
        "tempLowF": 37,
        "icon": "cloud-sun"
      },
      {
        "day": "I kveld (Tonight)",
        "condition": "Klar Fjellhimmel",
        "tempHighF": 41,
        "tempLowF": 33,
        "icon": "moon"
      },
      {
        "day": "I morgen (Tomorrow)",
        "condition": "Delvis Skyet & Mildt",
        "tempHighF": 54,
        "tempLowF": 39,
        "icon": "sun"
      },
      {
        "day": "Dag 3",
        "condition": "Fjordbris & Solgløtt",
        "tempHighF": 52,
        "tempLowF": 38,
        "icon": "cloud-sun"
      },
      {
        "day": "Dag 4",
        "condition": "Spredte Byger",
        "tempHighF": 48,
        "tempLowF": 36,
        "icon": "cloud-rain"
      },
      {
        "day": "Dag 5",
        "condition": "Opphold & Frisk Fjelluft",
        "tempHighF": 51,
        "tempLowF": 37,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "Statens vegvesen (Vegvesen Trafikk)",
        "type": "Offisiell norsk veimyndighet, trafikkmeldinger og webkamera",
        "url": "https://www.vegvesen.no/trafikk"
      },
      {
        "name": "Møre og Romsdal fylkeskommune",
        "type": "Vegforvalter for Fv63 Trollstigen og skredsikring",
        "url": "https://mrfylke.no"
      },
      {
        "name": "Yr.no / Meteorologisk institutt",
        "type": "Offisielt høyfjellsvær og nedbørsvarsel for Stigrøra",
        "url": "https://www.yr.no"
      },
      {
        "name": "Nasjonal turistveg Geiranger-Trollstigen",
        "type": "Nasjonale turistveger, ruteinformasjon og arkitektur",
        "url": "https://www.nasjonaleturistveger.no"
      }
    ],
    "customSeo": {
      "h1": "Trollstigen Pass Live Webcam & Road Conditions (Fv63)",
      "title": "Trollstigen Pass Live Webcam & Open/Closed Status – Updated Today",
      "description": "Se live Fv63 Trollstigen webkamera, kjøreforhold, åpningstider og sanntids veistatus på Fylkesvei 63 i Møre og Romsdal, Norge. Verifisert og oppdatert i dag."
    },
    "searchKeywords": [
      "Trollstigen Pass opening date",
      "Trollstigen Pass is open",
      "Trollstigen Pass road conditions",
      "Trollstigen Pass road status",
      "Trollstigen Pass pass status report",
      "when does Trollstigen Pass open",
      "Trollstigen Pass closed",
      "Trollstigen Pass is closed",
      "Trollstigen Pass is it open today",
      "is Trollstigen Pass closed today",
      "Trollstigen Pass webcam",
      "Trollstigen Pass live webcam",
      "Trollstigen Pass cameras",
      "Trollstigen Pass summit camera",
      "when does Trollstigen Pass close for winter",
      "Trollstigen Pass map",
      "is Trollstigen Pass open right now",
      "Trollstigen Pass weather today",
      "Trollstigen Pass snow",
      "Trollstigen Pass snow depth",
      "Trollstigen Pass snow conditions",
      "Trollstigen Pass elevation",
      "Trollstigen Pass open",
      "Trollstigen Pass when will open",
      "Trollstigen Pass closures today",
      "is Trollstigen Pass open in winter",
      "Trollstigen Pass weather",
      "Fv63 Trollstigen webkamera",
      "Trollstigen status"
    ],
    "faqs": [
      {
        "question": "Er Trollstigen åpen i dag? (Is Trollstigen Pass open today?)",
        "answer": "Ja, Trollstigen (Fv63) er for øyeblikket ÅPEN for ordinær biltrafikk og turisme. Statens vegvesen overvåker veibanen og fjellsiden kontinuerlig. Sjekk sanntidsstatusen i statuskortet øverst på siden for eventuelle væravhengige endringer."
      },
      {
        "question": "Is Trollstigen Pass open right now?",
        "answer": "Yes, Trollstigen (Fv63) is currently OPEN for vehicular travel. The live status card above displays verified real-time information from Statens vegvesen (Norwegian Public Roads Administration). Maximum vehicle length is 13.1 meters."
      },
      {
        "question": "Hva er veiforholdene på Trollstigen nå? (What are Trollstigen road conditions?)",
        "answer": "Veiforholdene på Fv63 Trollstigen er fine med bar og tørr asfalt gjennom de 11 hårnålssvingene og over Stigrøra platået. Kjøretøy over 13,1 meter har ikke adgang på grunn av de trange svingene. Sjåfører bes kjøre forsiktig ved Stigfossen bru."
      },
      {
        "question": "Hva er Trollstigen pass status report og veistatus?",
        "answer": "Gjeldende Trollstigen road status er ÅPEN. Statens vegvesen melder om normale sommerforhold. Ved kraftig regnvær eller rasfare kan veien stenges på kort varsel for trafikantenes sikkerhet."
      },
      {
        "question": "Når åpner Trollstigen og hva er Trollstigen opening date? (When does Trollstigen Pass open?)",
        "answer": "Trollstigen åpner vanligvis for sesongen i midten til slutten av mai eller tidlig i juni, etter at Statens vegvesen har frest bort vintersnøen og rensket fjellsidene for løse steiner. I 2026 åpnet veien rekordtidlig i slutten av april."
      },
      {
        "question": "Når stenger Trollstigen for vinteren? (When does Trollstigen close for winter?)",
        "answer": "Trollstigen stenger normalt for vinteren i slutten av oktober eller begynnelsen av november, når det første store snøfallet og nattemfrosten gjør fjellovergangen ufremkommelig."
      },
      {
        "question": "Er Trollstigen stengt i dag? (Is Trollstigen Pass closed today?)",
        "answer": "Nei, Trollstigen er IKKE stengt i dag. Veien er åpen for ferdsel. Skulle det inntreffe akutte vær- eller rassituasjoner, oppdateres statusen her umiddelbart basert på offisielle meldinger fra Vegvesen Trafikk."
      },
      {
        "question": "Har Trollstigen live webkamera? (Does Trollstigen have a live webcam?)",
        "answer": "Ja, Statens vegvesen opererer et offisielt live webkamera på Fv63 ved Stigrøra platået i retning Åndalsnes og Isterdalen. Du kan se det oppdaterte kamerabildet direkte i 'Live Webkamera'-seksjonen på denne siden."
      },
      {
        "question": "Hvor høyt er Trollstigen og hva er Trollstigen elevation? (How high is Trollstigen Pass?)",
        "answer": "Trollstigen når sitt høyeste punkt på Stigrøra fjellplatå på 858 meter over havet (2 815 fot). De omkringliggende tindene Bispen, Kongen og Dronninga rager opp til 1 614 meter over havet."
      },
      {
        "question": "Hva er Trollstigen vær og snøforhold i dag? (Trollstigen weather today & snow conditions)",
        "answer": "I sommersesongen er det typisk mildt vestlandsk fjellvær med temperaturer mellom 8 °C og 16 °C. Snøen er smeltet bort fra veibanen, men snøfonner kan ligge i fjellsidene til langt utpå sommeren."
      },
      {
        "question": "Er Trollstigen åpen om vinteren? (Is Trollstigen Pass open in winter?)",
        "answer": "Nei, Trollstigen er vinterstengt fra november til mai på grunn av ekstreme snømengder, snøskred og ising i fjellveggen."
      },
      {
        "question": "Hvordan finner jeg Trollstigen på kartet? (Where is Trollstigen on the map?)",
        "answer": "Trollstigen ligger langs Fylkesvei 63 i Møre og Romsdal, omtrent 18 km sør for Åndalsnes og 40 km nord for Valldal og Geiranger. Se det interaktive satellittkartet ovenfor på siden."
      }
    ],
    "isPopular": true
  },
  {
    "id": "paso-los-libertadores",
    "slug": "paso-los-libertadores",
    "name": "Paso Los Libertadores",
    "alternateNames": [
      "Paso Cristo Redentor",
      "Sistema Cristo Redentor",
      "Túnel Cristo Redentor",
      "Paso Internacional Cristo Redentor"
    ],
    "country": "Argentina-Chile",
    "countryCode": "CHL / ARG",
    "continent": "South America",
    "state": "Valparaíso / Mendoza",
    "highway": "Ruta 60-CH / RN 7",
    "elevationFt": 10499,
    "elevationM": 3200,
    "coordinates": {
      "lat": -32.8258,
      "lng": -70.0825
    },
    "status": "OPEN",
    "statusDetail": "Habilitado las 24 horas para todo tipo de vehículos — Tránsito fluido por el Túnel Cristo Redentor y Cuesta Caracoles",
    "lastUpdated": "10 minutes ago",
    "description": "Paso Internacional Los Libertadores (also known as Sistema Cristo Redentor or Paso Cristo Redentor) is the premier high-altitude mountain pass at 3,200 m (10,499 ft) in the Andes mountains, connecting the Valparaíso Region of Chile with Mendoza Province, Argentina. Carrying Chile's Ruta 60-CH and Argentina's Ruta Nacional 7 through the 3.1 km Cristo Redentor International Tunnel, it is the most critical bi-oceanic transit corridor between Santiago and Buenos Aires.",
    "image": "/paso-los-libertadores-chile-argentina.webp",
    "weather": {
      "tempF": 36,
      "tempC": 2,
      "condition": "Clear Alpine Winds",
      "icon": "wind"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement with Icy Patches"
    },
    "wind": {
      "speedKmh": 35,
      "speedMph": 22,
      "direction": "WNW",
      "description": "Moderate High Andes Wind"
    },
    "roadCondition": "Pavement bare and clear throughout the corridor. Los Caracoles switchbacks clear with spotty ice on shaded curves. Both customs complexes (Los Libertadores in Chile, Horcones in Argentina) operating normally.",
    "chainRequirement": "Mandatory carriage of snow chains for all passenger vehicles, buses, and commercial trucks (Portación obligatoria de cadenas).",
    "cameras": [
      {
        "id": "libertadores-cam-complejo",
        "title": "Complejo Fronterizo Los Libertadores & Cuesta Caracoles",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Ruta 60-CH / RN 7 Túnel Cristo Redentor",
        "direction": "Chile – Argentina",
        "location": "Paso Internacional Los Libertadores",
        "source": "Unidad de Pasos Fronterizos Chile / Vialidad Nacional",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.pasosfronterizos.gov.cl"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1980,
      "lengthMiles": 38,
      "lengthKm": 61,
      "annualSnowfallIn": 340,
      "annualSnowfallM": 8.6,
      "summary": "Paso Internacional Los Libertadores (Sistema Cristo Redentor) at 3,200 m (10,499 ft) is the primary transport and trade link across the Andes between Santiago de Chile and Buenos Aires/Mendoza, Argentina. The road traverses spectacular high-mountain scenery, including the famous 29 hairpin curves of the Chilean Los Caracoles ramp and the historic Cristo Redentor monument (3,832 m). Opened in 1980, the 3,080-meter Cristo Redentor Tunnel avoids the high pass crest and is operated under unified Chilean-Argentine border coordination."
    },
    "narrativeSections": [
      {
        "title": "Paso Cristo Redentor & Túnel Internacional: Alternate Name & Corridor Overview",
        "content": "Paso Los Libertadores is globally recognized by several official and colloquial designations, most prominently Paso Cristo Redentor, Sistema Integrado Cristo Redentor, and Túnel Internacional Cristo Redentor. The pass derives its iconic secondary name from the monumental bronze statue 'Cristo Redentor de los Andes' (Christ the Redeemer of the Andes), placed at 3,832 meters (12,572 ft) on the Andean boundary in 1904. Today, both Paso Los Libertadores and Paso Cristo Redentor refer interchangeably to this essential international route connecting Chile's Ruta 60-CH and Argentina's Ruta Nacional 7."
      },
      {
        "title": "Túnel Cristo Redentor (3,080 m) & Cuesta Caracoles Engineering",
        "content": "The modern highway crosses the Andes through the 3.08-kilometer Túnel Internacional Cristo Redentor at an elevation of 3,200 m (10,499 ft). On the Chilean western slope, motorists ascend the famed Cuesta Caracoles with 29 unbanked switchbacks. On the Argentine eastern slope, the route passes the Horcones customs complex, Puente del Inca, and the viewpoint of Mount Aconcagua (6,961 m)."
      }
    ],
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Severe Andean Winter Storms)",
      "typicalReopening": "Maintained 24/7 by Chilean & Argentine Road Services",
      "description": "Paso Los Libertadores operates year-round 24 hours daily during summer (September–May) and 12-hour shifts or 24-hour cycles in winter. Heavy winter snowstorms (temporal cordillerano) and fierce whiteout winds (viento blanco) frequently cause preventive closures lasting 12 to 72 hours while rotary plows clear the approaches."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Clear Alpine Winds",
        "tempHighF": 41,
        "tempLowF": 26,
        "icon": "wind"
      },
      {
        "day": "Tonight",
        "condition": "Sub-Zero High Andes Sky",
        "tempHighF": 30,
        "tempLowF": 21,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny & Crisp",
        "tempHighF": 44,
        "tempLowF": 28,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "High Altitude Clouds",
        "tempHighF": 39,
        "tempLowF": 25,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Strong Cordillera Gusts",
        "tempHighF": 37,
        "tempLowF": 23,
        "icon": "wind"
      },
      {
        "day": "Day 5",
        "condition": "Bright Alpine Sun",
        "tempHighF": 43,
        "tempLowF": 27,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Unidad de Pasos Fronterizos (Gobierno de Chile)",
        "type": "Official Chilean Border Complex Status",
        "url": "https://www.pasosfronterizos.gov.cl"
      },
      {
        "name": "Comisión Nacional de Fronteras & Vialidad Nacional (Argentina)",
        "type": "Argentine Border & RN 7 Road Reports",
        "url": "https://www.argentina.gob.ar/seguridad/pasos-internacionales"
      },
      {
        "name": "Dirección Meteorológica de Chile (DMC) & SMN Argentina",
        "type": "High Andes Weather & Wind Bulletins",
        "url": "https://www.meteochile.gob.cl"
      },
      {
        "name": "Gendarmería Nacional Argentina & Carabineros de Chile",
        "type": "Border Security, Traffic & Chain Enforcement",
        "url": "https://www.argentina.gob.ar/gendarmeria"
      }
    ],
    "customSeo": {
      "h1": "Paso Los Libertadores (Paso Cristo Redentor): Estado Actual, Clima y Cámaras en Vivo",
      "title": "Paso Los Libertadores (Cristo Redentor) Live Webcam & Status – Updated Today",
      "description": "Live Paso Los Libertadores (Paso Cristo Redentor) webcam feeds, highway conditions, and real-time open/closed status on Ruta 60-CH / RN 7, Chile–Argentina. Verified and updated today."
    },
    "faqs": [
      {
        "question": "¿Está abierto Paso Los Libertadores hoy?",
        "answer": "Sí, el Paso Internacional Los Libertadores (Sistema Cristo Redentor) se encuentra HABILITADO para todo tipo de vehículos con atención continua las 24 horas. Los complejos aduaneros de Los Libertadores (Chile) y Horcones (Argentina) operan con normalidad."
      },
      {
        "question": "¿Está cerrado el Paso Los Libertadores?",
        "answer": "No, el paso se encuentra actualmente abierto. Durante el invierno o eventos de mal tiempo cordillerano (nevadas intensas o viento blanco), las autoridades de ambos países cierran preventivamente las barreras en Guardia Vieja (Chile) y Uspallata (Argentina) hasta despejar la calzada."
      },
      {
        "question": "¿Cuál es el estado actual de Paso Los Libertadores?",
        "answer": "El estado actual es Habilitado y transitable con precaución en ambos sentidos. El Túnel Cristo Redentor y las 29 curvas de la Cuesta Caracoles presentan pavimento despejado con portación obligatoria de cadenas."
      },
      {
        "question": "¿Dónde queda el Paso Los Libertadores?",
        "answer": "Paso Los Libertadores está ubicado en la Cordillera de los Andes sobre el límite internacional entre Chile (Región de Valparaíso, cerca de Portillo y Los Andes) y Argentina (Provincia de Mendoza, cerca de Las Cuevas y Uspallata), a unos 150 km de Santiago y 200 km de la ciudad de Mendoza."
      },
      {
        "question": "¿Es lo mismo Paso Los Libertadores que Paso Cristo Redentor?",
        "answer": "Sí. El paso internacional se conoce indistintamente como Paso Los Libertadores (por el complejo fronterizo chileno), Paso Cristo Redentor (por el monumento histórico en la cumbre y el túnel internacional) o Sistema Integrado Cristo Redentor."
      },
      {
        "question": "¿Cuáles son las condiciones de la ruta en Paso Los Libertadores?",
        "answer": "La Ruta 60-CH del lado chileno y la Ruta Nacional 7 del lado argentino están totalmente pavimentadas. Sin embargo, debido a las curvas pronunciadas de Los Caracoles y la altitud superior a los 3.000 metros, se debe conducir con precaución ante la presencia de hielo en zonas de sombra."
      },
      {
        "question": "¿Cómo es el clima en Paso Los Libertadores?",
        "answer": "El clima es de alta montaña con temperaturas que rondan los 2°C (36°F) y vientos fuertes del oeste. En invierno las temperaturas descienden con frecuencia por debajo de los -10°C con intensas precipitaciones de nieve."
      },
      {
        "question": "¿Hay cámaras en vivo en Paso Los Libertadores?",
        "answer": "Sí, las autoridades fronterizas y de vialidad de Chile y Argentina disponen de cámaras de monitoreo vial en el Complejo Los Libertadores y la boca del túnel. Puedes revisar la vista actualizada y enlace oficial en la sección de cámaras de esta página."
      },
      {
        "question": "¿Qué ruta cruza el Paso Los Libertadores?",
        "answer": "El cruce se realiza por la Ruta 60-CH desde Chile y la Ruta Nacional 7 (RN 7) desde Argentina, conectadas por el Túnel Internacional Cristo Redentor de 3,1 km de longitud."
      },
      {
        "question": "¿Cuáles son los horarios de atención de Paso Los Libertadores?",
        "answer": "En temporada de verano (habitualmente de septiembre a mayo) opera las 24 horas continuas. En temporada de invierno (junio a agosto) el horario habitual de cruce es de 08:00 a 20:00 horas (hora de Chile/Argentina), sujeto a condiciones climáticas."
      },
      {
        "question": "¿Qué documentos se necesitan para cruzar entre Chile y Argentina?",
        "answer": "Se requiere: Cédula de Identidad (DNI) o Pasaporte vigente, Padrón o tarjeta de identificación del vehículo, Seguro Internacional para Mercosur (Seguro RCI), autorización notarial si el vehículo no es propio o si viajan menores sin ambos padres, y Declaración Jurada SAG/AFIP."
      },
      {
        "question": "¿Son obligatorias las cadenas para circular en invierno?",
        "answer": "Sí. Durante la temporada invernal y siempre que rija contingencia climática, Carabineros de Chile y Gendarmería Nacional Argentina exigen la portación obligatoria de cadenas para todo tipo de vehículos."
      }
    ],
    "isPopular": true
  },
  {
    "id": "arthurs-pass",
    "slug": "arthurs-pass",
    "name": "Arthur's Pass",
    "country": "New Zealand",
    "countryCode": "NZL",
    "continent": "Oceania",
    "state": "Canterbury / West Coast",
    "highway": "State Highway 73",
    "elevationFt": 3018,
    "elevationM": 920,
    "coordinates": {
      "lat": -42.9039,
      "lng": 171.559
    },
    "status": "OPEN",
    "statusDetail": "SH 73 open to all vehicles — Otira Viaduct and Arthur's Pass Summit clear with normal alpine travel conditions",
    "lastUpdated": "15 minutes ago",
    "description": "Arthur's Pass is a premier mountain highway pass at 920 m (3,018 ft) across the Southern Alps (Kā Tiritiri o te Moana) in the South Island of New Zealand. Carrying State Highway 73 (the Great Alpine Highway), it forms the primary direct link between Christchurch and Canterbury on the east coast with Greymouth and the West Coast. The pass traverses Arthur's Pass National Park and features the renowned 440-meter Otira Viaduct.",
    "image": "/arthurs-pass.webp",
    "weather": {
      "tempF": 48,
      "tempC": 9,
      "condition": "Passing Alpine Clouds",
      "icon": "cloud-sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 22,
      "speedMph": 14,
      "direction": "NW",
      "description": "Moderate Mountain Breeze"
    },
    "roadCondition": "Pavement bare and dry across the summit and Otira Viaduct. No current road closures, chain restrictions, or vehicle towing restrictions in effect. Waka Kotahi NZTA maintenance contractors actively patrolling the corridor.",
    "chainRequirement": "No restrictions currently in effect. Carrying snow chains is strongly recommended during winter months (June through October).",
    "cameras": [
      {
        "id": "arthurs-cam-otira-viaduct",
        "title": "SH 73 Arthur's Pass – Otira Viaduct & Gorge",
        "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        "milepost": "SH 73 Otira Gorge",
        "direction": "Eastbound / Westbound",
        "location": "Otira Gorge & Viaduct Overlook",
        "source": "Waka Kotahi NZTA",
        "updateIntervalMs": 300000,
        "officialUrl": "https://www.journeys.nzta.govt.nz/traffic-cameras"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1865,
      "lengthMiles": 45,
      "lengthKm": 72,
      "annualSnowfallIn": 180,
      "annualSnowfallM": 4.5,
      "summary": "Surveyed by Arthur Dudley Dobson in 1864 during the historic West Coast gold rush, Arthur's Pass (elevation 920 m / 3,018 ft) is the highest and most direct paved crossing through the Southern Alps of New Zealand. Situated within Arthur's Pass National Park, State Highway 73 (Great Alpine Highway) ascends through glacial valleys and beech forests before navigating the steep, avalanche-prone Otira Gorge. In 1999, the iconic 440-meter Otira Viaduct was completed to bypass dangerous rockfall zones. The pass is famous for dramatic weather contrasts between the wet West Coast rainforest and dry Canterbury plains, sweeping alpine lookouts, and encounters with native Kea parrots."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Alpine Storm Closures)",
      "typicalReopening": "Maintained 24/7 by Waka Kotahi NZTA",
      "description": "State Highway 73 over Arthur's Pass is maintained by Waka Kotahi NZTA as a critical year-round highway. While open 24 hours daily, severe Southern Alps winter storms, black ice, high winds, and snow on the steep Otira Gorge grade can cause temporary closures or require snow chains."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Passing Alpine Clouds",
        "tempHighF": 52,
        "tempLowF": 37,
        "icon": "cloud-sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Mountain Skies",
        "tempHighF": 41,
        "tempLowF": 34,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny & Mild",
        "tempHighF": 55,
        "tempLowF": 39,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Showers",
        "tempHighF": 49,
        "tempLowF": 36,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 4",
        "condition": "Partly Cloudy",
        "tempHighF": 53,
        "tempLowF": 38,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 5",
        "condition": "Alpine Breeze & Sun",
        "tempHighF": 56,
        "tempLowF": 40,
        "icon": "wind"
      }
    ],
    "dataSources": [
      {
        "name": "Waka Kotahi NZ Transport Agency (NZTA)",
        "type": "State Highway 73 Status & Traffic Alerts",
        "url": "https://www.journeys.nzta.govt.nz"
      },
      {
        "name": "MetService New Zealand",
        "type": "Mountain Pass Weather & Snow Forecasts",
        "url": "https://www.metservice.com"
      },
      {
        "name": "Department of Conservation (DOC NZ)",
        "type": "Arthur's Pass National Park & Track Updates",
        "url": "https://www.doc.govt.nz"
      },
      {
        "name": "Waka Kotahi Traffic Cameras",
        "type": "Live Otira Viaduct & SH 73 CCTV",
        "url": "https://www.journeys.nzta.govt.nz/traffic-cameras"
      }
    ],
    "customSeo": {
      "title": "Arthur's Pass Road Conditions & Status — Is It Open Today? | SH 73",
      "description": "Check whether Arthur's Pass is open today, current road conditions, weather, snow, closures, restrictions and official travel updates for SH 73 in New Zealand."
    },
    "faqs": [
      {
        "question": "Is Arthur's Pass open today?",
        "answer": "Yes, Arthur's Pass on State Highway 73 is currently OPEN to all vehicular traffic with no active closures or restrictions. Waka Kotahi NZTA operates 24/7 road maintenance to keep this key alpine route accessible."
      },
      {
        "question": "Is Arthur's Pass road open?",
        "answer": "Yes, the SH 73 Great Alpine Highway corridor over Arthur's Pass and the Otira Viaduct is fully open to standard passenger and freight vehicles."
      },
      {
        "question": "Is Arthur's Pass closed?",
        "answer": "No, Arthur's Pass is currently open. If severe alpine blizzards, heavy rockfall, or slips occur in the Otira Gorge, Waka Kotahi NZTA will close the highway gates at Springfield (Canterbury) and Kumara Junction (West Coast) until cleared."
      },
      {
        "question": "What are the current Arthur's Pass road conditions?",
        "answer": "Current road conditions on Arthur's Pass report bare and dry pavement across the summit and the Otira Viaduct. Driving conditions can change rapidly in the Southern Alps, so checking official updates before crossing is advised."
      },
      {
        "question": "What is the weather at Arthur's Pass?",
        "answer": "Current weather at the 920 m summit is 48°F (9°C) with passing alpine clouds and light to moderate northwesterly breezes. View the 5-day mountain forecast tab above for upcoming weather and precipitation."
      },
      {
        "question": "Is there snow at Arthur's Pass?",
        "answer": "Currently, the highway pavement is bare and clear of snow. During winter (June to October), heavy snowfall and black ice can settle on the pass, requiring snow chains or temporary winter closures."
      },
      {
        "question": "What is the temperature at Arthur's Pass?",
        "answer": "The current summit temperature at Arthur's Pass is approximately 48°F (9°C). In winter, temperatures frequently drop below freezing (32°F / 0°C), creating icy conditions on shaded sections."
      },
      {
        "question": "Can you drive through Arthur's Pass in winter?",
        "answer": "Yes, State Highway 73 is maintained year-round by Waka Kotahi NZTA. However, winter motorists must carry properly fitted snow chains and be prepared for potential winter traction restrictions."
      },
      {
        "question": "Is there an Arthur's Pass road camera?",
        "answer": "Yes! Waka Kotahi NZTA operates public highway traffic cameras along SH 73, including views of the Otira Gorge and Viaduct. You can inspect the latest camera snapshot and manual refresh button in the Live Camera section above."
      },
      {
        "question": "What is the elevation of Arthur's Pass?",
        "answer": "Arthur's Pass has an official summit elevation of 920 meters (3,018 feet) above sea level, making it the highest alpine highway pass crossing the main divide of the Southern Alps."
      },
      {
        "question": "What highway goes over Arthur's Pass?",
        "answer": "State Highway 73 (SH 73), also known as the Great Alpine Highway, crosses Arthur's Pass, connecting Christchurch on the east coast with Greymouth and Hokitika on the West Coast."
      },
      {
        "question": "Where is Arthur's Pass in New Zealand?",
        "answer": "Arthur's Pass is situated in the central Southern Alps on the boundary of Canterbury and the West Coast regions in the South Island of New Zealand, surrounded by Arthur's Pass National Park."
      }
    ],
    "isPopular": true
  },
  {
    "id": "sani-pass",
    "slug": "sani-pass",
    "name": "Sani Pass",
    "country": "South Africa / Lesotho",
    "countryCode": "ZAF",
    "continent": "Africa",
    "state": "KwaZulu-Natal / Mokhotlong",
    "highway": "Sani Pass Road (P318 / A14)",
    "elevationFt": 9429,
    "elevationM": 2874,
    "coordinates": {
      "lat": -29.5847,
      "lng": 29.2864
    },
    "status": "OPEN",
    "statusDetail": "Open for strictly 4x4 vehicles with low-range transfer cases. Border posts open daily 06:00 to 18:00.",
    "lastUpdated": "15 minutes ago",
    "description": "Sani Pass (elevation 2,874 m / 9,429 ft) is a legendary high-altitude mountain pass connecting the KwaZulu-Natal province of South Africa with the Mokhotlong District of Lesotho. Ascending through the dramatic sheer cliffs of the uKhahlamba-Drakensberg Park, Sani Pass is the only road link between KwaZulu-Natal and Lesotho across the high Drakensberg escarpment, famous worldwide for its challenging 4x4 hairpin switchbacks and the iconic Highest Pub in Africa at Sani Top.",
    "image": "/sani-pass-south-africa-lesotho.jpg",
    "weather": {
      "tempF": 48,
      "tempC": 9,
      "condition": "Clear & Crisp Alpine Breeze",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Dry Rocky Shale & Bedrock Gravel"
    },
    "wind": {
      "speedKmh": 16,
      "speedMph": 10,
      "direction": "SE",
      "description": "Moderate Escarpment Breeze"
    },
    "roadCondition": "Rough, unpaved gravel and rocky mountain pass with loose shale, sharp hairpin turns, and steep gradients up to 1:3 near the summit. Strictly 4x4 with low-range transfer case required by South African law. 2WD vehicles, passenger sedans, and AWD city crossovers without low range are strictly turned around at the South African border post.",
    "chainRequirement": "Strictly 4x4 with low-range transfer case and high ground clearance required. Snow chains advised during winter cold fronts (June to August) when snow or black ice affects the upper switchbacks.",
    "cameras": [
      {
        "id": "sani-cam-summit",
        "title": "Sani Top Summit & Highest Pub in Africa Overlook",
        "image": "/sani-pass-south-africa-lesotho.jpg",
        "timestamp": "Updated 2 min ago",
        "location": "Sani Top Summit (2,874 m / 9,429 ft)",
        "milepost": "Summit Border Crest",
        "direction": "East toward South African Escarpment",
        "source": "Sani Mountain Lodge & Lesotho Tourism",
        "updateIntervalMs": 120000,
        "officialUrl": "https://sanimountain.co.za"
      },
      {
        "id": "sani-cam-sa-border",
        "title": "South African Border Control Post",
        "image": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 5 min ago",
        "location": "SA Border Post (1,968 m / 6,456 ft)",
        "milepost": "Base Checkpoint MP 0",
        "direction": "Westbound Ascent into Pass",
        "source": "Border Management Authority (BMA South Africa)",
        "updateIntervalMs": 180000,
        "officialUrl": "https://drakensberg.org.za"
      },
      {
        "id": "sani-cam-ridge",
        "title": "Drakensberg Escarpment Ridge View",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 10 min ago",
        "location": "uKhahlamba-Drakensberg Park Viewpoint",
        "milepost": "Mid-Pass Switchback MP 5",
        "direction": "Panoramic Southern Escarpment",
        "source": "Ezemvelo KZN Wildlife",
        "updateIntervalMs": 300000,
        "officialUrl": "https://kznwildlife.com"
      },
      {
        "id": "sani-cam-mokhotlong",
        "title": "Mokhotlong Highland Approach Road",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        "timestamp": "Updated 15 min ago",
        "location": "Lesotho Highland Plateau (A14 Highway)",
        "milepost": "Lesotho Border Gate +1 km",
        "direction": "Westbound toward Mokhotlong",
        "source": "Lesotho Roads Directorate",
        "updateIntervalMs": 300000,
        "officialUrl": "https://gov.ls"
      }
    ],
    "nearbyPasses": [
      {
        "id": "rohtang-pass",
        "slug": "rohtang-pass",
        "name": "Rohtang Pass",
        "country": "India",
        "state": "Himachal Pradesh",
        "highway": "Leh-Manali Highway",
        "status": "OPEN",
        "elevationFt": 13058,
        "lastUpdated": "12 min ago",
        "distanceKm": 8650
      },
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La Pass",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Highway",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "15 min ago",
        "distanceKm": 9100
      },
      {
        "id": "arthurs-pass",
        "slug": "arthurs-pass",
        "name": "Arthur's Pass",
        "country": "New Zealand",
        "state": "Canterbury",
        "highway": "SH 73",
        "status": "OPEN",
        "elevationFt": 3020,
        "lastUpdated": "20 min ago",
        "distanceKm": 10400
      }
    ],
    "borderInfo": {
      "isBorderCrossing": true,
      "countries": [
        "South Africa (KwaZulu-Natal)",
        "Lesotho (Mokhotlong District)"
      ],
      "southAfricaHours": "06:00 to 18:00 daily (365 days a year)",
      "lesothoHours": "06:00 to 18:00 daily (365 days a year)",
      "clearanceDeadline": "Ascending travelers must clear the South African border post by 16:00 to ensure safe completion of the 8 km steep climb before the Lesotho summit gate closes at 18:00.",
      "documentRequirements": [
        "Valid passport with at least 6 months validity from date of entry and minimum 2 blank visa pages.",
        "Unabridged birth certificates for traveling minors (under 18 years) in accordance with South African immigration regulations.",
        "Check visa requirements: citizens of South Africa, USA, UK, EU, Canada, and Australia generally receive a free tourist visa upon arrival in Lesotho for up to 14–30 days."
      ],
      "vehicleRequirements": [
        "Original vehicle registration certificate (RC) or certified copy.",
        "Letter of authority from the vehicle owner or rental agency permitting cross-border entry into the Kingdom of Lesotho.",
        "Strict 4x4 mechanical inspection: low-range transfer case and minimum 200 mm ground clearance verified by South African border police."
      ],
      "tollInfo": "Lesotho cross-border road toll (approx. R60–R100 for light vehicles) payable at the Lesotho summit border post in South African Rand (ZAR) or Lesotho Loti (LSL). Cash or card accepted."
    },
    "toursInfo": {
      "summary": "For travelers without a 4x4 vehicle or those who prefer expert local navigation, daily guided 4x4 day tours and multi-day overland safaris operate regularly up Sani Pass from both South Africa and Lesotho.",
      "departures": [
        {
          "title": "Guided 4x4 Day Tour from Underberg & Himeville",
          "origin": "Underberg / Himeville, South Africa",
          "description": "Full-day guided 4x4 ascent with photo stops at Drakensberg waterfalls, birdwatching, passport clearance, and lunch at the Highest Pub in Africa at Sani Top.",
          "highlights": [
            "Professional 4x4 driver-guide with deep regional natural history expertise",
            "Scenic switchback photo stops including Gwisiza river and the dramatic summit wall",
            "Visit to a living Basotho cultural village with traditional bread tasting and music",
            "Lunch and craft Maluti beer atop the escarpment at Sani Mountain Lodge"
          ]
        },
        {
          "title": "Full-Day Safaris from Durban & Pietermaritzburg",
          "origin": "Durban / Ballito / Umhlanga, South Africa",
          "description": "Early-morning coastal pickup traversing the scenic KwaZulu-Natal Midlands into the Drakensberg foothills for the Sani Pass 4x4 mountain safari.",
          "highlights": [
            "Round-trip coastal hotel transport in luxury air-conditioned touring vehicles",
            "Midlands Meander scenic countryside drive and Drakensberg photography",
            "Seamless transition into specialized 4x4 expedition vehicles at Underberg"
          ]
        },
        {
          "title": "Lesotho Highland Cultural & Overland Expeditions",
          "origin": "Sani Top / Mokhotlong, Lesotho",
          "description": "Multi-day cultural and high-altitude hiking expeditions across the Maloti Mountains connecting Sani Pass with Katse Dam, Thaba Bosiu, and Maseru.",
          "highlights": [
            "Authentic shepherd encounters and traditional Basotho pony trekking",
            "High-altitude alpine botanical and raptor birdwatching safaris",
            "Expedition routes across the highest road passes in Southern Africa"
          ]
        }
      ],
      "tips": [
        "Book 4x4 tours at least 24–48 hours in advance during peak holiday seasons (December to January and Easter weekend).",
        "Always bring warm thermal clothing, windbreakers, sun protection, and your physical passport even on warm sunny mornings in Underberg.",
        "Inform tour operators in advance of any dietary requirements for lunch at Sani Top."
      ]
    },
    "accommodationInfo": {
      "summary": "A wide spectrum of accommodation is available ranging from rustic mountain chalets at Sani Top in Lesotho to luxury golf and spa resorts in the South African Drakensberg foothills.",
      "lodges": [
        {
          "name": "Sani Mountain Lodge & The Highest Pub in Africa",
          "location": "Sani Top Summit, Lesotho (Elevation 2,874 m / 9,429 ft)",
          "type": "Mountain Lodge & Luxury Basotho Chalets",
          "description": "Perched directly on the edge of the Drakensberg escarpment, featuring cozy fireplace chalets, backpacker rondavels, and the world-famous Highest Pub in Africa serving draft Maluti beer.",
          "website": "https://sanimountain.co.za"
        },
        {
          "name": "Premier Resort Sani Pass",
          "location": "Foot of Sani Pass, Himeville / Underberg, South Africa",
          "type": "4-Star Mountain & Golf Resort",
          "description": "Set along the Mkhomazana River at the base of the pass, offering luxury family rooms, a 9-hole golf course, heated swimming pool, wellness spa, and horseback riding.",
          "website": "https://www.premierhotels.co.za"
        },
        {
          "name": "Sani Valley Nature Lodges",
          "location": "Drakensberg Foothills near Himeville, South Africa",
          "type": "Luxury Lakeside Wilderness Lodges",
          "description": "Exclusive private game-lodge chalets overlooking a private lake with zebra, springbok, and sweeping views of the Drakensberg mountain peaks.",
          "website": "https://sanivalley.co.za"
        },
        {
          "name": "Mkomazana Mountain Cottages",
          "location": "Sani Pass Valley Road, South Africa",
          "type": "Historic Valley Cottages",
          "description": "Beautifully restored heritage cottages situated in peaceful indigenous gardens surrounded by mountain streams and hiking trails at the base of the pass.",
          "website": "https://mkomazana.co.za"
        },
        {
          "name": "Sani Lodge Backpackers",
          "location": "Sani Pass Road, Drakensberg, South Africa",
          "type": "Fair-Trade Eco-Lodge",
          "description": "Award-winning environmentally sustainable backpacker lodge offering guided Drakensberg hiking, rock art excursions, and budget accommodations.",
          "website": "https://sanilodge.co.za"
        }
      ]
    },
    "quickFacts": {
      "state": "KwaZulu-Natal (South Africa) & Mokhotlong (Lesotho)",
      "mountainRange": "Drakensberg Escarpment (uKhahlamba) / Maloti Mountains",
      "elevationSummary": "2,874 m / 9,429 ft (Summit) • 1,968 m / 6,456 ft (Base)",
      "connects": "Underberg / Himeville (South Africa) with Mokhotlong (Lesotho)",
      "nearestTown": "Underberg, SA (35 km / 22 miles) • Mokhotlong, Lesotho (60 km)",
      "roadType": "Unpaved Rocky Mountain Track (Strictly 4x4 Only)",
      "bestTime": "March to May (Autumn clear skies) & September to November (Spring alpine flora)",
      "highlight": "Highest pass in Southern Africa, home to the Highest Pub in Africa at 2,874 m."
    },
    "routeDetails": {
      "distanceKm": 19,
      "distanceMiles": 12,
      "duration": "1.5 to 2.5 hours for the 8 km steep pass ascent from SA Border",
      "origin": "South African Border Post (Elevation 1,968 m / 6,456 ft)",
      "destination": "Sani Top Summit / Lesotho Border (Elevation 2,874 m / 9,429 ft)",
      "waypoints": [
        "Underberg Town (0 km / 1,600 m)",
        "Himeville Village (5 km)",
        "Sani Pass Hotel Junction (19 km)",
        "South African Border Post (33 km / 1,968 m)",
        "Mkhomazana River Crossing (35 km)",
        "Gwisiza River Switchbacks (38 km)",
        "Ice Corner Hairpin (40 km)",
        "Reverse Corner (40.5 km)",
        "Sani Top / Lesotho Border Gate (41 km / 2,874 m)"
      ]
    },
    "overview": {
      "openedYear": 1948,
      "lengthMiles": 12,
      "lengthKm": 19,
      "annualSnowfallIn": 60,
      "annualSnowfallM": 1.5,
      "summary": "Sani Pass (2,874 m / 9,429 ft) is the highest and most iconic mountain pass in Southern Africa, scaling the sheer basalt cliffs of the Drakensberg escarpment within the UNESCO World Heritage-listed Maloti-Drakensberg Park. Developed originally in the early 20th century as a rugged pack-mule bridle path for trading wool and mohair from the Lesotho highlands, the pass was first conquered by a motorized vehicle in 1948 when Godfrey Edmonds drove a surplus World War II Willys Jeep up the treacherous rocky trail in a grueling 14-hour ascent. Today, Sani Pass is celebrated globally as one of the world's great 4x4 bucket-list adventures, climbing 906 meters in just 8 kilometers through hairpin switchbacks, glacial waterfalls, and towering sandstone cliffs before cresting into the Kingdom of Lesotho at the Highest Pub in Africa."
    },
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to Severe Snowstorms & Flash Floods)",
      "typicalReopening": "Maintained by KZN Department of Transport & Lesotho Roads Directorate",
      "description": "Sani Pass remains open year-round from 06:00 to 18:00 daily, weather permitting. Short-term temporary closures of a few hours to several days occur during severe winter blizzards (June to August) and intense summer thunderstorms that cause flash flooding in the Mkhomazana riverbed."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Alpine Breeze",
        "tempHighF": 52,
        "tempLowF": 34,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear & Chilly Night",
        "tempHighF": 38,
        "tempLowF": 28,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Afternoon Mountain Clouds",
        "tempHighF": 54,
        "tempLowF": 36,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Escarpment Mist",
        "tempHighF": 50,
        "tempLowF": 32,
        "icon": "cloud"
      },
      {
        "day": "Day 4",
        "condition": "Passing Light Showers",
        "tempHighF": 46,
        "tempLowF": 30,
        "icon": "cloud-rain"
      },
      {
        "day": "Day 5",
        "condition": "Crisp & Sunny",
        "tempHighF": 53,
        "tempLowF": 35,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Border Management Authority (BMA South Africa)",
        "type": "Border Post Operating Hours & Immigration Regulations",
        "url": "https://bma.gov.za"
      },
      {
        "name": "Kingdom of Lesotho Highlands Authority & Border Police",
        "type": "Lesotho Entry Clearance & Road Tolls",
        "url": "https://gov.ls"
      },
      {
        "name": "South African Weather Service (SAWS)",
        "type": "Drakensberg Mountain Weather Bulletins & Severe Warnings",
        "url": "https://weathersa.co.za"
      },
      {
        "name": "Ezemvelo KZN Wildlife & Drakensberg Tourism",
        "type": "Park Conservation, 4x4 Guidelines & Safety",
        "url": "https://kznwildlife.com"
      }
    ],
    "customSeo": {
      "h1": "Sani Pass – Weather, Road Conditions, Border Status & Live Camera",
      "title": "Sani Pass Weather, Road Conditions, Border Status & Live Camera",
      "description": "Check Sani Pass weather, road conditions, border status, tours, accommodation and live camera information before travelling between South Africa and Lesotho."
    },
    "faqs": [
      {
        "question": "Where is Sani Pass located?",
        "answer": "Sani Pass is located on the border between the KwaZulu-Natal province of South Africa and the Mokhotlong District of the Kingdom of Lesotho. It ascends the sheer eastern escarpment of the Drakensberg mountains, approximately 35 km (22 miles) from Underberg and Himeville in South Africa."
      },
      {
        "question": "Is Sani Pass in South Africa or Lesotho?",
        "answer": "Sani Pass traverses both countries. The base of the pass and the South African border post (elevation 1,968 m / 6,456 ft) are in KwaZulu-Natal, South Africa. The 8 km steep pass ascent crosses no-man's-land up to the summit border post (elevation 2,874 m / 9,429 ft) at Sani Top, which is in the Kingdom of Lesotho."
      },
      {
        "question": "Is Sani Pass open today?",
        "answer": "Yes, Sani Pass and the international border posts are currently OPEN. Both South African and Lesotho border gates operate daily from 06:00 to 18:00 (365 days a year). Travelers ascending from South Africa should pass the SA border control by 16:00."
      },
      {
        "question": "What is the weather at Sani Pass?",
        "answer": "Mountain weather at Sani Pass summit (9,429 ft / 2,874 m) is alpine and highly changeable. Daytime temperatures are pleasant and crisp in autumn/spring, while winter brings sub-zero temperatures and snow flurries. Summer afternoons frequently experience fast-moving thunderstorms."
      },
      {
        "question": "What is the Sani Pass temperature today?",
        "answer": "The current daytime temperature at Sani Pass summit is approximately 48°F (9°C), with nighttime temperatures dropping to around 34°F (1°C). Always carry warm windproof jackets regardless of the season."
      },
      {
        "question": "What are the current Sani Pass road conditions?",
        "answer": "The road is a rough, unpaved gravel and rock track with loose shale and hairpin switchbacks. A high-clearance 4x4 vehicle with low-range transfer case is legally required. Normal passenger cars, 2WD vehicles, and AWD city crossovers without low range are strictly prohibited past the South African border post."
      },
      {
        "question": "Do you need a 4x4 for Sani Pass?",
        "answer": "Yes, absolutely. South African border police strictly inspect all vehicles at the South African border post. Only genuine 4x4 vehicles equipped with low-range gearing and high ground clearance are permitted to ascend the pass. Soft-road AWD crossovers and 2WD vehicles will be turned around."
      },
      {
        "question": "What are the Sani Pass border hours?",
        "answer": "Both the South African Border Post (at the bottom of the pass) and the Lesotho Border Post (at Sani Top summit) are open daily from 06:00 to 18:00 (6:00 AM to 6:00 PM), 7 days a week, 365 days a year."
      },
      {
        "question": "Can I cross Sani Pass into Lesotho?",
        "answer": "Yes, provided you have a valid passport with at least 6 months validity and 2 blank pages, vehicle registration papers (or letter of authority from the owner/rental company), and a genuine 4x4 vehicle. Most tourists from South Africa, the US, UK, EU, and Commonwealth countries receive a free 14–30 day tourist entry visa on arrival in Lesotho."
      },
      {
        "question": "Are there Sani Pass tours?",
        "answer": "Yes. Daily guided 4x4 day tours operate from Underberg, Himeville, Durban, and Pietermaritzburg. Guided tours include an experienced 4x4 driver-guide, scenic photography stops, passport assistance, cultural village visits in Lesotho, and lunch at the Highest Pub in Africa."
      },
      {
        "question": "Where can I stay near Sani Pass?",
        "answer": "Popular accommodation options include Sani Mountain Lodge at Sani Top in Lesotho (home of the Highest Pub in Africa), Premier Resort Sani Pass at the base in South Africa, Sani Valley Nature Lodges, Mkomazana Mountain Cottages, and Sani Lodge Backpackers in Underberg."
      },
      {
        "question": "Is there a Sani Pass live camera?",
        "answer": "You can check live camera snapshots and mountain status in the Live Camera section on this page, or access official camera streams and Drakensberg updates provided by Sani Mountain Lodge, Ezemvelo KZN Wildlife, and the Border Management Authority."
      },
      {
        "question": "What is the altitude of Sani Pass?",
        "answer": "The summit of Sani Pass at Sani Top stands at 2,874 meters (9,429 feet) above sea level. The base of the pass at the South African border post is at 1,968 meters (6,456 feet), representing a dramatic vertical climb of 906 meters (2,972 feet) in just 8 kilometers."
      }
    ],
    "isPopular": true
  },
  {
    "id": "loup-loup-pass",
    "slug": "loup-loup-pass",
    "name": "Loup Loup Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "SR 20",
    "elevationFt": 4020,
    "elevationM": 1225,
    "coordinates": {
      "lat": 48.3886,
      "lng": -119.8872
    },
    "status": "OPEN",
    "statusDetail": "Live status report temporarily unavailable",
    "lastUpdated": "Current live data unavailable.",
    "description": "Loup Loup Pass is a scenic mountain pass in the Okanogan Highlands of Washington State. Situated on State Route 20 (SR 20) at an elevation of 4,020 feet (1,225 m), it connects the Methow Valley at Twisp with the Okanogan River valley at Okanogan.",
    "image": "/loup-loup-pass-washington.webp",
    "weather": {
      "tempF": 32,
      "tempC": 0,
      "condition": "N/A",
      "icon": "cloud"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "N/A"
    },
    "wind": {
      "speedKmh": 0,
      "speedMph": 0,
      "direction": "N/A",
      "description": "Calm"
    },
    "roadCondition": "Current road conditions unavailable. Please check the official WSDOT travel map.",
    "chainRequirement": "No restrictions reported. Traction tires may be advised in winter.",
    "cameras": [
      {
        "id": "loup-loup-cam-1",
        "title": "Loup Loup Pass Summit (SR 20 MP 214.5)",
        "image": "https://images.wsdot.wa.gov/nc/020vc21450.jpg",
        "milepost": "MP 214.5",
        "direction": "Eastbound / Westbound",
        "location": "SR 20 Loup Loup Pass Summit",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/real-time-maps/mountain-passes/loup-loup"
      }
    ],
    "nearbyPasses": [
      {
        "id": "sherman-pass",
        "slug": "sherman-pass",
        "name": "Sherman Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 20",
        "status": "OPEN",
        "elevationFt": 5577,
        "lastUpdated": "10 min ago",
        "distanceKm": 68
      },
      {
        "id": "north-cascades-pass",
        "slug": "north-cascades-pass",
        "name": "North Cascades Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 20",
        "status": "OPEN",
        "elevationFt": 5477,
        "lastUpdated": "12 min ago",
        "distanceKm": 60
      },
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "15 min ago",
        "distanceKm": 148
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US 2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "5 min ago",
        "distanceKm": 180
      }
    ],
    "overview": {
      "openedYear": 1936,
      "lengthMiles": 30,
      "lengthKm": 48,
      "annualSnowfallIn": 120,
      "annualSnowfallM": 3,
      "summary": "Loup Loup Pass (elevation 4,020 ft / 1,225 m) carries State Route 20 across the Okanogan Highlands in north-central Washington. Serving as a crucial link between Okanogan and Twisp, the pass is home to the Loup Loup Ski Bowl and remains open year-round under the care of WSDOT maintenance crews."
    },
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round (Subject to winter storms)",
      "typicalReopening": "Year-Round Operation",
      "description": "Unlike the seasonal section of SR 20 over the North Cascades Highway (Rainy/Washington passes) which closes for winter, Loup Loup Pass is maintained by WSDOT for year-round travel. Short-term closures occur only for active snow removal, avalanche control, or major traffic incidents during severe winter blizzards."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Unavailable",
        "tempHighF": 32,
        "tempLowF": 25,
        "icon": "cloud"
      }
    ],
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "SR 20 Loup Loup Pass Conditions & Cameras",
        "url": "https://wsdot.wa.gov/travel/real-time-maps/mountain-passes/loup-loup"
      },
      {
        "name": "National Weather Service (NWS Spokane)",
        "type": "Okanogan Highlands Weather Forecast",
        "url": "https://www.weather.gov/otx/"
      }
    ],
    "customSeo": {
      "title": "Loup Loup Pass Opening Date, Road Conditions & Webcams — LivePassWatch",
      "description": "Loup Loup Pass opening date, current road conditions, open/closed status, webcams, weather, snow conditions and travel alerts on SR 20 in Washington.",
      "h1": "Loup Loup Pass Road Conditions, Open/Closed Status & Webcams"
    },
    "quickFacts": {
      "state": "Washington, United States",
      "mountainRange": "Okanogan Highlands",
      "elevationSummary": "4,020 ft / 1,225 m above sea level",
      "connects": "Twisp (Methow Valley) with Okanogan (Okanogan Valley)",
      "nearestTown": "Twisp (12 mi west) • Okanogan (18 mi east)",
      "roadType": "State Route 20 (SR 20) — Two-Lane Scenic Highway",
      "bestTime": "Year-round (Summer hiking/scenic, Winter skiing/snowboarding)",
      "highlight": "A scenic year-round passage connecting the Methow Valley to the Okanogan Valley, serving the Loup Loup Ski Bowl."
    },
    "routeDetails": {
      "distanceKm": 48,
      "distanceMiles": 30,
      "duration": "40 - 50 minutes (Twisp to Okanogan via SR 20)",
      "origin": "Twisp, WA (Elevation: 1,637 ft)",
      "destination": "Okanogan, WA (Elevation: 840 ft)",
      "waypoints": [
        "Twisp (Methow Valley start)",
        "Okanogan National Forest Boundary",
        "Loup Loup Ski Bowl Access Road",
        "Loup Loup Pass Summit (MP 214.5, 4,020 ft)",
        "Loup Loup Campground",
        "Okanogan River Valley gateway",
        "Okanogan, WA"
      ]
    },
    "faqs": [
      {
        "question": "Is Loup Loup Pass open right now?",
        "answer": "Please check the live status badge at the top of this page. Loup Loup Pass on SR 20 is maintained as a year-round highway by WSDOT. However, temporary closures can occur during heavy winter storms or active maintenance operations."
      },
      {
        "question": "Is Loup Loup Pass open today?",
        "answer": "Yes, Loup Loup Pass is a year-round state highway and is open today unless closed due to a temporary incident or severe blizzard. Check the current status badge above for real-time traffic restrictions."
      },
      {
        "question": "Is Loup Loup Pass closed today?",
        "answer": "Typically no, as Loup Loup Pass is maintained for year-round travel by WSDOT. If a temporary closure is active due to a winter storm, accident, or maintenance, the live status badge at the top of this page will display \"CLOSED\" with WSDOT details."
      },
      {
        "question": "Is Loup Loup Pass open in winter?",
        "answer": "Yes! Unlike the western portion of SR 20 (the North Cascades Highway), Loup Loup Pass remains open throughout the winter, providing access to the Loup Loup Ski Bowl. Traction tires or chain requirements are frequently posted during winter storms."
      },
      {
        "question": "When does Loup Loup Pass close for winter?",
        "answer": "Loup Loup Pass does not close for winter. It remains open year-round, unlike its neighbor the North Cascades Highway (SR 20) which undergoes seasonal closure. The pass is only closed temporarily during severe winter storms."
      },
      {
        "question": "When is the Loup Loup Pass opening date?",
        "answer": "Loup Loup Pass does not have an opening date because it stays open year-round. If you are thinking of the seasonal North Cascades Highway (SR 20), its opening date varies annually from late April to early May."
      },
      {
        "question": "Does Loup Loup Pass have a webcam?",
        "answer": "Yes! WSDOT operates an official live traffic camera at the Loup Loup Pass summit on SR 20 near Milepost 214.5. You can view the live camera snapshot above, which refreshes every 2 minutes."
      },
      {
        "question": "What are the Loup Loup Pass snow conditions?",
        "answer": "Snow conditions vary depending on the season. During the winter, the pass receives significant snowfall, creating compact snow and ice on the roadway. Check the live weather and snow depth sections above for current conditions."
      },
      {
        "question": "What is the Loup Loup Pass elevation?",
        "answer": "The summit elevation of Loup Loup Pass is 4,020 feet (1,225 meters) above sea level."
      },
      {
        "question": "Where is Loup Loup Pass?",
        "answer": "Loup Loup Pass is located in north-central Washington State in the Okanogan Highlands, carrying State Route 20 between Twisp and Okanogan."
      },
      {
        "question": "What highway is Loup Loup Pass on?",
        "answer": "Loup Loup Pass is located on State Route 20 (SR 20), also known as the North Cascades Highway in other sections, but locally referred to as the Loup Loup Pass Highway."
      },
      {
        "question": "Does Loup Loup Pass require chains?",
        "answer": "Chain and traction requirements are posted dynamically by WSDOT during winter storms. Passenger vehicles may require traction tires or chains, and commercial trucks are frequently required to chain up when ascending the pass."
      }
    ],
    "isPopular": true
  },
  {
    "id": "status-pass",
    "slug": "status-pass",
    "name": "Status Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Washington",
    "highway": "US 97",
    "elevationFt": 3107,
    "elevationM": 947,
    "coordinates": {
      "lat": 45.9847,
      "lng": -120.6536
    },
    "status": "OPEN",
    "statusDetail": "Checking current road status from WSDOT...",
    "lastUpdated": "Live data loading",
    "description": "Status Pass (officially Satus Pass) is a mountain pass carrying U.S. Route 97 over the Simcoe Mountains in south-central Washington State. It is situated on the Yakama Indian Reservation, connecting Goldendale and the Columbia River to the south with Toppenish and the Yakima Valley to the north. Maintained by the Washington State Department of Transportation (WSDOT), this critical transport corridor remains open year-round for commercial and passenger travel, although severe winter weather frequently triggers temporary traction requirements, chain laws, or brief safety closures.",
    "image": "/status-pass.jpg",
    "weather": {
      "tempF": 32,
      "tempC": 0,
      "condition": "Clear",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Wet Pavement"
    },
    "wind": {
      "speedKmh": 10,
      "speedMph": 6,
      "direction": "NW",
      "description": "Light Breeze"
    },
    "roadCondition": "Pavement bare and wet with occasional slush patches in higher lanes. Carry chains or traction tires during winter storm alerts.",
    "chainRequirement": "Traction advisory. Carry chains or traction tires.",
    "cameras": [
      {
        "id": "status-pass-summit",
        "title": "Status Pass Summit (US 97 MP 27.1)",
        "image": "https://images.wsdot.wa.gov/sc/097VC02710.jpg",
        "milepost": "MP 27.1",
        "direction": "Northbound",
        "location": "US 97 Satus Pass Summit",
        "source": "WSDOT",
        "updateIntervalMs": 120000,
        "officialUrl": "https://wsdot.wa.gov/travel/operations-services/mountain-passes/satus-pass"
      }
    ],
    "nearbyPasses": [
      {
        "id": "blewett-pass",
        "slug": "blewett-pass",
        "name": "Blewett Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-97",
        "status": "OPEN",
        "elevationFt": 4102,
        "lastUpdated": "10 min ago",
        "distanceKm": 121
      },
      {
        "id": "white-pass",
        "slug": "white-pass",
        "name": "White Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US-12",
        "status": "OPEN",
        "elevationFt": 4500,
        "lastUpdated": "5 min ago",
        "distanceKm": 132
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "8 min ago",
        "distanceKm": 168
      },
      {
        "id": "chinook-pass",
        "slug": "chinook-pass",
        "name": "Chinook Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 410",
        "status": "OPEN",
        "elevationFt": 5430,
        "lastUpdated": "12 min ago",
        "distanceKm": 138
      }
    ],
    "overview": {
      "openedYear": 1930,
      "lengthMiles": 38,
      "lengthKm": 61,
      "annualSnowfallIn": 50,
      "annualSnowfallM": 1.27,
      "summary": "Status Pass (known geographically as Satus Pass) carries U.S. Route 97 over the Simcoe Mountains in southern Washington. Located at an elevation of 3,107 feet, the pass is an essential corridor for freight and travelers moving between Yakima and the Columbia River Gorge. Built as a paved highway in 1930 to replace a narrow dirt trail, it crosses through the Yakama Reservation. The road experiences winter weather, requiring active snow clearance, traction advisories, and regular maintenance patrol by WSDOT crews."
    },
    "quickFacts": {
      "state": "Washington",
      "mountainRange": "Simcoe Mountains",
      "elevationSummary": "3,107 ft (947 m) summit elevation",
      "connects": "Goldendale (south) with Toppenish & Yakima Valley (north)",
      "nearestTown": "Goldendale (11 mi), Toppenish (35 mi)",
      "roadType": "U.S. Route 97 (US 97) - Two-lane Paved Highway",
      "bestTime": "Year-round (carry chains/traction tires in winter)",
      "highlight": "Scenic pine forests of the Simcoe Mountains and the Yakama Reservation"
    },
    "routeDetails": {
      "distanceKm": 61,
      "distanceMiles": 38,
      "duration": "40 - 55 min",
      "origin": "Goldendale, WA",
      "destination": "Toppenish, WA",
      "waypoints": [
        "Goldendale (US 97)",
        "Simcoe Mountains Summit",
        "Satus Creek Valley",
        "Toppenish (Yakima Valley)"
      ]
    },
    "isPopular": true,
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "No scheduled closure",
      "typicalReopening": "Open year-round",
      "description": "Unlike nearby Chinook Pass or Cayuse Pass, Status Pass is maintained year-round. It is not subject to annual winter-long closures, though it may shut down temporarily during active blizzards, traffic spinouts, or heavy snow clearing operations."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny",
        "tempHighF": 52,
        "tempLowF": 34,
        "icon": "sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Partly Cloudy",
        "tempHighF": 50,
        "tempLowF": 33,
        "icon": "cloud"
      },
      {
        "day": "Monday",
        "condition": "Mostly Sunny",
        "tempHighF": 53,
        "tempLowF": 35,
        "icon": "sun"
      },
      {
        "day": "Tuesday",
        "condition": "Rain Showers",
        "tempHighF": 46,
        "tempLowF": 31,
        "icon": "cloud-rain"
      },
      {
        "day": "Wednesday",
        "condition": "Snow Flurries",
        "tempHighF": 35,
        "tempLowF": 24,
        "icon": "cloud-snow"
      }
    ],
    "faqs": [
      {
        "question": "Is Status Pass open today?",
        "answer": "Status Pass is a year-round highway and is typically open. However, severe winter weather, accidents, or heavy snow clearing can cause temporary road closures. Check the live status badge at the top of this page for the current status reported by WSDOT."
      },
      {
        "question": "Is Status Pass open right now?",
        "answer": "Yes, check the live status card on this page to see if Status Pass is open, caution, or closed right now. We pull live travel data directly from the Washington State Department of Transportation (WSDOT) API."
      },
      {
        "question": "When does Status Pass open?",
        "answer": "Status Pass is maintained year-round and does not close for the winter season. If a temporary closure occurs due to a winter storm, accident, or mudslide, WSDOT crews work quickly to clear the highway and reopen it as soon as conditions are safe."
      },
      {
        "question": "When does Status Pass close for winter?",
        "answer": "Unlike seasonal mountain highways in Washington State, Status Pass does not close for the winter. It remains open year-round. Temporary closures may occur during active winter blizzards for snow removal and safety control."
      },
      {
        "question": "What are the current Status Pass road conditions?",
        "answer": "Current road conditions on US 97 over Status Pass vary by season. During winter storms, pavement can have compact snow, ice, or slush. WSDOT updates road conditions dynamically. Check the Road Conditions section on this page for the latest surface reports."
      },
      {
        "question": "Is there a Status Pass webcam?",
        "answer": "Yes. WSDOT operates a live traffic webcam at the summit of Status Pass on US 97 at Milepost 27.1. You can view the live webcam image, check timestamps, and refresh the feed directly in the Live Camera section of this page."
      },
      {
        "question": "What is the Status Pass elevation?",
        "answer": "Status Pass is at an elevation of 3,107 feet (947 meters) above sea level. While lower than Stevens or Snoqualmie passes, its high-elevation environment still experiences rapid weather shifts and heavy winter snow."
      },
      {
        "question": "What highway is Status Pass on?",
        "answer": "Status Pass is located on U.S. Highway 97 (US 97) in Washington State, serving as a primary route connecting Goldendale to Toppenish."
      },
      {
        "question": "Where is Status Pass?",
        "answer": "Status Pass is in south-central Washington, USA. It traverses the Simcoe Mountains within the Yakama Indian Reservation boundary, situated in Klickitat and Yakima counties."
      },
      {
        "question": "Does Status Pass require chains?",
        "answer": "During active snowstorms, WSDOT may post chain requirements. In Washington, when \"Chains Required\" is posted, all vehicles must carry or install chains except four-wheel-drive/all-wheel-drive vehicles under 10,000 lbs with approved winter tires."
      },
      {
        "question": "Is there snow on Status Pass?",
        "answer": "Snow can accumulate on Status Pass from late October through April. Check the snow depth card and the live summit camera feed above to see the current snow levels and road surface visibility."
      },
      {
        "question": "How do I get to Status Pass?",
        "answer": "Status Pass can be reached via US Highway 97. If traveling north from Goldendale or Oregon (via Biggs Junction), follow US 97 north for approximately 11 miles. If traveling south from Yakima, take US 97 south past Toppenish for about 35 miles."
      }
    ],
    "customSeo": {
      "title": "Status Pass Road Conditions, Webcam & Weather",
      "description": "Check Status Pass road conditions, opening status, live webcams, weather, snow and winter travel information before you drive.",
      "h1": "Status Pass Road Conditions, Opening Status, Webcams & Weather"
    },
    "dataSources": [
      {
        "name": "Washington State Department of Transportation (WSDOT)",
        "type": "US 97 Mountain Pass Conditions",
        "url": "https://wsdot.wa.gov/travel/operations-services/mountain-passes/satus-pass"
      },
      {
        "name": "National Weather Service (NWS)",
        "type": "Point Forecast Satus Pass, WA",
        "url": "https://forecast.weather.gov/MapClick.php?lat=45.9847&lon=-120.6536"
      }
    ]
  },
  {
    "id": "khyber-pass",
    "slug": "khyber-pass",
    "name": "Khyber Pass",
    "country": "Pakistan",
    "countryCode": "PAK",
    "continent": "Asia",
    "state": "Khyber Pakhtunkhwa",
    "highway": "N-5 National Highway",
    "elevationFt": 3510,
    "elevationM": 1070,
    "coordinates": {
      "lat": 34.0758,
      "lng": 71.2039
    },
    "status": "OPEN",
    "statusDetail": "Live status data unavailable. Historical mountain corridor, border access controls apply at Torkham.",
    "lastUpdated": "Data offline",
    "description": "The Khyber Pass is a historic mountain pass in the Safed Koh range of the Hindu Kush, connecting the Peshawar Valley of Pakistan with the Kabul River valley of Afghanistan. Located in Khyber Pakhtunkhwa, Pakistan, the pass has historically served as a vital trade, military, and migration corridor between South Asia and Central Asia. The modern route follows the N-5 Highway (Peshawar-Torkham Road) leading to the critical Torkham border crossing.",
    "image": "/khyber-pass-khyber-pakhtunkhwa-pakistan.webp",
    "weather": {
      "tempF": 88,
      "tempC": 31,
      "condition": "Sunny & Dry",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "No Snow (Subtropical Semi-Arid)"
    },
    "wind": {
      "speedKmh": 12,
      "speedMph": 7,
      "direction": "W",
      "description": "Gentle Breeze"
    },
    "roadCondition": "Pavement bare and dry. Heavy commercial truck traffic moving toward the Torkham border crossing.",
    "chainRequirement": "No winter tire or chain requirements apply. Standard commercial vehicle permits required.",
    "cameras": [],
    "nearbyPasses": [
      {
        "id": "khardung-la",
        "slug": "khardung-la",
        "name": "Khardung La",
        "country": "India",
        "state": "Ladakh",
        "highway": "Leh-Nubra Rd",
        "status": "OPEN",
        "elevationFt": 17582,
        "lastUpdated": "15 min ago",
        "distanceKm": 380
      },
      {
        "id": "zoji-la",
        "slug": "zoji-la",
        "name": "Zoji La",
        "country": "India",
        "state": "Jammu & Kashmir",
        "highway": "NH-1",
        "status": "OPEN",
        "elevationFt": 11575,
        "lastUpdated": "20 min ago",
        "distanceKm": 350
      }
    ],
    "overview": {
      "openedYear": "Ancient Route (Paved 1920s)",
      "lengthMiles": 33,
      "lengthKm": 53,
      "annualSnowfallIn": 0,
      "annualSnowfallM": 0,
      "summary": "The Khyber Pass is one of the most famous mountain passes in world history. Cutting through the Safed Koh mountains, it connects Pakistan and Afghanistan, serving as a gateway between Central Asia and the Indian Subcontinent. The pass has been traversed by merchants, migrations, and invading armies for thousands of years, including Alexander the Great, Genghis Khan, and Babur. Today, the modern paved N-5 National Highway runs through the pass, terminating at the Torkham border post."
    },
    "quickFacts": {
      "state": "Khyber Pakhtunkhwa",
      "mountainRange": "Safed Koh Range (Spin Ghar)",
      "elevationSummary": "3,510 ft (1,070 m) summit elevation",
      "connects": "Peshawar (Pakistan) with Kabul (Afghanistan) via Torkham",
      "nearestTown": "Landi Kotal (5 km), Jamrud (18 km)",
      "roadType": "N-5 National Highway (Paved Two-lane)",
      "bestTime": "October to March (cooler winter months)",
      "highlight": "Historic trade corridor, Khyber Pass Gate (Bab-e-Khyber), and Ali Masjid"
    },
    "routeDetails": {
      "distanceKm": 53,
      "distanceMiles": 33,
      "duration": "1 hour 15 min",
      "origin": "Jamrud (near Peshawar), Pakistan",
      "destination": "Torkham Border Crossing, Pakistan–Afghanistan",
      "waypoints": [
        "Bab-e-Khyber (Jamrud)",
        "Ali Masjid Gorge",
        "Landi Kotal Summit",
        "Torkham Border Post"
      ]
    },
    "faqs": [
      {
        "question": "Where is Khyber Pass?",
        "answer": "Khyber Pass is located in the Khyber District of the Khyber Pakhtunkhwa province in northwestern Pakistan. It traverses the Safed Koh mountain range, connecting the Peshawar Valley with Afghanistan."
      },
      {
        "question": "Is Khyber Pass in Pakistan or Afghanistan?",
        "answer": "The pass itself is geographically and administratively located within Pakistan (Khyber Pakhtunkhwa province). However, it serves as the historical and modern gateway to Afghanistan, terminating at the Torkham border crossing."
      },
      {
        "question": "Is Khyber Pass open right now?",
        "answer": "Khyber Pass is a year-round national highway (N-5) and is generally open to traffic. However, because it is an active international border corridor, access can be restricted due to security controls or border procedures at Torkham. Check official Pakistani border authorities for current operational status."
      },
      {
        "question": "Is Khyber Pass open to tourists?",
        "answer": "Access for foreign tourists is highly regulated and usually requires a Non-Objection Certificate (NOC) and security escort from Pakistani authorities. Domestic travelers can access the pass, but all visitors must clear security checkpoints at Jamrud."
      },
      {
        "question": "What is the elevation of Khyber Pass?",
        "answer": "The summit of the pass is at Landi Kotal, reaching an elevation of 3,510 feet (1,070 meters) above sea level."
      },
      {
        "question": "Is there a Khyber Pass webcam?",
        "answer": "No. An independently verified public live traffic webcam is not available for this location due to border security regulations."
      },
      {
        "question": "What is the weather at Khyber Pass?",
        "answer": "Weather at Khyber Pass is typically dry and semi-arid. Summers are hot and winters are mild. Because there is no meteorological station directly at the summit, weather reports rely on the nearby Landi Kotal station."
      },
      {
        "question": "How do you reach Khyber Pass from Peshawar?",
        "answer": "The pass starts at Jamrud, about 15-18 km west of Peshawar. You can drive along the paved N-5 National Highway towards Landi Kotal. Foreign nationals must confirm permit requirements before departure."
      },
      {
        "question": "What is Khyber Pass famous for?",
        "answer": "Khyber Pass is famous as an ancient trade route on the Silk Road and a strategic military corridor invaded by armies throughout history. It is also famous for the Ali Masjid gorge and the Bab-e-Khyber gate."
      },
      {
        "question": "Is Khyber Pass open in winter?",
        "answer": "Yes, it is open in winter. Unlike high-altitude alpine passes, Khyber Pass does not experience seasonal winter closures as snowfall is extremely rare."
      },
      {
        "question": "Is Khyber Pass near Torkham?",
        "answer": "Yes, the pass extends all the way to Landi Kotal and descends to the Torkham border crossing, which is the main border post between Pakistan and Afghanistan."
      }
    ],
    "customSeo": {
      "title": "Khyber Pass: Road Status, Weather, Map & Travel Guide",
      "description": "Explore Khyber Pass in Khyber Pakhtunkhwa, Pakistan, with location, map, elevation, weather, road information and practical travel guidance.",
      "h1": "Khyber Pass: Road Status, Location, Weather & Travel Information"
    },
    "dataSources": [
      {
        "name": "National Highway Authority (NHA) Pakistan",
        "type": "N-5 Highway Status",
        "url": "https://nha.gov.pk/"
      },
      {
        "name": "Pakistan Meteorological Department (PMD)",
        "type": "Landi Kotal Weather Feed",
        "url": "https://www.pmd.gov.pk/"
      }
    ]
  },
  {
    "id": "santiam-pass",
    "slug": "santiam-pass",
    "name": "Santiam Pass",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Oregon",
    "highway": "US-20",
    "elevationFt": 4817,
    "elevationM": 1468,
    "coordinates": {
      "lat": 44.3883,
      "lng": -121.845
    },
    "status": "OPEN",
    "statusDetail": "to all vehicles. Road bare and wet.",
    "lastUpdated": "4 minutes ago",
    "description": "Santiam Pass is a mountain pass in the Cascade Range in Oregon. It is located on U.S. Route 20, connecting the Willamette Valley to the west with Sisters and the high desert of Central Oregon to the east.",
    "image": "/santiam-pass-oregon.jpg",
    "officialSource": "https://tripcheck.com",
    "weather": {
      "tempF": 34,
      "tempC": 1,
      "condition": "Light Flurries",
      "icon": "cloud-snow"
    },
    "snowDepth": {
      "depthCm": 15,
      "depthIn": 6,
      "condition": "Packed"
    },
    "wind": {
      "speedKmh": 10,
      "speedMph": 6,
      "direction": "NW",
      "description": "Light Breeze"
    },
    "roadCondition": "Bare and wet. Carry traction tires or chains.",
    "chainRequirement": "No restrictions for passenger vehicles. Carry chains or traction tires.",
    "cameras": [
      {
        "id": "santiam-summit",
        "title": "Santiam Pass Summit",
        "image": "/santiam-pass-oregon.jpg",
        "milepost": "MP 80",
        "source": "ODOT TripCheck",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1939,
      "lengthMiles": 20,
      "lengthKm": 32,
      "annualSnowfallIn": 300,
      "annualSnowfallM": 7.6,
      "summary": "Santiam Pass is a year-round mountain pass on US Highway 20 across the Oregon Cascade Range."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Light Flurries",
        "tempHighF": 36,
        "tempLowF": 28,
        "icon": "cloud-snow"
      }
    ],
    "dataSources": [
      {
        "name": "Oregon Department of Transportation (ODOT)",
        "type": "TripCheck",
        "url": "https://tripcheck.com"
      }
    ],
    "faqs": [
      {
        "question": "Is Santiam Pass open today?",
        "answer": "Yes, Santiam Pass is open today. The pass is maintained year-round by the Oregon Department of Transportation (ODOT) using snowplows and de-icers to ensure continuous access across the Cascade Range. However, winter storms can bring sudden traction requirements or short temporary closures for accident clearance."
      },
      {
        "question": "Is Santiam Pass open right now?",
        "answer": "Yes, Santiam Pass is open right now with no general closures in place. Check the live status panel and active ODOT webcams on this page to confirm current road conditions and any active chain restrictions before departing."
      },
      {
        "question": "What are the current road conditions on Santiam Pass?",
        "answer": "The current road conditions on Santiam Pass are bare and wet with light flurries. Carrying chains or traction tires is highly recommended as conditions can deteriorate rapidly during winter weather cycles."
      },
      {
        "question": "What is the Santiam Pass opening date?",
        "answer": "Santiam Pass does not have a seasonal opening date because it remains open year-round. Unlike McKenzie Pass (OR 242) which closes annually for winter, U.S. Route 20 over Santiam Pass is a primary commercial corridor and is kept clear of snow by ODOT crews all winter."
      },
      {
        "question": "Is Santiam Pass closed today?",
        "answer": "No, Santiam Pass is not closed today. It is currently open to traffic. If severe winter blizzards or traffic incidents occur, short-term closures may be implemented by ODOT. You can verify live closure status on TripCheck.com."
      },
      {
        "question": "When does Santiam Pass close for winter?",
        "answer": "Santiam Pass does not close for the winter. It is maintained as a year-round highway. While nearby scenic route McKenzie Pass (OR 242) closes from November to June, U.S. 20 over Santiam Pass is plowed continuously and remains open."
      },
      {
        "question": "Where can I see a Santiam Pass live webcam?",
        "answer": "You can view the official live ODOT TripCheck webcam feeds directly on this page or by visiting TripCheck.com to check the summit camera views showing current snow depth and road visibility."
      },
      {
        "question": "What is the Santiam Pass elevation?",
        "answer": "Santiam Pass is located at an elevation of 4,817 feet (1,468 meters) above sea level in the Oregon Cascades."
      },
      {
        "question": "What highway goes through Santiam Pass?",
        "answer": "Santiam Pass is traversed by U.S. Route 20 (US 20), which connects the Willamette Valley with Central Oregon."
      },
      {
        "question": "Are there chain requirements on Santiam Pass?",
        "answer": "Currently, there are no mandatory chain requirements for passenger vehicles, but drivers are advised to carry chains or traction tires. ODOT enforces traction requirements dynamically during heavy snowstorms."
      },
      {
        "question": "Is Santiam Pass open in winter?",
        "answer": "Yes, Santiam Pass is open in winter. Road crews plow and sand the pass 24/7 during snowstorms, but drivers should be prepared for winter conditions and carry snow chains."
      },
      {
        "question": "How do I check the Santiam Pass forecast?",
        "answer": "You can check the weather forecast for the pass summit on this page or by visiting the National Weather Service (NWS) forecast page for the Oregon Cascades."
      },
      {
        "question": "Where is Santiam Pass located?",
        "answer": "Santiam Pass is located in the Cascade Range in Oregon, along the boundary between Linn and Jefferson counties."
      },
      {
        "question": "Is Santiam Pass closed right now?",
        "answer": "No, Santiam Pass is currently open. If emergency conditions require a temporary closure, it will be posted instantly on TripCheck and updated in our status monitor."
      },
      {
        "question": "How much snow is at Santiam Pass?",
        "answer": "The current snow depth at the summit is 6 inches. Snow depth varies throughout the winter, and Hoodoo Ski Area (located at the summit) tracks seasonal snowpack averages."
      },
      {
        "question": "What is the Santiam Pass closing date?",
        "answer": "There is no closing date for Santiam Pass. The highway remains open all winter, unlike seasonally closed routes in the Cascades."
      },
      {
        "question": "Does Santiam Pass require traction tires?",
        "answer": "When winter storms hit, ODOT signs will show \"Traction Tires Required\" or \"Chains Required\" for all vehicles. Check current conditions before travel."
      },
      {
        "question": "How high is Santiam Pass?",
        "answer": "The summit elevation of Santiam Pass is 4,817 feet (1,468 meters) above sea level."
      },
      {
        "question": "What is the closest town to Santiam Pass?",
        "answer": "The closest town to the east is Sisters, Oregon (about 22 miles), and to the west is Sweet Home, Oregon (about 47 miles)."
      },
      {
        "question": "How do I get to Santiam Pass?",
        "answer": "You can reach Santiam Pass by driving U.S. Route 20 east from Albany/Sweet Home, or west from Bend/Sisters."
      }
    ],
    "customSeo": {
      "title": "Santiam Pass opening date Road Conditions, Live Status & Webcams | LivePassWatch",
      "description": "Check real-time Santiam Pass opening date road conditions, open/closed status, 24/7 webcams, snow depth, and weather forecast before traveling.",
      "h1": "Santiam Pass opening date Road Status, Webcams & Conditions"
    },
    "searchKeywords": [
      "Santiam Pass road conditions",
      "Santiam Pass open",
      "Santiam Pass closed",
      "Santiam Pass status",
      "is Santiam Pass open today",
      "is Santiam Pass open right now",
      "Santiam Pass webcam",
      "Santiam Pass live webcam",
      "Santiam Pass weather today",
      "Santiam Pass snow",
      "Santiam Pass snow depth",
      "Santiam Pass opening date",
      "when does Santiam Pass close",
      "Santiam Pass elevation",
      "Santiam Pass map",
      "is Santiam Pass closed today"
    ],
    "aliases": [
      "Santiam Pass Summit",
      "US 20 Santiam Pass"
    ]
  },
  {
    "id": "siskiyou-summit",
    "slug": "siskiyou-summit",
    "name": "Siskiyou Summit",
    "country": "United States",
    "countryCode": "USA",
    "continent": "North America",
    "state": "Oregon",
    "highway": "I-5",
    "elevationFt": 4310,
    "elevationM": 1314,
    "coordinates": {
      "lat": 42.0628,
      "lng": -122.6033
    },
    "status": "OPEN",
    "statusDetail": "to all vehicles. Road bare and wet.",
    "lastUpdated": "4 minutes ago",
    "description": "Siskiyou Summit is a mountain pass on Interstate 5 at the California-Oregon border, in the Siskiyou Mountains.",
    "image": "/siskiyou-summit-oregon.jpg",
    "officialSource": "https://tripcheck.com",
    "weather": {
      "tempF": 34,
      "tempC": 1,
      "condition": "Light Flurries",
      "icon": "cloud-snow"
    },
    "snowDepth": {
      "depthCm": 15,
      "depthIn": 6,
      "condition": "Packed"
    },
    "wind": {
      "speedKmh": 10,
      "speedMph": 6,
      "direction": "NW",
      "description": "Breeze"
    },
    "roadCondition": "Bare and wet.",
    "chainRequirement": "No restrictions. Carry chains.",
    "cameras": [
      {
        "id": "siskiyou-summit-cam",
        "title": "Siskiyou Summit",
        "image": "/siskiyou-summit-oregon.jpg",
        "milepost": "MP 0.5",
        "source": "ODOT",
        "updateIntervalMs": 120000
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1960,
      "lengthMiles": 15,
      "lengthKm": 24,
      "annualSnowfallIn": 100,
      "annualSnowfallM": 2.5,
      "summary": "Siskiyou Summit is open year-round."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Light Flurries",
        "tempHighF": 36,
        "tempLowF": 28,
        "icon": "cloud-snow"
      }
    ],
    "dataSources": [
      {
        "name": "Oregon Department of Transportation",
        "type": "TripCheck"
      }
    ],
    "faqs": [
      {
        "question": "Is Siskiyou Summit open today?",
        "answer": "Yes, Siskiyou Summit (Interstate 5) is open today. It is a major interstate route and is plowed continuously."
      },
      {
        "question": "Is Siskiyou Summit open right now?",
        "answer": "Yes, Siskiyou Summit is currently open."
      },
      {
        "question": "What are the current road conditions on Siskiyou Summit?",
        "answer": "Road conditions are bare and wet. Heavy snow can occur during winter storms."
      },
      {
        "question": "What is the Siskiyou Summit opening date?",
        "answer": "Siskiyou Summit is open year-round and does not have a seasonal opening date."
      },
      {
        "question": "Is Siskiyou Summit closed today?",
        "answer": "No, Siskiyou Summit is open today."
      },
      {
        "question": "When does Siskiyou Summit close for winter?",
        "answer": "Siskiyou Summit does not close for winter. It remains open year-round except for temporary emergency storm closures."
      },
      {
        "question": "Where is the Siskiyou Summit webcam?",
        "answer": "Live cameras are available on TripCheck at the Siskiyou Summit boundary and MP 0.5."
      },
      {
        "question": "What is the elevation of Siskiyou Summit?",
        "answer": "Siskiyou Summit has an elevation of 4,310 feet (1,314 meters), making it the highest point on Interstate 5."
      },
      {
        "question": "What highway goes through Siskiyou Summit?",
        "answer": "Interstate 5 (I-5) passes through Siskiyou Summit."
      },
      {
        "question": "Are tire chains required on Siskiyou Summit?",
        "answer": "Chains are not required currently, but carrying them is mandatory for all vehicles during winter months."
      },
      {
        "question": "Is Siskiyou Summit open in winter?",
        "answer": "Yes, Siskiyou Summit is open in winter, backed by ODOT's winter response crews."
      },
      {
        "question": "How do I check Siskiyou Summit forecast?",
        "answer": "Check the NWS Medford forecast for the Siskiyou Mountains."
      },
      {
        "question": "Where is Siskiyou Summit located?",
        "answer": "Siskiyou Summit is located on I-5 at the Oregon-California border, south of Ashland."
      },
      {
        "question": "Is Siskiyou Summit closed right now?",
        "answer": "No, Siskiyou Summit is currently open."
      },
      {
        "question": "How much snow is at Siskiyou Summit?",
        "answer": "Snow depth varies. During winter storms, several inches to feet of snow can fall rapidly."
      },
      {
        "question": "What is the Siskiyou Summit closing date?",
        "answer": "The summit remains open year-round."
      },
      {
        "question": "Does Siskiyou Summit require traction tires?",
        "answer": "During active winter weather, ODOT will display chain and traction tire requirements on roadside signs."
      },
      {
        "question": "How high is Siskiyou Summit?",
        "answer": "Siskiyou Summit is 4,310 feet high."
      },
      {
        "question": "What is the closest town to Siskiyou Summit?",
        "answer": "Ashland, Oregon is the closest major town to the north (about 15 miles)."
      },
      {
        "question": "How do I get to Siskiyou Summit?",
        "answer": "Drive I-5 south from Ashland, Oregon, or north from Yreka, California."
      }
    ],
    "customSeo": {
      "title": "Siskiyou Summit opening date Road Conditions, Live Status & Webcams | LivePassWatch",
      "description": "Check real-time Siskiyou Summit opening date road conditions, open/closed status, 24/7 webcams, snow depth, and weather forecast before traveling.",
      "h1": "Siskiyou Summit opening date Road Status, Webcams & Conditions"
    },
    "searchKeywords": [
      "Siskiyou Summit road conditions",
      "Siskiyou Summit open",
      "Siskiyou Summit closed",
      "Siskiyou Summit status",
      "Siskiyou Summit opening date"
    ]
  },
  {
    "id": "col-du-galibier",
    "slug": "col-du-galibier",
    "name": "Col du Galibier Pass",
    "alternateNames": [
      "Col du Galibier",
      "Galibier Pass",
      "D902 Col du Galibier",
      "Tunnel du Galibier",
      "Col du Galibier (Route des Grandes Alpes)"
    ],
    "country": "France",
    "countryCode": "FRA",
    "continent": "Europe",
    "state": "Hautes-Alpes & Savoie",
    "highway": "D902",
    "elevationFt": 8668,
    "elevationM": 2642,
    "coordinates": {
      "lat": 45.0642,
      "lng": 6.4078
    },
    "status": "OPEN",
    "statusDetail": "Ouvert à la circulation / Open to all vehicles — Alternat par feux tricolores au Tunnel du Galibier (2 556 m)",
    "lastUpdated": "5 minutes ago",
    "description": "Le Col du Galibier (2 642 m / 8 668 ft) est un col routier légendaire des Alpes françaises reliant Saint-Michel-de-Maurienne et Valloire en Savoie au Col du Lautaret et Briançon dans les Hautes-Alpes via la D902. Haut lieu historique du Tour de France et de la Route des Grandes Alpes, il offre un panorama grandiose sur les glaciers des Écrins et la Meije.",
    "image": "/col-du-galibier.png",
    "weather": {
      "tempF": 48,
      "tempC": 9,
      "condition": "Alpine Sun & Moderate Breeze",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Clear & Dry Road Surface"
    },
    "wind": {
      "speedKmh": 18,
      "speedMph": 11,
      "direction": "NW",
      "description": "Fresh Alpine Breeze"
    },
    "roadCondition": "Chaussée sèche et parfaitement dégagée sur les versants Savoie (D902) et Hautes-Alpes. Circulation fluide sous feux tricolores alternés au Tunnel historique du Galibier (2 556 m).",
    "chainRequirement": "Aucun équipement requis actuellement en période estivale. Du 1er novembre au 31 mars, application stricte de la Loi Montagne II (4 pneus hiver 3PMSF ou dispositifs antidérapants amovibles tels que chaînes ou chaussettes à neige dans le coffre).",
    "cameras": [
      {
        "id": "galibier-cam-sommet",
        "title": "Col du Galibier Sommet (2 642 m) – Panorama Live HD",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 Sommet (2 642 m)",
        "direction": "Valloire – Lautaret / Briançon",
        "location": "Sommet du Col du Galibier",
        "source": "Office de Tourisme de Valloire / Skaping",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valloire.net/webcams-valloire/"
      },
      {
        "id": "valloire-cam-poingt-ravier",
        "title": "Valloire – Poingt Ravier Vue Vallée du Galibier",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 Versant Nord",
        "direction": "Vue Sud vers le Massif du Galibier",
        "location": "Poingt Ravier, Valloire",
        "source": "Office de Tourisme de Valloire / Skaping",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valloire.net/webcams-valloire/"
      },
      {
        "id": "valloire-cam-crey-du-quart",
        "title": "Valloire – Crey du Quart Sommet (2 530 m)",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Domaine Galibier-Thabor",
        "direction": "Panorama 360° Aiguilles d'Arves & Galibier",
        "location": "Crey du Quart (2 530 m)",
        "source": "Valloire Galibier-Thabor / Skaping",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valloire.net/webcams-valloire/"
      },
      {
        "id": "lautaret-cam-south",
        "title": "Col du Lautaret (2 058 m) – Accès Sud Galibier",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 / D1091 Jonction",
        "direction": "Versant Sud Hautes-Alpes",
        "location": "Col du Lautaret",
        "source": "Inforoute 05 Hautes-Alpes",
        "updateIntervalMs": 60000,
        "officialUrl": "https://inforoute.hautes-alpes.fr/"
      }
    ],
    "nearbyPasses": [
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass",
        "country": "Switzerland",
        "state": "Valais / Uri",
        "highway": "Route 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "15 minutes ago",
        "distanceKm": 240
      },
      {
        "id": "stelvio-pass",
        "slug": "stelvio-pass",
        "name": "Stelvio Pass (Passo dello Stelvio)",
        "country": "Italy",
        "state": "South Tyrol / Lombardy",
        "highway": "SS38",
        "status": "OPEN",
        "elevationFt": 9045,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 380
      },
      {
        "id": "trollstigen-pass",
        "slug": "trollstigen-pass",
        "name": "Trollstigen (Fv63)",
        "country": "Norway",
        "state": "Møre og Romsdal",
        "highway": "Fv63",
        "status": "OPEN",
        "elevationFt": 2815,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 1850
      },
      {
        "id": "paso-los-libertadores",
        "slug": "paso-los-libertadores",
        "name": "Paso Los Libertadores",
        "country": "Chile / Argentina",
        "state": "Valparaíso / Mendoza",
        "highway": "Ruta 60-CH / RN 7",
        "status": "OPEN",
        "elevationFt": 10499,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 11500
      }
    ],
    "overview": {
      "openedYear": 1891,
      "lengthMiles": 21.6,
      "lengthKm": 34.8,
      "annualSnowfallIn": 380,
      "annualSnowfallM": 9.6,
      "summary": "Le Col du Galibier (2 642 m / 8 668 ft) est le cinquième plus haut col routier goudronné des Alpes françaises, reliant Saint-Michel-de-Maurienne et Valloire en Savoie au Col du Lautaret et Briançon dans les Hautes-Alpes sur la route départementale D902. Ouvert en 1891 avec la construction de son tunnel sommital à 2 556 m, le col est célèbre dans le monde entier comme le géant du Tour de France et l'un des passages les plus spectaculaires de la Route des Grandes Alpes."
    },
    "narrativeSections": [
      {
        "title": "Histoire & Monument Henri Desgrange au Col du Galibier",
        "content": "Inauguré pour la circulation routière à la fin du XIXe siècle, le Col du Galibier est entré dans la légende sportive dès 1911 lors de son premier passage par le Tour de France. Le coureur Émile Georget déclara alors au sommet : 'Ça vous en bouche un coin !'. À l'entrée sud du tunnel (côté Lautaret), se dresse le monument dédié à Henri Desgrange, créateur et directeur historique de la Grande Boucle. Sur le versant nord au lieu-dit Les Granges, une stèle rend hommage au champion italien Marco Pantani, auteur d'une attaque mythique sous le déluge en 1998."
      },
      {
        "title": "Réglementation du Tunnel du Galibier (2 556 m) & Route de la Crête (2 642 m)",
        "content": "Le franchissement du col propose deux voies au sommet : le tunnel historique de 370 mètres situé à 2 556 m d'altitude, rénové et sécurisé en 2002, et la route panoramique de la crête qui monte jusqu'au véritable col à 2 642 m. Le tunnel est régulé par des feux tricolores d'alternat automatique avec un temps d'attente moyen de 2 à 4 minutes. Important : Le tunnel est strictement interdit aux cyclistes et aux piétons pour des raisons de sécurité ; les cyclistes doivent obligatoirement franchir le col par la route de la crête."
      },
      {
        "title": "Loi Montagne II & Équipements Hivernaux dans les Alpes françaises",
        "content": "Dans le cadre de la Loi Montagne II appliquée dans les départements de la Savoie (73) et des Hautes-Alpes (05), tous les véhicules circulant du 1er novembre au 31 mars doivent être pourvus de 4 pneus hiver portant le marquage 3PMSF ou détenir dans leur coffre des dispositifs antidérapants amovibles (chaînes métalliques ou chaussettes à neige homologuées) pour au moins deux roues motrices."
      }
    ],
    "quickFacts": {
      "state": "Hautes-Alpes (05) & Savoie (73), France",
      "mountainRange": "Massif des Cerces / Alpes dauphinoises",
      "elevationSummary": "2 642 m (8 668 ft) Sommet / 2 556 m (8 386 ft) Tunnel",
      "connects": "Saint-Michel-de-Maurienne & Valloire to Col du Lautaret & Briançon",
      "nearestTown": "Valloire (18 km) / Briançon (36 km)",
      "roadType": "Route Départementale D902 (Route des Grandes Alpes)",
      "bestTime": "Juin à Octobre (Période estivale)",
      "highlight": "Monument Henri Desgrange, stèle Marco Pantani, vue panoramique sur les Écrins"
    },
    "routeDetails": {
      "distanceKm": 34.8,
      "distanceMiles": 21.6,
      "duration": "45–60 min en voiture (2h30–3h30 à vélo)",
      "origin": "Saint-Michel-de-Maurienne (712 m)",
      "destination": "Col du Lautaret (2 058 m) / Briançon (1 326 m)",
      "waypoints": [
        "Saint-Michel-de-Maurienne (712 m)",
        "Col du Télégraphe (1 566 m)",
        "Valloire (1 430 m)",
        "Les Granges (1 650 m)",
        "Plan Lachat (1 990 m)",
        "Tunnel du Galibier (2 556 m)",
        "Sommet du Col du Galibier (2 642 m)",
        "Col du Lautaret (2 058 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Le Col du Galibier est l'un des cols les plus prestigieux et exigeants du cyclisme mondial. Haut lieu du Tour de France avec plus de 60 passages, il propose des ascensions majeures par ses deux versants.",
      "approaches": [
        {
          "name": "Versant Nord (depuis Saint-Michel-de-Maurienne via Télégraphe)",
          "origin": "Saint-Michel-de-Maurienne (712 m)",
          "distanceKm": 34.8,
          "distanceMiles": 21.6,
          "elevationGainM": 2120,
          "elevationGainFt": 6955,
          "avgGradient": "6.1%",
          "maxGradient": "10.5%",
          "hairpins": 18,
          "description": "L'enchaînement mythique Col du Télégraphe (11,8 km à 7,3%) suivi d'une courte descente de 5 km sur Valloire, puis de l'ascension finale du Galibier (18,1 km à 6,7%). Les 8 derniers kilomètres au-dessus de Plan Lachat oscillent entre 8,5% et 10,5% avec un air raréfié à plus de 2 000 m."
        },
        {
          "name": "Versant Nord direct (depuis Valloire)",
          "origin": "Valloire (1 430 m)",
          "distanceKm": 18.1,
          "distanceMiles": 11.2,
          "elevationGainM": 1212,
          "elevationGainFt": 3976,
          "avgGradient": "6.7%",
          "maxGradient": "10.5%",
          "hairpins": 10,
          "description": "Départ du village de Valloire en pente douce jusqu'au hameau du Bonnenuit et Plan Lachat (1 990 m), où la rampe se cabre brutalement dans les alpages minéraux pour les 8 derniers kilomètres intenses."
        },
        {
          "name": "Versant Sud (depuis le Col du Lautaret)",
          "origin": "Col du Lautaret (2 058 m)",
          "distanceKm": 8.6,
          "distanceMiles": 5.3,
          "elevationGainM": 585,
          "elevationGainFt": 1919,
          "avgGradient": "6.8%",
          "maxGradient": "12.0%",
          "hairpins": 8,
          "description": "Une ascension alpine spectaculaire face aux glaciers de la Meije et du Massif des Écrins. Pente soutenue avec un dernier kilomètre à 10% pour atteindre la table d'orientation à 2 642 m."
        },
        {
          "name": "Versant Sud complet (depuis Briançon)",
          "origin": "Briançon (1 326 m)",
          "distanceKm": 36.5,
          "distanceMiles": 22.7,
          "elevationGainM": 1440,
          "elevationGainFt": 4724,
          "avgGradient": "4.0%",
          "maxGradient": "12.0%",
          "hairpins": 12,
          "description": "Remontée de la vallée de la Guisane et de Serre Chevalier jusqu'au Col du Lautaret (28 km en faux plat montant à 3-5%), puis les 8,6 km finaux du Galibier."
        }
      ],
      "bestSeason": "Fin juin à début octobre (col déneigé et températures plus clémentes)",
      "safetyTips": [
        "Interdiction formelle du Tunnel aux cyclistes : vous devez impérativement grimper par la route de la crête sommitale (2 642 m).",
        "Prévoyez une veste coupe-vent et thermique pour la descente car la température peut chuter de plus de 15°C entre la vallée et le sommet.",
        "Équipez votre vélo d'un éclairage puissant avant et arrière pour les galeries paravalanches inférieures.",
        "Vérifiez l'état de vos patins ou plaquettes de freins avant de vous engager dans la descente technique vers Plan Lachat."
      ]
    },
    "drivingInfo": {
      "summary": "La D902 à travers le Col du Galibier est une route de haute montagne magnifique qui exige attention, respect des gabarits et maîtrise du frein moteur.",
      "characteristics": [
        "Route goudronnée de 5 à 6 mètres de large, bien entretenue par les départements 73 et 05.",
        "Passage au choix au sommet par le Tunnel historique (2 556 m, alternat feux) ou la crête panoramique (2 642 m).",
        "Gabarit maximal du Tunnel du Galibier : hauteur 4,10 m, largeur 2,40 m, poids 3,5 tonnes.",
        "Fermeture hivernale totale d'octobre/novembre à fin mai/juin en raison du manteau neigeux et des avalanches."
      ],
      "switchbacksCount": "Plus de 35 lacets répartis entre Saint-Michel, le Télégraphe, Plan Lachat et le Lautaret",
      "safetyAndEtiquette": [
        "Utilisez le frein moteur (1ère et 2ème vitesses) en descente pour préserver l'efficacité de vos disques et plaquettes.",
        "Cédez le passage aux véhicules montants et aux autocars dans les virages étroits.",
        "Laissez un espace de dépassement d'au moins 1,50 mètre vis-à-vis des cyclistes.",
        "Respectez scrupuleusement les feux tricolores alternés du Tunnel du Galibier (ne franchissez jamais le feu rouge)."
      ],
      "motorcycleTips": [
        "Attention aux résidus d'humidité et de gravillons dans les épingles au-dessus de Plan Lachat.",
        "Munissez-vous d'équipements chauds et étanches : le vent au sommet est souvent très vif et froid."
      ]
    },
    "distancesTable": [
      {
        "location": "Valloire (Centre Station)",
        "distance": "18 km (11 miles)",
        "route": "D902 Nord",
        "notes": "Station village au pied nord du Galibier"
      },
      {
        "location": "Saint-Michel-de-Maurienne",
        "distance": "35 km (22 miles)",
        "route": "D902 Nord via Col du Télégraphe",
        "notes": "Accès autoroute A43 et gare SNCF"
      },
      {
        "location": "Col du Lautaret",
        "distance": "8.6 km (5.3 miles)",
        "route": "D902 Sud",
        "notes": "Jonction avec la route D1091 (Grenoble / Briançon)"
      },
      {
        "location": "Briançon / Serre Chevalier",
        "distance": "36.5 km (23 miles)",
        "route": "D902 Sud & D1091",
        "notes": "Plus haute ville d'Europe et site fortifié Vauban UNESCO"
      },
      {
        "location": "La Grave / Téléphérique de la Meije",
        "distance": "19.5 km (12 miles)",
        "route": "D902 Sud & D1091 Ouest",
        "notes": "Mecque du freeride et alpinisme des Écrins"
      },
      {
        "location": "Grenoble",
        "distance": "95 km (59 miles)",
        "route": "D1091 via Bourg d'Oisans",
        "notes": "Capitale des Alpes françaises"
      },
      {
        "location": "Modane",
        "distance": "52 km (32 miles)",
        "route": "D902 Nord & D1006",
        "notes": "Accès Tunnel du Fréjus vers l'Italie"
      },
      {
        "location": "Chambéry",
        "distance": "135 km (84 miles)",
        "route": "A43 & D902",
        "notes": "Préfecture de la Savoie"
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Fin octobre / début novembre (selon premières chutes de neige alpines)",
      "typicalReopening": "Fin mai / début juin (déneigement de printemps par les services départementaux)",
      "description": "Le Col du Galibier est fermé à la circulation pendant tous les mois d'hiver. Des couches de neige pouvant atteindre 5 à 8 mètres s'accumulent au sommet et dans les combes. Les services des routes de Savoie et des Hautes-Alpes mènent un chantier de déneigement spectaculaire à l'aide de fraises rotatives et de chargeuses chaque mois de mai pour permettre une réouverture sécurisée."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Alpine Sun & Moderate Breeze",
        "tempHighF": 50,
        "tempLowF": 34,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Crisp Mountain Stars",
        "tempHighF": 36,
        "tempLowF": 28,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Bright Alpine Sky",
        "tempHighF": 52,
        "tempLowF": 36,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered High Clouds",
        "tempHighF": 48,
        "tempLowF": 32,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Passing Afternoon Mist",
        "tempHighF": 46,
        "tempLowF": 30,
        "icon": "wind"
      },
      {
        "day": "Day 5",
        "condition": "Clear Blue Horizon",
        "tempHighF": 51,
        "tempLowF": 35,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Inforoute 05 – Conseil Départemental des Hautes-Alpes",
        "type": "Official High Alps Road Status & Conditions",
        "url": "https://inforoute.hautes-alpes.fr/"
      },
      {
        "name": "Savoie Route – Conseil Départemental de la Savoie",
        "type": "Official Savoie Department Road Status",
        "url": "https://savoie-route.fr/"
      },
      {
        "name": "Office de Tourisme de Valloire Galibier",
        "type": "Live Webcams & Local Pass Updates",
        "url": "https://www.valloire.net/webcams-valloire/"
      },
      {
        "name": "Météo-France – Briançonnais & Massif des Cerces",
        "type": "Mountain Weather & Avalanche Risk Bulletins",
        "url": "https://meteofrance.com/"
      }
    ],
    "faqs": [
      {
        "question": "What is the Col du Galibier Pass opening date? / Quelle est la date d'ouverture du Col du Galibier ?",
        "answer": "The Col du Galibier Pass opening date typically occurs between late May and early June (around May 25 to June 5) each year, once rotary plows clear the winter snowpack. In 2026, the pass opened for the summer season and is currently OPEN to all traffic. / La date d'ouverture du Col du Galibier se situe généralement entre fin mai et début juin, après les travaux printaniers de déneigement."
      },
      {
        "question": "Is Col du Galibier Pass open today? / Le Col du Galibier est-il ouvert aujourd'hui ?",
        "answer": "Yes, Col du Galibier Pass is currently OPEN and accessible to cars, motorcycles, and cyclists on the D902 route. Always check live conditions before departing during late autumn or spring transitions. / Oui, le Col du Galibier est actuellement OUVERT à la circulation."
      },
      {
        "question": "What are the current Col du Galibier Pass road conditions? / Quelles sont les conditions de circulation au Col du Galibier ?",
        "answer": "Road conditions on the D902 are dry and clear across both the Savoie (Valloire) and Hautes-Alpes (Col du Lautaret) approaches. Traffic flows smoothly with alternating signals at the historic Galibier Tunnel. / La chaussée est sèche et dégagée avec un trafic fluide."
      },
      {
        "question": "Where can I view the Col du Galibier Pass live webcam and cameras? / Où voir la webcam en direct du Col du Galibier ?",
        "answer": "You can view 24/7 high-definition live webcam feeds from Valloire Galibier (valloire.net) and Skaping HD at the summit (2,642 m), Poingt Ravier, and Crey du Quart directly in the Webcam section above. / Les webcams HD en direct sont accessibles en haut de cette page."
      },
      {
        "question": "What is the elevation and altitude of Col du Galibier Pass? / Quelle est l'altitude du Col du Galibier ?",
        "answer": "Col du Galibier Pass summit elevation is 2,642 meters (8,668 feet) above sea level. The historic Galibier Tunnel is located at an altitude of 2,556 meters (8,386 feet). / L'altitude sommitale du Col du Galibier est de 2 642 mètres (tunnel à 2 556 m)."
      },
      {
        "question": "Is Col du Galibier Pass open in winter? / Le Col du Galibier est-il ouvert en hiver ?",
        "answer": "No, Col du Galibier Pass is closed in winter due to heavy alpine snowpack exceeding 5 to 8 meters and severe avalanche risks. The D902 road typically remains closed from late October / early November until late May. / Non, le col est fermé tout l'hiver en raison de l'enneigement massif."
      },
      {
        "question": "What is the Col du Galibier Pass closing date? / Quelle est la date de fermeture du Col du Galibier ?",
        "answer": "The closing date is determined by autumn snowfall, typically occurring in late October or early November. Official closure dates are announced by the Savoie and Hautes-Alpes road departments. / La fermeture intervient fin octobre ou début novembre selon les premières neiges."
      },
      {
        "question": "What are the Col du Galibier Pass chain requirements and Loi Montagne II rules? / Quelles sont les obligations de chaînes et de pneus hiver ?",
        "answer": "Under French Loi Montagne II, winter equipment (4 certified 3PMSF winter tires or carrying snow chains/textile socks in the vehicle) is legally mandatory in Savoie (73) and Hautes-Alpes (05) from November 1 to March 31. No restrictions apply during peak summer. / Équipements hivernaux obligatoires du 1er novembre au 31 mars (Loi Montagne II)."
      },
      {
        "question": "What is the snow depth on Col du Galibier Pass? / Quelle est la hauteur de neige au Col du Galibier ?",
        "answer": "During the summer opening, the road surface is completely clear of snow. In peak winter and spring before clearing, snow depths often exceed 400–600 cm (13–20 feet) in the summit gullies. / En été la route est dégagée ; en hiver le manteau dépasse fréquemment 5 mètres."
      },
      {
        "question": "Are bicycles allowed inside the historic Galibier Tunnel? / Les vélos peuvent-ils emprunter le Tunnel du Galibier ?",
        "answer": "No, cyclists and pedestrians are strictly forbidden inside the historic Galibier Tunnel (2,556 m) for safety reasons. Cyclists must climb the summit crest route to 2,642 m. / Non, les vélos et piétons sont strictement interdits dans le tunnel et doivent passer par la crête à 2 642 m."
      },
      {
        "question": "What are the vehicle restrictions for the Galibier Tunnel? / Quelles sont les limites de gabarit du Tunnel du Galibier ?",
        "answer": "The Galibier Tunnel is restricted to vehicles with a maximum height of 4.10 meters, width of 2.40 meters, and gross vehicle weight of 3.5 tonnes. Alternating single-lane traffic is managed by 3-color traffic lights. / Hauteur max 4,10 m, largeur max 2,40 m, poids max 3,5 tonnes."
      },
      {
        "question": "How do I get directions to Col du Galibier Pass? / Comment aller au Col du Galibier ?",
        "answer": "From the north, take highway A43 to Saint-Michel-de-Maurienne, then D902 over Col du Télégraphe to Valloire and the Galibier. From the south, take D1091 from Briançon or Grenoble to Col du Lautaret, then ascend D902 north to the summit. / Accès par Valloire au nord (A43 / D902) ou par le Col du Lautaret au sud (D1091 / D902)."
      }
    ],
    "customSeo": {
      "h1": "Col du Galibier : État de la Route, Webcam Live, Météo & Date d'Ouverture",
      "title": "Col du Galibier Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Consultez l'état d'ouverture en direct du Col du Galibier (D902), webcams live HD de Valloire, météo, hauteur de neige, conditions de circulation, réglementation du tunnel et Loi Montagne."
    },
    "searchKeywords": [
      "Col du Galibier Pass opening date",
      "Col du Galibier Pass is open",
      "Col du Galibier Pass road conditions",
      "Col du Galibier Pass road status",
      "Col du Galibier Pass pass status report",
      "when does Col du Galibier Pass open",
      "Col du Galibier Pass closed",
      "Col du Galibier Pass is closed",
      "Col du Galibier Pass is it open today",
      "is Col du Galibier Pass closed today",
      "Col du Galibier Pass webcam",
      "Col du Galibier Pass live webcam",
      "Col du Galibier Pass cameras",
      "Col du Galibier Pass snow depth",
      "Col du Galibier Pass snow conditions",
      "Col du Galibier Pass elevation",
      "Col du Galibier Pass open",
      "Col du Galibier Pass when will open",
      "Col du Galibier Pass passes open",
      "Col du Galibier Pass closures today",
      "is Col du Galibier Pass open",
      "is Col du Galibier Pass open in winter",
      "Col du Galibier Pass weather",
      "Col du Galibier Pass directions",
      "Col du Galibier Pass closing date",
      "Col du Galibier Pass",
      "Col du Galibier Pass forecast",
      "Col du Galibier Pass chain requirements",
      "Col du Galibier ouverture",
      "Col du Galibier webcam en direct",
      "Col du Galibier état de la route",
      "Tunnel du Galibier D902",
      "Loi Montagne II Galibier",
      "Webcam Valloire Galibier"
    ]
  },
  {
    "id": "col-de-l-iseran",
    "slug": "col-de-l-iseran",
    "name": "Col de l'Iseran Pass",
    "alternateNames": [
      "Col de l'Iseran",
      "Iseran Pass",
      "Col d'Iseran",
      "D902 Col de l'Iseran",
      "Col de l'Iseran (Route des Grandes Alpes)",
      "Iseran Summit 2770m"
    ],
    "country": "France",
    "countryCode": "FRA",
    "continent": "Europe",
    "state": "Savoie",
    "highway": "D902",
    "elevationFt": 9088,
    "elevationM": 2770,
    "coordinates": {
      "lat": 45.4172,
      "lng": 7.0308
    },
    "status": "OPEN",
    "statusDetail": "Ouvert à la circulation / Open to all vehicles — D902 praticable entre Val-d'Isère (Tarentaise) et Bonneval-sur-Arc (Maurienne)",
    "lastUpdated": "5 minutes ago",
    "description": "Le Col de l'Iseran (2 770 m / 9 088 ft — 2 764 m IGN) est le plus haut col de montagne routier goudronné de toutes les Alpes et d'Europe, situé en Savoie sur la prestigieuse Route des Grandes Alpes (D902). Reliant la vallée de la Haute-Tarentaise (Val-d'Isère) à la Haute-Maurienne (Bonneval-sur-Arc), il offre une traversée spectaculaire au cœur du Parc National de la Vanoise, dominée par les glaciers du Grand Pisaillas et de l'Albaron.",
    "image": "/col-de-l-iseran.png",
    "weather": {
      "tempF": 46,
      "tempC": 8,
      "condition": "Alpine Sun & Clear Sky",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Clear & Dry Road Surface"
    },
    "wind": {
      "speedKmh": 15,
      "speedMph": 9,
      "direction": "NW",
      "description": "Crisp Alpine Breeze"
    },
    "roadCondition": "Chaussée parfaitement sèche et dégagée sur les deux versants (Haute-Tarentaise via D902 Val-d'Isère et Haute-Maurienne via Bonneval-sur-Arc). Circulation fluide et conditions optimales pour tous véhicules, motos et cyclistes.",
    "chainRequirement": "Aucun équipement spécial requis actuellement en période estivale. Du 1er novembre au 31 mars, application stricte de la Loi Montagne II dans toute la Savoie (4 pneus hiver 3PMSF ou chaînes/chaussettes à neige homologuées dans le véhicule).",
    "cameras": [
      {
        "id": "iseran-cam-sommet",
        "title": "Col de l'Iseran Sommet (2 770 m) – Panorama Live HD",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 Sommet (2 770 m)",
        "direction": "Val-d'Isère – Bonneval-sur-Arc",
        "location": "Sommet du Col de l'Iseran",
        "source": "Savoie-Route / Val d'Isère Tourisme",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valdisere.com/webcams/"
      },
      {
        "id": "iseran-cam-valdisere-fornet",
        "title": "Val-d'Isère – Le Fornet (1 930 m) Accès Nord Iseran",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 km 32",
        "direction": "Montée vers le Pont Saint-Charles et l'Iseran",
        "location": "Le Fornet, Val-d'Isère",
        "source": "Office de Tourisme de Val d'Isère / Skaping",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valdisere.com/webcams/"
      },
      {
        "id": "iseran-cam-bonneval",
        "title": "Bonneval-sur-Arc (1 850 m) – Accès Sud Haute-Maurienne",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "D902 Versant Sud",
        "direction": "Vallon de l'Arc vers le Col de l'Iseran",
        "location": "Bonneval-sur-Arc, Haute-Maurienne",
        "source": "Haute Maurienne Vanoise / Skaping",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.hautemauriennevanoise.com/webcams/"
      },
      {
        "id": "iseran-cam-pisaillas",
        "title": "Glacier du Pisaillas – Col de l'Iseran (2 725 m)",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Domaine Alpin Iseran",
        "direction": "Vue Glacier & Massif de la Vanoise",
        "location": "Pisaillas / Col de l'Iseran",
        "source": "Val d'Isère Téléphériques",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.valdisere.com/webcams/"
      }
    ],
    "nearbyPasses": [
      {
        "id": "col-du-galibier",
        "slug": "col-du-galibier",
        "name": "Col du Galibier Pass",
        "country": "France",
        "state": "Hautes-Alpes & Savoie",
        "highway": "D902",
        "status": "OPEN",
        "elevationFt": 8668,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 65
      },
      {
        "id": "great-st-bernard-pass",
        "slug": "great-st-bernard-pass",
        "name": "Great St Bernard Pass",
        "country": "Switzerland / Italy",
        "state": "Valais & Aosta Valley",
        "highway": "Route 21 / SS27",
        "status": "OPEN",
        "elevationFt": 8100,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 110
      },
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass",
        "country": "Switzerland",
        "state": "Valais / Uri",
        "highway": "Route 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "15 minutes ago",
        "distanceKm": 210
      },
      {
        "id": "stelvio-pass",
        "slug": "stelvio-pass",
        "name": "Stelvio Pass (Passo dello Stelvio)",
        "country": "Italy",
        "state": "South Tyrol / Lombardy",
        "highway": "SS38",
        "status": "OPEN",
        "elevationFt": 9045,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 340
      }
    ],
    "overview": {
      "openedYear": 1937,
      "lengthMiles": 29.8,
      "lengthKm": 48.0,
      "annualSnowfallIn": 420,
      "annualSnowfallM": 10.7,
      "summary": "Le Col de l'Iseran (2 770 m / 9 088 ft — altitude IGN 2 764 m) est le plus haut col routier goudronné des Alpes et d'Europe, reliant la Tarentaise (Bourg-Saint-Maurice et Val-d'Isère) à la Maurienne (Bonneval-sur-Arc et Lanslebourg) en Savoie sur la mythique D902. Inauguré en 1937 par le président Albert Lebrun, le col est un monument mondial du cyclisme (Tour de France) et le point culminant absolu de la Route des Grandes Alpes."
    },
    "narrativeSections": [
      {
        "title": "Histoire & Chapelle Notre-Dame de Toute Prudence au Sommet de l'Iseran",
        "content": "Franchissement muletier historique entre les vallées savoyardes de la Tarentaise et de la Maurienne, la route moderne du Col de l'Iseran a été construite entre 1929 et 1937, mobilisant des centaines d'ouvriers dans des conditions alpines extrêmes. Le 10 juillet 1937, le Président de la République Albert Lebrun inaugure solennellement cet exploit du génie civil. Au sommet, à 2 770 mètres, s'élève la chapelle Notre-Dame de Toute Prudence construite en pierres du pays en 1939 par l'architecte Maurice Novarina, véritable gardienne spirituelle des voyageurs et alpinistes."
      },
      {
        "title": "Le Géant du Tour de France & l'Épopée Jaune de 2019",
        "content": "Le Col de l'Iseran a été gravi à 8 reprises par le Tour de France depuis sa première apparition en 1938 remportée par le Belge Félicien Vervaecke. En 1992, l'Italien Claudio Chiappucci y forgeait l'une des plus belles échappées solitaires de l'histoire du cyclisme moderne lors de l'étape de Sestrières. Le 26 juillet 2019, lors de la 19e étape, Egan Bernal attaque magistralement dans les derniers kilomètres de l'Iseran, franchit le col en solitaire et s'empare du maillot jaune avant que la course ne soit neutralisée en descente vers Tignes en raison d'une violente tempête de grêle et coulée de boue."
      },
      {
        "title": "Loi Montagne II, Équipements Hivernaux & Sécurité en Savoie (73)",
        "content": "Dans l'ensemble du département de la Savoie (73), la Loi Montagne II s'applique obligatoirement du 1er novembre au 31 mars. Tous les véhicules doivent être équipés de 4 pneus hiver portant le label 3PMSF ou transporter dans leur coffre au moins une paire de chaînes métalliques ou de chaussettes à neige homologuées. En été, bien que les équipements hivernaux ne soient pas requis sur route sèche, les températures peuvent chuter brutalement à 2 770 m avec des risques de regel nocturne en fin de saison."
      }
    ],
    "quickFacts": {
      "state": "Savoie (73), France",
      "mountainRange": "Massif de la Vanoise / Alpes Grées",
      "elevationSummary": "2 770 m (9 088 ft) — Plus haut col routier des Alpes",
      "connects": "Val-d'Isère (Tarentaise) à Bonneval-sur-Arc (Maurienne)",
      "nearestTown": "Val-d'Isère (16 km) / Bonneval-sur-Arc (13 km)",
      "roadType": "Route Départementale D902 (Route des Grandes Alpes)",
      "bestTime": "Mi-juin à fin octobre (Période estivale déneigée)",
      "highlight": "Plus haut col des Alpes, Chapelle Notre-Dame de Toute Prudence, Glacier du Pisaillas"
    },
    "routeDetails": {
      "distanceKm": 48.0,
      "distanceMiles": 29.8,
      "duration": "1h15 en voiture (3h30–4h30 à vélo)",
      "origin": "Bourg-Saint-Maurice (810 m) / Val-d'Isère (1 850 m)",
      "destination": "Bonneval-sur-Arc (1 850 m) / Lanslebourg-Mont-Cenis (1 400 m)",
      "waypoints": [
        "Bourg-Saint-Maurice (810 m)",
        "Sainte-Foy-Tarentaise (1 050 m)",
        "Barrage du Chevril / Tignes (1 790 m)",
        "Val-d'Isère (1 850 m)",
        "Le Fornet (1 930 m)",
        "Pont Saint-Charles (2 056 m)",
        "Sommet du Col de l'Iseran (2 770 m)",
        "Pont de la Neige (2 528 m)",
        "Bonneval-sur-Arc (1 850 m)",
        "Bessans (1 710 m)",
        "Lanslebourg-Mont-Cenis (1 400 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Le Col de l'Iseran est le Graal absolu du cyclotourisme et du cyclisme de haute montagne. Plus haut col routier goudronné des Alpes et d'Europe, son ascension offre un défi légendaire à travers deux vallées emblématiques de Savoie.",
      "approaches": [
        {
          "name": "Versant Nord complet (depuis Bourg-Saint-Maurice)",
          "origin": "Bourg-Saint-Maurice (810 m)",
          "distanceKm": 48.0,
          "distanceMiles": 29.8,
          "elevationGainM": 1955,
          "elevationGainFt": 6414,
          "avgGradient": "4.1%",
          "maxGradient": "9.5%",
          "hairpins": 16,
          "description": "Une très longue ascension débutant par les gorges de la Haute-Tarentaise et longeant le lac du Chevril sous Tignes jusqu'à Val-d'Isère (32 km en faux plat et sections à 6%). Après Val-d'Isère et le Pont Saint-Charles, la route s'élève dans un décor de haute montagne pur sur 16 km soutenus à 6-8% jusqu'au sommet à 2 770 m."
        },
        {
          "name": "Versant Nord direct (depuis Val-d'Isère)",
          "origin": "Val-d'Isère (1 850 m)",
          "distanceKm": 16.0,
          "distanceMiles": 9.9,
          "elevationGainM": 920,
          "elevationGainFt": 3018,
          "avgGradient": "5.8%",
          "maxGradient": "9.0%",
          "hairpins": 8,
          "description": "Départ du rond-point des pistes de Val-d'Isère, traversée du Fornet puis début de la rampe au Pont Saint-Charles. Pente régulière et paysages grandioses le long des parois de la Tsanteleina et du glacier du Pisaillas."
        },
        {
          "name": "Versant Sud direct (depuis Bonneval-sur-Arc)",
          "origin": "Bonneval-sur-Arc (1 850 m)",
          "distanceKm": 12.9,
          "distanceMiles": 8.0,
          "elevationGainM": 977,
          "elevationGainFt": 3205,
          "avgGradient": "7.6%",
          "maxGradient": "10.5%",
          "hairpins": 14,
          "description": "Le versant le plus sauvage, spectaculaire et exigeant de l'Iseran. Dès la sortie du village classé de Bonneval-sur-Arc, les lacets s'enchaînent dans une gorge étroite le long du torrent de l'Arc, franchissant le Pont de l'Oulietta et le Pont de la Neige dans un univers minéral d'une beauté saisissante."
        },
        {
          "name": "Versant Sud complet (depuis Lanslebourg-Mont-Cenis)",
          "origin": "Lanslebourg-Mont-Cenis (1 400 m)",
          "distanceKm": 32.9,
          "distanceMiles": 20.4,
          "elevationGainM": 1450,
          "elevationGainFt": 4757,
          "avgGradient": "4.4%",
          "maxGradient": "10.5%",
          "hairpins": 18,
          "description": "Remontée du haut plateau de Bessans (terre de ski nordique) le long de la Haute-Maurienne sur 20 km de faux-plat montant, avant de rejoindre Bonneval-sur-Arc pour les 12,9 km d'ascension finale à 7,6%."
        }
      ],
      "bestSeason": "Mi-juin à début octobre (col entièrement déneigé et météo estivale)",
      "safetyTips": [
        "À 2 770 m, le manque d'oxygène est réel : adaptez votre cadence de pédalage dans les 4 derniers kilomètres.",
        "Emportez impérativement des vêtements thermiques et un coupe-vent étanche pour la longue descente où le refroidissement éolien est intense.",
        "Méfiez-vous des tunnels et paravalanches sur la section Tignes – Val-d'Isère : feux vélo avant et arrière obligatoires.",
        "Vérifiez l'usure de vos freins et la pression de vos pneus avant d'entamer la descente technique vers Bonneval."
      ]
    },
    "drivingInfo": {
      "summary": "La D902 franchissant le Col de l'Iseran est une route de très haute montagne goudronnée et bien entretenue, mais elle exige une conduite attentive, le respect des priorités et la maîtrise du frein moteur.",
      "characteristics": [
        "Largeur de chaussée de 5 à 6 mètres avec accotements et murets en pierre traditionnels.",
        "Altitude maximale de 2 770 m — Plus haute route de col des Alpes.",
        "Pente maximale de 10,5% sur le versant Bonneval-sur-Arc et 9,5% sur le versant Val-d'Isère.",
        "Fermeture hivernale annuelle stricte de novembre à début juin en raison d'accumulations de neige atteignant 8 à 10 mètres."
      ],
      "switchbacksCount": "32 lacets au total entre Val-d'Isère, le sommet de l'Iseran et Bonneval-sur-Arc",
      "safetyAndEtiquette": [
        "Utilisez le frein moteur en descente (1ère et 2ème vitesses) pour éviter la surchauffe des freins.",
        "Cédez le passage aux véhicules montants et aux camping-cars dans les rétrécissements de virages.",
        "Gardez une distance de sécurité d'au moins 1,50 mètre lors du dépassement des cyclistes.",
        "Stationnez uniquement sur les parkings balisés au sommet et au belvédère de la chapelle."
      ],
      "motorcycleTips": [
        "Attention aux coulées d'eau de fonte glaciaire et aux gravillons dans les épingles en début d'été.",
        "Le vent au col peut souffler en fortes rafales : soyez vigilant lors des arrêts au sommet."
      ]
    },
    "distancesTable": [
      {
        "location": "Val-d'Isère (Centre Station)",
        "distance": "16 km (10 miles)",
        "route": "D902 Nord",
        "notes": "Station internationale de ski et porte de la Haute-Tarentaise"
      },
      {
        "location": "Bonneval-sur-Arc",
        "distance": "12.9 km (8 miles)",
        "route": "D902 Sud",
        "notes": "Plus beau village de France au pied sud du col"
      },
      {
        "location": "Bourg-Saint-Maurice",
        "distance": "48 km (30 miles)",
        "route": "D902 Nord",
        "notes": "Gare TGV Eurostar et carrefour des cols alpins"
      },
      {
        "location": "Lanslebourg-Mont-Cenis",
        "distance": "32.9 km (20 miles)",
        "route": "D902 Sud & D1006",
        "notes": "Accès au Col du Mont-Cenis et à l'Italie"
      },
      {
        "location": "Tignes",
        "distance": "28 km (17 miles)",
        "route": "D902 & D87A",
        "notes": "Station de ski et glacier de la Grande Motte"
      },
      {
        "location": "Modane / Tunnel du Fréjus",
        "distance": "56 km (35 miles)",
        "route": "D902 & D1006",
        "notes": "Liaison internationale autoroutière et ferroviaire avec l'Italie"
      },
      {
        "location": "Albertville",
        "distance": "100 km (62 miles)",
        "route": "N90 & D902",
        "notes": "Cité olympique de 1992"
      },
      {
        "location": "Chambéry",
        "distance": "150 km (93 miles)",
        "route": "A43 / N90 & D902",
        "notes": "Capitale historique des Ducs de Savoie"
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Fin octobre / début novembre (dès les premières chutes de neige d'automne)",
      "typicalReopening": "Mi-juin (vers le 10–15 juin selon le volume d'enneigement)",
      "description": "Le Col de l'Iseran est fermé à la circulation pendant près de 7 mois chaque hiver. Le manteau neigeux sommital dépasse couramment 8 à 10 mètres d'épaisseur. Chaque printemps au mois de mai, les équipes de Savoie-Route engagent des engins géants (fraises rotatives à neige, étraves et chargeuses) pour creuser des tranchées spectaculaires à travers les congères et sécuriser la réouverture estivale."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Alpine Sunshine & Blue Sky",
        "tempHighF": 48,
        "tempLowF": 32,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Starlit Mountain Sky",
        "tempHighF": 34,
        "tempLowF": 26,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Bright Alpine Day",
        "tempHighF": 50,
        "tempLowF": 34,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Partly Cloudy with Alpine Breeze",
        "tempHighF": 46,
        "tempLowF": 30,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "High Altitude Clouds",
        "tempHighF": 44,
        "tempLowF": 28,
        "icon": "wind"
      },
      {
        "day": "Day 5",
        "condition": "Sunny & Crisp",
        "tempHighF": 49,
        "tempLowF": 33,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Savoie Route – Conseil Départemental de la Savoie",
        "type": "Official Savoie Department Road Authority & Real-Time Pass Status",
        "url": "https://savoie-route.fr/"
      },
      {
        "name": "Bison Futé – Ministère des Transports",
        "type": "National Road Traffic & Alpine Mountain Pass Intelligence",
        "url": "https://www.bison-fute.gouv.fr/"
      },
      {
        "name": "Office de Tourisme de Val d'Isère",
        "type": "Live Webcams, Summit Conditions & Local Mountain Passes",
        "url": "https://www.valdisere.com/"
      },
      {
        "name": "Office de Tourisme Haute Maurienne Vanoise",
        "type": "Live Webcams Bonneval-sur-Arc & Pass Access Information",
        "url": "https://www.hautemauriennevanoise.com/"
      },
      {
        "name": "Météo-France – Massif de la Vanoise & Haute-Tarentaise",
        "type": "Alpine Mountain Weather & Snowpack Forecast",
        "url": "https://meteofrance.com/"
      },
      {
        "name": "LivePassWatch Verification Methodology",
        "type": "Transparent Real-Time Status Verification Protocol",
        "url": "/methodology"
      }
    ],
    "faqs": [
      {
        "question": "What is the Col de l'Iseran Pass opening date? / Quelle est la date d'ouverture du Col de l'Iseran ?",
        "answer": "The Col de l'Iseran Pass opening date typically occurs in mid-June (around June 10 to June 15) each year, once heavy winter snowpacks of 8–10 meters are cleared by Savoie-Route plows. In 2026, the pass opened for the summer season and is currently OPEN to all traffic. / La date d'ouverture du Col de l'Iseran se situe généralement à la mi-juin, après le déneigement de printemps des services des routes de Savoie."
      },
      {
        "question": "Is Col de l'Iseran Pass open today? / Le Col de l'Iseran est-il ouvert aujourd'hui ?",
        "answer": "Yes, Col de l'Iseran Pass is currently OPEN and accessible to cars, motorcycles, and bicycles along the D902 route between Val-d'Isère and Bonneval-sur-Arc. / Oui, le Col de l'Iseran est actuellement OUVERT à la circulation entre Val-d'Isère et Bonneval-sur-Arc."
      },
      {
        "question": "What are the current Col de l'Iseran Pass road conditions? / Quelles sont les conditions de circulation au Col de l'Iseran ?",
        "answer": "Road conditions on the D902 are dry, clear, and in excellent condition across both the Tarentaise (Val-d'Isère) and Maurienne (Bonneval-sur-Arc) approaches. Traffic is flowing smoothly in both directions. / La chaussée de la D902 est sèche et parfaitement dégagée avec un trafic fluide sur les deux versants."
      },
      {
        "question": "What is the Col de l'Iseran Pass road status and pass status report? / Quel est le rapport d'état de la route du Col de l'Iseran ?",
        "answer": "The official pass status report from Savoie-Route confirms the Col de l'Iseran is OPEN with normal summer driving conditions and no vehicle restrictions. / Le rapport officiel de Savoie-Route confirme que le col est OUVERT avec des conditions estivales normales."
      },
      {
        "question": "When does Col de l'Iseran Pass open? / Quand ouvre le Col de l'Iseran ?",
        "answer": "Col de l'Iseran opens annually in early-to-mid June as soon as snowplows clear the D902 road corridor. It remains open continuously through the summer until late autumn. / Le col ouvre chaque année début/mi-juin dès la fin des travaux de fraisement de la neige."
      },
      {
        "question": "Is Col de l'Iseran Pass closed today or open right now? / Le Col de l'Iseran est-il fermé aujourd'hui ou ouvert en ce moment ?",
        "answer": "Col de l'Iseran Pass is NOT closed today; it is open right now for all travel between Haute-Tarentaise and Haute-Maurienne. / Le Col de l'Iseran n'est PAS fermé aujourd'hui ; il est ouvert dès maintenant à la circulation."
      },
      {
        "question": "Where can I view the Col de l'Iseran Pass live webcam and summit camera? / Où voir la webcam en direct et les caméras du Col de l'Iseran ?",
        "answer": "You can view live high-definition webcams from the Iseran Summit (2,770 m), Val-d'Isère Le Fornet (1,930 m), and Bonneval-sur-Arc directly in the live webcam section of this page. Feeds are updated in real time. / Les webcams HD en direct du sommet (2 770 m), du Fornet et de Bonneval-sur-Arc sont consultables directement dans la section Webcam ci-dessus."
      },
      {
        "question": "When does Col de l'Iseran Pass close for winter? / Quand ferme le Col de l'Iseran pour l'hiver ?",
        "answer": "Col de l'Iseran closes for winter in late October or early November (typically between October 25 and November 5), dictated by the first heavy snowfall and avalanche hazards. It remains closed through winter until mid-June. / La fermeture hivernale intervient fin octobre ou début novembre dès les premières fortes chutes de neige alpines."
      },
      {
        "question": "What is the elevation and altitude of Col de l'Iseran Pass? / Quelle est l'altitude du Col de l'Iseran ?",
        "answer": "Col de l'Iseran Pass stands at a summit elevation of 2,770 meters (9,088 feet) above sea level (officially marked as 2,764 meters on IGN maps). It is the highest paved mountain pass in all of the Alps and Europe. / Le Col de l'Iseran culmine à 2 770 mètres d'altitude (2 764 m IGN), ce qui en fait le plus haut col routier goudronné des Alpes et d'Europe."
      },
      {
        "question": "What are the Col de l'Iseran Pass snow conditions and snow depth? / Quelles sont la hauteur de neige et les conditions d'enneigement ?",
        "answer": "During the summer opening, the road asphalt is 100% free of snow and ice. In winter and spring prior to clearing, snow depth in the summit gullies routinely exceeds 8 to 10 meters (26 to 33 feet). / En été, la chaussée est totalement déneigée ; en hiver, les congères dépassent 8 à 10 mètres de haut."
      },
      {
        "question": "What is the Col de l'Iseran Pass weather today? / Quel temps fait-il aujourd'hui au Col de l'Iseran ?",
        "answer": "Current summit weather at 2,770 meters features bright alpine sunshine, daytime temperatures around 8°C (46°F), and a light northwesterly breeze. Check the live 5-day forecast above before setting out. / La météo sommitale offre un franc soleil avec environ 8°C et une brise alpine revigorante."
      },
      {
        "question": "What are the chain requirements and Loi Montagne II rules for Col de l'Iseran? / Quelles sont les obligations de chaînes et la Loi Montagne II ?",
        "answer": "Under French Loi Montagne II regulations, winter equipment (4 certified 3PMSF winter tires or carrying snow chains/textile socks in the vehicle) is mandatory throughout Savoie (73) from November 1 to March 31. In summer, no chain restrictions apply on dry pavement. / Équipements hivernaux obligatoires du 1er novembre au 31 mars en Savoie (4 pneus 3PMSF ou chaînes/chaussettes dans le coffre)."
      },
      {
        "question": "How do I get directions to Col de l'Iseran Pass? / Comment se rendre au Col de l'Iseran ?",
        "answer": "From the north, follow N90 from Albertville to Bourg-Saint-Maurice, then take D902 through Val-d'Isère up to the summit. From the south, take A43/D1006 to Modane/Lanslebourg-Mont-Cenis, then D902 through Bonneval-sur-Arc up to the pass. / Accès par le nord via Bourg-Saint-Maurice et Val-d'Isère (D902) ou par le sud via Modane et Bonneval-sur-Arc (D902)."
      }
    ],
    "customSeo": {
      "h1": "Col de l'Iseran : État de la Route, Webcam Live, Météo & Date d'Ouverture",
      "title": "Col de l'Iseran Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Consultez l'état d'ouverture en direct du Col de l'Iseran (2 770 m, D902), webcams live HD Val d'Isère & Bonneval, météo, hauteur de neige, conditions de circulation et Loi Montagne."
    },
    "searchKeywords": [
      "Col de l'Iseran Pass opening date",
      "Col de l'Iseran Pass is open",
      "Col de l'Iseran Pass road conditions",
      "Col de l'Iseran Pass road status",
      "Col de l'Iseran Pass pass status report",
      "when does Col de l'Iseran Pass open",
      "Col de l'Iseran Pass closed",
      "Col de l'Iseran Pass is closed",
      "Col de l'Iseran Pass is it open today",
      "is Col de l'Iseran Pass closed today",
      "Col de l'Iseran Pass webcam",
      "Col de l'Iseran Pass live webcam",
      "Col de l'Iseran Pass cameras",
      "Col de l'Iseran Pass summit camera",
      "when does Col de l'Iseran Pass close for winter",
      "Col de l'Iseran Pass map",
      "is Col de l'Iseran Pass open right now",
      "Col de l'Iseran Pass weather today",
      "Col de l'Iseran Pass snow",
      "Col de l'Iseran Pass snow depth",
      "Col de l'Iseran Pass snow conditions",
      "Col de l'Iseran Pass elevation",
      "Col de l'Iseran Pass open",
      "Col de l'Iseran ouverture",
      "Col de l'Iseran ouvert ou ferme",
      "Col de l'Iseran état des routes",
      "Col de l'Iseran webcam en direct",
      "Col de l'Iseran altitude 2770 m",
      "Col de l'Iseran météo aujourd'hui",
      "Col de l'Iseran enneigement et hauteur de neige",
      "Col de l'Iseran date d'ouverture",
      "Col de l'Iseran fermeture hivernale",
      "Savoie Route Col de l'Iseran D902",
      "Loi Montagne II Savoie Iseran",
      "Webcam Val d'Isère Col de l'Iseran"
    ]
  },
  {
    "id": "great-st-bernard-pass",
    "slug": "great-st-bernard-pass",
    "name": "Great St Bernard Pass",
    "alternateNames": [
      "Colle del Gran San Bernardo",
      "Col du Grand-Saint-Bernard",
      "Grand-Saint-Bernard Pass",
      "Passo del Gran San Bernardo",
      "Ospizio del Gran San Bernardo",
      "Route 21 / SS27",
      "Traforo del Gran San Bernardo"
    ],
    "country": "Switzerland / Italy",
    "countryCode": "CHE/ITA",
    "continent": "Europe",
    "state": "Valais & Aosta Valley",
    "highway": "Route 21 (CH) / SS27 (IT)",
    "elevationFt": 8100,
    "elevationM": 2469,
    "coordinates": {
      "lat": 45.8692,
      "lng": 7.1711
    },
    "status": "OPEN",
    "statusDetail": "Valico aperto al traffico estivo / Open for summer season — Traforo del Gran San Bernardo aperto 24h/24 tutto l'anno",
    "lastUpdated": "5 minutes ago",
    "description": "Il Colle del Gran San Bernardo (2.469 m / 8.100 ft) è un leggendario valico alpino che collega Martigny nel Cantone Vallese (Svizzera) con Saint-Rhémy-en-Bosses e la Valle d'Aosta (Italia) tramite la Route 21 / SS27. Famoso in tutto il mondo per il millenario Ospizio fondato nel 1049 da San Bernardo, i leggendari cani San Bernardo da soccorso e la storica traversata di Napoleone nel maggio 1800, la strada panoramica costeggia uno spettacolare lago glaciale di confine.",
    "image": "/great-st-bernard-pass.png",
    "weather": {
      "tempF": 46,
      "tempC": 8,
      "condition": "Alpine Sunshine & Mountain Breeze",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Road Surface Clear & Dry"
    },
    "wind": {
      "speedKmh": 16,
      "speedMph": 10,
      "direction": "NW",
      "description": "Crisp High-Altitude Breeze"
    },
    "roadCondition": "Carreggiata asciutta e perfettamente transitabile sui versanti svizzero (Route 21) e italiano (SS27). Tracciato fluido fino all'Ospizio e al lago sommitale. Il Traforo del Gran San Bernardo (5,8 km) è regolarmente aperto 24h/24 con pedaggio.",
    "chainRequirement": "Nessun equipaggiamento speciale richiesto attualmente durante la stagione estiva. Dal 15 ottobre al 15 aprile vige l'obbligo di pneumatici invernali (3PMSF) o catene da neve a bordo su tutta la rete stradale della Valle d'Aosta e del Vallese.",
    "cameras": [
      {
        "id": "gsb-cam-hospice",
        "title": "Ospizio del Gran San Bernardo (2.469 m) – Live HD",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 21 Sommità (2.469 m)",
        "direction": "Vista Sud-Est verso il Lago e l'Ospizio",
        "location": "Sommità del Colle del Gran San Bernardo",
        "source": "Congregazione dei Canonici del Gran San Bernardo / Roundshot",
        "updateIntervalMs": 60000,
        "officialUrl": "https://gsbernard.roundshot.com/"
      },
      {
        "id": "gsb-cam-lake-border",
        "title": "Lago di Confine Svizzera-Italia (2.447 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Confine CH/IT Sommità",
        "direction": "Panorama Italiano verso la Valle d'Aosta",
        "location": "Lago del Gran San Bernardo",
        "source": "Ospizio Gran San Bernardo / Webcam-HD",
        "updateIntervalMs": 60000,
        "officialUrl": "https://hospice-du-grand-saint-bernard.ch/"
      },
      {
        "id": "gsb-cam-portal-north",
        "title": "Portale Nord Traforo – Bourg-Saint-Pierre (1.918 m)",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 21 Ingresso Nord Traforo",
        "direction": "Accesso Traforo Svizzera (Vallese)",
        "location": "Bourg-Saint-Pierre (CH)",
        "source": "SISEX SA / letunnel.com",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.letunnel.com/"
      },
      {
        "id": "gsb-cam-portal-south",
        "title": "Portale Sud Traforo – Saint-Rhémy-en-Bosses (1.878 m)",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "SS27 Ingresso Sud Traforo",
        "direction": "Accesso Traforo Italia (Valle d'Aosta)",
        "location": "Saint-Rhémy-en-Bosses (IT)",
        "source": "SITRASB SpA / Inforoute Valle d'Aosta",
        "updateIntervalMs": 60000,
        "officialUrl": "https://inforoute.regione.vda.it/"
      }
    ],
    "nearbyPasses": [
      {
        "id": "col-du-galibier",
        "slug": "col-du-galibier",
        "name": "Col du Galibier",
        "country": "France",
        "state": "Hautes-Alpes & Savoie",
        "highway": "D902",
        "status": "OPEN",
        "elevationFt": 8668,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 160
      },
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass",
        "country": "Switzerland",
        "state": "Valais / Uri",
        "highway": "Route 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "15 minutes ago",
        "distanceKm": 145
      },
      {
        "id": "stelvio-pass",
        "slug": "stelvio-pass",
        "name": "Stelvio Pass (Passo dello Stelvio)",
        "country": "Italy",
        "state": "South Tyrol / Lombardy",
        "highway": "SS38",
        "status": "OPEN",
        "elevationFt": 9045,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 340
      },
      {
        "id": "trollstigen-pass",
        "slug": "trollstigen-pass",
        "name": "Trollstigen (Fv63)",
        "country": "Norway",
        "state": "Møre og Romsdal",
        "highway": "Fv63",
        "status": "OPEN",
        "elevationFt": 2815,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 1820
      }
    ],
    "overview": {
      "openedYear": 1049,
      "lengthMiles": 28.5,
      "lengthKm": 45.8,
      "annualSnowfallIn": 590,
      "annualSnowfallM": 15.0,
      "summary": "Il Colle del Gran San Bernardo (2.469 m / 8.100 ft) è il terzo valico stradale più alto della Svizzera e un punto di passaggio transalpino strategico fin dall'epoca romana (Mons Jovis). Ospita il celebre Ospizio del Gran San Bernardo fondato nel 1049 da San Bernardo di Mentone. La strada panoramica del colle è aperta in estate (da giugno a metà ottobre), mentre il Traforo stradale del Gran San Bernardo (5,8 km a 1.918 m) garantisce il transito tutto l'anno 24 ore su 24 con pedaggio."
    },
    "narrativeSections": [
      {
        "title": "Storia, Ospizio Millenario & Cani San Bernardo",
        "content": "Fondato quasi mille anni fa per soccorrere i pellegrini in cammino lungo la Via Francigena verso Roma, l'Ospizio del Gran San Bernardo è retto ininterrottamente dai Canonici regolari di Sant'Agostino. Dal XVII secolo i religiosi selezionarono i celebri cani San Bernardo, famosi nel mondo per il loro eccezionale senso dell'orientamento nelle tempeste di neve e per il salvataggio dei viandanti travolti dalle valanghe. Il museo dell'Ospizio e l'allevamento estivo della Fondazione Barry sono aperti alle visite ogni estate."
      },
      {
        "title": "La Traversata Napoleonica del Maggio 1800",
        "content": "Nel maggio 1800, il Primo Console Napoleone Bonaparte valicò il Gran San Bernardo alla testa di un esercito di 40.000 uomini, trasportando pesanti cannoni smontati e trainati dentro tronchi di larice scavati per sorprendere l'esercito austriaco nella pianura padana. Questa storica impresa è immortalata dal celebre dipinto di Jacques-Louis David."
      },
      {
        "title": "Traforo Autostradale vs Strada Panoramica del Colle (2.469 m)",
        "content": "Inaugurato nel 1964, il Traforo del Gran San Bernardo (5.798 metri) è stato il primo grande tunnel stradale transalpino d'Europa tra Svizzera e Italia. Situato a un'altitudine di 1.918 m (portale nord) e 1.878 m (portale sud), è aperto 24h/24 tutto l'anno con pedaggio. Durante i mesi estivi (da giugno a ottobre), automobilisti, motociclisti e ciclisti possono percorrere gratuitamente la spettacolare strada del colle che sale a 2.469 m."
      }
    ],
    "quickFacts": {
      "state": "Valle d'Aosta (IT) & Vallese (CH)",
      "mountainRange": "Alpi Pennine / Massiccio del Gran San Bernardo",
      "elevationSummary": "2.469 m (8.100 ft) Sommità / 1.918 m (6.293 ft) Traforo",
      "connects": "Martigny & Val d'Entremont con Saint-Rhémy & Aosta",
      "nearestTown": "Saint-Rhémy-en-Bosses (14 km) / Aosta (34 km) / Bourg-Saint-Pierre (13 km)",
      "roadType": "Strada Statale 27 (IT) / Route Principale 21 (CH)",
      "bestTime": "Giugno a Ottobre (Strada del Colle) / Tutto l'anno (Traforo)",
      "highlight": "Ospizio millenario (1049), cani San Bernardo, lago glaciale di confine, museo napoleonico"
    },
    "routeDetails": {
      "distanceKm": 45.8,
      "distanceMiles": 28.5,
      "duration": "1h00–1h15 in auto (3h30–4h30 in bici)",
      "origin": "Aosta (583 m) / Martigny (471 m)",
      "destination": "Martigny (471 m) / Aosta (583 m)",
      "waypoints": [
        "Martigny (471 m)",
        "Sembrancher (714 m)",
        "Orsières (887 m)",
        "Liddes (1.346 m)",
        "Bourg-Saint-Pierre (1.632 m)",
        "Bivio Traforo / Colle (1.918 m)",
        "Sommità del Colle & Ospizio (2.469 m)",
        "Saint-Rhémy-en-Bosses (1.519 m)",
        "Saint-Oyen (1.373 m)",
        "Aosta (583 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Il Colle del Gran San Bernardo è una delle salite regine del ciclismo mondiale, percorsa regolarmente dal Giro d'Italia e dal Tour de France. Con oltre 44 km di ascesa continua da Martigny e 34 km da Aosta, rappresenta una sfida straordinaria.",
      "approaches": [
        {
          "name": "Versante Sud Italiano (da Aosta)",
          "origin": "Aosta (583 m)",
          "distanceKm": 34.0,
          "distanceMiles": 21.1,
          "elevationGainM": 1886,
          "elevationGainFt": 6188,
          "avgGradient": "5.5% (7.2% sopra Saint-Rhémy)",
          "maxGradient": "10.0%",
          "hairpins": 26,
          "description": "Ascesa soleggiata e panoramica che risale la valle del Gran San Bernardo attraverso Gignod, Etroubles e Saint-Rhémy-en-Bosses. Gli ultimi 14 chilometri offrono una successione di tornanti perfetti immersi nei pascoli d'alta quota fino al lago sommitale."
        },
        {
          "name": "Versante Sud diretto (da Saint-Rhémy-en-Bosses)",
          "origin": "Saint-Rhémy-en-Bosses (1.519 m)",
          "distanceKm": 14.5,
          "distanceMiles": 9.0,
          "elevationGainM": 950,
          "elevationGainFt": 3117,
          "avgGradient": "6.6%",
          "maxGradient": "10.0%",
          "hairpins": 18,
          "description": "La sezione alpina italiana che inizia dal borgo storico di Saint-Rhémy. La strada si inerpica con tornanti panoramici ampi e ben raccordati fino al valico di confine."
        },
        {
          "name": "Versante Nord Svizzero (da Martigny)",
          "origin": "Martigny (471 m)",
          "distanceKm": 44.5,
          "distanceMiles": 27.7,
          "elevationGainM": 1998,
          "elevationGainFt": 6555,
          "avgGradient": "4.5% (7.5% negli ultimi 12 km)",
          "maxGradient": "11.0%",
          "hairpins": 22,
          "description": "Una lunga e solenne ascesa attraverso la Val d'Entremont via Sembrancher e Bourg-Saint-Pierre. Dopo il bivio del traforo a 1.918 m, gli ultimi 6 chilometri salgono nella suggestiva combe des Morts fino all'Ospizio."
        },
        {
          "name": "Versante Nord diretto (da Bourg-Saint-Pierre)",
          "origin": "Bourg-Saint-Pierre (1.632 m)",
          "distanceKm": 12.8,
          "distanceMiles": 8.0,
          "elevationGainM": 837,
          "elevationGainFt": 2746,
          "avgGradient": "6.5%",
          "maxGradient": "11.0%",
          "hairpins": 14,
          "description": "Il tratto conclusivo di alta montagna sopra la vegetazione arborea, con pendenze costanti tra il 7% e il 10% fino alla statua di San Bernardo."
        }
      ],
      "bestSeason": "Da metà giugno a inizio ottobre (asfalto asciutto e valico completamente sgombro dalla neve)",
      "safetyTips": [
        "Porta sempre guanti e giacca antivento termica: a 2.469 m la temperatura può essere di 15°C inferiore rispetto al fondovalle di Aosta o Martigny.",
        "Il Traforo del Gran San Bernardo è severamente vietato ai ciclisti. È obbligatorio percorrere la strada panoramica del colle.",
        "Equipaggia la bicicletta con luci anteriori e posteriori per le gallerie paravalanghe del versante nord.",
        "Presta attenzione ai banchi di nebbia improvvisi che possono formarsi attorno al lago di confine."
      ]
    },
    "drivingInfo": {
      "summary": "La traversata del Gran San Bernardo lungo la SS27 e la Route 21 è una delle strade alpine più belle e sicure d'Europa. La carreggiata a due corsie è ampia, ben asfaltata e dotata di ottimi guardrail.",
      "characteristics": [
        "Strada asfaltata a 2 corsie larga 6 metri, curata congiuntamente da ANAS e dal Cantone Vallese.",
        "Due itinerari possibili: la strada panoramica della sommità (2.469 m, gratuita, aperta in estate) oppure il traforo autostradale (1.918 m, a pedaggio, aperto 24h/24 tutto l'anno).",
        "Pendenza media regolare tra il 6% e il 9%, ideale per automobili, moto e camper.",
        "Valico di frontiera internazionale con controlli doganali: documento d'identità / passaporto valido obbligatorio per il transito tra Italia e Svizzera."
      ],
      "switchbacksCount": "Oltre 48 tornanti distribuiti tra Aosta, Saint-Rhémy e Martigny",
      "safetyAndEtiquette": [
        "Usa il freno motore nelle discese prolungate per preservare l'impianto frenante.",
        "Dai precedenza agli autopostali svizzeri (PostAuto) e ai veicoli in salita nei tornanti più stretti.",
        "Mantieni almeno 1,5 metri di distanza di sicurezza nel sorpasso dei ciclisti.",
        "Fai rifornimento di carburante ad Aosta o Martigny prima di iniziare la salita."
      ],
      "motorcycleTips": [
        "Asfalto di ottima qualità molto apprezzato dai mototuristi; prudenza al mattino presto per eventuale umidità nei tratti all'ombra.",
        "Ampio parcheggio moto dedicato disponibile direttamente davanti all'Ospizio e al museo."
      ]
    },
    "distancesTable": [
      {
        "location": "Saint-Rhémy-en-Bosses (Italia)",
        "distance": "14.5 km (9 miglia)",
        "route": "SS27 Sud",
        "notes": "Famoso per il prosciutto crudo DOP Vallée d'Aoste Jambon de Bosses"
      },
      {
        "location": "Aosta (Italia)",
        "distance": "34 km (21 miglia)",
        "route": "SS27 Sud",
        "notes": "Capoluogo regionale della Valle d'Aosta con monumenti romani"
      },
      {
        "location": "Bourg-Saint-Pierre (Svizzera)",
        "distance": "13 km (8 miglia)",
        "route": "Route 21 Nord",
        "notes": "Ultimo borgo abitato del versant svizzero nel Vallese"
      },
      {
        "location": "Martigny (Svizzera)",
        "distance": "44.5 km (28 miglia)",
        "route": "Route 21 / A9",
        "notes": "Nodo ferroviario internazionale FFS e svincolo autostradale A9"
      },
      {
        "location": "Torino (Italia)",
        "distance": "150 km (93 miglia)",
        "route": "SS27 & Autostrada A5",
        "notes": "Metropoli piemontese e snodo del Nord Italia"
      },
      {
        "location": "Chamonix-Mont-Blanc (Francia)",
        "distance": "65 km (40 miglia)",
        "route": "Col de la Forclaz & Route 21",
        "notes": "Capitale dell'alpinismo ai piedi del Monte Bianco"
      },
      {
        "location": "Ginevra (Aeroporto Internazionale)",
        "distance": "175 km (108 miglia)",
        "route": "Autostrada A9 & Route 21",
        "notes": "Principale aeroporto internazionale della Svizzera romanda"
      },
      {
        "location": "Milano (Italia)",
        "distance": "215 km (133 miglia)",
        "route": "Autostrada A5 / A4",
        "notes": "Polo economico e commerciale della Lombardia"
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Metà ottobre (con le prime intense nevicate alpine)",
      "typicalReopening": "Inizio giugno (dopo le operazioni di sgombero neve di ANAS e Cantone Vallese)",
      "description": "La strada panoramica del valico sommitale (2.469 m) chiude al traffico durante l'inverno da metà ottobre a inizio giugno per accumuli di neve che superano i 10-15 metri e per il rischio valanghe. Il transito transalpino rimane tuttavia garantito 365 giorni all'anno 24h/24 attraverso il Traforo stradale del Gran San Bernardo (1.918 m) dotato di gallerie d'accesso riscaldate e coperte."
    },
    "forecast": [
      {
        "day": "Oggi",
        "condition": "Alpine Sunshine & Fresh Breeze",
        "tempHighF": 48,
        "tempLowF": 33,
        "icon": "sun"
      },
      {
        "day": "Stasera",
        "condition": "Clear Alpine Stars",
        "tempHighF": 35,
        "tempLowF": 28,
        "icon": "moon"
      },
      {
        "day": "Domani",
        "condition": "Sunny Blue Sky",
        "tempHighF": 50,
        "tempLowF": 35,
        "icon": "sun"
      },
      {
        "day": "Giorno 3",
        "condition": "Scattered Clouds over Peaks",
        "tempHighF": 47,
        "tempLowF": 32,
        "icon": "cloud-sun"
      },
      {
        "day": "Giorno 4",
        "condition": "Passing Afternoon Clouds",
        "tempHighF": 45,
        "tempLowF": 30,
        "icon": "wind"
      },
      {
        "day": "Giorno 5",
        "condition": "Clear Horizon & Mountain Sun",
        "tempHighF": 49,
        "tempLowF": 34,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Regione Autonoma Valle d'Aosta – Inforoute VdA / ANAS",
        "type": "Official Italian Road Conditions & Pass Status",
        "url": "https://inforoute.regione.vda.it/"
      },
      {
        "name": "Stato del Vallese – Service de la mobilité (SDM)",
        "type": "Official Swiss Cantonal Road Conditions",
        "url": "https://www.vs.ch/web/mobilite"
      },
      {
        "name": "Traforo del Gran San Bernardo (SITRASB SpA / SISEX SA)",
        "type": "Live Tunnel Traffic, Tolls & Webcams",
        "url": "https://www.letunnel.com/"
      },
      {
        "name": "Ospizio del Gran San Bernardo (Roundshot HD)",
        "type": "Live Summit Webcams & Meteorological Telemetry",
        "url": "https://gsbernard.roundshot.com/"
      },
      {
        "name": "MeteoSwiss – Bollettini Alpini Gran San Bernardo",
        "type": "High-Altitude Weather & Snow Forecasts",
        "url": "https://www.meteoswiss.admin.ch/"
      }
    ],
    "faqs": [
      {
        "question": "What is the Great St Bernard Pass opening date? / Qual è la data di apertura del Colle del Gran San Bernardo?",
        "answer": "The Great St Bernard Pass summit road typically opens in early June (around June 1 to June 10) each summer after Swiss and Italian road crews complete rotary snow clearing. In 2026, the pass opened for the summer season and is currently OPEN to all traffic. / La data di apertura del Colle del Gran San Bernardo cade solitamente a inizio giugno dopo le operazioni di sgombero neve di ANAS e Cantone Vallese."
      },
      {
        "question": "Is Great St Bernard Pass open today? / Il Colle del Gran San Bernardo è aperto oggi?",
        "answer": "Yes, Great St Bernard Pass is currently OPEN for the summer season on Route 21 (Switzerland) and SS27 (Italy). The Grand-Saint-Bernard Tunnel is also open 24/7 year-round. / Sì, il Colle del Gran San Bernardo è attualmente APERTO al traffico estivo."
      },
      {
        "question": "What are the current Great St Bernard Pass road conditions? / Quali sono le condizioni stradali al Gran San Bernardo?",
        "answer": "Road conditions on Route 21 and SS27 are clear and dry with excellent summer driving surfaces across both the Swiss Valais and Italian Aosta Valley approaches. / Il fondo stradale è asciutto e sgombro con circolazione scorrevole su entrambi i versanti."
      },
      {
        "question": "Where can I view the Great St Bernard Pass live webcam, cameras, and summit camera? / Dove vedere la webcam live del Gran San Bernardo?",
        "answer": "You can view 24/7 high-definition live webcam feeds from the Hospice summit (2,469 m), the border lake, and the North/South tunnel portals directly in the Webcam section above. / Le webcam HD in tempo reale dell'Ospizio sommitale e del lago di confine sono disponibili in cima a questa pagina."
      },
      {
        "question": "What is the elevation and altitude of Great St Bernard Pass? / Qual è l'altitudine del Colle del Gran San Bernardo?",
        "answer": "The summit elevation of Great St Bernard Pass is 2,469 meters (8,100 feet) above sea level. The Grand-Saint-Bernard Tunnel is located lower at 1,918 meters (6,293 feet). / L'altitudine sommitale del colle è di 2.469 metri s.l.m. (traforo a 1.918 m)."
      },
      {
        "question": "When does Great St Bernard Pass close for winter? / Quando chiude il Colle del Gran San Bernardo per l'inverno?",
        "answer": "The open-air summit road typically closes for winter in mid-October following the first heavy alpine snowfalls, remaining closed until early June. The Grand-Saint-Bernard Tunnel remains open 24/7 year-round. / La strada sommitale chiude solitamente a metà ottobre e riapre a inizio giugno."
      },
      {
        "question": "Is Great St Bernard Pass open in winter? / Il Gran San Bernardo è aperto in inverno?",
        "answer": "The summit pass road (2,469 m) is closed in winter due to snow depths exceeding 10 to 15 meters. However, transalpine vehicle travel remains open 365 days a year via the Grand-Saint-Bernard Tunnel (toll road). / La strada del colle è chiusa in inverno, ma il Traforo del Gran San Bernardo è aperto tutto l'anno 24h/24."
      },
      {
        "question": "What is the snow depth on Great St Bernard Pass? / Qual è l'altezza della neve al Gran San Bernardo?",
        "answer": "During the summer opening, the road surface is completely clear of snow. In winter and early spring before clearing, cumulative snowpack frequently exceeds 10 to 15 meters (30 to 50 feet) around the summit. / In estate la strada è sgombra; in inverno gli accumuli nevosi raggiungono i 10-15 metri."
      },
      {
        "question": "Is there a toll for Great St Bernard Pass? / C'è un pedaggio per il Colle del Gran San Bernardo?",
        "answer": "The scenic summit pass road (Route 21 / SS27) is 100% free with no tolls during the summer months. The year-round Grand-Saint-Bernard Tunnel is a toll tunnel operated jointly by Switzerland and Italy (single transit ~CHF 31 / €31 for passenger cars). / La strada panoramica del valico è gratuita in estate; il traforo è invece a pedaggio tutto l'anno."
      },
      {
        "question": "Can I visit the St. Bernard rescue dogs at the Hospice? / Si possono vedere i cani San Bernardo all'Ospizio?",
        "answer": "Yes, during the summer months (from late June to early October), the breeding St. Bernard dogs from the Barry Foundation stay at the historic Hospice du Grand-Saint-Bernard and can be visited daily by tourists. / Sì, i celebri cani San Bernardo della Fondazione Barry sono presenti all'Ospizio ogni estate per le visite turistiche."
      },
      {
        "question": "How do I get directions to Great St Bernard Pass? / Come arrivare al Colle del Gran San Bernardo?",
        "answer": "From Italy, take highway A5 to Aosta, then follow SS27 north through Saint-Rhémy-en-Bosses to the summit. From Switzerland, follow highway A9 to Martigny, then take Route 21 south through Sembrancher and Bourg-Saint-Pierre to the pass. / Accesso dall'Italia tramite Aosta (SS27) o dalla Svizzera tramite Martigny (Route 21)."
      },
      {
        "question": "Are winter tires or snow chains required on Great St Bernard Pass? / Sono obbligatori i pneumatici invernali o le catene?",
        "answer": "Between October 15 and April 15, winter tires (3PMSF) or carrying snow chains is legally mandatory in the Aosta Valley and Swiss Valais. During peak summer when the summit pass is open, no special equipment is required under dry weather. / Dotazioni invernali obbligatorie dal 15 ottobre al 15 aprile in Valle d'Aosta e Vallese."
      }
    ],
    "customSeo": {
      "h1": "Colle del Gran San Bernardo : Stato della Strada, Webcam Live, Meteo & Apertura",
      "title": "Great St Bernard Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Consulta lo stato di apertura in tempo reale del Colle del Gran San Bernardo (SS27 / Route 21), webcam live HD dell'Ospizio, meteo, altezza neve, viabilità e informazioni del Traforo transalpino."
    },
    "searchKeywords": [
      "Great St Bernard Pass opening date",
      "Great St Bernard Pass is open",
      "Great St Bernard Pass road conditions",
      "Great St Bernard Pass road status",
      "Great St Bernard Pass pass status report",
      "when does Great St Bernard Pass open",
      "Great St Bernard Pass closed",
      "Great St Bernard Pass is closed",
      "Great St Bernard Pass is it open today",
      "is Great St Bernard Pass closed today",
      "Great St Bernard Pass webcam",
      "Great St Bernard Pass live webcam",
      "Great St Bernard Pass cameras",
      "Great St Bernard Pass summit camera",
      "when does Great St Bernard Pass close for winter",
      "Great St Bernard Pass map",
      "is Great St Bernard Pass open right now",
      "Great St Bernard Pass weather today",
      "Great St Bernard Pass snow",
      "Great St Bernard Pass snow depth",
      "Great St Bernard Pass snow conditions",
      "Great St Bernard Pass elevation",
      "Great St Bernard Pass open",
      "Great St Bernard Pass when will open",
      "Great St Bernard Pass passes open",
      "Great St Bernard Pass closures today",
      "is Great St Bernard Pass open",
      "Colle del Gran San Bernardo apertura",
      "Colle del Gran San Bernardo webcam",
      "Colle del Gran San Bernardo stato della strada",
      "Traforo del Gran San Bernardo",
      "Ospizio del Gran San Bernardo",
      "Passo del Gran San Bernardo webcam",
      "Col du Grand-Saint-Bernard ouverture"
    ]
  },
  {
    "id": "grimsel-pass",
    "slug": "grimsel-pass",
    "name": "Grimsel Pass",
    "alternateNames": [
      "Grimselpass",
      "Grimsel Pass Switzerland",
      "Col du Grimsel",
      "Passo del Grimsel",
      "Passhöhe Grimsel",
      "Grimsel Hospiz",
      "Hauptstrasse 6"
    ],
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Bern & Valais",
    "highway": "Hauptstrasse 6 (Route 6)",
    "elevationFt": 7100,
    "elevationM": 2164,
    "coordinates": {
      "lat": 46.5614,
      "lng": 8.3375
    },
    "status": "OPEN",
    "statusDetail": "Grimselpass geöffnet für den Sommerverkehr / Open for summer season — Passstrasse trocken und regulär befahrbar",
    "lastUpdated": "5 minutes ago",
    "description": "Der Grimselpass (2.164 m ü. M. / 7.100 ft) ist ein weltberühmter Schweizer Hochgebirgspass an der Hauptstrasse 6, der das Haslital im Berner Oberland (Kanton Bern) mit dem Goms im Oberwallis (Kanton Wallis) verbindet. Geprägt von monumentalen Granitfelswänden, türkisfarbenen Stauseen (Grimselsee, Räterichsbodensee, Totensee) und dem historischen Grimsel Hospiz, bildet der Pass zusammen mit Furka und Susten die legendäre «Grossen Drei» Alpenpass-Runde.",
    "image": "/grimsel-pass.png",
    "weather": {
      "tempF": 55,
      "tempC": 13,
      "condition": "Alpine Sunshine & Clear Skies",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Road Surface Clear & Dry"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "NW",
      "description": "Moderate High-Altitude Alpine Breeze"
    },
    "roadCondition": "Fahrbahn trocken und regulär befahrbar auf der Berner Nordrampe (Innertkirchen–Guttannen–Handegg) sowie auf der Walliser Südrampe (Gletsch–Oberwald). Baustellenverkehr im Bereich der Spitallamm-Staumauer / Grimsel Hospiz beachten.",
    "chainRequirement": "Keine Kettenpflicht im regulären Sommerbetrieb. Bei Kälteeinbrüchen im Früh- oder Spätsommer wird auf der Passhöhe situativ Winterausrüstung (Winterreifen 3PMSF oder Schneeketten) empfohlen.",
    "cameras": [
      {
        "id": "cam-grimsel-hospiz",
        "title": "Grimsel Hospiz & Grimselsee (1.980 m)",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 6 Grimsel Hospiz (1.980 m)",
        "direction": "Rundblick Grimselsee, Spitallamm & Grimsel Hospiz",
        "location": "Grimsel Hospiz (KWO Grimselwelt)",
        "source": "Grimselwelt / Kraftwerke Oberhasli AG (KWO)",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.grimselwelt.ch/de/grimselhotels/grimsel-hospiz"
      },
      {
        "id": "cam-grimsel-summit",
        "title": "Grimselpass Passhöhe & Totensee (2.164 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 6 Passhöhe (2.164 m)",
        "direction": "Blick Passhöhe, Totensee & Walliser Alpen",
        "location": "Passhöhe Totensee (Kantonsgrenze BE/VS)",
        "source": "Tiefbauamt Kanton Bern / Grimselwelt",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.be.ch/strassen"
      },
      {
        "id": "cam-raeterichsboden",
        "title": "Räterichsbodensee Staumauer (1.767 m)",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 6 Räterichsboden (1.767 m)",
        "direction": "Blick auf Räterichsbodensee & Nordrampe Handegg",
        "location": "Räterichsboden Talsperre",
        "source": "KWO Kraftwerke Oberhasli",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.grimselwelt.ch/"
      },
      {
        "id": "cam-gletsch-junction",
        "title": "Gletsch & Furka-Grimsel Abzweigung (1.759 m)",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 6 / Route 19 Kreuzung Gletsch",
        "direction": "Blick auf Gletsch, Rhônequelle & Furkastrasse",
        "location": "Gletsch (Wallis)",
        "source": "Kanton Wallis (SDM) / Dampfbahn Furka-Bergstrecke",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.vs.ch/web/mobilite"
      }
    ],
    "nearbyPasses": [
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass (Furkapass)",
        "country": "Switzerland",
        "state": "Valais & Uri",
        "highway": "Hauptstrasse 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 16
      },
      {
        "id": "great-st-bernard-pass",
        "slug": "great-st-bernard-pass",
        "name": "Great St Bernard Pass",
        "country": "Switzerland / Italy",
        "state": "Valais & Aosta Valley",
        "highway": "Route 21 / SS27",
        "status": "OPEN",
        "elevationFt": 8100,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 135
      },
      {
        "id": "stelvio-pass",
        "slug": "stelvio-pass",
        "name": "Stelvio Pass (Passo dello Stelvio)",
        "country": "Italy",
        "state": "South Tyrol / Lombardy",
        "highway": "SS38",
        "status": "OPEN",
        "elevationFt": 9045,
        "lastUpdated": "10 minutes ago",
        "distanceKm": 240
      },
      {
        "id": "col-du-galibier",
        "slug": "col-du-galibier",
        "name": "Col du Galibier",
        "country": "France",
        "state": "Hautes-Alpes & Savoie",
        "highway": "D902",
        "status": "OPEN",
        "elevationFt": 8668,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 275
      }
    ],
    "overview": {
      "openedYear": 1894,
      "lengthMiles": 23.6,
      "lengthKm": 38.0,
      "annualSnowfallIn": 550,
      "annualSnowfallM": 14.0,
      "summary": "Der Grimselpass (2.164 m ü. M. / 7.100 ft) ist eine der spektakulärsten Passstrassen der Schweizer Alpen. Er überquert die Wasserscheide zwischen Nordsee (Aare/Rhein) und Mittelmeer (Rhône) und verbindet Innertkirchen und Meiringen im Kanton Bern mit Gletsch und Oberwald im Kanton Wallis auf der Hauptstrasse 6. Die 1894 erbaute Kunststrasse führt vorbei an imposanten Wasserkraftanlagen der KWO, kühnen Staumauern und dem gletschergeschliffenen Totensee auf der Passhöhe. Der Pass ist ein internationaler Hotspot für Automobil- und Motorrad-Touren sowie eine ikonische Königsetappe im europäischen Strassenradsport."
    },
    "narrativeSections": [
      {
        "title": "Geographie & Geschichte der Grimsel-Passstrasse",
        "content": "Bereits in der Römerzeit und im Mittelalter diente der Grimselpass als lebenswichtiger Saumweg für den Warenaustausch zwischen dem Berner Oberland und der Lombardei über das Wallis. Käse aus dem Haslital wurde gegen Wein, Reis und Seide aus Italien getauscht. 1894 wurde die moderne Fahrstrasse feierlich eröffnet. Die Passhöhe markiert die europäische Hauptwasserscheide: Das Wasser nördlich des Passes fliesst über die Aare in den Rhein und die Nordsee, während der Totensee und die Südseite über die Rhône ins Mittelmeer entwässern."
      },
      {
        "title": "Wasserkraft, Granitlandschaft & Grimselwelt",
        "content": "Die Grimsel-Region ist eines der bedeutendsten Wasserkraftzentren der Schweiz. Die Kraftwerke Oberhasli AG (KWO) betreiben hier ein komplexes System aus Speicherseen, unterirdischen Turbinenzentralen und Stollen. Derzeit wird am Grimselsee mit dem Ersatzneubau der Spitallamm-Staumauer eines der grössten Bauprojekte der Schweizer Alpen realisiert. Neben der Energiegewinnung ist die Region mit der Gelmerbahn, der Triftbrücke und spektakulären Granitkletterrouten ein weltweites Mekka für Bergsportler."
      }
    ],
    "quickFacts": {
      "state": "Bern & Wallis (Schweiz)",
      "mountainRange": "Berner & Urner Alpen (Schweizer Alpen)",
      "elevationSummary": "2.164 m (7.100 ft) Passhöhe / 1.980 m Grimsel Hospiz",
      "connects": "Innertkirchen & Meiringen (Haslital) mit Gletsch & Oberwald (Goms)",
      "nearestTown": "Gletsch (5,9 km) / Oberwald (16 km) / Innertkirchen (33 km)",
      "roadType": "Hauptstrasse 6 (Kantonsstrasse)",
      "bestTime": "Anfang Juni bis Ende Oktober (regulärer Sommerbetrieb)",
      "highlight": "Grimsel Hospiz, Totensee, KWO-Stauseen, Gelmerbahn, Big 3 Alpenpass-Runde"
    },
    "routeDetails": {
      "distanceKm": 38.0,
      "distanceMiles": 23.6,
      "duration": "45–55 min in auto (2h30–3h30 in bici)",
      "origin": "Innertkirchen (625 m) / Oberwald (1.368 m)",
      "destination": "Oberwald (1.368 m) / Innertkirchen (625 m)",
      "waypoints": [
        "Innertkirchen (625 m)",
        "Guttannen (1.057 m)",
        "Handegg / Gelmerbahn (1.401 m)",
        "Räterichsbodensee (1.767 m)",
        "Grimsel Hospiz / Grimselsee (1.980 m)",
        "Passhöhe Totensee (2.164 m)",
        "Gletsch (1.759 m)",
        "Oberwald (1.368 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Der Grimselpass ist eine der berühmtesten Radsport-Ikonen Europas und Herzstück der legendären Schweizer «Grossen Drei» Alpenpass-Runde (Grimsel, Furka, Susten - 120 km mit 3.750 Hm). Die Nordrampe von Innertkirchen fordert mit 33 km Länge Ausdauer, belohnt aber mit gleichmässigen Steigungen und atemberaubender Kulisse.",
      "approaches": [
        {
          "name": "Nordrampe ab Innertkirchen (Haslital)",
          "origin": "Innertkirchen (625 m)",
          "distanceKm": 33.0,
          "distanceMiles": 20.5,
          "elevationGainM": 1539,
          "elevationGainFt": 5049,
          "avgGradient": "4.7% (8.5% ab Handegg)",
          "maxGradient": "11.0%",
          "hairpins": 24,
          "description": "Langgezogener Klassiker durch das Haslital über Guttannen, Handegg, Räterichsboden und Grimsel Hospiz bis zum Totensee auf der Passhöhe."
        },
        {
          "name": "Südrampe ab Oberwald / Gletsch (Wallis)",
          "origin": "Oberwald (1.368 m) / Gletsch (1.759 m)",
          "distanceKm": 16.0,
          "distanceMiles": 9.9,
          "elevationGainM": 796,
          "elevationGainFt": 2611,
          "avgGradient": "6.5% (8.0% ab Gletsch)",
          "maxGradient": "10.0%",
          "hairpins": 12,
          "description": "Spektakuläre Kehrenstaffelung ab Gletsch mit atemberaubendem Panorama auf den Rhônegletscher und die Serpentinen des Furkapasses."
        },
        {
          "name": "Die «Grossen Drei» Alpenpass-Runde (Grimsel - Furka - Susten)",
          "origin": "Innertkirchen / Meiringen",
          "distanceKm": 120.0,
          "distanceMiles": 74.5,
          "elevationGainM": 3750,
          "elevationGainFt": 12303,
          "avgGradient": "7.5%",
          "maxGradient": "12.0%",
          "hairpins": 60,
          "description": "Eine der anspruchsvollsten und spektakulärsten Eintages-Rennradtouren der Welt über drei Schweizer 2000er-Alpenpässe."
        }
      ],
      "bestSeason": "Ende Juni bis Ende September (beste Strassenbedingungen und angenehme Bergsommer-Temperaturen)",
      "safetyTips": [
        "Vorder- und Rücklicht zwingend erforderlich für die Lawinenschutzgalerien auf der Nordrampe.",
        "Winddichte Weste und Langfingerhandschuhe für die 33 km lange Abfahrt nach Innertkirchen einpacken.",
        "Bei Abfahrten auf Rollsplitt und Postautos in Kurven achten.",
        "Ausreichend Trinkwasser mitführen – Wasserstellen gibt es in Guttannen, Handegg und auf der Passhöhe."
      ]
    },
    "drivingInfo": {
      "summary": "Die Grimsel-Passstrasse (Hauptstrasse 6) ist eine hervorragend ausgebaute Schweizer Hochgebirgsstrasse mit breiter zweispuriger Fahrbahn, erstklassigem Asphaltbelag und modernen Lawinengalerien.",
      "characteristics": [
        "Vollständig asphaltierte, 2-spurige Gebirgsstrasse (Hauptstrasse 6) ohne Mautpflicht.",
        "Maximales zulässiges Fahrzeuggesamtgewicht: 18 Tonnen auf der gesamten Strecke.",
        "Gleichmässige Steigungen zwischen 6% und 10%, flüssig befahrbar für PKW, Motorräder und Wohnmobile.",
        "Herrliche Aussichtspunkte an den KWO-Stauseen Räterichsboden, Grimselsee und Totensee."
      ],
      "switchbacksCount": "Rund 36 Kehren zwischen Innertkirchen, Grimsel Hospiz, Passhöhe und Gletsch",
      "safetyAndEtiquette": [
        "Bei Bergabfahrten konsequent die Motorbremse nutzen, um ein Überhitzen der Bremsen zu verhindern.",
        "Den gelben Schweizer Postautos bei Ertönen des Dreiklanghorns an engen Stellen stets Vortritt gewähren.",
        "Geschwindigkeitsbeschränkungen in den Baustellenbereichen der Spitallamm-Staumauer (40–60 km/h) einhalten.",
        "Beim Überholen von Radfahrern mindestens 1,5 Meter Seitenabstand einhalten."
      ],
      "motorcycleTips": [
        "Ein Paradies für Motorradfahrer mit griffigem Asphalt und flüssigen Kurvenkombinationen.",
        "Beliebter Motorrad-Treffpunkt auf der Passhöhe beim Hotel Grimsel Passhöhe am Totensee."
      ]
    },
    "distancesTable": [
      {
        "location": "Innertkirchen (Bern / Haslital)",
        "distance": "33 km (20.5 Meilen)",
        "route": "Hauptstrasse 6 Nord",
        "notes": "Ausgangspunkt der Nordrampe und Kreuzung zum Sustenpass"
      },
      {
        "location": "Meiringen (Bern)",
        "distance": "38 km (23.6 Meilen)",
        "route": "Hauptstrasse 6 Nord",
        "notes": "Berner Tourismuszentrum, bekannt für die Aareschlucht und Reichenbachfälle"
      },
      {
        "location": "Gletsch (Wallis / Obergoms)",
        "distance": "5.9 km (3.7 Meilen)",
        "route": "Hauptstrasse 6 Süd",
        "notes": "Historische Weggabelung zum Furkapass (Route 19)"
      },
      {
        "location": "Oberwald (Wallis / Goms)",
        "distance": "16 km (9.9 Meilen)",
        "route": "Hauptstrasse 19 Südwest",
        "notes": "Verladestation des Furka-Autoverladetunnels (MGB)"
      },
      {
        "location": "Interlaken (Bern)",
        "distance": "65 km (40.4 Meilen)",
        "route": "A8 & Hauptstrasse 6",
        "notes": "Zentraler Tourismusknotenpunkt im Berner Oberland"
      },
      {
        "location": "Brig (Wallis)",
        "distance": "55 km (34.2 Meilen)",
        "route": "Hauptstrasse 19 Südwest",
        "notes": "Hauptort des Oberwallis am Simplonpass"
      },
      {
        "location": "Andermatt (Uri via Furkapass)",
        "distance": "38 km (23.6 Meilen)",
        "route": "Hauptstrasse 19 Ost",
        "notes": "Zentralschweizer Verkehrskreuz am Gotthardmassiv"
      },
      {
        "location": "Luzern (Zentralschweiz)",
        "distance": "90 km (56 Meilen)",
        "route": "A8 über Brünigpass",
        "notes": "Kulturstadt am Vierwaldstättersee"
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Ende Oktober / Anfang November (mit den ersten starken Schneefällen)",
      "typicalReopening": "Anfang Juni (nach den Fräsarbeiten des Tiefbauamts Bern und Wallis)",
      "description": "Die Grimsel-Passstrasse (2.164 m) ist von November bis Ende Mai wegen massiver Schneelagen von bis zu 8 Metern und akuter Lawinengefahr gesperrt. Im Winter erfolgt der Fahrzeugtransit zwischen Berner Oberland und Wallis über den BLS-Autoverlad Lötschberg (Kandersteg–Goppenstein) oder den MGB-Autoverlad Furka (Realp–Oberwald)."
    },
    "forecast": [
      {
        "day": "Heute",
        "condition": "Sonnig mit leichten Quellwolken",
        "tempHighF": 58,
        "tempLowF": 40,
        "icon": "sun"
      },
      {
        "day": "Morgen",
        "condition": "Überwiegend heiter",
        "tempHighF": 60,
        "tempLowF": 42,
        "icon": "sun"
      },
      {
        "day": "Übermorgen",
        "condition": "Leichte Bewölkung",
        "tempHighF": 56,
        "tempLowF": 38,
        "icon": "cloud-sun"
      },
      {
        "day": "Tag 4",
        "condition": "Bergsonne & Weitsicht",
        "tempHighF": 59,
        "tempLowF": 41,
        "icon": "sun"
      },
      {
        "day": "Tag 5",
        "condition": "Heiter bis wolkig",
        "tempHighF": 57,
        "tempLowF": 39,
        "icon": "cloud-sun"
      }
    ],
    "dataSources": [
      {
        "name": "Tiefbauamt des Kantons Bern (TBA)",
        "type": "Offizieller Strassenzustand Kanton Bern",
        "url": "https://www.be.ch/strassen"
      },
      {
        "name": "Kanton Wallis – Dienststelle für Mobilität (SDM)",
        "type": "Offizielle Strassenzustände Kanton Wallis",
        "url": "https://www.vs.ch/web/mobilite"
      },
      {
        "name": "Grimselwelt / Kraftwerke Oberhasli AG (KWO)",
        "type": "Live Webcams, Staumauern & Grimsel Hospiz",
        "url": "https://www.grimselwelt.ch/"
      },
      {
        "name": "Touring Club Schweiz (TCS)",
        "type": "Schweizer Verkehrsinformationen & Pässezustand",
        "url": "https://www.tcs.ch/de/tools/verkehrslage-baustellen/alpenpaesse.php"
      },
      {
        "name": "MeteoSchweiz – Wetter & Bergprognosen",
        "type": "Hochgebirgs-Wetterbericht & Schneehöhen",
        "url": "https://www.meteoswiss.admin.ch/"
      }
    ],
    "faqs": [
      {
        "question": "What is the Grimsel Pass opening date? / Wann öffnet der Grimselpass?",
        "answer": "Grimsel Pass typically opens for the summer season in early June (between June 3 and June 11) after heavy rotary snowplow clearing by Canton Bern and Valais road crews. The pass is currently OPEN for the regular summer season. / Der Grimselpass öffnet in der Regel Anfang Juni nach den Schneeräumarbeiten und ist aktuell für den Sommerverkehr geöffnet."
      },
      {
        "question": "Is Grimsel Pass open right now, and is it open today? / Ist der Grimselpass heute geöffnet?",
        "answer": "Yes, Grimsel Pass (Hauptstrasse 6) is currently OPEN for all traffic. The road surface is dry paved asphalt in pristine condition. Live road status from Tiefbauamt Bern and SDM Valais is updated 24/7 on LivePassWatch. / Ja, der Grimselpass ist aktuell vollständig geöffnet und regulär befahrbar."
      },
      {
        "question": "What are the current Grimsel Pass road conditions and pass status report? / Wie ist der Strassenzustand am Grimselpass?",
        "answer": "Road conditions across the entire 38 km corridor between Innertkirchen and Gletsch/Oberwald are clear, dry, and in excellent summer driving condition. Drivers should observe posted speed limits near the Spitallamm dam construction zone. / Die Passstrasse ist trocken und in hervorragendem Zustand."
      },
      {
        "question": "Where can I view the Grimsel Pass live webcam, cameras, and summit camera? / Wo finde ich die Grimselpass Live-Webcams?",
        "answer": "LivePassWatch provides real-time live webcams of Grimsel Pass, including the Grimsel Hospiz & Grimselsee 360° Roundshot camera (1,980 m), the Grimselpass Summit Totensee camera (2,164 m), the Räterichsboden Dam camera (1,767 m), and the Gletsch Furka-Grimsel junction camera (1,759 m)."
      },
      {
        "question": "What is the elevation and altitude of Grimsel Pass? / Wie hoch ist der Grimselpass?",
        "answer": "The official summit elevation of Grimsel Pass (Passhöhe) is 2,164 meters (7,100 feet) above sea level, located on the border between Canton Bern and Canton Valais beside the alpine Totensee lake. / Die Passhöhe des Grimselpasses liegt auf 2.164 m ü. M. (7.100 ft)."
      },
      {
        "question": "When does Grimsel Pass close for winter, and is it open in winter? / Wann ist die Wintersperre am Grimselpass?",
        "answer": "Grimsel Pass is closed in winter from late October / early November until late May due to heavy snow accumulation of up to 8 meters and severe avalanche hazards. Winter vehicle transit between Bernese Oberland and Valais operates via the BLS Lötschberg car shuttle train (Kandersteg–Goppenstein) or MGB Furka car train (Realp–Oberwald)."
      },
      {
        "question": "What is the snow depth and snow conditions on Grimsel Pass? / Wie ist die Schneelage am Grimselpass?",
        "answer": "During the summer season, the road surface is 100% free of snow. In winter, snowpack across the granite crest reaches 6 to 8 meters (20 to 26 feet) before snowplow clearing in May. / Im Sommer ist die Fahrbahn schneefrei; im Winter erreichen die Schneehöhen 6 bis 8 Meter."
      },
      {
        "question": "Is Grimsel Pass a toll road or do I need a Swiss motorway vignette? / Kostet der Grimselpass Maut?",
        "answer": "No! Grimsel Pass (Hauptstrasse 6) is a 100% toll-free public cantonal highway. No toll charges and no Swiss motorway vignette are required to drive over Grimsel Pass. You only need a vignette if using Swiss national motorways (Autobahnen like A8 or A9). / Die Grimsel-Passstrasse ist 100% mautfrei und ohne Autobahnvignette befahrbar."
      },
      {
        "question": "How do I get driving directions to Grimsel Pass? / Wie lautet die Anfahrtsbeschreibung zum Grimselpass?",
        "answer": "From Bern/Interlaken, take highway A8 past Meiringen to Innertkirchen, then ascend south on Route 6 via Guttannen and Handegg to the 2,164 m summit. From Valais/Brig, follow Route 19 through Goms to Oberwald and Gletsch, then take Route 6 north over the pass."
      },
      {
        "question": "Can I cycle Grimsel Pass as part of the Swiss Big 3 loop? / Kann man den Grimselpass mit dem Rennrad befahren?",
        "answer": "Yes! Grimsel Pass is one of the world's greatest road cycling climbs and forms the classic Swiss 'Big 3' pass loop (Grimsel, Furka, Susten - 120 km with 3,750 m elevation gain). The north climb from Innertkirchen covers 33 km with 1,540 m gain at a steady 4.7% grade."
      }
    ],
    "customSeo": {
      "h1": "Grimselpass : Strassenzustand, Live Webcam, Wetter & Öffnungszeiten",
      "title": "Grimsel Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Prüfen Sie den aktuellen Strassenzustand und Öffnungsstatus des Grimselpasses (Hauptstrasse 6), Live-Webcams am Grimsel Hospiz und Totensee, Wetter, Schneehöhen und Wintersperre-Infos."
    },
    "searchKeywords": [
      "Grimsel Pass opening date",
      "Grimsel Pass is open",
      "Grimsel Pass road conditions",
      "Grimsel Pass road status",
      "Grimsel Pass pass status report",
      "when does Grimsel Pass open",
      "Grimsel Pass closed",
      "Grimsel Pass is closed",
      "Grimsel Pass is it open today",
      "is Grimsel Pass closed today",
      "Grimsel Pass webcam",
      "Grimsel Pass live webcam",
      "Grimsel Pass cameras",
      "Grimsel Pass summit camera",
      "is Grimsel Pass open right now",
      "Grimsel Pass weather today",
      "Grimsel Pass snow",
      "Grimsel Pass snow depth",
      "Grimsel Pass snow conditions",
      "Grimsel Pass elevation",
      "Grimsel Pass open",
      "Grimsel Pass when will open",
      "Grimsel Pass passes open",
      "Grimsel Pass closures today",
      "is Grimsel Pass open",
      "is Grimsel Pass open in winter",
      "Grimsel Pass weather",
      "Grimsel Pass directions",
      "Grimsel Pass closing date",
      "Grimselpass Öffnungszeiten",
      "Grimselpass offen",
      "Grimselpass Strassenzustand",
      "Grimselpass Webcam live",
      "Grimselpass Wintersperre",
      "Grimselpass Schneebericht",
      "Grimselpass Passhöhe Höhe",
      "Grimselpass Wetter heute",
      "Grimsel Hospiz Webcam",
      "Totensee Grimselpass"
    ]
  },
  {
    "id": "susten-pass",
    "slug": "susten-pass",
    "name": "Susten Pass",
    "alternateNames": [
      "Sustenpass",
      "Susten Pass Switzerland",
      "Sustenpass Passhöhe",
      "Hauptstrasse 11 Susten",
      "Route 11 Sustenpass",
      "Col du Susten",
      "Passo del Susten",
      "Sustentunnel"
    ],
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Bern & Uri",
    "highway": "Hauptstrasse 11 (Route 11)",
    "elevationFt": 7297,
    "elevationM": 2224,
    "coordinates": {
      "lat": 46.7292,
      "lng": 8.4489
    },
    "status": "OPEN",
    "statusDetail": "Sustenpass für den Sommerverkehr geöffnet / Open for summer season — Passstrasse trocken und regulär befahrbar",
    "lastUpdated": "5 minutes ago",
    "description": "Der Sustenpass (2.224 m ü. M. / 7.297 ft) ist eine der landschaftlich grossartigsten und fahrtechnisch modernsten Hochgebirgsstrassen der Schweizer Alpen. Auf der Hauptstrasse 11 verbindet er das Haslital im Berner Oberland (Innertkirchen / Meiringen) mit dem Meiental und Reusstal im Kanton Uri (Wassen / Gotthard-Achse). Bekannt für seine kühnen Steinbrücken, den Scheiteltunnel und den grandiosen Blick auf den Steingletscher, bildet der Sustenpass zusammen mit Grimsel und Furka das weltberühmte Schweizer «Dreipässe-Erlebnis».",
    "image": "/susten-pass.png",
    "weather": {
      "tempF": 53,
      "tempC": 12,
      "condition": "Alpine Sunshine & Clear Skies",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Road Surface Clear & Dry"
    },
    "wind": {
      "speedKmh": 12,
      "speedMph": 7,
      "direction": "NW",
      "description": "Gentle Mountain Breeze"
    },
    "roadCondition": "Fahrbahn trocken, eisfrei und in hervorragendem Zustand auf der Berner Westrampe (Innertkirchen–Gadmen–Steingletscher) sowie auf der Urner Ostrasse (Wassen–Meiental–Sustentunnel). Regulärer Gegenverkehr, keine Einschränkungen.",
    "chainRequirement": "Keine Kettenpflicht oder Einschränkungen im regulären Sommerbetrieb. Bei plötzlichen Kälteeinbrüchen im Hochgebirge wird Winterausrüstung (Winterreifen 3PMSF oder Schneeketten im Kofferraum) empfohlen.",
    "cameras": [
      {
        "id": "cam-susten-hasliberg",
        "title": "Hasliberg Alpen Tower 360° Panorama (2.250 m)",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Hasliberg Alpen Tower (2.250 m)",
        "direction": "360° Rundblick Berner & Urner Alpen / Susten-Massiv",
        "location": "Alpen Tower, Meiringen-Hasliberg",
        "source": "Bergbahnen Meiringen-Hasliberg / Webcam Galore",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.meiringen-hasliberg.ch/"
      },
      {
        "id": "cam-susten-steingletscher",
        "title": "Sustenpass Steingletscher & Scheiteltunnel (2.224 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 11 Scheiteltunnel (2.224 m)",
        "direction": "Blick auf Steingletscher, Steinsee & Susten-Scheiteltunnel",
        "location": "Passhöhe Steingletscher (Kantonsgrenze BE/UR)",
        "source": "Tiefbauamt Kanton Bern / Alpin Center Sustenpass",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.sustenpass.ch/"
      },
      {
        "id": "cam-susten-gadmen",
        "title": "Gadmen & Triftbahn – Grimselwelt (1.750 m)",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 11 Gadmertal",
        "direction": "Blick Triftgletscher & Gadmertal Westrampe",
        "location": "Gadmen / Triftbahn",
        "source": "Grimselwelt / KWO",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.grimselwelt.ch/"
      },
      {
        "id": "cam-susten-wassen",
        "title": "Wassen & Meiental – Gotthardrampe (1.400 m)",
        "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "milepost": "Route 11 / A2 Wassen",
        "direction": "Blick Meiental Ostrampe & Wassen",
        "location": "Meiental / Wassen (Uri)",
        "source": "Baudirektion Kanton Uri / TCS",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.ur.ch/"
      }
    ],
    "nearbyPasses": [
      {
        "id": "grimsel-pass",
        "slug": "grimsel-pass",
        "name": "Grimsel Pass (Grimselpass)",
        "country": "Switzerland",
        "state": "Bern & Valais",
        "highway": "Hauptstrasse 6",
        "status": "OPEN",
        "elevationFt": 7100,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 33
      },
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass (Furkapass)",
        "country": "Switzerland",
        "state": "Valais & Uri",
        "highway": "Hauptstrasse 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 38
      },
      {
        "id": "gotthard-pass",
        "slug": "gotthard-pass",
        "name": "Gotthard Pass (Passo del San Gottardo)",
        "country": "Switzerland",
        "state": "Uri & Ticino",
        "highway": "Hauptstrasse 2 / Tremola",
        "status": "OPEN",
        "elevationFt": 6909,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 30
      },
      {
        "id": "great-st-bernard-pass",
        "slug": "great-st-bernard-pass",
        "name": "Great St Bernard Pass",
        "country": "Switzerland / Italy",
        "state": "Valais & Aosta Valley",
        "highway": "Route 21 / SS27",
        "status": "OPEN",
        "elevationFt": 8100,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 165
      }
    ],
    "overview": {
      "openedYear": 1945,
      "lengthMiles": 28.5,
      "lengthKm": 45.9,
      "annualSnowfallIn": 580,
      "annualSnowfallM": 14.7,
      "summary": "Der Sustenpass (2.224 m ü. M. / 7.297 ft) gilt als Meisterwerk der Schweizer Strassenbaukunst. Erbaut zwischen 1938 und 1945 als erste moderne Alpenstrasse, die primär für den Tourismus und die Landesverteidigung konzipiert wurde, verbindet er Innertkirchen im Berner Haslital mit Wassen im Urner Reusstal auf der Hauptstrasse 11. Die 45,9 km lange Route bietet weite, geschwungene Kurven, kühne Steinbogenbrücken, den 300 Meter langen Scheiteltunnel und unvergessliche Aussichten auf den imposanten Steingletscher und die Sustenhörner. Zusammen mit Grimsel und Furka bildet er das legendäre Schweizer «Dreipässe-Erlebnis»."
    },
    "narrativeSections": [
      {
        "title": "Architektur & Geschichte der Susten-Passstrasse",
        "content": "Bereits im Mittelalter überquerten Händler und Söldner den Sustenpass auf Saumpfaden. In den Kriegsjahren 1938 bis 1945 errichteten Schweizer Ingenieure und Mineure unter Leitung des Berner Oberingenieurs Paul Güdel die modernste Gebirgsstrasse Europas. Mit sanften Steigungen (selten über 9%), grosszügigen Kurvenradien, 25 kunstvoll gemauerten Natursteinbrücken und dem 300 Meter langen Scheiteltunnel auf 2.224 m wurde der Sustenpass zum weltweiten Vorbild für harmonisch in die Hochgebirgslandschaft integrierte Passstrassen."
      },
      {
        "title": "Der Steingletscher, das Meiental & die Dreipässe-Runde",
        "content": "Auf der Berner Westrampe passiert die Strasse das Hotel Steingletscher und eröffnet einen atemberaubenden Blick auf den zerklüfteten Steingletscher und den smaragdgrünen Steinsee. Nach Durchquerung des Scheiteltunnels führt die Urner Ostrasse spektakulär durch das wilde Meiental hinunter nach Wassen mit Anschluss an die Gotthard-Achse (A2). Zusammen mit dem Grimselpass und dem Furkapass formt der Sustenpass die weltberühmte 120 km lange Dreipässe-Rundfahrt."
      }
    ],
    "quickFacts": {
      "state": "Bern & Uri (Schweiz)",
      "mountainRange": "Urner & Berner Alpen (Schweizer Alpen)",
      "elevationSummary": "2.224 m (7.297 ft) Scheiteltunnel / 2.260 m Passkamm",
      "connects": "Innertkirchen & Meiringen (Haslital) mit Wassen & Andermatt (Uri)",
      "nearestTown": "Innertkirchen (27 km) / Wassen (18 km) / Meiringen (33 km)",
      "roadType": "Hauptstrasse 11 (Kantonsstrasse Bern / Uri)",
      "bestTime": "Mitte Juni bis Ende Oktober (regulärer Sommerbetrieb)",
      "highlight": "Steingletscher, Susten-Scheiteltunnel, kühne Steinbrücken, Dreipässe-Runde"
    },
    "routeDetails": {
      "distanceKm": 45.9,
      "distanceMiles": 28.5,
      "duration": "45–55 min mit dem Auto (2h45–3h45 mit dem Rennrad)",
      "origin": "Innertkirchen (625 m) / Wassen (916 m)",
      "destination": "Wassen (916 m) / Innertkirchen (625 m)",
      "waypoints": [
        "Innertkirchen (625 m)",
        "Nessental (930 m)",
        "Gadmen (1.205 m)",
        "Fuhren / Triftbahn (1.150 m)",
        "Steingletscher / Hotel Steingletscher (1.865 m)",
        "Scheiteltunnel Sustenpass (2.224 m)",
        "Sustenbrüggli (1.907 m)",
        "Meiental / Gufer (1.450 m)",
        "Färnigen (1.455 m)",
        "Wassen (916 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Der Sustenpass gilt unter Rennradfahrern als absoluter Traum-Alpenpass. Die erstklassig trassierte Strasse, gleichmässige Steigungsprozente von 6–9% und der gletschergesäumte Scheiteltunnel machen jede Befahrung zu einem Fest für Radsportler.",
      "approaches": [
        {
          "name": "Westrampe ab Innertkirchen (Haslital)",
          "origin": "Innertkirchen (625 m)",
          "distanceKm": 27.5,
          "distanceMiles": 17.1,
          "elevationGainM": 1599,
          "elevationGainFt": 5246,
          "avgGradient": "5.8% (8.5% ab Steingletscher)",
          "maxGradient": "10.0%",
          "hairpins": 18,
          "description": "Lange, wunderschöne Auffahrt durch das Gadmertal. Bis Gadmen sanft ansteigend, danach kühn in weiten Schleifen über den Steingletscher bis zum Scheiteltunnel."
        },
        {
          "name": "Ostrasse ab Wassen (Meiental)",
          "origin": "Wassen (916 m)",
          "distanceKm": 17.5,
          "distanceMiles": 10.9,
          "elevationGainM": 1308,
          "elevationGainFt": 4291,
          "avgGradient": "7.5%",
          "maxGradient": "10.0%",
          "hairpins": 14,
          "description": "Kompaktere und steilere Auffahrt durch das tief eingeschnittene Meiental mit stetigen 7–9% Steigung vorbei am Sustenbrüggli zum Ostportal."
        },
        {
          "name": "Die «Grossen Drei» Alpenpass-Runde (Susten - Grimsel - Furka)",
          "origin": "Innertkirchen / Meiringen / Andermatt",
          "distanceKm": 120.0,
          "distanceMiles": 74.5,
          "elevationGainM": 3750,
          "elevationGainFt": 12303,
          "avgGradient": "7.2%",
          "maxGradient": "11.0%",
          "hairpins": 60,
          "description": "Die weltberühmte 120 km Königstour der Schweizer Alpen über Sustenpass, Grimselpass und Furkapass."
        }
      ],
      "bestSeason": "Mitte Juni bis Anfang Oktober (beste Bedingungen und angenehme Sommer-Temperaturen)",
      "safetyTips": [
        "Vorder- und Rücklicht am Fahrrad für den 300 m langen Scheiteltunnel und die Galerien obligatorisch.",
        "Winddichte Jacke und Handschuhe für die lange Abfahrt nach Innertkirchen oder Wassen einpacken.",
        "Auf Postautos und Motorräder in den Kurven achten – Vortrittsregeln beachten.",
        "Wasserbrunnen stehen in Gadmen, beim Hotel Steingletscher und in Färnigen zur Verfügung."
      ]
    },
    "drivingInfo": {
      "summary": "Die Susten-Passstrasse (Hauptstrasse 11) ist eine hochmoderne, zweispurige Schweizer Gebirgsstrasse mit perfektem Asphalt, breiter Trasse und grossartigen Rastmöglichkeiten.",
      "characteristics": [
        "Vollständig asphaltierte, 2-spurige Gebirgsstrasse (Hauptstrasse 11) ohne Mautgebühr.",
        "300 m langer Scheiteltunnel auf 2.224 m ü. M. mit ampelfreiem 2-Spur-Verkehr.",
        "Gleichmässige Steigungen zwischen 6% und 9%, ideal für PKW, Wohnmobile und Motorräder.",
        "Grosse Parkplätze beim Hotel Steingletscher und an beiden Portalen des Scheiteltunnels."
      ],
      "switchbacksCount": "32 Kehren zwischen Innertkirchen, Steingletscher, Scheiteltunnel und Wassen",
      "safetyAndEtiquette": [
        "Bei langen Bergabfahrten die Motorbremse (niedrige Gänge) nutzen, um Bremsenüberhitzung zu vermeiden.",
        "Den gelben Schweizer Postautos bei Ertönen des Dreiklanghorns an unübersichtlichen Stellen stets Vortritt gewähren.",
        "Beim Überholen von Radfahrern mindestens 1,5 Meter Seitenabstand einhalten.",
        "Nur auf ausgewiesenen Parkflächen halten und Aussichtspunkte rücksichtsvoll nutzen."
      ],
      "motorcycleTips": [
        "Einer der beliebtesten Motorradpässe Europas mit weiten, rhythmischen Kurven und makellosem Asphalt.",
        "Beliebter Biker-Treffpunkt am Scheiteltunnel-Parkplatz und beim Alpin Center Steingletscher."
      ]
    },
    "distancesTable": [
      {
        "location": "Innertkirchen (Bern / Haslital)",
        "distance": "27.5 km (17.1 Meilen)",
        "route": "Hauptstrasse 11 West",
        "notes": "Talort der Westrampe & Anschluss an den Grimselpass"
      },
      {
        "location": "Wassen (Uri / Reusstal)",
        "distance": "17.5 km (10.9 Meilen)",
        "route": "Hauptstrasse 11 Ost",
        "notes": "Talort der Ostrampe & Anschluss an Autobahn A2 (Gotthard)"
      },
      {
        "location": "Meiringen (Berner Oberland)",
        "distance": "33 km (20.5 Meilen)",
        "route": "Hauptstrasse 11 & Route 6",
        "notes": "Reichenbachfall, Aareschlucht & Zentralbahn"
      },
      {
        "location": "Andermatt (Uri / Urserntal)",
        "distance": "28 km (17.4 Meilen)",
        "route": "Hauptstrasse 11 & Route 2",
        "notes": "Knotenpunkt Gotthard, Oberalp und Furka"
      },
      {
        "location": "Interlaken (Bern)",
        "distance": "60 km (37.3 Meilen)",
        "route": "A8 & Hauptstrasse 11",
        "notes": "Zentrum der Jungfrau-Region"
      },
      {
        "location": "Luzern (Vierwaldstättersee)",
        "distance": "80 km (49.7 Meilen)",
        "route": "A2 & Hauptstrasse 11",
        "notes": "Zentralschweizer Kultur- und Wirtschaftszentrum"
      },
      {
        "location": "Zürich (Flughafen)",
        "distance": "130 km (80.8 Meilen)",
        "route": "A4 / A2 & Hauptstrasse 11",
        "notes": "Grösste Schweizer Metropole"
      },
      {
        "location": "Bern (Bundeshauptstadt)",
        "distance": "115 km (71.5 Meilen)",
        "route": "A6 / A8 & Hauptstrasse 11",
        "notes": "UNESCO-Weltkulturerbe Altstadt"
      }
    ],
    "isSeasonal": true,
    "seasonalClosureInfo": {
      "typicalClosure": "Ende Oktober / Anfang November (je nach erstem starkem Schneefall)",
      "typicalReopening": "Mitte bis Ende Juni (nach Fräsarbeiten des TBA Bern und Tiefbauamt Uri)",
      "description": "Der Sustenpass ist im Winter von November bis Mitte Juni wegen extremer Schneemengen (bis zu 10 Meter) und hoher Lawinengefahr gesperrt. Im Mai und Juni räumen Hochleistungs-Schneefräsen beider Kantone wochenlang den Strassenkorridor frei, um eine sichere sommerliche Wiedereröffnung zu gewährleisten."
    },
    "forecast": [
      {
        "day": "Heute",
        "condition": "Sonnig & heiter",
        "tempHighF": 55,
        "tempLowF": 39,
        "icon": "sun"
      },
      {
        "day": "Morgen",
        "condition": "Überwiegend sonnig",
        "tempHighF": 57,
        "tempLowF": 41,
        "icon": "sun"
      },
      {
        "day": "Übermorgen",
        "condition": "Leichte Quellbewölkung",
        "tempHighF": 53,
        "tempLowF": 37,
        "icon": "cloud-sun"
      },
      {
        "day": "Tag 4",
        "condition": "Bergwetter klar & sichtstark",
        "tempHighF": 56,
        "tempLowF": 40,
        "icon": "sun"
      },
      {
        "day": "Tag 5",
        "condition": "Heiter bis wolkig",
        "tempHighF": 54,
        "tempLowF": 38,
        "icon": "cloud-sun"
      }
    ],
    "dataSources": [
      {
        "name": "Tiefbauamt des Kantons Bern (TBA)",
        "type": "Offizieller Strassenzustand Kanton Bern",
        "url": "https://www.be.ch/strassen"
      },
      {
        "name": "Baudirektion Kanton Uri – Tiefbauamt",
        "type": "Offizielle Strassenzustände Kanton Uri",
        "url": "https://www.ur.ch/"
      },
      {
        "name": "Touring Club Schweiz (TCS)",
        "type": "Schweizer Pässezustand & Verkehrsinformationen",
        "url": "https://www.tcs.ch/de/tools/verkehrslage-baustellen/alpenpaesse.php"
      },
      {
        "name": "AlpenPässe.de / Alpen-Pässe.ch",
        "type": "Zentrales Schweizer Passportal & Öffnungszeiten",
        "url": "https://www.alpen-paesse.ch/"
      },
      {
        "name": "MeteoSchweiz – Wetter & Schneehöhen",
        "type": "Hochgebirgs-Wetterbericht & Bergprognosen",
        "url": "https://www.meteoswiss.admin.ch/"
      },
      {
        "name": "LivePassWatch Verification Methodology",
        "type": "Transparenter Verifizierungs- und Datenstandard",
        "url": "/methodology"
      }
    ],
    "faqs": [
      {
        "question": "What is the Susten Pass opening date? / Wann öffnet der Sustenpass?",
        "answer": "Susten Pass typically opens for the summer season in mid-to-late June (around June 12 to June 22) after rotary snow clearing by Canton Bern and Canton Uri road departments. In 2026, the pass opened for the summer season and is currently OPEN to all traffic. / Der Sustenpass öffnet in der Regel Mitte bis Ende Juni nach den Schneeräumarbeiten und ist aktuell für den regulären Sommerverkehr geöffnet."
      },
      {
        "question": "Is Susten Pass open today and is Susten Pass open right now? / Ist der Sustenpass heute geöffnet?",
        "answer": "Yes, Susten Pass (Hauptstrasse 11) is currently OPEN and accessible to cars, motorcycles, and bicycles between Innertkirchen (Bern) and Wassen (Uri). / Ja, der Sustenpass ist aktuell vollständig geöffnet und regulär befahrbar."
      },
      {
        "question": "What are the current Susten Pass road conditions and pass status report? / Wie ist der Strassenzustand am Sustenpass?",
        "answer": "Road conditions across the entire 45.9 km corridor between Innertkirchen and Wassen are clear, dry, and in excellent summer driving condition with no traffic restrictions. / Die Passstrasse ist trocken, eisfrei und in hervorragendem Zustand auf beiden Rampen."
      },
      {
        "question": "What is the Susten Pass road status? / Welcher Strassenstatus gilt für den Sustenpass?",
        "answer": "The official road status from Tiefbauamt Bern and Baudirektion Uri is OPEN with normal summer driving conditions across the Scheiteltunnel. / Der offizielle Status lautet OFFEN mit regulärem Sommerbetrieb."
      },
      {
        "question": "When does Susten Pass open? / Wann geht der Sustenpass auf?",
        "answer": "Susten Pass opens every year in early-to-mid June once snowplow crews clear the high-altitude pass road. It remains open through the summer and autumn. / Der Pass öffnet alljährlich im Juni, sobald die Schneeräumung beendet ist."
      },
      {
        "question": "Is Susten Pass closed today? / Ist der Sustenpass heute gesperrt?",
        "answer": "No, Susten Pass is NOT closed today; it is open for through traffic between Bernese Oberland and Central Switzerland. / Nein, der Sustenpass ist heute nicht gesperrt, sondern regulär befahrbar."
      },
      {
        "question": "Where can I view the Susten Pass live webcam, cameras, and summit camera? / Wo finde ich die Sustenpass Live-Webcams?",
        "answer": "LivePassWatch provides real-time live webcam feeds of Susten Pass, including the Hasliberg Alpen Tower 360° Panorama (2,250 m), the Sustenpass Steingletscher & Scheiteltunnel camera (2,224 m), the Gadmen Triftbahn camera (1,750 m), and the Wassen / Meiental camera."
      },
      {
        "question": "When does Susten Pass close for winter, and is Susten Pass open in winter? / Wann schliesst der Sustenpass für den Winter?",
        "answer": "Susten Pass closes for winter in late October or early November due to massive snow accumulation of up to 10 meters and avalanche hazards. It is NOT open in winter. / Der Sustenpass schliesst Ende Oktober oder Anfang November und bleibt über die Wintermonate gesperrt."
      },
      {
        "question": "What is the Susten Pass elevation and how high is Susten Pass? / Wie hoch ist der Sustenpass?",
        "answer": "The summit elevation of Susten Pass (Scheiteltunnel) is 2,224 meters (7,297 feet) above sea level, with the natural mountain crest reaching 2,260 meters (7,415 feet). / Die Passhöhe am Susten-Scheiteltunnel liegt auf 2.224 m ü. M. (7.297 ft)."
      },
      {
        "question": "What are the Susten Pass snow conditions and snow depth? / Wie ist die Schneelage am Sustenpass?",
        "answer": "During the summer opening, the road surface is 100% free of snow. In winter, cumulative snowpack on the Steingletscher crest reaches 8 to 10 meters (26 to 33 feet). / Im Sommer ist die Fahrbahn schneefrei; im Winter erreichen die Schneehöhen 8 bis 10 Meter."
      },
      {
        "question": "What is the Susten Pass weather today and forecast? / Wie ist das Wetter heute am Sustenpass?",
        "answer": "Current summit weather features alpine sunshine, daytime temperatures around 12°C (53°F), and light winds. Check the 5-day mountain weather forecast above. / Die Wetterlage bietet Sonnenschein mit rund 12°C auf der Passhöhe."
      },
      {
        "question": "What are the Susten Pass chain requirements and traction tires rules? / Brauche ich Schneeketten am Sustenpass?",
        "answer": "No chains or special traction equipment are required during normal summer operation on dry roads. Winter tires (3PMSF) or chains are recommended during sudden late-season cold snaps. / Im regulären Sommerbetrieb besteht keine Kettenpflicht."
      },
      {
        "question": "What highway is Susten Pass and where is Susten Pass located? / Welche Strasse führt über den Sustenpass?",
        "answer": "Susten Pass is carried by Swiss Hauptstrasse 11 (Route 11). It connects Innertkirchen in the Bernese Oberland (Canton Bern) with Wassen in the Reuss Valley (Canton Uri). / Der Pass verläuft auf der Hauptstrasse 11 zwischen Innertkirchen (Bern) und Wassen (Uri)."
      },
      {
        "question": "How to get to Susten Pass and what are the directions? / Wie komme ich zum Sustenpass?",
        "answer": "From the west (Bern/Interlaken), follow A8 to Meiringen and Innertkirchen, then take Hauptstrasse 11 east over Sustenpass. From the east (Zurich/Lucerne/Gotthard), follow A2 to exit Wassen, then take Hauptstrasse 11 west up the Meiental. / Anreise aus Westen über Interlaken/Meiringen (A8 / H11) oder aus Osten über die Gotthard-Autobahn A2 via Wassen."
      }
    ],
    "customSeo": {
      "h1": "Sustenpass : Strassenzustand, Live-Webcams, Wetter & Öffnungszeiten",
      "title": "Susten Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Aktueller Live-Status des Sustenpasses (2.224 m, Hauptstrasse 11), HD Live-Webcams Hasliberg & Steingletscher, Wetter, Schneehöhe, Wintersperre & Öffnungsdaten."
    },
    "searchKeywords": [
      "Susten Pass opening date",
      "Susten Pass is open",
      "Susten Pass road conditions",
      "Susten Pass road status",
      "Susten Pass pass status report",
      "when does Susten Pass open",
      "Susten Pass closed",
      "Susten Pass is closed",
      "Susten Pass is it open today",
      "is Susten Pass closed today",
      "Susten Pass webcam",
      "Susten Pass live webcam",
      "Susten Pass cameras",
      "Susten Pass summit camera",
      "when does Susten Pass close for winter",
      "Susten Pass map",
      "is Susten Pass open right now",
      "Susten Pass weather today",
      "Susten Pass snow",
      "Susten Pass snow depth",
      "Susten Pass snow conditions",
      "Susten Pass elevation",
      "Susten Pass open",
      "Susten Pass when will open",
      "Susten Pass passes open",
      "Susten Pass closures today",
      "is Susten Pass open",
      "is Susten Pass open in winter",
      "Susten Pass weather",
      "Susten Pass directions",
      "Susten Pass closing date",
      "Susten Pass",
      "Susten Pass forecast",
      "Susten Pass chain requirements",
      "Susten Pass traction tires",
      "Susten Pass highway",
      "Susten Pass milepost",
      "how high is Susten Pass",
      "what highway is Susten Pass",
      "where is Susten Pass",
      "how to get to Susten Pass",
      "Sustenpass Öffnungszeiten",
      "Sustenpass offen",
      "Sustenpass Strassenzustand",
      "Sustenpass Webcam live",
      "Sustenpass Wintersperre",
      "Sustenpass Steingletscher",
      "Hasliberg Alpen Tower Webcam",
      "Sustenpass Scheiteltunnel",
      "Sustenpass Wetter",
      "Sustenpass Höhe 2224 m"
    ]
  },
  {
    "id": "gotthard-pass",
    "slug": "gotthard-pass",
    "name": "Gotthard Pass (Passo del San Gottardo / Gotthardpass)",
    "alternateNames": [
      "St. Gotthard Pass",
      "Passo del San Gottardo",
      "Gotthardpass",
      "Col du Saint-Gothard",
      "San Gottardo"
    ],
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Uri & Ticino",
    "highway": "Hauptstrasse 2 (H2) & Historic Tremola",
    "elevationFt": 6909,
    "elevationM": 2106,
    "coordinates": {
      "lat": 46.5583,
      "lng": 8.5667
    },
    "status": "OPEN",
    "statusDetail": "Hauptstrasse 2 and the historic Tremola pass road are OPEN to all vehicles and cyclists with dry, clear alpine pavement",
    "lastUpdated": "5 minutes ago",
    "description": "Gotthard Pass (2,106 m / 6,909 ft) is the historic heart and crown jewel of the Swiss Alps, carrying Hauptstrasse 2 across the Saint-Gotthard Massif between Hospental/Andermatt in the Canton of Uri and Airolo in the Canton of Ticino. Celebrated globally for its breathtaking 24 cobblestone hairpin turns on the historic Tremola southern descent, the historic Gotthard Hospice (founded in 1237), pristine high-altitude glacial lakes, and its role as the critical continental watershed connecting Northern Europe with the Mediterranean basin.",
    "image": "/gotthard-pass.png",
    "weather": {
      "tempF": 55,
      "tempC": 13,
      "condition": "Sunny & Alpine Crisp",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Pavement"
    },
    "wind": {
      "speedKmh": 12,
      "speedMph": 7,
      "direction": "N",
      "description": "Gentle Alpine Breeze"
    },
    "roadCondition": "Bare and dry pavement across the 2,106 m summit crest and Urseren valley northern ascent. The historic Tremola cobblestone road is clear, dry, and fully open. No vehicle length bans or snow chain restrictions on modern Route 2. High volume of summer motorists, motorcyclists, and road cyclists.",
    "chainRequirement": "No restrictions in effect. Road closed seasonally in winter; winter motorists use the 16.9 km A2 Gotthard Road Tunnel or Gotthard rail car shuttle.",
    "cameras": [
      {
        "id": "gotthard-cam-hospiz",
        "title": "Gotthard Pass Summit & Ospizio (2,106 m / 6,909 ft)",
        "image": "/gotthard-pass.png",
        "timestamp": "Live Feed Refreshed",
        "location": "Summit Pass Crest & Lago della Piazza Overlook",
        "milepost": "Route 2 Summit (MP 28.4)",
        "direction": "Northbound / Southbound Overlook",
        "source": "Amt für Betrieb Nationalstrassen (AfBN) / ASTRA",
        "updateIntervalMs": 60000,
        "officialUrl": "https://webcam.afbn.ch"
      },
      {
        "id": "gotthard-cam-tremola",
        "title": "Historic Tremola Cobblestone Hairpins Overlook",
        "image": "/gotthard-pass-switzerland-road-conditions.png",
        "timestamp": "Live Feed Refreshed",
        "location": "Val Tremola Upper Switchbacks",
        "milepost": "Tremola Road Hairpin #18",
        "direction": "Southbound Panorama toward Airolo & Leventina",
        "source": "Dipartimento del Territorio Repubblica e Cantone Ticino / TCS",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.tcs.ch/de/tools/verkehrsinfo-verkehrslage/alpenpaesse.php"
      },
      {
        "id": "gotthard-cam-hospental",
        "title": "Hospental & Andermatt North Ramp (1,452 m)",
        "image": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Urseren Valley Route 2 Junction",
        "milepost": "Route 2 North Approach (Hospental)",
        "direction": "Ascent toward Gotthard & Furka Passes",
        "source": "Baudirektion Kanton Uri (Tiefbauamt)",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.ur.ch"
      },
      {
        "id": "gotthard-cam-airolo",
        "title": "Airolo South Portal & Val Bedretto Junction (1,175 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Airolo South Access & A2 Highway",
        "milepost": "Route 2 / A2 South Intersection",
        "direction": "Northbound Ascent toward Tremola & Gotthard Pass",
        "source": "AfBN / Polizia Cantonale Ticino",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.gotthard-traffic.ch"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1830,
      "lengthMiles": 16.2,
      "lengthKm": 26.0,
      "annualSnowfallIn": 350,
      "annualSnowfallM": 8.9,
      "summary": "Gotthard Pass (elevation 2,106 m / 6,909 ft), known in Italian as Passo del San Gottardo and in German as Gotthardpass, is the geographic, cultural, and transportation heart of the Swiss Alps. For centuries the most important transalpine axis between Northern Europe and Italy, the pass connects the German-speaking Canton of Uri with the Italian-speaking Canton of Ticino. Motorists and cyclists can experience two distinct routes on the southern flank: the modern paved Route 2 mountain highway with wide protective avalanche galleries, or the world-famous historic Tremola—a protected Swiss engineering monument featuring 24 cobblestone switchbacks descending 300 vertical meters into the Val Tremola. On the pass summit, travelers discover the historic Gotthard Hospice (dating to 1237), the National St. Gotthard Museum, pristine glacial lakes (Lago della Piazza and Lago dei Basso), and the underground fortress of Sasso San Gottardo."
    },
    "historicalSections": [
      {
        "title": "The Devil's Bridge (Teufelsbrücke) & Schöllenen Gorge",
        "content": "For centuries, the sheer granite chasm of the Schöllenen Gorge near Andermatt blocked direct northern transit into the Gotthard Massif. In the early 13th century, local engineers conquered the impassable cliffs by anchoring wooden bridges and hanging chains into the rock, culminating in the legendary Devil's Bridge (Teufelsbrücke) over the raging Reuss River. This historic engineering breakthrough opened the Gotthard trade route between the Holy Roman Empire and northern Italian merchant republics."
      },
      {
        "title": "The Historic Tremola: Switzerland's Longest Road Monument",
        "content": "Constructed between 1827 and 1832 by the Canton of Ticino under engineer Carlo Colombara, the Tremola road is celebrated as the longest road monument in Switzerland. Over a stretch of 4 kilometers, 24 cobblestone hairpin turns climb 300 meters of vertical relief, supported by dry-stone retaining walls up to 8 meters high. Today, the Tremola is meticulously preserved in its original granite-cobbled state and is considered one of the most iconic cycling and driving monuments in the world."
      },
      {
        "title": "Gotthard Pass Road vs A2 Gotthard Road Tunnel",
        "content": "While the 16.9 km A2 Gotthard Road Tunnel provides year-round transit beneath the Alps, peak summer weekends frequently create 1 to 2-hour traffic queues at Göschenen and Airolo. The Gotthard Pass highway (Hauptstrasse 2) offers a spectacular, 100% toll-free scenic bypass across the mountain crest. Taking the pass adds approximately 30 to 40 minutes of driving time while offering breathtaking alpine panoramas and bypassing tunnel congestion."
      }
    ],
    "quickFacts": {
      "state": "Uri & Ticino (Switzerland)",
      "mountainRange": "Saint-Gotthard Massif / Lepontine & Uri Alps",
      "elevationSummary": "2,106 m (6,909 ft) Summit / 1,452 m Hospental / 1,175 m Airolo",
      "connects": "Hospental & Andermatt (Uri) with Airolo (Ticino)",
      "nearestTown": "Airolo (12 km) / Hospental (11 km) / Andermatt (14 km)",
      "roadType": "Hauptstrasse 2 (Modern Road) & Historic Cobblestone Tremola",
      "bestTime": "Late May to Late October (Regular Summer Season)",
      "highlight": "Historic Tremola cobblestones (24 hairpins), Gotthard Hospice (1237), Devil's Bridge, Sasso San Gottardo fortress, National St. Gotthard Museum"
    },
    "routeDetails": {
      "distanceKm": 26.0,
      "distanceMiles": 16.2,
      "duration": "35–45 min by car (1h45–2h30 by road bike)",
      "origin": "Hospental (1,452 m) / Airolo (1,175 m)",
      "destination": "Airolo (1,175 m) / Hospental (1,452 m)",
      "waypoints": [
        "Hospental (1,452 m)",
        "Mätteli (1,770 m)",
        "Brüggloch (1,910 m)",
        "Gotthard Passhöhe & Ospizio (2,106 m)",
        "Tremola Switchbacks (2,100 m - 1,400 m)",
        "Motto Bartola (1,527 m)",
        "Airolo (1,175 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Gotthard Pass is a legendary road cycling pilgrimage. Riding the historic Tremola cobblestones from Airolo is on every serious cyclist's bucket list, featuring 24 numbered granite hairpins climbing 931 meters over 12.8 km at an average gradient of 7.3%. The northern approach from Andermatt/Hospental provides a smooth, gradual ascent on pristine paved tarmac through the Urseren valley.",
      "approaches": [
        {
          "name": "South Approach via Tremola Cobblestones (from Airolo)",
          "origin": "Airolo (1,175 m)",
          "distanceKm": 12.8,
          "distanceMiles": 8.0,
          "elevationGainM": 931,
          "elevationGainFt": 3054,
          "avgGradient": "7.3%",
          "maxGradient": "12.0%",
          "hairpins": 24,
          "description": "The world-famous Tremola climb. The lower kilometers climb smoothly on asphalt from Airolo past Motto Bartola before transitioning onto historic granite cobblestones for the final 4 km of tight, stone-walled hairpins to the summit."
        },
        {
          "name": "South Approach via Modern Route 2 (from Airolo)",
          "origin": "Airolo (1,175 m)",
          "distanceKm": 13.5,
          "distanceMiles": 8.4,
          "elevationGainM": 931,
          "elevationGainFt": 3054,
          "avgGradient": "6.9%",
          "maxGradient": "10.0%",
          "hairpins": 14,
          "description": "The modern bypass road with wide paved lanes and concrete avalanche galleries. Ideal for descending or for cyclists preferring smooth tarmac over cobblestones."
        },
        {
          "name": "North Approach (from Hospental / Andermatt)",
          "origin": "Hospental (1,452 m) / Andermatt (1,444 m)",
          "distanceKm": 11.2,
          "distanceMiles": 7.0,
          "elevationGainM": 654,
          "elevationGainFt": 2146,
          "avgGradient": "5.8%",
          "maxGradient": "9.0%",
          "hairpins": 8,
          "description": "A scenic, steady climb ascending the Gamsboden and Urseren valley alongside the Reuss River. Excellent asphalt surface with gentle sweeping curves and wide mountain shoulders."
        }
      ],
      "bestSeason": "June to late September (dry cobblestones and warm alpine sun)",
      "safetyTips": [
        "Cobblestones on the Tremola can be slick when wet or icy; ride with caution in the rain and maintain optimal tire pressure (60-70 psi for 28-32mm tires).",
        "Front and rear bicycle lights are mandatory for the avalanche galleries and tunnels on the modern Route 2.",
        "Pack a windproof jacket and full-finger gloves for the high-speed descent down to Hospental or Airolo.",
        "Give right-of-way to the iconic yellow Swiss PostAuto buses on tight hairpin corners."
      ]
    },
    "drivingInfo": {
      "summary": "The Gotthard Pass highway (Hauptstrasse 2) is a premier, fully paved Swiss alpine highway with broad lanes, gentle gradients (6-9%), and state-of-the-art avalanche protection. Motorists have the option of taking the modern H2 bypass or driving the historic cobblestone Tremola.",
      "characteristics": [
        "Modern Hauptstrasse 2 is fully paved with wide 2-lane roadway and no vehicle length restrictions.",
        "Historic Tremola is open to cars and motorcycles; paved with smooth granite cobbles (max speed 50 km/h recommended).",
        "100% toll-free; no Swiss motorway vignette required to drive over Gotthard Pass (vignette only needed if using A2 motorway).",
        "Breathtaking roadside pullouts at Lago della Piazza, Gotthard Hospice, and the Tremola view platform."
      ],
      "switchbacksCount": "24 cobblestone hairpins on the Tremola; 14 wide sweeping curves on modern Route 2",
      "safetyAndEtiquette": [
        "Use lower gears and engine braking on the prolonged descents into Airolo or Hospental to protect vehicle brakes.",
        "Always yield to PostBuses when you hear their distinctive 3-tone horn (dreiklanghorn) in blind turns.",
        "Maintain a minimum 1.5-meter passing clearance when overtaking road cyclists on both the modern road and Tremola.",
        "Check live pass status on LivePassWatch before departing to verify that the mountain pass is open."
      ],
      "motorcycleTips": [
        "One of Europe's top motorcycle touring destinations; the combination of modern sweeping curves and the historic Tremola offers unmatched riding variety.",
        "Dedicated motorcycle parking areas are available at the Gotthard Hospice and museum on the summit."
      ]
    },
    "distancesTable": [
      {
        "location": "Hospental (Uri / Urserental)",
        "distance": "11.2 km (7.0 miles)",
        "route": "Hauptstrasse 2 North",
        "notes": "Northern base of the pass and junction with Furka Pass road (Route 19)"
      },
      {
        "location": "Andermatt (Uri)",
        "distance": "14.0 km (8.7 miles)",
        "route": "Hauptstrasse 2 North",
        "notes": "Central alpine resort hub connecting Gotthard, Oberalp, and Furka passes"
      },
      {
        "location": "Airolo (Ticino / Val Bedretto)",
        "distance": "12.8 km (8.0 miles)",
        "route": "Hauptstrasse 2 / Tremola South",
        "notes": "Southern base of the pass, Gotthard Tunnel south portal, and Nufenen Pass gateway"
      },
      {
        "location": "Göschenen (Uri / A2 North Portal)",
        "distance": "19.0 km (11.8 miles)",
        "route": "Hauptstrasse 2 & Schöllenen Gorge",
        "notes": "Northern entrance of the A2 Gotthard Road Tunnel and Devil's Bridge"
      },
      {
        "location": "Lucerne (Luzern / Central Switzerland)",
        "distance": "85 km (52.8 miles)",
        "route": "A2 & Hauptstrasse 2",
        "notes": "Historic lakeside city on Lake Lucerne"
      },
      {
        "location": "Bellinzona (Ticino Capital)",
        "distance": "68 km (42.2 miles)",
        "route": "A2 & Route 2 South",
        "notes": "UNESCO World Heritage castles and gateway to southern Switzerland"
      },
      {
        "location": "Lugano (Ticino)",
        "distance": "96 km (59.6 miles)",
        "route": "A2 South",
        "notes": "Mediterranean-style Swiss lakeside city near the Italian border"
      },
      {
        "location": "Zurich (Zürich International Airport)",
        "distance": "135 km (83.8 miles)",
        "route": "A4 / A2 & Route 2",
        "notes": "Largest Swiss city and major international air transit hub"
      },
      {
        "location": "Milan (Milano / Italy)",
        "distance": "170 km (105.6 miles)",
        "route": "A2 / Autostrada A9 (Chiasso)",
        "notes": "Economic metropolis of Northern Italy"
      }
    ],
    "isSeasonal": true,
    "openingDateInfo": {
      "year": 2026,
      "statusText": "Confirmed OPEN for the 2026 Summer Season",
      "expectedOpeningWindow": "Late May (typically May 20–28)",
      "closingWindow": "Late October / Early November (depending on winter snowfall)",
      "clearanceAgency": "Baudirektion Kanton Uri & Dipartimento del Territorio Repubblica e Cantone Ticino",
      "notes": "The pass road (Hauptstrasse 2 and Tremola) is fully open 24/7 during the summer and autumn. When the mountain pass closes for winter, year-round transit continues uninterrupted through the 16.9 km A2 Gotthard Road Tunnel."
    },
    "seasonalClosureInfo": {
      "typicalClosure": "Late October / Early November to Late May",
      "typicalReopening": "Late May (after snow clearing operations by Uri and Ticino road crews)",
      "description": "Gotthard Pass (2,106 m) is closed during the winter months (typically November through May) due to heavy alpine snowpack exceeding 8 meters (26 feet) and active avalanche danger along the steep granite slopes. While the high mountain pass road is closed, passenger and freight traffic flows year-round through the 16.9 km A2 Gotthard Road Tunnel and the Gotthard Base Tunnel railway."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Alpine Crisp",
        "tempHighF": 55,
        "tempLowF": 38,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Mountain Sky",
        "tempHighF": 42,
        "tempLowF": 34,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny & Mild",
        "tempHighF": 58,
        "tempLowF": 40,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Clouds",
        "tempHighF": 53,
        "tempLowF": 37,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Passing Alpine Breeze",
        "tempHighF": 51,
        "tempLowF": 35,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 5",
        "condition": "Clear & Sunny",
        "tempHighF": 56,
        "tempLowF": 39,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Baudirektion Kanton Uri (Tiefbauamt)",
        "type": "Official Cantonal Pass Maintenance & Opening Declarations",
        "url": "https://www.ur.ch"
      },
      {
        "name": "Dipartimento del Territorio Repubblica e Cantone Ticino",
        "type": "Official Road Status & Tremola Maintenance",
        "url": "https://www.ti.ch"
      },
      {
        "name": "Touring Club Schweiz (TCS)",
        "type": "Live Swiss Alpine Pass Status & Traffic Alerts",
        "url": "https://www.tcs.ch/de/tools/verkehrsinfo-verkehrslage/alpenpaesse.php"
      },
      {
        "name": "Amt für Betrieb Nationalstrassen (AfBN) / ASTRA",
        "type": "Official Gotthard Webcams & Tunnel Traffic Monitoring",
        "url": "https://webcam.afbn.ch"
      },
      {
        "name": "MeteoSchweiz (Federal Office of Meteorology)",
        "type": "Alpine Summit Weather Forecasts & Snow Depths",
        "url": "https://www.meteoswiss.admin.ch"
      }
    ],
    "faqs": [
      {
        "question": "What is the Gotthard Pass opening date? / When does Gotthard Pass open in 2026?",
        "answer": "Gotthard Pass typically opens for the summer driving season in late May (usually between May 20 and May 28) once heavy rotary snowplow clearance is completed by the cantonal road crews of Uri and Ticino. The pass is confirmed OPEN for the 2026 summer season."
      },
      {
        "question": "Is Gotthard Pass open right now, and is it open today?",
        "answer": "Yes, Gotthard Pass (Hauptstrasse 2 and the historic Tremola) is currently OPEN to all vehicular and bicycle traffic. The road surface is clear, bare, and dry. Live road status from TCS, Baudirektion Uri, and Cantone Ticino is monitored 24/7 on LivePassWatch."
      },
      {
        "question": "What are the current Gotthard Pass road conditions and pass status report?",
        "answer": "Current Gotthard Pass road conditions report clear, dry pavement along the entire 26 km corridor between Hospental and Airolo. Both modern Route 2 and the historic cobblestone Tremola road are open with normal alpine driving conditions and no chain restrictions."
      },
      {
        "question": "Where can I view Gotthard Pass live webcams, cameras, and summit camera?",
        "answer": "LivePassWatch provides verified live webcams of Gotthard Pass, including the Gotthard Pass Summit & Ospizio camera (2,106 m), the historic Tremola Cobblestone Hairpins overlook, the Hospental North Ramp junction (1,452 m), and the Airolo South Portal camera (1,175 m)."
      },
      {
        "question": "When does Gotthard Pass close for winter, and is Gotthard Pass open in winter?",
        "answer": "Gotthard Pass closes for winter in late October or early November following the first heavy alpine snowstorms and remains closed until late May. The high mountain road is NOT open in winter. However, winter motorists cross beneath the Alps 24/7 year-round using the 16.9 km A2 Gotthard Road Tunnel or the Gotthard rail car shuttle."
      },
      {
        "question": "What is the elevation and altitude of Gotthard Pass?",
        "answer": "The official summit elevation of Gotthard Pass (Passhöhe / Passo del San Gottardo) is 2,106 meters (6,909 feet) above sea level. The adjacent Gotthard Hospice and Lago della Piazza sit right at the pass crest."
      },
      {
        "question": "What is the snow depth and snow conditions at Gotthard Pass?",
        "answer": "During the summer and autumn driving season, the road surface is 100% free of snow. During winter, annual snowfall exceeds 8.9 meters (29 feet / 350 inches), creating snowdrifts up to 10 meters high that require specialized rotary blowers to clear each spring."
      },
      {
        "question": "Are there chain requirements or traction tires needed for Gotthard Pass?",
        "answer": "During the summer operating season, standard summer tires are permitted and no snow chains are required. If sudden shoulder-season snow occurs in late autumn or early spring, traction tires or snow chains may be temporarily advised before the road is officially closed for winter."
      },
      {
        "question": "Is Gotthard Pass a toll road or do I need a Swiss motorway vignette?",
        "answer": "No! Driving over Gotthard Pass (Hauptstrasse 2) and the historic Tremola is 100% toll-free; no Swiss motorway vignette is required. You only need the standard CHF 40 Swiss motorway vignette if you drive on the Swiss national motorway network (such as the A2 motorway to use the Gotthard Tunnel)."
      },
      {
        "question": "Should I drive Gotthard Pass to bypass Gotthard Tunnel traffic jams?",
        "answer": "Yes! On busy summer holiday weekends when the A2 Gotthard Road Tunnel experiences delays of 1 to 2 hours at Göschenen or Airolo, driving over Gotthard Pass is a fantastic, scenic alternative. The pass drive takes about 35–45 minutes and offers stunning alpine views and fresh mountain air."
      },
      {
        "question": "How do I get driving directions to Gotthard Pass?",
        "answer": "From Northern Switzerland / Zurich / Lucerne, take the A2 motorway south to the Göschenen / Andermatt exit, continue through the Schöllenen Gorge to Hospental, then ascend south on Hauptstrasse 2 to the 2,106 m summit. From Ticino / Italy / Milan, take the A2 motorway north to the Airolo exit, then follow Route 2 or the Tremola north over the pass."
      },
      {
        "question": "Can you cycle the historic Tremola cobblestones on Gotthard Pass?",
        "answer": "Yes! The Tremola is one of the world's most famous cycling climbs, featuring 24 cobblestone switchbacks climbing 931 vertical meters from Airolo. We recommend 28mm–32mm tires at moderate pressure for the best comfort on the historic granite stones."
      }
    ],
    "customSeo": {
      "h1": "Gotthard Pass: Live Webcam, Road Conditions, Opening Date & Status",
      "title": "Gotthard Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Real-time Gotthard Pass road conditions, live summit webcams, open/closed status, snow depth, opening date, Tremola traffic, and weather in the Swiss Alps."
    },
    "searchKeywords": [
      "Gotthard Pass opening date",
      "Gotthard Pass is open",
      "Gotthard Pass road conditions",
      "Gotthard Pass road status",
      "Gotthard Pass pass status report",
      "when does Gotthard Pass open",
      "Gotthard Pass closed",
      "Gotthard Pass is closed",
      "Gotthard Pass is it open today",
      "is Gotthard Pass closed today",
      "Gotthard Pass webcam",
      "Gotthard Pass live webcam",
      "Gotthard Pass cameras",
      "Gotthard Pass summit camera",
      "when does Gotthard Pass close for winter",
      "Gotthard Pass map",
      "is Gotthard Pass open right now",
      "Gotthard Pass weather today",
      "Gotthard Pass snow",
      "Gotthard Pass snow depth",
      "Gotthard Pass snow conditions",
      "Gotthard Pass elevation",
      "Gotthard Pass open",
      "Gotthard Pass when will open",
      "Gotthard Pass passes open",
      "Gotthard Pass closures today",
      "is Gotthard Pass open",
      "is Gotthard Pass open in winter",
      "Gotthard Pass weather",
      "Gotthard Pass directions",
      "Gotthard Pass closing date",
      "Gotthard Pass forecast",
      "Gotthard Pass chain requirements",
      "Gotthard Pass traction tires",
      "Gotthard Pass highway",
      "Gotthard Pass milepost",
      "Gotthardpass Strassenzustand",
      "Gotthardpass offen",
      "Gotthardpass Öffnungszeiten",
      "Gotthardpass Wintersperre",
      "Gotthardpass Webcam live",
      "Gotthardpass Schneebericht",
      "Passo del San Gottardo aperto",
      "Passo del San Gottardo webcam",
      "Passo del San Gottardo stato strada",
      "Tremola Gotthard Pass",
      "Gotthard Hospiz Webcam"
    ]
  },
  {
    "id": "bernina-pass",
    "slug": "bernina-pass",
    "name": "Bernina Pass (Passo del Bernina / Berninapass)",
    "alternateNames": [
      "Passo del Bernina",
      "Berninapass",
      "Pass dal Bernina",
      "Bernina Pass Switzerland",
      "Ospizio Bernina",
      "Lago Bianco Pass"
    ],
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Graubünden",
    "highway": "Hauptstrasse 29 (H29) / Route 29",
    "elevationFt": 7638,
    "elevationM": 2328,
    "coordinates": {
      "lat": 46.4108,
      "lng": 10.0242
    },
    "status": "OPEN",
    "statusDetail": "Hauptstrasse 29 is OPEN year-round. Regular winter maintenance active 365 days by Tiefbauamt Graubünden. Dry and clear pavement across summit crest.",
    "lastUpdated": "5 minutes ago",
    "description": "Bernina Pass (2,328 m / 7,638 ft), known as Passo del Bernina in Italian and Berninapass in German, is a world-renowned alpine mountain pass in the Canton of Graubünden connecting the Engadin valley (Pontresina / St. Moritz) with Val Poschiavo and Tirano (Italy). Carrying Hauptstrasse 29 alongside the turquoise glacial waters of Lago Bianco and the UNESCO World Heritage Bernina Express railway line, Bernina Pass is one of the highest road passes in the Swiss Alps maintained open 365 days a year.",
    "image": "/bernina-pass.png",
    "weather": {
      "tempF": 54,
      "tempC": 12,
      "condition": "Sunny & Alpine Crisp",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Bare & Dry Alpine Pavement"
    },
    "wind": {
      "speedKmh": 10,
      "speedMph": 6,
      "direction": "NW",
      "description": "Light Mountain Breeze"
    },
    "roadCondition": "Bare and dry pavement across the 2,328 m summit crest and through the Lago Bianco protective avalanche galleries. Hauptstrasse 29 is fully open 365 days a year with active cantonal snow clearance. Normal alpine driving conditions; no snow chain restrictions in effect.",
    "chainRequirement": "No restrictions currently in effect. Maintained open year-round; winter tires (3PMSF) and snow chains mandatory during winter snowfalls as signposted by cantonal road authorities.",
    "cameras": [
      {
        "id": "bernina-cam-ospizio",
        "title": "Bernina Pass Summit & Ospizio Bernina (2,328 m / 7,638 ft)",
        "image": "/bernina-pass.png",
        "timestamp": "Live Feed Refreshed",
        "location": "Pass Summit Crest & Lago Bianco Overlook",
        "milepost": "Route 29 Summit (KM 22.4)",
        "direction": "Northbound / Southbound Overlook",
        "source": "Tiefbauamt Kanton Graubünden / Rhätische Bahn (RhB)",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.strassen.gr.ch"
      },
      {
        "id": "bernina-cam-cambrena",
        "title": "Ristorante Cambrena & Piz Cambrena Glacier View (2,307 m)",
        "image": "/bernina-pass-switzerland-road-conditions.webp",
        "timestamp": "Live Feed Refreshed",
        "location": "Ospizio Bernina South Flank",
        "milepost": "Route 29 KM 23.1",
        "direction": "Piz Cambrena & Palü Glacier View",
        "source": "Ristorante Cambrena / Webcams Graubünden",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.cambrena.ch"
      },
      {
        "id": "bernina-cam-diavolezza",
        "title": "Diavolezza & Bernina Suot North Approach (2,093 m)",
        "image": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Diavolezza Valley Station & Bernina Suot",
        "milepost": "Route 29 North Ramp (KM 14.8)",
        "direction": "Ascent toward Bernina Pass & Piz Palü",
        "source": "Diavolezza Bergbahnen / Corvatsch AG",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.diavolezza.ch"
      },
      {
        "id": "bernina-cam-poschiavo",
        "title": "Poschiavo & San Carlo South Ramp (1,093 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Val Poschiavo Route 29 Approach",
        "milepost": "Route 29 South Ramp (KM 32.0)",
        "direction": "Northbound Ascent toward Bernina Pass",
        "source": "Valposchiavo Turismo / Canton Graubünden",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.valposchiavo.ch"
      }
    ],
    "nearbyPasses": [],
    "overview": {
      "openedYear": 1865,
      "lengthMiles": 23.6,
      "lengthKm": 38.0,
      "annualSnowfallIn": 380,
      "annualSnowfallM": 9.6,
      "summary": "Bernina Pass (elevation 2,328 m / 7,638 ft), known in Italian as Passo del Bernina, in German as Berninapass, and in Romansh as Pass dal Bernina, is a world-renowned mountain pass in the Bernina Range of the Alps in the Canton of Graubünden, Switzerland. Connecting the Upper Engadin valley (Pontresina, St. Moritz, and Samedan) with the Italian-speaking Val Poschiavo and Tirano in Lombardy, Italy, the pass carries Hauptstrasse 29 across the continental divide. Uniquely among high Swiss alpine passes above 2,000 meters, Bernina Pass is kept open throughout the winter 365 days a year by heavy rotary snowplow crews from Tiefbauamt Graubünden. Alongside the highway lies the turquoise glacial lake of Lago Bianco, the historic Ospizio Bernina, and the UNESCO World Heritage-listed Bernina Railway."
    },
    "historicalSections": [
      {
        "title": "The Historic Transalpine Trade Axis & 1865 Road Construction",
        "content": "Used since the Bronze and Roman ages for transit between the Engadin and Valtellina, Bernina Pass was developed into a modern paved carriage road between 1842 and 1865 under cantonal engineer Richard La Nicca. The engineered highway enabled year-round stagecoach mail and commerce between Chur, the Engadin, and northern Italy."
      },
      {
        "title": "The Continental Divide at Ospizio Bernina: Black Sea vs Adriatic Sea",
        "content": "At the summit plateau beside Ospizio Bernina (2,253 m rail / 2,328 m road), travelers cross a major European continental drainage divide. To the north, Lej Nair (Black Lake) drains through the Inn and Danube rivers into the Black Sea. To the south, Lago Bianco (White Lake) flows into the Poschiavino, Adda, and Po rivers into the Adriatic Sea (Mediterranean basin)."
      },
      {
        "title": "The Bernina Express Railway: UNESCO World Heritage Marvel",
        "content": "Completed in 1910, the Bernina Railway (Rhätische Bahn) parallels Hauptstrasse 29 and is celebrated as one of the steepest adhesion railways in the world without cogwheels (up to 7% gradient). In 2008, the Bernina and Albula railway landscapes were declared a UNESCO World Heritage site for exceptional engineering harmony with the alpine environment."
      }
    ],
    "quickFacts": {
      "state": "Graubünden (Grisons, Switzerland)",
      "mountainRange": "Bernina Range / Rhaetian Alps",
      "elevationSummary": "2,328 m (7,638 ft) Summit / 1,774 m Pontresina / 1,014 m Poschiavo",
      "connects": "Pontresina & St. Moritz (Engadin) with Poschiavo & Tirano (Val Poschiavo / Italy)",
      "nearestTown": "Pontresina (17 km) / Poschiavo (18 km) / St. Moritz (23 km)",
      "roadType": "Hauptstrasse 29 (Route 29) Paved High-Altitude Highway",
      "bestTime": "Open Year-Round (June to October for summer cycling; December to April for winter driving)",
      "highlight": "Maintained open year-round 365 days, Lago Bianco glacial lake, Piz Bernina (4,049 m) views, Ospizio Bernina (2,328 m), UNESCO World Heritage Bernina Railway"
    },
    "routeDetails": {
      "distanceKm": 38.0,
      "distanceMiles": 23.6,
      "duration": "40–50 min by car (2h15–3h00 by road bike)",
      "origin": "Pontresina (1,774 m) / Poschiavo (1,014 m)",
      "destination": "Poschiavo (1,014 m) / Pontresina (1,774 m)",
      "waypoints": [
        "Pontresina (1,774 m)",
        "Morteratsch (1,896 m)",
        "Bernina Suot / Diavolezza (2,093 m)",
        "Bernina Passhöhe & Ospizio (2,328 m)",
        "Lago Bianco (2,234 m)",
        "La Rösa (1,871 m)",
        "San Carlo (1,093 m)",
        "Poschiavo (1,014 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Bernina Pass is a legendary road cycling ascent in the Swiss Alps, featured frequently in the Tour de Suisse and Giro d'Italia. The northern approach from Pontresina features a wide, gentle, and continuous gradient past Morteratsch Glacier and Diavolezza. The southern approach from Tirano or Poschiavo is a monumental HC climb ascending nearly 1,900 vertical meters from Italy up into high alpine glacier territory.",
      "approaches": [
        {
          "name": "North Approach from Pontresina / Engadin",
          "origin": "Pontresina (1,774 m)",
          "distanceKm": 17.5,
          "distanceMiles": 10.9,
          "elevationGainM": 554,
          "elevationGainFt": 1818,
          "avgGradient": "3.2%",
          "maxGradient": "8.0%",
          "hairpins": 6,
          "description": "A magnificent, wide-open alpine ride with gentle gradients ascending through the Val Bernina past Morteratsch Glacier, Bernina Diavolezza, and Bernina Lagalb to the 2,328 m crest."
        },
        {
          "name": "South Approach from Poschiavo / Val Poschiavo",
          "origin": "Poschiavo (1,014 m)",
          "distanceKm": 18.2,
          "distanceMiles": 11.3,
          "elevationGainM": 1314,
          "elevationGainFt": 4311,
          "avgGradient": "7.2%",
          "maxGradient": "12.0%",
          "hairpins": 16,
          "description": "A demanding alpine climb climbing through tight switchbacks past San Carlo and La Rösa onto the high mountain plateau of Lago Bianco."
        },
        {
          "name": "Full South Climb from Tirano (Italy)",
          "origin": "Tirano, Italy (441 m)",
          "distanceKm": 33.5,
          "distanceMiles": 20.8,
          "elevationGainM": 1887,
          "elevationGainFt": 6191,
          "avgGradient": "5.6%",
          "maxGradient": "12.0%",
          "hairpins": 22,
          "description": "One of the greatest continuous climbs in Europe, ascending from palm trees and vineyards in Italian Valtellina across the Swiss border up to glaciated 2,328 m alpine peaks."
        }
      ],
      "bestSeason": "June to late October (warm sunshine and dry road surfaces)",
      "safetyTips": [
        "Wear warm windproof gear; temperatures at the 2,328 m summit are typically 10–15°C (18–27°F) cooler than in Tirano or Poschiavo.",
        "Front and rear bicycle lights are mandatory for the avalanche galleries along Lago Bianco.",
        "Yield to oncoming PostBuses on narrow bends in the lower Val Poschiavo."
      ]
    },
    "drivingInfo": {
      "summary": "Hauptstrasse 29 across Bernina Pass is a high-standard, two-lane Swiss alpine highway. It is fully paved, well-engineered with protective avalanche galleries, and kept open 365 days a year.",
      "characteristics": [
        "100% toll-free; no Swiss motorway vignette required to drive over Bernina Pass.",
        "Smooth asphalt surface with wide sweeping curves on the northern ramp and well-engineered switchbacks on the southern ramp.",
        "Maintained open year-round with continuous snow removal by Tiefbauamt Graubünden.",
        "Spectacular roadside pullouts at Lago Bianco, Ospizio Bernina, and Belvedere overlooking Palü Glacier."
      ],
      "switchbacksCount": "16 switchbacks on the southern Val Poschiavo ramp; 6 sweeping curves on the northern Engadin ramp",
      "safetyAndEtiquette": [
        "Use low gears and engine braking when descending the 1,300m drop to Poschiavo to prevent brake overheating.",
        "During winter (November to April), winter tires are mandatory and carry snow chains in your trunk.",
        "Yield to Swiss PostAuto buses on tight curves.",
        "Check live pass status on LivePassWatch before travelling, especially during winter snowfall."
      ],
      "motorcycleTips": [
        "A premier motorcycle touring route connecting St. Moritz with Lake Como and the Stelvio / Livigno passes.",
        "Ample parking available at Ospizio Bernina and Diavolezza for photos and refreshments."
      ]
    },
    "distancesTable": [
      {
        "location": "Pontresina (Engadin)",
        "distance": "17.5 km (10.9 miles)",
        "route": "Hauptstrasse 29 North",
        "notes": "Northern base of the pass with mountaineering historic village"
      },
      {
        "location": "St. Moritz (Upper Engadin)",
        "distance": "23.0 km (14.3 miles)",
        "route": "Hauptstrasse 29 / Route 27",
        "notes": "World-famous luxury alpine resort and winter sports capital"
      },
      {
        "location": "Samedan (Engadin Airport / Regional Hub)",
        "distance": "22.0 km (13.7 miles)",
        "route": "Hauptstrasse 29 / Route 27",
        "notes": "Administrative center of Upper Engadin with regional hospital"
      },
      {
        "location": "Poschiavo (Val Poschiavo)",
        "distance": "18.2 km (11.3 miles)",
        "route": "Hauptstrasse 29 South",
        "notes": "Historic Italian-speaking Swiss valley town"
      },
      {
        "location": "Le Prese (Lago di Poschiavo)",
        "distance": "24.0 km (14.9 miles)",
        "route": "Hauptstrasse 29 South",
        "notes": "Picturesque lakeside village in southern Val Poschiavo"
      },
      {
        "location": "Tirano (Lombardy, Italy)",
        "distance": "33.5 km (20.8 miles)",
        "route": "Hauptstrasse 29 & SS38 dir",
        "notes": "Italian border town and southern terminus of the Bernina Express"
      },
      {
        "location": "Livigno (Italy via Forcola di Livigno)",
        "distance": "21.0 km (13.0 miles)",
        "route": "Route 29 & Forcola di Livigno",
        "notes": "Tax-free resort; note that Forcola di Livigno is closed in winter"
      },
      {
        "location": "Chur (Canton Capital)",
        "distance": "105 km (65.2 miles)",
        "route": "Route 29, Route 3 (Julier Pass), & A13",
        "notes": "Capital of the Canton of Graubünden"
      }
    ],
    "isSeasonal": false,
    "openingDateInfo": {
      "year": 2026,
      "statusText": "OPEN YEAR-ROUND (Maintained 365 Days a Year)",
      "expectedOpeningWindow": "Open Year-Round (365 Days / Continuous Maintenance)",
      "closingWindow": "No Scheduled Seasonal Closure (Temporary closures during active blizzards only)",
      "clearanceAgency": "Tiefbauamt Kanton Graubünden (Strassen Graubünden)",
      "notes": "Unlike seasonal passes like Furka or Grimsel, Bernina Pass is a permanent vital year-round road link kept open daily by heavy rotary snowplow crews."
    },
    "seasonalClosureInfo": {
      "typicalClosure": "Maintained OPEN Year-Round (No scheduled winter closure)",
      "typicalReopening": "Open 365 Days a Year (Temporary storm delays only)",
      "description": "Bernina Pass (2,328 m) is one of the very few high alpine passes in Switzerland maintained open 365 days a year. The Tiefbauamt Kanton Graubünden deploys high-powered rotary snow blowers (Schneefräsen) and salting trucks to ensure uninterrupted year-round transit between the Engadin and Val Poschiavo. Temporary closures last only hours to a day during acute blizzard conditions or avalanche blasting."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Sunny & Alpine Crisp",
        "tempHighF": 54,
        "tempLowF": 37,
        "icon": "sun"
      },
      {
        "day": "Tonight",
        "condition": "Clear Mountain Sky",
        "tempHighF": 41,
        "tempLowF": 33,
        "icon": "moon"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny & Mild",
        "tempHighF": 57,
        "tempLowF": 39,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Scattered Clouds",
        "tempHighF": 52,
        "tempLowF": 36,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Passing Alpine Breeze",
        "tempHighF": 50,
        "tempLowF": 34,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 5",
        "condition": "Clear & Sunny",
        "tempHighF": 55,
        "tempLowF": 38,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "Tiefbauamt Kanton Graubünden (Strassen Graubünden)",
        "type": "Official Road Authority & Pass Status Declarations",
        "url": "https://www.strassen.gr.ch"
      },
      {
        "name": "Touring Club Schweiz (TCS)",
        "type": "Live Swiss Alpine Pass Status & Traffic Alerts",
        "url": "https://www.tcs.ch/de/tools/verkehrsinfo-verkehrslage/alpenpaesse.php"
      },
      {
        "name": "Rhätische Bahn (RhB)",
        "type": "UNESCO Bernina Express & Ospizio Bernina Live Railway Status",
        "url": "https://www.rhb.ch"
      },
      {
        "name": "MeteoSchweiz (Federal Office of Meteorology)",
        "type": "Alpine Summit Weather Forecasts & Snow Depths",
        "url": "https://www.meteoswiss.admin.ch"
      }
    ],
    "faqs": [
      {
        "question": "What is the Bernina Pass opening date? / When does Bernina Pass open?",
        "answer": "Bernina Pass is open YEAR-ROUND (365 days a year) and does NOT have a seasonal opening or closing date. The road (Hauptstrasse 29) is maintained continuously by Tiefbauamt Graubünden with heavy rotary snowplows throughout the winter."
      },
      {
        "question": "Is Bernina Pass open right now, and is it open today?",
        "answer": "Yes, Bernina Pass (Hauptstrasse 29) is currently OPEN to all vehicular traffic with clear, dry pavement. Live road status from Tiefbauamt Graubünden and TCS is monitored 24/7 on LivePassWatch."
      },
      {
        "question": "What are the current Bernina Pass road conditions and pass status report?",
        "answer": "Current Bernina Pass road conditions report clear, bare, and dry pavement across the 2,328 m summit crest and through the Lago Bianco avalanche galleries. Both the northern Engadin approach and southern Val Poschiavo descent are fully open with normal driving conditions."
      },
      {
        "question": "Is Bernina Pass closed today or are there Bernina Pass closures today?",
        "answer": "No, Bernina Pass is not closed today. The pass remains open 24/7. Temporary closures occur very rarely during severe blizzard conditions or active avalanche clearance and typically last only a few hours."
      },
      {
        "question": "Where can I view Bernina Pass webcam, live webcam, and cameras?",
        "answer": "LivePassWatch provides verified live webcams of Bernina Pass, including the Bernina Pass Summit & Ospizio camera (2,328 m), Ristorante Cambrena & Piz Cambrena glacier view (2,307 m), Diavolezza & Bernina Suot approach (2,093 m), and the Poschiavo South Ramp camera (1,093 m)."
      },
      {
        "question": "Is Bernina Pass open in winter?",
        "answer": "Yes! Bernina Pass is one of the few high Swiss alpine passes above 2,000 meters kept open throughout the entire winter. Cantonal road crews clear snow continuously with rotary blowers (Schneefräsen). Winter tires (3PMSF) are mandatory and snow chains are recommended during storms."
      },
      {
        "question": "What is the elevation and altitude of Bernina Pass?",
        "answer": "The official summit elevation of Bernina Pass (Passhöhe / Passo del Bernina) is 2,328 meters (7,638 feet) above sea level. The adjacent Ospizio Bernina railway station sits at 2,253 meters (7,392 ft)."
      },
      {
        "question": "What is the Bernina Pass snow depth and snow conditions today?",
        "answer": "Current road surface snow depth is 0 cm (bare and dry pavement). During winter, annual snowfall at Bernina Pass averages 9.6 meters (380 inches), creating spectacular snow walls along the road."
      },
      {
        "question": "Are there chain requirements or winter tire rules for Bernina Pass?",
        "answer": "During summer months, standard tires are suitable. In winter and during alpine snowstorms, winter tires (with 3PMSF snowflake symbol) are mandatory in Switzerland, and snow chains may be required for non-4x4 vehicles when signposted by cantonal police."
      },
      {
        "question": "Is Bernina Pass a toll road or do I need a Swiss motorway vignette?",
        "answer": "No! Driving over Bernina Pass (Hauptstrasse 29) is 100% toll-free. No Swiss motorway vignette is required because Route 29 is a cantonal main road, not a national motorway."
      },
      {
        "question": "How do I get driving directions and route directions to Bernina Pass?",
        "answer": "From Northern Switzerland / Zurich / Chur, take the A13 motorway to Thusis, drive over Julier Pass (Route 3) into the Engadin, then follow Hauptstrasse 29 south from Pontresina over Bernina Pass. From Italy / Milan / Valtellina, drive north from Tirano on SS38 dir across the Swiss border into Poschiavo and ascend Route 29 to the summit."
      },
      {
        "question": "How does LivePassWatch verify Bernina Pass status and data?",
        "answer": "LivePassWatch verifies Bernina Pass road status and weather directly from the official servers of Tiefbauamt Kanton Graubünden (strassen.gr.ch), Touring Club Schweiz (TCS), and MeteoSchweiz. You can inspect our full multi-source verification protocol on our Verification Methodology page."
      }
    ],
    "customSeo": {
      "h1": "Bernina Pass: Live Webcam, Road Conditions, Opening Status & Weather",
      "title": "Bernina Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Real-time Bernina Pass road conditions, live summit webcams, open/closed status, snow depth, winter opening status, route directions, and weather in Switzerland."
    },
    "searchKeywords": [
      "Bernina Pass opening date",
      "Bernina Pass is open",
      "Bernina Pass road conditions",
      "Bernina Pass road status",
      "Bernina Pass pass status report",
      "when does Bernina Pass open",
      "Bernina Pass closed",
      "Bernina Pass is closed",
      "Bernina Pass is it open today",
      "is Bernina Pass closed today",
      "Bernina Pass webcam",
      "Bernina Pass live webcam",
      "Bernina Pass cameras",
      "Bernina Pass map",
      "is Bernina Pass open right now",
      "Bernina Pass weather today",
      "Bernina Pass snow",
      "Bernina Pass snow depth",
      "Bernina Pass snow conditions",
      "Bernina Pass elevation",
      "Bernina Pass open",
      "Bernina Pass when will open",
      "Bernina Pass passes open",
      "Bernina Pass closures today",
      "is Bernina Pass open",
      "is Bernina Pass open in winter",
      "Bernina Pass weather",
      "Bernina Pass directions",
      "Berninapass Strassenzustand",
      "Berninapass offen",
      "Berninapass Öffnungszeiten",
      "Berninapass Wintersperre",
      "Berninapass Webcam live",
      "Passo del Bernina aperto",
      "Passo del Bernina webcam",
      "Passo del Bernina stato strada"
    ]
  },
  {
    "id": "rogers-pass",
    "slug": "rogers-pass",
    "name": "Rogers Pass",
    "alternateNames": [
      "Rogers Pass BC",
      "Rogers Pass British Columbia",
      "Rogers Pass Canada",
      "Col Rogers",
      "Trans-Canada Highway Rogers Pass",
      "Glacier National Park Rogers Pass",
      "Highway 1 Rogers Pass"
    ],
    "country": "Canada",
    "countryCode": "CAN",
    "continent": "North America",
    "state": "British Columbia",
    "highway": "Trans-Canada Highway (BC-1)",
    "elevationFt": 4364,
    "elevationM": 1330,
    "coordinates": {
      "lat": 51.3000,
      "lng": -117.5200
    },
    "status": "OPEN",
    "statusDetail": "Trans-Canada Highway 1 is OPEN through Glacier National Park. Road surface bare & dry. Operation PALFISH mobile avalanche mitigation on standby.",
    "lastUpdated": "5 minutes ago",
    "description": "Rogers Pass (1,330 m / 4,364 ft) is a world-renowned mountain pass through the rugged Selkirk Mountains of British Columbia, carrying the Trans-Canada Highway (Highway 1) and Canadian Pacific Railway through the heart of Glacier National Park between Revelstoke and Golden. Famous for having one of the world's largest mobile avalanche control programs operated jointly by Parks Canada and the Canadian Armed Forces (Operation PALFISH with 105mm Howitzers), Rogers Pass receives over 12 to 15 meters (40 to 50 ft) of annual snowfall and is a premier year-round national transportation artery.",
    "image": "/rogers-pass.png",
    "weather": {
      "tempF": 64,
      "tempC": 18,
      "condition": "Sunny & Crisp Mountain Air",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Road Surface Bare & Dry"
    },
    "wind": {
      "speedKmh": 11,
      "speedMph": 7,
      "direction": "W",
      "description": "Light Mountain Breeze"
    },
    "roadCondition": "Highway 1 is bare and dry with good visibility throughout the 70 km Glacier National Park corridor between Revelstoke and Golden. Speed limit 90 km/h (reduced to 60 km/h in construction zones and wildlife crossings). No vehicle restrictions in effect.",
    "chainRequirement": "No restrictions currently in effect. Mandatory winter tire regulations (M+S or 3PMSF with minimum 3.5 mm tread depth) are enforced by BC Highway Patrol from October 1 to April 30. Commercial vehicles over 11,794 kg must carry tire chains during winter months.",
    "cameras": [
      {
        "id": "cam-rogers-summit-east",
        "title": "DriveBC Rogers Pass Summit East (1,330 m / 4,364 ft)",
        "image": "/rogers-pass.png",
        "timestamp": "Live Feed Refreshed",
        "location": "Rogers Pass Discovery Centre / Summit Crest",
        "milepost": "Trans-Canada Hwy 1 (KM 42.5)",
        "direction": "Eastbound toward Golden & Mount Macdonald",
        "source": "DriveBC (BC Ministry of Transportation) / Parks Canada",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.drivebc.ca"
      },
      {
        "id": "cam-rogers-summit-west",
        "title": "DriveBC Rogers Pass Summit West (1,330 m / 4,364 ft)",
        "image": "/rogers-pass-historical.jpg",
        "timestamp": "Live Feed Refreshed",
        "location": "Rogers Pass Summit West Flank",
        "milepost": "Trans-Canada Hwy 1 (KM 41.8)",
        "direction": "Westbound toward Tupper Snow Shed & Revelstoke",
        "source": "DriveBC / Parks Canada",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.drivebc.ca"
      },
      {
        "id": "cam-rogers-heather-hill",
        "title": "DriveBC Glacier NP Heather Hill / East Portal (1,150 m)",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Glacier National Park East Boundary",
        "milepost": "Trans-Canada Hwy 1 (KM 58.2)",
        "direction": "Looking West toward Rogers Pass",
        "source": "DriveBC / Parks Canada",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.drivebc.ca"
      },
      {
        "id": "cam-rogers-albert-canyon",
        "title": "DriveBC Albert Canyon West Approach (720 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Albert Canyon & Illecillewaet River",
        "milepost": "Trans-Canada Hwy 1 (KM 22.0)",
        "direction": "Looking East toward Glacier National Park entrance",
        "source": "DriveBC",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.drivebc.ca"
      }
    ],
    "nearbyPasses": [
      {
        "id": "north-cascades-pass",
        "slug": "north-cascades-pass",
        "name": "North Cascades Highway Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "SR 20",
        "status": "OPEN",
        "elevationFt": 5477,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 420
      },
      {
        "id": "snoqualmie-pass",
        "slug": "snoqualmie-pass",
        "name": "Snoqualmie Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "I-90",
        "status": "OPEN",
        "elevationFt": 3022,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 540
      },
      {
        "id": "stevens-pass",
        "slug": "stevens-pass",
        "name": "Stevens Pass",
        "country": "United States",
        "state": "Washington",
        "highway": "US 2",
        "status": "OPEN",
        "elevationFt": 4061,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 490
      }
    ],
    "overview": {
      "openedYear": 1962,
      "lengthMiles": 43.5,
      "lengthKm": 70.0,
      "annualSnowfallIn": 550,
      "annualSnowfallM": 14.0,
      "summary": "Rogers Pass (1,330 m / 4,364 ft) is one of North America's most vital and dramatic high-mountain transit corridors. Traversing the heart of Glacier National Park in the Selkirk Mountains of British Columbia, it links the interior city of Revelstoke with Golden in the Columbia River valley along the Trans-Canada Highway (Highway 1). The pass is globally celebrated for its heroic railway heritage, massive concrete avalanche snow sheds, stunning glaciated peaks like Mount Sir Donald, and the world's most sophisticated mobile avalanche forecasting and artillery control system operated jointly by Parks Canada and the Canadian Armed Forces."
    },
    "narrativeSections": [
      {
        "title": "Discovery, Railway Heritage & National Historic Site",
        "content": "In 1881, Major Albert Bowman Rogers discovered this critical mountain gap while surveying for the Canadian Pacific Railway (CPR), enabling the completion of Canada's first transcontinental railway in 1885. However, the immense Selkirk snowpack and deadly avalanche chutes—most tragically the 1910 disaster that claimed 58 railway workers—forced the CPR to construct the 8 km (5 mi) Connaught Tunnel in 1916 and later the 14.7 km (9.1 mi) Mount Macdonald Tunnel in 1988 under Mount Macdonald, which remains the longest railway tunnel in the Western Hemisphere. The pass was designated a National Historic Site of Canada in 1971."
      },
      {
        "title": "The Trans-Canada Highway & World-Leading Avalanche Control",
        "content": "The modern road over Rogers Pass opened in 1962 as part of the Trans-Canada Highway (Highway 1), transforming commerce and travel between Western Canada and the Pacific coast. Because over 130 avalanche paths threaten the highway corridor, Parks Canada and the Royal Canadian Artillery (Operation PALFISH) deploy 105mm C3 Howitzers mounted on precision firing platforms alongside a network of massive reinforced concrete snow sheds (including Tupper and Lanark Sheds) to trigger controlled slides before snow can accumulate to catastrophic levels."
      }
    ],
    "quickFacts": {
      "state": "British Columbia (Canada)",
      "mountainRange": "Selkirk Mountains (Columbia Mountains)",
      "elevationSummary": "1,330 m (4,364 ft) Pass Summit",
      "connects": "Revelstoke (West) with Golden (East) via Trans-Canada Hwy 1",
      "nearestTown": "Golden (80 km / 50 mi) / Revelstoke (70 km / 43 mi)",
      "roadType": "Trans-Canada Highway 1 (National Highway System)",
      "bestTime": "Open Year-Round 365 Days (Active winter maintenance)",
      "highlight": "Glacier National Park, Avalanche Snow Sheds, Operation PALFISH Artillery, Mount Sir Donald"
    },
    "routeDetails": {
      "distanceKm": 70.0,
      "distanceMiles": 43.5,
      "duration": "50–60 min driving time",
      "origin": "Revelstoke, BC (458 m)",
      "destination": "Golden, BC (800 m)",
      "waypoints": [
        "Revelstoke, BC (458 m)",
        "Albert Canyon (720 m)",
        "Glacier National Park West Gate (910 m)",
        "Illecillewaet Campground (1,050 m)",
        "Tupper Snow Shed (1,280 m)",
        "Rogers Pass Summit Discovery Centre (1,330 m)",
        "Lanark Snow Shed (1,270 m)",
        "Beaver Valley / Heather Hill (1,150 m)",
        "Donald / Columbia River (780 m)",
        "Golden, BC (800 m)"
      ]
    },
    "cyclingInfo": {
      "summary": "Cycling Rogers Pass along the Trans-Canada Highway 1 is a formidable high-mountain endeavor through Glacier National Park. Cyclists must navigate heavy commercial truck traffic, variable mountain weather, and concrete avalanche snow sheds with narrow shoulders.",
      "approaches": [
        {
          "name": "Westbound Approach from Golden",
          "origin": "Golden, BC (800 m)",
          "distanceKm": 80.0,
          "distanceMiles": 49.7,
          "elevationGainM": 850,
          "elevationGainFt": 2788,
          "avgGradient": "3.5% (steeper 6-8% grades near Beaver River)",
          "maxGradient": "8.5%",
          "hairpins": 6,
          "description": "Gradual ascent following the Kicking Horse and Beaver valleys before climbing into the Selkirk crest."
        },
        {
          "name": "Eastbound Approach from Revelstoke",
          "origin": "Revelstoke, BC (458 m)",
          "distanceKm": 70.0,
          "distanceMiles": 43.5,
          "elevationGainM": 920,
          "elevationGainFt": 3018,
          "avgGradient": "4.0% (sustained 6-8% grades past Illecillewaet)",
          "maxGradient": "8.0%",
          "hairpins": 8,
          "description": "Scenic climb along the Illecillewaet River into the heart of Glacier National Park."
        }
      ],
      "bestSeason": "July through September (driest weather and warmest daytime temperatures)",
      "safetyTips": [
        "High-visibility front and rear blinking lights are strictly mandatory when riding through the unlit snow sheds.",
        "Dress in layers: summit temperatures at 1,330 m can drop rapidly during afternoon alpine storms.",
        "Carry bear spray and store food securely; grizzly bears frequently forage along the highway verges.",
        "Take the designated pedestrian/cyclist bypass pathways where available outside the snow sheds."
      ]
    },
    "drivingInfo": {
      "summary": "The Trans-Canada Highway 1 over Rogers Pass is a high-volume, multi-lane national arterial highway engineered for heavy commercial freight and passenger travel across the Canadian Rockies and Columbia Mountains.",
      "characteristics": [
        "Paved multi-lane highway with passing lanes, concrete median barriers, and engineered snow sheds.",
        "Toll-free national highway; stopping for recreational use in Glacier National Park requires a Parks Canada pass.",
        "Heavily patrolled by BC Highway Patrol with active commercial vehicle brake checks.",
        "Modern Rogers Pass Discovery Centre with interpretive exhibits, parking, and washroom facilities at the summit."
      ],
      "switchbacksCount": "Gradual sweeping curves and engineered climbing lanes; no sharp switchbacks",
      "safetyAndEtiquette": [
        "Obey posted variable speed limits on electronic overhead signs during winter storms.",
        "Commercial trucks must stop at designated brake-check pullouts before descending east or west slopes.",
        "Never stop or park inside avalanche snow sheds under any circumstances.",
        "Watch for wildlife crossing the highway, particularly in early morning and dusk hours."
      ],
      "motorcycleTips": [
        "A premier Canadian motorcycle touring route with breathtaking views of Mount Sir Donald and the Illecillewaet Glacier.",
        "Watch for longitudinal pavement grooves and wet concrete surfaces inside the snow sheds."
      ]
    },
    "distancesTable": [
      {
        "location": "Revelstoke, BC",
        "distance": "70 km (43.5 miles)",
        "route": "Trans-Canada Hwy 1 West",
        "notes": "Ski resort city on the Columbia River & Mount Revelstoke NP"
      },
      {
        "location": "Golden, BC",
        "distance": "80 km (49.7 miles)",
        "route": "Trans-Canada Hwy 1 East",
        "notes": "Gateway to Kicking Horse Mountain Resort & Yoho NP"
      },
      {
        "location": "Field / Yoho National Park",
        "distance": "135 km (83.8 miles)",
        "route": "Hwy 1 East",
        "notes": "Takakkaw Falls, Emerald Lake & Kicking Horse Pass"
      },
      {
        "location": "Lake Louise, Alberta",
        "distance": "165 km (102.5 miles)",
        "route": "Hwy 1 East",
        "notes": "World-famous turquoise glacial lake & Banff National Park"
      },
      {
        "location": "Banff, Alberta",
        "distance": "220 km (136.7 miles)",
        "route": "Hwy 1 East",
        "notes": "Iconic resort town in Banff National Park"
      },
      {
        "location": "Calgary, Alberta",
        "distance": "345 km (214.3 miles)",
        "route": "Hwy 1 East",
        "notes": "Major Western Canadian metropolitan hub & international airport"
      },
      {
        "location": "Kamloops, BC",
        "distance": "285 km (177.1 miles)",
        "route": "Hwy 1 West",
        "notes": "Thompson River junction & Coquihalla connector"
      },
      {
        "location": "Vancouver, BC",
        "distance": "635 km (394.5 miles)",
        "route": "Hwy 1 / Coquihalla Hwy 5",
        "notes": "Pacific Coast metropolis & port"
      }
    ],
    "isSeasonal": false,
    "seasonalClosureInfo": {
      "typicalClosure": "Open Year-Round 365 Days (Intermittent 1-3 hr avalanche control closures during heavy winter storms)",
      "typicalReopening": "Immediate reopening upon completion of avalanche artillery blasting and rotary plow clearing",
      "description": "Unlike seasonal alpine passes, Rogers Pass on the Trans-Canada Highway 1 is maintained open 365 days a year. During major winter storms with extreme avalanche hazard, Parks Canada and the Canadian Armed Forces temporarily close the highway for controlled 105mm artillery firing to trigger slides safely. Highway closures typically last between 1 to 4 hours."
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Bright Alpine Sun & Clear Sky",
        "tempHighF": 66,
        "tempLowF": 46,
        "icon": "sun"
      },
      {
        "day": "Tomorrow",
        "condition": "Mostly Sunny & Warm",
        "tempHighF": 68,
        "tempLowF": 48,
        "icon": "sun"
      },
      {
        "day": "Day 3",
        "condition": "Passing Mountain Clouds",
        "tempHighF": 63,
        "tempLowF": 44,
        "icon": "cloud-sun"
      },
      {
        "day": "Day 4",
        "condition": "Scattered Afternoon Showers",
        "tempHighF": 60,
        "tempLowF": 42,
        "icon": "rain"
      },
      {
        "day": "Day 5",
        "condition": "Sunny Intervals & Clear Horizon",
        "tempHighF": 65,
        "tempLowF": 45,
        "icon": "sun"
      }
    ],
    "dataSources": [
      {
        "name": "DriveBC (BC Ministry of Transportation and Infrastructure)",
        "type": "Official British Columbia Highway Conditions & Live Webcams",
        "url": "https://www.drivebc.ca"
      },
      {
        "name": "Parks Canada – Glacier National Park",
        "type": "National Park Road Status, Avalanche Reports & Visitor Information",
        "url": "https://parks.canada.ca/pn-np/bc/glacier"
      },
      {
        "name": "Environment and Climate Change Canada (ECCC)",
        "type": "Official Canadian Mountain Weather & Forecasts",
        "url": "https://weather.gc.ca"
      },
      {
        "name": "Avalanche Canada",
        "type": "Public Avalanche Bulletins for the Selkirk Mountains",
        "url": "https://www.avalanche.ca"
      },
      {
        "name": "LivePassWatch Verification Methodology",
        "type": "Transparent Real-Time Road Data Verification Protocol",
        "url": "/methodology"
      }
    ],
    "faqs": [
      {
        "question": "What is the Rogers Pass opening date? / When does Rogers Pass open?",
        "answer": "Rogers Pass on the Trans-Canada Highway 1 does not have a seasonal opening date because it is maintained OPEN year-round (365 days a year) by Parks Canada and DriveBC. Short temporary closures (typically 1 to 4 hours) occur during winter for active avalanche artillery control. / Le col Rogers est ouvert 365 jours par an."
      },
      {
        "question": "Is Rogers Pass open today and is Rogers Pass open right now?",
        "answer": "Yes, Rogers Pass on Trans-Canada Highway 1 is currently OPEN to all traffic through Glacier National Park between Revelstoke and Golden. The highway surface is bare and dry. Real-time updates from DriveBC are refreshed every 5 minutes on LivePassWatch."
      },
      {
        "question": "What are the current Rogers Pass road conditions and pass status report?",
        "answer": "Current road conditions on Highway 1 through Rogers Pass are bare, dry, and in good driving condition with normal traffic flow in both directions across the 70 km park corridor."
      },
      {
        "question": "What is the Rogers Pass road status?",
        "answer": "The official road status from DriveBC and Parks Canada is OPEN with normal summer highway driving conditions."
      },
      {
        "question": "Is Rogers Pass closed today or is Rogers Pass is closed?",
        "answer": "No, Rogers Pass is NOT closed today; it is open for all travel between Revelstoke and Golden on Trans-Canada Highway 1."
      },
      {
        "question": "Where can I view the Rogers Pass live webcam, cameras, and summit camera?",
        "answer": "LivePassWatch features live high-definition DriveBC webcams for Rogers Pass, including the Summit East (1,330 m), Summit West, Heather Hill / East Portal (1,150 m), and Albert Canyon approaches directly in the webcam section above."
      },
      {
        "question": "When does Rogers Pass close for winter and is Rogers Pass open in winter?",
        "answer": "Rogers Pass does NOT close for the winter. It remains open 365 days a year as Canada's primary east-west transportation artery. During severe winter blizzards, Parks Canada and the Canadian Armed Forces execute brief, controlled 1 to 3 hour closures for Howitzer avalanche control (Operation PALFISH)."
      },
      {
        "question": "What is the Rogers Pass elevation and how high is Rogers Pass?",
        "answer": "The summit elevation of Rogers Pass is 1,330 meters (4,364 feet / 4,375 ft) above sea level, located in the Selkirk Mountains of British Columbia within Glacier National Park."
      },
      {
        "question": "What are the Rogers Pass snow conditions and snow depth?",
        "answer": "During the summer season, the road pavement is 100% bare and dry. In winter, Rogers Pass receives over 12 to 15 meters (40 to 50 feet) of cumulative snowfall, making it one of the snowiest highway passes in North America."
      },
      {
        "question": "What is the Rogers Pass weather today and forecast?",
        "answer": "Current summit weather at Rogers Pass features bright alpine sunshine with daytime temperatures around 18°C (64°F) and light westerly winds. Check the 5-day mountain weather forecast above before traveling."
      },
      {
        "question": "What are the Rogers Pass chain requirements and winter tire rules in British Columbia?",
        "answer": "Under British Columbia law, winter tires (M+S or 3PMSF severe snow rated with minimum 3.5 mm tread depth) are mandatory on Highway 1 through Rogers Pass from October 1 to April 30. Commercial trucks over 11,794 kg must carry tire chains during this period."
      },
      {
        "question": "What highway is Rogers Pass and where is Rogers Pass located?",
        "answer": "Rogers Pass is located on the Trans-Canada Highway (BC Highway 1) in British Columbia, Canada, situated inside Glacier National Park between the towns of Revelstoke (70 km west) and Golden (80 km east)."
      },
      {
        "question": "How to get to Rogers Pass and what are the driving directions?",
        "answer": "From the west (Vancouver / Kamloops / Revelstoke), follow Trans-Canada Highway 1 east for 70 km from Revelstoke up to the summit. From the east (Calgary / Banff / Golden), follow Trans-Canada Highway 1 west for 80 km from Golden into Glacier National Park."
      }
    ],
    "customSeo": {
      "h1": "Rogers Pass : Road Conditions, Live Webcams, Weather & Open/Closed Status",
      "title": "Rogers Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Real-time Rogers Pass road status (1,330 m, Trans-Canada Hwy 1), DriveBC live summit webcams, Glacier National Park weather, snow depth, avalanche alerts & opening report."
    },
    "searchKeywords": [
      "Rogers Pass opening date",
      "Rogers Pass is open",
      "Rogers Pass road conditions",
      "Rogers Pass road status",
      "Rogers Pass pass status report",
      "when does Rogers Pass open",
      "Rogers Pass closed",
      "Rogers Pass is closed",
      "Rogers Pass is it open today",
      "is Rogers Pass closed today",
      "Rogers Pass webcam",
      "Rogers Pass live webcam",
      "Rogers Pass cameras",
      "Rogers Pass summit camera",
      "when does Rogers Pass close for winter",
      "Rogers Pass map",
      "is Rogers Pass open right now",
      "Rogers Pass weather today",
      "Rogers Pass snow",
      "Rogers Pass snow depth",
      "Rogers Pass snow conditions",
      "Rogers Pass elevation",
      "Rogers Pass open",
      "Rogers Pass when will open",
      "Rogers Pass passes open",
      "Rogers Pass closures today",
      "is Rogers Pass open",
      "is Rogers Pass open in winter",
      "Rogers Pass weather",
      "Rogers Pass directions",
      "Rogers Pass closing date",
      "Rogers Pass",
      "Rogers Pass forecast",
      "Rogers Pass chain requirements",
      "Rogers Pass traction tires",
      "Rogers Pass highway",
      "Rogers Pass milepost",
      "how high is Rogers Pass",
      "what highway is Rogers Pass",
      "where is Rogers Pass",
      "how to get to Rogers Pass",
      "DriveBC Rogers Pass webcam",
      "DriveBC Highway 1 Rogers Pass",
      "Glacier National Park road conditions",
      "Col Rogers Colombie-Britannique"
    ]
  },
  {
    "id": "simplon-pass",
    "slug": "simplon-pass",
    "name": "Simplon Pass (Simplonpass / Passo del Sempione)",
    "alternateNames": [
      "Simplonpass",
      "Passo del Sempione",
      "Col du Simplon",
      "Simplon Pass Road",
      "Nationalstrasse A9 Simplon",
      "Route 9 E62 Switzerland"
    ],
    "country": "Switzerland",
    "countryCode": "CHE",
    "continent": "Europe",
    "state": "Valais",
    "highway": "National Road A9 / Route 9 (E62)",
    "elevationFt": 6578,
    "elevationM": 2005,
    "coordinates": {
      "lat": 46.2506,
      "lng": 8.0331
    },
    "status": "OPEN",
    "statusDetail": "National Road A9 across Simplon Pass (2,005 m) is OPEN year-round to all vehicles with dry, clear alpine pavement. Winter plowing and anti-icing operations active.",
    "lastUpdated": "5 minutes ago",
    "description": "Simplon Pass (2,005 m / 6,578 ft), known in German as Simplonpass and in Italian as Passo del Sempione, is a major transalpine mountain pass carrying National Road A9 (E62) across the Pennine and Lepontine Alps in the Canton of Valais (Wallis), Switzerland. Connecting Brig in the Upper Rhone Valley with Domodossola and the Piedmont region of Northern Italy, it is celebrated globally as one of the few high alpine passes engineered to remain open year-round 365 days a year. The pass is protected by over 30 modern avalanche galleries, massive concrete snow sheds, the monumental Ganter Bridge (Ganterbrücke), the historic Napoleon-commissioned Simplon Hospice (Hospiz), and the iconic stone eagle monument (Steinadler).",
    "image": "/simplon-pass-switzerland-valais.webp",
    "weather": {
      "tempF": 48,
      "tempC": 9,
      "condition": "Clear & Sunny Alpine Skies",
      "icon": "sun"
    },
    "snowDepth": {
      "depthCm": 0,
      "depthIn": 0,
      "condition": "Clear Pavement (Dry / Seasonal Winter Treatment)"
    },
    "wind": {
      "speedKmh": 14,
      "speedMph": 9,
      "direction": "SW",
      "description": "Moderate Mountain Breeze"
    },
    "roadCondition": "Bare, dry asphalt across the 2,005 m summit plateau and both ramps. The Ganterbrücke bridge section and Schallbett avalanche galleries are clear of obstructions. Open to passenger cars, motorhomes, freight trucks, and motorcycles. Winter motorists must carry snow chains or mount approved winter tires (M+S / 3PMSF) from October through April during snowfall.",
    "chainRequirement": "No restrictions currently active. Winter equipment (chains or 3PMSF snow tires) mandatory for freight and passenger vehicles during active alpine snowfall.",
    "cameras": [
      {
        "id": "simplon-cam-summit",
        "title": "Simplon Pass Summit & Hospiz (2,005 m / 6,578 ft)",
        "image": "/simplon-pass-switzerland-valais.webp",
        "timestamp": "Live Feed Refreshed",
        "location": "Simplon Passhöhe & Hospiz Plateau",
        "milepost": "A9 Route 9 Summit (KM 22.4)",
        "direction": "Northbound / Southbound Overlook toward Monte Leone",
        "source": "Brig-Simplon Tourismus / ASTRA",
        "updateIntervalMs": 60000,
        "officialUrl": "https://brigtourismus.roundshot.com"
      },
      {
        "id": "simplon-cam-rothwald",
        "title": "Rothwald & Schallbett Avalanche Gallery (1,745 m)",
        "image": "/simplon-pass.webp",
        "timestamp": "Live Feed Refreshed",
        "location": "Rothwald Upper Mountain Section",
        "milepost": "A9 North Approach (KM 14.8)",
        "direction": "Northbound Ascent toward Simplon Pass Crest",
        "source": "Kanton Wallis Dienststelle für Mobilität / TCS",
        "updateIntervalMs": 60000,
        "officialUrl": "https://www.tcs.ch/de/verkehrsinfo/verkehrslage/"
      },
      {
        "id": "simplon-cam-ganter",
        "title": "Ganter Bridge & Schallberg North Ramp (1,450 m)",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Ganterbrücke Bridge Crossing & Valley View",
        "milepost": "Route 9 North Approach (KM 9.2)",
        "direction": "Ascent toward Rothwald & Simplon Pass",
        "source": "ASTRA / FEDRO Swiss National Roads",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.verkehrsinfo.ch"
      },
      {
        "id": "simplon-cam-gondo",
        "title": "Gondo Gorge & Swiss-Italian Customs Checkpoint (855 m)",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "timestamp": "Live Feed Refreshed",
        "location": "Gondo Border Post & Doveria River Canyon",
        "milepost": "A9 South Ramp (KM 42.0)",
        "direction": "Southbound Transit into Italy (Iselle / Domodossola)",
        "source": "Eidgenössische Zollverwaltung / Polizia di Stato",
        "updateIntervalMs": 120000,
        "officialUrl": "https://www.astra.admin.ch"
      }
    ],
    "nearbyPasses": [
      {
        "id": "great-st-bernard-pass",
        "slug": "great-st-bernard-pass",
        "name": "Great St Bernard Pass (Col du Grand-Saint-Bernard)",
        "country": "Switzerland / Italy",
        "state": "Valais & Aosta Valley",
        "highway": "Route 21 / SS27",
        "status": "OPEN",
        "elevationFt": 8094,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 95
      },
      {
        "id": "furka-pass",
        "slug": "furka-pass",
        "name": "Furka Pass (Furkapass)",
        "country": "Switzerland",
        "state": "Valais & Uri",
        "highway": "Hauptstrasse 19",
        "status": "OPEN",
        "elevationFt": 7969,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 68
      },
      {
        "id": "grimsel-pass",
        "slug": "grimsel-pass",
        "name": "Grimsel Pass (Grimselpass)",
        "country": "Switzerland",
        "state": "Bern & Valais",
        "highway": "Hauptstrasse 6",
        "status": "OPEN",
        "elevationFt": 7100,
        "lastUpdated": "5 minutes ago",
        "distanceKm": 72
      }
    ],
    "overview": {
      "openedYear": 1805,
      "lengthMiles": 28.0,
      "lengthKm": 45.0,
      "annualSnowfallIn": 320,
      "annualSnowfallM": 8.1,
      "summary": "Simplon Pass (elevation 2,005 m / 6,578 ft), known in German as Simplonpass and in Italian as Passo del Sempione, is a major international transalpine highway corridor linking the German-speaking Upper Valais (Brig-Glis) in Switzerland with the Italian-speaking Val Divedro and Domodossola in Piedmont, Italy. Operating along Swiss National Road A9 and European route E62, it is world-renowned for its remarkable year-round accessibility across a 2,000-meter alpine summit. First developed into a paved carriage road by Napoleon Bonaparte between 1801 and 1805 to transport his artillery into Italy, the pass has been continuously upgraded with monumental civil engineering works—including the award-winning Ganter Bridge (Ganterbrücke), over thirty avalanche galleries and rockfall shelters, and the historic Simplon Hospice administered by the Canons Regular of Saint Augustine. Today, it serves as an indispensable year-round transit artery for international freight, tourists, road cyclists, and transalpine motorists."
    },
    "historicalSections": [
      {
        "title": "Napoleon Bonaparte & the First Engineered Alpine Highway (1801–1805)",
        "content": "Following his dramatic 1800 crossing of the Great Saint Bernard Pass with the French Reserve Army, Napoleon Bonaparte recognized the urgent strategic need for a wide, low-grade road capable of carrying heavy military artillery year-round between Paris and Milan. In 1801, Napoleon ordered French military engineer Nicolas Céard to construct an engineered highway over the Simplon. Completed in 1805, Céard's masterpiece featured broad sweeping curves, gentle gradients not exceeding 9%, and eight custom stone tunnels and bridges. It became the first modern engineered road across the High Alps and set the international standard for 19th-century mountain road construction."
      },
      {
        "title": "Kaspar Stockalper, the Stockalper Trail & Alter Spittel",
        "content": "Centuries before Napoleon's highway, 17th-century Brig merchant and entrepreneur Kaspar Stockalper ('King of the Simplon') established a commercial monopoly on the pass. Stockalper constructed a paved mule track (the Stockalper Trail or Stockalperweg), built staging posts, and erected the Alter Spittel refuge on the southern pass approach in 1666 to provide food, shelter, and medical care for winter couriers and travelers. The Stockalperweg is preserved today as one of Switzerland's premier historical cultural hiking routes."
      },
      {
        "title": "The Simplon Hospice & the Monumental Stone Eagle (Steinadler)",
        "content": "On the pass summit stands the imposing Simplon Hospice (Hospiz auf dem Simplon), commissioned by Napoleon in 1801 and completed in 1831 by the Augustinian monks of the Great Saint Bernard. For nearly two centuries, the monks and their legendary Saint Bernard dogs provided round-the-clock shelter and mountain rescue. Nearby on the summit plateau rises the monumental Simplon Eagle (Steinadler), a 9-meter (30 ft) hand-carved stone sculpture erected during World War II by Swiss Mountain Brigade 11 to symbolize the vigilance, courage, and armed neutrality of the Swiss army guarding the southern alpine frontier."
      },
      {
        "title": "The Ganter Bridge (Ganterbrücke): A Swiss Masterpiece of Modern Engineering",
        "content": "Constructed between 1976 and 1980 on the northern ascent from Brig, the Ganter Bridge (Ganterbrücke) designed by legendary Swiss structural engineer Christian Menn is an international architectural icon. Spanning 674 meters (2,211 ft) across the deep Ganter Valley at a height of 150 meters, this innovative extradosed prestressed concrete cable-stayed bridge forms a graceful S-curve, seamlessly integrating high-speed modern highway geometry into the rugged alpine topography."
      },
      {
        "title": "The Simplon Railway Tunnel (1906) & BLS Car Train Shuttle (Autoverlad)",
        "content": "Running far beneath the pass, the 19.8 km (12.3 mi) Simplon Railway Tunnel opened in 1906 and was the world's longest tunnel for over 75 years. The railway provides a fast, all-weather alternative to the mountain pass road through the BLS car train shuttle (Autoverlad Brig–Iselle), which transports passenger vehicles through the mountain in just 20 minutes every 60–90 minutes, ensuring uninterrupted transalpine transit during severe winter blizzards."
      }
    ],
    "narrativeSections": [
      {
        "title": "Regional Language (Deutsch): Simplonpass – Ganzjährige Alpenüberquerung & Strassenzustand",
        "content": "Der Simplonpass (2.005 m ü. M.) verbindet das Oberwallis (Brig-Glis) auf der Nationalstrasse A9 / Route 9 mit dem Val Divedro und Domodossola in Italien. Als eine der bedeutendsten Alpentransversalen der Schweiz ist der Simplonpass dank modernster Lawinenschutzgalerien, permanenter Schneeräumung durch das Bundesamt für Strassen (ASTRA) und die Dienststelle für Mobilität des Kantons Wallis ganzjährig 365 Tage im Jahr geöffnet. Bei heftigen Schneefällen oder Schneestürmen gilt auf der Passhöhe kurzfristig Schneekettenpflicht oder Winterausrüstung für Lastwagen und Personenwagen. Alternativ steht der BLS-Autoverlad Brig–Iselle zur Verfügung."
      },
      {
        "title": "Regional Language (Italiano): Passo del Sempione – Collegamento Transalpino Svizzera-Italia",
        "content": "Il Passo del Sempione (2.005 m s.l.m.) è uno dei valichi alpini più importanti e spettacolari d'Europa, collegando il Canton Vallese (Briga) con la Val d'Ossola e Domodossola in Piemonte lungo la Strada Nazionale A9 / E62. A differenza della maggior parte dei passi alpini di oltre 2.000 metri, il Sempione è aperto tutto l'anno grazie a imponenti gallerie paravalanghe e al servizio continuo di sgombero neve di ASTRA. Durante l'inverno sono obbligatori pneumatici invernali o catene a bordo in caso di precipitazioni nevose."
      },
      {
        "title": "English Translation & Technical Travel Guide: Safe Transalpine Driving on Simplon Pass",
        "content": "Simplon Pass offers a world-class, multi-lane transalpine driving experience with sweeping curves, high-speed avalanche protective galleries, and expansive summit overlooks. Motorists traveling between Switzerland and Northern Italy can drive the pass without road tolls (Swiss motorway vignette required on Nationalstrasse A9). Winter driving conditions are continuously monitored by ASTRA and Valais cantonal road services with anti-icing brine spraying and rotary snow blowers. When driving in winter, ensure your vehicle is fitted with certified winter tires (3PMSF) and carry snow chains in the trunk."
      }
    ],
    "dataSources": [
      {
        "name": "ASTRA / FEDRO (Bundesamt für Strassen / Federal Roads Office)",
        "url": "https://www.astra.admin.ch",
        "type": "Official National Roads Authority"
      },
      {
        "name": "TCS (Touring Club Schweiz / Swiss Touring Club)",
        "url": "https://www.tcs.ch/de/verkehrsinfo/verkehrslage/",
        "type": "Official Traffic & Alpine Pass Telemetry"
      },
      {
        "name": "Dienststelle für Mobilität Kanton Wallis (Service de la mobilité)",
        "url": "https://www.vs.ch",
        "type": "Cantonal Highway & Infrastructure Department"
      },
      {
        "name": "LivePassWatch Multi-Source Verification Methodology",
        "url": "/methodology",
        "type": "Independent Telemetry Corroboration Engine"
      }
    ],
    "faqs": [
      {
        "question": "Is Simplon Pass open today or is it closed?",
        "answer": "Simplon Pass is OPEN today to all vehicles. As a major Swiss national road (A9/E62), the pass is maintained 365 days a year by the Federal Roads Office (ASTRA) and the Canton of Valais highway department. Unlike seasonal Swiss passes, it remains open year-round with continuous winter snowplow and anti-icing operations. Check the live status badge and webcams above for current road condition updates."
      },
      {
        "question": "What are the current Simplon Pass road conditions and road status?",
        "answer": "Current Simplon Pass road conditions feature bare, dry asphalt across the 2,005 m summit crest and through the Ganterbrücke and Schallbett avalanche galleries. Traffic is flowing smoothly in both directions between Brig, Switzerland and Domodossola, Italy. Road condition telemetry is verified every 5 to 15 minutes directly from ASTRA and TCS sensors."
      },
      {
        "question": "When does Simplon Pass open and what is the typical opening date?",
        "answer": "Simplon Pass does not have a seasonal opening date because it remains open year-round 365 days a year. It does not close for the winter season like the nearby Furka, Grimsel, or Susten passes. If temporary storm closures occur during heavy blizzards, rotary snow blowers reopen the highway within a few hours."
      },
      {
        "question": "When does Simplon Pass close for winter?",
        "answer": "Simplon Pass does not close for the winter. Thanks to over 30 protective avalanche galleries, heavy snow sheds, and continuous 24/7 snowplowing by Swiss cantonal road crews, National Road A9 across Simplon Pass stays operational throughout the entire winter season."
      },
      {
        "question": "Does Simplon Pass have a live webcam and summit camera?",
        "answer": "Yes, Simplon Pass features multiple verified live webcams including the Simplon Pass Summit & Hospiz camera (2,005 m), the Rothwald/Schallbett avalanche gallery camera, the Ganter Bridge overlook, and the Gondo Swiss-Italian customs checkpoint. All camera feeds update continuously on this page."
      },
      {
        "question": "What is the official elevation of Simplon Pass?",
        "answer": "The official summit elevation of Simplon Pass is 2,005 meters (6,578 feet) above sea level. It connects the Rhone Valley in Switzerland (elevation ~670 m at Brig) with the Val Divedro in Italy (elevation ~270 m at Domodossola)."
      },
      {
        "question": "What are the snow conditions and snow depth on Simplon Pass right now?",
        "answer": "Current snow conditions on Simplon Pass show clear, treated pavement on the main highway corridor. During winter months, summit snowpack can reach 2 to 4 meters along the roadsides, but heavy snow removal equipment keeps the roadway clear. Live snow depth telemetry is displayed in the status overview above."
      },
      {
        "question": "What weather today can travelers expect on Simplon Pass?",
        "answer": "Travelers on Simplon Pass today can expect clear alpine skies with temperatures around 9°C (48°F) at the summit. Alpine weather at 2,000 meters can change rapidly; drivers should check live summit weather and wind speed before crossing."
      },
      {
        "question": "Are tire chains or snow tires mandatory on Simplon Pass during winter?",
        "answer": "During winter storm events and active snowfall, traction restrictions (Kettenobligatorium / Winterausrüstung) can be mandated for freight trucks and passenger cars without 4WD. All motorists traveling between October and April are strongly advised to carry snow chains and have certified 3PMSF winter tires mounted."
      },
      {
        "question": "Where is Simplon Pass located on the map and what highway crosses it?",
        "answer": "Simplon Pass is located in the Canton of Valais in southwestern Switzerland, carrying Swiss National Road A9 (Route 9 / European route E62) across the Alps between Brig-Glis (Switzerland) and Domodossola (Piedmont, Italy). You can view the interactive route on our LivePassWatch Map page."
      },
      {
        "question": "What is the BLS car train shuttle (Autoverlad) through the Simplon Tunnel?",
        "answer": "The BLS Autoverlad Brig–Iselle is a rail car shuttle service that transports vehicles through the 19.8 km Simplon Railway Tunnel between Brig (Switzerland) and Iselle di Trasquera (Italy) in 20 minutes. It operates every 60–90 minutes and serves as an ideal winter storm alternative to driving the high mountain pass road."
      },
      {
        "question": "How is Simplon Pass road condition telemetry verified for safety?",
        "answer": "LivePassWatch aggregates real-time road condition telemetry directly from official Swiss and cantonal authorities, including the Federal Roads Office (ASTRA / FEDRO), Touring Club Schweiz (TCS), and the Valais Department of Mobility, corroborated via our multi-source verification methodology."
      }
    ],
    "customSeo": {
      "h1": "Simplon Pass : Live Webcams, Road Conditions, Weather & Open/Closed Status",
      "title": "Simplon Pass Live Webcam, Road Conditions & Opening Status | LivePassWatch",
      "description": "Real-time Simplon Pass road conditions (2,005 m, National Road A9), live summit webcams, Swiss Alps weather, snow depth, chain laws & transalpine status report."
    },
    "searchKeywords": [
      "Simplon Pass",
      "Simplonpass",
      "Passo del Sempione",
      "Simplon Pass opening date",
      "Simplon Pass is open",
      "Simplon Pass road conditions",
      "Simplon Pass road status",
      "Simplon Pass pass status report",
      "when does Simplon Pass open",
      "Simplon Pass closed",
      "Simplon Pass is closed",
      "Simplon Pass is it open today",
      "is Simplon Pass closed today",
      "Simplon Pass webcam",
      "Simplon Pass live webcam",
      "Simplon Pass cameras",
      "Simplon Pass summit camera",
      "when does Simplon Pass close for winter",
      "Simplon Pass map",
      "is Simplon Pass open right now",
      "Simplon Pass weather today",
      "Simplon Pass snow",
      "Simplon Pass snow depth",
      "Simplon Pass snow conditions",
      "Simplon Pass elevation",
      "Simplon Pass open",
      "Col du Simplon",
      "Ganterbrücke webcam",
      "Simplon Hospice webcam",
      "A9 Simplon road status",
      "Brig Domodossola pass conditions"
    ]
  }
];

export function getPassBySlug(slug: string): MountainPass | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  return passesData.find(
    p => p.slug.toLowerCase() === clean || p.id.toLowerCase() === clean
  );
}

export function searchPasses(query: string): MountainPass[] {
  if (!query) return passesData;
  const q = query.toLowerCase().trim();
  return passesData.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.highway.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      (p.continent && p.continent.toLowerCase().includes(q))
  );
}

export function getPassesByStatus(status: string): MountainPass[] {
  return passesData.filter(p => p.status === status);
}

export function getPassStats() {
  const total = passesData.length;
  const open = passesData.filter(p => p.status === 'OPEN').length;
  const caution = passesData.filter(p => p.status === 'CAUTION').length;
  const closed = passesData.filter(p => p.status === 'CLOSED').length;
  const unknown = passesData.filter(p => p.status === 'UNKNOWN').length;

  return {
    total,
    open,
    caution,
    closed,
    unknown,
    monitored: '10,000+',
    totalCameras: passesData.reduce((acc, p) => acc + (p.cameras ? p.cameras.length : 0), 0),
    countries: Array.from(new Set(passesData.map(p => p.country))).length,
    states: Array.from(new Set(passesData.map(p => p.state))).length,
    globalSummary: {
      open: 8420,
      caution: 512,
      closed: 184,
      monitored: '10,000+'
    }
  };
}

export function cleanSlug(str: string): string {
  if (!str) return '';
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ø/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/&/g, ' ')
    .replace(/[\s\/]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getCountrySlug(country: string): string {
  if (!country) return '';
  if (country === 'Switzerland / Italy' || country === 'Switzerland & Italy') return 'switzerland-italy';
  return cleanSlug(country);
}

export function getStateSlug(state?: string, passSlug?: string): string {
  if (!state) return '';
  if (state === 'Jammu & Kashmir' || passSlug === 'zoji-la') return 'jammu-and-kashmir';
  if (state === 'Hautes-Alpes & Savoie' || passSlug === 'col-du-galibier') return 'hautes-alpes-savoie';
  if (state === 'Savoie' || passSlug === 'col-de-l-iseran') return 'savoie';
  if (state === 'Valais & Aosta Valley' || passSlug === 'great-st-bernard-pass') return 'valais-aosta-valley';
  if (state === 'Bern & Valais' || passSlug === 'grimsel-pass') return 'bern-valais';
  if (state === 'Bern & Uri' || passSlug === 'susten-pass') return 'bern-uri';
  if (state === 'British Columbia' || passSlug === 'rogers-pass') return 'british-columbia';
  if (state === 'Uri & Ticino' || state === 'Uri / Ticino' || passSlug === 'gotthard-pass') return 'uri-ticino';
  if (state === 'Graubünden' || state === 'Grisons' || passSlug === 'bernina-pass') return 'graubunden';
  if (state === 'Møre og Romsdal' || passSlug === 'trollstigen-pass') return 'more-og-romsdal';
  if (state === 'Valais' || passSlug === 'simplon-pass') return 'valais';
  return cleanSlug(state);
}

export function getPassUrl(pass: { country: string; state?: string; slug: string }): string {
  const countrySlug = getCountrySlug(pass.country);
  const stateSlug = getStateSlug(pass.state, pass.slug);
  return stateSlug ? `/passes/${countrySlug}/${stateSlug}/${pass.slug}` : `/passes/${countrySlug}/${pass.slug}`;
}


