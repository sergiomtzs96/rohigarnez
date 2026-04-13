import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import TeamPage from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { QuotePage } from './pages/QuotePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Toaster } from './components/ui/sonner';

// Import services
import PoolsWithoutLifeguardPage from './pages/ServicesPages/PoolsWithoutLifeguardPage';
import PoolsWithLifeguardPage from './pages/ServicesPages/PoolsWithLifeguardPage';
import LeakDetectionPage from './pages/ServicesPages/LeakDetectionPage';
import PressureTestingPage from './pages/ServicesPages/PressureTestingPage';
import AirTestingPage from './pages/ServicesPages/AirTestingPage';
import PipeRepairPage from './pages/ServicesPages/PipeRepairPage';
import CrackRepairPage from './pages/ServicesPages/CrackRepairPage';
import PoolConstructionPage from './pages/ServicesPages/PoolConstructionPage';
import PoolRehabilitationPage from './pages/ServicesPages/PoolRehabilitationPage';
import SaltChlorinatorsPage from './pages/ServicesPages/SaltChlorinatorPage';
import HeatPumpsPage from './pages/ServicesPages/HeatPumpsPage';
import PoolCoversPage from './pages/ServicesPages/PoolCoversPage';
import PoolMaterialsPage from './pages/ServicesPages/PoolMaterialsPage';
import PumpReplacementPage from './pages/ServicesPages/PumpReplacementPage';
import PhMachinesPage from './pages/ServicesPages/PhMachinesPage';
import GenericServicePage from './pages/ServicesPages/GenericServicePage';
import FilterSandPage from './pages/ServicesPages/FilterSandPage';
import { Filter } from 'lucide-react';


export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace('/', '');
    return path || 'home';
  });
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');

      setCurrentPage(path || 'home');
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', '/' + page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    handleNavigate(userData.role === 'admin' ? 'dashboard' : 'home');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    handleNavigate('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} user={user} />;
      case 'contact': return <ContactPage onNavigate={handleNavigate} />;
      case 'services-overview':
      case 'services': return <ServicesPage onNavigate={handleNavigate} />;

      // Services
      case 'pools-without-lifeguard':
        return <PoolsWithoutLifeguardPage onNavigate={handleNavigate} />;

      case 'pools-with-lifeguard':
        return <PoolsWithLifeguardPage onNavigate={handleNavigate} />;

      case 'leak-detection':
        return <LeakDetectionPage onNavigate={handleNavigate} />;

      case 'pressure-testing':
        return <PressureTestingPage onNavigate={handleNavigate} />;

      case 'air-testing':
        return <AirTestingPage onNavigate={handleNavigate} />;

      case 'pipe-repair':
        return <PipeRepairPage onNavigate={handleNavigate} />;

      case 'crack-repair':
        return <CrackRepairPage onNavigate={handleNavigate} />;

      case 'pool-construction':
        return <PoolConstructionPage onNavigate={handleNavigate} />;

      case 'liner-rehabilitation':
      case 'pool-rehabilitation':
        return <PoolRehabilitationPage onNavigate={handleNavigate} />;

      case 'salt-chlorinators':
        return <SaltChlorinatorsPage onNavigate={handleNavigate} />;

      case 'heat-pumps':
        return <HeatPumpsPage onNavigate={handleNavigate} />;

      case 'pool-covers':
        return <PoolCoversPage onNavigate={handleNavigate} />;

      case 'pool-materials':
        return <PoolMaterialsPage onNavigate={handleNavigate} />;

      case 'pump-replacement':
        return <PumpReplacementPage onNavigate={handleNavigate} />;

      case 'ph-machine':
      case 'ph-machine-page':
        return <PhMachinesPage onNavigate={handleNavigate} />

      case 'gunite':
        return <GenericServicePage onNavigate={handleNavigate} slug={currentPage} />

      case 'filter-sand':
        return <FilterSandPage onNavigate={handleNavigate} />

      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'brands': return <BrandsPage onNavigate={handleNavigate} />;
      case 'team': return <TeamPage onNavigate={handleNavigate} />;
      case 'projects': return <ProjectsPage onNavigate={handleNavigate} />;
      case 'quote': return <QuotePage onNavigate={handleNavigate} />;
      case 'login': return <Login onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'dashboard':
        return user?.role === 'admin'
          ? <Dashboard onNavigate={handleNavigate} />
          : <HomePage onNavigate={handleNavigate} user={user} />;
      default: return <HomePage onNavigate={handleNavigate} user={user} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} user={user} onLogout={handleLogout} />
      <main className="flex-1">{renderCurrentPage()}</main>
      {currentPage !== 'login' && currentPage !== 'dashboard' && <Footer onNavigate={handleNavigate} />}
      <Toaster />
    </div>
  );
}