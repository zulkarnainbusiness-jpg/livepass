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
  },
  'trollstigen-pass': {
    nearestTowns: [
      { name: 'Åndalsnes (Romsdalsfjorden)', distance: '18 km (11 miles)', direction: 'Nord via Fv63' },
      { name: 'Valldal (Norddalsfjorden)', distance: '40 km (25 miles)', direction: 'Sør via Fv63' },
      { name: 'Geiranger (Geirangerfjorden)', distance: '74 km (46 miles)', direction: 'Sør via Ørnevegen' },
      { name: 'Molde', distance: '60 km (37 miles)', direction: 'Nordvest via E39/Fv64' }
    ],
    seasonalClosureWindow: 'Slutten av mai til slutten av oktober (Sesongåpen turistveg)',
    seasonalClosureDetail: 'Driftes av Statens vegvesen og Møre og Romsdal fylkeskommune. Vinterstengt fra november til mai på grunn av store snømengder og rasfare fra Trolltindene.',
    aboutPass: 'Trollstigen (Trollstigvegen) er en av Norges mest spektakulære og ikoniske nasjonale turistveger på Fylkesvei 63 i Møre og Romsdal. Veien klatrer opp fjellsiden fra Isterdalen gjennom 11 skarpe hårnålssvinger med 10 % stigning, opp til Stigrøra platået på 858 meter over havet. Underveis krysser veien den buldrende Stigfossen (180 m fallhøyde) på en historisk natursteinsbru. På toppen ligger det prisbelønte besøkssenteret og utsiktsrampene som gir en spektakulær utsikt over de dramatiske fjelltoppene Bispen, Kongen og Dronninga. Veien er sesongåpen om sommeren og underlagt kontinuerlig geologisk skredovervåking.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Sammenlign Trollstigens 11 hårnålssvinger med de 29 svingene i Los Caracoles på'
  },
  'trollstigen': {
    nearestTowns: [
      { name: 'Åndalsnes (Romsdalsfjorden)', distance: '18 km (11 miles)', direction: 'Nord via Fv63' },
      { name: 'Valldal (Norddalsfjorden)', distance: '40 km (25 miles)', direction: 'Sør via Fv63' },
      { name: 'Geiranger (Geirangerfjorden)', distance: '74 km (46 miles)', direction: 'Sør via Ørnevegen' },
      { name: 'Molde', distance: '60 km (37 miles)', direction: 'Nordvest via E39/Fv64' }
    ],
    seasonalClosureWindow: 'Slutten av mai til slutten av oktober (Sesongåpen turistveg)',
    seasonalClosureDetail: 'Driftes av Statens vegvesen og Møre og Romsdal fylkeskommune. Vinterstengt fra november til mai på grunn av store snømengder og rasfare fra Trolltindene.',
    aboutPass: 'Trollstigen (Trollstigvegen) er en av Norges mest spektakulære og ikoniske nasjonale turistveger på Fylkesvei 63 i Møre og Romsdal. Veien klatrer opp fjellsiden fra Isterdalen gjennom 11 skarpe hårnålssvinger med 10 % stigning, opp til Stigrøra platået på 858 meter over havet. Underveis krysser veien den buldrende Stigfossen (180 m fallhøyde) på en historisk natursteinsbru. På toppen ligger det prisbelønte besøkssenteret og utsiktsrampene som gir en spektakulær utsikt over de dramatiske fjelltoppene Bispen, Kongen og Dronninga. Veien er sesongåpen om sommeren og underlagt kontinuerlig geologisk skredovervåking.',
    crossLinkAnchor: 'Paso Los Libertadores (Andes Mountain Pass)',
    crossLinkUrl: '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores',
    crossLinkText: 'Sammenlign Trollstigens 11 hårnålssvinger med de 29 svingene i Los Caracoles på'
  },
  'col-du-galibier': {
    nearestTowns: [
      { name: 'Valloire, Savoie', distance: '18 km (11 miles)', direction: 'Nord via D902' },
      { name: 'Col du Lautaret, Hautes-Alpes', distance: '8.6 km (5.3 miles)', direction: 'Sud via D902' },
      { name: 'Saint-Michel-de-Maurienne, Savoie', distance: '35 km (22 miles)', direction: 'Nord via D902 & Col du Télégraphe' },
      { name: 'Briançon, Hautes-Alpes', distance: '36.5 km (23 miles)', direction: 'Sud-Est via D902 & D1091' },
      { name: 'La Grave / La Meije, Hautes-Alpes', distance: '19.5 km (12 miles)', direction: 'Sud-Ouest via D902 & D1091' }
    ],
    seasonalClosureWindow: 'Fin mai / début juin à fin octobre / début novembre (Fermeture hivernale)',
    seasonalClosureDetail: 'Géré conjointement par les départements de la Savoie (73) et des Hautes-Alpes (05). Fermeture annuelle en raison d’un enneigement exceptionnel (5 à 8 mètres) et des risques d’avalanches. Travaux de déneigement par fraises rotatives au mois de mai pour réouverture estivale.',
    aboutPass: 'Le Col du Galibier est l’un des géants mythiques des Alpes françaises, culminant à 2 642 mètres d’altitude sur la Route Départementale D902 entre la Savoie (Maurienne / Valloire) et les Hautes-Alpes (Briançonnais / Col du Lautaret). Rendu légendaire par le Tour de France depuis 1911 et orné du monument Henri Desgrange, il attire chaque été des dizaines de milliers de cyclistes, motards et automobilistes du monde entier. Le franchissement sommital propose à la fois un tunnel historique monotrace régulé par feux tricolores (2 556 m) et une spectaculaire route de crête à 2 642 m offrant un panorama à 360 degrés sur les glaciers des Écrins, le Pic de la Meije et les Aiguilles d’Arves.',
    crossLinkAnchor: 'Stelvio Pass (Passo dello Stelvio, Italy)',
    crossLinkUrl: '/passes/italy/south-tyrol-lombardy/stelvio-pass',
    crossLinkText: 'Compare French Alpine high mountain routes with famous Italian alpine passes like the'
  },
  'col-de-l-iseran': {
    nearestTowns: [
      { name: 'Val-d\'Isère, Savoie (Haute-Tarentaise)', distance: '16 km (10 miles)', direction: 'Nord-Ouest via D902' },
      { name: 'Bonneval-sur-Arc, Savoie (Haute-Maurienne)', distance: '12.9 km (8 miles)', direction: 'Sud via D902' },
      { name: 'Bourg-Saint-Maurice, Savoie', distance: '48 km (30 miles)', direction: 'Nord-Ouest via D902' },
      { name: 'Lanslebourg-Mont-Cenis, Savoie', distance: '32.9 km (20 miles)', direction: 'Sud-Ouest via D902 & D1006' },
      { name: 'Tignes, Savoie', distance: '28 km (17 miles)', direction: 'Nord-Ouest via D902 & D87A' },
      { name: 'Modane, Savoie (Tunnel du Fréjus)', distance: '56 km (35 miles)', direction: 'Sud-Ouest via D902 & D1006' }
    ],
    seasonalClosureWindow: 'Mi-juin à fin octobre / début novembre (Fermeture hivernale annuelle)',
    seasonalClosureDetail: 'Exploité et entretenu par le Conseil Départemental de la Savoie (Savoie-Route). Le plus haut col des Alpes est fermé de novembre à début juin en raison de congères géantes de 8 à 10 mètres et de risques majeurs d\'avalanches. Travaux massifs de déneigement par fraises rotatives géantes en mai pour réouverture estivale sécurisée.',
    aboutPass: 'Le Col de l\'Iseran (2 770 m / 9 088 ft — 2 764 m IGN) est le plus haut col routier goudronné de toutes les Alpes et d\'Europe. Situé au cœur du Parc National de la Vanoise sur la Route des Grandes Alpes (D902), il relie la Haute-Tarentaise (Val-d\'Isère) à la Haute-Maurienne (Bonneval-sur-Arc). Inauguré en 1937 par le président Albert Lebrun et sanctifié par la chapelle Notre-Dame de Toute Prudence, l\'Iseran est un mythe absolu du Tour de France où s\'est notamment forgée la victoire finale d\'Egan Bernal en 2019.',
    crossLinkAnchor: 'Col du Galibier (2 642 m, Savoie & Hautes-Alpes)',
    crossLinkUrl: '/passes/france/hautes-alpes-savoie/col-du-galibier',
    crossLinkText: 'Comparez le toit des Alpes avec l’autre géant mythique de la Savoie et du Tour de France :'
  },
  'great-st-bernard-pass': {
    nearestTowns: [
      { name: 'Saint-Rhémy-en-Bosses, Valle d\'Aosta (IT)', distance: '14.5 km (9 miglia)', direction: 'Sud via SS27' },
      { name: 'Aosta / Aoste, Valle d\'Aosta (IT)', distance: '34 km (21 miglia)', direction: 'Sud-Est via SS27' },
      { name: 'Bourg-Saint-Pierre, Vallese (CH)', distance: '13 km (8 miglia)', direction: 'Nord via Route 21' },
      { name: 'Martigny, Vallese (CH)', distance: '44.5 km (28 miglia)', direction: 'Nord via Route 21 / A9' },
      { name: 'Chamonix-Mont-Blanc (FR)', distance: '65 km (40 miglia)', direction: 'Nord-Ovest via Forclaz' }
    ],
    seasonalClosureWindow: 'Inizio giugno a metà ottobre (Strada del Colle) / Traforo aperto 24h/24 tutto l\'anno',
    seasonalClosureDetail: 'Gestito congiuntamente da ANAS / RAVdA (Italia) e dal Cantone Vallese (Svizzera). La strada panoramica del valico sommitale (2.469 m) chiude in inverno a causa di accumuli nevosi di 10-15 metri e del rischio valanghe. Il Traforo stradale del Gran San Bernardo (5,8 km a 1.918 m) garantisce il transito transalpino 365 giorni all\'anno con pedaggio.',
    aboutPass: 'Il Colle del Gran San Bernardo (2.469 m / 8.100 ft) è uno dei valichi alpini più celebri d\'Europa, situato tra la Valle d\'Aosta (Italia) e il Cantone Vallese (Svizzera) lungo la SS27 / Route 21. Fondato nel 1049 da San Bernardo di Mentone, il millenario Ospizio ospita i leggendari cani San Bernardo da soccorso e si specchia in uno splendido lago glaciale di confine. Storico passaggio della Via Francigena e della traversata di Napoleone nel maggio 1800.',
    crossLinkAnchor: 'Passo dello Stelvio (Alpi Retiche)',
    crossLinkUrl: '/passes/italy/south-tyrol-lombardy/stelvio-pass',
    crossLinkText: 'Scopri e confronta anche altri spettacolari valichi alpini come il'
  },
  'grimsel-pass': {
    nearestTowns: [
      { name: 'Innertkirchen, Bern (Haslital)', distance: '33 km (20.5 Meilen)', direction: 'Nord via Route 6' },
      { name: 'Meiringen, Bern (Haslital)', distance: '38 km (23.6 Meilen)', direction: 'Nord via Route 6' },
      { name: 'Gletsch, Wallis (Obergoms)', distance: '5.9 km (3.7 Meilen)', direction: 'Süd via Route 6' },
      { name: 'Oberwald, Wallis (Goms)', distance: '16 km (9.9 Meilen)', direction: 'Südwest via Route 19' },
      { name: 'Andermatt, Uri (via Furkapass)', distance: '38 km (23.6 Meilen)', direction: 'Ost via Route 19' },
      { name: 'Interlaken, Bern', distance: '65 km (40.4 Meilen)', direction: 'Nordwest via A8 / Route 6' }
    ],
    seasonalClosureWindow: 'Anfang Juni bis Ende Oktober (Wintersperre von November bis Ende Mai)',
    seasonalClosureDetail: 'Unterhalten durch das Tiefbauamt des Kantons Bern (TBA) und die Dienststelle für Mobilität des Kantons Wallis (SDM). Die Passstrasse schliesst jährlich im Spätherbst wegen Schneehöhen von bis zu 8 Metern und akuter Lawinengefahr. Im Mai räumen schwere Frässchleudern und Radlader die Schneemassen zur sommerlichen Wiedereröffnung.',
    aboutPass: 'Der Grimselpass (2.164 m ü. M. / 7.100 ft) ist ein weltberühmter Hochgebirgspass in den Schweizer Alpen auf der Hauptstrasse 6, der das Berner Oberland (Haslital) mit dem Kanton Wallis (Goms) verbindet. Geprägt von glattgeschliffenen Granitfelswänden, dem historischen Grimsel Hospiz und türkisfarbenen Stauseen (Grimselsee, Räterichsbodensee, Totensee) markiert er die Wasserscheide zwischen Nordsee (Aare/Rhein) und Mittelmeer (Rhône). Zusammen mit dem Furka- und Sustenpass bildet er die legendäre «Grossen Drei» Schweizer Alpenpass-Runde.',
    crossLinkAnchor: 'Furkapass (Furka Pass, Switzerland)',
    crossLinkUrl: '/passes/switzerland/valais-uri/furka-pass',
    crossLinkText: 'Kombinieren Sie Ihre Alpenfahrt mit dem benachbarten'
  },
  'susten-pass': {
    nearestTowns: [
      { name: 'Innertkirchen, Bern (Haslital)', distance: '27.5 km (17.1 miles)', direction: 'West via Hauptstrasse 11' },
      { name: 'Wassen, Uri (Reuss Valley)', distance: '17.5 km (10.9 miles)', direction: 'East via Hauptstrasse 11' },
      { name: 'Meiringen, Bern (Berner Oberland)', distance: '33 km (20.5 miles)', direction: 'West via Route 11 / 6' },
      { name: 'Andermatt, Uri (Gotthard Hub)', distance: '28 km (17.4 miles)', direction: 'Southeast via Route 11 & Route 2' },
      { name: 'Interlaken, Bern', distance: '60 km (37.3 miles)', direction: 'West via A8 & Route 11' },
      { name: 'Lucerne (Luzern), Switzerland', distance: '80 km (49.7 miles)', direction: 'North via A2 & Route 11' }
    ],
    seasonalClosureWindow: 'Mid-June through Late October / Early November (Winter Closure November to June)',
    seasonalClosureDetail: 'Maintained jointly by the Tiefbauamt des Kantons Bern (TBA) and Baudirektion Kanton Uri. The 2,224 m high mountain pass is closed during winter from November to mid-June due to intense alpine snow accumulation exceeding 10 meters (33 ft) and severe avalanche hazards. High-capacity rotary snow blowers clear the pass corridor in May and June for the summer season.',
    aboutPass: 'Susten Pass (2,224 m / 7,297 ft), known as Sustenpass in German and Col du Susten in French, is a world-renowned mountain pass in the Swiss Alps carrying Hauptstrasse 11 across the Uri Alps between the Haslital in Canton Bern and the Meiental in Canton Uri. Constructed between 1938 and 1945 as Europe\'s first purpose-built alpine scenic highway, it features 25 monumental hand-hewn stone bridges, a 300-meter crest tunnel, and panoramic vistas of the Steingletscher glacier. Susten Pass anchors Switzerland\'s iconic 120 km "Big 3" Alpine Pass circuit together with the Grimsel and Furka passes.',
    crossLinkAnchor: 'Grimsel Pass (Bern & Valais, Switzerland)',
    crossLinkUrl: '/passes/switzerland/bern-valais/grimsel-pass',
    crossLinkText: 'Discover adjacent world-class Swiss Alpine passes including the'
  },
  'gotthard-pass': {
    nearestTowns: [
      { name: 'Hospental, Uri (Urserental)', distance: '11.2 km (7.0 miles)', direction: 'North via Hauptstrasse 2' },
      { name: 'Andermatt, Uri', distance: '14.0 km (8.7 miles)', direction: 'North via Hauptstrasse 2' },
      { name: 'Airolo, Ticino (Val Bedretto)', distance: '12.8 km (8.0 miles)', direction: 'South via H2 / Tremola' },
      { name: 'Göschenen, Uri (A2 North Portal)', distance: '19.0 km (11.8 miles)', direction: 'North via Route 2' },
      { name: 'Bellinzona, Ticino', distance: '68 km (42.2 miles)', direction: 'South via A2 / Route 2' },
      { name: 'Lucerne (Luzern), Switzerland', distance: '85 km (52.8 miles)', direction: 'North via A2' }
    ],
    seasonalClosureWindow: 'Late May to Late October / Early November (Winter Closure November to May)',
    seasonalClosureDetail: 'Maintained jointly by the Baudirektion Kanton Uri (Tiefbauamt) and Dipartimento del Territorio Repubblica e Cantone Ticino. The high mountain pass road and Tremola close annually during winter due to heavy snow accumulation exceeding 8 meters (26 ft) and avalanche risk. Year-round transalpine traffic is maintained 24/7 via the 16.9 km A2 Gotthard Road Tunnel.',
    aboutPass: 'Gotthard Pass (2,106 m / 6,909 ft), known as Passo del San Gottardo in Italian and Gotthardpass in German, is the historic heart of Switzerland and the most vital north-south alpine crossroads in Europe. Carrying Hauptstrasse 2 across the Saint-Gotthard Massif between Hospental/Andermatt (Uri) and Airolo (Ticino), it features the world-renowned historic Tremola cobblestone road with 24 hairpin switchbacks. As the continental watershed separating the Rhine (North Sea) and Ticino/Po (Mediterranean) drainage basins, Gotthard Pass offers breathtaking alpine landscapes, the 13th-century Gotthard Hospice, alpine lakes, and an essential toll-free summer alternative to the A2 motorway tunnel.',
    crossLinkAnchor: 'Furka Pass (Valais / Uri, Switzerland)',
    crossLinkUrl: '/passes/switzerland/valais-uri/furka-pass',
    crossLinkText: 'Explore adjacent Central Swiss Alpine passes including the'
  },
  'bernina-pass': {
    nearestTowns: [
      { name: 'Pontresina, Graubünden (Engadin)', distance: '17.5 km (10.9 miles)', direction: 'Northwest via Route 29' },
      { name: 'Poschiavo, Graubünden (Val Poschiavo)', distance: '18.2 km (11.3 miles)', direction: 'South via Route 29' },
      { name: 'St. Moritz, Graubünden', distance: '23.0 km (14.3 miles)', direction: 'Northwest via Route 29 / 27' },
      { name: 'Samedan, Graubünden (Engadin Airport)', distance: '22.0 km (13.7 miles)', direction: 'Northwest via Route 29 / 27' },
      { name: 'Tirano, Lombardy (Italy)', distance: '33.5 km (20.8 miles)', direction: 'South via Route 29 / SS38' },
      { name: 'Livigno, Italy (via Forcola di Livigno)', distance: '21.0 km (13.0 miles)', direction: 'East via Route 29 & Forcola' }
    ],
    seasonalClosureWindow: 'Open Year-Round 365 Days (Continuous Cantonal Maintenance)',
    seasonalClosureDetail: 'Maintained and cleared 365 days a year by the Tiefbauamt des Kantons Graubünden (Strassen Graubünden). Unlike seasonal Swiss high passes, Bernina Pass (2,328 m) remains open during winter using high-capacity rotary snow blowers (Schneefräsen) and constant salting. Brief temporary closures occur only during acute blizzard events or controlled avalanche safety blasting.',
    aboutPass: 'Bernina Pass (2,328 m / 7,638 ft), known as Passo del Bernina in Italian, Berninapass in German, and Pass dal Bernina in Romansh, is a world-famous alpine mountain pass in the Canton of Graubünden connecting the Upper Engadin valley with Val Poschiavo and Tirano in Italy. Carrying Hauptstrasse 29 along the shores of Lago Bianco, it serves as the continental divide separating the Danube/Black Sea basin from the Po/Adriatic Sea basin. It is celebrated globally for its year-round road accessibility, breathtaking views of Piz Bernina (4,049 m) and the Palü Glacier, and the adjacent UNESCO World Heritage Bernina Railway route.',
    crossLinkAnchor: 'Gotthard Pass (Uri & Ticino, Switzerland)',
    crossLinkUrl: '/passes/switzerland/uri-ticino/gotthard-pass',
    crossLinkText: 'Discover other premier Swiss alpine crossings including the'
  },
  'rogers-pass': {
    nearestTowns: [
      { name: 'Revelstoke, British Columbia', distance: '70 km (43.5 miles)', direction: 'West via Trans-Canada Hwy 1' },
      { name: 'Golden, British Columbia', distance: '80 km (49.7 miles)', direction: 'East via Trans-Canada Hwy 1' },
      { name: 'Field, British Columbia (Yoho NP)', distance: '135 km (83.8 miles)', direction: 'East via Hwy 1' },
      { name: 'Lake Louise, Alberta', distance: '165 km (102.5 miles)', direction: 'East via Hwy 1' },
      { name: 'Banff, Alberta', distance: '220 km (136.7 miles)', direction: 'East via Hwy 1' },
      { name: 'Calgary, Alberta', distance: '345 km (214.3 miles)', direction: 'East via Hwy 1' }
    ],
    seasonalClosureWindow: 'Open Year-Round 365 Days (Intermittent 1-3 hr avalanche control closures during heavy winter storms)',
    seasonalClosureDetail: 'Maintained and cleared 365 days a year jointly by Parks Canada and the BC Ministry of Transportation and Infrastructure (DriveBC). Features the world-renowned Operation PALFISH avalanche control program where the Royal Canadian Artillery fires 105mm Howitzers to trigger controlled snow slides, alongside massive reinforced concrete snow sheds protecting Trans-Canada Highway 1.',
    aboutPass: 'Rogers Pass (1,330 m / 4,364 ft) is a world-famous Canadian mountain pass situated in the heart of Glacier National Park in the Selkirk Mountains of British Columbia. Carrying the Trans-Canada Highway 1 and the Canadian Pacific Railway, it is a National Historic Site of Canada known for its heroic transcontinental railway heritage, dramatic glacier-carved peaks like Mount Sir Donald, massive snow sheds, and receiving up to 15 meters (50 feet) of annual snowfall.',
    crossLinkAnchor: 'North Cascades Highway Pass (Washington, USA)',
    crossLinkUrl: '/passes/united-states/washington/north-cascades-pass',
    crossLinkText: 'Compare Pacific Northwest & Western mountain highway conditions with'
  },
  'simplon-pass': {
    nearestTowns: [
      { name: 'Brig-Glis, Valais (Upper Rhone Valley)', distance: '11.5 km (7.1 miles)', direction: 'Northwest via Nationalstrasse A9' },
      { name: 'Simplon Dorf, Valais (Alpine Village)', distance: '9.0 km (5.6 miles)', direction: 'South via Nationalstrasse A9' },
      { name: 'Gondo, Valais (Swiss-Italian Border)', distance: '18.5 km (11.5 miles)', direction: 'South via Nationalstrasse A9' },
      { name: 'Domodossola, Piedmont (Italy)', distance: '38.0 km (23.6 miles)', direction: 'South via A9 / SS33' },
      { name: 'Visp, Valais (Matterhorn Gateway)', distance: '21.0 km (13.0 miles)', direction: 'West via A9 / Route 9' },
      { name: 'Milan (Milano), Italy', distance: '160 km (99.4 miles)', direction: 'Southeast via SS33 / A8' }
    ],
    seasonalClosureWindow: 'Open Year-Round 365 Days (Winter Maintenance & Avalanche Protection)',
    seasonalClosureDetail: 'Maintained and kept open 365 days a year by the Federal Roads Office (ASTRA / FEDRO) and the Canton of Valais (Dienststelle für Mobilität). Features over 30 modern reinforced avalanche galleries, snow sheds, and continuous rotary snowplow teams. Short temporary closures occur only during severe alpine blizzards or controlled safety blasting. The BLS car shuttle train (Autoverlad Brig–Iselle) operates as a continuous all-weather backup.',
    aboutPass: 'Simplon Pass (2,005 m / 6,578 ft), known as Simplonpass in German and Passo del Sempione in Italian, is a historic and strategic transalpine highway crossing connecting the Upper Valais in Switzerland with the Piedmont region of Northern Italy. First transformed into a modern engineered road by Napoleon Bonaparte between 1801 and 1805, the pass carries National Road A9 and European route E62. Renowned as one of the few high alpine passes open year-round, it features the monumental Ganter Bridge (Ganterbrücke), the historic 19th-century Simplon Hospice, the World War II Stone Eagle monument (Steinadler), and dramatic panoramic vistas of the 3,553 m Monte Leone and the Lepontine Alps.',
    crossLinkAnchor: 'Great St Bernard Pass (Valais & Aosta Valley)',
    crossLinkUrl: '/passes/switzerland-italy/valais-aosta-valley/great-st-bernard-pass',
    crossLinkText: 'Compare Simplon Pass road conditions with other premier Swiss-Italian alpine routes like the'
  },
  'prislop-pass': {
    nearestTowns: [
      { name: 'Borșa & Complex Turistic Borșa, Maramureș', distance: '16.0 km (9.9 miles)', direction: 'West via DN18' },
      { name: 'Cârlibaba, Suceava (Bucovina)', distance: '18.0 km (11.2 miles)', direction: 'East via DN18' },
      { name: 'Iacobeni, Suceava (Joncțiune DN17 / E58)', distance: '36.0 km (22.4 miles)', direction: 'Southeast via DN18' },
      { name: 'Vișeu de Sus, Maramureș (Mocănița)', distance: '49.0 km (30.4 miles)', direction: 'West via DN18' },
      { name: 'Vatra Dornei, Suceava (Stațiune Balneară)', distance: '52.0 km (32.3 miles)', direction: 'Southeast via DN18 & DN17' },
      { name: 'Sighetu Marmației, Maramureș', distance: '108 km (67.1 miles)', direction: 'Northwest via DN18' }
    ],
    seasonalClosureWindow: 'Deschis Tot Timpul Anului / Open Year-Round 365 Days (Întreținere și deszăpezire CNAIR / DRDP Cluj & Iași)',
    seasonalClosureDetail: 'Menținut deschis 365 de zile pe an de către Compania Națională de Administrare a Infrastructurii Rutiere (CNAIR) prin DRDP Cluj (Secția Drumuri Naționale Baia Mare) și DRDP Iași (Secția Drumuri Naționale Câmpulung Moldovenesc). Șoseaua DN18 a fost integral reabilitată și modernizată cu asfalt neted, marcaje reflectorizante și parapeți de siguranță. Pe timp de iarnă, utilajele cu lamă și sărărițele intervin continuu; anvelopele de iarnă (M+S / 3PMSF) sunt strict obligatorii pe carosabil acoperit cu zăpadă sau polei.',
    aboutPass: 'Pasul Prislop (1.416 m / 4.646 ft) este cel mai înalt pas rutier din Carpații Orientali din România, situat pe Drumul Național 18 (DN18) la granița istorică dintre județul Maramureș și județul Suceava (Bucovina). Înconjurat de crestele maiestuoase ale Munților Rodnei (Vârful Pietrosu 2.303 m și Vârful Ineu 2.279 m) și ale Munților Maramureșului, pasul constituie principala punte de legătură între Țara Maramureșului și Țara Fagilor. În punctul somital se află Mănăstirea Prislop (Schitul Sfânta Treime cu biserica din lemn în stil maramureșean), Hanul Prislop și Monumentul Eroilor din Primul Război Mondial. În fiecare august, platoul somital găzduiește festivalul folcloric «Hora de la Prislop», o grandioasă celebrare a tradițiilor din Maramureș, Bucovina și Transilvania.',
    crossLinkAnchor: 'Transfăgărășan & European Mountain Routes',
    crossLinkUrl: '/passes',
    crossLinkText: 'Comparați condițiile din Pasul Prislop cu alte trecători montane spectaculoase din România și Europa pe'
  },
  'vrsic-pass': {
    nearestTowns: [
      { name: 'Kranjska Gora, Gorenjska', distance: '12.0 km (7.5 miles)', direction: 'North via Road 206' },
      { name: 'Trenta, Bovec (Dolina Soče)', distance: '13.0 km (8.1 miles)', direction: 'South via Road 206' },
      { name: 'Bovec, Goriška / Primorska', distance: '34.0 km (21.1 miles)', direction: 'Southwest via Road 206 & 203' },
      { name: 'Mojstrana / Vrata Valley', distance: '26.0 km (16.2 miles)', direction: 'Northeast via Road 206 & 201' },
      { name: 'Bled / Lake Bled, Gorenjska', distance: '50.0 km (31.1 miles)', direction: 'East via Road 201 & A2' },
      { name: 'Tarvisio, Friuli-Venezia Giulia (Italy)', distance: '31.0 km (19.3 miles)', direction: 'Northwest via Road 201 & SS54' }
    ],
    seasonalClosureWindow: 'November/December to April/May (Odprto v poletni sezoni / Zaprto pozimi zaradi snega in plazov)',
    seasonalClosureDetail: 'Prelaz Vršič (1.611 m) je najvišji cestni gorski prelaz v Sloveniji in Vzhodnih Julijskih Alpah. Cesta 206 (Ruska cesta) ima 50 oštevilčenih serpentin (serpentine 1–24 na severni kranjskogorski strani so tlakovane s granitnimi kockami). Prelaz je običajno odprt od pozne pomladi do pozne jeseni (maj–oktober). V zimskem času je prelaz zaprt zaradi obsežnih snežnih padavin in nevarnosti snežnih plazov z Mojstrovke in Prisanka. V primeru ugodnega vremena pozimi DARS/direkcija za ceste prelaz začasno odpre za vozila z verigami.',
    aboutPass: 'Prelaz Vršič (1.611 m / 5.285 ft), znan tudi kot Ruska cesta (Regionalna cesta 206), povezuje Gorenjsko (Kranjska Gora) s Primorsko in dolino reke Soče (Trenta in Bovec) čez srce Triglavskega narodnega parka v Julijskih Alpah. Cesto so med prvo svetovno vojno leta 1915–1916 zgradili ruski vojni ujetniki za avstro-ogrsko oskrbo soške fronte. Ob cesti na 8. serpentini stoji znamenita Ruska kapelica, zgrajena v spomin na stotine ujetnikov, ki jih je marca 1916 zasul orjaški snežni plaz pod Mojstrovko. Prelaz slovi po dih jemajočih razgledih na Prisojnik (z naravnim oknom in obrazom Ajdovske deklice), Jalovec in Špik, planinskih postojankah (Erjavčeva koča, Tičarjev dom, Poštarski dom) ter 50 legendarnih serpentinah.',
    crossLinkAnchor: 'Stelvio Pass & Alpine High Passes',
    crossLinkUrl: '/passes/italy/south-tyrol-lombardy/stelvio-pass',
    crossLinkText: 'Primerjajte razmere na prelazu Vršič z drugimi legendarnimi alpskimi prelazi, kot je'
  },
  'col-de-la-bonette': {
    nearestTowns: [
      { name: 'Jausiers, Alpes-de-Haute-Provence (Vallée de l\'Ubaye)', distance: '24.0 km (14.9 miles)', direction: 'North via Route D64' },
      { name: 'Barcelonnette, Vallée de l\'Ubaye', distance: '32.0 km (19.9 miles)', direction: 'Northwest via D64 & D900' },
      { name: 'Saint-Étienne-de-Tinée, Alpes-Maritimes', distance: '26.0 km (16.2 miles)', direction: 'South via Route D64' },
      { name: 'Auron (Station de Ski), Alpes-Maritimes', distance: '33.0 km (20.5 miles)', direction: 'South via D64 & M2205' },
      { name: 'Isola 2000, Mercantour', distance: '58.0 km (36.0 miles)', direction: 'Southeast via D64 & M97' },
      { name: 'Nice / Côte d\'Azur, Alpes-Maritimes', distance: '112 km (69.6 miles)', direction: 'South via D64, M2205 & RM6202' }
    ],
    seasonalClosureWindow: 'November to May/June (Fermeture hivernale saisonnière / Ouvert en été)',
    seasonalClosureDetail: 'Le Col de la Bonette (2 715 m) et la boucle panoramique de la Cime de la Bonette (2 802 m) sont fermés pendant la saison hivernale en raison d\'un enneigement exceptionnel et du risque d\'avalanches sur la Route D64 (Route des Grandes Alpes). Les services routiers départementaux (Inforoute 04 et Inforoute 06) assurent le déneigement printanier au moyen de fraises rotatives géantes pour une réouverture habituelle entre fin mai et mi-juin. La fermeture intervient aux premières neiges d\'automne (fin octobre ou début novembre).',
    aboutPass: 'Le Col de la Bonette (2 715 m) et sa célèbre boucle sommitale de la Cime de la Bonette culminant à 2 802 m d\'altitude constituent la plus haute route asphaltée de France et la plus haute route traversante d\'Europe reliant la Vallée de l\'Ubaye (Jausiers, Alpes-de-Haute-Provence) à la Vallée de la Tinée (Saint-Étienne-de-Tinée, Alpes-Maritimes) au cœur du Parc National du Mercantour. Haut lieu de la Route des Grandes Alpes et légende du Tour de France, la Bonette est jalonnée de vestiges militaires impressionnants, notamment le Camp des Fourches (village militaire d\'altitude construit entre 1896 et 1910) et les casemates Maginot du Restefond. Au sommet de la Cime (2 802 m), une table d\'orientation en pierre offre un panorama à 360 degrés sur les Alpes du Sud, le Mont Pelat, le Viso et jusqu\'à la Mer Méditerranée par temps clair.',
    crossLinkAnchor: 'Col de l\'Iseran (Savoie - 2 770 m)',
    crossLinkUrl: '/passes/france/savoie/col-de-l-iseran',
    crossLinkText: 'Comparez l\'altitude et l\'état de la route du Col de la Bonette avec le plus haut col routier des Alpes,'
  },
  'col-agnel': {
    nearestTowns: [
      { name: 'Chianale, Valle Varaita (Borgo Storico)', distance: '10.0 km (6.2 miles)', direction: 'East via SP251' },
      { name: 'Pontechianale, Cuneo (Piemonte)', distance: '14.0 km (8.7 miles)', direction: 'East via SP251' },
      { name: 'Molines-en-Queyras, Hautes-Alpes (France)', distance: '20.0 km (12.4 miles)', direction: 'West via Route D205' },
      { name: 'Saint-Véran, Queyras', distance: '22.0 km (13.7 miles)', direction: 'West/Southwest via D205 & D5' },
      { name: 'Casteldelfino, Valle Varaita', distance: '22.5 km (14.0 miles)', direction: 'East via SP251 & SP105' },
      { name: 'Guillestre / Mont-Dauphin, Hautes-Alpes', distance: '42.0 km (26.1 miles)', direction: 'West via D205 & D902' },
      { name: 'Cuneo / Saluzzo, Piemonte (Italia)', distance: '75.0 km (46.6 miles)', direction: 'East via SP251 & SP8' }
    ],
    seasonalClosureWindow: 'November to May/June (Chiusura invernale per neve e slavine / Fermeture hivernale)',
    seasonalClosureDetail: 'Il Colle dell\'Agnello (2 744 m) è soggetto a chiusura invernale totale dovuta all\'altitudine estrema, alle abbondanti nevicate e al pericolo slavine lungo i versanti rocciosi della SP251 e della D205. La riapertura estiva viene coordinata congiuntamente dal Servizio Viabilità della Provincia di Cuneo e dal dipartimento delle Hautes-Alpes (Inforoute 05) con l\'ausilio di potenti frese turbine da neve, solitamente tra fine maggio e la prima settimana di giugno. La chiusura per la stagione fredda scatta con le prime nevicate autunnali (fine ottobre o inizio novembre).',
    aboutPass: 'Il Colle dell\'Agnello (in francese Col Agnel, 2 744 m / 9 003 ft) è il valico stradale asfaltato internazionale più alto delle Alpi e d\'Europa, nonché il 3° colle più elevato in assoluto alle spalle del Col de l\'Iseran (2 770 m) e del Passo dello Stelvio (2 757 m). Situato nelle Alpi Cozie lungo la linea di confine tra Italia e Francia, congiunge la Valle Varaita (Piemonte, provincia di Cuneo) con la valle del Queyras (Hautes-Alpes). Il panorama sommitale è dominato dalla grandiosa mole del Monviso (3 841 m), dal Pain de Sucre (3 208 m) e dal Pic de Caramantran. Rinomata Cima Coppi del Giro d\'Italia e teatro dell\'indimenticabile trionfo di Vincenzo Nibali nel 2016, è una delle mete d\'elezione per cicloturisti e motociclisti di tutto il mondo.',
    crossLinkAnchor: 'Col de la Bonette (2 802 m) & Stelvio Pass (2 757 m)',
    crossLinkUrl: '/passes/france/alpes-maritimes-alpes-de-haute-provence/col-de-la-bonette',
    crossLinkText: 'Confronta le condizioni e l\'altitudine del Colle dell\'Agnello con i giganti alpini su'
  },
  'mangart-saddle': {
    nearestTowns: [
      { name: 'Bovec, Goriška (Soča Valley gateway)', distance: '26 km (16.2 miles)', direction: 'North via Road 203 → Predil Pass road' },
      { name: 'Log pod Mangartom (nearest village)', distance: '9 km (5.6 miles)', direction: 'South via Predil Pass road 203' },
      { name: 'Cave del Predil / Raibl (Italy)', distance: '7 km (4.3 miles)', direction: 'West via Predil Pass into Italy (SS54)' },
      { name: 'Tarvisio, Friuli-Venezia Giulia (Italy)', distance: '24 km (14.9 miles)', direction: 'West via Predil Pass / SS54 into Italy' },
      { name: 'Kranjska Gora, Gorenjska (Julian Alps resort)', distance: '37 km (23.0 miles)', direction: 'East via Roads 203 & 201' },
      { name: 'Kobarid (Caporetto), Goriška', distance: '44 km (27.3 miles)', direction: 'South via Road 203 along Soča Valley' }
    ],
    seasonalClosureWindow: 'Mid-June to Late October (Zimska zapora od novembra do junija / Winter closure November to June). ⚠️ 2026 additional partial closure: 9th km to saddle closed due to active rockfall.',
    seasonalClosureDetail: 'Cesta na Mangart (Mangart Road) closes seasonally in late October or early November due to heavy alpine snowfall exceeding 3–4 metres on the narrow cliff road and acute avalanche hazards on the steep limestone faces. Managed jointly by the Triglav National Park (TNP) authority and DARS / Direkcija RS za infrastrukturo, the road typically reopens in mid-June after manual snow clearance. In 2026, a rockfall on the upper section (above the 9th km car park) has caused an additional partial closure — the final stretch to Mangartsko sedlo (2,072 m) is closed to all vehicles, cyclists, and pedestrians; visitors must hike approximately 40 minutes from the 9th km car park to reach the saddle on foot. Real-time status and parking availability are monitored on promet.si, which also manages the automated 90-vehicle capacity barrier at Mangartska planina.',
    aboutPass: 'Mangartsko sedlo (Mangart Saddle, 2,072 m / 6,798 ft) is the end point of the highest paved road in Slovenia — the dramatic Cesta na Mangart (Mangart Road) — climbing through the heart of Triglav National Park (Triglavski narodni park) in the Julian Alps on the Slovenian-Italian border. Branching off the Predil Pass road near Log pod Mangartom in the Goriška/Posočje region, the 12 km asphalt road negotiates five dark unlit tunnels, sheer cliff-edge hairpin bends, and up to 17% gradients before reaching the saddle at 2,072 m. Access is controlled by a €10 eco-toll per vehicle and an automated digital barrier capping simultaneous vehicles at 90 — systems that preserve the pristine alpine environment of the national park. The saddle sits on the Slovenian-Italian border, framing panoramic views of Mangart peak (2,679 m — 3rd highest in Slovenia), the Soča (Isonzo) Valley, and the Friuli plains of northern Italy. Together with Vršič Pass (1,611 m) and Predil Pass (1,156 m), Mangartsko sedlo forms the legendary "Posočje Alpine Triangle" circuit.',
    crossLinkAnchor: 'Vršič Pass (Prelaz Vršič, Slovenia)',
    crossLinkUrl: '/passes/slovenia/gorenjska-goriska/vrsic-pass',
    crossLinkText: 'Combine your Mangart Saddle visit with the legendary nearby Slovenian alpine pass,'
  },
  'baralacha-la': {
    nearestTowns: [
      { name: 'Jispa, Lahaul & Spiti (Himachal Pradesh)', distance: '54 km (33.5 miles)', direction: 'South via Leh-Manali Highway (NH-3)' },
      { name: 'Keylong, Lahaul & Spiti District HQ', distance: '73 km (45.3 miles)', direction: 'South via NH-3 via Sissu & Atal Tunnel' },
      { name: 'Darcha, Lahaul (Checkpost junction)', distance: '44 km (27.3 miles)', direction: 'South via NH-3 towards Padum road' },
      { name: 'Sarchu (Himachal-Ladakh Border)', distance: '32 km (19.8 miles)', direction: 'North via NH-3 towards Lachulung La' },
      { name: 'Manali, Kullu District', distance: '140 km (87.0 miles)', direction: 'South via NH-3 through Atal Tunnel & Solang' },
      { name: 'Leh, Union Territory of Ladakh', distance: '330 km (205.0 miles)', direction: 'North via NH-3 across Tanglang La' }
    ],
    seasonalClosureWindow: 'Early November to Mid-May / Early June (सर्दियों में बर्फबारी के कारण बंद / Winter closure November to June)',
    seasonalClosureDetail: 'Baralacha La Pass (4,890 m / 16,040 ft) experiences severe high-altitude Himalayan winter conditions with snow accumulation exceeding 10 to 15 metres across Zingzingbar, Suraj Tal, and Bharatpur City. Temperatures drop to -25°C. Managed by the Border Roads Organisation (BRO) under Project Deepak (Himachal side) and Project Himank (Ladakh side), heavy rotary snow blowers and bulldozers clear the pass starting in March/April. The official opening typically takes place between mid-May and early June. Real-time updates and convoy movement schedules are issued daily by HP Police, Lahaul & Spiti Police control room, and BRO traffic advisories.',
    aboutPass: 'Baralacha La Pass (बारालाचा ला, 4,890 m / 16,040 ft) is a world-renowned high mountain pass in the Zanskar range connecting the Lahaul Valley of Himachal Pradesh with Ladakh along the strategic Leh-Manali Highway (NH-3). The name "Baralacha" means "pass where roads from different directions meet", marking the historical junction where ancient trade trails from Zanskar, Spiti, Lahaul, and Ladakh converged. Nestled right below the summit lies Suraj Tal (Sun Lake), a holy glacial lake and the third highest lake in India, which serves as the source of the Bhaga River. Baralacha La is an essential transit checkpoint for road trips, motorcycle expeditions, and army logistics crossing the Himalayas. Due to extreme altitude, travelers are advised to acclimatize properly at Keylong or Jispa before ascending.',
    crossLinkAnchor: 'Rohtang Pass (13,058 ft) & Zoji La Pass (11,575 ft)',
    crossLinkUrl: '/passes/india/himachal-pradesh/rohtang-pass',
    crossLinkText: 'Compare real-time status and Himalayan road conditions with nearby'
  },
  'katschberg-pass': {
    nearestTowns: [
      { name: 'St. Michael im Lungau (Salzburg)', distance: '6.0 km (3.7 miles)', direction: 'North via Katschberg Straße B99' },
      { name: 'Rennweg am Katschberg (Kärnten)', distance: '10.5 km (6.5 miles)', direction: 'South via B99 through Liesertal' },
      { name: 'Tamsweg (Bezirkshauptstadt Lungau)', distance: '22.0 km (13.7 miles)', direction: 'Northeast via B96 from St. Michael' },
      { name: 'Spittal an der Drau (Kärnten)', distance: '42.0 km (26.1 miles)', direction: 'South via B99 & A10 Tauern Autobahn' },
      { name: 'Gmünd in Kärnten (Künstlerstadt)', distance: '24.0 km (14.9 miles)', direction: 'South via B99' },
      { name: 'Salzburg Stadt (Landeshauptstadt)', distance: '115.0 km (71.5 miles)', direction: 'North via A10 Tauern Autobahn' }
    ],
    seasonalClosureWindow: 'Ganzjährig geöffnet / Open Year-Round (Winterreifenpflicht 1. Nov – 15. Apr)',
    seasonalClosureDetail: 'Der Katschbergpass (1.641 m / 5.384 ft) auf der B99 Katschberg Straße ist im Gegensatz zu vielen hochalpinen Alpenpässen das gesamte Jahr über für den Verkehr geöffnet. Als wichtige regionale Verbindung und kostenfreie Ausweichroute zum kostenpflichtigen A10 Katschberg-Autobahntunnel sorgen die Straßenmeistereien Kärnten und Salzburg mit ständiger Schneeräumung für freie Fahrbahnen. In Österreich gilt vom 1. November bis 15. April die gesetzliche witterungsbedingte Winterreifenpflicht (M+S/3PMSF). Bei extremen Wintereinbrüchen kann kurzzeitig Schneekettenpflicht ("Schneeketten vorgeschrieben") oder ein LKW-Fahrverbot verhängt werden. Aktuelle Verkehrsmeldungen liefert der ÖAMTC-Verkehrsservice.',
    aboutPass: 'Der Katschbergpass (Katschberg, 1.641 m s.l.m.) ist ein traditionsreicher Alpenpass an der Grenze zwischen den österreichischen Bundesländern Kärnten (Bezirk Spittal an der Drau) und Salzburg (Bezirk Tamsweg / Lungau). Er trennt die Hohe Tauern im Westen von den Nockbergen (Gurktaler Alpen) im Osten. Die 16,5 km lange B99 Katschberg Straße überwindet von Rennweg im Liesertal bis St. Michael im Lungau Steigungen von bis zu 15% und ist eine beliebte Panoramastraße sowie eine mautfreie Umfahrung des Katschbergtunnels der Tauern Autobahn (A10). Auf der Passhöhe liegt der bekannte Ferien- und Skiorort Katschberghöhe mit direktem Zugang zum Skigebiet Katschberg-Aineck.',
    crossLinkAnchor: 'Großglockner Hochalpenstraße (2.504 m) & Timmelsjoch (2.474 m)',
    crossLinkUrl: '/passes/austria/salzburg-carinthia/grossglockner-high-alpine-road',
    crossLinkText: 'Vergleichen Sie die Straßenbedingungen des Katschbergpasses mit weiteren österreichischen Alpenpässen auf'
  },
  'grossglockner-high-alpine-road': {
    nearestTowns: [
      { name: 'Fusch an der Großglocknerstraße (Salzburg)', distance: '14.0 km (8.7 miles)', direction: 'North via B107 towards Zell am See' },
      { name: 'Heiligenblut am Großglockner (Kärnten)', distance: '15.0 km (9.3 miles)', direction: 'South via B107 towards Mölltal' },
      { name: 'Zell am See (Salzburg)', distance: '27.0 km (16.8 miles)', direction: 'North via B107 & B311' },
      { name: 'Lienz (Osttirol)', distance: '48.0 km (29.8 miles)', direction: 'South via B107 through Iselsberg' },
      { name: 'Mittersill (Pinzgau, Salzburg)', distance: '45.0 km (28.0 miles)', direction: 'Northwest via B168' },
      { name: 'Spittal an der Drau (Kärnten)', distance: '85.0 km (52.8 miles)', direction: 'Southeast via B107 & A10' }
    ],
    seasonalClosureWindow: 'Anfang Mai bis Anfang November (Wintersperre von November bis Mai)',
    seasonalClosureDetail: 'Die Großglockner Hochalpenstraße (Hochtor Pass, 2.504 m) ist von Anfang Mai bis Anfang November geöffnet. In den Wintermonaten (November bis Mai) ist die Hochgebirgsstraße wegen extremer Schneemengen von 8 bis 12 Metern, meterhohen Schneewehen und akuter Lawinengefahr auf der gesamten 48 km langen Strecke voll gesperrt. Die jährliche Schneeräumung im April ist ein weltberühmtes Spektakel, bei dem die historischen Wallack-Rotationsschneepflüge ("System Wallack") durch gigantische Schneewände fräsen. Während der Sommersaison gelten nächtliche Schließzeiten zum Schutz der alpinen Tierwelt im Nationalpark Hohe Tauern.',
    aboutPass: 'Die Großglockner Hochalpenstraße (Großglockner High Alpine Road, 2.504 m s.l.m. am Hochtor-Tunnel) ist die berühmteste Panoramastraße Österreichs und ein Meisterwerk der Alpen-Ingenieurkunst. Sie führt durch den Nationalpark Hohe Tauern und verbindet Fusch im Salzburger Pinzgau mit dem Wallfahrtsort Heiligenblut in Kärnten. Auf 48 Kilometern überwindet die B107 insgesamt 36 nummerierte Kehren und führt bis auf 2.571 m an der Edelweißspitze hinauf. Ein Abstecher führt zur Kaiser-Franz-Josefs-Höhe (2.369 m) mit direktem Blick auf den Großglockner (3.798 m, Höchster Berg Österreichs) und die Pasterze, den längsten Gletscher der Ostalpen. Betrieben von der GROHAG, zieht die Panoramastraße jährlich über 1 Million Besucher aus aller Welt an.',
    crossLinkAnchor: 'Katschbergpass (1.641 m) & Stelvio Pass (2.757 m)',
    crossLinkUrl: '/passes/austria/carinthia-salzburg/katschberg-pass',
    crossLinkText: 'Vergleichen Sie die Öffnungszeiten und Mautpreise der Großglockner Hochalpenstraße mit'
  },
  'umling-la': {
    nearestTowns: [
      { name: 'Demchok, Ladakh', distance: '24.0 km (14.9 miles)', direction: 'East near LAC border' },
      { name: 'Chisumle, Ladakh', distance: '28.0 km (17.4 miles)', direction: 'West via Chisumle Bridge' },
      { name: 'Koyul, Ladakh', distance: '45.0 km (28.0 miles)', direction: 'Northwest via Hanle-Koyul road' },
      { name: 'Hanle, Ladakh', distance: '105.0 km (65.2 miles)', direction: 'Northwest via Photi La / Koyul (Indian Astronomical Observatory)' },
      { name: 'Nyoma, Ladakh', distance: '145.0 km (90.1 miles)', direction: 'Northwest via Loma checkpoint' },
      { name: 'Leh, Ladakh', distance: '310.0 km (192.6 miles)', direction: 'Northwest via Karu & Chumathang (NH-3 / Indus Valley)' }
    ],
    seasonalClosureWindow: 'Late May / June to Late October / November (Winter closure December to May)',
    seasonalClosureDetail: 'Umling La Pass (19,024 ft / 5,798 m) experiences one of the harshest winter environments on Earth. Temperatures plunge below -40°C with severe blizzard drifts and permafrost freeze, closing civilian vehicular access between December and May. The Border Roads Organisation (BRO Project HIMANK) initiates intense spring snow clearing in April using high-altitude rotary cutters and bulldozers. The road typically reopens for authorized civilian and adventure travelers in late May or early June. Daily transit during the open season is permitted only between 08:00 and 17:00. An active Ladakh Inner Line Permit (ILP) is required at Loma, Nyoma, and Hanle checkpoints.',
    aboutPass: 'Umling La Pass (उमलिंग ला, 19,024 ft / 5,798 m) in the Changthang region of Eastern Ladakh, India, is officially certified by Guinness World Records as the highest motorable road and mountain pass on planet Earth. Built by the Border Roads Organisation (BRO) under Project HIMANK, this 52 km blacktopped engineering marvel connects Chisumle with Demchok near the Line of Actual Control (LAC). Surpassing Bolivia\'s Uturuncu road (18,953 ft), Khardung La (17,582 ft), and even Mount Everest Base Camp (17,598 ft), Umling La offers sweeping vistas of Tibetan border peaks and barren high-altitude desert. Due to thin atmospheric oxygen (~50% of sea level), visitors must strictly acclimatize at Leh (3,500 m) and Hanle (4,500 m), carry supplemental medical oxygen, and limit summit stays to 15–20 minutes.',
    crossLinkAnchor: 'Khardung La (17,582 ft) & Chang La Pass (17,590 ft)',
    crossLinkUrl: '/passes/india/ladakh/khardung-la',
    crossLinkText: 'Compare extreme high-altitude Himalayan passes with'
  },
  'coquihalla-summit-pass': {
    nearestTowns: [
      { name: 'Hope, British Columbia', distance: '48.0 km (29.8 miles)', direction: 'Southwest via BC-5 South (Fraser Valley / Vancouver Gateway)' },
      { name: 'Merritt, British Columbia', distance: '67.0 km (41.6 miles)', direction: 'North via BC-5 North (Nicola Valley / Kamloops connection)' },
      { name: 'Kamloops, British Columbia', distance: '152.0 km (94.4 miles)', direction: 'North via BC-5 North & Coquihalla Phase II' },
      { name: 'Kelowna, British Columbia', distance: '185.0 km (115.0 miles)', direction: 'Northeast via Merritt & BC-97C Okanagan Connector' },
      { name: 'Vancouver, British Columbia', distance: '198.0 km (123.0 miles)', direction: 'West via Hope & Trans-Canada Hwy 1' }
    ],
    seasonalClosureWindow: 'Open Year-Round (Temporary closures for avalanche blasting & vehicle recovery)',
    seasonalClosureDetail: 'Coquihalla Summit Pass (1,244 m / 4,081 ft) is engineered and maintained by the British Columbia Ministry of Transportation and Infrastructure (MoTI) as a year-round, four-lane divided expressway. While not subject to extended seasonal winter closures like alpine passes, intense Pacific frontal storm systems can dump 30 to 75 cm of heavy mountain snow within 24 hours. Under severe weather, MoTI and maintenance contractor Yellowhead Road & Bridge (YRB) execute temporary safety closures (typically 2 to 6 hours) for explosive avalanche mitigation above the Great Bear Snowshed or heavy truck recovery. British Columbia legally mandates winter-rated tires (M+S or 3PMSF with minimum 3.5 mm tread depth) from October 1 through April 30. Commercial trucks over 11,794 kg must carry chains.',
    aboutPass: 'Coquihalla Summit Pass (Col de la Coquihalla, 1,244 m / 4,081 ft) is the highest elevation point on British Columbia Highway 5, traversing the Bedded Rock Range of the Cascade Mountains in southwestern British Columbia, Canada. Built for the Vancouver Expo 86 world exposition to connect the Pacific Lower Mainland with the resource-rich BC Interior, the Coquihalla expressway bypassed the tortuous Fraser Canyon route (Highway 1) and reduced travel times by more than 90 minutes. World-famous as the centerpiece of the Discovery Channel documentary television series "Highway Thru Hell", the summit corridor features the 615-meter Great Bear Snowshed, high-capacity runaway truck escape lanes, the Zopkios commercial vehicle staging hub, and comprehensive DriveBC live camera networks. Supported by variable speed corridors, the pass serves as British Columbia\'s paramount commercial transportation spine.',
    crossLinkAnchor: 'Rogers Pass (1,330 m) & Allison Pass (1,342 m)',
    crossLinkUrl: '/passes/canada/british-columbia/rogers-pass',
    crossLinkText: 'Compare Canadian mountain highway road conditions and winter pass cams with'
  }
};








