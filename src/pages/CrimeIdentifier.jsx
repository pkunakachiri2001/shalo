import { useState } from 'react';

const crimeDatabase = [
  {
    keywords: ['hacked', 'hack', 'unauthorized access', 'account compromised', 'password stolen'],
    crime: 'Unauthorized Access / Hacking',
    section: 'IT Act Section 66',
    severity: 'High',
    description: 'Someone has accessed your computer system, account, or device without your permission.',
    actions: [
      'Immediately change all passwords',
      'Enable two-factor authentication',
      'Check for unauthorized transactions or activities',
      'Save all evidence (emails, screenshots, logs)',
      'File complaint at cybercrime.gov.in',
      'Report to local cyber cell',
      'Inform your bank if financial accounts affected'
    ],
    penalty: 'Imprisonment up to 3 years and/or fine up to ₹5 lakh'
  },
  {
    keywords: ['bully', 'harass', 'threaten', 'abuse online', 'trolling', 'offensive message'],
    crime: 'Cyberbullying / Online Harassment',
    section: 'IT Act Section 66E, 67 | IPC Section 354D, 509',
    severity: 'Medium-High',
    description: 'You are being threatened, harassed, or bullied through digital platforms.',
    actions: [
      'DO NOT respond to the bully',
      'Take screenshots with dates and timestamps',
      'Block the person on all platforms',
      'Report to the platform (Instagram, Facebook, etc.)',
      'File complaint with National Cyber Crime Portal',
      'If threats are serious, file FIR at police station',
      'Seek support from counselor or trusted adult'
    ],
    penalty: 'Imprisonment up to 3 years and/or fine'
  },
  {
    keywords: ['phishing', 'fake email', 'fake sms', 'fake call', 'asking for otp', 'asking for password', 'lottery scam'],
    crime: 'Phishing / Online Fraud Attempt',
    section: 'IT Act Section 66C, 66D | IPC Section 420',
    severity: 'High',
    description: 'Someone is trying to steal your personal information through deceptive messages or calls.',
    actions: [
      'DO NOT share any information (OTP, password, CVV)',
      'DO NOT click on suspicious links',
      'Report the email/SMS as spam',
      'Forward phishing SMS to 1909 (India)',
      'Report to your bank if bank-related',
      'File complaint on cybercrime.gov.in',
      'Warn others about the scam'
    ],
    penalty: 'Imprisonment up to 3 years and/or fine up to ₹1 lakh'
  },
  {
    keywords: ['identity theft', 'fake profile', 'impersonation', 'someone using my photo', 'fake account'],
    crime: 'Identity Theft / Impersonation',
    section: 'IT Act Section 66C, 66D',
    severity: 'High',
    description: 'Someone is using your identity, photos, or personal information without permission.',
    actions: [
      'Report the fake account to the platform',
      'Request removal of your photos/information',
      'Take screenshots of fake profiles',
      'File complaint at cybercrime.gov.in',
      'Consider filing FIR if misused for fraud',
      'Alert your contacts about the impersonation',
      'Change privacy settings on your accounts'
    ],
    penalty: 'Imprisonment up to 3 years and/or fine up to ₹1 lakh'
  },
  {
    keywords: ['leaked photo', 'revenge porn', 'intimate images', 'private video shared', 'morphed photo'],
    crime: 'Non-consensual Sharing of Intimate Images',
    section: 'IT Act Section 66E, 67, 67A | IPC Section 354C',
    severity: 'Very High',
    description: 'Private or intimate images/videos shared without your consent.',
    actions: [
      'Document everything (screenshots, URLs)',
      'Report to platform immediately for removal',
      'File FIR at nearest police station - THIS IS SERIOUS',
      'Contact cyber cell for urgent removal',
      'Seek legal counsel',
      'Contact NGOs for support (POSH, cyber helplines)',
      'Do not blame yourself - this is a CRIME'
    ],
    penalty: 'Imprisonment up to 3-7 years and fine'
  },
  {
    keywords: ['financial fraud', 'money stolen', 'unauthorized transaction', 'card cloned', 'online payment scam'],
    crime: 'Online Financial Fraud',
    section: 'IT Act Section 66C, 66D | IPC Section 420',
    severity: 'Very High',
    description: 'Unauthorized financial transactions or theft of money through digital means.',
    actions: [
      'Call your bank IMMEDIATELY - block cards/accounts',
      'File complaint at cybercrime.gov.in within 24 hours',
      'Call national cyber fraud helpline: 1930',
      'File FIR at police station',
      'Collect transaction details, screenshots',
      'Request bank for transaction reversal',
      'Place fraud alert on credit reports'
    ],
    penalty: 'Imprisonment up to 3 years and/or fine'
  },
  {
    keywords: ['stalking', 'following online', 'tracking location', 'monitoring activities', 'watching me'],
    crime: 'Cyberstalking',
    section: 'IPC Section 354D | IT Act Section 66',
    severity: 'High',
    description: 'Someone is persistently monitoring, following, or tracking you online.',
    actions: [
      'Block the person immediately',
      'Change all privacy settings to most restrictive',
      'Turn off location sharing',
      'Document all stalking incidents',
      'File complaint at cybercrime portal',
      'Consider filing FIR if you feel unsafe',
      'Inform trusted friends/family'
    ],
    penalty: 'Imprisonment up to 5 years and fine'
  },
  {
    keywords: ['data breach', 'leaked data', 'privacy violation', 'personal information leaked', 'data stolen'],
    crime: 'Data Breach / Privacy Violation',
    section: 'IT Act Section 43A, 72 | DPDP Act 2023',
    severity: 'Medium-High',
    description: 'Your personal data has been compromised or leaked.',
    actions: [
      'Contact the company/organization responsible',
      'Change passwords for affected accounts',
      'Enable two-factor authentication',
      'Monitor accounts for suspicious activity',
      'File complaint with Data Protection Authority',
      'Consider legal action for compensation',
      'Alert credit bureaus if financial data leaked'
    ],
    penalty: 'Compensation up to ₹5 crore depending on damages'
  }
];

export default function CrimeIdentifier() {
  const [situation, setSituation] = useState('');
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const analyzeSituation = () => {
    if (!situation.trim()) {
      alert('Please describe your situation first.');
      return;
    }

    setAnalyzing(true);

    // Simulate AI analysis delay
    setTimeout(() => {
      const lowerSituation = situation.toLowerCase();
      
      // Find matching crime based on keywords
      const match = crimeDatabase.find(crime =>
        crime.keywords.some(keyword => lowerSituation.includes(keyword))
      );

      if (match) {
        setResult(match);
      } else {
        setResult({
          crime: 'Unable to Determine / General Cyber Issue',
          section: 'IT Act 2000 (Various sections)',
          severity: 'Unknown',
          description: 'Based on your description, we cannot determine a specific crime category. However, this might still be illegal.',
          actions: [
            'Contact National Cyber Crime Helpline: 1930',
            'Visit cybercrime.gov.in for guidance',
            'Consult with a cyber law expert',
            'File a general complaint at your local cyber cell',
            'Save all evidence related to the incident'
          ],
          penalty: 'Varies based on actual offense'
        });
      }

      setAnalyzing(false);
    }, 1500);
  };

  const handleReset = () => {
    setSituation('');
    setResult(null);
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Very High': return '#dc2626';
      case 'High': return '#ea580c';
      case 'Medium-High': return '#f59e0b';
      case 'Medium': return '#eab308';
      default: return '#6b7280';
    }
  };

  return (
    <div className="page identifier-page">
      <div className="page-header">
        <h1>🔍 Crime Identifier</h1>
        <p>Describe what happened and get instant legal guidance</p>
      </div>

      <div className="identifier-container">
        {!result ? (
          <div className="input-section">
            <div className="info-card">
              <h3>🛡️ How it works:</h3>
              <ol>
                <li>Describe your situation in detail</li>
                <li>Our system analyzes and identifies potential crimes</li>
                <li>Get legal classification and step-by-step guidance</li>
                <li>Learn what actions to take immediately</li>
              </ol>
              <p className="privacy-note">🔒 Your privacy is protected. This analysis is done locally.</p>
            </div>

            <div className="situation-input">
              <label htmlFor="situation">
                <strong>Describe what happened:</strong>
              </label>
              <textarea
                id="situation"
                rows="8"
                placeholder="Example: Someone hacked my Instagram account and is sending messages to my friends... OR I received a call claiming to be from my bank asking for my credit card CVV..."
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
              />
            </div>

            <button 
              className="btn-primary btn-large"
              onClick={analyzeSituation}
              disabled={analyzing}
            >
              {analyzing ? 'Analyzing...' : 'Analyze Situation →'}
            </button>

            <div className="examples-section">
              <h4>Example situations you can describe:</h4>
              <div className="example-tags">
                <span onClick={() => setSituation('Someone created a fake profile using my photos and is messaging people pretending to be me')}>Fake Profile</span>
                <span onClick={() => setSituation('I received an SMS saying I won a lottery and need to pay processing fees')}>Lottery Scam</span>
                <span onClick={() => setSituation('Someone is sending me threatening messages on WhatsApp and social media')}>Online Threats</span>
                <span onClick={() => setSituation('My email account was hacked and someone changed my password')}>Account Hacked</span>
                <span onClick={() => setSituation('Unauthorized transactions appeared in my bank account')}>Financial Fraud</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="result-section">
            <div className="result-header">
              <div className="result-badge" style={{ borderColor: getSeverityColor(result.severity) }}>
                <span className="severity-label">Severity</span>
                <span className="severity-value" style={{ color: getSeverityColor(result.severity) }}>
                  {result.severity}
                </span>
              </div>
              <h2 className="crime-name">{result.crime}</h2>
              <div className="legal-section">
                <strong>Legal Provision:</strong> {result.section}
              </div>
            </div>

            <div className="result-description">
              <h3>📋 What This Means:</h3>
              <p>{result.description}</p>
            </div>

            <div className="result-penalty">
              <h3>⚖️ Legal Penalty:</h3>
              <p className="penalty-text">{result.penalty}</p>
            </div>

            <div className="result-actions">
              <h3>🎯 Immediate Actions You Should Take:</h3>
              <ol className="action-list">
                {result.actions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ol>
            </div>

            <div className="important-contacts">
              <h3>📞 Important Contacts:</h3>
              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">🚨</div>
                  <div className="contact-info">
                    <strong>Cyber Crime Helpline</strong>
                    <a href="tel:1930">1930</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">💻</div>
                  <div className="contact-info">
                    <strong>National Portal</strong>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">👮</div>
                  <div className="contact-info">
                    <strong>Police Emergency</strong>
                    <a href="tel:100">100</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">👩</div>
                  <div className="contact-info">
                    <strong>Women Helpline</strong>
                    <a href="tel:181">181</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-actions-buttons">
              <button className="btn-secondary" onClick={handleReset}>
                ← Analyze Another Situation
              </button>
              <button className="btn-danger">
                🚨 Report This Incident
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
