# 🛡️ LexGuard - Your Legal Companion

**A Progressive Web App for Cyber Law Education & Digital Protection**

Built for **Shalom Chikaka** 🇿🇼  
BBALLB Student, Vishwakarma University Pune  
Law & Technology Project

---

## 🌟 About LexGuard

LexGuard is a comprehensive mobile-first web application that combines **cyber law education, legal awareness, practical tools, and community support**. It empowers law students and citizens to understand cyber crimes, know their rights, and take immediate action when facing digital threats.

### ✨ Key Features

1. **📚 Cyber Law Academy**
   - Interactive lessons on cyber crimes (hacking, cyberbullying, fraud, identity theft)
   - Coverage of IT Act 2000, DPDP Act 2023
   - International comparisons (India, Zimbabwe, global perspectives)
   - Real case studies and court verdicts
   - Gamified quizzes with instant feedback

2. **🔍 Crime Identifier**
   - AI-powered situation analyzer
   - Instant legal classification of cyber crimes
   - Step-by-step guidance on what to do
   - Legal provisions and penalties information

3. **🚨 Emergency Tools**
   - Quick incident reporter
   - Auto-generated complaint templates
   - Emergency contacts (Cyber Cell, Police, Helplines)
   - Evidence collection tips

4. **📰 News & Updates**
   - Latest cyber crime trends
   - New laws and amendments
   - Court verdicts explained simply
   - Legal tech developments

5. **🎓 Student Career Hub**
   - Internship opportunities in cyber law
   - Career paths in legal tech
   - Learning resources and certifications
   - Interview preparation
   - Zimbabwe-India opportunities

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project folder**
   ```powershell
   cd "c:\Users\DELL\OneDrive\Desktop\SHALO"
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start the development server**
   ```powershell
   npm run dev
   ```

4. **Open your browser**
   - The app will open at `http://localhost:5173`
   - Or manually visit the URL shown in the terminal

---

## 📱 Installing on Your Phone

### Option 1: Install as PWA (Progressive Web App)

1. **Build the production version**
   ```powershell
   npm run build
   ```

2. **Preview the production build**
   ```powershell
   npm run preview
   ```

3. **On your phone's browser:**
   - **Android (Chrome):** Visit the URL → Tap menu (⋮) → "Add to Home Screen"
   - **iOS (Safari):** Visit the URL → Tap share (□) → "Add to Home Screen"

4. The app will now appear on your phone's home screen like a native app!

### Option 2: Deploy Online (Recommended)

Deploy to a free hosting service so Shalom can access it anywhere:

**Using Vercel (Easy & Free):**
1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

2. Deploy:
   ```powershell
   vercel
   ```

3. Follow the prompts (use default settings)
4. You'll get a URL like `lexguard.vercel.app`
5. Share this URL with Shalom - she can install it on her phone from anywhere!

**Using Netlify:**
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder (after running `npm run build`)
3. Get your URL and share it!

---

## 🛠️ Project Structure

```
SHALO/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # App layout with navigation
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Academy.jsx         # Learning modules
│   │   ├── CrimeIdentifier.jsx # AI-powered identifier
│   │   ├── EmergencyTools.jsx  # Reporting & templates
│   │   ├── News.jsx            # Legal news feed
│   │   └── Career.jsx          # Career resources
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # All styling
├── index.html                  # HTML template
├── vite.config.js              # Vite & PWA configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🎨 Design Philosophy

- **Mobile-First:** Optimized for phones and tablets
- **Offline-Ready:** Works without internet (PWA)
- **Simple Yet Powerful:** Easy to use, packed with features
- **Beautiful UI:** Modern gradient designs, smooth animations
- **Accessible:** Clear fonts, high contrast, easy navigation

---

## 💡 Features Deep Dive

### Cyber Law Academy
- **5 comprehensive lessons** covering:
  - Introduction to Cyber Law
  - Hacking & Unauthorized Access
  - Cyberbullying & Online Harassment
  - Identity Theft & Online Fraud
  - Privacy & Data Protection
  
- **Interactive quizzes** with instant grading
- **Real case studies** from Indian courts
- **Practical tips** for staying safe online

### Crime Identifier
- Analyzes your situation description
- Matches with 8+ crime categories
- Provides:
  - Crime name and severity
  - Legal sections violated
  - Penalties
  - Step-by-step action plan
  - Emergency contacts

### Emergency Tools
- **Incident Reporter:** Organize information before filing FIR
- **4 Complaint Templates:**
  - Hacking/Unauthorized Access
  - Cyberbullying/Harassment
  - Online Financial Fraud
  - Identity Theft/Impersonation
- **Emergency Contacts:** One-tap calling
- **Evidence Tips:** How to collect and preserve proof

### Career Hub
- **4 Internship listings** (Legal research, Legal tech, Cyber cell, Compliance)
- **6 Career paths** with salary ranges
- **Learning resources:** Certifications, courses, books
- **Interview prep:** Common questions and answers
- **Zimbabwe-India bridge opportunities**

---

## 🌍 International Perspective

LexGuard uniquely addresses the needs of international students like Shalom by:

- Comparing Indian and Zimbabwean cyber laws
- Highlighting cross-border legal tech opportunities
- Providing resources relevant to both African and Asian markets
- Showcasing career paths that leverage international experience

---

## 🔧 Technologies Used

- **React 18** - UI framework
- **React Router** - Navigation
- **Vite** - Build tool & dev server
- **PWA** - Installable, offline-capable
- **CSS3** - Modern styling with gradients, animations
- **Responsive Design** - Mobile-first approach

---

## 📝 Customization

### Adding New Lessons
Edit [src/pages/Academy.jsx](src/pages/Academy.jsx) - add to the `lessons` array

### Adding News Articles
Edit [src/pages/News.jsx](src/pages/News.jsx) - add to the `newsData` array

### Updating Emergency Contacts
Edit [src/pages/EmergencyTools.jsx](src/pages/EmergencyTools.jsx) - modify `emergencyContacts` array

### Changing Colors/Theme
Edit [src/index.css](src/index.css) - modify CSS variables at the top

---

## 🚀 Deployment Checklist

Before presenting to Shalom:

- [ ] Test on mobile browser
- [ ] Verify PWA installation works
- [ ] Check all pages load correctly
- [ ] Test quiz functionality
- [ ] Verify crime identifier works
- [ ] Check all links and contacts
- [ ] Test offline mode
- [ ] Deploy to hosting service
- [ ] Share final URL

---

## 📞 Support & Resources

### For Reporting Cyber Crimes:
- **National Portal:** [cybercrime.gov.in](https://cybercrime.gov.in)
- **Helpline:** 1930 (India)
- **Police:** 100

### For Learning More:
- IT Act 2000: [meity.gov.in](https://www.meity.gov.in)
- DPDP Act 2023: [Latest legislation](https://www.meity.gov.in)
- Cyber Law Resources: CERT-In, DSCI, IAMAI

---

## 🎓 For Shalom

Dear Shalom,

This app is built specifically for your **Law & Technology Project** at Vishwakarma University Pune. It combines your initial idea of cyber law education with additional features that make it a comprehensive legal companion.

### How to use for your project:

1. **Demonstration:** Show the app on your phone to professors
2. **Project Report:** Include screenshots and explain each feature
3. **Presentation:** Highlight the Zimbabwe-India comparative aspects
4. **Future Work:** Mention potential additions (community forum, AR features, etc.)

### What makes it unique:

✅ **Practical:** Not just theory - real tools people can use  
✅ **Educational:** Comprehensive learning with quizzes  
✅ **Timely:** Addresses DPDP Act 2023 (brand new!)  
✅ **International:** Zimbabwe-India perspective  
✅ **Accessible:** Works on any phone, even offline  

### Tips for presenting:

- Start with the Crime Identifier (most impressive)
- Show the Academy with quiz functionality
- Demonstrate the Emergency Tools
- Explain the Career opportunities section
- Highlight your unique advantage as a Zimbabwean student studying in India

**Good luck with your project! 🌟**

---

## 📄 License

MIT License - Free for educational and personal use

---

## 👨‍💻 Credits

**Concept:** Shalom Chikaka  
**Development:** AI-Assisted Development  
**Institution:** Vishwakarma University Pune  
**Project:** Law & Technology - Mobile App Development  

---

## 🤝 Contributing Ideas

Future enhancements could include:
- Real-time chat with legal experts
- Community forum for sharing experiences
- Push notifications for new laws
- Multi-language support (Hindi, Shona, etc.)
- AR-based legal document scanner
- Blockchain-based evidence storage
- Integration with actual police FIR systems

---

**Built with ❤️ for legal education and digital safety**

🛡️ **Stay Safe. Stay Legal. Stay Informed.**
