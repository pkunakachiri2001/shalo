const careerData = {
  internships: [
    {
      title: 'Legal Research Intern - Cyber Law',
      company: 'Major Law Firm',
      location: 'Mumbai / Pune',
      duration: '3-6 months',
      stipend: '₹10,000 - ₹15,000/month',
      description: 'Research on cyber crime cases, IT Act provisions, and international cyber law comparisons.',
      skills: ['Legal Research', 'IT Act 2000', 'Case Analysis']
    },
    {
      title: 'Legal Tech Intern',
      company: 'LegalTech Startup',
      location: 'Bangalore / Remote',
      duration: '6 months',
      stipend: '₹15,000 - ₹20,000/month',
      description: 'Work on AI-powered legal research tools, document automation, and legal databases.',
      skills: ['Legal Knowledge', 'Tech Interest', 'Problem Solving']
    },
    {
      title: 'Cyber Crime Investigation Support',
      company: 'Government Cyber Cell',
      location: 'Various Cities',
      duration: '6 months',
      stipend: 'Unpaid / Certificate',
      description: 'Assist in cyber crime investigations, evidence documentation, and legal compliance.',
      skills: ['Criminal Law', 'Cyber Security Basics', 'Documentation']
    },
    {
      title: 'Compliance Intern - Data Protection',
      company: 'Tech Company',
      location: 'Remote',
      duration: '3 months',
      stipend: '₹12,000 - ₹18,000/month',
      description: 'Help ensure DPDP Act compliance, privacy policy drafting, and data audit support.',
      skills: ['Privacy Law', 'DPDP Act', 'Policy Writing']
    }
  ],
  careerPaths: [
    {
      title: 'Cyber Law Specialist',
      description: 'Specialize in cyber crime litigation, representing clients in hacking, data breach, and online fraud cases.',
      salary: '₹6-15 LPA',
      growth: 'Very High',
      skills: ['IT Act mastery', 'Litigation skills', 'Technical knowledge']
    },
    {
      title: 'Legal Tech Consultant',
      description: 'Bridge law and technology - help law firms adopt legal tech solutions, automate processes.',
      salary: '₹8-20 LPA',
      growth: 'Excellent',
      skills: ['Legal knowledge', 'Technology skills', 'Business acumen']
    },
    {
      title: 'Data Protection Officer (DPO)',
      description: 'Ensure company compliance with data protection laws, manage privacy policies and data audits.',
      salary: '₹10-25 LPA',
      growth: 'Rapidly Growing',
      skills: ['DPDP Act', 'GDPR', 'Risk management']
    },
    {
      title: 'Cyber Crime Investigator',
      description: 'Work with law enforcement to investigate and prosecute cyber crimes.',
      salary: '₹5-12 LPA',
      growth: 'Stable',
      skills: ['Criminal law', 'Digital forensics', 'Investigation']
    },
    {
      title: 'IP & Technology Lawyer',
      description: 'Handle intellectual property rights in digital space - patents, copyrights, trademarks.',
      salary: '₹7-18 LPA',
      growth: 'High',
      skills: ['IP law', 'Technology understanding', 'Litigation']
    },
    {
      title: 'Legal AI Developer',
      description: 'Develop AI tools for legal research, contract analysis, and case prediction.',
      salary: '₹12-30 LPA',
      growth: 'Explosive',
      skills: ['Law', 'Programming', 'AI/ML basics']
    }
  ],
  resources: [
    {
      category: 'Certifications',
      items: [
        'Certified Cyber Law Professional (CCLP)',
        'Data Protection Officer Certification',
        'Certified Information Privacy Professional (CIPP)',
        'SANS Cyber Law courses'
      ]
    },
    {
      category: 'Online Courses',
      items: [
        'Coursera - Cyber Law & Ethics',
        'NPTEL - Cyber Security & Law',
        'Udemy - IT Act 2000 Complete Guide',
        'edX - Data Privacy Fundamentals'
      ]
    },
    {
      category: 'Books',
      items: [
        '"Cyber Law in India" by Karnika Seth',
        '"Information Technology Act 2000" by Vakul Sharma',
        '"Privacy 3.0" by Justice BN Srikrishna',
        '"Cyber Crime & Security" by Nina Godbole'
      ]
    },
    {
      category: 'Organizations to Join',
      items: [
        'Cyber Law Association of India',
        'Data Security Council of India (DSCI)',
        'International Association of Privacy Professionals (IAPP)',
        'Student chapters of Bar Councils'
      ]
    }
  ],
  interviewTips: [
    {
      question: 'What are the key sections of IT Act 2000?',
      answer: 'Section 43 (penalty for damage), 66 (hacking), 66C (identity theft), 66D (cheating by personation), 66E (privacy violation), 67 (obscene content), and more.'
    },
    {
      question: 'Difference between DPDP Act and GDPR?',
      answer: 'DPDP Act covers only digital personal data while GDPR covers all personal data. GDPR has stricter consent requirements. Penalties differ - GDPR up to 4% revenue, DPDP up to ₹250 crore.'
    },
    {
      question: 'What is the jurisdiction in cyber crimes?',
      answer: 'Section 75 of IT Act extends to offenses committed outside India if involving Indian computer systems. Also where loss occurs or victim is located.'
    },
    {
      question: 'How is digital evidence handled in court?',
      answer: 'Section 65B of Evidence Act allows electronic evidence if authenticated with certificate. Must show device was working properly, no tampering, and proper chain of custody.'
    }
  ]
};

export default function Career() {
  return (
    <div className="page career-page">
      <div className="page-header">
        <h1>🎓 Student Career Hub</h1>
        <p>Build your future at the intersection of law and technology</p>
      </div>

      {/* Internships Section */}
      <section className="career-section">
        <h2 className="section-title">💼 Current Internship Opportunities</h2>
        <div className="internships-grid">
          {careerData.internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <h3>{internship.title}</h3>
              <div className="internship-meta">
                <span className="company">🏢 {internship.company}</span>
                <span className="location">📍 {internship.location}</span>
              </div>
              <div className="internship-details">
                <span className="duration">⏱️ {internship.duration}</span>
                <span className="stipend">💰 {internship.stipend}</span>
              </div>
              <p className="internship-desc">{internship.description}</p>
              <div className="skills-required">
                <strong>Skills:</strong>
                <div className="skill-tags">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <button className="btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="career-section">
        <h2 className="section-title">🚀 Career Paths in Legal Tech & Cyber Law</h2>
        <div className="careers-grid">
          {careerData.careerPaths.map((career, index) => (
            <div key={index} className="career-card">
              <div className="career-header">
                <h3>{career.title}</h3>
                <span className={`growth-badge ${career.growth.toLowerCase().replace(' ', '-')}`}>
                  {career.growth}
                </span>
              </div>
              <p className="career-desc">{career.description}</p>
              <div className="career-salary">
                <strong>💰 Salary Range:</strong> {career.salary}
              </div>
              <div className="career-skills">
                <strong>🎯 Key Skills:</strong>
                <ul>
                  {career.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="career-section">
        <h2 className="section-title">📚 Learning Resources</h2>
        <div className="resources-grid">
          {careerData.resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource.category}</h3>
              <ul className="resource-list">
                {resource.items.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Prep Section */}
      <section className="career-section">
        <h2 className="section-title">💡 Interview Preparation</h2>
        <div className="interview-prep">
          <div className="prep-intro">
            <p>Common questions asked in cyber law and legal tech interviews:</p>
          </div>
          <div className="interview-questions">
            {careerData.interviewTips.map((tip, index) => (
              <div key={index} className="interview-qa">
                <div className="question">
                  <strong>Q: {tip.question}</strong>
                </div>
                <div className="answer">
                  <strong>A:</strong> {tip.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="career-section">
        <div className="career-cta">
          <h2>🌟 Ready to Start Your Journey?</h2>
          <div className="cta-steps">
            <div className="cta-step">
              <div className="step-number">1</div>
              <h4>Build Knowledge</h4>
              <p>Master cyber law through our Academy</p>
            </div>
            <div className="cta-step">
              <div className="step-number">2</div>
              <h4>Get Certified</h4>
              <p>Complete courses and certifications</p>
            </div>
            <div className="cta-step">
              <div className="step-number">3</div>
              <h4>Gain Experience</h4>
              <p>Apply for internships and projects</p>
            </div>
            <div className="cta-step">
              <div className="step-number">4</div>
              <h4>Network</h4>
              <p>Join professional organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zimbabwe-India Bridge Section */}
      <section className="career-section special-section">
        <h2 className="section-title">🇿🇼 🤝 🇮🇳 Zimbabwe-India Legal Tech Opportunities</h2>
        <div className="bridge-content">
          <p>As a Zimbabwean student studying in India, you have unique advantages:</p>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h4>🌍 International Perspective</h4>
              <p>Understanding both African and Asian legal systems makes you valuable for international firms</p>
            </div>
            <div className="advantage-card">
              <h4>💼 Cross-border Practice</h4>
              <p>Opportunities in India-Africa trade, investment, and cyber law harmonization</p>
            </div>
            <div className="advantage-card">
              <h4>🚀 Pioneer Advantage</h4>
              <p>Legal tech is growing in both regions - be among the first experts</p>
            </div>
            <div className="advantage-card">
              <h4>🎓 Education Edge</h4>
              <p>Indian BALLB + tech skills = competitive advantage in both markets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
