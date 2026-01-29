import React from 'react';
import { Droplets, CheckCircle, Clock, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';


export function PoolsWithoutLifeguardPage({ onNavigate }) {
  const services = [
    'Limpieza y aspirado completo del vaso',
    'Cepillado de paredes y fondo',
    'Vaciado de skimmers y prefiltros',
    'Análisis y control químico del agua',
    'Limpieza de línea de flotación',
    'Control y ajuste de pH y cloro',
    'Revisión del sistema de filtración',
    'Limpieza de filtros',
    'Mantenimiento preventivo de equipos',
    'Informe mensual del estado de la piscina'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Experiencia Profesional',
      description: 'Más de 15 años cuidando piscinas comunitarias'
    },
    {
      icon: Clock,
      title: 'Puntualidad Garantizada',
      description: 'Visitas programadas sin interrupciones'
    },
    {
      icon: Users,
      title: 'Equipo Cualificado',
      description: 'Técnicos certificados y con experiencia'
    },
    {
      icon: CheckCircle,
      title: 'Calidad Asegurada',
      description: 'Productos homologados y de primera calidad'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-[#141516] pt-32 pb-24 overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#70a2ad]"></div>
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Servicio Técnico</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Mantenimiento <br/>
                <span className="font-semibold text-[#70a2ad]">Sin Socorristas</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Gestión integral para comunidades que priorizan la excelencia técnica.
                Control de parámetros, higiene y funcionamiento ininterrumpido.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('projects')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Proyectos
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
              >
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Services List */}
            <div className="lg:col-span-7">
              <div className="flex items-end gap-4 mb-12">
                 <h2 className="text-4xl font-light text-[#141516] font-[Urbanist]">Protocolo de <span className="text-[#70a2ad] font-medium">Actuación</span></h2>
                 <div className="h-px flex-1 bg-[#141516]/10 mb-2"></div>
              </div>
              
              <p className="text-gray-500 mb-12 font-light text-lg max-w-2xl leading-relaxed">
                Nuestro protocolo de mantenimiento cubre cada aspecto técnico y sanitario 
                de su instalación. Nos anticipamos a los problemas para garantizar un 
                funcionamiento ininterrumpido.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#141516]/10">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 border-b border-r border-[#141516]/10 hover:bg-gray-50 transition-colors group">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 bg-[#70a2ad] transform group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="text-[#141516] font-light text-sm tracking-wide leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Benefits Panel */}
            <div className="lg:col-span-5">
               <div className="bg-[#f8f9fa] border border-[#141516]/5">
                  <div className="p-8 border-b border-[#141516]/5 bg-white">
                     <h3 className="text-xl font-medium text-[#141516] font-[Urbanist] mb-2">Estándares de Calidad</h3>
                     <p className="text-xs text-[#70a2ad] font-mono uppercase tracking-[0.2em]">Garantía Corporativa</p>
                  </div>
                  
                  <div className="grid grid-cols-1">
                     {benefits.map((benefit, index) => (
                       <div key={index} className="flex gap-6 p-8 border-b last:border-0 border-[#141516]/5 hover:bg-white transition-colors group">
                          <benefit.icon className="h-6 w-6 text-[#70a2ad] stroke-[1.5] group-hover:text-[#141516] transition-colors" />
                          <div>
                             <h4 className="font-medium text-[#141516] mb-2 font-[Urbanist]">{benefit.title}</h4>
                             <p className="text-sm text-gray-500 font-light leading-relaxed">{benefit.description}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Decorative Technical Element */}
               <div className="mt-8 flex justify-end opacity-50">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 bg-[#70a2ad]/20"></div>
                     <div className="w-2 h-2 bg-[#70a2ad]/40"></div>
                     <div className="w-2 h-2 bg-[#70a2ad]/60"></div>
                     <div className="w-2 h-2 bg-[#70a2ad]"></div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#141516]/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-4">Frecuencia de <span className="text-[#70a2ad] font-medium">Intervención</span></h2>
              <p className="text-gray-500 font-light text-lg">
                Configuraciones estándar adaptadas a la carga de uso y dimensiones de la instalación.
              </p>
            </div>
            <div className="hidden md:block pb-2">
               <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Planificación Técnica</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-[#141516]/10">
            {/* Plan 1 */}
            <div className="group p-8 md:p-12 border-r border-t border-b border-[#141516]/10 hover:bg-gray-50 transition-colors">
              <div className="mb-8">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Básico</span>
                <h3 className="text-3xl font-light text-[#141516]">1 Visita<span className="text-lg text-gray-400">/sem</span></h3>
              </div>
              <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed min-h-[40px]">
                Ideal para vasos de pequeñas dimensiones (&lt;50m³) con afluencia moderada.
              </p>
              <ul className="space-y-4">
                {['Limpieza semanal completa', 'Control químico básico', 'Revisión visual de equipos'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1 h-1 bg-[#141516]/20 mt-2 shrink-0 group-hover:bg-[#141516] transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan 2 - Highlighted */}
            <div className="relative p-8 md:p-12 border-r border-t border-b border-[#141516]/10 bg-[#70a2ad]/5">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#70a2ad]" />
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest block">Estándar</span>
                  <span className="bg-[#70a2ad] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">Recomendado</span>
                </div>
                <h3 className="text-3xl font-medium text-[#141516]">2 Visitas<span className="text-lg text-gray-400 font-light">/sem</span></h3>
              </div>
              <p className="text-gray-600 font-light text-sm mb-10 leading-relaxed min-h-[40px]">
                Equilibrio óptimo para comunidades medianas. Mantenimiento proactivo constante.
              </p>
              <ul className="space-y-4">
                {['Limpieza bi-semanal', 'Control químico avanzado', 'Mantenimiento preventivo', 'Informe mensual'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#141516] font-light">
                    <div className="w-1.5 h-1.5 bg-[#70a2ad] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan 3 */}
            <div className="group p-8 md:p-12 border-r border-t border-b border-[#141516]/10 hover:bg-gray-50 transition-colors">
              <div className="mb-8">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">Intensivo</span>
                <h3 className="text-3xl font-light text-[#141516]">3+ Visitas<span className="text-lg text-gray-400">/sem</span></h3>
              </div>
              <p className="text-gray-500 font-light text-sm mb-10 leading-relaxed min-h-[40px]">
                Para grandes volúmenes de agua o instalaciones con alta carga de baño.
              </p>
              <ul className="space-y-4">
                {['Limpieza frecuente', 'Control diario (opcional)', 'Mantenimiento exhaustivo', 'Soporte prioritario'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1 h-1 bg-[#141516]/20 mt-2 shrink-0 group-hover:bg-[#141516] transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Próximos Pasos</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Garantice la <span className="text-[#70a2ad]">excelencia</span> <br/>
                en su instalación.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                Nuestro departamento técnico está listo para evaluar las necesidades específicas de su comunidad y diseñar un plan a medida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Solicitar Estudio
              </Button>
              <Button 
                onClick={() => onNavigate('services-overview')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white min-w-[200px]"
              >
                Catálogo Completo
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}