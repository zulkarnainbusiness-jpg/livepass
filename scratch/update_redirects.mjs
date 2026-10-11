import fs from 'fs';

const rawMapping = JSON.parse(fs.readFileSync('scratch/region_country_mapping.json', 'utf8'));
rawMapping['khyber'] = 'pakistan';

const countries = [
  'france',
  'india',
  'italy',
  'usa',
  'switzerland',
  'canada',
  'norway',
  'austria',
  'pakistan',
  'chile'
];

let redirectsContent = '# 301 Permanent Redirects for Canonical Pass URLs\n';
redirectsContent += '/atacama /chile/atacama 301\n';
redirectsContent += '/passes/nepal/* /passes 301\n';
redirectsContent += '/passes/nepal /passes 301\n';
redirectsContent += '/nepal /passes 301\n\n';

// For each country hub:
countries.forEach(c => {
  redirectsContent += `/${c}.html /${c} 301\n`;
  redirectsContent += `/country/${c} /${c} 301\n`;
});
redirectsContent += '\n';

// For each region:
// Old /<region>.html -> /<country>/<region>
// Old /country/<region> -> /<country>/<region>
// Old /<region> -> /<country>/<region>
for (const [region, country] of Object.entries(rawMapping)) {
  if (!country) continue;
  redirectsContent += `/${region}.html /${country}/${region} 301\n`;
  redirectsContent += `/country/${region} /${country}/${region} 301\n`;
  redirectsContent += `/${region} /${country}/${region} 301\n`;
}

redirectsContent += '\n# SPA Fallback for Dynamic Routes\n/* /index.html 200\n';

fs.writeFileSync('public/_redirects', redirectsContent);
console.log('Successfully generated public/_redirects with 301 rules!');
