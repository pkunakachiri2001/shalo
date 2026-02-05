import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import Layout from './components/Layout';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Academy = lazy(() => import('./pages/Academy'));
const CrimeIdentifier = lazy(() => import('./pages/CrimeIdentifier'));
const EmergencyTools = lazy(() => import('./pages/EmergencyTools'));
const News = lazy(() => import('./pages/News'));
const Career = lazy(() => import('./pages/Career'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const IncidentSimulator = lazy(() => import('./pages/IncidentSimulator'));
const Timeline = lazy(() => import('./pages/Timeline'));
const ResourceLibrary = lazy(() => import('./pages/ResourceLibrary'));

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/identifier" element={<CrimeIdentifier />} />
            <Route path="/emergency" element={<EmergencyTools />} />
            <Route path="/news" element={<News />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/simulator" element={<IncidentSimulator />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/resources" element={<ResourceLibrary />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
