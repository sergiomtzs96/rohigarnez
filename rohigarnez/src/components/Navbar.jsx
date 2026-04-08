import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/shared/icons/Logo.svg'

export function Navbar({ currentPage, onNavigate, user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const mainNavItems = [
    { id: 'home', label: 'Inicio', href: '#' },
    { 
      id: 'about', 
      label: 'Nosotros', 
      href: '#',
      dropdown: [
        { id: 'about', label: 'Nuestra Empresa' },
        { id: 'team', label: 'Nuestro Equipo' },
        { id: 'brands', label: 'Marcas y Partners' }
      ]
    },
    { 
      id: 'services', 
      label: 'Servicios', 
      href: '#',
      dropdown: [
        { id: 'services-overview', label: 'Todos los Servicios' },
        { id: 'divider-1', label: '— Mantenimiento —', disabled: true },
        { id: 'pools-without-lifeguard', label: 'Sin Socorristas' },
        { id: 'pools-with-lifeguard', label: 'Con Socorristas' },
        { id: 'divider-2', label: '— Detección y Diagnóstico —', disabled: true },
        { id: 'leak-detection', label: 'Localización de Fugas' },
        { id: 'pressure-testing', label: 'Pruebas de Presión' },
        { id: 'air-testing', label: 'Pruebas con Aire' },
        { id: 'divider-3', label: '— Reparaciones —', disabled: true },
        { id: 'pipe-repair', label: 'Reparación de Tuberías' },
        { id: 'crack-repair', label: 'Reparación de Grietas' },
        { id: 'divider-4', label: '— Construcción y Obra —', disabled: true },
        { id: 'pool-construction', label: 'Construcción de Piscinas' },
        { id: 'liner-rehabilitation', label: 'Rehabilitación con Lámina' },
        { id: 'divider-5', label: '— Instalaciones —', disabled: true },
        { id: 'salt-chlorinators', label: 'Cloradores Salinos' },
        { id: 'heat-pumps', label: 'Bombas de Calor' },
        { id: 'divider-6', label: '— Suministros —', disabled: true },
        { id: 'pool-covers', label: 'Lonas para Piscinas' },
        { id: 'pool-materials', label: 'Materiales de Piscina' }
      ]
    },
    { id: 'projects', label: 'Proyectos', href: '#' },
    { id: 'contact', label: 'Contacto', href: '#' }
  ];

  const handleNavClick = (itemId) => {
    onNavigate(itemId);
    setIsOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="print-hidden bg-[#141516] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-2xl font-light tracking-wide text-white hover:opacity-80 transition-opacity flex items-center"
            >
              <img src={Logo} alt='logo' className='w-15 h-15' />
              Rohi<span className="font-semibold text-[#70a2ad]">Garnez</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {mainNavItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.id === 'services') {
                            setServicesOpen(!servicesOpen);
                            setAboutOpen(false);
                          } else if (item.id === 'about') {
                            setAboutOpen(!aboutOpen);
                            setServicesOpen(false);
                          }
                        }}
                        className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors uppercase tracking-wider ${
                          (item.id === 'services' && (currentPage.startsWith('services') || currentPage.includes('pools') || currentPage.includes('leak') || currentPage.includes('pipe') || currentPage.includes('crack') || currentPage.includes('liner') || currentPage.includes('pool-construction') || currentPage.includes('salt') || currentPage.includes('heat') || currentPage.includes('pool-covers') || currentPage.includes('pool-materials') || currentPage.includes('pressure') || currentPage.includes('air-testing'))) ||
                          (item.id === 'about' && (currentPage === 'about' || currentPage === 'team' || currentPage === 'brands'))
                            ? 'text-[#70a2ad]'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3 opacity-50" />
                      </button>
                      {((item.id === 'services' && servicesOpen) || (item.id === 'about' && aboutOpen)) && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1c1e] border border-white/10 shadow-2xl z-50 max-h-96 overflow-y-auto">
                          {item.dropdown.map((dropdownItem) => (
                            dropdownItem.disabled ? (
                              <div
                                key={dropdownItem.id}
                                className="px-4 py-3 text-[10px] font-bold text-[#70a2ad] uppercase tracking-widest bg-[#141516]/50 pointer-events-none border-b border-white/5"
                              >
                                {dropdownItem.label}
                              </div>
                            ) : (
                              <button
                                key={dropdownItem.id}
                                onClick={() => handleNavClick(dropdownItem.id)}
                                className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#70a2ad]/10 hover:text-white transition-colors border-l-2 border-transparent hover:border-[#70a2ad]"
                              >
                                {dropdownItem.label}
                              </button>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider ${
                        currentPage === item.id
                          ? 'text-[#70a2ad]'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick('dashboard')}
                    className="text-gray-300 hover:text-white hover:bg-white/5 font-medium uppercase text-xs tracking-wider"
                  >
                    Admin
                  </Button>
                )}
                <div className="flex items-center space-x-2 text-gray-400">
                  <User className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">{user.role === 'admin' ? 'Admin' : 'Usuario'}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-gray-400 hover:text-white hover:bg-white/5"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  onClick={() => handleNavClick('contact')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5a8b96] rounded-none px-6 h-10 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Catálogo Renolit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleNavClick('login')}
                  className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#141516] rounded-none px-6 h-10 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Acceso
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#141516] border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {mainNavItems.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.id === 'services') {
                          setServicesOpen(!servicesOpen);
                          setAboutOpen(false);
                        } else if (item.id === 'about') {
                          setAboutOpen(!aboutOpen);
                          setServicesOpen(false);
                        }
                      }}
                      className="w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-[#70a2ad] flex items-center justify-between border-b border-white/5"
                    >
                      <span className="uppercase tracking-wide text-sm">{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {((item.id === 'services' && servicesOpen) || (item.id === 'about' && aboutOpen)) && (
                      <div className="pl-4 space-y-1 bg-[#1a1c1e] py-2">
                        {item.dropdown.map((dropdownItem) => (
                          dropdownItem.disabled ? (
                            <div
                              key={dropdownItem.id}
                              className="px-3 py-2 text-[10px] font-bold text-[#70a2ad] uppercase tracking-widest mt-2 mb-1 opacity-70"
                            >
                              {dropdownItem.label}
                            </div>
                          ) : (
                            <button
                              key={dropdownItem.id}
                              onClick={() => handleNavClick(dropdownItem.id)}
                              className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              {dropdownItem.label}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors border-b border-white/5 ${
                      currentPage === item.id
                        ? 'text-[#70a2ad]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="uppercase tracking-wide text-sm">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
            <div className="pt-6 space-y-3">
              {user ? (
                <div className="space-y-3">
                  {user.role === 'admin' && (
                    <Button 
                      onClick={() => handleNavClick('dashboard')}
                      className="w-full bg-[#1a1c1e] text-white hover:bg-[#25282b]"
                    >
                      Panel Admin
                    </Button>
                  )}
                  <div className="flex items-center justify-center space-x-2 text-gray-400 py-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">{user.role === 'admin' ? 'Administrador' : 'Usuario'}</span>
                  </div>
                  <Button 
                    onClick={onLogout}
                    variant="outline"
                    className="w-full border-white/20 text-gray-300"
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    onClick={() => handleNavClick('contact')}
                    className="w-full bg-[#70a2ad] text-white hover:bg-[#5a8b96] rounded-none h-12 text-xs font-bold uppercase tracking-widest"
                  >
                    Catálogo Renolit
                  </Button>
                  <Button 
                    onClick={() => handleNavClick('login')}
                    variant="outline"
                    className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#141516] rounded-none h-12 text-xs font-bold uppercase tracking-widest"
                  >
                    Acceso
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}