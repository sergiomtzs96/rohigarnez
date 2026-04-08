import React from 'react';
import { Wrench, CheckCircle, AlertCircle, Shield, ArrowRight, Activity, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function PipeRepairPage({ onNavigate }) {
  const services = [
    'Reparación de tuberías rotas o agrietadas',
    'Sustitución de tramos deteriorados',
    'Actualización de tuberías obsoletas',
    'Reparación de uniones y codos',
    'Sellado de fugas en conexiones',
    'Instalación de nuevas tuberías',
    'Modernización del sistema de circulación',
    'Reparaciones de emergencia 24/7'
  ];

  const problems = [
    {
      title: 'Fugas Visibles',
      description: 'Pérdida evidente de agua en conexiones o tuberías',
      severity: 'high'
    },
    {
      title: 'Baja Presión',
      description: 'Disminución del caudal en jets y sistemas de retorno',
      severity: 'medium'
    },
    {
      title: 'Ruidos Extraños',
      description: 'Silbidos o ruidos en el sistema de circulación',
      severity: 'medium'
    },
    {
      title: 'Tuberías Antiguas',
      description: 'Más de 15 años sin renovación del sistema',
      severity: 'low'
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Mantenimiento Estructural</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Reparación de <br/>
                <span className="font-semibold text-[#70a2ad]">Tuberías</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Diagnóstico preciso y reparación profesional para recuperar la integridad hidráulica de su piscina. 
                Tecnología avanzada para soluciones duraderas.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Reparación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Process */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Services List */}
             <div className="lg:col-span-5">
                <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-8">
                  Soluciones <span className="text-[#70a2ad] font-medium">Integrales</span>
                </h2>
                <p className="text-gray-500 mb-12 leading-relaxed font-light text-lg">
                  Nuestro equipo de técnicos especializados utiliza técnicas no invasivas siempre que es posible 
                  para minimizar el impacto en su instalación, garantizando la máxima eficiencia.
                </p>
                
                <div className="grid grid-cols-1 border-t border-l border-[#141516]/10">
                   {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-4 p-5 border-b border-r border-[#141516]/10 hover:bg-gray-50 transition-colors group">
                         <div className="w-1.5 h-1.5 bg-[#141516]/20 group-hover:bg-[#70a2ad] transition-colors"></div>
                         <span className="text-sm text-[#141516] font-light">{service}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Right: Process Steps */}
             <div className="lg:col-span-7">
                <div className="bg-[#f8f9fa] p-10 h-full relative overflow-hidden border border-[#141516]/5">
                   <div className="absolute top-0 right-0 w-64 h-full bg-[#141516]/5 skew-x-12 transform origin-top"></div>
                   
                   <div className="relative z-10 mb-10">
                      <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest mb-2 block">Metodología</span>
                      <h3 className="text-2xl font-light text-[#141516] font-[Urbanist]">Proceso de Trabajo</h3>
                   </div>

                   <div className="space-y-0 relative z-10">
                     {[
                       { title: 'Diagnóstico', desc: 'Localización exacta del problema mediante pruebas de presión.' },
                       { title: 'Presupuesto', desc: 'Valoración detallada de costes y materiales necesarios.' },
                       { title: 'Reparación', desc: 'Ejecución técnica con materiales de alta resistencia (PN10/PN16).' },
                       { title: 'Verificación', desc: 'Pruebas de estanqueidad post-reparación.' },
                       { title: 'Garantía', desc: 'Certificación de obra y garantía de servicio.' }
                     ].map((step, i) => (
                       <div key={i} className="flex gap-6 pb-10 last:pb-0 relative group">
                          {/* Connector Line */}
                          {i < 4 && <div className="absolute left-[19px] top-8 bottom-0 w-px bg-[#141516]/10"></div>}
                          
                          <div className="w-10 h-10 rounded-none border border-[#141516]/10 bg-white flex items-center justify-center text-sm font-mono text-[#70a2ad] z-10 group-hover:border-[#70a2ad] transition-colors">
                             0{i + 1}
                          </div>
                          <div className="pt-1">
                            <h4 className="text-lg font-medium text-[#141516] mb-2 font-[Urbanist]">{step.title}</h4>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Common Problems Matrix */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Identificación de <span className="font-medium text-[#70a2ad]">Problemas</span></h2>
                 <p className="text-gray-500 font-light mt-4">Síntomas comunes que requieren intervención inmediata.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#141516]/10">
              {problems.map((problem, index) => (
                 <div key={index} className="p-8 border-r border-b border-[#141516]/10 hover:bg-[#f8f9fa] transition-colors group h-full">
                    <div className="flex justify-between items-start mb-6">
                       <AlertCircle className={`w-6 h-6 stroke-[1.5] ${
                          problem.severity === 'high' ? 'text-[#141516]' : 'text-[#70a2ad]'
                       }`} />
                       <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border ${
                          problem.severity === 'high' 
                             ? 'border-[#141516] text-[#141516]' 
                             : 'border-[#70a2ad]/30 text-[#70a2ad]'
                       }`}>
                          {problem.severity === 'high' ? 'Crítico' : 'Revisar'}
                       </span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{problem.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                       {problem.description}
                    </p>
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
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Urgencias Técnicas</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Recupere el funcionamiento <br/>
                <span className="text-[#70a2ad]">perfecto</span> de su piscina.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                No deje que una pequeña fuga comprometa la estructura de su instalación. 
                Solicite hoy mismo un diagnóstico profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Solicitar Reparación
              </Button>
              <Button 
                onClick={() => onNavigate('services-overview')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white min-w-[200px]"
              >
                Otros Servicios
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}