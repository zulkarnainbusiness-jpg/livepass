import React, { useState, useEffect } from 'react';
import {
  Search,
  Zap,
  TrendingUp,
  Target,
  Layers,
  Link as LinkIcon,
  FileText,
  Download,
  Settings,
  Sparkles,
  HelpCircle,
  Clock,
  Globe,
  Sliders,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ExternalLink,
  Lock,
  Key,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import {
  KeywordItem,
  SeoResearchProject,
  KeywordCluster,
  SearchIntent,
  DifficultyCategory,
  ApiConfig
} from '../types/seoTypes';
import { SeoAgentService } from '../services/seo/seoAgentService';
import { SeoStorageService } from '../services/seo/seoStorageService';
import { passesData } from '../data/passes';
import './SeoResearchPage.css';

export const SeoResearchPage: React.FC = () => {
  const [seedKeyword, setSeedKeyword] = useState('Chinook Pass');
  const [country, setCountry] = useState('United States');
  const [language, setLanguage] = useState('English');
  const [maxDifficulty, setMaxDifficulty] = useState(70);
  const [minOpportunity, setMinOpportunity] = useState(40);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'realtime' | 'clusters' | 'priority' | 'striking' | 'links' | 'blueprint' | 'settings'>('all');
  const [project, setProject] = useState<SeoResearchProject | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<KeywordCluster | null>(null);
  const [expandedKwId, setExpandedKwId] = useState<string | null>(null);

  // Search/Filter state for the keyword table
  const [tableSearch, setTableSearch] = useState('');
  const [intentFilter, setIntentFilter] = useState<string>('ALL');
  const [diffFilter, setDiffFilter] = useState<string>('ALL');
  const [sortField, setSortField] = useState<'opportunityScore' | 'searchVolume' | 'difficulty' | 'existingRank'>('opportunityScore');
  const [sortAsc, setSortAsc] = useState(false);

  // Settings state
  const [apiConfig, setApiConfig] = useState<ApiConfig>(SeoStorageService.getApiConfig());
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Initial load
  useEffect(() => {
    const savedProjects = SeoStorageService.getSavedProjects();
    if (savedProjects.length > 0) {
      setProject(savedProjects[0]);
      if (savedProjects[0].clusters.length > 0) {
        setSelectedCluster(savedProjects[0].clusters[0]);
      }
    } else {
      // Auto-run research on first load for Chinook Pass
      handleStartResearch('Chinook Pass');
    }
  }, []);

  const handleStartResearch = async (customSeed?: string) => {
    const query = customSeed || seedKeyword;
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const result = await SeoAgentService.runResearch(query, {
        country,
        language,
        maxDifficulty,
        minOpportunity,
        apiConfig
      });
      setProject(result);
      if (result.clusters.length > 0) {
        setSelectedCluster(result.clusters[0]);
      }
    } catch (err) {
      console.error('Failed to run keyword research:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBulkResearch = async () => {
    setIsLoading(true);
    try {
      const result = await SeoAgentService.runBulkResearchAllPasses();
      setProject(result);
      if (result.clusters.length > 0) {
        setSelectedCluster(result.clusters[0]);
      }
    } catch (err) {
      console.error('Failed to run bulk research:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    SeoStorageService.saveApiConfig(apiConfig);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  // Filtered & Sorted Keywords
  const filteredKeywords = (project?.keywords || []).filter(k => {
    if (tableSearch.trim() && !k.keyword.toLowerCase().includes(tableSearch.toLowerCase())) {
      return false;
    }
    if (intentFilter !== 'ALL' && k.intent !== intentFilter) {
      return false;
    }
    if (diffFilter !== 'ALL' && k.difficultyCategory !== diffFilter) {
      return false;
    }
    return true;
  });

  filteredKeywords.sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];
    if (valA === 'N/A') valA = -1;
    if (valB === 'N/A') valB = -1;
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortAsc ? valA - valB : valB - valA;
    }
    return 0;
  });

  const getDifficultyBadge = (category: DifficultyCategory, kd: number) => {
    switch (category) {
      case 'EASY':
        return <span className="diff-badge badge-easy">🟢 {kd} Easy</span>;
      case 'MODERATE':
        return <span className="diff-badge badge-moderate">🟡 {kd} Mod</span>;
      case 'DIFFICULT':
        return <span className="diff-badge badge-difficult">🟠 {kd} Hard</span>;
      case 'VERY_DIFFICULT':
        return <span className="diff-badge badge-vhard">🔴 {kd} Very Hard</span>;
    }
  };

  const getScoreColorClass = (score: number) => {
    if (score >= 85) return 'score-elite';
    if (score >= 70) return 'score-high';
    if (score >= 50) return 'score-mid';
    return 'score-low';
  };

  return (
    <div className="seo-research-page">
      <SEOHelper
        title="AI SEO Keyword Research & Ranking Opportunity Agent"
        description="Comprehensive keyword research, real-time intent clustering, SERP competitor analysis, and ranking opportunity scoring for mountain passes."
        canonicalUrl="https://www.livepasswatch.info/seo-research"
      />

      <div className="app-container">
        {/* Page Hero Header */}
        <div className="seo-hero-header">
          <div className="hero-badge">
            <Sparkles size={16} /> LivePassWatch SEO Intelligence Agent
          </div>
          <h1 className="seo-page-title">AI Keyword Research & Ranking Opportunity Engine</h1>
          <p className="seo-page-subtitle">
            Analyze real search intent, competitor weaknesses, and ranking opportunities tailored for mountain pass corridors, webcams, and live road conditions.
          </p>
        </div>

        {/* Search & Configuration Bar */}
        <div className="seo-search-panel">
          <div className="search-top-row">
            <div className="input-group search-input-group">
              <label htmlFor="seedInput">Seed Keyword / Mountain Pass</label>
              <div className="input-with-icon">
                <Search size={18} className="search-icon" />
                <input
                  id="seedInput"
                  type="text"
                  placeholder="e.g. Chinook Pass, Snoqualmie Pass, Zoji La..."
                  value={seedKeyword}
                  onChange={(e) => setSeedKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleStartResearch()}
                  className="seo-text-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="countrySelect">Target Country</label>
              <select
                id="countrySelect"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="seo-select"
              >
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Italy">Italy</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Global">Global / Worldwide</option>
              </select>
            </div>

            <div className="search-actions-group">
              <button
                onClick={() => handleStartResearch()}
                disabled={isLoading}
                className="btn-primary start-research-btn"
              >
                {isLoading ? (
                  <>
                    <span className="spinner-sm"></span> Analyzing SERPs...
                  </>
                ) : (
                  <>
                    <Zap size={18} /> START KEYWORD RESEARCH
                  </>
                )}
              </button>

              <button
                onClick={handleBulkResearch}
                disabled={isLoading}
                className="btn-secondary bulk-research-btn"
                title="Research all 15 mountain passes in LivePassWatch dataset"
              >
                <Globe size={16} /> Research All 15 Passes
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className="btn-icon-secondary"
                title="API & Data Provider Settings"
              >
                <Settings size={18} />
              </button>
            </div>
          </div>

          {/* Quick Preset Badges */}
          <div className="quick-presets-row">
            <span className="presets-label">Quick Passes:</span>
            {passesData.slice(0, 7).map((pass) => (
              <button
                key={pass.id}
                onClick={() => {
                  setSeedKeyword(pass.name);
                  handleStartResearch(pass.name);
                }}
                className={`preset-pill ${seedKeyword === pass.name ? 'active' : ''}`}
              >
                {pass.name}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Metric Summary Cards */}
        {project && (
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-blue">
                <Target size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.totalKeywords}</span>
                <span className="kpi-label">Total Keywords Found</span>
              </div>
              <span className="kpi-sub">Verified queries</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-green">
                <Award size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.easyOpportunitiesCount}</span>
                <span className="kpi-label">Easy Opportunities</span>
              </div>
              <span className="kpi-sub">KD ≤ 30 (Fast Page 1)</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-yellow">
                <TrendingUp size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.mediumOpportunitiesCount}</span>
                <span className="kpi-label">Moderate Opportunities</span>
              </div>
              <span className="kpi-sub">KD 31 - 50</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-gold">
                <Sparkles size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.highOpportunityCount}</span>
                <span className="kpi-label">High-Value Opportunities</span>
              </div>
              <span className="kpi-sub">Score ≥ 80 / 100</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-purple">
                <Sliders size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.strikingDistanceCount}</span>
                <span className="kpi-label">Striking Distance</span>
              </div>
              <span className="kpi-sub">Positions 4 – 30</span>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrapper kpi-cyan">
                <Clock size={22} />
              </div>
              <div className="kpi-info">
                <span className="kpi-num">{project.realTimeCount}</span>
                <span className="kpi-label">Real-Time Intent</span>
              </div>
              <span className="kpi-sub">Status & Webcams</span>
            </div>
          </div>
        )}

        {/* Dashboard Navigation Tabs & Export Actions */}
        {project && (
          <div className="dashboard-nav-container">
            <div className="dashboard-tabs">
              <button
                onClick={() => setActiveTab('all')}
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              >
                <Target size={16} /> All Keywords ({project.keywords.length})
              </button>
              <button
                onClick={() => setActiveTab('realtime')}
                className={`tab-btn ${activeTab === 'realtime' ? 'active' : ''}`}
              >
                <Zap size={16} /> Real-Time Intent ({project.realTimeCount})
              </button>
              <button
                onClick={() => setActiveTab('clusters')}
                className={`tab-btn ${activeTab === 'clusters' ? 'active' : ''}`}
              >
                <Layers size={16} /> Topic Clusters ({project.clusters.length})
              </button>
              <button
                onClick={() => setActiveTab('priority')}
                className={`tab-btn ${activeTab === 'priority' ? 'active' : ''}`}
              >
                <TrendingUp size={16} /> Action Plan ({project.doNowList.length + project.doNextList.length})
              </button>
              <button
                onClick={() => setActiveTab('striking')}
                className={`tab-btn ${activeTab === 'striking' ? 'active' : ''}`}
              >
                <Sparkles size={16} /> Striking Distance ({project.quickWins.length})
              </button>
              <button
                onClick={() => setActiveTab('links')}
                className={`tab-btn ${activeTab === 'links' ? 'active' : ''}`}
              >
                <LinkIcon size={16} /> Internal Links ({project.internalLinkSuggestions.length})
              </button>
              <button
                onClick={() => setActiveTab('blueprint')}
                className={`tab-btn ${activeTab === 'blueprint' ? 'active' : ''}`}
              >
                <FileText size={16} /> Content Blueprint
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              >
                <Settings size={16} /> API Settings
              </button>
            </div>

            <div className="export-actions">
              <button
                onClick={() => SeoAgentService.exportToCsv(project, true)}
                className="export-btn"
                title="Export high-opportunity keywords to CSV"
              >
                <Download size={14} /> Export High-Opp CSV
              </button>
              <button
                onClick={() => SeoAgentService.exportToJson(project)}
                className="export-btn export-json"
                title="Export complete strategy to JSON"
              >
                <Download size={14} /> JSON
              </button>
            </div>
          </div>
        )}

        {/* Tab 1: All Keywords Table */}
        {project && activeTab === 'all' && (
          <div className="seo-section-card">
            <div className="table-controls-bar">
              <div className="table-search-box">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Filter keywords..."
                  value={tableSearch}
                  onChange={(e) => setTableSearch(e.target.value)}
                  className="table-search-input"
                />
              </div>

              <div className="table-filters-group">
                <select
                  value={intentFilter}
                  onChange={(e) => setIntentFilter(e.target.value)}
                  className="table-filter-select"
                >
                  <option value="ALL">All Intents</option>
                  <option value="Real-Time Intent">Real-Time Intent</option>
                  <option value="Informational">Informational</option>
                  <option value="Travel/Planning">Travel/Planning</option>
                  <option value="Commercial">Commercial</option>
                </select>

                <select
                  value={diffFilter}
                  onChange={(e) => setDiffFilter(e.target.value)}
                  className="table-filter-select"
                >
                  <option value="ALL">All Difficulties</option>
                  <option value="EASY">🟢 Easy (0-30)</option>
                  <option value="MODERATE">🟡 Moderate (31-50)</option>
                  <option value="DIFFICULT">🟠 Difficult (51-70)</option>
                  <option value="VERY_DIFFICULT">🔴 Very Difficult (71+)</option>
                </select>
              </div>

              <div className="table-records-count">
                Showing {filteredKeywords.length} of {project.keywords.length} keywords
              </div>
            </div>

            <div className="seo-table-container">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th onClick={() => { setSortField('searchVolume'); setSortAsc(!sortAsc); }} className="sortable-th">
                      Volume {sortField === 'searchVolume' && (sortAsc ? '▲' : '▼')}
                    </th>
                    <th onClick={() => { setSortField('difficulty'); setSortAsc(!sortAsc); }} className="sortable-th">
                      KD {sortField === 'difficulty' && (sortAsc ? '▲' : '▼')}
                    </th>
                    <th>Search Intent</th>
                    <th onClick={() => { setSortField('opportunityScore'); setSortAsc(!sortAsc); }} className="sortable-th">
                      Opp Score {sortField === 'opportunityScore' && (sortAsc ? '▲' : '▼')}
                    </th>
                    <th>SERP Competition</th>
                    <th onClick={() => { setSortField('existingRank'); setSortAsc(!sortAsc); }} className="sortable-th">
                      Rank {sortField === 'existingRank' && (sortAsc ? '▲' : '▼')}
                    </th>
                    <th>Recommended Action</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKeywords.map((kw) => (
                    <React.Fragment key={kw.id}>
                      <tr className={expandedKwId === kw.id ? 'row-expanded' : ''}>
                        <td className="kw-cell">
                          <span className="kw-text">{kw.keyword}</span>
                          {kw.isRealTime && <span className="pill-realtime">Live Status</span>}
                        </td>
                        <td className="num-cell">
                          {typeof kw.searchVolume === 'number' ? kw.searchVolume.toLocaleString() : kw.searchVolume}
                        </td>
                        <td>{getDifficultyBadge(kw.difficultyCategory, kw.difficulty)}</td>
                        <td>
                          <span className={`intent-tag intent-${kw.intent.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                            {kw.intent}
                          </span>
                        </td>
                        <td className="num-cell">
                          <div className={`score-badge ${getScoreColorClass(kw.opportunityScore)}`}>
                            {kw.opportunityScore}
                            <span className="score-max">/100</span>
                          </div>
                        </td>
                        <td>
                          <span className={`comp-tag comp-${kw.competitionLevel.toLowerCase()}`}>
                            {kw.competitionLevel}
                          </span>
                        </td>
                        <td className="num-cell">
                          {kw.existingRank !== 'N/A' ? (
                            <span className="rank-badge">#{kw.existingRank}</span>
                          ) : (
                            <span className="rank-none">—</span>
                          )}
                        </td>
                        <td>
                          <span className="action-tag">{kw.recommendedAction}</span>
                        </td>
                        <td>
                          <button
                            onClick={() => setExpandedKwId(expandedKwId === kw.id ? null : kw.id)}
                            className="why-toggle-btn"
                          >
                            {expandedKwId === kw.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </td>
                      </tr>
                      {expandedKwId === kw.id && (
                        <tr className="expanded-details-row">
                          <td colSpan={9}>
                            <div className="why-opportunity-card">
                              <div className="why-header">
                                <Sparkles size={16} className="why-icon" />
                                <strong>Why "{kw.keyword}" is an Opportunity (Score: {kw.opportunityScore}/100)</strong>
                              </div>
                              <ul className="why-list">
                                {kw.opportunityWhy.map((reason, idx) => (
                                  <li key={idx}>
                                    <CheckCircle2 size={14} className="check-bullet" /> {reason}
                                  </li>
                                ))}
                              </ul>
                              <div className="why-footer">
                                <span>Target Page: <a href={kw.targetPageUrl} target="_blank" rel="noreferrer">{kw.targetPageUrl}</a></span>
                                <span>SERP Weakness: {kw.serpWeaknessSummary}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Real-Time Intent Opportunities */}
        {project && activeTab === 'realtime' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <Zap size={22} />
              </div>
              <div>
                <h2>Real-Time & Live Status SEO Opportunities</h2>
                <p>
                  Queries containing <strong>"today", "status", "open", "webcam", "road conditions", and "snow"</strong> represent LivePassWatch's largest competitive advantage over static travel blogs.
                </p>
              </div>
            </div>

            <div className="realtime-cards-grid">
              {project.keywords.filter(k => k.isRealTime).map((kw) => (
                <div key={kw.id} className="realtime-opportunity-card">
                  <div className="rt-card-top">
                    <span className="rt-kw-title">{kw.keyword}</span>
                    <div className={`score-badge ${getScoreColorClass(kw.opportunityScore)}`}>
                      {kw.opportunityScore}/100
                    </div>
                  </div>
                  <div className="rt-meta-row">
                    <span>Volume: <strong>{typeof kw.searchVolume === 'number' ? kw.searchVolume.toLocaleString() : kw.searchVolume}</strong></span>
                    <span>KD: <strong>{kw.difficulty}/100</strong></span>
                    <span>Rank: <strong>{kw.existingRank !== 'N/A' ? `#${kw.existingRank}` : 'Unranked'}</strong></span>
                  </div>
                  <p className="rt-why-text">
                    {kw.opportunityWhy[0] || 'High intent query matching live mountain pass camera feeds.'}
                  </p>
                  <div className="rt-card-bottom">
                    <span className="rt-action">{kw.recommendedAction}</span>
                    <a href={kw.targetPageUrl} className="rt-link" target="_blank" rel="noreferrer">
                      View Page <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Topic Clusters & Content Gaps */}
        {project && activeTab === 'clusters' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <Layers size={22} />
              </div>
              <div>
                <h2>Semantic Topic Clusters & Content Gap Analysis</h2>
                <p>Keywords grouped into core mountain corridor topics with missing competitor topics and suggested heading outlines.</p>
              </div>
            </div>

            <div className="clusters-layout">
              {/* Cluster Selector Sidebar */}
              <div className="clusters-sidebar">
                {project.clusters.map((cl) => (
                  <div
                    key={cl.id}
                    onClick={() => setSelectedCluster(cl)}
                    className={`cluster-item-btn ${selectedCluster?.id === cl.id ? 'active' : ''}`}
                  >
                    <div className="cl-name">{cl.name}</div>
                    <div className="cl-meta">
                      <span>{cl.keywords.length} queries</span>
                      <span>Vol: {cl.totalVolume.toLocaleString()}</span>
                      <span className="cl-score">Opp: {cl.avgOpportunity}/100</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Cluster Details */}
              {selectedCluster && (
                <div className="cluster-detail-pane">
                  <div className="cluster-header-box">
                    <div>
                      <span className="cl-badge">{selectedCluster.recommendedPageType}</span>
                      <h3>{selectedCluster.name}</h3>
                      <p className="cl-primary-kw">Primary Target: <strong>{selectedCluster.primaryKeyword}</strong></p>
                    </div>
                    <div className="cl-header-stats">
                      <div className="cl-stat">
                        <span className="cl-stat-val">{selectedCluster.totalVolume.toLocaleString()}</span>
                        <span className="cl-stat-lbl">Monthly Volume</span>
                      </div>
                      <div className="cl-stat">
                        <span className="cl-stat-val">{selectedCluster.avgOpportunity}/100</span>
                        <span className="cl-stat-lbl">Avg Opportunity</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Gap Checklist */}
                  <div className="content-gap-box">
                    <h4><HelpCircle size={16} /> Content Gaps to Beat Competitors:</h4>
                    <ul className="gap-list">
                      {selectedCluster.contentGapTopics.map((gap, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="gap-check" /> {gap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Heading Structure */}
                  <div className="heading-outline-box">
                    <h4><FileText size={16} /> Recommended Page Structure (H1 / H2 Outline):</h4>
                    <div className="outline-card">
                      <div className="h1-tag"><strong>H1:</strong> {selectedCluster.headingOutline.h1}</div>
                      <div className="h2-list">
                        {selectedCluster.headingOutline.h2s.map((h2, idx) => (
                          <div key={idx} className="h2-item">
                            <span className="h2-badge">H2</span> {h2}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cluster Keywords List */}
                  <div className="cluster-kws-list">
                    <h4>Keywords in this Cluster ({selectedCluster.keywords.length}):</h4>
                    <div className="kws-tag-cloud">
                      {selectedCluster.keywords.map((k) => (
                        <span key={k.id} className="cluster-kw-pill">
                          {k.keyword} <small>({k.opportunityScore})</small>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: 3-Tier Priority Action Plan */}
        {project && activeTab === 'priority' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <TrendingUp size={22} />
              </div>
              <div>
                <h2>3-Tier SEO Execution Roadmap</h2>
                <p>Prioritized action lists based on ranking opportunity score, competitor weaknesses, and topical relevance.</p>
              </div>
            </div>

            <div className="priority-columns-grid">
              {/* DO NOW */}
              <div className="priority-col col-do-now">
                <div className="col-header">
                  <div className="col-title-badge">
                    <Zap size={16} /> 🚀 DO NOW (Score ≥ 80)
                  </div>
                  <span className="col-count">{project.doNowList.length} Opportunities</span>
                </div>
                <div className="col-cards-list">
                  {project.doNowList.map((kw) => (
                    <div key={kw.id} className="priority-item-card">
                      <div className="p-card-top">
                        <span className="p-kw">{kw.keyword}</span>
                        <span className="score-badge score-elite">{kw.opportunityScore}</span>
                      </div>
                      <div className="p-card-details">
                        <span>Vol: {typeof kw.searchVolume === 'number' ? kw.searchVolume.toLocaleString() : kw.searchVolume}</span>
                        <span>KD: {kw.difficulty}</span>
                        <span>Rank: {kw.existingRank !== 'N/A' ? `#${kw.existingRank}` : '—'}</span>
                      </div>
                      <p className="p-action-text">{kw.recommendedAction}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DO NEXT */}
              <div className="priority-col col-do-next">
                <div className="col-header">
                  <div className="col-title-badge">
                    <TrendingUp size={16} /> 📈 DO NEXT (Score 65–79)
                  </div>
                  <span className="col-count">{project.doNextList.length} Opportunities</span>
                </div>
                <div className="col-cards-list">
                  {project.doNextList.map((kw) => (
                    <div key={kw.id} className="priority-item-card">
                      <div className="p-card-top">
                        <span className="p-kw">{kw.keyword}</span>
                        <span className="score-badge score-high">{kw.opportunityScore}</span>
                      </div>
                      <div className="p-card-details">
                        <span>Vol: {typeof kw.searchVolume === 'number' ? kw.searchVolume.toLocaleString() : kw.searchVolume}</span>
                        <span>KD: {kw.difficulty}</span>
                        <span>Rank: {kw.existingRank !== 'N/A' ? `#${kw.existingRank}` : '—'}</span>
                      </div>
                      <p className="p-action-text">{kw.recommendedAction}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LONG TERM */}
              <div className="priority-col col-long-term">
                <div className="col-header">
                  <div className="col-title-badge">
                    <Award size={16} /> 🏆 LONG-TERM (Competitive)
                  </div>
                  <span className="col-count">{project.longTermList.length} Targets</span>
                </div>
                <div className="col-cards-list">
                  {project.longTermList.slice(0, 10).map((kw) => (
                    <div key={kw.id} className="priority-item-card">
                      <div className="p-card-top">
                        <span className="p-kw">{kw.keyword}</span>
                        <span className="score-badge score-mid">{kw.opportunityScore}</span>
                      </div>
                      <div className="p-card-details">
                        <span>Vol: {typeof kw.searchVolume === 'number' ? kw.searchVolume.toLocaleString() : kw.searchVolume}</span>
                        <span>KD: {kw.difficulty}</span>
                        <span>Rank: {kw.existingRank !== 'N/A' ? `#${kw.existingRank}` : '—'}</span>
                      </div>
                      <p className="p-action-text">{kw.recommendedAction}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Striking Distance & GSC Quick Wins */}
        {project && activeTab === 'striking' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <Sparkles size={22} />
              </div>
              <div>
                <h2>Striking Distance & Quick SEO Wins (Positions 4 – 30)</h2>
                <p>
                  Keywords where LivePassWatch already has ranking presence or high impression velocity. Optimizing title tags, FAQs, and internal links can lift these to Top 3.
                </p>
              </div>
            </div>

            <div className="quick-wins-grid">
              {project.quickWins.map((qw, index) => (
                <div key={index} className="quick-win-card">
                  <div className="qw-badge-row">
                    <span className="qw-type-badge">{qw.type}</span>
                    <span className="qw-pos-badge">Current Position: #{qw.currentPosition}</span>
                  </div>
                  <h3 className="qw-kw">{qw.keyword}</h3>
                  <div className="qw-metrics-row">
                    <div className="qw-m-box">
                      <span className="qw-m-val">{qw.impressions.toLocaleString()}</span>
                      <span className="qw-m-lbl">Impressions</span>
                    </div>
                    <div className="qw-m-box">
                      <span className="qw-m-val">{qw.clicks}</span>
                      <span className="qw-m-lbl">Clicks</span>
                    </div>
                    <div className="qw-m-box">
                      <span className="qw-m-val">{qw.ctr}%</span>
                      <span className="qw-m-lbl">CTR</span>
                    </div>
                  </div>
                  <div className="qw-action-box">
                    <strong>Recommended Quick Win Action:</strong>
                    <p>{qw.opportunityAction}</p>
                  </div>
                  <a href={qw.targetUrl} className="qw-target-link" target="_blank" rel="noreferrer">
                    Target URL: {qw.targetUrl} <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Internal Link Opportunities */}
        {project && activeTab === 'links' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <LinkIcon size={22} />
              </div>
              <div>
                <h2>Strategic Internal Linking Architecture</h2>
                <p>
                  Transfer PageRank from high-authority passes directories, state hub pages, and interactive map pins to specific mountain pass detail pages.
                </p>
              </div>
            </div>

            <div className="internal-links-list">
              {project.internalLinkSuggestions.map((link, idx) => (
                <div key={idx} className="link-suggestion-card">
                  <div className="link-flow-row">
                    <div className="link-source">
                      <span className="node-label">Source Page</span>
                      <strong>{link.sourcePageTitle}</strong>
                      <small>{link.sourceUrl}</small>
                    </div>
                    <div className="link-arrow">➔</div>
                    <div className="link-target">
                      <span className="node-label">Target Page</span>
                      <strong>{link.targetPageTitle}</strong>
                      <small>{link.targetUrl}</small>
                    </div>
                  </div>
                  <div className="link-anchor-box">
                    <span>Suggested Anchor Text:</span>
                    <code>"{link.suggestedAnchor}"</code>
                  </div>
                  <p className="link-reason">{link.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: AI Content Blueprint Generator */}
        {project && activeTab === 'blueprint' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <FileText size={22} />
              </div>
              <div>
                <h2>Automated On-Page Content & Schema Blueprint</h2>
                <p>Complete SEO tags, JSON-LD Schema markup, and FAQ structures generated from research evidence.</p>
              </div>
            </div>

            <div className="blueprint-box">
              <div className="blueprint-field">
                <label>Recommended Document Title (≤ 60 Chars):</label>
                <div className="field-value-box">
                  <code>{project.topOpportunityKeyword} Road Conditions, Live Status & Webcams | LivePassWatch</code>
                </div>
              </div>

              <div className="blueprint-field">
                <label>Recommended Meta Description (≤ 160 Chars):</label>
                <div className="field-value-box">
                  <code>Check real-time {project.topOpportunityKeyword} road conditions, open/closed status, 24/7 webcams, snow depth, and weather forecast before traveling.</code>
                </div>
              </div>

              <div className="blueprint-field">
                <label>Recommended H1:</label>
                <div className="field-value-box">
                  <code>{project.topOpportunityKeyword} Road Status, Webcams & Conditions</code>
                </div>
              </div>

              <div className="blueprint-field">
                <label>JSON-LD Structured Data Schema (TouristDestination & FAQPage):</label>
                <pre className="schema-code-block">
{`{
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "${project.seedKeyword}",
  "description": "Real-time mountain pass road conditions, live cameras, and weather.",
  "url": "${project.domain}",
  "hasMap": "${project.domain}map",
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is ${project.seedKeyword} currently open?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check LivePassWatch for live transportation department status feeds."
        }
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8: API & Data Provider Settings */}
        {activeTab === 'settings' && (
          <div className="seo-section-card">
            <div className="section-intro">
              <div className="intro-icon-box">
                <Key size={22} />
              </div>
              <div>
                <h2>Modular API & Data Provider Configuration</h2>
                <p>Connect external enterprise SEO data providers. Credentials are stored securely in your browser's private storage.</p>
              </div>
            </div>

            {settingsSaved && (
              <div className="settings-saved-banner">
                <CheckCircle2 size={18} /> API settings saved successfully!
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="api-settings-form">
              <div className="provider-card">
                <div className="provider-header">
                  <Globe size={18} />
                  <strong>Google Search Suggest Provider</strong>
                  <span className="status-pill-active">Active (Zero-Config)</span>
                </div>
                <p className="provider-desc">
                  Collects real search permutations, autocomplete modifiers, and long-tail question queries directly.
                </p>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={apiConfig.useLiveGoogleSuggest}
                    onChange={(e) => setApiConfig({ ...apiConfig, useLiveGoogleSuggest: e.target.checked })}
                  />
                  Enable Live Suggest Engine
                </label>
              </div>

              <div className="provider-card">
                <div className="provider-header">
                  <Lock size={18} />
                  <strong>DataForSEO API (Optional)</strong>
                </div>
                <p className="provider-desc">Enables live search volume, SERP features, and competitor backlink metrics.</p>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>DataForSEO Login / Email:</label>
                    <input
                      type="text"
                      placeholder="e.g. user@domain.com"
                      value={apiConfig.dataForSeoLogin || ''}
                      onChange={(e) => setApiConfig({ ...apiConfig, dataForSeoLogin: e.target.value })}
                      className="seo-text-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>DataForSEO API Password:</label>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={apiConfig.dataForSeoPassword || ''}
                      onChange={(e) => setApiConfig({ ...apiConfig, dataForSeoPassword: e.target.value })}
                      className="seo-text-input"
                    />
                  </div>
                </div>
              </div>

              <div className="provider-card">
                <div className="provider-header">
                  <ShieldCheck size={18} />
                  <strong>Semrush / Ahrefs API (Optional)</strong>
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Semrush API Key:</label>
                    <input
                      type="password"
                      placeholder="Semrush API key..."
                      value={apiConfig.semrushApiKey || ''}
                      onChange={(e) => setApiConfig({ ...apiConfig, semrushApiKey: e.target.value })}
                      className="seo-text-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Ahrefs API Key:</label>
                    <input
                      type="password"
                      placeholder="Ahrefs API key..."
                      value={apiConfig.ahrefsApiKey || ''}
                      onChange={(e) => setApiConfig({ ...apiConfig, ahrefsApiKey: e.target.value })}
                      className="seo-text-input"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary save-settings-btn">
                Save API Configuration
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
