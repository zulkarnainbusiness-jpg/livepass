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
    id: 'north-america',
    name: 'North America',
    icon: 'globe',
    countries: [
      {
        id: 'united-states',
        name: 'United States',
        code: 'USA',
        flagEmoji: '🇺🇸',
        states: [
          {
            id: 'washington',
            name: 'Washington',
            passes: [
              {
                id: 'snoqualmie-pass',
                slug: 'snoqualmie-pass',
                name: 'Snoqualmie Pass',
                highway: 'I-90',
                elevationFt: 3022,
                elevationM: 921,
                status: 'OPEN',
                image: '/snoqualmie-pass.jpg'
              },
              {
                id: 'stevens-pass',
                slug: 'stevens-pass',
                name: 'Stevens Pass',
                highway: 'US 2',
                elevationFt: 4061,
                elevationM: 1238,
                status: 'OPEN',
                image: '/stevens-pass.webp'
              },
              {
                id: 'blewett-pass',
                slug: 'blewett-pass',
                name: 'Blewett Pass',
                highway: 'US-97',
                elevationFt: 4102,
                elevationM: 1250,
                status: 'OPEN',
                image: '/blewett-pass.jpg'
              },
              {
                id: 'chinook-pass',
                slug: 'chinook-pass',
                name: 'Chinook Pass',
                highway: 'SR 410',
                elevationFt: 5430,
                elevationM: 1655,
                status: 'OPEN',
                image: '/chinook-pass.jpg'
              },
              {
                id: 'cayuse-pass',
                slug: 'cayuse-pass',
                name: 'Cayuse Pass',
                highway: 'SR 123',
                elevationFt: 4694,
                elevationM: 1431,
                status: 'OPEN',
                image: '/cayuse-pass.jpg'
              },
              {
                id: 'north-cascades-pass',
                slug: 'north-cascades-pass',
                name: 'North Cascades Pass',
                highway: 'SR 20',
                elevationFt: 5477,
                elevationM: 1669,
                status: 'OPEN',
                image: '/north-cascades-pass.jpg'
              },
              {
                id: 'sherman-pass',
                slug: 'sherman-pass',
                name: 'Sherman Pass',
                highway: 'SR 20',
                elevationFt: 5577,
                elevationM: 1700,
                status: 'OPEN',
                image: '/sherman-pass.jpg'
              },
              {
                id: 'white-pass',
                slug: 'white-pass',
                name: 'White Pass',
                highway: 'US 12',
                elevationFt: 4500,
                elevationM: 1372,
                status: 'OPEN',
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
              },
              {
                id: 'loup-loup-pass',
                slug: 'loup-loup-pass',
                name: 'Loup Loup Pass',
                highway: 'SR 20',
                elevationFt: 4020,
                elevationM: 1225,
                status: 'OPEN',
                image: '/loup-loup-pass-washington.webp'
              },
              {
                id: 'status-pass',
                slug: 'status-pass',
                name: 'Status Pass',
                highway: 'US 97',
                elevationFt: 3107,
                elevationM: 947,
                status: 'OPEN',
                image: '/status-pass.jpg'
              }
            ]

          },
          {
            id: 'colorado',
            name: 'Colorado',
            passes: [
              {
                id: 'loveland-pass',
                slug: 'loveland-pass',
                name: 'Loveland Pass',
                highway: 'US 6',
                elevationFt: 11990,
                elevationM: 3655,
                status: 'OPEN',
                image: '/loveland-pass-colorado.jpg'
              },
              {
                id: 'vail-pass',
                slug: 'vail-pass',
                name: 'Vail Pass',
                highway: 'I-70',
                elevationFt: 10662,
                elevationM: 3250,
                status: 'OPEN',
                image: '/vail-pass-colorado.jpg'
              },
              {
                id: 'berthoud-pass',
                slug: 'berthoud-pass',
                name: 'Berthoud Pass',
                highway: 'US 40',
                elevationFt: 11307,
                elevationM: 3446,
                status: 'OPEN',
                image: '/berthoud-pass-colorado.jpg'
              },
              {
                id: 'independence-pass',
                slug: 'independence-pass',
                name: 'Independence Pass',
                highway: 'CO 82',
                elevationFt: 12095,
                elevationM: 3687,
                status: 'CLOSED',
                image: '/independence-pass-colorado.jpg'
              },
              {
                id: 'monarch-pass',
                slug: 'monarch-pass',
                name: 'Monarch Pass',
                highway: 'US 50',
                elevationFt: 11312,
                elevationM: 3448,
                status: 'OPEN',
                image: '/monarch-pass-colorado.jpg'
              },
              {
                id: 'wolf-creek-pass',
                slug: 'wolf-creek-pass',
                name: 'Wolf Creek Pass',
                highway: 'US 160',
                elevationFt: 10857,
                elevationM: 3309,
                status: 'OPEN',
                image: '/wolf-creek-pass-colorado.jpg'
              },
              {
                id: 'cottonwood-pass',
                slug: 'cottonwood-pass',
                name: 'Cottonwood Pass',
                highway: 'CR 306',
                elevationFt: 12126,
                elevationM: 3696,
                status: 'CLOSED',
                image: '/cottonwood-pass-colorado.jpg'
              },
              {
                id: 'rabbit-ears-pass',
                slug: 'rabbit-ears-pass',
                name: 'Rabbit Ears Pass',
                highway: 'US 40',
                elevationFt: 9426,
                elevationM: 2873,
                status: 'OPEN',
                image: '/rabbit-ears-pass-colorado.jpg'
              },
              {
                id: 'kenosha-pass',
                slug: 'kenosha-pass',
                name: 'Kenosha Pass',
                highway: 'US 285',
                elevationFt: 10000,
                elevationM: 3048,
                status: 'OPEN',
                image: '/kenosha-pass-colorado.jpg'
              },
              {
                id: 'fremont-pass',
                slug: 'fremont-pass',
                name: 'Fremont Pass',
                highway: 'CO 91',
                elevationFt: 11318,
                elevationM: 3450,
                status: 'OPEN',
                image: '/fremont-pass-colorado.jpg'
              },
              {
                id: 'hoosier-pass',
                slug: 'hoosier-pass',
                name: 'Hoosier Pass',
                highway: 'CO 9',
                elevationFt: 11541,
                elevationM: 3518,
                status: 'OPEN',
                image: '/hoosier-pass-colorado.jpg'
              },
              {
                id: 'guanella-pass',
                slug: 'guanella-pass',
                name: 'Guanella Pass',
                highway: 'Guanella Pass Road',
                elevationFt: 11670,
                elevationM: 3557,
                status: 'CLOSED',
                image: '/guanella-pass-colorado.jpg'
              },
              {
                id: 'red-mountain-pass',
                slug: 'red-mountain-pass',
                name: 'Red Mountain Pass',
                highway: 'US 550',
                elevationFt: 11018,
                elevationM: 3358,
                status: 'OPEN',
                image: '/red-mountain-pass-colorado.jpg'
              },
              {
                id: 'molas-pass',
                slug: 'molas-pass',
                name: 'Molas Pass',
                highway: 'US 550',
                elevationFt: 10910,
                elevationM: 3325,
                status: 'OPEN',
                image: '/molas-pass-colorado.jpg'
              },
              {
                id: 'coal-bank-pass',
                slug: 'coal-bank-pass',
                name: 'Coal Bank Pass',
                highway: 'US 550',
                elevationFt: 10640,
                elevationM: 3243,
                status: 'OPEN',
                image: '/coal-bank-pass-colorado.jpg'
              }
            ]
          },
          {
            id: 'california',
            name: 'California',
            passes: [
              {
                id: 'donner-pass',
                slug: 'donner-pass',
                name: 'Donner Pass',
                highway: 'I-80',
                elevationFt: 7056,
                elevationM: 2151,
                status: 'OPEN',
                image: '/donner-pass.jpg'
              }
            ]
          },
          {
            id: 'montana',
            name: 'Montana',
            passes: []
          },
          {
            id: 'oregon',
            name: 'Oregon',
            passes: [
              {
                id: 'santiam-pass',
                slug: 'santiam-pass',
                name: 'Santiam Pass',
                highway: 'US 20',
                elevationFt: 4817,
                elevationM: 1468,
                status: 'OPEN',
                image: '/santiam-pass-oregon.jpg'
              },
              {
                id: 'mckenzie-pass',
                slug: 'mckenzie-pass',
                name: 'McKenzie Pass',
                highway: 'OR 242',
                elevationFt: 5325,
                elevationM: 1623,
                status: 'CLOSED',
                image: '/mckenzie-pass-oregon.jpg'
              },
              {
                id: 'willamette-pass',
                slug: 'willamette-pass',
                name: 'Willamette Pass',
                highway: 'OR 58',
                elevationFt: 5128,
                elevationM: 1563,
                status: 'OPEN',
                image: '/willamette-pass-oregon.jpg'
              },
              {
                id: 'siskiyou-summit',
                slug: 'siskiyou-summit',
                name: 'Siskiyou Summit',
                highway: 'I-5',
                elevationFt: 4310,
                elevationM: 1314,
                status: 'OPEN',
                image: '/siskiyou-summit-oregon.jpg'
              },
              {
                id: 'government-camp',
                slug: 'government-camp',
                name: 'Government Camp',
                highway: 'US 26',
                elevationFt: 3960,
                elevationM: 1207,
                status: 'OPEN',
                image: '/government-camp-oregon.jpg'
              },
              {
                id: 'deadman-pass',
                slug: 'deadman-pass',
                name: 'Deadman Pass',
                highway: 'I-84',
                elevationFt: 3622,
                elevationM: 1104,
                status: 'OPEN',
                image: '/deadman-pass-oregon.jpg'
              },
              {
                id: 'blue-mountain-summit',
                slug: 'blue-mountain-summit',
                name: 'Blue Mountain Summit',
                highway: 'US 26',
                elevationFt: 5098,
                elevationM: 1554,
                status: 'OPEN',
                image: '/blue-mountain-summit-oregon.jpg'
              }
            ]
          },
          {
            id: 'idaho',
            name: 'Idaho',
            passes: []
          },
          {
            id: 'wyoming',
            name: 'Wyoming',
            passes: []
          },
          {
            id: 'utah',
            name: 'Utah',
            passes: []
          }
        ]
      },
      {
        id: 'canada',
        name: 'Canada',
        code: 'CAN',
        flagEmoji: '🇨🇦',
        states: [
          { id: 'british-columbia', name: 'British Columbia', passes: [] },
          { id: 'alberta', name: 'Alberta', passes: [] }
        ]
      },
      {
        id: 'mexico',
        name: 'Mexico',
        code: 'MEX',
        flagEmoji: '🇲🇽',
        states: [
          { id: 'puebla', name: 'Puebla', passes: [] }
        ]
      },
      {
        id: 'guatemala',
        name: 'Guatemala',
        code: 'GTM',
        flagEmoji: '🇬🇹',
        states: []
      },
      {
        id: 'costa-rica',
        name: 'Costa Rica',
        code: 'CRI',
        flagEmoji: '🇨🇷',
        states: []
      },
      {
        id: 'panama',
        name: 'Panama',
        code: 'PAN',
        flagEmoji: '🇵🇦',
        states: []
      }
    ]
  },

  {
    id: 'europe',
    name: 'Europe',
    icon: 'globe',
    countries: [
      {
        id: 'switzerland',
        name: 'Switzerland',
        code: 'CHE',
        flagEmoji: '🇨🇭',
        states: [
          {
            id: 'valais',
            name: 'Valais',
            passes: [
              {
                id: 'simplon-pass',
                slug: 'simplon-pass',
                name: 'Simplon Pass',
                highway: 'Hauptstrasse 9 (Route 9 / H9)',
                elevationFt: 6578,
                elevationM: 2005,
                status: 'OPEN',
                image: '/simplon-pass-switzerland-valais.jpg'
              },
              {
                id: 'great-st-bernard-pass',
                slug: 'great-st-bernard-pass',
                name: 'Great St Bernard Pass',
                highway: 'Route 21 (CH) / SS27 (IT)',
                elevationFt: 8100,
                elevationM: 2469,
                status: 'OPEN',
                image: '/great-st-bernard-pass-switzerland-italy-road-conditions.png'
              },
              {
                id: 'furka-pass',
                slug: 'furka-pass',
                name: 'Furka Pass',
                highway: 'Hauptstrasse 19',
                elevationFt: 7969,
                elevationM: 2429,
                status: 'OPEN',
                image: '/furka-pass-switzerland-road-conditions.webp'
              },
              {
                id: 'grimsel-pass',
                slug: 'grimsel-pass',
                name: 'Grimsel Pass',
                highway: 'Hauptstrasse 6',
                elevationFt: 7100,
                elevationM: 2164,
                status: 'OPEN',
                image: '/grimsel-pass-switzerland-road-conditions.png'
              },
              {
                id: 'gotthard-pass',
                slug: 'gotthard-pass',
                name: 'Gotthard Pass',
                highway: 'Hauptstrasse 2 / Tremola',
                elevationFt: 6909,
                elevationM: 2106,
                status: 'OPEN',
                image: '/gotthard-pass-switzerland-road-conditions.png'
              }
            ]
          },
          {
            id: 'graubunden',
            name: 'Graubünden',
            passes: [
              {
                id: 'bernina-pass',
                slug: 'bernina-pass',
                name: 'Bernina Pass',
                highway: 'Hauptstrasse 29 (Route 29)',
                elevationFt: 7638,
                elevationM: 2328,
                status: 'OPEN',
                image: '/bernina-pass-switzerland-road-conditions.webp'
              }
            ]
          },
          {
            id: 'uri-ticino',
            name: 'Uri / Ticino',
            passes: [
              {
                id: 'gotthard-pass',
                slug: 'gotthard-pass',
                name: 'Gotthard Pass',
                highway: 'Hauptstrasse 2 / Tremola',
                elevationFt: 6909,
                elevationM: 2106,
                status: 'OPEN',
                image: '/gotthard-pass-switzerland-road-conditions.png'
              }
            ]
          }
        ]
      },
      {
        id: 'italy',
        name: 'Italy',
        code: 'ITA',
        flagEmoji: '🇮🇹',
        states: [
          {
            id: 'south-tyrol',
            name: 'South Tyrol',
            passes: [
              {
                id: 'stelvio-pass',
                slug: 'stelvio-pass',
                name: 'Stelvio Pass (Passo dello Stelvio)',
                highway: 'SS38',
                elevationFt: 9045,
                elevationM: 2757,
                status: 'OPEN',
                image: '/stelvio-pass-italy.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 'norway',
        name: 'Norway',
        code: 'NOR',
        flagEmoji: '🇳🇴',
        states: [
          {
            id: 'more-og-romsdal',
            name: 'Møre og Romsdal',
            passes: [
              {
                id: 'trollstigen-pass',
                slug: 'trollstigen-pass',
                name: 'Trollstigen Pass',
                highway: 'Fv63',
                elevationFt: 2815,
                elevationM: 858,
                status: 'OPEN',
                image: '/trollstigen-pass-road-status-webcam.webp'
              }
            ]
          }
        ]
      },
      {
        id: 'france',
        name: 'France',
        code: 'FRA',
        flagEmoji: '🇫🇷',
        states: [
          {
            id: 'hautes-alpes-savoie',
            name: 'Hautes-Alpes & Savoie',
            passes: [
              {
                id: 'col-du-galibier',
                slug: 'col-du-galibier',
                name: 'Col du Galibier',
                highway: 'D902 (Route des Grandes Alpes)',
                elevationFt: 8668,
                elevationM: 2642,
                status: 'OPEN',
                image: '/col-du-galibier.png'
              }
            ]
          }
        ]
      },
      { id: 'austria', name: 'Austria', code: 'AUT', flagEmoji: '🇦🇹', states: [] }
    ]
  },
  {
    id: 'asia',
    name: 'Asia',
    icon: 'mountain',
    countries: [
      {
        id: 'india',
        name: 'India',
        code: 'IND',
        flagEmoji: '🇮🇳',
        states: [
          {
            id: 'ladakh',
            name: 'Ladakh',
            passes: [
              {
                id: 'khardung-la',
                slug: 'khardung-la',
                name: 'Khardung La',
                highway: 'Leh-Nubra Rd',
                elevationFt: 17582,
                elevationM: 5359,
                status: 'OPEN',
                image: '/khardung-la-ladakh.jpg'
              },
              {
                id: 'chang-la-pass',
                slug: 'chang-la-pass',
                name: 'Chang La Pass',
                highway: 'Leh-Pangong Lake Rd',
                elevationFt: 17688,
                elevationM: 5360,
                status: 'OPEN',
                image: '/chang-la-pass-road-status-webcam.webp'
              }
            ]
          },
          {
            id: 'jammu-kashmir',
            name: 'Jammu & Kashmir',
            passes: [
              {
                id: 'zoji-la',
                slug: 'zoji-la',
                name: 'Zoji La Pass (NH-1)',
                highway: 'NH-1',
                elevationFt: 11575,
                elevationM: 3528,
                status: 'OPEN',
                image: '/zoji-la-pass-jammu-kashmir.jpg'
              }
            ]
          },
          {
            id: 'himachal-pradesh',
            name: 'Himachal Pradesh',
            passes: [
              {
                id: 'rohtang-pass',
                slug: 'rohtang-pass',
                name: 'Rohtang Pass',
                highway: 'Leh-Manali Highway (NH-03)',
                elevationFt: 13058,
                elevationM: 3980,
                status: 'OPEN',
                image: '/rohtang-pass-himachal-pradesh.jpg'
              }
            ]
          },
          {
            id: 'sikkim',
            name: 'Sikkim',
            passes: [
              {
                id: 'nathu-la',
                slug: 'nathu-la',
                name: 'Nathu La Pass',
                highway: 'NH-310',
                elevationFt: 14140,
                elevationM: 4310,
                status: 'OPEN',
                image: '/nathu-la-pass-sikkim.jpg'
              }
            ]
          }
        ]
      },
      {
        id: 'nepal',
        name: 'Nepal',
        code: 'NPL',
        flagEmoji: '🇳🇵',
        states: [
          {
            id: 'koshi-province',
            name: 'Koshi Province (Kanchenjunga & Eastern Nepal)',
            passes: [
              {
                id: 'selele-pass',
                slug: 'selele-pass',
                name: 'Selele Pass (Sele La)',
                highway: 'Kanchenjunga Circuit Trail',
                elevationFt: 14074,
                elevationM: 4290,
                status: 'OPEN',
                image: '/selele-pass.jpg'
              },
              {
                id: 'mirgin-la',
                slug: 'mirgin-la',
                name: 'Mirgin La Pass',
                highway: 'Kanchenjunga High Ridge Route',
                elevationFt: 15300,
                elevationM: 4663,
                status: 'OPEN',
                image: '/mirgin-la.jpg'
              },
              {
                id: 'lumba-sumba-pass',
                slug: 'lumba-sumba-pass',
                name: 'Lumba Sumba Pass (Lumba Sumba La)',
                highway: 'Great Himalaya Trail (GHT)',
                elevationFt: 16925,
                elevationM: 5159,
                status: 'OPEN',
                image: '/lumba-sumba-pass.jpg'
              },
              {
                id: 'tipta-la',
                slug: 'tipta-la',
                name: 'Tipta La Pass (Tiptala Bhanjyang)',
                highway: 'Tamor Trade Corridor',
                elevationFt: 16791,
                elevationM: 5118,
                status: 'OPEN',
                image: '/tipta-la.jpg'
              },
              {
                id: 'olangchungola-pass',
                slug: 'olangchungola-pass',
                name: 'Olangchungola Pass (Walungchun Gola)',
                highway: 'Upper Tamor Valley Trail',
                elevationFt: 15748,
                elevationM: 4800,
                status: 'OPEN',
                image: '/olangchungola-pass.jpg'
              },
              {
                id: 'chhabi-pass',
                slug: 'chhabi-pass',
                name: 'Chhabi Pass (Chhyabuk La)',
                highway: 'Kanchenjunga North Glacier Route',
                elevationFt: 18143,
                elevationM: 5530,
                status: 'OPEN',
                image: '/chhabi-chhyabuk-pass.jpg'
              },
              {
                id: 'khangla-pass',
                slug: 'khangla-pass',
                name: 'Khangla Pass (Kang La Nepal–Sikkim)',
                highway: 'Singalila Ridge Trail',
                elevationFt: 17257,
                elevationM: 5260,
                status: 'OPEN',
                image: '/khangla-pass.jpg'
              },
              {
                id: 'jhingsang-la',
                slug: 'jhingsang-la',
                name: 'Jhingsang La (Jongsang La)',
                highway: 'Jongsang Glacier Route',
                elevationFt: 20157,
                elevationM: 6144,
                status: 'OPEN',
                image: '/jhingsang-la.jpg'
              },
              {
                id: 'gorkhe-pass',
                slug: 'gorkhe-pass',
                name: 'Gorkhe Pass (Gorkhe Bhanjyang)',
                highway: 'Ilam-Darjeeling Heritage Trail',
                elevationFt: 7545,
                elevationM: 2300,
                status: 'OPEN',
                image: '/gorkhe-pass.jpg'
              },
              {
                id: 'ilam-danda',
                slug: 'ilam-danda',
                name: 'Ilam Danda (Kanyam Ridge Pass)',
                highway: 'Mechi Highway (NH-07)',
                elevationFt: 6200,
                elevationM: 1890,
                status: 'OPEN',
                image: '/ilam-danda.jpg'
              }
            ]
          },
          {
            id: 'karnali-province',
            name: 'Karnali Province (Dolpo)',
            passes: [
              {
                id: 'nyalu-lagna-pass',
                slug: 'nyalu-lagna-pass',
                name: 'Nyalu Lagna Pass',
                highway: 'Karnali Trekking Trail',
                elevationFt: 16076,
                elevationM: 4900,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'numa-la',
                slug: 'numa-la',
                name: 'Numa La',
                highway: 'Dolpo High Route',
                elevationFt: 17060,
                elevationM: 5200,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'baga-la',
                slug: 'baga-la',
                name: 'Baga La',
                highway: 'Dolpo High Route',
                elevationFt: 17717,
                elevationM: 5400,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'jeng-la',
                slug: 'jeng-la',
                name: 'Jeng La',
                highway: 'Dolpo–Phoksundo Trail',
                elevationFt: 16732,
                elevationM: 5100,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'saldang-la',
                slug: 'saldang-la',
                name: 'Saldang La',
                highway: 'Upper Dolpo Trail',
                elevationFt: 14764,
                elevationM: 4500,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'kagmara-la',
                slug: 'kagmara-la',
                name: 'Kagmara La',
                highway: 'Kagmara Circuit Trail',
                elevationFt: 16896,
                elevationM: 5115,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'nangdalo-pass',
                slug: 'nangdalo-pass',
                name: 'Nangdalo Pass',
                highway: 'Lower Dolpo Circuit',
                elevationFt: 14108,
                elevationM: 4300,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'french-pass',
                slug: 'french-pass',
                name: 'French Pass',
                highway: 'Dolpo Circuit Trail',
                elevationFt: 16404,
                elevationM: 5000,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'chharka-la',
                slug: 'chharka-la',
                name: 'Chharka La',
                highway: 'Chharka Bhot Trail',
                elevationFt: 17388,
                elevationM: 5300,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'lang-la',
                slug: 'lang-la',
                name: 'Lang La',
                highway: 'Upper Dolpo Trail',
                elevationFt: 17060,
                elevationM: 5200,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'tarap-pass',
                slug: 'tarap-pass',
                name: 'Tarap Pass',
                highway: 'Tarap Valley Route',
                elevationFt: 15748,
                elevationM: 4800,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              },
              {
                id: 'kaireko-la',
                slug: 'kaireko-la',
                name: 'Kaireko La',
                highway: 'Karnali Trekking Trail',
                elevationFt: 15256,
                elevationM: 4650,
                status: 'OPEN',
                image: '/dolpo-karnali-nepal-passes.jpg'
              }
            ]
          }
        ]
      },
      { id: 'japan', name: 'Japan', code: 'JPN', flagEmoji: '🇯🇵', states: [] },
      {
        id: 'pakistan',
        name: 'Pakistan',
        code: 'PAK',
        flagEmoji: '🇵🇰',
        states: [
          {
            id: 'khyber-pakhtunkhwa',
            name: 'Khyber Pakhtunkhwa',
            passes: [
              {
                id: 'khyber-pass',
                slug: 'khyber-pass',
                name: 'Khyber Pass',
                highway: 'N-5 Highway',
                elevationFt: 3510,
                elevationM: 1070,
                status: 'OPEN',
                image: '/khyber-pass-khyber-pakhtunkhwa-pakistan.webp'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'south-america',
    name: 'South America',
    icon: 'globe',
    countries: [
      {
        id: 'chile',
        name: 'Chile',
        code: 'CHL',
        flagEmoji: '🇨🇱',
        states: [
          {
            id: 'valparaiso',
            name: 'Valparaíso',
            passes: [
              {
                id: 'paso-los-libertadores',
                slug: 'paso-los-libertadores',
                name: 'Paso Los Libertadores',
                highway: 'Ruta 60-CH / RN 7',
                elevationFt: 10499,
                elevationM: 3200,
                status: 'OPEN',
                image: '/paso-los-libertadores-chile-argentina.webp'
              }
            ]
          }
        ]
      },
      {
        id: 'argentina',
        name: 'Argentina',
        code: 'ARG',
        flagEmoji: '🇦🇷',
        states: [
          {
            id: 'mendoza',
            name: 'Mendoza',
            passes: [
              {
                id: 'paso-los-libertadores',
                slug: 'paso-los-libertadores',
                name: 'Paso Los Libertadores',
                highway: 'RN 7 / Ruta 60-CH',
                elevationFt: 10499,
                elevationM: 3200,
                status: 'OPEN',
                image: '/paso-los-libertadores-chile-argentina.webp'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'africa',
    name: 'Africa',
    icon: 'compass',
    countries: [
      {
        id: 'south-africa',
        name: 'South Africa',
        code: 'ZAF',
        flagEmoji: '🇿🇦',
        states: [
          {
            id: 'kwazulu-natal',
            name: 'KwaZulu-Natal',
            passes: [
              {
                id: 'sani-pass',
                slug: 'sani-pass',
                name: 'Sani Pass',
                highway: 'Sani Pass Road (P318)',
                elevationFt: 9429,
                elevationM: 2874,
                status: 'OPEN',
                image: '/sani-pass-south-africa-lesotho.jpg'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'oceania',
    name: 'Oceania',
    icon: 'waves',
    countries: [
      {
        id: 'new-zealand',
        name: 'New Zealand',
        code: 'NZL',
        flagEmoji: '🇳🇿',
        states: [
          {
            id: 'canterbury',
            name: 'Canterbury',
            passes: [
              {
                id: 'arthurs-pass',
                slug: 'arthurs-pass',
                name: 'Arthur\'s Pass',
                highway: 'State Highway 73',
                elevationFt: 3018,
                elevationM: 920,
                status: 'OPEN',
                image: '/arthurs-pass.webp'
              }
            ]
          }
        ]
      },
      { id: 'australia', name: 'Australia', code: 'AUS', flagEmoji: '🇦🇺', states: [] }
    ]
  },
  {
    id: 'antarctica',
    name: 'Antarctica',
    icon: 'snowflake',
    countries: []
  }
];
