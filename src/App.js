import React, { useState, useMemo } from 'react';
import './App.css';
import { topics, categories } from './data/topics';
import ContentRenderer from './ContentRenderer';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionQuery, setSectionQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  // Filter topics based on category and search
  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesCategory =
        activeCategory === 'All' || topic.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        topic.name.toLowerCase().includes(q) ||
        topic.desc.toLowerCase().includes(q) ||
        topic.category.toLowerCase().includes(q) ||
        topic.sections.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.sub.toLowerCase().includes(q) ||
            s.content.toLowerCase().includes(q)
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedSectionIndex =
    selectedTopic && selectedSection
      ? selectedTopic.sections.indexOf(selectedSection)
      : -1;

  const filteredSections = useMemo(() => {
    if (!selectedTopic) return [];
    const q = sectionQuery.toLowerCase().trim();
    if (!q) return selectedTopic.sections;
    return selectedTopic.sections.filter(
      (section) =>
        section.title.toLowerCase().includes(q) ||
        section.sub.toLowerCase().includes(q) ||
        (section.phase || '').toLowerCase().includes(q) ||
        section.content.toLowerCase().includes(q)
    );
  }, [selectedTopic, sectionQuery]);
  const progressPercent =
    selectedTopic && selectedSectionIndex >= 0
      ? Math.round(((selectedSectionIndex + 1) / selectedTopic.sections.length) * 100)
      : 0;

  const handleSectionStep = (direction) => {
    if (!selectedTopic || selectedSectionIndex < 0) return;
    const nextIndex = selectedSectionIndex + direction;
    if (nextIndex < 0 || nextIndex >= selectedTopic.sections.length) return;
    setSelectedSection(selectedTopic.sections[nextIndex]);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setSelectedSection(topic.sections[0]);
    setSectionQuery('');
  };

  const handleBack = () => {
    setSelectedTopic(null);
    setSelectedSection(null);
    setSectionQuery('');
  };

  const totalSections = topics.reduce((acc, t) => acc + t.sections.length, 0);
  const totalCommandCenters = topics.filter((topic) =>
    topic.sections.some(
      (section) =>
        section.title.includes('Command Center') ||
        section.title.includes('Quick Reference')
    )
  ).length;
  const activeCategoryCount =
    activeCategory === 'All'
      ? topics.length
      : topics.filter((topic) => topic.category === activeCategory).length;
  const featuredTopic = topics[0];

  return (
    <div className={`app ${selectedTopic ? 'reader-mode' : ''}`}>
      {/* ===== HEADER ===== */}
      {!selectedTopic && <header className="header">
        <nav className="top-nav" aria-label="Primary navigation">
          <button className="site-brand" onClick={handleBack} aria-label="Xlearning Hub home">
            <span className="brand-mark">XL</span>
            <span className="brand-copy">
              <strong>Xlearning Hub</strong>
              <small>Complete dev guide</small>
            </span>
          </button>
        </nav>
        <div className="header-badge">Complete Dev Learning Hub</div>
        <h1>
          Learn to <span>Build Full-Stack Apps</span>
          <br />
          from machine setup to production
        </h1>
        <p>
          A structured path for React, Django, Git, GitHub, Docker,
          deployment, hosting, Redis, and auth with commands for every machine.
        </p>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-number">{topics.length}</span>
            <span className="stat-label">Topics</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalSections}</span>
            <span className="stat-label">Sections</span>
          </div>
          <div className="stat">
            <span className="stat-number">{categories.length - 1}</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalCommandCenters}</span>
            <span className="stat-label">Command centers</span>
          </div>
        </div>

        <div className="header-topic-nav" aria-label="Topic navigation">
          <div className="sidebar-title">Topics</div>
          {topics.map((topic, idx) => (
            <button
              key={topic.id}
              className="header-topic-btn"
              onClick={() => handleTopicClick(topic)}
            >
              <span className="section-number">{String(idx + 1).padStart(2, '0')}</span>
              <span className="section-emoji">{topic.icon}</span>
              <span>{topic.name}</span>
            </button>
          ))}
        </div>
      </header>}

      {/* ===== MAIN CONTENT ===== */}
      <main className={`main-content ${selectedTopic ? 'reader-content' : ''}`}>
        {!selectedTopic ? (
          <>
            <section className="opening-panel" aria-label="Opening summary">
              <div>
                <span className="eyebrow">Learning workspace</span>
                <h2>Build the full-stack path from one dashboard</h2>
                <p>
                  Search a topic, open the next lesson, or jump straight into
                  commands when you are shipping.
                </p>
              </div>
              <button
                className="primary-action"
                onClick={() => handleTopicClick(featuredTopic)}
              >
                Start workflow
              </button>
            </section>

            <section className="dashboard-strip" aria-label="Dashboard summary">
              <div className="metric-tile">
                <span className="metric-label">Active catalog</span>
                <strong>{topics.length}</strong>
                <small>topics mapped</small>
              </div>
              <div className="metric-tile">
                <span className="metric-label">Learning depth</span>
                <strong>{totalSections}</strong>
                <small>sections indexed</small>
              </div>
              <div className="metric-tile">
                <span className="metric-label">Command ready</span>
                <strong>{totalCommandCenters}</strong>
                <small>tool references</small>
              </div>
              <div className="metric-tile highlighted">
                <span className="metric-label">Current view</span>
                <strong>{activeCategoryCount}</strong>
                <small>{activeCategory.toLowerCase()} items</small>
              </div>
            </section>

            <section className="path-section" aria-label="Learning path">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Recommended order</span>
                  <h2>Start here, finish with a deployed app</h2>
                </div>
                <span className="path-count">{topics.length} topics</span>
              </div>
              <div className="path-rail">
                {topics.map((topic, idx) => (
                  <button
                    key={topic.id}
                    className="path-step"
                    onClick={() => handleTopicClick(topic)}
                  >
                    <span className="path-index">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="path-icon">{topic.icon}</span>
                    <span className="path-name">{topic.name}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Controls */}
            <div className="controls">
              <div className="search-wrapper">
                <span className="search-icon">⌕</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search topics, commands, concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="filter-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Grid */}
            <div className="topic-grid">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, idx) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    index={idx}
                    onClick={() => handleTopicClick(topic)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <span className="empty-state-icon">🔍</span>
                  <p>No topics found for "{searchQuery}"</p>
                </div>
              )}
            </div>

            <section className="support-panel" aria-label="Support this course">
              <div className="support-copy">
                <span className="support-pill">Hey!</span>
                <h2>Want to support this course?</h2>
                <p>
                  If Xlearning Hub helped you, you can scan the UPI QR and pay any
                  amount.
                </p>
              </div>
              <div className="upi-card" aria-label="UPI QR code">
                <div className="qr-frame">
                  <img src="/upi-qr.png" alt="UPI QR code for Indresh Mishra" />
                </div>
                <strong>Indresh Mishra</strong>
                <span>Scan to pay with any UPI app</span>
              </div>
            </section>
          </>
        ) : (
          /* Detail View */
          <div className="lesson-shell">
            <aside className="lesson-sidebar">
              <button className="site-brand sidebar-site-brand" onClick={handleBack}>
                <span className="brand-mark">XL</span>
                <span className="brand-copy">
                  <strong>Xlearning Hub</strong>
                  <small>Learning dashboard</small>
                </span>
              </button>

              <button className="lesson-brand" onClick={handleBack}>
                <span className="lesson-brand-icon">{selectedTopic.icon}</span>
                <span>
                  <strong>{selectedTopic.name} Learn</strong>
                  <small>{selectedTopic.desc}</small>
                </span>
              </button>

              <div className="sidebar-progress" aria-label="Learning progress">
                <div className="progress-label">
                  <span>Progress</span>
                  <span>
                    {selectedSectionIndex + 1}/{selectedTopic.sections.length}
                  </span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="progress-percent">{progressPercent}% complete</span>
              </div>

              <div className="lesson-search">
                <span className="search-icon">⌕</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search lessons..."
                  value={sectionQuery}
                  onChange={(e) => setSectionQuery(e.target.value)}
                />
              </div>

              <div className="sections-sidebar">
                {filteredSections.map((section) => {
                  const idx = selectedTopic.sections.indexOf(section);
                  return (
                    <button
                      key={idx}
                      className={`section-btn ${
                        selectedSection === section ? 'active' : ''
                      }`}
                      onClick={() => setSelectedSection(section)}
                    >
                      <span className="section-number">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="section-emoji">{sectionIcon(section.phase)}</span>
                      <span className="section-text">
                        <span className="section-btn-title">{section.title}</span>
                      </span>
                    </button>
                  );
                })}
                {filteredSections.length === 0 && (
                  <div className="section-empty">No lessons found.</div>
                )}
              </div>
            </aside>

            <section className="lesson-workspace">
              <div className="lesson-topbar">
                <button className="menu-button" onClick={handleBack} aria-label="Back">
                  ←
                </button>
                <div className="topbar-title">
                  <span>{selectedTopic.icon}</span>
                  <strong>{selectedSection?.title}</strong>
                </div>
                <span className="lesson-counter">
                  {selectedSectionIndex + 1} / {selectedTopic.sections.length}
                </span>
              </div>

              <div className="lesson-scroll">
                <div className="detail-header">
                  <span className="detail-topic-icon">{selectedTopic.icon}</span>
                  <div>
                    <h2 className="detail-topic-name">{selectedSection?.title}</h2>
                    <p className="detail-desc">
                      Chapter {selectedSectionIndex + 1} of {selectedTopic.sections.length}
                    </p>
                  </div>
                </div>

                {selectedSection ? (
                  <>
                    <div className="lesson-nav top">
                      <button
                        onClick={() => handleSectionStep(-1)}
                        disabled={selectedSectionIndex <= 0}
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() => handleSectionStep(1)}
                        disabled={
                          selectedSectionIndex >= selectedTopic.sections.length - 1
                        }
                      >
                        Next →
                      </button>
                    </div>
                    <div className="content-area">
                      <ContentRenderer content={selectedSection.content} />
                    </div>
                    <div className="lesson-nav bottom">
                      <button
                        onClick={() => handleSectionStep(-1)}
                        disabled={selectedSectionIndex <= 0}
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() => handleSectionStep(1)}
                        disabled={
                          selectedSectionIndex >= selectedTopic.sections.length - 1
                        }
                      >
                        Next lesson →
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="content-placeholder">
                    <span className="content-placeholder-icon">👈</span>
                    <p>Select a section to start learning</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      {!selectedTopic && <footer className="footer">
        <p>Dev Learning Hub · Built with React · Learn everything, ship anything 🚀</p>
      </footer>}
    </div>
  );
}

function sectionIcon(phase) {
  switch (phase) {
    case 'Start':
      return '🚀';
    case 'Foundation':
      return '🧱';
    case 'Build':
      return '🛠️';
    case 'Production':
      return '📦';
    case 'Mastery':
      return '✨';
    default:
      return '📘';
  }
}

/* ============================================
   Topic Card Component
   ============================================ */
function TopicCard({ topic, index, onClick }) {
  const hasCommands = topic.sections.some((section) =>
    section.title.includes('Command Center') || section.title.includes('Commands')
  );
  const phaseCount = new Set(topic.sections.map((section) => section.phase).filter(Boolean)).size;

  return (
    <div
      className="topic-card"
      style={{ '--card-color': topic.color }}
      onClick={onClick}
    >
      <div className="card-topline">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{topic.category}</span>
      </div>
      <span className="card-icon">{topic.icon}</span>
      <div className="card-header">
        <span className="card-name">{topic.name}</span>
      </div>
      <p className="card-desc">{topic.desc}</p>
      <div className="card-footer">
        <span>{topic.sections.length} lessons</span>
        {hasCommands && <span>Commands</span>}
      </div>
      <div className="card-action">
        <span>Open topic</span>
        <span aria-hidden="true">→</span>
      </div>
    </div>
  );
}

export default App;
