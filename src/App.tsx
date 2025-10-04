import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { PasswordProtection } from './components/PasswordProtection';

export default function App() {
  return (
    <Router basename="/UX-Portfolio">
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}