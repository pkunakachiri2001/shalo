import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academy from './pages/Academy';
import CrimeIdentifier from './pages/CrimeIdentifier';
import EmergencyTools from './pages/EmergencyTools';
import News from './pages/News';
import Career from './pages/Career';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/identifier" element={<CrimeIdentifier />} />
        <Route path="/emergency" element={<EmergencyTools />} />
        <Route path="/news" element={<News />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
