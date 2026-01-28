import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your <span className="gradient-text">Legal Shield</span> in the Digital World
          </h1>
          <p className="hero-subtitle">
            Master cyber law, protect your rights, and navigate legal challenges with confidence
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Legal Topics</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Access</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <h2 className="section-title">Everything You Need</h2>
        
        <div className="feature-grid">
          <div className="feature-card card-primary">
            <div className="feature-icon">📚</div>
            <h3>Cyber Law Academy</h3>
            <p>Interactive lessons covering IT Act 2000, cyber crimes, digital rights, and international comparisons (India & Zimbabwe)</p>
            <ul className="feature-list">
              <li>✓ Video tutorials & case studies</li>
              <li>✓ Gamified quizzes</li>
              <li>✓ Earn certificates</li>
            </ul>
          </div>

          <div className="feature-card card-secondary">
            <div className="feature-icon">🔍</div>
            <h3>Crime Identifier</h3>
            <p>AI-powered tool to identify if something is a cyber crime and get instant legal guidance</p>
            <ul className="feature-list">
              <li>✓ Situation analyzer</li>
              <li>✓ Legal classification</li>
              <li>✓ Action steps</li>
            </ul>
          </div>

          <div className="feature-card card-accent">
            <div className="feature-icon">🚨</div>
            <h3>Emergency Tools</h3>
            <p>Quick access to incident reporting, complaint templates, and emergency contacts</p>
            <ul className="feature-list">
              <li>✓ One-tap reporting</li>
              <li>✓ Evidence saver</li>
              <li>✓ Direct helpline access</li>
            </ul>
          </div>

          <div className="feature-card card-success">
            <div className="feature-icon">📰</div>
            <h3>Legal News & Updates</h3>
            <p>Stay informed about latest cyber crimes, new laws, court verdicts, and legal trends</p>
            <ul className="feature-list">
              <li>✓ Daily updates</li>
              <li>✓ Simplified summaries</li>
              <li>✓ Expert analysis</li>
            </ul>
          </div>

          <div className="feature-card card-warning">
            <div className="feature-icon">🎓</div>
            <h3>Student Career Hub</h3>
            <p>Resources for law students: internships, career paths in legal tech, and networking</p>
            <ul className="feature-list">
              <li>✓ Internship listings</li>
              <li>✓ Career guidance</li>
              <li>✓ Interview prep</li>
            </ul>
          </div>

          <div className="feature-card card-info">
            <div className="feature-icon">💬</div>
            <h3>Community Support</h3>
            <p>Connect with peers, share experiences, and get expert advice in a safe space</p>
            <ul className="feature-list">
              <li>✓ Anonymous sharing</li>
              <li>✓ Expert Q&A</li>
              <li>✓ Success stories</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/academy" className="action-btn btn-primary">
            <span className="btn-icon">🎯</span>
            <span>Start Learning</span>
          </Link>
          <Link to="/emergency" className="action-btn btn-danger">
            <span className="btn-icon">🚨</span>
            <span>Report Incident</span>
          </Link>
          <Link to="/identifier" className="action-btn btn-info">
            <span className="btn-icon">❓</span>
            <span>Identify Crime</span>
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="home-footer">
        <div className="footer-content">
          <p className="footer-tagline">
            <strong>Built for Shalom Chikaka</strong> 🇿🇼
          </p>
          <p className="footer-text">
            Empowering law students and citizens with knowledge and tools to navigate cyber law
          </p>
          <p className="footer-legal">
            Vishwakarma University Pune | BBALLB | Law & Technology Project
          </p>
        </div>
      </footer>
    </div>
  );
}
