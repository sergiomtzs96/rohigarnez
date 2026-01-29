import React from 'react';
import { Shield, Clock, CheckCircle, AlertTriangle, Eye, Heart, FileText, Users, Settings, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';


export function PoolsLifeguardPage({ onNavigate }) {
  const lifeguardServices = [
    {
      title: 'Vigilancia Activa',
      description: 'Supervisión constante de la actividad acuática y prevención de accidentes',
      icon: Eye,
      critical: true
    },
    {
      title: 'Primeros Auxilios',
      description: 'Atención inmediata en caso de emergencias con certificación oficial',
      icon: Heart,
      critical: true
    },
    {
      title: 'Control de Aforo',
      description: 'Gestión del número de bañistas según normativa vigente',
      icon: Users,
      critical: false
    },
    {
      title: 'Cumplimiento Normativo',
      description: 'Verificación de cumplimiento de todas las normativas de seguridad',
      icon: FileText,
      critical: true
    }
  ];

  const packages = [
    {
      name: 'Sin Socorrista',
      subtitle: 'Piscinas de profundidad ≤ 1,5m',
      price: 'Desde 220€',
      period: '/mes',
      description: 'Mantenimiento especializado sin necesidad de socorrista',
      features: [
        'Control químico diario reforzado',
        'Limpieza diaria en temporada alta',
        'Registros oficiales completos',
        'Control de temperatura continuo',
        'Informes semanales',
        'Cumplimiento normativo garantizado'
      ],
      recommended: false,
      compliance: 'Cumple RD 742/2013'
    },
    {
      name: 'Con Socorrista',
      subtitle: 'Piscinas de profundidad > 1,5m',
      price: 'Desde 580€',
      period: '/mes',
      description: 'Servicio completo con socorrista titulado',
      features: [
        'Socorrista titulado en horario de apertura',
        'Control químico automatizado',
        'Limpieza y mantenimiento diario',
        'Primeros auxilios certificados',
        'Control de aforo y seguridad',
        'Registros oficiales digitalizados'
      ],
      recommended: true,
      compliance: 'Cumple toda la normativa'
    },
    {
      name: 'Premium Integral',
      subtitle: 'Gestión completa todo incluido',
      price: 'Desde 850€',
      period: '/mes',
      description: 'Solución integral con gestión avanzada',
      features: [
        'Equipo de socorristas (2+ personas)',
        'Sistemas de control automatizados',
        'Mantenimiento preventivo semanal',
        'Gestión de químicos y productos',
        'Asesoramiento legal continuo',
        'Servicio 24/7 todo el año'
      ],
      recommended: false,
      compliance: 'Excelencia normativa'
    }
  ];

  const regulations = [
    {
      title: 'RD 742/2013',
      description: 'Criterios técnico-sanitarios de piscinas',
      requirements: [
        'Socorrista obligatorio si profundidad > 1,5m',
        'Ratio máximo: 1 socorrista por 200m² de lámina',
        'Certificación en salvamento acuático',
        'Botiquín y material de primeros auxilios'
      ]
    },
    {
      title: 'Normativa Autonómica',
      description: 'Requisitos específicos de Andalucía',
      requirements: [
        'Decreto 23/1999 sobre piscinas de uso público',
        'Control de calidad del agua reforzado',
        'Registros diarios obligatorios',
        'Inspecciones sanitarias periódicas'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#141516] pt-32 pb-24 overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#70a2ad]"></div>
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Seguridad Acuática</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Piscinas con y sin<br/>
                <span className="font-semibold text-[#70a2ad]">Socorrista</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Servicios especializados adaptados a la normativa. Cumplimiento garantizado 
                del RD 742/2013 y normativas autonómicas para su tranquilidad.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Propuesta
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
              >
                Consultar Normativa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Services List */}
            <div className="lg:col-span-7">
              <div className="flex items-end gap-4 mb-12">
                 <h2 className="text-4xl font-light text-[#141516] font-[Urbanist]">Servicios <span className="text-[#70a2ad] font-medium">Especializados</span></h2>
                 <div className="h-px flex-1 bg-[#141516]/10 mb-2"></div>
              </div>
              
              <p className="text-gray-500 mb-12 font-light text-lg max-w-2xl leading-relaxed">
                Más allá de la vigilancia, nuestro servicio incluye una gestión integral 
                de la seguridad y la sanidad de su instalación acuática.
              </p>

              <div className="grid grid-cols-1 border-t border-l border-[#141516]/10">
                {lifeguardServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-6 p-8 border-b border-r border-[#141516]/10 hover:bg-gray-50 transition-colors group">
                    <div className="mt-1">
                      <service.icon className="w-6 h-6 text-[#70a2ad] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                         <h3 className="text-[#141516] font-medium text-lg font-[Urbanist]">{service.title}</h3>
                         {service.critical && (
                           <span className="text-[10px] uppercase tracking-wider font-bold text-[#70a2ad] border border-[#70a2ad]/30 px-2 py-0.5">Obligatorio</span>
                         )}
                      </div>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Regulations Panel */}
            <div className="lg:col-span-5">
               <div className="bg-[#f8f9fa] border border-[#141516]/5 sticky top-8">
                  <div className="p-8 border-b border-[#141516]/5 bg-white">
                     <h3 className="text-xl font-medium text-[#141516] font-[Urbanist] mb-2">Marco Normativo</h3>
                     <p className="text-xs text-[#70a2ad] font-mono uppercase tracking-[0.2em]">Legalidad Garantizada</p>
                  </div>
                  
                  <div className="grid grid-cols-1">
                     {regulations.map((reg, index) => (
                       <div key={index} className="p-8 border-b last:border-0 border-[#141516]/5 hover:bg-white transition-colors group">
                          <h4 className="font-medium text-[#141516] mb-2 font-[Urbanist] flex items-center gap-2">
                             <FileText className="w-4 h-4 text-[#70a2ad]" />
                             {reg.title}
                          </h4>
                          <p className="text-sm text-gray-500 font-light mb-4">{reg.description}</p>
                          <ul className="space-y-2">
                             {reg.requirements.map((req, i) => (
                               <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                 <div className="w-1 h-1 bg-[#70a2ad] mt-2 shrink-0"></div>
                                 {req}
                               </li>
                             ))}
                          </ul>
                       </div>
                     ))}
                  </div>
                  
                  {/* Decorative */}
                  <div className="p-4 border-t border-[#141516]/5 bg-white/50 flex justify-between items-center">
                     <span className="text-[10px] font-mono text-gray-400 uppercase">Ref. Legal 2024</span>
                     <div className="flex gap-1">
                        <div className="w-1 h-1 bg-[#141516]/20"></div>
                        <div className="w-1 h-1 bg-[#141516]/20"></div>
                        <div className="w-1 h-1 bg-[#70a2ad]"></div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#141516]/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-4">Planes de <span className="text-[#70a2ad] font-medium">Servicio</span></h2>
              <p className="text-gray-500 font-light text-lg">
                Soluciones adaptadas a cada tipo de instalación con cumplimiento normativo garantizado.
              </p>
            </div>
            <div className="hidden md:block pb-2">
               <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Tarifas 2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-[#141516]/10">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 md:p-12 border-r border-t border-b border-[#141516]/10 transition-colors ${pkg.recommended ? 'bg-[#70a2ad]/5' : 'hover:bg-gray-50'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#70a2ad]" />
                )}
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-mono uppercase tracking-widest block ${pkg.recommended ? 'text-[#70a2ad]' : 'text-gray-400'}`}>
                      {pkg.recommended ? 'Recomendado' : 'Opción ' + (index + 1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-[#141516] mb-1 font-[Urbanist]">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mb-6 h-10">{pkg.subtitle}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-light text-[#141516]">{pkg.price}</span>
                    <span className="text-sm text-gray-400">{pkg.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 font-light text-sm mb-10 leading-relaxed min-h-[40px]">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#141516] font-light">
                      <div className={`w-1.5 h-1.5 mt-1.5 shrink-0 ${pkg.recommended ? 'bg-[#70a2ad]' : 'bg-[#141516]/20'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-[#141516]/5">
                   <div className="flex items-center gap-2 text-xs font-semibold text-[#141516]/60">
                     <Shield className="h-3 w-3" />
                     {pkg.compliance}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-[#141516] border-t border-white/5 relative overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Engineering Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           
           {/* Technical Accent Lines */}
           <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
           <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-left max-w-2xl">
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Asesoramiento Legal</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Cumplimiento normativo <br/>
                <span className="text-[#70a2ad]">garantizado</span>.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                Nuestros expertos le ayudarán a determinar qué tipo de servicio necesita su instalación 
                para cumplir con toda la legislación vigente sin costes innecesarios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Consulta Gratuita
              </Button>
              <Button 
                onClick={() => onNavigate('services-overview')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white min-w-[200px]"
              >
                Ver Servicios
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
