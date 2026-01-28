const newsData = [
  {
    id: 1,
    category: 'Cyber Crime Alert',
    title: 'UPI Fraud Cases Surge 400% in January 2026',
    date: '2026-01-23',
    summary: 'New sophisticated UPI scams targeting senior citizens and rural users reported across India, with losses exceeding ₹1200 crore.',
    content: 'The National Cyber Crime Reporting Portal has recorded over 45,000 UPI fraud cases in January 2026 alone. Scammers are using fake customer care numbers, QR code manipulation, and screen-sharing apps to steal money. NPCI has issued urgent advisories asking users to never share OTPs or accept screen-sharing requests.',
    tags: ['UPI', 'Financial Fraud', 'Urgent Alert'],
    importance: 'critical'
  },
  {
    id: 2,
    category: 'Law Update',
    title: 'Digital India Act 2026 Draft Released for Public Consultation',
    date: '2026-01-20',
    summary: 'Government unveils comprehensive legislation to replace IT Act 2000, focusing on AI regulation and platform accountability.',
    content: 'The Ministry of Electronics and IT has released the draft Digital India Act 2026, proposing strict regulations for AI systems, mandatory KYC for social media, and holding platforms liable for illegal content. The draft includes provisions for algorithmic transparency, with penalties up to ₹500 crore or 5% of global turnover. Public comments are invited until February 28, 2026.',
    tags: ['Digital India Act', 'AI Regulation', 'Policy Update'],
    importance: 'high'
  },
  {
    id: 3,
    category: 'Court Verdict',
    title: 'Delhi HC: Workplace Cyber Harassment is Criminal Intimidation',
    date: '2026-01-18',
    summary: 'Delhi High Court expands scope of Section 506 IPC to include digital harassment in professional settings.',
    content: 'In a landmark judgment, the Delhi High Court held that persistent threatening messages on professional platforms like LinkedIn and work emails constitute criminal intimidation under Section 506 IPC. The court emphasized that digital workspace harassment is as serious as physical workplace harassment and ordered immediate action against perpetrators.',
    tags: ['Delhi HC', 'Workplace Safety', 'Cyber Harassment'],
    importance: 'high'
  },
  {
    id: 4,
    category: 'Technology',
    title: 'India Launches National Blockchain Framework for Legal Records',
    date: '2026-01-15',
    summary: 'Government introduces blockchain-based system for tamper-proof storage of legal documents and court records.',
    content: 'The Department of Justice has launched the National Legal Blockchain Framework (NLBF), enabling tamper-proof storage of judgments, property records, and legal contracts. All High Courts will integrate with NLBF by June 2026. This move is expected to reduce document forgery cases by 90% and speed up legal verification processes.',
    tags: ['Blockchain', 'Legal Tech', 'Innovation'],
    importance: 'medium'
  },
  {
    id: 5,
    category: 'International',
    title: 'Zimbabwe-India Cyber Security Cooperation Agreement Signed',
    date: '2026-01-12',
    summary: 'Both nations agree to share intelligence on cyber threats and jointly combat cross-border cyber crimes.',
    content: 'Zimbabwe and India have signed a comprehensive Cyber Security Cooperation Agreement during the African Union Summit. The agreement includes joint training programs for cyber police, information sharing on cyber criminals, and mutual legal assistance in prosecuting cyber crimes. Student exchange programs for cyber law studies are also planned.',
    tags: ['Zimbabwe', 'India', 'International Cooperation'],
    importance: 'medium'
  },
  {
    id: 6,
    category: 'Cyber Crime Alert',
    title: 'AI Deepfake Voice Scams Target Banking Customers',
    date: '2026-01-10',
    summary: 'Criminals using AI-cloned voices of bank managers and family members to trick victims into transferring money.',
    content: 'A new wave of sophisticated scams uses AI-generated voice clones to impersonate bank officials, CEOs, and family members. Over 2,500 cases reported with average loss of ₹8 lakh per victim. Cybersecurity experts recommend using video calls for verification and establishing family code words for emergencies.',
    tags: ['AI Crime', 'Deepfake', 'Banking Fraud'],
    importance: 'critical'
  },
  {
    id: 7,
    category: 'Statistics',
    title: 'Cyber Crime Reporting Increases 85% After 1930 Helpline Upgrade',
    date: '2026-01-08',
    summary: 'Enhanced helpline with multilingual support and AI chatbot sees massive increase in citizen reporting.',
    content: 'The upgraded 1930 Cyber Crime Helpline, now available in 22 Indian languages with 24/7 AI assistance, has seen an 85% increase in reporting. The helpline handled 1.2 lakh calls in the first week of January 2026. Average response time reduced from 45 minutes to 8 minutes. Recovery rate improved to 22%.',
    tags: ['Statistics', '1930 Helpline', 'Government Initiative'],
    importance: 'medium'
  },
  {
    id: 8,
    category: 'Case Study',
    title: 'Pune Student Helps Bust ₹2000 Crore Online Gaming Scam',
    date: '2026-01-05',
    summary: 'Law student\'s research exposes illegal betting app network operating across 8 states.',
    content: 'A BBALLB student from Vishwakarma University Pune assisted cyber police in exposing a massive online gaming fraud. The student\'s semester project on gaming app regulations led to identification of 47 illegal apps that were siphoning money to offshore accounts. Police arrested 89 people and froze ₹450 crore in assets. The student has been commended by Maharashtra Cyber.',
    tags: ['Pune', 'Student Hero', 'Gaming Fraud'],
    importance: 'high'
  },
  {
    id: 9,
    category: 'Legal Education',
    title: 'New Specialization: Cyber Law & Digital Forensics in Law Schools',
    date: '2026-01-03',
    summary: 'Bar Council of India approves dedicated cyber law specialization for BALLB and BBALLB programs.',
    content: 'The Bar Council of India has approved a specialized stream in Cyber Law & Digital Forensics for law students starting academic year 2026-27. The curriculum includes coding basics, digital evidence handling, blockchain law, and AI ethics. Leading universities including Vishwakarma University Pune will offer this specialization.',
    tags: ['Legal Education', 'Career', 'BCI Update'],
    importance: 'medium'
  },
  {
    id: 10,
    category: 'Technology',
    title: 'WhatsApp Introduces Legal Evidence Mode for Court Cases',
    date: '2026-01-01',
    summary: 'New feature allows users to capture court-admissible screenshots with cryptographic verification.',
    content: 'WhatsApp has launched "Evidence Mode" in India, enabling users to capture legally admissible screenshots of chats with blockchain-based verification. This addresses the long-standing issue of WhatsApp evidence being questioned in courts. The feature includes timestamp verification, metadata preservation, and tamper-detection. Law enforcement agencies have welcomed this development.',
    tags: ['WhatsApp', 'Digital Evidence', 'Legal Tech'],
    importance: 'high'
  }
];

export default function News() {
  const getImportanceBadge = (importance) => {
    const badges = {
      critical: { color: '#dc2626', label: '🚨 Critical' },
      high: { color: '#ea580c', label: '⚠️ Important' },
      medium: { color: '#eab308', label: '📌 Notable' },
      low: { color: '#059669', label: '💡 Info' }
    };
    return badges[importance] || badges.medium;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Law Update': '#3b82f6',
      'Cyber Crime Alert': '#dc2626',
      'Court Verdict': '#7c3aed',
      'Statistics': '#0891b2',
      'Technology': '#059669',
      'Legal Education': '#d97706',
      'International': '#ec4899',
      'Case Study': '#8b5cf6'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="page news-page">
      <div className="page-header">
        <h1>📰 Legal News & Updates</h1>
        <p>Stay informed about the latest in cyber law, crimes, and legal developments</p>
      </div>

      <div className="news-grid">
        {newsData.map(news => {
          const badge = getImportanceBadge(news.importance);
          return (
            <article key={news.id} className="news-card">
              <div className="news-header">
                <span 
                  className="news-category"
                  style={{ backgroundColor: getCategoryColor(news.category) }}
                >
                  {news.category}
                </span>
                <span 
                  className="news-importance"
                  style={{ color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
              
              <h2 className="news-title">{news.title}</h2>
              
              <p className="news-date">📅 {new Date(news.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              
              <p className="news-summary">{news.summary}</p>
              
              <div className="news-content">
                <p>{news.content}</p>
              </div>
              
              <div className="news-tags">
                {news.tags.map((tag, index) => (
                  <span key={index} className="news-tag">#{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="news-sources">
        <h3>📚 Stay Updated - Follow These Sources:</h3>
        <div className="sources-grid">
          <div className="source-item">
            <strong>🌐 National Cyber Crime Portal</strong>
            <p>cybercrime.gov.in - Official alerts and advisories</p>
          </div>
          <div className="source-item">
            <strong>⚖️ Supreme Court of India</strong>
            <p>sci.gov.in - Latest judgments and verdicts</p>
          </div>
          <div className="source-item">
            <strong>💻 CERT-In</strong>
            <p>cert-in.org.in - Cyber security alerts</p>
          </div>
          <div className="source-item">
            <strong>📱 Social Media</strong>
            <p>Follow @IndianCyberCops on Twitter</p>
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <h3>🔔 Want Daily Updates?</h3>
        <p>In a full version, you'd be able to subscribe for push notifications about important legal updates!</p>
      </div>
    </div>
  );
}
