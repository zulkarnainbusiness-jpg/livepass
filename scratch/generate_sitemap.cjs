const fs = require('fs');
const path = require('path');

const dir = 'd:/uncle hong';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const today = new Date().toISOString().split('T')[0];
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

files.forEach(file => {
  let priority = '0.80';
  let changefreq = 'daily';
  if (file === 'index.html') { priority = '1.00'; changefreq = 'hourly'; }
  else if (['about.html', 'privacy.html', 'terms.html', 'country.html'].includes(file)) { priority = '0.90'; changefreq = 'weekly'; }
  else if (['india.html', 'usa.html', 'france.html', 'switzerland.html', 'canada.html', 'italy.html'].includes(file)) { priority = '0.90'; changefreq = 'daily'; }

  const url = 'https://livepasswatch.com/' + (file === 'index.html' ? '' : file);
  xml += `  <url>\n`;
  xml += `    <loc>${url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;
fs.writeFileSync(path.join(dir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${files.length} URLs.`);
