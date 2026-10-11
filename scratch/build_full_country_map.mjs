import fs from 'fs';

const rootFiles = fs.readdirSync('.');
const htmlFiles = rootFiles.filter(f => f.endsWith('.html') && !['index.html', 'about.html', 'terms.html', 'privacy.html', 'country.html'].includes(f));

const countryPages = ['france.html', 'india.html', 'italy.html', 'usa.html', 'switzerland.html', 'canada.html', 'norway.html', 'austria.html', 'pakistan.html', 'chile.html'];

const regionFiles = htmlFiles.filter(f => !countryPages.includes(f));

const regionCountryMap = {};

regionFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const slug = file.replace('.html', '');
  
  // Look for breadcrumb or text indicating country
  let detected = null;
  if (/LivePassWatch\s*›\s*India|India\s*›/i.test(content) || /passes in India/i.test(content)) detected = 'india';
  else if (/LivePassWatch\s*›\s*United States|USA\s*›|United States\s*›/i.test(content) || /passes in (the )?USA/i.test(content) || /United States Mountain Passes/i.test(content) || /Passes \(USA\)/i.test(content)) detected = 'usa';
  else if (/LivePassWatch\s*›\s*Switzerland|Switzerland\s*›/i.test(content) || /Swiss Alps|passes in Switzerland/i.test(content)) detected = 'switzerland';
  else if (/LivePassWatch\s*›\s*Austria|Austria\s*›/i.test(content) || /passes in Austria|Austrian Alps/i.test(content)) detected = 'austria';
  else if (/LivePassWatch\s*›\s*France|France\s*›/i.test(content) || /passes in France|French Alps/i.test(content)) detected = 'france';
  else if (/LivePassWatch\s*›\s*Italy|Italy\s*›/i.test(content) || /passes in Italy|Italian Alps/i.test(content)) detected = 'italy';
  else if (/LivePassWatch\s*›\s*Canada|Canada\s*›/i.test(content) || /passes in Canada|Canadian Rockies/i.test(content)) detected = 'canada';
  else if (/LivePassWatch\s*›\s*Norway|Norway\s*›/i.test(content) || /passes in Norway/i.test(content)) detected = 'norway';
  else if (/LivePassWatch\s*›\s*Pakistan|Pakistan\s*›/i.test(content) || /passes in Pakistan/i.test(content)) detected = 'pakistan';
  else if (/LivePassWatch\s*›\s*Chile|Chile\s*›/i.test(content) || /passes in Chile|Atacama|Andes/i.test(content)) detected = 'chile';
  
  regionCountryMap[slug] = detected;
});

console.log('Total region files:', regionFiles.length);
const unassigned = Object.entries(regionCountryMap).filter(([k, v]) => !v);
console.log('Unassigned:', unassigned);
console.log('Assigned summary:', Object.entries(regionCountryMap).reduce((acc, [k, v]) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {}));
