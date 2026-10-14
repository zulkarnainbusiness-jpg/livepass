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

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Homepage
xml += `  <url>\n    <loc>https://livepasswatch.info/</loc>\n    <lastmod>2026-10-11</lastmod>\n    <changefreq>always</changefreq>\n    <priority>1.00</priority>\n  </url>\n`;
xml += `  <url>\n    <loc>https://livepasswatch.info/country.html</loc>\n    <lastmod>2026-10-11</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.95</priority>\n  </url>\n`;

// Country Hubs
countries.forEach(c => {
  xml += `  <url>\n    <loc>https://livepasswatch.info/${c}</loc>\n    <lastmod>2026-10-11</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.90</priority>\n  </url>\n`;
});

// Regions: /<country>/<region>
for (const [region, country] of Object.entries(rawMapping)) {
  if (!country) continue;
  xml += `  <url>\n    <loc>https://livepasswatch.info/${country}/${region}</loc>\n    <lastmod>2026-10-11</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
}

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml);
fs.writeFileSync('sitemap.xml', xml);

console.log('Successfully updated sitemap.xml with all /country/region URLs!');
