import React, { useState } from 'react';
import { 
  Compass, 
  Shield, 
  Snowflake, 
  Map, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Bell,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check
} from 'lucide-react';
import { resourcesData } from '../data/resources';
import { ResourceItem } from '../types';
import { TrustBar } from '../components/TrustBar';
import { SEOHelper } from '../components/SEOHelper';
import { apiService } from '../services/apiService';
import './ResourcesPage.css';

export const ResourcesPage: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    await apiService.subscribeAlerts(emailInput);
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass': return <Compass size={28} />;
      case 'shield': return <Shield size={28} />;
      case 'snowflake': return <Snowflake size={28} />;
      case 'map': return <Map size={28} />;
      case 'alert-triangle': return <AlertTriangle size={28} />;
      case 'check-circle': return <CheckCircle2 size={28} />;
      case 'help-circle': return <HelpCircle size={28} />;
      case 'bell': return <Bell size={28} />;
      default: return <Compass size={28} />;
    }
  };

  const faqsList = [
    {
      q: 'How frequently are mountain pass statuses and webcams updated?',
      a: 'Pass statuses, closures, and road condition reports are updated continuously in real-time as state transportation agencies (WSDOT, Caltrans, CDOT, BRO, Swiss Astra) issue bulletins. Webcams refresh automatically every 2 to 5 minutes.'
    },
    {
      q: 'What is the difference between "Traction Tires Advised" and "Chains Required"?',
      a: '"Traction Tires Advised" means vehicles should have approved all-season (M+S) or 3-peak mountain snowflake tires. "Chains Required" is a legally binding state mandate requiring tire chains installed on drive tires (or AWD/4WD with approved snow tires, depending on the severity level).'
    },
    {
      q: 'Can I view road conditions on a map for entire travel corridors?',
      a: 'Yes! Visit our Interactive Map page to see global clusters, individual pass markers with color-coded status badges, and elevation profiles across entire mountain ranges.'
    },
    {
      q: 'Is LivePassWatch data sourced directly from official transportation departments?',
      a: 'Yes. All road conditions, camera images, and avalanche mitigation reports are sourced directly from verified government transportation departments and meteorological services.'
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="resources-page-container">
      <SEOHelper
        title="Mountain Pass Travel Resources & Safety Guides"
        description="Comprehensive mountain travel resources: winter driving guides, state chain laws, emergency contacts, pre-trip checklists, and pass FAQs."
        canonicalUrl="https://www.livepasswatch.com/resources"
        jsonLd={jsonLdFaq}
      />

      <div className="app-container">
        {/* Title */}
        <div className="page-header-title-section">
          <div className="page-title-banner">
            <span className="title-dash" />
            <h1>TRAVEL RESOURCES & GUIDES</h1>
            <span className="title-dash" />
          </div>
          <p className="page-header-subtitle">
            Essential tools, regulations, checklists, and safety guidelines for mountain travelers.
          </p>
        </div>

        {/* Resources 8-Card Grid */}
        <div className="resources-grid">
          {resourcesData.map((res) => (
            <div
              key={res.id}
              className="resource-card lp-card lp-card-hover"
              onClick={() => setSelectedResource(res)}
            >
              <div className="resource-card-top">
                <div className="resource-icon-wrapper">
                  {getResourceIcon(res.iconName)}
                </div>
                {res.badge && <span className="resource-badge">{res.badge}</span>}
              </div>

              <h3 className="resource-title">{res.title}</h3>
              <p className="resource-desc">{res.description}</p>

              <div className="resource-cta-row">
                <span className="resource-cta-link">{res.ctaText}</span>
                <ArrowRight size={16} className="resource-cta-arrow" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Resource Detail Content */}
        {selectedResource && (
          <div className="resource-modal-backdrop" onClick={() => setSelectedResource(null)}>
            <div className="resource-modal-content lp-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-group">
                  <div className="resource-icon-wrapper">
                    {getResourceIcon(selectedResource.iconName)}
                  </div>
                  <div>
                    <span className="resource-badge">{selectedResource.category}</span>
                    <h2 className="modal-heading">{selectedResource.title}</h2>
                  </div>
                </div>
                <button onClick={() => setSelectedResource(null)} className="modal-close-btn">✕</button>
              </div>

              <div className="modal-body-text">
                <p className="modal-desc-lead">{selectedResource.description}</p>
                <div className="modal-markdown-body">
                  {selectedResource.content?.split('\n').map((line, idx) => {
                    if (line.startsWith('### ')) {
                      return <h4 key={idx} className="md-h4">{line.replace('### ', '')}</h4>;
                    }
                    if (line.startsWith('- [ ] ') || line.startsWith('- **')) {
                      return <p key={idx} className="md-bullet">{line.replace(/^- /, '')}</p>;
                    }
                    if (line.trim()) {
                      return <p key={idx} className="md-p">{line}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="modal-footer">
                <button onClick={() => setSelectedResource(null)} className="btn btn-primary">
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion Section */}
        <section className="resources-faqs-section lp-card">
          <div className="faqs-section-header">
            <h2 className="faqs-main-title">Frequently Asked Questions</h2>
            <p className="faqs-sub-title">Everything you need to know about mountain pass tracking and winter driving.</p>
          </div>

          <div className="faqs-accordion-list">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="faq-question-btn"
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="faq-toggle-icon" /> : <ChevronDown size={18} className="faq-toggle-icon" />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter Subscribe Banner */}
        <div className="resources-subscribe-card lp-card">
          <div className="res-sub-left">
            <Bell size={32} className="res-sub-bell" />
            <div>
              <h3>Get Mountain Pass Updates Delivered</h3>
              <p>Subscribe for free winter storm alerts and pass opening notices.</p>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="res-sub-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className="res-sub-input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="sub-toast-msg"><Check size={16} /> Subscribed successfully!</div>
          )}
        </div>

        {/* Trust Bar */}
        <TrustBar />
      </div>
    </div>
  );
};
