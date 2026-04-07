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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
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