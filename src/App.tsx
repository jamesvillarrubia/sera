import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/common/NavBar';
// import Home from './pages/Home';
import Employees from './pages/Employees';
import Employers from './pages/Employers';
import FAQ from './pages/FAQ';
import Simple from './pages/Simple';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/' && location.pathname !== '/privacy-policy';

  return (
    <div className="min-h-screen bg-neutral-50">
      {showNavBar && <NavBar />}
      <main className="">
        <Routes>
          <Route path="/" element={<Simple />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;