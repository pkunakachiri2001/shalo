import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: '📚',
      title: 'Cyber Law Academy',
      description: 'Interactive lessons covering IT Act 2000, cyber crimes, digital rights, and international comparisons (India & Zimbabwe).',
      items: ['Video tutorials & case studies', 'Gamified quizzes', 'Earn certificates'],
      className: 'card-primary',
      path: '/academy'
    },
    {
      icon: '🔍',
      title: 'Crime Identifier',
      description: 'AI-powered tool to identify if something is a cyber crime and get instant legal guidance.',
      items: ['Situation analyzer', 'Legal classification', 'Action steps'],
      className: 'card-secondary',
      path: '/identifier'
    },
    {
      icon: '🚨',
      title: 'Emergency Tools',
      description: 'Quick access to incident reporting, complaint templates, and emergency contacts.',
      items: ['One-tap reporting', 'Evidence saver', 'Direct helpline access'],
      className: 'card-accent',
      path: '/emergency'
    },
    {
      icon: '📰',
      title: 'Legal News & Updates',
      description: 'Stay informed about latest cyber crimes, new laws, court verdicts, and legal trends.',
      items: ['Daily updates', 'Simplified summaries', 'Expert analysis'],
      className: 'card-success',
      path: '/news'
    },
    {
      icon: '🎓',
      title: 'Student Career Hub',
      description: 'Resources for law students: internships, career paths in legal tech, and networking.',
      items: ['Internship listings', 'Career guidance', 'Interview prep'],
      className: 'card-warning',
      path: '/career'
    },
    {
      icon: '💬',
      title: 'Community & Resources',
      description: 'Connect with peers, explore resource libraries, and get expert guidance in a safe space.',
      items: ['Resource library', 'Expert Q&A', 'Success stories'],
      className: 'card-info',
      path: '/resources'
    }
  ];

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
          {features.map((feature) => (
            <Link key={feature.title} to={feature.path} className="feature-card-link">
              <div className={`feature-card ${feature.className}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
                <span className="feature-cta">Explore →</span>
              </div>
            </Link>
          ))}
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
