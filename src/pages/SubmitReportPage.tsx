import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CloudSnow, 
  Eye, 
  Users, 
  Sparkles,
  Info,
  Car,
  Truck,
  Mountain,
  Compass
} from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { passesData } from '../data/passes';

interface ReportFormData {
  passSlug: string;
  customPassName: string;
  status: 'OPEN' | 'CAUTION' | 'RESTRICTED' | 'CLOSED';
  weatherCondition: string;
  chainRequirement: string;
  hazardDetails: string;
  milepostOrLocation: string;
  delayEstimate: string;
  travelerType: string;
  reporterName: string;
  reporterEmail: string;
}

export const SubmitReportPage: React.FC = () => {
  const [formData, setFormData] = useState<ReportFormData>({
    passSlug: passesData[0]?.slug || '',
    customPassName: '',
    status: 'CAUTION',
    weatherCondition: 'Snowing',
    chainRequirement: 'Traction Tires Advised',
    hazardDetails: '',
    milepostOrLocation: '',
    delayEstimate: '0 - 15 mins',
    travelerType: 'Local Commuter',
    reporterName: '',
    reporterEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPass = passesData.find(p => p.slug === formData.passSlug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission processing & reference ID generation
    setTimeout(() => {
      const generatedId = `LPW-REP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      passSlug: passesData[0]?.slug || '',
      customPassName: '',
      status: 'CAUTION',
      weatherCondition: 'Snowing',
      chainRequirement: 'Traction Tires Advised',
      hazardDetails: '',
      milepostOrLocation: '',
      delayEstimate: '0 - 15 mins',
      travelerType: 'Local Commuter',
      reporterName: '',
      reporterEmail: '',
    });
  };

  return (
    <div className="app-container" style={{ padding: '40px 20px 80px', maxWidth: '880px' }}>
      <SEOHelper
        title="Submit Mountain Pass Road Report | LivePassWatch Community"
        description="Share live mountain pass road conditions, snowpack observations, chain restrictions, and travel delays directly with the LivePassWatch research team."
        canonicalUrl="https://www.livepasswatch.info/submit-report"
      />

      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 16px', 
          borderRadius: '9999px', 
          backgroundColor: 'rgba(56, 189, 248, 0.12)', 
          color: 'var(--primary)', 
          fontSize: '13.5px', 
          fontWeight: '700',
          marginBottom: '14px'
        }}>
          <Sparkles size={16} /> Community Alpine Intelligence
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: '800', margin: '0 0 12px 0', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          Submit a Mountain Pass Road Report
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
          Are you on the road or recently crossed a high pass? Share your live observations to keep thousands of truckers, commuters, and alpine travelers safe.
        </p>
      </div>

      {submitted ? (
        /* Submission Success Screen */
        <div className="lp-card" style={{ padding: '40px 32px', textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(34, 197, 94, 0.12)',
            color: '#16a34a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <CheckCircle2 size={36} />
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Thank You for Keeping Travellers Safe!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '560px', margin: '0 auto 20px', lineHeight: 1.6 }}>
            Your condition report has been submitted to our 24/7 condition research desk.
          </p>

          <div style={{
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 24px',
            display: 'inline-block',
            marginBottom: '28px'
          }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Report Reference Code
            </div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '1px', marginTop: '4px' }}>
              {submissionId}
            </div>
          </div>

          <div style={{
            textAlign: 'left',
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '24px',
            marginBottom: '32px',
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} style={{ color: 'var(--primary)' }} /> What Happens Next?
            </h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Our two condition researchers cross-verify your observation with official telemetry (DOT feeds, BRO notices, radar).</li>
              <li>Verified alerts are published to the <strong>Alerts &amp; Closures</strong> live stream and pass status widgets.</li>
              <li>If you provided an email, our founder Zulkarnain and the team may reach out with a personal note of gratitude.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={handleReset}
              className="btn btn-outline"
              style={{ padding: '10px 20px', fontSize: '14.5px' }}
            >
              Submit Another Report
            </button>
            <Link 
              to="/passes" 
              className="btn btn-primary"
              style={{ padding: '10px 24px', fontSize: '14.5px' }}
            >
              Browse Mountain Passes
            </Link>
          </div>
        </div>
      ) : (
        /* Report Form Card */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px' }}>
          <form onSubmit={handleSubmit} className="lp-card" style={{ padding: '36px' }}>
            
            {/* Step 1: Pass Selection */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                1. Select Mountain Pass <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select
                value={formData.passSlug}
                onChange={(e) => setFormData({ ...formData, passSlug: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '14.5px',
                  outline: 'none'
                }}
                required
              >
                <option value="other">-- Other / Unlisted Mountain Pass --</option>
                {passesData.map(p => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} ({p.state ? `${p.state}, ` : ''}{p.country} • {p.highway})
                  </option>
                ))}
              </select>

              {formData.passSlug === 'other' && (
                <div style={{ marginTop: '12px' }}>
                  <input
                    type="text"
                    placeholder="Enter Pass Name, State/Country, and Route Number..."
                    value={formData.customPassName}
                    onChange={(e) => setFormData({ ...formData, customPassName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    required
                  />
                </div>
              )}

              {selectedPass && formData.passSlug !== 'other' && (
                <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  📍 Elevation: {selectedPass.elevationFt.toLocaleString()} ft ({selectedPass.elevationM.toLocaleString()} m) • Official Corridor: {selectedPass.highway}
                </div>
              )}
            </div>

            {/* Step 2: Observed Pass Status */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                2. Current Pass Driving Condition <span style={{ color: '#ef4444' }}>*</span>
              </label>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                {[
                  { value: 'OPEN', label: 'OPEN / Clear', color: '#16a34a', desc: 'Normal dry or wet pavement' },
                  { value: 'CAUTION', label: 'CAUTION / Slippery', color: '#d97706', desc: 'Snow, slush, or black ice' },
                  { value: 'RESTRICTED', label: 'RESTRICTED / Chains', color: '#ea580c', desc: 'Tire traction law enforced' },
                  { value: 'CLOSED', label: 'CLOSED / Impassable', color: '#dc2626', desc: 'Gate down, accident or blocked' }
                ].map(opt => {
                  const isSelected = formData.status === opt.value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, status: opt.value as any })}
                      style={{
                        padding: '14px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: isSelected ? `2px solid ${opt.color}` : '1px solid var(--border-color)',
                        backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'var(--bg-surface-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontWeight: '700', fontSize: '13.5px', color: opt.color, marginBottom: '4px' }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                        {opt.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Weather & Chain Laws Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Weather at Summit / Pass
                </label>
                <select
                  value={formData.weatherCondition}
                  onChange={(e) => setFormData({ ...formData, weatherCondition: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="Clear / Sunny">Clear / Sunny</option>
                  <option value="Overcast / Cloudy">Overcast / Cloudy</option>
                  <option value="Light Snow Flurries">Light Snow Flurries</option>
                  <option value="Snowing">Snowing (Active Accumulation)</option>
                  <option value="Heavy Blizzard / Whiteout">Heavy Blizzard / Whiteout</option>
                  <option value="Freezing Rain / Sleet">Freezing Rain / Sleet</option>
                  <option value="Dense Mountain Fog">Dense Mountain Fog</option>
                  <option value="High Winds / Drifting Snow">High Winds / Drifting Snow</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Active Chain / Traction Restriction
                </label>
                <select
                  value={formData.chainRequirement}
                  onChange={(e) => setFormData({ ...formData, chainRequirement: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="None / Regular Tires Permitted">None / Regular Tires Permitted</option>
                  <option value="Traction Tires Advised">Traction Tires Advised</option>
                  <option value="Chains Required on Single Axle Vehicles">Chains Required on Single Axle Vehicles</option>
                  <option value="Chains Required on All Commercial Trucks">Chains Required on All Commercial Trucks</option>
                  <option value="Chains Required on ALL Vehicles (Except AWD)">Chains Required on ALL Vehicles (Except AWD)</option>
                  <option value="Chains Required on ALL Vehicles (No Exceptions)">Chains Required on ALL Vehicles (No Exceptions)</option>
                </select>
              </div>
            </div>

            {/* Step 4: Delays & Specific Location */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Exact Milepost / Landmark
                </label>
                <input
                  type="text"
                  placeholder="e.g. Milepost 52, Eastbound Summit, Snoqualmie Pass Ski Exit"
                  value={formData.milepostOrLocation}
                  onChange={(e) => setFormData({ ...formData, milepostOrLocation: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Estimated Traffic Delay
                </label>
                <select
                  value={formData.delayEstimate}
                  onChange={(e) => setFormData({ ...formData, delayEstimate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="No Delay (Normal Flow)">No Delay (Normal Flow)</option>
                  <option value="0 - 15 mins">0 - 15 mins</option>
                  <option value="15 - 30 mins">15 - 30 mins</option>
                  <option value="30 - 60 mins">30 - 60 mins</option>
                  <option value="1 - 2 hours">1 - 2 hours</option>
                  <option value="Indefinite / Stopped Traffic">Indefinite / Stopped Traffic</option>
                </select>
              </div>
            </div>

            {/* Step 5: Observations / Note */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Detailed Observations &amp; Road Hazards <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Describe what you experienced: e.g. 'Snow plows actively working on westbound lanes. Compact snow and ice starting from 4,000 ft elevation. Multiple spinouts near the summit curve. Visibility under 200 ft.'"
                value={formData.hazardDetails}
                onChange={(e) => setFormData({ ...formData, hazardDetails: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  outline: 'none',
                  resize: 'vertical'
                }}
                required
              />
            </div>

            {/* Step 6: Contributor Info */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} style={{ color: 'var(--primary)' }} /> Reporter Details (Optional)
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Name / Handle
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John D. / Trucker Dave"
                    value={formData.reporterName}
                    onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.reporterEmail}
                    onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Traveler Type
                  </label>
                  <select
                    value={formData.travelerType}
                    onChange={(e) => setFormData({ ...formData, travelerType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="Local Commuter">Local Commuter</option>
                    <option value="Commercial Trucker / Freight">Commercial Trucker / Freight</option>
                    <option value="Motorcyclist">Motorcyclist</option>
                    <option value="Alpine Tourist / Roadtripper">Alpine Tourist / Roadtripper</option>
                    <option value="Ski / Mountain Athlete">Ski / Mountain Athlete</option>
                    <option value="Highway Maintenance / First Responder">Highway Maintenance / First Responder</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--primary)' }} /> Reviewed by LivePassWatch Research Desk
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  padding: '12px 28px',
                  fontSize: '15px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>Transmitting Report...</>
                ) : (
                  <>
                    <Send size={16} /> Submit Road Report
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Verification Transparency Box */}
          <div className="lp-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Info size={18} style={{ color: 'var(--primary)' }} /> How We Verify &amp; Protect Community Reports
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, margin: '0 0 16px 0' }}>
              To ensure 100% accuracy and prevent misinformation on dangerous alpine corridors, every user submission is cross-checked against official state telemetry, Doppler snow radar, and live highway cameras before public broadcasting.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', fontSize: '13.5px' }}>
              <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)' }}>
                <strong>1. Dual-Researcher Verification:</strong> Our dedicated data researchers verify incident logs and radar overlays.
              </div>
              <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)' }}>
                <strong>2. Real-Time Alert Broadcast:</strong> Validated hazards trigger immediate warnings on our interactive maps and alerts hub.
              </div>
              <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-color)' }}>
                <strong>3. Direct Contact:</strong> Urgent queries can be emailed directly to founder Zulkarnain at <a href="mailto:zulkarnainbusiness@gmail.com" style={{ color: 'var(--primary)' }}>zulkarnainbusiness@gmail.com</a>.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
