import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import  TeamPage  from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PoolsWithoutLifeguardPage } from './pages/ServicesPages/PoolsWithoutLifeguardPage';
import { PoolsLifeguardPage } from './pages/ServicesPages/PoolsWithLifeguardPage';
import { LeakDetectionPage } from './pages/ServicesPages/LeakDetectionPage';
import { PressureTestingPage } from './pages/ServicesPages/PressureTestingPage';
import { AirTestingPage } from './pages/ServicesPages/AirTestingPage';
import { PipeRepairPage } from './pages/ServicesPages/PipeRepairPage';
import { CrackRepairPage } from './pages/ServicesPages/CrackRepairPage';
import { PoolRehabilitationPage } from './pages/ServicesPages/PoolRehabilitationPage';
import { PoolConstructionPage } from './pages/ServicesPages/PoolConstructionPage';
import { SaltChlorinatorPage } from './pages/ServicesPages/SaltChlorinatorPage';
import { HeatPumpsPage } from './pages/ServicesPages/HeatPumpsPage';
import { PoolCoversPage } from './pages/ServicesPages/PoolCoversPage';
import { GenericServicePage } from './pages/ServicesPages/GenericServicePage';
import { PhMachinesPage } from './pages/ServicesPages/PhMachinesPage';
import { PumpReplacementPage } from './pages/ServicesPages/PumpReplacementPage';
import { FilterSandPage } from './pages/ServicesPages/FilterSandPage';
import { PoolMaterialsPage } from './pages/ServicesPages/PoolMaterialsPage';
import { QuotePage } from './pages/QuotePage';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (userType) => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'services-overview':
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'brands':
        return <BrandsPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      // Mantenimiento
      case 'pools-without-lifeguard':
        return <PoolsWithoutLifeguardPage onNavigate={handleNavigate} />;
      case 'pools-with-lifeguard':
        return <PoolsLifeguardPage onNavigate={handleNavigate} />;
      
      // Detección y Diagnóstico
      case 'leak-detection':
        return <LeakDetectionPage onNavigate={handleNavigate} />;
      case 'pressure-testing':
        return <PressureTestingPage onNavigate={handleNavigate} />;
      case 'air-testing':
        return <AirTestingPage onNavigate={handleNavigate} />;
      
      // Reparaciones
      case 'pipe-repair':
        return <PipeRepairPage onNavigate={handleNavigate} />;
      case 'crack-repair':
        return <CrackRepairPage onNavigate={handleNavigate} />;
      
      // Construcción y Obra
      case 'liner-rehabilitation':
        return <PoolRehabilitationPage onNavigate={handleNavigate} />;
      case 'pool-construction':
        return <PoolConstructionPage onNavigate={handleNavigate} />;
      case 'gunite':
        return <GenericServicePage 
          onNavigate={handleNavigate}
          title="Gunitado de Vasos"
          subtitle=""
          description="Aplicación profesional de gunita (hormigón proyectado) para estructuras de piscinas resistentes y duraderas."
          category="Construcción y Obra"
          color="green"
        />;
      case 'grouting':
        return <GenericServicePage 
          onNavigate={handleNavigate}
          title="Lechadas y Reposición de Gresites"
          subtitle=""
          description="Renovación de juntas y sustitución de piezas de gresite dañadas para un acabado perfecto."
          category="Construcción y Obra"
          color="green"
        />;
      case 'stone-replacement':
        return <GenericServicePage 
          onNavigate={handleNavigate}
          title="Cambios de Piedras / Coronación"
          subtitle=""
          description="Renovación de acabados exteriores con piedra natural o porcelánica de alta calidad."
          category="Construcción y Obra"
          color="green"
        />;
      case 'stairs-construction':
        return <GenericServicePage 
          onNavigate={handleNavigate}
          title="Construcción de Escaleras de Obra"
          subtitle=""
          description="Diseño y construcción de escaleras personalizadas dentro de la piscina con diferentes acabados."
          category="Construcción y Obra"
          color="green"
        />;
      case 'pump-room-elevation':
        return <GenericServicePage 
          onNavigate={handleNavigate}
          title="Elevación de Depuradoras"
          subtitle="Casetas de PVC o de Obra"
          description="Construcción e instalación de casetas elevadas para equipos de depuración con acabados en PVC o obra."
          category="Construcción y Obra"
          color="green"
        />;
      
      // Instalaciones y Equipamientos
      case 'salt-chlorinators':
        return <SaltChlorinatorPage onNavigate={handleNavigate} />;
      case 'ph-machines':
        return <PhMachinesPage onNavigate={handleNavigate} />;
      case 'pump-replacement':
        return <PumpReplacementPage onNavigate={handleNavigate} />;
      case 'heat-pumps':
        return <HeatPumpsPage onNavigate={handleNavigate} />;
      case 'filter-sand':
        return <FilterSandPage onNavigate={handleNavigate} />;
      
      // Suministros
      case 'pool-covers':
        return <PoolCoversPage onNavigate={handleNavigate} />;
      case 'pool-materials':
        return <PoolMaterialsPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'admin':
        return user?.type === 'admin' ? <AdminDashboard onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} user={user} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate}  />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        
        onLogout={handleLogout}
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      {currentPage !== 'login' && currentPage !== 'admin' && (
        <Footer onNavigate={handleNavigate} />
      )}
      <Toaster />
    </div>
  );
}