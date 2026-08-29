export interface HierarchyNodePass {
  id: string;
  slug: string;
  name: string;
  highway: string;
  elevationFt: number;
  elevationM: number;
  status: 'OPEN' | 'CAUTION' | 'CLOSED' | 'UNKNOWN' | 'MONITORED';
  image: string;
}

export interface HierarchyState {
  id: string;
  name: string;
  passes: HierarchyNodePass[];
}

export interface HierarchyCountry {
  id: string;
  name: string;
  code: string;
  flagEmoji: string;
  states: HierarchyState[];
}

export interface HierarchyContinent {
  id: string;
  name: string;
  icon: string;
  countries: HierarchyCountry[];
}

export const hierarchyData: HierarchyContinent[] = [
  {
    "id": "north-america",
    "name": "North America",
    "icon": "globe",
    "countries": [
      {
        "id": "united-states",
        "name": "United States",
        "code": "USA",
        "flagEmoji": "🇺🇸",
        "states": [
          {
            "id": "washington",
            "name": "Washington",
            "passes": [
              {
                "id": "snoqualmie-pass",
                "slug": "snoqualmie-pass",
                "name": "Snoqualmie Pass",
                "highway": "I-90",
                "elevationFt": 3022,
                "elevationM": 921,
                "status": "OPEN",
                "image": "/snoqualmie-pass.jpg"
              },
              {
                "id": "stevens-pass",
                "slug": "stevens-pass",
                "name": "Stevens Pass",
                "highway": "US 2",
                "elevationFt": 4061,
                "elevationM": 1238,
                "status": "OPEN",
                "image": "/stevens-pass.webp"
              },
              {
                "id": "blewett-pass",
                "slug": "blewett-pass",
                "name": "Blewett Pass",
                "highway": "US-97",
                "elevationFt": 4102,
                "elevationM": 1250,
                "status": "OPEN",
                "image": "/blewett-pass.jpg"
              },
              {
                "id": "chinook-pass",
                "slug": "chinook-pass",
                "name": "Chinook Pass",
                "highway": "SR 410",
                "elevationFt": 5430,
                "elevationM": 1655,
                "status": "OPEN",
                "image": "/chinook-pass.jpg"
              },
              {
                "id": "cayuse-pass",
                "slug": "cayuse-pass",
                "name": "Cayuse Pass",
                "highway": "SR 123",
                "elevationFt": 4694,
                "elevationM": 1431,
                "status": "OPEN",
                "image": "/cayuse-pass.jpg"
              },
              {
                "id": "north-cascades-pass",
                "slug": "north-cascades-pass",
                "name": "North Cascades Pass",
                "highway": "SR 20",
                "elevationFt": 5477,
                "elevationM": 1669,
                "status": "OPEN",
                "image": "/north-cascades-pass.jpg"
              },
              {
                "id": "sherman-pass",
                "slug": "sherman-pass",
                "name": "Sherman Pass",
                "highway": "SR 20",
                "elevationFt": 5577,
                "elevationM": 1700,
                "status": "OPEN",
                "image": "/sherman-pass.jpg"
              },
              {
                "id": "white-pass",
                "slug": "white-pass",
                "name": "White Pass",
                "highway": "US 12",
                "elevationFt": 4500,
                "elevationM": 1372,
                "status": "OPEN",
                "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
              },
              {
                "id": "loup-loup-pass",
                "slug": "loup-loup-pass",
                "name": "Loup Loup Pass",
                "highway": "SR 20",
                "elevationFt": 4020,
                "elevationM": 1225,
                "status": "OPEN",
                "image": "/loup-loup-pass-washington.webp"
              },
              {
                "id": "status-pass",
                "slug": "status-pass",
                "name": "Status Pass",
                "highway": "US 97",
                "elevationFt": 3107,
                "elevationM": 947,
                "status": "OPEN",
                "image": "/status-pass.jpg"
              }
            ]
          },
          {
            "id": "colorado",
            "name": "Colorado",
            "passes": [
              {
                "id": "berthoud-pass",
                "slug": "berthoud-pass",
                "name": "Berthoud Pass",
                "highway": "US 40",
                "elevationFt": 11307,
                "elevationM": 3446,
                "status": "OPEN",
                "image": "/berthoud-pass-colorado.jpg"
              }
            ]
          },
          {
            "id": "california",
            "name": "California",
            "passes": [
              {
                "id": "donner-pass",
                "slug": "donner-pass",
                "name": "Donner Pass",
                "highway": "I-80",
                "elevationFt": 7056,
                "elevationM": 2151,
                "status": "OPEN",
                "image": "/donner-pass.jpg"
              }
            ]
          },
          {
            "id": "oregon",
            "name": "Oregon",
            "passes": [
              {
                "id": "santiam-pass",
                "slug": "santiam-pass",
                "name": "Santiam Pass",
                "highway": "US 20",
                "elevationFt": 4817,
                "elevationM": 1468,
                "status": "OPEN",
                "image": "/santiam-pass-oregon.jpg"
              },
              {
                "id": "siskiyou-summit",
                "slug": "siskiyou-summit",
                "name": "Siskiyou Summit",
                "highway": "I-5",
                "elevationFt": 4310,
                "elevationM": 1314,
                "status": "OPEN",
                "image": "/siskiyou-summit-oregon.jpg"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "europe",
    "name": "Europe",
    "icon": "globe",
    "countries": [
      {
        "id": "france",
        "name": "France",
        "code": "FRA",
        "flagEmoji": "🇫🇷",
        "states": [
          {
            "id": "hautes-alpes-savoie",
            "name": "Hautes-Alpes & Savoie",
            "passes": [
              {
                "id": "col-du-galibier",
                "slug": "col-du-galibier",
                "name": "Col du Galibier Pass",
                "highway": "D902",
                "elevationFt": 8668,
                "elevationM": 2642,
                "status": "OPEN",
                "image": "/col-du-galibier.png"
              }
            ]
          }
        ]
      },
      {
        "id": "switzerland",
        "name": "Switzerland",
        "code": "CHE",
        "flagEmoji": "🇨🇭",
        "states": [
          {
            "id": "valais",
            "name": "Valais",
            "passes": [
              {
                "id": "furka-pass",
                "slug": "furka-pass",
                "name": "Furka Pass",
                "highway": "Hauptstrasse 19",
                "elevationFt": 7969,
                "elevationM": 2429,
                "status": "OPEN",
                "image": "/furka-pass-switzerland-road-conditions.webp"
              }
            ]
          }
        ]
      },
      {
        "id": "italy",
        "name": "Italy",
        "code": "ITA",
        "flagEmoji": "🇮🇹",
        "states": [
          {
            "id": "south-tyrol",
            "name": "South Tyrol",
            "passes": [
              {
                "id": "stelvio-pass",
                "slug": "stelvio-pass",
                "name": "Stelvio Pass (Passo dello Stelvio)",
                "highway": "SS38",
                "elevationFt": 9045,
                "elevationM": 2757,
                "status": "OPEN",
                "image": "/stelvio-pass-italy.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "norway",
        "name": "Norway",
        "code": "NOR",
        "flagEmoji": "🇳🇴",
        "states": [
          {
            "id": "more-og-romsdal",
            "name": "Møre og Romsdal",
            "passes": [
              {
                "id": "trollstigen-pass",
                "slug": "trollstigen-pass",
                "name": "Trollstigen (Fv63)",
                "highway": "Fv63",
                "elevationFt": 2815,
                "elevationM": 858,
                "status": "OPEN",
                "image": "/trollstigen-pass-road-status-webcam.webp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "asia",
    "name": "Asia",
    "icon": "mountain",
    "countries": [
      {
        "id": "india",
        "name": "India",
        "code": "IND",
        "flagEmoji": "🇮🇳",
        "states": [
          {
            "id": "ladakh",
            "name": "Ladakh",
            "passes": [
              {
                "id": "khardung-la",
                "slug": "khardung-la",
                "name": "Khardung La",
                "highway": "Leh-Nubra Rd",
                "elevationFt": 17582,
                "elevationM": 5359,
                "status": "OPEN",
                "image": "/khardung-la-ladakh.jpg"
              },
              {
                "id": "chang-la-pass",
                "slug": "chang-la-pass",
                "name": "Chang La Pass",
                "highway": "Leh–Pangong Highway",
                "elevationFt": 17590,
                "elevationM": 5360,
                "status": "OPEN",
                "image": "/chang-la-pass-road-status-webcam.webp"
              }
            ]
          },
          {
            "id": "jammu-kashmir",
            "name": "Jammu & Kashmir",
            "passes": [
              {
                "id": "zoji-la",
                "slug": "zoji-la",
                "name": "Zoji La Pass (NH-1)",
                "highway": "NH-1",
                "elevationFt": 11575,
                "elevationM": 3528,
                "status": "OPEN",
                "image": "/zoji-la-pass-jammu-kashmir.jpg"
              }
            ]
          },
          {
            "id": "himachal-pradesh",
            "name": "Himachal Pradesh",
            "passes": [
              {
                "id": "rohtang-pass",
                "slug": "rohtang-pass",
                "name": "Rohtang Pass",
                "highway": "Leh-Manali Highway (NH-03)",
                "elevationFt": 13058,
                "elevationM": 3980,
                "status": "OPEN",
                "image": "/rohtang-pass-himachal-pradesh.jpg"
              }
            ]
          },
          {
            "id": "sikkim",
            "name": "Sikkim",
            "passes": [
              {
                "id": "nathu-la",
                "slug": "nathu-la",
                "name": "Nathu La Pass",
                "highway": "NH-310",
                "elevationFt": 14140,
                "elevationM": 4310,
                "status": "OPEN",
                "image": "/nathu-la-pass-sikkim.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "pakistan",
        "name": "Pakistan",
        "code": "PAK",
        "flagEmoji": "🇵🇰",
        "states": [
          {
            "id": "khyber-pakhtunkhwa",
            "name": "Khyber Pakhtunkhwa",
            "passes": [
              {
                "id": "khyber-pass",
                "slug": "khyber-pass",
                "name": "Khyber Pass",
                "highway": "N-5 Highway",
                "elevationFt": 3510,
                "elevationM": 1070,
                "status": "OPEN",
                "image": "/khyber-pass-khyber-pakhtunkhwa-pakistan.webp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "south-america",
    "name": "South America",
    "icon": "globe",
    "countries": [
      {
        "id": "chile",
        "name": "Chile",
        "code": "CHL",
        "flagEmoji": "🇨🇱",
        "states": [
          {
            "id": "valparaiso",
            "name": "Valparaíso",
            "passes": [
              {
                "id": "paso-los-libertadores",
                "slug": "paso-los-libertadores",
                "name": "Paso Los Libertadores",
                "highway": "Ruta 60-CH / RN 7",
                "elevationFt": 10499,
                "elevationM": 3200,
                "status": "OPEN",
                "image": "/paso-los-libertadores-chile-argentina.webp"
              }
            ]
          }
        ]
      },
      {
        "id": "argentina",
        "name": "Argentina",
        "code": "ARG",
        "flagEmoji": "🇦🇷",
        "states": [
          {
            "id": "mendoza",
            "name": "Mendoza",
            "passes": [
              {
                "id": "paso-los-libertadores",
                "slug": "paso-los-libertadores",
                "name": "Paso Los Libertadores",
                "highway": "RN 7 / Ruta 60-CH",
                "elevationFt": 10499,
                "elevationM": 3200,
                "status": "OPEN",
                "image": "/paso-los-libertadores-chile-argentina.webp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "africa",
    "name": "Africa",
    "icon": "compass",
    "countries": [
      {
        "id": "south-africa",
        "name": "South Africa",
        "code": "ZAF",
        "flagEmoji": "🇿🇦",
        "states": [
          {
            "id": "kwazulu-natal",
            "name": "KwaZulu-Natal",
            "passes": [
              {
                "id": "sani-pass",
                "slug": "sani-pass",
                "name": "Sani Pass",
                "highway": "Sani Pass Road (P318)",
                "elevationFt": 9429,
                "elevationM": 2874,
                "status": "OPEN",
                "image": "/sani-pass-south-africa-lesotho.jpg"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "oceania",
    "name": "Oceania",
    "icon": "waves",
    "countries": [
      {
        "id": "new-zealand",
        "name": "New Zealand",
        "code": "NZL",
        "flagEmoji": "🇳🇿",
        "states": [
          {
            "id": "canterbury",
            "name": "Canterbury",
            "passes": [
              {
                "id": "arthurs-pass",
                "slug": "arthurs-pass",
                "name": "Arthur's Pass",
                "highway": "State Highway 73",
                "elevationFt": 3018,
                "elevationM": 920,
                "status": "OPEN",
                "image": "/arthurs-pass.webp"
              }
            ]
          }
        ]
      }
    ]
  }
];
