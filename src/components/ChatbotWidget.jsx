import { useEffect, useMemo, useRef, useState } from 'react';

const quickPrompts = [
  'What can I do in LexGuard?',
  'How does Crime Identifier work?',
  'Show emergency contacts',
  'Where is the Cyber Law Academy?',
  'How to report a cyber incident?',
  'What is the Cyber Crime Helpline?',
  'Latest legal news sources'
];

const knowledgeBase = [
  {
    match: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response:
      'Hello! I’m the LexGuard Assistant. Ask me about any feature like Academy, Identifier, Emergency Tools, News, or Career.'
  },
  {
    match: ['what is lexguard', 'what can i do', 'features', 'app do', 'about app', 'lexguard'],
    response:
      'LexGuard is your digital legal companion. It offers Cyber Law Academy lessons, a Crime Identifier to classify incidents, Emergency Tools with reporting templates and contacts, Legal News updates, and a Career hub.'
  },
  {
    match: ['navigate', 'menu', 'where', 'find page', 'open page', 'location'],
    response:
      'Use the top menu or the bottom navigation to open pages like Academy, Identifier, Emergency Tools, News, Career, and About.'
  },
  {
    match: ['academy', 'learn', 'course', 'cyber law academy'],
    response:
      'The Cyber Law Academy provides learning modules on cyber law concepts, key acts, and practical guidance. Open the Academy page from the menu or bottom navigation.'
  },
  {
    match: ['crime types', 'types of cyber crime', 'examples', 'what counts as', 'cyber crime list'],
    response:
      'LexGuard covers common cyber crime scenarios like identity theft, phishing, harassment, fake profiles, account hacking, and online fraud. Use Crime Identifier to classify your situation.'
  },
  {
    match: ['identifier', 'crime identifier', 'analyze', 'classify', 'situation'],
    response:
      'Crime Identifier helps you describe a cyber incident and get a likely category, legal references, and immediate action steps. Go to Identifier and enter your situation.'
  },
  {
    match: ['how to use identifier', 'use crime identifier', 'analyze situation'],
    response:
      'Open Identifier, type your situation in detail, then select “Analyze Situation”. You’ll receive a category, legal context, and immediate actions.'
  },
  {
    match: ['emergency', 'contacts', 'helpline', 'report', 'complaint'],
    response:
      'Emergency Tools provides quick reporting templates and contacts like Cyber Crime Helpline 1930, Police 100, and Women Helpline 181, plus useful portals such as cybercrime.gov.in.'
  },
  {
    match: ['report', 'file complaint', 'complaint template', 'how to report', 'incident report'],
    response:
      'Use Emergency Tools → “Report Incident” to draft a complaint and capture evidence details. For official filing, visit cybercrime.gov.in or call 1930 for guidance.'
  },
  {
    match: ['cybercrime.gov.in', 'cyber crime portal', 'national cyber crime portal'],
    response:
      'The National Cyber Crime Portal (cybercrime.gov.in) is the official site to file and track complaints in India.'
  },
  {
    match: ['1930', 'cyber helpline', 'cybercrime helpline'],
    response:
      'The Cyber Crime Helpline number is 1930 (India). Use it for urgent guidance on cyber incidents.'
  },
  {
    match: ['100', 'police', 'emergency police'],
    response:
      'Police emergency number is 100 (India). Use it for immediate danger situations.'
  },
  {
    match: ['181', 'women helpline', 'women safety'],
    response:
      'Women Helpline number is 181 (India). It’s available for support in harassment or safety concerns.'
  },
  {
    match: ['news', 'latest', 'updates'],
    response:
      'The News section aggregates legal and cyber safety updates from sources like Supreme Court, CERT-In, and government portals.'
  },
  {
    match: ['cert-in', 'cert in', 'alerts', 'advisory'],
    response:
      'CERT-In provides cybersecurity advisories and alerts. You can access it from the News or Resources links.'
  },
  {
    match: ['it act', 'information technology act', 'it act 2000'],
    response:
      'The IT Act 2000 is a core cyber law framework in India. LexGuard links to official resources in the footer.'
  },
  {
    match: ['dpdp', 'data protection', 'privacy law'],
    response:
      'LexGuard references data protection topics including the DPDP Act 2023 in the About and learning sections.'
  },
  {
    match: ['career', 'jobs', 'internship'],
    response:
      'The Career Hub offers guidance and resources for law and tech careers, including skill-building and opportunities.'
  },
  {
    match: ['skills', 'learn skills', 'career path', 'opportunities'],
    response:
      'Check the Career Hub for skills guidance, resources, and growth paths in cyber law and legal tech.'
  },
  {
    match: ['contact', 'help', 'support'],
    response:
      'For urgent help, use Emergency Tools or call 1930 (cyber helpline) or 100 (police). For non-urgent guidance, explore Academy and Identifier.'
  },
  {
    match: ['offline', 'pwa', 'install app', 'add to home screen', 'app on phone'],
    response:
      'LexGuard is built as a PWA, so you can add it to your home screen and use some features offline.'
  },
  {
    match: ['about', 'project', 'why lexguard'],
    response:
      'The About page explains the mission, tech stack, and why LexGuard helps students and citizens navigate cyber law.'
  },
  {
    match: ['developer', 'creator', 'who made', 'author'],
    response:
      'LexGuard was created by Shalom Chikaka as a Law & Technology educational project.'
  },
  {
    match: ['thanks', 'thank you', 'thx'],
    response:
      'You’re welcome! Ask me anything else about LexGuard.'
  }
];

const defaultReplies = [
  "I can answer questions about LexGuard features, pages, and guidance. Try asking about Academy, Crime Identifier, Emergency Tools, News, or Career.",
  "Ask me about any LexGuard feature and I will guide you to the right place.",
  "Not sure? Ask: 'What can I do in LexGuard?'"
];

const pageHints = [
  { keywords: ['academy', 'cyber law academy'], reply: 'Open “Academy” from the menu or bottom navigation.' },
  { keywords: ['identifier', 'crime identifier'], reply: 'Open “Identifier” from the menu or bottom navigation.' },
  { keywords: ['emergency', 'emergency tools'], reply: 'Open “Emergency” from the menu or bottom navigation.' },
  { keywords: ['news', 'latest news'], reply: 'Open “News” from the menu or bottom navigation.' },
  { keywords: ['career', 'career hub'], reply: 'Open “Career” from the menu or bottom navigation.' },
  { keywords: ['about'], reply: 'Open “About” from the menu or bottom navigation.' }
];

function getSmartReply(userText) {
  const normalized = userText.toLowerCase();
  const pageHint = pageHints.find(item => item.keywords.some(key => normalized.includes(key)));
  if (pageHint && normalized.includes('where')) return pageHint.reply;
  const entry = knowledgeBase.find(item => item.match.some(key => normalized.includes(key)));
  if (entry) return entry.response;
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi! I’m LexGuard Assistant. Ask me anything about the app and I’ll guide you.',
      time: getTimeStamp()
    }
  ]);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', text: trimmed, time: getTimeStamp() };
    const assistantReply = {
      role: 'assistant',
      text: getSmartReply(trimmed),
      time: getTimeStamp()
    };

    setMessages(prev => [...prev, userMessage, assistantReply]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (prompt) => {
    setOpen(true);
    setInput(prompt);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  };

  const lastUpdated = useMemo(() => new Date().toLocaleDateString(), []);

  return (
    <div className={`chatbot ${open ? 'open' : ''}`} aria-live="polite">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        <span className="chatbot-toggle-icon">💬</span>
        <span className="chatbot-toggle-label">Ask LexGuard</span>
      </button>

      <div className="chatbot-panel" role="dialog" aria-label="LexGuard Assistant">
        <div className="chatbot-header">
          <div>
            <h3>LexGuard Assistant</h3>
            <p>Ask about features & guidance</p>
          </div>
          <span className="chatbot-time">Updated {lastUpdated}</span>
        </div>

        <div className="chatbot-body" ref={bodyRef}>
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`chatbot-message ${message.role}`}>
              <div className="chatbot-bubble">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chatbot-actions">
          {quickPrompts.map(prompt => (
            <button
              key={prompt}
              className="chatbot-chip"
              onClick={() => handleQuickPrompt(prompt)}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="chatbot-input">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your question"
          />
          <button type="button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
