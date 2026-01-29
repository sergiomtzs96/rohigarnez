import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer({ onNavigate }) {
  const serviceLinks = [
    { id: 'community-pools', label: 'Mantenimiento Comunitario' },
    { id: 'new-pools', label: 'Piscinas Nuevas' },
    { id: 'pool-rehabilitation', label: 'Rehabilitación' },
    { id: 'pump-repair', label: 'Reparación Depuradoras' },
  ];

  const companyLinks = [
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'team', label: 'Nuestro Equipo' },
    { id: 'brands', label: 'Marcas y Partners' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'quote', label: 'Solicitar Presupuesto' },
  ];

  return (
    <footer className="print:hidden bg-[#141516] text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 border-b border-white/5 pb-24">

          {/* Company Info - Wide Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#70a2ad]"></div>
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Ingeniería Acuática</span>
              </div>
              <h3 className="text-3xl font-light tracking-wide text-white mb-6 font-[Urbanist]">Rohigarnez &nbsp; <span className="font-semibold text-[#70a2ad]">S.L.</span></h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm border-l border-white/10 pl-4">
                Especialistas en la gestión técnica del ciclo del agua.
                Mantenimiento, diagnóstico y construcción con los más altos estándares de calidad.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#70a2ad] text-gray-500 hover:text-[#70a2ad] transition-all bg-[#141516] hover:bg-[#70a2ad]/5">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/rohigarnez_sl/?hl=es" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#70a2ad] text-gray-500 hover:text-[#70a2ad] transition-all bg-[#141516] hover:bg-[#70a2ad]/5">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#70a2ad] text-gray-500 hover:text-[#70a2ad] transition-all bg-[#141516] hover:bg-[#70a2ad]/5">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light text-left hover:translate-x-1 duration-300 block w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Corporativo</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light text-left hover:translate-x-1 duration-300 block w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Contacto</h4>
            <div className="space-y-6">
              <div className="group flex items-start space-x-4 cursor-pointer">
                <div className="p-2 border border-white/10 group-hover:border-[#70a2ad]/50 transition-colors">
                  <Phone className="w-4 h-4 text-[#70a2ad]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Teléfono</span>
                  <span className="text-sm text-white font-light group-hover:text-[#70a2ad] transition-colors">+34 686 53 16 94</span>
                </div>
              </div>

              <div className="group flex items-start space-x-4 cursor-pointer">
                <div className="p-2 border border-white/10 group-hover:border-[#70a2ad]/50 transition-colors">
                  <Mail className="w-4 h-4 text-[#70a2ad]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Email</span>
                  <span className="text-sm text-white font-light group-hover:text-[#70a2ad] transition-colors">slnpiscinas22@gmail.com</span>
                </div>
              </div>

              <div className="group flex items-start space-x-4 cursor-pointer">
                <div className="p-2 border border-white/10 group-hover:border-[#70a2ad]/50 transition-colors">
                  <MapPin className="w-4 h-4 text-[#70a2ad]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Oficinas</span>
                  <span className="text-sm text-white font-light group-hover:text-[#70a2ad] transition-colors leading-relaxed">
                    Calle Santa Bárbara, 6<br />
                    28609 Sevilla La Nueva
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
            © 2026 Sergio Martínez.
          </p>
          <div className="flex space-x-8">
            <button className="text-xs text-gray-600 hover:text-[#70a2ad] transition-colors font-mono uppercase tracking-wider">Aviso Legal</button>
            <button className="text-xs text-gray-600 hover:text-[#70a2ad] transition-colors font-mono uppercase tracking-wider">Privacidad</button>
            <button className="text-xs text-gray-600 hover:text-[#70a2ad] transition-colors font-mono uppercase tracking-wider">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}