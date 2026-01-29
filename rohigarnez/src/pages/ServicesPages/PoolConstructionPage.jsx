import React from 'react';
import { Hammer, CheckCircle, Ruler, Palette, Award, Clock, Settings, ArrowRight, DraftingCompass, Truck, BrickWall, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';


export function PoolConstructionPage({ onNavigate }) {
  const features = [
    'Estudio geotécnico y topográfico previo',
    'Cálculo estructural en hormigón armado H-25',
    'Impermeabilización bicomponente elástica',
    'Equipos de filtración de alto rendimiento',
    'Iluminación LED RGB con control domótico',
    'Garantía decenal de estanqueidad',
    'Gestión integral de licencias municipales'
  ];

  const process = [
    {
      icon: DraftingCompass,
      title: 'Anteproyecto y Diseño',
      description: 'Modelado 3D y planimetría técnica adaptada a la normativa vigente.',
      duration: '1-2 semanas'
    },
    {
      icon: Truck,
      title: 'Excavación y Movimiento',
      description: 'Preparación del terreno y gestión de residuos a vertedero autorizado.',
      duration: '1 semana'
    },
    {
      icon: BrickWall,
      title: 'Encofrado y Estructura',
      description: 'Armado de acero corrugado y gunitado de hormigón vía húmeda.',
      duration: '2 semanas'
    },
    {
      icon: Settings,
      title: 'Instalaciones Técnicas',
      description: 'Montaje de red hidráulica, eléctrica y equipos de depuración.',
      duration: '1 semana'
    },
    {
      icon: Sparkles,
      title: 'Acabados y Entrega',
      description: 'Revestimiento, coronación y puesta en marcha certificada.',
      duration: '1-2 semanas'
    }
  ];

  const finishes = [
    {
      name: 'Gresite Vítreo',
      description: 'Mosaico tradicional de alta resistencia química y mecánica.',
      spec: 'Resistencia: Alta',
      type: 'Premium'
    },
    {
      name: 'Lámina Armada',
      description: 'Membrana de PVC-P con armadura de poliéster. Estanqueidad total.',
      spec: 'Garantía: 15 años',
      type: 'Técnico'
    },
    {
      name: 'Porcelánico',
      description: 'Grandes formatos antideslizantes para una estética moderna y continua.',
      spec: 'Acabado: Mate/Pétreo',
      type: 'Lujo'
    }
  ];

  const extras = [
    'Cloración Salina', 'Bombas de Calor Inverter', 'Cubiertas Automáticas', 
    'Jets de Hidromasaje', 'Iluminación Smart', 'Limpiafondos Integrados', 
    'Cascadas Laminares', 'Domótica Piscina'
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Obra Nueva</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Construcción <br/>
                <span className="font-semibold text-[#70a2ad]">de Piscinas</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Proyectos llave en mano con estándares de ingeniería civil. 
                Diseño arquitectónico, materiales de vanguardia y ejecución técnica impecable.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Anteproyecto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#141516] border-t border-white/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="py-12 md:px-8 first:pl-0">
                  <div className="text-4xl font-light text-white font-mono mb-2">500+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
                     <Award className="w-4 h-4 text-[#70a2ad]" /> Proyectos Ejecutados
                  </div>
               </div>
               <div className="py-12 md:px-8">
                  <div className="text-4xl font-light text-white font-mono mb-2">15</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
                     <Clock className="w-4 h-4 text-[#70a2ad]" /> Años de Experiencia
                  </div>
               </div>
               <div className="py-12 md:px-8">
                  <div className="text-4xl font-light text-white font-mono mb-2">10</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-[#70a2ad]" /> Años Garantía Estructural
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Technical Features & Process */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Engineering Approach */}
             <div className="lg:col-span-5">
                <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-8">
                  Ingeniería <span className="text-[#70a2ad] font-medium">Hidráulica</span>
                </h2>
                <p className="text-gray-500 mb-12 leading-relaxed font-light text-lg">
                  Cada piscina se diseña como una estructura de hormigón armado independiente, 
                  calculada para soportar las presiones del terreno y del agua sin fisuras.
                </p>
                
                <div className="bg-[#f8f9fa] p-8 border border-[#141516]/5">
                   <h3 className="text-sm font-mono text-[#141516] uppercase tracking-widest mb-6">Especificaciones Técnicas</h3>
                   <ul className="space-y-4">
                      {features.map((feat, i) => (
                         <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#70a2ad] mt-2 shrink-0"></div>
                            <span className="text-sm text-gray-600 font-light">{feat}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Right: Construction Timeline */}
             <div className="lg:col-span-7">
                <div className="border-l border-[#141516]/10 pl-8 md:pl-12 space-y-12 relative">
                   {process.map((step, index) => (
                      <div key={index} className="relative group">
                         {/* Timeline Dot */}
                         <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white border border-[#141516]/20 rounded-full group-hover:border-[#70a2ad] group-hover:bg-[#70a2ad] transition-all z-10"></div>
                         
                         <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between group-hover:translate-x-2 transition-transform duration-300">
                            <div className="flex-1">
                               <div className="flex items-center gap-3 mb-2">
                                  <step.icon className="w-5 h-5 text-[#70a2ad] stroke-[1.5]" />
                                  <h3 className="text-lg font-medium text-[#141516] font-[Urbanist]">{step.title}</h3>
                               </div>
                               <p className="text-sm text-gray-500 font-light leading-relaxed">
                                  {step.description}
                               </p>
                            </div>
                            <div className="md:text-right shrink-0">
                               <span className="text-xs font-mono text-[#70a2ad] border border-[#70a2ad]/30 px-2 py-1 bg-[#70a2ad]/5">
                                  {step.duration}
                               </span>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Materiales</span>
                 <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Acabados <span className="font-medium">Premium</span></h2>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#141516]/10 bg-white">
              {finishes.map((finish, index) => (
                 <div key={index} className="p-10 border-r border-[#141516]/10 last:border-r-0 hover:bg-gray-50 transition-colors group">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#70a2ad] mb-4">{finish.type}</div>
                    <h3 className="text-xl font-medium text-[#141516] mb-3 font-[Urbanist]">{finish.name}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 min-h-[40px]">
                       {finish.description}
                    </p>
                    <div className="pt-6 border-t border-[#141516]/5 flex justify-between items-center">
                       <span className="text-xs font-mono text-gray-400">{finish.spec}</span>
                    </div>
                 </div>
              ))}
           </div>

           {/* Extras Grid */}
           <div className="mt-24">
              <h3 className="text-sm font-mono text-[#141516] uppercase tracking-widest mb-8 text-center">Equipamiento Opcional</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
                 {extras.map((extra, index) => (
                    <div key={index} className="bg-white p-6 flex items-center justify-center text-center hover:bg-[#f8f9fa] transition-colors">
                       <span className="text-xs text-gray-600 font-medium uppercase tracking-wide">{extra}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-[#141516] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-left max-w-2xl">
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Oficina Técnica</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Diseñamos su <br/>
                <span className="text-[#70a2ad]">espacio exterior</span>.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                Desde el concepto arquitectónico hasta el primer baño. 
                Gestionamos su proyecto de forma integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Solicitar Proyecto
              </Button>
              <Button 
                onClick={() => onNavigate('projects')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white min-w-[200px]"
              >
                Ver Portfolio
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}