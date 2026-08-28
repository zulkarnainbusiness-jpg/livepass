export interface PassSeoDetails {
  nearestTowns: { name: string; distance: string; direction: string }[];
  seasonalClosureWindow: string;
  seasonalClosureDetail: string;
  aboutPass: string;
  crossLinkAnchor: string;
  crossLinkUrl: string;
  crossLinkText: string;
}

export const passSeoDetails: Record<string, PassSeoDetails> = {
  'snoqualmie-pass': {
    nearestTowns: [
      { name: 'North Bend, WA', distance: '28 miles (45 km)', direction: 'West via I-90' },
      { name: 'Cle Elum, WA', distance: '25 miles (40 km)', direction: 'East via I-90' },
      { name: 'Seattle, WA', distance: '52 miles (84 km)', direction: 'West via I-90' },
      { name: 'Ellensburg, WA', distance: '52 miles (84 km)', direction: 'East via I-90' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter storm plowing & avalanche mitigation)',
    seasonalClosureDetail: 'Maintained 24/7 by WSDOT crews. Brief temporary closures occur during active avalanche control and heavy winter storms over Keechelus Lake.',
    aboutPass: 'Snoqualmie Pass is the vital east-west transportation artery through Washington’s Cascade Range, carrying Interstate 90 at a summit elevation of 3,022 feet (921 m). Connecting Puget Sound’s metropolitan centers with central and eastern Washington, it handles heavy commercial freight, commuter traffic, and winter recreation access to The Summit at Snoqualmie. Because it is the lowest and most heavily traveled Cascade crossing in the state, maintaining year-round operations is critical. Winter travelers frequently encounter sudden snow squalls, compact snow and ice, and mandatory traction tire or tire chain restrictions.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Cascade winter logistics with high-altitude Andean highway crossings like the'
  },
  'north-cascades-pass': {
    nearestTowns: [
      { name: 'Winthrop, WA', distance: '30 miles (48 km)', direction: 'East via SR 20' },
      { name: 'Twisp, WA', distance: '39 miles (63 km)', direction: 'East via SR 20' },
      { name: 'Marblemount, WA', distance: '45 miles (72 km)', direction: 'West via SR 20' },
      { name: 'Sedro-Woolley, WA', distance: '75 miles (121 km)', direction: 'West via SR 20' }
    ],
    seasonalClosureWindow: 'Mid-November through Early May (Winter Seasonal Closure)',
    seasonalClosureDetail: 'Closes annually due to more than 30 active avalanche chutes crossing SR 20 between Ross Dam Trailhead (MP 134) and Silver Star Gate (MP 171). Reopening begins each spring with heavy rotary snow plowing.',
    aboutPass: 'North Cascades Pass (Washington Pass) carries State Route 20 across the rugged crest of the North Cascades National Park at an elevation of 5,477 feet (1,669 m). Renowned as the "North Cascades Highway," it is celebrated as Washington’s most scenic alpine drive, flanked by towering granitic spires including Liberty Bell Mountain and Early Winters Spires. Due to extreme snowfall and high avalanche frequency along the steep mountain slopes, WSDOT closes the highway each winter. When open during summer and autumn, it provides direct access between the Skagit Valley and the Methow Valley.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'For severe winter avalanche management on international alpine routes, see the'
  },
  'stevens-pass': {
    nearestTowns: [
      { name: 'Skykomish, WA', distance: '16 miles (26 km)', direction: 'West via US 2' },
      { name: 'Leavenworth, WA', distance: '35 miles (56 km)', direction: 'East via US 2' },
      { name: 'Everett, WA', distance: '60 miles (97 km)', direction: 'West via US 2' },
      { name: 'Wenatchee, WA', distance: '58 miles (93 km)', direction: 'East via US 2' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter traction laws & avalanche control)',
    seasonalClosureDetail: 'Kept open throughout winter by WSDOT plows. Temporary short-duration closures take place during heavy snowfall for explosive avalanche control above Old Stevens Pass Highway.',
    aboutPass: 'Stevens Pass is a primary northern Cascade mountain crossing carrying U.S. Route 2 at a summit elevation of 4,061 feet (1,238 m). It connects Snohomish County and the Puget Sound region with Chelan County, the Bavarian-themed village of Leavenworth, and the Wenatchee apple valleys. The pass is also home to Stevens Pass Mountain Resort, drawing heavy weekend winter sports traffic. The roadway winds through steep forested alpine canyons where rapid freezing, packed snow, and blowing drift require drivers to carry approved snow chains or traction tires throughout the winter season.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Cascade mountain passes with international transit corridors like the'
  },
  'donner-pass': {
    nearestTowns: [
      { name: 'Soda Springs, CA', distance: '3 miles (5 km)', direction: 'West via Donner Pass Rd' },
      { name: 'Truckee, CA', distance: '9 miles (14 km)', direction: 'East via I-80 / Donner Pass Rd' },
      { name: 'Reno, NV', distance: '40 miles (64 km)', direction: 'East via I-80' },
      { name: 'Sacramento, CA', distance: '90 miles (145 km)', direction: 'West via I-80' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to Sierra blizzard chain controls)',
    seasonalClosureDetail: 'Maintained around the clock by Caltrans District 3. Heavy Pacific storms can trigger temporary closures or mandatory maximum chain controls (R2/R3 restrictions) between Colfax and the Nevada state line.',
    aboutPass: 'Donner Pass is a legendary mountain pass in the northern Sierra Nevada of California, situated at an elevation of 7,056 feet (2,151 m) near Donner Lake. It carries Interstate 80—one of the nation’s most important transcontinental commercial freight routes—and historical Lincoln Highway routes. Famous for severe Pacific winter blizzards and extreme snowfall measuring hundreds of inches annually, Donner Pass is notorious for rapid weather shifts, gale-force summit winds, and strict Caltrans chain control checkpoints. Safe travel requires winter-prepared vehicles and continuous weather monitoring.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Sierra Nevada blizzard management with high-altitude Andes crossings like the'
  },
  'berthoud-pass': {
    nearestTowns: [
      { name: 'Winter Park, CO', distance: '11 miles (18 km)', direction: 'North via US 40' },
      { name: 'Empire, CO', distance: '15 miles (24 km)', direction: 'Southeast via US 40' },
      { name: 'Idaho Springs, CO', distance: '20 miles (32 km)', direction: 'Southeast via I-70' },
      { name: 'Denver, CO', distance: '55 miles (89 km)', direction: 'East via I-70 / US 40' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to Rocky Mountain winter storm clearing)',
    seasonalClosureDetail: 'Plowed continuously by CDOT. Temporary safety closures occur during severe blizzard conditions and active avalanche mitigation along Stanley Mountain and Floral Park chutes.',
    aboutPass: 'Berthoud Pass is a high-altitude mountain pass in the Front Range of the Colorado Rocky Mountains, ascending to a summit elevation of 11,307 feet (3,446 m) along U.S. Highway 40. Straddling the Continental Divide between Clear Creek and Grand Counties, it serves as the premier gateway from the Denver metropolitan area to Winter Park Resort and the Fraser River Valley. The pass is characterized by dramatic switchbacks, steep grades, and exposure to sudden alpine blizzards, making winter traction tire and chain laws strictly enforced by Colorado State Patrol.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Rocky Mountain Continental Divide passes with South American alpine highways like the'
  },
  'blewett-pass': {
    nearestTowns: [
      { name: 'Cle Elum, WA', distance: '28 miles (45 km)', direction: 'Southwest via US 97 / SR 970' },
      { name: 'Leavenworth, WA', distance: '24 miles (39 km)', direction: 'North via US 97 / US 2' },
      { name: 'Wenatchee, WA', distance: '35 miles (56 km)', direction: 'Northeast via US 97 / US 2' },
      { name: 'Ellensburg, WA', distance: '34 miles (55 km)', direction: 'South via US 97' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter storm plowing)',
    seasonalClosureDetail: 'Maintained year-round by WSDOT. Regular snowplowing and sanding keep traffic flowing between Kittitas and Chelan counties.',
    aboutPass: 'Blewett Pass traverses the Wenatchee Mountains of Washington state on U.S. Route 97 at an elevation of 4,102 feet (1,250 m). Connecting the Kittitas Valley with the Wenatchee River basin, it provides a vital link between Interstate 90 and U.S. Route 2. The roadway winds through scenic Ponderosa pine forests and dramatic canyon overlooks. During the winter months, frequent freezing rain, compact snow, and black ice require motorists to observe traction tire requirements and carry emergency equipment.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Explore global mountain pass conditions including the'
  },
  'white-pass': {
    nearestTowns: [
      { name: 'Packwood, WA', distance: '20 miles (32 km)', direction: 'West via US 12' },
      { name: 'Naches, WA', distance: '38 miles (61 km)', direction: 'East via US 12' },
      { name: 'Yakima, WA', distance: '50 miles (80 km)', direction: 'East via US 12' },
      { name: 'Morton, WA', distance: '50 miles (80 km)', direction: 'West via US 12' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter storm maintenance)',
    seasonalClosureDetail: 'Kept open through winter by WSDOT crews. White Pass Ski Area operates at the summit, and plows work around the clock during Cascade snowstorms.',
    aboutPass: 'White Pass crosses the crest of the Cascade Range in Washington on U.S. Route 12 at a summit elevation of 4,500 feet (1,372 m). It serves as the primary year-round southern highway corridor between southwest Washington (Lewis County) and the agricultural Yakima Valley. Located just south of Mount Rainier National Park, the pass provides direct access to White Pass Ski Area and the Pacific Crest Trail. Winter driving conditions often feature heavy maritime snowpack, freezing fog, and compact ice.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Check conditions across international mountain passes like the'
  },
  'chinook-pass': {
    nearestTowns: [
      { name: 'Enumclaw, WA', distance: '41 miles (66 km)', direction: 'West via SR 410' },
      { name: 'Naches, WA', distance: '44 miles (71 km)', direction: 'East via SR 410' },
      { name: 'Yakima, WA', distance: '58 miles (93 km)', direction: 'East via SR 410' },
      { name: 'Packwood, WA', distance: '26 miles (42 km)', direction: 'South via SR 123' }
    ],
    seasonalClosureWindow: 'Late October / November through Late May / Early June (Winter Seasonal Closure)',
    seasonalClosureDetail: 'Closed annually by WSDOT due to severe avalanche hazards, heavy snowfall, and the absence of permanent winter plowing through Mount Rainier National Park.',
    aboutPass: 'Chinook Pass is a spectacular alpine pass in the Cascade Range of Washington, carrying State Route 410 (the Chinook Scenic Byway) at an elevation of 5,430 feet (1,655 m). Located at the eastern boundary of Mount Rainier National Park, it features breathtaking vistas of Mount Rainier, Tipsoo Lake, and alpine wildflower meadows. The pass is marked by a famous wooden pedestrian overpass carrying the Pacific Crest Trail. Due to massive winter snow accumulations reaching 20 to 30 feet, the highway closes every winter and undergoes extensive snow-clearing operations each spring.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare high Cascade seasonal passes with year-round international routes like the'
  },
  'cayuse-pass': {
    nearestTowns: [
      { name: 'Packwood, WA', distance: '22 miles (35 km)', direction: 'South via SR 123' },
      { name: 'Crystal Mountain, WA', distance: '12 miles (19 km)', direction: 'North via SR 410' },
      { name: 'Enumclaw, WA', distance: '55 miles (89 km)', direction: 'North via SR 410' },
      { name: 'Yakima, WA', distance: '62 miles (100 km)', direction: 'East via SR 410' }
    ],
    seasonalClosureWindow: 'Mid-November through Late May / Early June (Winter Seasonal Closure)',
    seasonalClosureDetail: 'Closes each winter in conjunction with Chinook Pass due to extreme snowfall and avalanche hazard along the eastern flanks of Mount Rainier.',
    aboutPass: 'Cayuse Pass is an alpine mountain pass in Washington’s Cascade Range, located at the junction of State Route 410 and State Route 123 at an elevation of 4,675 feet (1,425 m). Situated inside the Mount Rainier National Park boundary, it links the upper Cowlitz River valley in Lewis County with the White River and Greenwater areas of Pierce County. The surrounding slopes experience tremendous maritime snowfall, generating widespread avalanche chutes that necessitate full winter closure until late spring clearing by WSDOT rotary snowblowers.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'For year-round high-altitude border crossings and live cameras, visit the'
  },
  'sherman-pass': {
    nearestTowns: [
      { name: 'Republic, WA', distance: '20 miles (32 km)', direction: 'West via SR 20' },
      { name: 'Kettle Falls, WA', distance: '26 miles (42 km)', direction: 'East via SR 20' },
      { name: 'Colville, WA', distance: '35 miles (56 km)', direction: 'East via SR 20 / US 395' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Highest maintained year-round pass in Washington)',
    seasonalClosureDetail: 'WSDOT plows maintain year-round access across the Kettle River Range. Drivers should anticipate winter snowpack and carry chains during active storm cycles.',
    aboutPass: 'Sherman Pass is the highest maintained year-round highway mountain pass in Washington state, crossing the Kettle River Range at a summit elevation of 5,575 feet (1,699 m) along State Route 20. Located in Ferry County, it connects the historic mining town of Republic with Kettle Falls and the Columbia River valley. The pass traverses dense forests of lodgepole pine, subalpine fir, and western larch, offering expansive views of northeastern Washington. Winter drivers encounter sustained sub-freezing temperatures, drifting snow, and isolated mountain conditions.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare high-elevation year-round routes with the'
  },
  'zoji-la': {
    nearestTowns: [
      { name: 'Baltal, J&K', distance: '9 km (6 miles)', direction: 'West via NH-1' },
      { name: 'Sonamarg, J&K', distance: '16 km (10 miles)', direction: 'West via NH-1' },
      { name: 'Dras, Ladakh', distance: '30 km (19 miles)', direction: 'East via NH-1' },
      { name: 'Kargil, Ladakh', distance: '130 km (81 miles)', direction: 'East via NH-1' },
      { name: 'Srinagar, J&K', distance: '98 km (61 miles)', direction: 'West via NH-1' }
    ],
    seasonalClosureWindow: 'Late November / December through April / May (Severe Himalayan Winter Closure)',
    seasonalClosureDetail: 'Maintained by the Border Roads Organisation (Project Beacon / Project Vijayak). Snow accumulation exceeds 30–40 feet in winter, making the unpaved cliffside stretches impassable until heavy mechanized clearance in spring.',
    aboutPass: 'Zoji La is a strategic high mountain pass in the western Himalayas, sitting at an elevation of 11,575 feet (3,528 m) along National Highway 1 (NH-1). It serves as the indispensable lifeline connecting the Kashmir Valley with the cold-desert region of Ladakh (Dras, Kargil, and Leh). Renowned as one of the world’s most perilous alpine roads, Zoji La features narrow unpaved tracks carved into vertical rock faces, sheer drops of hundreds of meters, and frequent avalanches and landslides. The under-construction Zoji-la Tunnel will provide year-round all-weather connectivity once completed.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Explore high-altitude strategic mountain passes worldwide like the'
  },
  'khardung-la': {
    nearestTowns: [
      { name: 'Leh, Ladakh', distance: '39 km (24 miles)', direction: 'South via Khardung La Rd' },
      { name: 'Khalsar, Ladakh', distance: '55 km (34 miles)', direction: 'North via Khardung La Rd' },
      { name: 'Diskit (Nubra Valley)', distance: '75 km (47 miles)', direction: 'North via Khardung La Rd' },
      { name: 'Hunder, Ladakh', distance: '82 km (51 miles)', direction: 'North via Nubra Valley' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter blizzard and avalanche clearance)',
    seasonalClosureDetail: 'Kept open almost year-round by the Border Roads Organisation (Project HIMANK) to supply military bases and remote villages. Temporary closures happen during heavy winter snowstorms.',
    aboutPass: 'Khardung La is a legendary high-altitude mountain pass in the Ladakh range of Jammu & Kashmir, India, situated at an official elevation of 17,582 feet (5,359 m). Historically considered one of the highest motorable roads in the world, it serves as the crucial gateway from the Indus River Valley at Leh to the breathtaking Nubra and Shyok Valleys and the Siachen Glacier region. Maintained under extreme conditions by the Border Roads Organisation, the route presents severe high-altitude challenges, including thin air, sub-zero temperatures, and ice-covered gravel switchbacks.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare extreme high-altitude alpine crossings with the'
  },
  'rohtang-pass': {
    nearestTowns: [
      { name: 'Marhi, HP', distance: '16 km (10 miles)', direction: 'South via Leh-Manali Hwy' },
      { name: 'Manali, HP', distance: '51 km (32 miles)', direction: 'South via Leh-Manali Hwy' },
      { name: 'Gramphu, HP', distance: '15 km (9 miles)', direction: 'North towards Spiti / Lahaul' },
      { name: 'Keylong, HP', distance: '65 km (40 miles)', direction: 'North via Lahaul Valley' }
    ],
    seasonalClosureWindow: 'Mid-November through Early May (Winter Seasonal Closure; Atal Tunnel bypass open)',
    seasonalClosureDetail: 'Closes in winter due to intense blizzards, freezing temperatures, and heavy snowpack. The 9.02 km Atal Tunnel beneath the pass now maintains year-round travel to Lahaul Valley.',
    aboutPass: 'Rohtang Pass is a famous high mountain pass in the Pir Panjal Range of the Himalayas, located at an elevation of 13,058 feet (3,980 m) in Himachal Pradesh, India. It connects the lush green Kullu Valley with the arid high-altitude valleys of Lahaul and Spiti on the Leh-Manali Highway. Its name translates to "pile of corpses" in Tibetan, reflecting the historical peril of unpredictable blizzards and snowstorms. Rohtang remains a world-class destination for adventure travelers, tourists, and motorcyclists seeking panoramic Himalayan vistas.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Check conditions on other iconic international mountain highways like the'
  },
  'nathu-la': {
    nearestTowns: [
      { name: 'Sherathang, Sikkim', distance: '5 km (3 miles)', direction: 'West' },
      { name: 'Kupup, Sikkim', distance: '15 km (9 miles)', direction: 'Southeast via Old Silk Route' },
      { name: 'Gangtok, Sikkim', distance: '54 km (34 miles)', direction: 'West via Jawaharlal Nehru Rd' }
    ],
    seasonalClosureWindow: 'Open Year-Round for authorized permits (Subject to heavy winter snow Dec-Apr)',
    seasonalClosureDetail: 'Maintained by the Indian Army and BRO. Extreme winter snowfall can temporarily shut access road from Tsomgo Lake to the summit border gate.',
    aboutPass: 'Nathu La is a historic high mountain pass on the Old Silk Route in the Eastern Himalayas, located at an elevation of 14,140 feet (4,310 m) along the border between Sikkim, India, and the Tibet Autonomous Region of China. It serves as an official border personnel meeting post and one of the designated bilateral trade routes between India and China. Traveling to Nathu La involves passing through dramatic sub-alpine forests, alpine lakes including Tsomgo Lake, and steep switchbacks requiring special permits and four-wheel-drive vehicles.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare international border passes with the'
  },
  'furka-pass': {
    nearestTowns: [
      { name: 'Gletsch (Valais)', distance: '10 km (6 miles)', direction: 'West via Route 19' },
      { name: 'Realp (Uri)', distance: '12 km (7 miles)', direction: 'East via Route 19' },
      { name: 'Oberwald (Valais)', distance: '16 km (10 miles)', direction: 'West via Route 19' },
      { name: 'Andermatt (Uri)', distance: '22 km (14 miles)', direction: 'East via Route 19' }
    ],
    seasonalClosureWindow: 'Early November through Late May / Early June (Winter Seasonal Closure)',
    seasonalClosureDetail: 'Closed throughout winter due to massive Alpine snowfall, freezing temperatures, and avalanche risk. Furka car train (Autoverlad Furka) operates year-round via the Furka Base Tunnel between Realp and Oberwald.',
    aboutPass: 'Furka Pass is one of the most iconic high mountain passes in the Swiss Alps, elevating to 7,969 feet (2,429 m) along Route 19 between the cantons of Uri and Valais. Famous worldwide for its role in the classic James Bond film Goldfinger, the pass features heart-pumping serpentine hairpins, towering granite peaks, and dramatic views of the Rhone Glacier. Due to high Alpine winter conditions, the pass road is closed for approximately seven months each year, reopening in early summer for road-trippers, cyclists, and tourists.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Swiss Alpine driving conditions with South America’s'
  },
  'stelvio-pass': {
    nearestTowns: [
      { name: 'Trafoi, Italy', distance: '14 km (9 miles)', direction: 'Northeast via SS38' },
      { name: 'Santa Maria, Switzerland', distance: '16 km (10 miles)', direction: 'North via Umbrail Pass' },
      { name: 'Bormio, Italy', distance: '21 km (13 miles)', direction: 'South via SS38' },
      { name: 'Prato allo Stelvio, Italy', distance: '24 km (15 miles)', direction: 'Northeast via SS38' }
    ],
    seasonalClosureWindow: 'Early November through Late May / Early June (Winter Seasonal Closure)',
    seasonalClosureDetail: 'Closed every winter season due to extreme Alpine snow depth and steep avalanche chutes across the 48 eastern hairpin turns. Summer ski operations take place on the glacier at the summit.',
    aboutPass: 'Stelvio Pass (Passo dello Stelvio) is the highest paved mountain pass in the Eastern Alps and the second highest in all of Europe, standing at an elevation of 9,045 feet (2,757 m) in northern Italy. Located in the Ortler Alps near the Swiss border, it connects the Valtellina with the Venosta Valley. Renowned as a masterpiece of road engineering, the northern ramp features 48 numbered stone-wall hairpin turns. It is an internationally revered proving ground for motorists, sports car drivers, and Giro d\'Italia cyclists.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare European Alpine passes with high Andes mountain crossings like the'
  },
  'paso-los-libertadores': {
    nearestTowns: [
      { name: 'Los Andes, Chile', distance: '70 km (43 miles)', direction: 'West via Route 60' },
      { name: 'Uspallata, Argentina', distance: '85 km (53 miles)', direction: 'East via National Route 7' },
      { name: 'Santiago, Chile', distance: '150 km (93 miles)', direction: 'Southwest via Route 57 / 60' },
      { name: 'Mendoza, Argentina', distance: '205 km (127 miles)', direction: 'East via National Route 7' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to severe Andean winter blizzard closures)',
    seasonalClosureDetail: 'Maintained by joint Chilean and Argentine border authorities. Winter storms ("temporal de nieve") can close the Cristo Redentor tunnel and Caracoles switchbacks for multiple days during heavy blizzards.',
    aboutPass: 'Paso Los Libertadores (internationally recognized as Paso Cristo Redentor and Sistema Integrado Cristo Redentor) is the most critical mountain pass corridor across the high Andes, connecting the Valparaíso Region of Chile with Mendoza Province, Argentina. Reaching an elevation of 10,499 feet (3,200 m) at the portal of the 3.1 km Túnel Internacional Cristo Redentor, it carries Chile\'s Ruta 60-CH and Argentina\'s Ruta Nacional 7. The pass takes its famous alternate name from the historic 1904 "Cristo Redentor de los Andes" monument erected at the summit crest (3,832 m). The Chilean approach is renowned for the 29 switchbacks of Cuesta Caracoles, forming the primary trade lifeline between Santiago and Buenos Aires.',
    crossLinkAnchor: 'Arthur’s Pass (New Zealand Southern Alps)',
    crossLinkUrl: '/passes/new-zealand/canterbury-west-coast/arthurs-pass',
    crossLinkText: 'Explore other premier trans-alpine passes worldwide including'
  },
  'arthurs-pass': {
    nearestTowns: [
      { name: 'Arthur’s Pass Village', distance: '5 km (3 miles)', direction: 'Summit center' },
      { name: 'Otira, NZ', distance: '14 km (9 miles)', direction: 'West via SH 73' },
      { name: 'Springfield, NZ', distance: '60 km (37 miles)', direction: 'East via SH 73' },
      { name: 'Greymouth, NZ', distance: '95 km (59 miles)', direction: 'West via SH 73' },
      { name: 'Christchurch, NZ', distance: '145 km (90 miles)', direction: 'East via SH 73' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to Southern Alps snowstorms & rockfall maintenance)',
    seasonalClosureDetail: 'Maintained by NZ Transport Agency (NZTA Waka Kotahi). Winter snowstorms require tire chains on SH 73 between Arthur\'s Pass and the Otira Viaduct.',
    aboutPass: 'Arthur’s Pass is the highest and most famous mountain pass across the Southern Alps of New Zealand’s South Island, rising to an elevation of 3,020 feet (920 m) on State Highway 73. Connecting Canterbury on the east coast with West Coast rainforests and Greymouth, it traverses Arthur’s Pass National Park. The route is celebrated for dramatic alpine scenery, deep river gorges, and the engineering marvel of the Otira Viaduct. Winter drivers must navigate steep gradients, ice, and alpine conditions where kea alpine parrots frequently interact with travelers.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Southern Alps mountain driving with international passes like the'
  },
  'sani-pass': {
    nearestTowns: [
      { name: 'Himeville, South Africa', distance: '30 km (19 miles)', direction: 'East via Sani Pass Rd' },
      { name: 'Underberg, South Africa', distance: '35 km (22 miles)', direction: 'East via Sani Pass Rd' },
      { name: 'Mokhotlong, Lesotho', distance: '60 km (37 miles)', direction: 'West via A14' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Strict 4x4 vehicles only; subject to winter snow & flash floods)',
    seasonalClosureDetail: 'Strictly restricted to 4WD vehicles with low range by border police. Winter snowstorms and summer thunderstorms can cause temporary river washouts and ice hazards on upper hairpin switchbacks.',
    aboutPass: 'Sani Pass is an iconic, rugged mountain pass in the Drakensberg mountain range, climbing from KwaZulu-Natal, South Africa, into the mountain kingdom of Lesotho at a summit elevation of 9,429 feet (2,874 m). Renowned as one of the ultimate 4x4 overland challenges on the African continent, Sani Pass features steep, loose rock switchbacks, dramatic vertical cliffs, and sweeping amphitheater views. At the summit sits the Highest Pub in Africa. Due to extreme terrain and border crossing regulations, all travelers require four-wheel-drive capability and valid international passports.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare rugged international border passes with the'
  },
  'loup-loup-pass': {
    nearestTowns: [
      { name: 'Twisp, WA', distance: '12 miles (19 km)', direction: 'West via SR 20' },
      { name: 'Winthrop, WA', distance: '21 miles (34 km)', direction: 'West via SR 20' },
      { name: 'Okanogan, WA', distance: '18 miles (29 km)', direction: 'East via SR 20' },
      { name: 'Omak, WA', distance: '23 miles (37 km)', direction: 'Northeast via SR 20 / US 97' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to winter storm plowing)',
    seasonalClosureDetail: 'Kept open throughout the winter by WSDOT crews. Loup Loup Ski Bowl operates at the summit, providing local winter recreation.',
    aboutPass: 'Loup Loup Pass is a mountain pass in the Okanogan Highlands of north-central Washington, carrying State Route 20 at an elevation of 4,020 feet (1,225 m). Located between the Methow Valley town of Twisp and the Okanogan River valley, it serves as a year-round regional connector. The pass is characterized by forested mountain terrain, steady grades, and consistent winter snowfall. Motorists should be prepared for compact snow, winter traction advisories, and sudden temperature inversions throughout the season.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Explore other mountain pass conditions including the'
  },
  'status-pass': {
    nearestTowns: [
      { name: 'Goldendale, WA', distance: '11 miles (18 km)', direction: 'South via US 97' },
      { name: 'Toppenish, WA', distance: '35 miles (56 km)', direction: 'North via US 97' },
      { name: 'Yakima, WA', distance: '55 miles (89 km)', direction: 'North via US 97 / I-82' }
    ],
    seasonalClosureWindow: 'Open Year-Round (No scheduled seasonal closure)',
    seasonalClosureDetail: 'Maintained year-round on US 97 by WSDOT. Regular winter plowing and anti-icing operations keep freight and passenger traffic moving over the Simcoe Mountains.',
    aboutPass: 'Satus Pass (Status Pass) carries U.S. Route 97 across the Simcoe Mountains in south-central Washington at an elevation of 3,107 feet (947 m). Situated on the Yakama Indian Reservation, it is a critical north-south shipping corridor connecting Central Washington’s Yakima agricultural valley with the Columbia River Gorge and Oregon. The pass experiences frequent freezing fog, gusty crosswinds, and sudden winter black ice, requiring continuous attention to traction tire notices and road condition telemetry.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Check conditions across international mountain passes like the'
  },
  'khyber-pass': {
    nearestTowns: [
      { name: 'Landi Kotal, Pakistan', distance: '5 km (3 miles)', direction: 'West' },
      { name: 'Jamrud, Pakistan', distance: '18 km (11 miles)', direction: 'East via N-55 / N-5' },
      { name: 'Peshawar, Pakistan', distance: '35 km (22 miles)', direction: 'East via Grand Trunk Rd' },
      { name: 'Torkham (Border Gate)', distance: '12 km (7 miles)', direction: 'West' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Major international trade corridor)',
    seasonalClosureDetail: 'Maintained by National Highway Authority of Pakistan. Open year-round for commercial freight and bilateral transit between Pakistan and Afghanistan.',
    aboutPass: 'The Khyber Pass is one of the most historically renowned mountain passes in world history, connecting Pakistan and Afghanistan through the Spin Ghar (White Mountains) at an elevation of 3,510 feet (1,070 m). For millennia, it served as the critical trade route on the Silk Road and the strategic invasion pathway into South Asia for Persians, Greeks, Mughals, and British forces. Today, the modern Asian Highway AH1 traverses the pass, carrying vital commercial freight and regional transport between Peshawar and Kabul.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare historic strategic mountain passes with the'
  },
  'santiam-pass': {
    nearestTowns: [
      { name: 'Sisters, OR', distance: '20 miles (32 km)', direction: 'East via US 20' },
      { name: 'Bend, OR', distance: '42 miles (68 km)', direction: 'East via US 20' },
      { name: 'Sweet Home, OR', distance: '48 miles (77 km)', direction: 'West via US 20' },
      { name: 'Salem, OR', distance: '85 miles (137 km)', direction: 'West via US 20 / OR 22' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Subject to Oregon Cascade winter chain laws)',
    seasonalClosureDetail: 'Maintained continuously by ODOT District 4. During Pacific winter storms, mandatory chain laws are enforced between Santiam Junction and Sisters.',
    aboutPass: 'Santiam Pass is a major Cascade Range mountain pass in central Oregon, traversing the crest at an elevation of 4,817 feet (1,468 m) on U.S. Highway 20. It connects the Willamette Valley with the high desert communities of Central Oregon (Bend, Redmond, and Sisters). The pass provides breathtaking views of Mount Washington, Three Fingered Jack, and Mount Jefferson. Heavy winter snowfall makes Santiam Pass a busy corridor for winter sports at Hoodoo Ski Area while requiring strict adherence to Oregon tire chain laws.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Cascade mountain highways with international routes like the'
  },
  'siskiyou-summit': {
    nearestTowns: [
      { name: 'Ashland, OR', distance: '15 miles (24 km)', direction: 'North via I-5' },
      { name: 'Yreka, CA', distance: '23 miles (37 km)', direction: 'South via I-5' },
      { name: 'Medford, OR', distance: '27 miles (43 km)', direction: 'North via I-5' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Highest point on Interstate 5)',
    seasonalClosureDetail: 'Kept open 24/7 by ODOT and Caltrans. Severe Pacific winter storm cycles can lead to temporary truck holding and mandatory chain enforcement.',
    aboutPass: 'Siskiyou Summit (also known as Siskiyou Pass) is the highest point on Interstate 5, reaching an elevation of 4,310 feet (1,314 m) in the Siskiyou Mountains of southern Oregon just north of the California border. As the primary west coast freight artery connecting California, Oregon, and Washington, hundreds of thousands of commercial vehicles cross each month. Steep 6% grades, freezing rain, rapid snowfall, and dense mountain fog make Siskiyou Summit a high-priority winter operations zone for highway safety agencies.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare Pacific freight corridors with the'
  },
  'chang-la-pass': {
    nearestTowns: [
      { name: 'Sakti Village', distance: '25 km (15 miles)', direction: 'West approach' },
      { name: 'Karu Junction', distance: '45 km (28 miles)', direction: 'West via Sakti' },
      { name: 'Leh City', distance: '75 km (47 miles)', direction: 'West via Karu' },
      { name: 'Tangtse', distance: '40 km (25 miles)', direction: 'East toward Pangong' },
      { name: 'Pangong Tso (Lukung)', distance: '75 km (47 miles)', direction: 'East via Tangtse' }
    ],
    seasonalClosureWindow: 'Open Nearly Year-Round (Subject to winter blizzards & BRO snow clearing)',
    seasonalClosureDetail: 'Maintained by Border Roads Organisation (Project HIMANK). Heavy winter snowfalls and blizzards between December and March can prompt temporary 24 to 72-hour closures while high-capacity snow cutters clear the road.',
    aboutPass: 'Chang La Pass is the third-highest motorable mountain pass in the world, cresting at an official elevation of 17,590 feet (5,360 m) across the rugged Ladakh Range in northern India. As the sole overland gateway connecting the Indus Valley with the world-famous Pangong Tso (Pangong Lake) and the Changthang plateau, Chang La carries immense tourist, commercial, and strategic defense traffic. Maintained under brutal Arctic conditions by the Border Roads Organisation (BRO Project HIMANK), the summit features the sacred Changla Baba Mandir and an Indian Army first-aid post offering oxygen and hot tea. Extreme altitude requires visitors to limit dwell times to 15–20 minutes to prevent Acute Mountain Sickness.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare extreme Himalayan passes with trans-Andean routes like the'
  },
  'chang-la': {
    nearestTowns: [
      { name: 'Sakti Village', distance: '25 km (15 miles)', direction: 'West approach' },
      { name: 'Karu Junction', distance: '45 km (28 miles)', direction: 'West via Sakti' },
      { name: 'Leh City', distance: '75 km (47 miles)', direction: 'West via Karu' },
      { name: 'Tangtse', distance: '40 km (25 miles)', direction: 'East toward Pangong' },
      { name: 'Pangong Tso (Lukung)', distance: '75 km (47 miles)', direction: 'East via Tangtse' }
    ],
    seasonalClosureWindow: 'Open Nearly Year-Round (Subject to winter blizzards & BRO snow clearing)',
    seasonalClosureDetail: 'Maintained by Border Roads Organisation (Project HIMANK). Heavy winter snowfalls and blizzards between December and March can prompt temporary 24 to 72-hour closures while high-capacity snow cutters clear the road.',
    aboutPass: 'Chang La Pass is the third-highest motorable mountain pass in the world, cresting at an official elevation of 17,590 feet (5,360 m) across the rugged Ladakh Range in northern India. As the sole overland gateway connecting the Indus Valley with the world-famous Pangong Tso (Pangong Lake) and the Changthang plateau, Chang La carries immense tourist, commercial, and strategic defense traffic. Maintained under brutal Arctic conditions by the Border Roads Organisation (BRO Project HIMANK), the summit features the sacred Changla Baba Mandir and an Indian Army first-aid post offering oxygen and hot tea. Extreme altitude requires visitors to limit dwell times to 15–20 minutes to prevent Acute Mountain Sickness.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Compare extreme Himalayan passes with trans-Andean routes like the'
  }
};
