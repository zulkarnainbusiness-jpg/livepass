import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  XCircle, 
  FileText, 
  Globe2, 
  Cpu, 
  Database, 
  Eye, 
  Lock, 
  Search, 
  ExternalLink,
  ArrowRight,
  Sparkles,
  GitPullRequest,
  Check
} from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';

export const VerificationMethodologyPage: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <SEOHelper
        title="Multi-Source Verification Methodology | LivePassWatch"
        description="Explore the 3-Tier Multi-Source Verification Methodology used by LivePassWatch to validate real-time mountain pass status, road closures, and community reports."
        canonicalUrl="https://www.livepasswatch.info/methodology"
      />

      {/* Header Banner */}
      <div className="lp-card" style={{ 
        padding: '40px 32px', 
        marginBottom: '32px', 
        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(29, 78, 216, 0.05) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '16px'
      }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 14px', 
          borderRadius: '9999px', 
          backgroundColor: 'rgba(56, 189, 248, 0.15)', 
          color: 'var(--primary)', 
          fontSize: '13px', 
          fontWeight: '700',
          marginBottom: '16px'
        }}>
          <ShieldCheck size={16} /> LivePassWatch Editorial &amp; Data Verification Standards
        </div>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '800', 
          color: 'var(--text-primary)', 
          marginBottom: '16px', 
          letterSpacing: '-0.02em',
          lineHeight: '1.25'
        }}>
          Multi-Source Verification Methodology (MTVM)
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: 'var(--text-secondary)', 
          lineHeight: '1.8', 
          maxWidth: '850px',
          marginBottom: '20px'
        }}>
          How LivePassWatch ingests, cross-corroborates, and validates live mountain pass road conditions, hazard alerts, snowpack observations, and community-submitted reports through an empirical, 3-tier evidentiary triangulation framework.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Database size={14} style={{ color: 'var(--primary)' }} /> <strong>Tier 1:</strong> Official DOT &amp; Agency Telemetry
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Cpu size={14} style={{ color: '#10B981' }} /> <strong>Tier 2:</strong> AI-Assisted Community Signals
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Eye size={14} style={{ color: '#F59E0B' }} /> <strong>Tier 3:</strong> OSINT, Webcams &amp; Satellite Remote Sensing
          </span>
        </div>
      </div>

      {/* Section 1: Purpose & Scope */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <Layers size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            1. Purpose &amp; Scope
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
          In mountainous terrain, road condition inaccuracies represent genuine safety hazards. MTVM establishes an empirical, reproducible protocol for assessing claims, winter weather closures, tire chain mandates, and incident reports before publishing status updates.
        </p>

        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>
          Verification Status Taxonomies
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '700', marginBottom: '6px' }}>
              <CheckCircle2 size={18} /> Verified
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              High confidence. Confirmed across at least two independent tiers (e.g. Official DOT + Ground Webcams or Community Consensus) with zero primary contradictions.
            </p>
          </div>

          <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: '700', marginBottom: '6px' }}>
              <AlertTriangle size={18} /> Partially Verified / Caution
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Core condition confirmed (e.g. pass is open), but specific variables like chain restrictions, lane reductions, or exact delay windows remain in transition.
            </p>
          </div>

          <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(100, 116, 139, 0.08)', border: '1px solid rgba(100, 116, 139, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: '700', marginBottom: '6px' }}>
              <HelpCircle size={18} /> Unverified / Pending
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Emerging community or single-source lead. Queued for secondary agency cross-check and live camera verification before public confirmation.
            </p>
          </div>

          <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444', fontWeight: '700', marginBottom: '6px' }}>
              <XCircle size={18} /> Debunked / False
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Directly refuted by official DOT road sensors, live camera telemetry, or timestamped forensic inspection disproving stale or recycled reports.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Tier 1 - Official Government Sources */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <Globe2 size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            2. Tier 1 — Official Government &amp; Highway Authorities (Primary Layer)
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
          Tier 1 sources represent statutory authorities responsible for road infrastructure, avalanche control, and emergency declarations. Data is ingested directly via automated API connectors, electronic gazettes, and official DOT feeds.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '10px 12px' }}>Region / Country</th>
                <th style={{ padding: '10px 12px' }}>Statutory Authority</th>
                <th style={{ padding: '10px 12px' }}>Data Types Covered</th>
                <th style={{ padding: '10px 12px' }}>Integration Cadence</th>
                <th style={{ padding: '10px 12px' }}>Reliability Profile</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><strong>United States</strong></td>
                <td style={{ padding: '12px' }}>WSDOT, Caltrans, CDOT, ODOT (.gov)</td>
                <td style={{ padding: '12px' }}>Lane closures, chain laws, snow depth, plow telemetry</td>
                <td style={{ padding: '12px' }}>Real-time (5–15 min sync)</td>
                <td style={{ padding: '12px' }}>Highest physical accuracy; occasional sensor delay</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><strong>Switzerland &amp; Alps</strong></td>
                <td style={{ padding: '12px' }}>FEDRO / Astra, Cantonal Police (.ch, .admin.ch)</td>
                <td style={{ padding: '12px' }}>Seasonal winter closure dates, pass clearance, avalanche risk</td>
                <td style={{ padding: '12px' }}>Hourly / As updated</td>
                <td style={{ padding: '12px' }}>Gold standard alpine telemetry</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><strong>India (Himalayas)</strong></td>
                <td style={{ padding: '12px' }}>Border Roads Organisation (BRO), Traffic Police (.gov.in)</td>
                <td style={{ padding: '12px' }}>Strategic pass opening notices, convoy schedules, landslide alerts</td>
                <td style={{ padding: '12px' }}>Daily bulletins / Real-time alerts</td>
                <td style={{ padding: '12px' }}>Official clearance notices; remote weather delays</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><strong>Norway &amp; Scandinavia</strong></td>
                <td style={{ padding: '12px' }}>Statens vegvesen (vegvesen.no)</td>
                <td style={{ padding: '12px' }}>Kolonnekjøring (convoy drive), storm closures, ferry connections</td>
                <td style={{ padding: '12px' }}>Automated API (10 min)</td>
                <td style={{ padding: '12px' }}>Direct road sensor network</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ padding: '16px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
          <strong style={{ color: 'var(--text-primary)', fontSize: '14px', display: 'block', marginBottom: '6px' }}>
            Fallback Protocol for Remote or Data-Opaque Passes:
          </strong>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
            When central highway APIs are offline or unavailable (e.g. high-altitude passes in remote Nepal or Ladakh), the platform falls back to regional traffic police dispatches, local district magistrate emergency orders, and multilateral crisis feeds (UN OCHA ReliefWeb).
          </p>
        </div>
      </section>

      {/* Section 3: Tier 2 - Community & Crowd-Sourced Reports */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
            <Cpu size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            3. Tier 2 — Community &amp; Crowd-Sourced Signals (AI-Assisted)
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
          On-ground travelers, freight haulers, and local mountain commuters often encounter changing conditions before official road crews update central registers. We ingest community reports via our <Link to="/submit-report" style={{ color: 'var(--primary)', fontWeight: '600' }}>Submit Report portal</Link> and vetted community forums.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ padding: '18px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} style={{ color: 'var(--primary)' }} /> NLP Entity &amp; Hazard Extraction
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              AI parses raw colloquial submissions to extract pass names, mileposts, snow/ice intensity, chain requirements, and exact temporal references.
            </p>
          </div>

          <div style={{ padding: '18px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={16} style={{ color: '#10B981' }} /> Clustering &amp; Deduplication
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Vector similarity clustering aggregates independent reports from the same geographic corridor, separating true multi-driver consensus from reposted rumors.
            </p>
          </div>

          <div style={{ padding: '18px', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#F59E0B' }} /> Heuristic Credibility Weighting
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Submissions are weighted based on photo/video attachments, GPS metadata verification, reporter consistency history, and geographical proximity.
            </p>
          </div>
        </div>

        <div style={{ padding: '14px 18px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
            <strong>Integrity Guardrail:</strong> Community reports are treated as observational leads. A community report alone cannot mark a closed pass as "Open" without Tier 1 or Tier 3 confirmation.
          </p>
        </div>
      </section>

      {/* Section 4: Tier 3 - Supplementary OSINT & Telemetry */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
            <Eye size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            4. Tier 3 — Supplementary OSINT, Webcams &amp; Satellite Forensics
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
          Tier 3 provides objective physical calibration to verify or refute claims through sensor networks and remote sensing:
        </p>

        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.85, paddingLeft: '20px', fontSize: '14.5px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Live Roadside HD Webcams:</strong> Real-time visual confirmation of asphalt surface (dry, slush, compacted snow, ice) and traffic flow rate.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Satellite Remote Sensing:</strong> Sentinel-2 and MODIS snowpack cover, thermal thermal anomaly scans, and landslide scar identification.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Chronolocation &amp; Media Forensics:</strong> Reverse image indexing, timestamp checks, and solar azimuth analysis to detect recycled past-winter photos.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Meteorological &amp; Avalanche Center Data:</strong> Northwest Avalanche Center (NWAC), SLF Davos, and national weather radar integration.
          </li>
        </ul>
      </section>

      {/* Section 5: Decision Matrix */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <GitPullRequest size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            5. Decision Matrix &amp; Multi-Tier Rules
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
          Status changes follow strict logical thresholds requiring cross-tier consensus before public dispatch:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '10px 12px' }}>Tier 1 (Official DOT)</th>
                <th style={{ padding: '10px 12px' }}>Tier 2 (Community)</th>
                <th style={{ padding: '10px 12px' }}>Tier 3 (Webcam/OSINT)</th>
                <th style={{ padding: '10px 12px' }}>Final Verdict</th>
                <th style={{ padding: '10px 12px' }}>Publishing Action</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}>Confirmed Open/Closed</td>
                <td style={{ padding: '12px' }}>Corroborated</td>
                <td style={{ padding: '12px' }}>Visual Match</td>
                <td style={{ padding: '12px' }}><span style={{ color: '#10B981', fontWeight: '700' }}>● VERIFIED</span></td>
                <td style={{ padding: '12px' }}>Publish live with green badge</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}>Confirmed Status</td>
                <td style={{ padding: '12px' }}>No reports</td>
                <td style={{ padding: '12px' }}>Camera Offline</td>
                <td style={{ padding: '12px' }}><span style={{ color: 'var(--primary)', fontWeight: '700' }}>● VERIFIED (DOT)</span></td>
                <td style={{ padding: '12px' }}>Publish with official agency citation</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}>No Update / Stale</td>
                <td style={{ padding: '12px' }}>Consensus Closure Claim</td>
                <td style={{ padding: '12px' }}>Webcam shows stopped traffic</td>
                <td style={{ padding: '12px' }}><span style={{ color: '#F59E0B', fontWeight: '700' }}>▲ CAUTION / ADVISORY</span></td>
                <td style={{ padding: '12px' }}>Publish advisory banner + queue agency check</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}>Official Open</td>
                <td style={{ padding: '12px' }}>Single user claims closed</td>
                <td style={{ padding: '12px' }}>Webcam shows moving traffic</td>
                <td style={{ padding: '12px' }}><span style={{ color: '#EF4444', fontWeight: '700' }}>✕ DEBUNKED</span></td>
                <td style={{ padding: '12px' }}>Reject community claim; preserve official Open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6 & 7: Process Flow & Audit Trail */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <FileText size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            6. Operational Flow &amp; Immutable Audit Trail
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '20px' }}>
          Every status change or community report goes through a logged pipeline:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>1</span>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Intake &amp; Registration:</strong> Signal received via API webhook, scheduled crawler, or community submission form. Unique verification ID generated.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>2</span>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Automated Cross-Check:</strong> System queries corresponding Tier 1 agency database and fetches latest road webcam frame.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>3</span>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Matrix Evaluation &amp; Human Sign-off:</strong> If tiers agree, status updates automatically. If discrepancies exist, item is flagged for human editorial review.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 }}>4</span>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Immutable Logging:</strong> Source URLs, timestamp snapshots, and verification reason codes are stored in the pass update audit log.
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Ethics & Privacy */}
      <section className="lp-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
            <Lock size={20} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
            7. Privacy Safeguards &amp; Responsible Reporting
          </h2>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '14px' }}>
          We respect user privacy and adhere to responsible publishing standards:
        </p>

        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '20px', fontSize: '14.5px', margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>PII Scrubbing:</strong> Personal details, vehicle registration numbers, and contact information submitted in road reports are strictly redacted before internal archiving and never published.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Human-in-the-Loop Oversight:</strong> High-impact alerts (e.g. complete multi-day mountain pass closures or emergency evacuations) always require verified human editorial sign-off.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Clear Attribution:</strong> All public pass pages feature clear citations indicating whether data originates from state DOTs, live sensors, or community consensus.
          </li>
        </ul>
      </section>

      {/* Action Footer Callout */}
      <div style={{ 
        padding: '32px', 
        borderRadius: '16px', 
        background: 'var(--bg-card)', 
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
            Have on-ground conditions to report?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
            Share road updates, snowpack reports, and chain restrictions with our verification team.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/submit-report" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', fontWeight: '600' }}>
            Submit Road Report <ArrowRight size={16} />
          </Link>
          <Link to="/passes" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', fontWeight: '600' }}>
            Browse Passes
          </Link>
        </div>
      </div>
    </div>
  );
};
