import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { passesData, getPassUrl, getCountrySlug, getStateSlug, cleanSlug } from '../src/data/passes.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

const DOMAIN = 'https://www.livepasswatch.info';

console.log('🚀 Starting LivePassWatch SSG Prerendering Engine...');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Please run vite build first.');
  process.exit(1);
}

const templatePath = path.resolve(distDir, 'index.html');
const baseTemplate = fs.readFileSync(templatePath, 'utf8');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generatePassSemanticHtml(pass, canonicalUrl) {
  return `
    <main class="pass-detail-page-container">
      <div class="pass-hero-banner" style="padding: 2rem 1rem; background: #0f172a; color: #f8fafc;">
        <div class="app-container">
          <nav aria-label="Breadcrumbs" class="breadcrumb-trail" style="font-size: 0.875rem; margin-bottom: 1rem; opacity: 0.8;">
            <a href="/" style="color: #38bdf8;">Home</a> &gt;
            <a href="/passes" style="color: #38bdf8;">Passes</a> &gt;
            <a href="/passes?country=${encodeURIComponent(pass.country)}" style="color: #38bdf8;">${escapeHtml(pass.country)}</a> &gt;
            ${pass.state ? `<a href="/passes?state=${encodeURIComponent(pass.state)}" style="color: #38bdf8;">${escapeHtml(pass.state)}</a> &gt;` : ''}
            <span>${escapeHtml(pass.name)}</span>
          </nav>
          <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <span class="status-badge status-${escapeHtml(pass.status)}" style="padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; background: ${pass.status === 'OPEN' ? '#16a34a' : pass.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">
              ${escapeHtml(pass.status)}
            </span>
            <span style="font-size: 0.875rem; opacity: 0.85;">Updated ${escapeHtml(pass.lastUpdated)}</span>
          </div>
          <h1 style="font-size: 2.25rem; font-weight: 800; margin: 0 0 0.5rem 0;">${escapeHtml(pass.name)} Road Conditions, Status & Live Webcam</h1>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 1rem 0;">
            📍 ${escapeHtml(pass.state)}, ${escapeHtml(pass.country)} • 🛣️ ${escapeHtml(pass.highway)} • ⛰️ Elevation: ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)
          </p>
          <p style="font-size: 1rem; line-height: 1.6; max-width: 900px; opacity: 0.95;">
            ${escapeHtml(pass.description)}
          </p>
        </div>
      </div>

      <div class="app-container" style="max-width: 1200px; margin: 2rem auto; padding: 0 1rem;">
        <section class="pass-status-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Current Road Status & Live Driving Conditions</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem;">ROAD CONDITION</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a;">${escapeHtml(pass.roadCondition)}</p>
            </div>
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem;">CHAIN REQUIREMENT</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a;">${escapeHtml(pass.chainRequirement || 'No traction restrictions currently active')}</p>
            </div>
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem;">WEATHER & TEMPERATURE</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a;">${pass.weather.tempF}°F (${pass.weather.tempC}°C) • ${escapeHtml(pass.weather.condition)}</p>
            </div>
            <div>
              <h3 style="font-size: 1rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem;">SNOWPACK DEPTH</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a;">${pass.snowDepth.depthIn} in (${pass.snowDepth.depthCm} cm) • ${escapeHtml(pass.snowDepth.condition)}</p>
            </div>
          </div>
        </section>

        ${pass.overview?.summary ? `
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Overview & Historical Route Details</h2>
          <p style="font-size: 1rem; line-height: 1.7; color: #334155;">${escapeHtml(pass.overview.summary)}</p>
        </section>
        ` : ''}

        ${pass.faqs && pass.faqs.length > 0 ? `
        <section class="pass-faqs-section" style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Frequently Asked Questions about ${escapeHtml(pass.name)}</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${pass.faqs.map(faq => `
              <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">${escapeHtml(faq.question)}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">${escapeHtml(faq.answer)}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0f172a;">Official Information & Highway Authority</h2>
          <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Real-time status telemetry independently verified from official highway and transport authorities including ${escapeHtml(pass.dataSources?.[0]?.name || pass.officialSource || 'Regional Department of Transportation')}. Always verify conditions before winter travel.
          </p>
        </section>
      </div>
    </main>
  `;
}

function buildHtmlPage({ title, description, canonicalUrl, ogImage, jsonLd, bodyContent, noIndex = false }) {
  let html = baseTemplate;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // 2. Remove default meta tags we want to customize
  html = html.replace(/<meta name="description" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta property="og:title" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta property="og:description" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta property="og:url" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta property="og:image" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta name="twitter:title" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta name="twitter:description" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta name="twitter:image" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<meta name="robots" content="[\s\S]*?"\s*\/?>/i, '');
  html = html.replace(/<link rel="canonical" href="[\s\S]*?"\s*\/?>/i, '');

  const absoluteOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`)
    : `${DOMAIN}/hero-bg.png`;

  const metaTags = `
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${noIndex ? 'noindex, nofollow' : 'index, follow'}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(absoluteOgImage)}" />
    <meta property="og:site_name" content="LivePassWatch" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(absoluteOgImage)}" />
    ${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
  `;

  html = html.replace('</head>', `${metaTags}\n  </head>`);

  // 3. Inject body content into #root if provided
  if (bodyContent) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  }

  return html;
}

function writeHtml(relPath, content) {
  const fullPath = path.resolve(distDir, relPath.replace(/^\//, ''));
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
}

// -------------------------------------------------------------
// 1. Prerender all 29 Pass Pages
// -------------------------------------------------------------
const canonicalPassUrls = [];
const redirectRules = [];

console.log(`\n📦 Prerendering ${passesData.length} mountain pass detail pages...`);

passesData.forEach(pass => {
  const canonicalPath = getPassUrl(pass);
  const canonicalUrl = `${DOMAIN}${canonicalPath}`;
  canonicalPassUrls.push(canonicalUrl);

  const title = `${pass.name} Road Conditions, Status & Live Webcam | LivePassWatch`;
  const description = `Real-time ${pass.name} status: current road conditions, snow depth, closures, and live webcam. Updated ${pass.lastUpdated}.`;
  const passFullImage = pass.image.startsWith('http') ? pass.image : `${DOMAIN}${pass.image.startsWith('/') ? '' : '/'}${pass.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Passes", "item": `${DOMAIN}/passes` },
          { "@type": "ListItem", "position": 3, "name": pass.country.split('/')[0].trim(), "item": `${DOMAIN}/passes?country=${encodeURIComponent(pass.country.split('/')[0].trim())}` },
          ...(pass.state ? [{ "@type": "ListItem", "position": 4, "name": pass.state.split('/')[0].trim(), "item": `${DOMAIN}/passes?state=${encodeURIComponent(pass.state.split('/')[0].trim())}` }] : []),
          { "@type": "ListItem", "position": pass.state ? 5 : 4, "name": pass.name, "item": canonicalUrl }
        ]
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "image": {
          "@type": "ImageObject",
          "url": passFullImage,
          "name": `${pass.name} Road Status`
        },
        "about": {
          "@type": "TouristAttraction",
          "name": pass.name,
          "description": pass.description,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": pass.coordinates.lat,
            "longitude": pass.coordinates.lng
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": pass.state,
            "addressCountry": pass.country
          }
        }
      },
      ...(pass.faqs && pass.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": pass.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  const bodyContent = generatePassSemanticHtml(pass, canonicalUrl);
  const html = buildHtmlPage({
    title,
    description,
    canonicalUrl,
    ogImage: pass.image,
    jsonLd,
    bodyContent
  });

  writeHtml(`${canonicalPath}/index.html`, html);
  console.log(`  ✓ Prerendered: ${canonicalPath}`);

  // Collect Legacy / Duplicate URLs for 301 Redirection
  const countrySlug = getCountrySlug(pass.country);
  const stateSlug = getStateSlug(pass.state, pass.slug);

  const duplicatePaths = new Set();
  // 1-tier flat: /passes/:slug
  duplicatePaths.add(`/passes/${pass.slug}`);
  // 2-tier: /passes/:country/:slug
  duplicatePaths.add(`/passes/${countrySlug}/${pass.slug}`);
  
  // Specific legacy variants mentioned in prompt:
  if (pass.slug === 'chang-la-pass') {
    duplicatePaths.add('/passes/india/chang-la-pass');
    duplicatePaths.add('/passes/chang-la-pass');
    duplicatePaths.add('/passes/chang-la');
  }
  if (pass.slug === 'col-du-galibier') {
    duplicatePaths.add('/passes/france/col-du-galibier');
    duplicatePaths.add('/passes/france/hautes-alpes-and-savoie/col-du-galibier');
    duplicatePaths.add('/passes/col-du-galibier');
  }
  if (pass.slug === 'trollstigen-pass') {
    duplicatePaths.add('/passes/norway/trollstigen-pass');
    duplicatePaths.add('/passes/trollstigen-pass');
    duplicatePaths.add('/passes/norway/more-og-romsdal/trollstigen-pass');
  }
  if (pass.slug === 'bernina-pass') {
    duplicatePaths.add('/passes/bernina-pass');
    duplicatePaths.add('/passes/switzerland/bernina-pass');
  }
  if (pass.slug === 'gotthard-pass') {
    duplicatePaths.add('/passes/gotthard-pass');
    duplicatePaths.add('/passes/switzerland/gotthard-pass');
  }
  if (pass.slug === 'grimsel-pass') {
    duplicatePaths.add('/passes/grimsel-pass');
    duplicatePaths.add('/passes/switzerland/grimsel-pass');
  }
  if (pass.slug === 'great-st-bernard-pass') {
    duplicatePaths.add('/passes/great-st-bernard-pass');
    duplicatePaths.add('/passes/switzerland/great-st-bernard-pass');
  }
  if (pass.slug === 'north-cascades-pass') {
    duplicatePaths.add('/passes/north-cascades-pass');
    duplicatePaths.add('/passes/united-states/north-cascades-pass');
  }
  if (pass.slug === 'sherman-pass') {
    duplicatePaths.add('/passes/sherman-pass');
    duplicatePaths.add('/passes/united-states/sherman-pass');
  }

  duplicatePaths.forEach(dupPath => {
    if (dupPath !== canonicalPath) {
      redirectRules.push({ from: dupPath, to: canonicalPath });
      
      // Generate 301 Redirect HTML file
      const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=${canonicalPath}">
  <link rel="canonical" href="${canonicalUrl}">
  <title>Redirecting to ${escapeHtml(pass.name)}...</title>
  <script>window.location.replace("${canonicalPath}");</script>
</head>
<body>
  <p>Redirecting to <a href="${canonicalPath}">${escapeHtml(pass.name)} Road Status</a>...</p>
</body>
</html>`;
      writeHtml(`${dupPath}/index.html`, redirectHtml);
    }
  });
});

// -------------------------------------------------------------
// 2. Prerender Core Static Pages
// -------------------------------------------------------------
console.log('\n📄 Prerendering core static pages...');

const staticPages = [
  {
    path: '/',
    title: 'LIVEPASSWATCH | Real-Time Mountain Pass Status, Road Conditions & Alerts',
    description: 'Check real-time mountain pass status, live webcams, snow depth, road conditions, and closures worldwide. Know before you go with LivePassWatch.',
    canonicalUrl: `${DOMAIN}/`,
    bodyContent: null // Homepage already handled by template with #root
  },
  {
    path: '/passes',
    title: 'Mountain Pass Directory & Live Status | LivePassWatch',
    description: 'Browse global mountain pass road conditions, live weather, webcams, and chain laws across the US, Swiss Alps, Himalayas, and worldwide.',
    canonicalUrl: `${DOMAIN}/passes`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Mountain Passes Directory & Live Status</h1>
      <p style="color: #64748b; margin-bottom: 2rem;">Real-time road conditions, closures, and webcams for ${passesData.length} mountain passes worldwide.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
        ${passesData.map(p => `
          <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background: white;">
            <h2 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 0.25rem;">
              <a href="${getPassUrl(p)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(p.name)}</a>
            </h2>
            <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">${escapeHtml(p.state)}, ${escapeHtml(p.country)}</p>
            <span style="display: inline-block; padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: ${p.status === 'OPEN' ? '#16a34a' : p.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">${escapeHtml(p.status)}</span>
          </div>
        `).join('')}
      </div>
    </main>`
  },
  {
    path: '/map',
    title: 'Live Mountain Pass Map & Status Pins | LivePassWatch',
    description: 'Explore interactive global mountain pass maps with real-time open/closed status pins, weather alerts, and highway conditions.',
    canonicalUrl: `${DOMAIN}/map`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Interactive Mountain Pass Map & Overview</h1>
      <p style="color: #64748b;">Explore live mountain pass status across North America, Europe, the Himalayas, Andes, and Southern Alps.</p>
    </main>`
  },
  {
    path: '/alerts',
    title: 'Mountain Pass Closures & Active Road Alerts | LivePassWatch',
    description: 'Stay informed with real-time mountain pass road closures, severe winter weather warnings, chain requirements, and avalanche advisories.',
    canonicalUrl: `${DOMAIN}/alerts`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Mountain Pass Alerts, Closures & Travel Advisories</h1>
      <p style="color: #64748b;">Real-time mountain pass alerts, road closures, winter weather warnings, and highway clearance reports worldwide.</p>
    </main>`
  },
  {
    path: '/resources',
    title: 'Mountain Driving Resources & Chain Laws | LivePassWatch',
    description: 'Essential mountain driving guides, state tire chain requirements, winter vehicle safety checklists, and official DOT road condition links.',
    canonicalUrl: `${DOMAIN}/resources`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Mountain Pass Travel Resources & Safety Guides</h1>
      <p style="color: #64748b;">Comprehensive mountain travel resources: winter driving guides, state chain laws, emergency contacts, and checklists.</p>
    </main>`
  },
  {
    path: '/about',
    title: 'About LivePassWatch - Real-Time Mountain Pass Tracking',
    description: 'Learn about LivePassWatch mission to provide real-time road conditions, weather data, and live webcam monitoring for mountain passes worldwide.',
    canonicalUrl: `${DOMAIN}/about`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem; max-width: 800px;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">About LIVEPASSWATCH</h1>
      <p style="line-height: 1.7; color: #334155;">LIVEPASSWATCH is the premier real-time mountain pass tracking platform. Our mission: Know Before You Go.</p>
    </main>`
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | LivePassWatch',
    description: 'LivePassWatch privacy policy: how we handle user data, local storage preferences, and website analytics.',
    canonicalUrl: `${DOMAIN}/privacy`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem; max-width: 800px;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Privacy Policy</h1>
      <p style="line-height: 1.7; color: #334155;">At LivePassWatch, we respect your privacy. We do not sell your personal information.</p>
    </main>`
  },
  {
    path: '/terms',
    title: 'Terms of Service | LivePassWatch',
    description: 'Terms and conditions for using LivePassWatch mountain pass status and road condition tracking services.',
    canonicalUrl: `${DOMAIN}/terms`,
    bodyContent: `<main class="app-container" style="padding: 2rem 1rem; max-width: 800px;">
      <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Terms & Safety Disclaimer</h1>
      <p style="line-height: 1.7; color: #334155;">Mountain weather and alpine road conditions can change unpredictably in minutes. Always verify official DOT advisories.</p>
    </main>`
  }
];

staticPages.forEach(p => {
  const html = buildHtmlPage(p);
  const outPath = p.path === '/' ? 'index.html' : `${p.path}/index.html`;
  writeHtml(outPath, html);
  console.log(`  ✓ Prerendered: ${p.path}`);
});

// -------------------------------------------------------------
// 3. Regenerate sitemap.xml with 0 duplicates and only canonical URLs
// -------------------------------------------------------------
console.log('\n🗺️  Regenerating sitemap.xml with canonical URLs...');

const todayDate = new Date().toISOString().split('T')[0];

const coreSitemapUrls = [
  'https://www.livepasswatch.info/',
  'https://www.livepasswatch.info/passes',
  'https://www.livepasswatch.info/map',
  'https://www.livepasswatch.info/alerts',
  'https://www.livepasswatch.info/resources',
  'https://www.livepasswatch.info/about',
  'https://www.livepasswatch.info/privacy',
  'https://www.livepasswatch.info/terms'
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Static & Functional Pages -->
${coreSitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === 'https://www.livepasswatch.info/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}

  <!-- Canonical Mountain Pass Detail Pages (${passesData.length} passes) -->
${canonicalPassUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`  ✓ Generated sitemap.xml (${coreSitemapUrls.length + canonicalPassUrls.length} total canonical URLs)`);

// -------------------------------------------------------------
// 4. Update _redirects and vercel.json
// -------------------------------------------------------------
console.log('\n🔀 Generating 301 Redirect Mappings (_redirects & vercel.json)...');

// Deduplicate redirect rules
const uniqueRedirects = new Map();
redirectRules.forEach(r => {
  if (!uniqueRedirects.has(r.from)) {
    uniqueRedirects.set(r.from, r.to);
  }
});

let redirectsContent = '# 301 Permanent Redirects for Canonical Pass URLs\n';
uniqueRedirects.forEach((to, from) => {
  redirectsContent += `${from} ${to} 301\n`;
});
redirectsContent += '\n# SPA Fallback for Dynamic Routes\n/* /index.html 200\n';

fs.writeFileSync(path.resolve(publicDir, '_redirects'), redirectsContent, 'utf8');
fs.writeFileSync(path.resolve(distDir, '_redirects'), redirectsContent, 'utf8');
console.log(`  ✓ Generated _redirects with ${uniqueRedirects.size} 301 redirect rules`);

// Update vercel.json
const vercelJson = {
  "redirects": Array.from(uniqueRedirects.entries()).map(([source, destination]) => ({
    "source": source,
    "destination": destination,
    "permanent": true
  })),
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
};
fs.writeFileSync(path.resolve(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2), 'utf8');
console.log(`  ✓ Updated vercel.json with 301 redirects`);

console.log('\n✨ LivePassWatch SSG Prerendering Complete!\n');
