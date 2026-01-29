import React from 'react';
import { Wind, CheckCircle, Target, Clock, Shield, ArrowRight, Gauge, Activity, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';



export function AirTestingPage({ onNavigate }) {
  const advantages = [
    'Mayor eficacia en la detección de microporos',
    'Identificación rápida sin agua',
    'Sin riesgo de daños por presión hidráulica',
    'Método económico y eficiente',
    'Resultados inmediatos in-situ',
    'Compatible con PVC y tuberías antiguas'
  ];

  const applications = [
    {
      icon: Target,
      title: 'Tuberías de Piscinas',
      description: 'Ideal para detectar fugas en sistemas de circulación y filtrado.'
    },
    {
      icon: Shield,
      title: 'Sistemas de Aspiración',
      description: 'Verificación de estanqueidad en skimmers y limpiafondos.'
    },
    {
      icon: Wind,
      title: 'Líneas de Retorno',
      description: 'Pruebas de presión en tuberías de retorno y boquillas de impulsión.'
    },
    {
      icon: Clock,
      title: 'Obra Nueva',
      description: 'Certificación de calidad y estanqueidad antes del hormigonado.'
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Diagnóstico Neumático</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Pruebas de <br/>
                <span className="font-semibold text-[#70a2ad]">Presión con Aire</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Método avanzado y no invasivo para la detección de fugas. 
                Resultados rápidos y precisos que garantizan la integridad de sus instalaciones.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Prueba
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Advantages */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Description */}
             <div className="lg:col-span-5">
                <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-8">
                  Tecnología <span className="text-[#70a2ad] font-medium">Neumática</span>
                </h2>
                <p className="text-gray-500 mb-10 leading-relaxed font-light text-lg">
                   Las pruebas mediante aire comprimido son especialmente efectivas para detectar 
                   pequeñas fugas que podrían pasar desapercibidas con agua. Este sistema permite 
                   presurizar las tuberías de forma controlada y monitorizar la caída de presión en tiempo real.
                </p>
                
                <div className="bg-[#f8f9fa] p-8 border border-[#141516]/5">
                   <h3 className="text-sm font-mono text-[#141516] uppercase tracking-widest mb-6">Ventajas Técnicas</h3>
                   <ul className="space-y-4">
                      {advantages.map((adv, i) => (
                         <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#70a2ad] mt-2 shrink-0"></div>
                            <span className="text-sm text-gray-600 font-light">{adv}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
             
             {/* Right: Methodology Steps */}
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#141516]/10">
                   {[
                      { title: 'Aislamiento', desc: 'Sellado hermético de las líneas a probar mediante tapones neumáticos.' },
                      { title: 'Presurización', desc: 'Inyección de aire a presión controlada según normativa.' },
                      { title: 'Monitorización', desc: 'Medición precisa de la caída de presión con manómetros digitales.' },
                      { title: 'Diagnóstico', desc: 'Evaluación técnica de resultados y localización acústica.' }
                   ].map((step, i) => (
                      <div key={i} className="p-10 border-b border-r border-[#141516]/10 hover:bg-gray-50 transition-colors group relative">
                         <div className="text-4xl font-light text-[#141516]/10 group-hover:text-[#70a2ad]/20 font-[Urbanist] mb-4 transition-colors absolute top-6 right-6">
                            0{i + 1}
                         </div>
                         <h4 className="font-medium text-[#141516] mb-3 font-[Urbanist] text-lg">{step.title}</h4>
                         <p className="text-sm text-gray-500 font-light leading-relaxed pr-8">{step.desc}</p>
                      </div>
                   ))}
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#141516 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Versatilidad</span>
                 <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Aplicaciones <span className="font-medium">Principales</span></h2>
              </div>
              <div className="hidden md:block">
                 <div className="flex gap-2">
                    <div className="w-12 h-px bg-[#141516]/20"></div>
                    <div className="w-4 h-px bg-[#70a2ad]"></div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#141516]/10">
              {applications.map((app, i) => (
                 <div key={i} className="group p-8 border-r border-b border-[#141516]/10 bg-white hover:bg-[#70a2ad]/5 transition-colors last:border-r-0 lg:last:border-r-0">
                    <div className="mb-6">
                       <app.icon className="w-8 h-8 text-[#70a2ad] stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-medium text-[#141516] mb-3 font-[Urbanist]">{app.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                       {app.description}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Technical Data / Banner */}
      <section className="bg-[#141516] border-y border-white/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="py-12 md:px-8 first:pl-0 flex items-center gap-6">
                  <Gauge className="w-10 h-10 text-[#70a2ad] stroke-[1]" />
                  <div>
                     <div className="text-2xl font-light text-white font-mono">0.1 bar</div>
                     <div className="text-xs text-gray-500 uppercase tracking-widest">Precisión</div>
                  </div>
               </div>
               <div className="py-12 md:px-8 flex items-center gap-6">
                  <Clock className="w-10 h-10 text-[#70a2ad] stroke-[1]" />
                  <div>
                     <div className="text-2xl font-light text-white font-mono">30 min</div>
                     <div className="text-xs text-gray-500 uppercase tracking-widest">Tiempo Medio</div>
                  </div>
               </div>
               <div className="py-12 md:px-8 flex items-center gap-6">
                  <Shield className="w-10 h-10 text-[#70a2ad] stroke-[1]" />
                  <div>
                     <div className="text-2xl font-light text-white font-mono">100%</div>
                     <div className="text-xs text-gray-500 uppercase tracking-widest">No Invasivo</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-[#141516] relative overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Engineering Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-left max-w-2xl">
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Soporte Técnico</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Garantice la <span className="text-[#70a2ad]">integridad</span> <br/>
                de sus tuberías.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                Evite obras costosas detectando los problemas antes de llenar la piscina. 
                Tecnología de precisión para su tranquilidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Solicitar Prueba
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