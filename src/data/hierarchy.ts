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
                status: 'CLOSED',
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
                id: 'white-pass',
                slug: 'white-pass',
                name: 'White Pass',
                highway: 'US 12',
                elevationFt: 4500,
                elevationM: 1372,
                status: 'OPEN',
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
              }
            ]

          },
          {
            id: 'colorado',
            name: 'Colorado',
            passes: [
              {
                id: 'berthoud-pass',
                slug: 'berthoud-pass',
                name: 'Berthoud Pass',
                highway: 'US-40',
                elevationFt: 11307,
                elevationM: 3446,
                status: 'OPEN',
                image: '/berthoud-pass-colorado.jpg'
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
            passes: []
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
                id: 'furka-pass',
                slug: 'furka-pass',
                name: 'Furka Pass',
                highway: 'Hauptstrasse 19',
                elevationFt: 7969,
                elevationM: 2429,
                status: 'OPEN',
                image: '/furka-pass-switzerland-road-conditions.webp'
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
      { id: 'france', name: 'France', code: 'FRA', flagEmoji: '🇫🇷', states: [] },
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
                status: 'CAUTION',
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
          }
        ]
      },
      { id: 'nepal', name: 'Nepal', code: 'NPL', flagEmoji: '🇳🇵', states: [] },
      { id: 'japan', name: 'Japan', code: 'JPN', flagEmoji: '🇯🇵', states: [] }
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
