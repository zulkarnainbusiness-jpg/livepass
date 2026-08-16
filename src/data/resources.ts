import { ResourceItem } from '../types';

export const resourcesData: ResourceItem[] = [
  {
    id: 'travel-tips',
    slug: 'travel-tips',
    title: 'Travel Tips & Alpine Planning',
    category: 'Preparation',
    description: 'Essential guidelines for preparing your vehicle, packing emergency alpine kits, and monitoring fast-moving mountain weather fronts.',
    iconName: 'compass',
    badge: 'Popular Guide',
    ctaText: 'Read Travel Tips',
    content: `
### Key Guidelines for Mountain Travel
1. **Always check road cameras before departure**: Mountain passes can transition from bare pavement to ice sheets in minutes.
2. **Carry essential emergency supplies**: Extra water, high-calorie food, thermal blankets, emergency flares, and a portable jump-starter.
3. **Keep your fuel tank at least half full**: Gas stations are sparse in alpine corridors, and engine idling during snow delays consumes fuel rapidly.
4. **Download offline maps**: Cellular reception is frequently lost in high mountain passes and deep canyons.
    `
  },
  {
    id: 'chain-requirements',
    slug: 'chain-requirements',
    title: 'State & Country Chain Laws',
    category: 'Regulations',
    description: 'Complete breakdown of traction tire and tire chain laws across Washington (WSDOT), California (Caltrans), Colorado (CDOT), and the European Alps.',
    iconName: 'shield',
    badge: 'Legal Requirements',
    ctaText: 'View Chain Laws',
    content: `
### Overview of Chain Law Levels
- **Traction Advisory**: Approved winter tires (M+S or 3PMSF severe snow rated) recommended.
- **Tire Chains Required on Commercial Vehicles**: Freight trucks and buses must install chains on drive axles.
- **Tire Chains Required on All Vehicles**: Except AWD/4WD with approved snow tires on all 4 wheels.
- **Tire Chains Required on ALL Vehicles (No Exceptions)**: Even 4WD/AWD must chain up.
    `
  },
  {
    id: 'winter-driving',
    slug: 'winter-driving',
    title: 'Winter Mountain Driving Guide',
    category: 'Driving Skills',
    description: 'Master black ice detection, threshold braking on snow, safe following distances, and downhill engine braking techniques.',
    iconName: 'snowflake',
    badge: 'Safety Essential',
    ctaText: 'Learn Techniques',
    content: `
### Pro Mountain Driving Techniques
- **Smooth Inputs**: No sudden steering, aggressive acceleration, or abrupt braking.
- **Engine Braking**: Shift down into lower gears when descending steep passes to prevent brake fade.
- **Black Ice Awareness**: Watch for shiny dark patches on bridges, shaded curves, and near mountain streams.
    `
  },
  {
    id: 'maps-routes',
    slug: 'maps-routes',
    title: 'Alternative Mountain Routes & Passes',
    category: 'Navigation',
    description: 'Interactive detour mapping and alternative corridor recommendations when major highway passes face seasonal or emergency closures.',
    iconName: 'map',
    badge: 'Routing Tool',
    ctaText: 'Find Alternative Routes',
    content: `
### Major Mountain Bypass Corridors
- **Washington Cascades**: When I-90 Snoqualmie Pass is closed, check US-2 Stevens Pass or US-12 White Pass.
- **California Sierra Nevada**: When I-80 Donner Pass is blocked, evaluate US-50 Echo Summit.
- **Himalayas**: When Zoji La is closed, assess the Z-Morh tunnel transit windows.
    `
  },
  {
    id: 'emergency-info',
    slug: 'emergency-info',
    title: 'Alpine Emergency Contacts & Rescue',
    category: 'Emergency',
    description: 'Direct phone numbers and VHF radio frequencies for highway patrols, state DOT dispatch centers, avalanche centers, and search & rescue teams.',
    iconName: 'alert-triangle',
    badge: 'Emergency Contacts',
    ctaText: 'Emergency Directory',
    content: `
### Emergency Hotline Directory
- **USA National Emergency**: 911
- **Washington State DOT Dispatch**: 511 / (800) 695-ROAD
- **Caltrans Highway Information Network (CHIN)**: (800) 427-7623
- **Colorado Road Conditions**: 511 / (303) 639-1111
- **European Emergency**: 112
- **India BRO Highway Helpline**: 1077 / 112
    `
  },
  {
    id: 'pass-checklists',
    slug: 'pass-checklists',
    title: 'Pre-Departure Alpine Checklist',
    category: 'Checklists',
    description: 'Printable and interactive vehicle inspection checklist before traversing high elevation passes in extreme weather.',
    iconName: 'check-circle',
    badge: 'Checklist',
    ctaText: 'Open Checklist',
    content: `
### Pre-Trip Checklist
- [ ] Windshield washer fluid filled with -20°F de-icer fluid
- [ ] Tires inspected for minimum 4/32" tread depth
- [ ] Correct size tire chains test-fitted in dry conditions
- [ ] Ice scraper, snow brush, and small collapsible shovel packed
- [ ] First-aid kit and flashlight with spare batteries
    `
  },
  {
    id: 'faqs',
    slug: 'faqs',
    title: 'Frequently Asked Questions',
    category: 'Help Center',
    description: 'Answers to the most common questions regarding mountain pass conditions, data update frequencies, camera feeds, and winter restrictions.',
    iconName: 'help-circle',
    badge: 'FAQ Hub',
    ctaText: 'View All FAQs',
    content: `
### Common Inquiries
- **How often is pass data updated?** Official status, camera feeds, and alerts refresh continuously, typically every 2 to 5 minutes.
- **Can I get SMS or email alerts when my favorite pass closes?** Yes! Use our alert subscription system to receive instant notifications.
- **Where does LivePassWatch get its data?** We aggregate directly from verified state DOTs, highway authorities, meteorological agencies, and border patrol administrations.
    `
  },
  {
    id: 'instant-alerts',
    slug: 'instant-alerts',
    title: 'Real-Time Pass Alerts Subscription',
    category: 'Notifications',
    description: 'Customize mobile push alerts and email notifications for your commute routes and vacation mountain passes.',
    iconName: 'bell',
    badge: 'Alert System',
    ctaText: 'Configure Alerts',
    content: `
### Custom Alert Settings
Set up instant notifications for:
- Sudden pass closures and avalanche mitigation stops
- Tire chain requirements and traction restrictions
- Heavy snowfall forecasts and freezing rain warnings
    `
  }
];
