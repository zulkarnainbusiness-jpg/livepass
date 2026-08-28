import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { passesData, getPassUrl, getCountrySlug, getStateSlug, cleanSlug } from '../src/data/passes.ts';
import { passSeoDetails } from '../src/data/passSeoData.ts';

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

// -------------------------------------------------------------
// 1. Generate Semantic HTML for Pass Detail Pages
// -------------------------------------------------------------
function generatePassSemanticHtml(pass, canonicalUrl) {
  const seoDetails = passSeoDetails[pass.slug] || passSeoDetails[pass.id];
  const relatedPasses = (pass.nearbyPasses && pass.nearbyPasses.length > 0)
    ? pass.nearbyPasses.slice(0, 3)
    : passesData.filter(p => p.id !== pass.id && (p.state === pass.state || p.country === pass.country || p.continent === pass.continent)).slice(0, 3);

  const nearbyHtml = `
    <section class="pass-nearby-section" style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Nearby Mountain Passes &amp; Alternative Routes</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem;">
        ${relatedPasses.map(np => {
          const targetPass = passesData.find(p => p.id === np.id || p.slug === np.slug) || np;
          const targetUrl = getPassUrl(targetPass);
          return `
          <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background: #f8fafc;">
            <h3 style="font-size: 1.05rem; font-weight: 600; margin-bottom: 0.25rem;">
              <a href="${targetUrl}" style="color: #1d4ed8; text-decoration: none;">${escapeHtml(np.name)} (${np.elevationFt?.toLocaleString?.() || np.elevationFt || ''} ft)</a>
            </h3>
            <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 0.5rem 0;">📍 ${escapeHtml(np.state || '')}, ${escapeHtml(np.country || '')} • 🛣️ ${escapeHtml(np.highway || '')}</p>
            <span style="display: inline-block; padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: ${np.status === 'OPEN' ? '#16a34a' : np.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">
              ${escapeHtml(np.status)}
            </span>
          </div>`;
        }).join('')}
        <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; background: #f8fafc;">
          <h3 style="font-size: 1.05rem; font-weight: 600; margin-bottom: 0.25rem;">
            <a href="/map" style="color: #1d4ed8; text-decoration: none;">Interactive Pass Map</a>
          </h3>
          <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 0.5rem 0;">View global mountain passes with live status markers and satellite terrain.</p>
          <a href="/map" style="font-size: 0.85rem; color: #1d4ed8; font-weight: 600; text-decoration: none;">Open Map &rarr;</a>
        </div>
      </div>
    </section>
  `;

  return `
    <main class="pass-detail-page-container">
      <div class="pass-hero-banner" style="padding: 2.5rem 1rem; background: #0f172a; color: #f8fafc;">
        <div class="app-container" style="max-width: 1200px; margin: 0 auto;">
          <nav aria-label="Breadcrumbs" class="breadcrumb-trail" style="font-size: 0.875rem; margin-bottom: 1rem; opacity: 0.85;">
            <a href="/" style="color: #38bdf8; text-decoration: none;">Home</a> &gt;
            <a href="/passes" style="color: #38bdf8; text-decoration: none;">Passes</a> &gt;
            <a href="/passes?country=${encodeURIComponent(pass.country)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(pass.country)}</a> &gt;
            ${pass.state ? `<a href="/passes?state=${encodeURIComponent(pass.state)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(pass.state)}</a> &gt;` : ''}
            <span>${escapeHtml(pass.name)}</span>
          </nav>
          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <span class="status-badge status-${escapeHtml(pass.status)}" style="padding: 0.35rem 0.75rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; background: ${pass.status === 'OPEN' ? '#16a34a' : pass.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">
              ${escapeHtml(pass.status)}
            </span>
            <span style="display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.75rem; border-radius: 9999px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; font-size: 0.875rem; font-weight: 600;">
              ⏱️ Last updated: ${escapeHtml(pass.lastUpdated)}
            </span>
            <span style="font-size: 0.875rem; opacity: 0.85;">⛰️ Summit: ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)</span>
          </div>
          <h1 style="font-size: 2.25rem; font-weight: 800; margin: 0 0 0.5rem 0; line-height: 1.2;">${escapeHtml(pass.name)} Live Webcam &amp; Road Conditions</h1>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 1rem 0;">
            📍 ${escapeHtml(pass.state ? `${pass.state}, ` : '')}${escapeHtml(pass.country)} • 🛣️ ${escapeHtml(pass.highway)} • ⛰️ Elevation: ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)
          </p>
          <p style="font-size: 1rem; line-height: 1.6; max-width: 900px; opacity: 0.95;">
            ${escapeHtml(pass.description)}
          </p>
        </div>
      </div>

      <div class="app-container" style="max-width: 1200px; margin: 2rem auto; padding: 0 1rem;">
        <section class="pass-status-card" style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Current Road Status &amp; Live Driving Conditions</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
            <div>
              <h3 style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem; text-transform: uppercase;">Road Condition</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0;">${escapeHtml(pass.roadCondition)}</p>
            </div>
            <div>
              <h3 style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem; text-transform: uppercase;">Chain Requirement</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0;">${escapeHtml(pass.chainRequirement || 'No traction restrictions currently active')}</p>
            </div>
            <div>
              <h3 style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem; text-transform: uppercase;">Weather &amp; Temperature</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0;">${pass.weather.tempF}°F (${pass.weather.tempC}°C) • ${escapeHtml(pass.weather.condition)}</p>
            </div>
            <div>
              <h3 style="font-size: 0.875rem; font-weight: 600; color: #64748b; margin-bottom: 0.25rem; text-transform: uppercase;">Snowpack Depth</h3>
              <p style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin: 0;">${pass.snowDepth.depthIn} in (${pass.snowDepth.depthCm} cm) • ${escapeHtml(pass.snowDepth.condition)}</p>
            </div>
          </div>
        </section>

        <!-- Nearest Towns & Driving Distances -->
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Nearest Towns &amp; Driving Distances</h2>
          <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: #475569;">
            Gateway cities, supply hubs, and approximate driving distances from the summit of <strong>${escapeHtml(pass.name)}</strong>:
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${(seoDetails?.nearestTowns || []).map(t => `
              <div style="padding: 0.85rem 1rem; border-radius: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0;">
                <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a; margin-bottom: 0.25rem;">${escapeHtml(t.name)}</div>
                <div style="font-size: 0.9rem; color: #1d4ed8; font-weight: 600;">${escapeHtml(t.distance)}</div>
                <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">${escapeHtml(t.direction)}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Seasonal Closure Schedule -->
        <section style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #0f172a;">Seasonal Closure Schedule &amp; Typical Dates</h2>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: #d97706;">
            📅 ${escapeHtml(seoDetails?.seasonalClosureWindow || pass.seasonalClosureInfo?.typicalClosure || (pass.isSeasonal ? 'Winter Seasonal Closure' : 'Open Year-Round (Subject to winter storms)'))}
          </h3>
          <p style="font-size: 0.95rem; line-height: 1.65; color: #475569; margin: 0;">
            ${escapeHtml(seoDetails?.seasonalClosureDetail || pass.seasonalClosureInfo?.description || 'Maintained with regular winter plowing and anti-icing operations by regional highway crews. Temporary short-duration closures may occur during active blizzards and avalanche clearance operations.')}
          </p>
        </section>

        <!-- About This Pass (100-150 Words Unique Narrative) -->
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">
            ${pass.slug === 'paso-los-libertadores' ? 'About Paso Los Libertadores (Paso Cristo Redentor)' : `About ${escapeHtml(pass.name)}`}
          </h2>
          <p style="font-size: 1rem; line-height: 1.8; color: #334155; margin-bottom: 1rem;">
            ${escapeHtml(seoDetails?.aboutPass || pass.overview?.summary || pass.description)}
          </p>
          <p style="font-size: 0.95rem; line-height: 1.7; color: #64748b; margin-bottom: 1.25rem;">
            <strong>${escapeHtml(pass.name)}</strong> reaches an official summit elevation of <strong>${pass.elevationFt.toLocaleString()} feet (${pass.elevationM.toLocaleString()} meters)</strong> above sea level on <strong>${escapeHtml(pass.highway)}</strong> in ${escapeHtml(pass.state ? `${pass.state}, ` : '')}${escapeHtml(pass.country)}.
          </p>
          ${pass.narrativeSections ? pass.narrativeSections.map(sec => `
            <div style="margin-top: 1rem; margin-bottom: 1rem;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-bottom: 0.35rem;">${escapeHtml(sec.title)}</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: #334155; margin: 0;">${escapeHtml(sec.content)}</p>
            </div>
          `).join('') : ''}
          <div style="padding: 1rem 1.25rem; border-radius: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #1d4ed8; margin-top: 1.25rem;">
            <p style="margin: 0; font-size: 0.925rem; line-height: 1.6; color: #475569;">
              <strong>International Alpine Transit:</strong> ${escapeHtml(seoDetails?.crossLinkText || 'Explore high-altitude mountain highway conditions on the')}&nbsp;<a href="${seoDetails?.crossLinkUrl || '/passes/argentina-chile/valparaiso-mendoza/paso-los-libertadores'}" style="color: #1d4ed8; font-weight: 600; text-decoration: underline;">${escapeHtml(seoDetails?.crossLinkAnchor || 'Paso Los Libertadores (Andes Mountain Pass)')}</a>.
            </p>
          </div>
        </section>

        ${(pass.cameras && pass.cameras.length > 0) ? `
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Live Highway Webcams &amp; Traffic Cameras</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${pass.cameras.map(c => `
              <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; background: #f8fafc;">
                <img src="${c.image}" alt="${escapeHtml(c.title)}" style="width: 100%; height: 180px; object-fit: cover; display: block;" loading="lazy" />
                <div style="padding: 0.75rem;">
                  <h3 style="font-size: 0.95rem; font-weight: 600; margin: 0 0 0.25rem 0; color: #0f172a;">${escapeHtml(c.title)}</h3>
                  <p style="font-size: 0.8rem; color: #64748b; margin: 0;">${escapeHtml(c.direction || c.location || 'Summit Camera')}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
        ` : `
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: #0f172a;">Webcam &amp; Live Camera Advisory</h2>
          <div style="padding: 1.25rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem;">
            <p style="font-size: 1rem; color: #0f172a; margin: 0 0 0.5rem 0; font-weight: 600;">
              No verified public live camera feed is currently operated on ${escapeHtml(pass.name)}.
            </p>
            <p style="font-size: 0.925rem; color: #475569; margin: 0 0 0.75rem 0; line-height: 1.6;">
              Road conditions are verified and cross-checked directly from official highway transport authorities (including ${escapeHtml(pass.dataSources?.[0]?.name || 'Regional Road Maintenance Authority')}). Check our <a href="/methodology" style="color: #1d4ed8; text-decoration: underline; font-weight: 600;">Multi-Source Verification Methodology</a> to learn how real-time reports are corroborated.
            </p>
          </div>
        </section>
        `}

        ${nearbyHtml}

        ${pass.faqs && pass.faqs.length > 0 ? `
        <section class="pass-faqs-section" style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #0f172a;">Frequently Asked Questions about ${escapeHtml(pass.name)}</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${pass.faqs.map(faq => `
              <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">${escapeHtml(faq.question)}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0;">${escapeHtml(faq.answer)}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0f172a;">Official Highway Authority &amp; DOT Verification</h2>
          <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">
            Real-time telemetry independently verified from official highway and transportation departments including ${escapeHtml(pass.dataSources?.[0]?.name || pass.officialSource || 'Regional Department of Transportation')}. Always verify official DOT alerts before mountain driving.
          </p>
        </section>
      </div>
    </main>
  `;
}

// -------------------------------------------------------------
// 2. Generate Semantic HTML for Homepage
// -------------------------------------------------------------
function generateHomeSemanticHtml() {
  const openPasses = passesData.filter(p => p.status === 'OPEN').length;
  const cautionPasses = passesData.filter(p => p.status === 'CAUTION').length;
  const closedPasses = passesData.filter(p => p.status === 'CLOSED').length;
  const monitoredCount = passesData.length;

  const popularPasses = passesData.slice(0, 8);

  // Group passes by country & state
  const regions = [
    {
      country: 'United States',
      flag: '🇺🇸',
      states: [
        {
          name: 'Washington',
          passes: passesData.filter(p => p.country === 'United States' && p.state === 'Washington')
        },
        {
          name: 'California',
          passes: passesData.filter(p => p.country === 'United States' && p.state === 'California')
        },
        {
          name: 'Colorado',
          passes: passesData.filter(p => p.country === 'United States' && p.state === 'Colorado')
        },
        {
          name: 'Oregon',
          passes: passesData.filter(p => p.country === 'United States' && p.state === 'Oregon')
        }
      ]
    },
    {
      country: 'India',
      flag: '🇮🇳',
      states: [
        {
          name: 'Ladakh, Jammu & Kashmir, Himachal Pradesh, Sikkim',
          passes: passesData.filter(p => p.country === 'India')
        }
      ]
    },
    {
      country: 'International Corridors',
      flag: '🌐',
      states: [
        {
          name: 'Pakistan, Switzerland, Italy, Andes & Southern Alps',
          passes: passesData.filter(p => p.country !== 'United States' && p.country !== 'India')
        }
      ]
    }
  ];

  return `
    <main class="home-page-container">
      <!-- Hero Section -->
      <section class="home-hero-section" style="padding: 3rem 1rem; background: linear-gradient(180deg, #050e1c 0%, #0a192f 100%); color: #ffffff; text-align: center;">
        <div class="app-container" style="max-width: 1100px; margin: 0 auto;">
          <h1 style="font-size: 2.5rem; font-weight: 800; margin: 0 0 1rem 0; line-height: 1.2;">Real-time Mountain Pass Status</h1>
          <p style="font-size: 1.125rem; color: #cbd5e1; max-width: 700px; margin: 0 auto 2rem auto; line-height: 1.6;">
            Check live mountain pass road conditions, real-time closures, highway webcams, snow depth, and traction tire restrictions across major mountain corridors worldwide.
          </p>

          <!-- 4 Live Stats Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 800px; margin: 0 auto;">
            <a href="/passes?status=OPEN" style="display: block; text-decoration: none; background: rgba(19, 30, 50, 0.85); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 0.5rem; padding: 1rem; color: white;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #10b981;">${openPasses}</div>
              <div style="font-size: 0.875rem; color: #94a3b8;">Open Passes</div>
            </a>
            <a href="/passes?status=CAUTION" style="display: block; text-decoration: none; background: rgba(19, 30, 50, 0.85); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 0.5rem; padding: 1rem; color: white;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #f59e0b;">${cautionPasses}</div>
              <div style="font-size: 0.875rem; color: #94a3b8;">Caution Passes</div>
            </a>
            <a href="/passes?status=CLOSED" style="display: block; text-decoration: none; background: rgba(19, 30, 50, 0.85); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 0.5rem; padding: 1rem; color: white;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #ef4444;">${closedPasses}</div>
              <div style="font-size: 0.875rem; color: #94a3b8;">Closed Passes</div>
            </a>
            <a href="/map" style="display: block; text-decoration: none; background: rgba(19, 30, 50, 0.85); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 0.5rem; padding: 1rem; color: white;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #38bdf8;">${monitoredCount}</div>
              <div style="font-size: 0.875rem; color: #94a3b8;">Monitored Passes</div>
            </a>
          </div>
        </div>
      </section>

      <div class="app-container" style="max-width: 1200px; margin: 2.5rem auto; padding: 0 1rem;">
        <!-- Popular Passes Section -->
        <section style="margin-bottom: 3rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.75rem; font-weight: 800; color: #0f172a; margin: 0;">Popular Mountain Passes &amp; Live Road Conditions</h2>
            <a href="/passes" style="color: #1d64f2; font-weight: 600; text-decoration: none;">View all passes &rarr;</a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;">
            ${popularPasses.map(p => `
              <a href="${getPassUrl(p)}" style="display: flex; flex-direction: column; text-decoration: none; color: inherit; background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <img src="${p.image}" alt="${escapeHtml(p.name)} road status" style="width: 100%; height: 160px; object-fit: cover;" loading="lazy" />
                <div style="padding: 1rem; display: flex; flex-direction: column; flex: 1;">
                  <h3 style="font-size: 1.125rem; font-weight: 700; margin: 0 0 0.25rem 0; color: #0f172a;">${escapeHtml(p.name)}</h3>
                  <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 0.75rem 0;">${escapeHtml(p.state)}, ${escapeHtml(p.country)} • ${escapeHtml(p.highway)}</p>
                  <div style="margin-top: auto;">
                    <span style="display: inline-block; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: ${p.status === 'OPEN' ? '#16a34a' : p.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">
                      ${escapeHtml(p.status)}
                    </span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <!-- Global Mountain Pass Directory by Region -->
        <section style="margin-bottom: 3rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 2rem;">
          <h2 style="font-size: 1.75rem; font-weight: 800; color: #0f172a; margin-bottom: 1.5rem;">Mountain Pass Highway Directory by Region</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            ${regions.map(r => `
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
                  ${r.flag} ${escapeHtml(r.country)}
                </h3>
                ${r.states.map(s => `
                  <div style="margin-bottom: 1rem;">
                    <h4 style="font-size: 0.95rem; font-weight: 600; color: #64748b; margin: 0 0 0.5rem 0;">${escapeHtml(s.name)}</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem;">
                      ${s.passes.map(p => `
                        <li>
                          <a href="${getPassUrl(p)}" style="color: #1d4ed8; text-decoration: none; font-size: 0.925rem; font-weight: 500;">
                            ${escapeHtml(p.name)} (${escapeHtml(p.highway)})
                          </a>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Driver Resources & Emergency Tools -->
        <section style="margin-bottom: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #0f172a;">
              <a href="/map" style="color: inherit; text-decoration: none;">Interactive Pass Map &rarr;</a>
            </h2>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
              Explore live mountain pass status markers, elevation profiles, and highway corridors on our interactive global map.
            </p>
            <a href="/map" style="color: #1d64f2; font-weight: 600; text-decoration: none;">Open Global Map &rarr;</a>
          </div>

          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #0f172a;">
              <a href="/alerts" style="color: inherit; text-decoration: none;">Pass Closures &amp; Road Alerts &rarr;</a>
            </h2>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
              Real-time mountain highway closures, severe winter weather warnings, chain laws, and avalanche advisories.
            </p>
            <a href="/alerts" style="color: #1d64f2; font-weight: 600; text-decoration: none;">View Active Alerts &rarr;</a>
          </div>

          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #0f172a;">
              <a href="/resources" style="color: inherit; text-decoration: none;">Chain Laws &amp; Safety Guides &rarr;</a>
            </h2>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
              State-by-state tire chain requirements, winter vehicle safety checklists, and official DOT emergency contacts.
            </p>
            <a href="/resources" style="color: #1d64f2; font-weight: 600; text-decoration: none;">Read Driver Guides &rarr;</a>
          </div>
        </section>

        <!-- Homepage FAQs Section -->
        <section style="background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 2rem; margin-bottom: 2rem;">
          <h2 style="font-size: 1.75rem; font-weight: 800; color: #0f172a; margin-bottom: 1.5rem;">Frequently Asked Questions About Mountain Passes</h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
              <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">How often are mountain pass road conditions updated on LivePassWatch?</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0;">
                LivePassWatch aggregates data continuously from regional Departments of Transportation (e.g., WSDOT, Caltrans, CDOT, ODOT), state highway patrols, and alpine meteorological stations every 5 to 15 minutes.
              </p>
            </div>
            <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
              <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">What is the difference between OPEN, CAUTION, and CLOSED pass status?</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0;">
                <strong>OPEN</strong> indicates regular highway traffic with normal mountain driving conditions. <strong>CAUTION</strong> means the pass is open but restrictions apply (traction tires required, snow chains enforced, or reduced speed limits). <strong>CLOSED</strong> indicates the corridor is temporarily or seasonally shut to traffic.
              </p>
            </div>
            <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
              <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">What are traction tire and tire chain laws in the mountains?</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0;">
                During winter snowstorms, transportation departments enforce mandatory traction tire or snow chain requirements. Vehicles must carry approved chains or have M+S/3PMSF winter-rated tires with AWD/4WD. Check our <a href="/resources" style="color: #1d4ed8;">Resources &amp; Chain Laws guide</a> for state-specific rules.
              </p>
            </div>
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem;">How can I submit a live road condition report?</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #475569; margin: 0;">
                Travelers and drivers can share first-hand observations, road delay updates, and snowpack conditions directly through our <a href="/submit-report" style="color: #1d4ed8;">Community Road Report page</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  `;
}

// Clean pristine template without any residual meta tags or JSON-LD
let cleanBaseTemplate = baseTemplate
  .replace(/<title>[\s\S]*?<\/title>/gi, '')
  .replace(/<meta name="description"[\s\S]*?>/gi, '')
  .replace(/<meta name="keywords"[\s\S]*?>/gi, '')
  .replace(/<meta name="robots"[\s\S]*?>/gi, '')
  .replace(/<meta property="og:[\s\S]*?>/gi, '')
  .replace(/<meta name="twitter:[\s\S]*?>/gi, '')
  .replace(/<link rel="canonical"[\s\S]*?>/gi, '')
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

// -------------------------------------------------------------
// 3. Build Full HTML Page
// -------------------------------------------------------------
function buildHtmlPage({ title, description, canonicalUrl, ogImage, jsonLd, bodyContent, noIndex = false }) {
  const absoluteOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`)
    : `${DOMAIN}/hero-bg.png`;

  const headElements = `
    <title>${escapeHtml(title)}</title>
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

  let html = cleanBaseTemplate.replace('</head>', `${headElements}\n  </head>`);

  // Inject body content into #root if provided
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
// 4. Prerender Mountain Pass Pages (24 Passes)
// -------------------------------------------------------------
const canonicalPassUrls = [];
const redirectRules = [];

console.log(`\n📦 Prerendering ${passesData.length} mountain pass detail pages...`);

passesData.forEach(pass => {
  const canonicalPath = getPassUrl(pass);
  const canonicalUrl = `${DOMAIN}${canonicalPath}`;
  canonicalPassUrls.push(canonicalUrl);

  const title = `${pass.name} Live Webcam & Open/Closed Status – Updated Today`;
  const description = `Live ${pass.name} webcam feeds, highway conditions, and real-time open/closed status on ${pass.highway}, ${pass.state ? `${pass.state}, ` : ''}${pass.country}. Verified and updated ${pass.lastUpdated}.`;
  const passFullImage = pass.image.startsWith('http') ? pass.image : `${DOMAIN}${pass.image.startsWith('/') ? '' : '/'}${pass.image}`;

  const allFaqs = [
    {
      question: `Is ${pass.name} open today?`,
      answer: `${pass.name} is currently ${pass.status} (${pass.statusDetail || 'open to all vehicles'}) on ${pass.highway}, ${pass.state ? `${pass.state}, ` : ''}${pass.country}. Status verified by official transportation departments. Last updated: ${pass.lastUpdated}.`
    },
    {
      question: `Does ${pass.name} have a live webcam?`,
      answer: `Yes, ${pass.name} features live summit webcams, highway camera feeds, and real-time road condition views directly on LivePassWatch.`
    },
    ...(pass.faqs || [])
  ];

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
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
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
  
  if (pass.slug === 'north-cascades-pass') {
    duplicatePaths.add('/passes/north-cascades-pass');
    duplicatePaths.add('/passes/united-states/north-cascades-pass');
  }
  if (pass.slug === 'sherman-pass') {
    duplicatePaths.add('/passes/sherman-pass');
    duplicatePaths.add('/passes/united-states/sherman-pass');
  }
  if (pass.slug === 'chang-la-pass') {
    duplicatePaths.add('/passes/chang-la');
    duplicatePaths.add('/passes/chang-la-pass');
    duplicatePaths.add('/passes/india/chang-la');
    duplicatePaths.add('/passes/india/ladakh/chang-la');
    duplicatePaths.add('/passes/india/chang-la-pass');
  }
  if (pass.slug === 'trollstigen-pass') {
    duplicatePaths.add('/passes/trollstigen');
    duplicatePaths.add('/passes/trollstigen-pass');
    duplicatePaths.add('/passes/norway/trollstigen');
    duplicatePaths.add('/passes/norway/trollstigen-pass');
    duplicatePaths.add('/passes/norway/more-og-romsdal/trollstigen');
  }

  duplicatePaths.forEach(dupPath => {
    if (dupPath !== canonicalPath) {
      redirectRules.push({ from: dupPath, to: canonicalPath });
      
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
// 5. Prerender Core Static Pages (Including Rich Homepage)
// -------------------------------------------------------------
console.log('\n📄 Prerendering core static pages...');

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": `${DOMAIN}/`,
      "name": "LivePassWatch",
      "description": "Real-time mountain pass conditions, live highway webcams, snow depth, and road status worldwide.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${DOMAIN}/passes?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "LivePassWatch",
      "url": `${DOMAIN}/`,
      "logo": `${DOMAIN}/mountain-logo.svg`,
      "sameAs": []
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often are mountain pass road conditions updated on LivePassWatch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LivePassWatch aggregates data continuously from regional Departments of Transportation (e.g., WSDOT, Caltrans, CDOT, ODOT), state highway patrols, and alpine meteorological stations every 5 to 15 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between OPEN, CAUTION, and CLOSED pass status?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OPEN indicates regular highway traffic with normal mountain driving conditions. CAUTION means the pass is open but restrictions apply (traction tires required, snow chains enforced, or reduced speed limits). CLOSED indicates the corridor is temporarily or seasonally shut to traffic."
          }
        },
        {
          "@type": "Question",
          "name": "What are traction tire and tire chain laws in the mountains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During winter snowstorms, transportation departments enforce mandatory traction tire or snow chain requirements. Vehicles must carry approved chains or have M+S/3PMSF winter-rated tires with AWD/4WD."
          }
        },
        {
          "@type": "Question",
          "name": "How can I submit a live road condition report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Travelers and drivers can share first-hand observations, road delay updates, and snowpack conditions directly through our Community Road Report page at /submit-report."
          }
        }
      ]
    }
  ]
};

const staticPages = [
  {
    path: '/',
    title: 'Live Mountain Pass Status, Road Conditions & Webcams | LivePassWatch',
    description: 'Check real-time mountain pass status, live webcams, snow depth, road conditions, and closures worldwide. Know before you go with LivePassWatch.',
    canonicalUrl: `${DOMAIN}/`,
    jsonLd: homepageJsonLd,
    bodyContent: generateHomeSemanticHtml()
  },
  {
    path: '/passes',
    title: 'Mountain Pass Directory & Live Status | LivePassWatch',
    description: 'Browse global mountain pass road conditions, live weather, webcams, and chain laws across the US, Swiss Alps, Himalayas, and worldwide.',
    canonicalUrl: `${DOMAIN}/passes`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; color: #0f172a;">Mountain Passes Directory &amp; Live Status</h1>
      <p style="color: #64748b; margin-bottom: 2rem; font-size: 1.1rem;">Real-time road conditions, closures, and webcams for ${passesData.length} mountain passes worldwide.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
        ${passesData.map(p => `
          <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.35rem;">
              <a href="${getPassUrl(p)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(p.name)}</a>
            </h2>
            <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.75rem;">📍 ${escapeHtml(p.state)}, ${escapeHtml(p.country)} • 🛣️ ${escapeHtml(p.highway)}</p>
            <span style="display: inline-block; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; background: ${p.status === 'OPEN' ? '#16a34a' : p.status === 'CLOSED' ? '#dc2626' : '#d97706'}; color: white;">${escapeHtml(p.status)}</span>
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
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; color: #0f172a;">Interactive Mountain Pass Map &amp; Overview</h1>
      <p style="color: #64748b; font-size: 1.1rem; line-height: 1.6;">
        Explore live mountain pass status across North America, Europe, the Himalayas, Andes, and Southern Alps with interactive highway pins and road condition overlays.
      </p>
      <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="/passes" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">Browse Passes Directory &rarr;</a>
        <a href="/alerts" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">View Active Alerts &rarr;</a>
      </div>
    </main>`
  },
  {
    path: '/alerts',
    title: 'Mountain Pass Closures & Active Road Alerts | LivePassWatch',
    description: 'Stay informed with real-time mountain pass road closures, severe winter weather warnings, chain requirements, and avalanche advisories.',
    canonicalUrl: `${DOMAIN}/alerts`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; color: #0f172a;">Mountain Pass Alerts, Closures &amp; Travel Advisories</h1>
      <p style="color: #64748b; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">
        Real-time mountain pass road closures, winter storm warnings, avalanche advisories, and emergency travel restrictions.
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="/passes" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">View Mountain Passes &rarr;</a>
        <a href="/resources" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">State Chain Laws &rarr;</a>
      </div>
    </main>`
  },
  {
    path: '/resources',
    title: 'Mountain Driving Resources & Chain Laws | LivePassWatch',
    description: 'Essential mountain driving guides, state tire chain requirements, winter vehicle safety checklists, and official DOT road condition links.',
    canonicalUrl: `${DOMAIN}/resources`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem; color: #0f172a;">Mountain Pass Travel Resources &amp; Safety Guides</h1>
      <p style="color: #64748b; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">
        Comprehensive mountain travel resources: winter driving guides, state tire chain laws, vehicle emergency checklists, and official DOT emergency links.
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="/passes" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">View All Mountain Passes &rarr;</a>
        <a href="/alerts" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">Check Active Alerts &rarr;</a>
      </div>
    </main>`
  },
  {
    path: '/submit-report',
    title: 'Submit Mountain Pass Road Report | LivePassWatch Community',
    description: 'Share live mountain pass road conditions, snowpack observations, chain restrictions, and travel delays directly with the LivePassWatch research team.',
    canonicalUrl: `${DOMAIN}/submit-report`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 850px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #0f172a;">Submit a Mountain Pass Road Report</h1>
      <p style="line-height: 1.7; color: #334155; margin-bottom: 1.5rem; font-size: 1.05rem;">
        Help fellow travelers stay safe across alpine corridors. Share your first-hand observations, road conditions, chain restrictions, delays, or weather conditions directly with our editorial and verification team.
      </p>
      <p><a href="/methodology" style="color: #1d4ed8; font-weight: 600;">Learn about our Multi-Source Verification Methodology &rarr;</a></p>
    </main>`
  },
  {
    path: '/methodology',
    title: 'Multi-Source Verification Methodology | LivePassWatch',
    description: 'Explore the 3-Tier Multi-Source Verification Methodology used by LivePassWatch to validate real-time mountain pass status, road closures, and community reports.',
    canonicalUrl: `${DOMAIN}/methodology`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 950px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #0f172a;">Multi-Source Verification Methodology (MTVM)</h1>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1.5rem; font-size: 1.05rem;">
        How LivePassWatch ingests, cross-corroborates, and validates live mountain pass road conditions, hazard alerts, snowpack observations, and community-submitted reports through an empirical, 3-tier evidentiary triangulation framework.
      </p>
    </main>`
  },
  {
    path: '/about',
    title: 'About LivePassWatch - Meet the Founder, Our Mission & Team',
    description: 'Meet founder Zulkarnain, learn the Himalayan story behind LivePassWatch, and discover our dedicated team tracking live mountain pass conditions.',
    canonicalUrl: `${DOMAIN}/about`,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 850px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #0f172a;">About LIVEPASSWATCH</h1>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1.5rem; font-size: 1.05rem;">
        <strong>LIVEPASSWATCH (<a href="https://www.livepasswatch.info">www.livepasswatch.info</a>)</strong> is a real-time mountain pass tracking platform. Our mission is simple: <em>Know Before You Go</em>. We empower travelers, commercial freight operators, motorcyclists, and mountain commuters with verified, live road conditions across critical mountain passes globally.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.75rem; color: #0f172a;">Meet the Founder</h2>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1rem;">
        Hi, I'm Zulkarnain. I was born and raised in the Himalayas, and I've spent years travelling across high mountain passes — for work, for family visits, and honestly just because I love the mountains.
      </p>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1rem;">
        That experience is also where the frustration came from. More times than I can count, I'd set out for a pass with no real idea whether it was even open — no clear updates, no reliable source, just word of mouth from other drivers or a WhatsApp forward that turned out to be three days old. I've been stuck at closed passes, turned back halfway, and seen other travellers do the same. It's not just inconvenient — on some of these roads, it can genuinely be dangerous.
      </p>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1rem;">
        That's the problem LivePassWatch is built to solve. I wanted a place where anyone heading into the mountains — a tourist, a biker, a truck driver, a local commuting between towns — could check a pass before leaving and actually trust what they saw.
      </p>
      <p style="font-style: italic; font-weight: 600; color: #0f172a; margin-top: 1rem; margin-bottom: 2rem;">
        — Zulkarnain (zulkarnainbusiness@gmail.com)
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.75rem; color: #0f172a;">The Team Behind LivePassWatch</h2>
      <p style="line-height: 1.75; color: #334155; margin-bottom: 1rem;">
        We're a small team: five of us right now, three web developers and two dedicated researchers who spend their time tracking conditions, cross-checking reports, and keeping the information on the site current. We're not a big company — just people who care about getting this right, because we've felt what it's like when the information isn't there.
      </p>
      <p style="line-height: 1.75; color: #334155;">
        If you spot outdated info on a pass, or you've got local knowledge that could help other travellers, reach out at <a href="mailto:zulkarnainbusiness@gmail.com" style="color: #1d4ed8;">zulkarnainbusiness@gmail.com</a>. This site works better with more eyes on the road.
      </p>
    </main>`
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | LivePassWatch',
    description: 'LivePassWatch privacy policy: how we handle user data, local storage preferences, and website analytics.',
    canonicalUrl: `${DOMAIN}/privacy`,
    noIndex: true,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 800px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #0f172a;">Privacy Policy</h1>
      <p style="line-height: 1.7; color: #334155;">At LivePassWatch, we respect your privacy. We do not sell your personal information. We use anonymous analytics solely to improve mountain driving safety tools.</p>
    </main>`
  },
  {
    path: '/terms',
    title: 'Terms of Service | LivePassWatch',
    description: 'Terms and conditions for using LivePassWatch mountain pass status and road condition tracking services.',
    canonicalUrl: `${DOMAIN}/terms`,
    noIndex: true,
    bodyContent: `<main class="app-container" style="padding: 2.5rem 1rem; max-width: 800px; margin: 0 auto;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: #0f172a;">Terms &amp; Safety Disclaimer</h1>
      <p style="line-height: 1.7; color: #334155;">Mountain weather and alpine road conditions can change unpredictably in minutes. Always verify official DOT advisories and carry appropriate emergency gear before mountain travel.</p>
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
// 6. Regenerate sitemap.xml with 0 duplicates and only canonical indexable URLs
// -------------------------------------------------------------
console.log('\n🗺️  Regenerating sitemap.xml with canonical URLs...');

const todayDate = new Date().toISOString().split('T')[0];

const coreSitemapUrls = [
  'https://www.livepasswatch.info/',
  'https://www.livepasswatch.info/passes',
  'https://www.livepasswatch.info/map',
  'https://www.livepasswatch.info/alerts',
  'https://www.livepasswatch.info/resources',
  'https://www.livepasswatch.info/submit-report',
  'https://www.livepasswatch.info/methodology',
  'https://www.livepasswatch.info/about'
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
// 7. Update _redirects and copy public headers/robots
// -------------------------------------------------------------
console.log('\n🔀 Generating 301 Redirect Mappings (_redirects)...');

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

// Copy _headers and robots.txt to dist if present
if (fs.existsSync(path.resolve(publicDir, '_headers'))) {
  fs.copyFileSync(path.resolve(publicDir, '_headers'), path.resolve(distDir, '_headers'));
  console.log('  ✓ Synced _headers to dist');
}
if (fs.existsSync(path.resolve(publicDir, 'robots.txt'))) {
  fs.copyFileSync(path.resolve(publicDir, 'robots.txt'), path.resolve(distDir, 'robots.txt'));
  console.log('  ✓ Synced robots.txt to dist');
}

console.log('\n✨ LivePassWatch SSG Prerendering Complete!\n');
