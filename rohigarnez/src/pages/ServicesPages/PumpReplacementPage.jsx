import { useState, useEffect } from 'react';
import {
   Zap,
   VolumeX,
   Award,
   Activity,
   DollarSign,
   Volume2,
   Gauge,
   Clock
} from 'lucide-react';
import { Button } from '../../components/ui/button';


export default function PumpReplacementPage({ onNavigate }) {

   const iconMap = {
      DollarSign,
      VolumeX,
      Award,
      Activity,
      Volume2,
      Gauge,
      Clock
   }

   const [pumpData, setPumpData] = useState(null);

   useEffect(() => {
      const fetchPumpData = async () => {
         try {
            const res = await fetch(
               `${import.meta.env.VITE_API_URL}/api/services/pumpreplacementpage`
            )
            const data = await res.json();
            setPumpData(data);
         }
         catch (error) {
            console.error('Error cargando PumpReplacementPage:', error);
         }
      }
      fetchPumpData();
   }, []);

   return (
      <div className="min-h-screen bg-white font-sans selection:bg-[#70a2ad]/20">

         {/* Header Section */}
         <section className="bg-[#141516] text-white pt-32 pb-24 relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
               <div className="absolute top-0 right-1/3 w-px h-full bg-white/5"></div>
               <div className="absolute bottom-0 left-1/4 w-px h-2/3 bg-white/5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                  <div>
                     <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-[#70a2ad]"></div>
                        <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Eficiencia Hidráulica</span>
                     </div>
                     <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                        Sustitución de <br />
                        <span className="text-[#70a2ad] font-medium">Bombas</span>
                     </h1>
                     <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                        Moderniza el corazón de tu piscina. Tecnología de velocidad variable para un ahorro drástico y un silencio absoluto.
                     </p>
                     <div className="flex gap-4">
                        <Button
                           onClick={() => onNavigate('quote')}
                           className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                        >
                           Calcular Ahorro
                        </Button>
                     </div>
                  </div>

                  <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                     <div className="absolute top-0 right-0 p-2">
                        <Zap className="h-6 w-6 text-[#70a2ad] opacity-50" />
                     </div>
                     <div className="h-full flex flex-col justify-between">
                        <div className="space-y-4">
                           <h3 className="text-white font-[Urbanist] mb-6">Proyección de Ahorro (5 Años)</h3>

                           <div className="space-y-6">
                              <div>
                                 <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                    <span>BOMBA ESTÁNDAR</span>
                                    <span>4.000€</span>
                                 </div>
                                 <div className="h-1 bg-white/10 w-full">
                                    <div className="h-full bg-gray-500 w-full"></div>
                                 </div>
                              </div>

                              <div>
                                 <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                    <span>VELOCIDAD VARIABLE</span>
                                    <span className="text-[#70a2ad]">725€</span>
                                 </div>
                                 <div className="h-1 bg-white/10 w-full">
                                    <div className="h-full bg-[#70a2ad] w-[18%] relative">
                                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-glow"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 text-right">
                           <span className="text-xs font-mono text-gray-500 uppercase">Retorno de Inversión</span>
                           <div className="text-white font-[Urbanist] text-xl">~18 Meses</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Diagnosis Section - Technical Grid */}
         <section className="py-24 bg-white border-b border-[#141516]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                     <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                        Diagnóstico <span className="font-medium text-[#70a2ad]">Técnico</span>
                     </h2>
                  </div>
                  <div className="mt-4 md:mt-0">
                     <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Indicadores de Fallo</span>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
                  {pumpData?.content?.diagnosis?.map((item, i) => {
                     const Icon = iconMap[item.icon];
                     return (
                        <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                           {Icon && <Icon className="h-8 w-8 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />}
                           <h3 className="text-lg font-medium text-[#141516] mb-2 font-[Urbanist]">{item.sign}</h3>
                           <p className="text-sm text-gray-500 font-light leading-relaxed">
                              {item.desc}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Benefits Section - Technical Grid */}

         <section className="py-24 bg-white border-b border-[#141516]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                     <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                        Ventajas <span className="font-medium text-[#70a2ad]">Técnicas</span>
                     </h2>
                  </div>
                  <div className="mt-4 md:mt-0">
                     <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Bombas de Velocidad Variable</span>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
                  {pumpData?.content?.benefits?.map((benefit, i) => {
                     const Icon = iconMap[benefit.icon];
                     return (
                        <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group relative">
                           <div className="flex items-start justify-between mb-6">
                              {Icon && <Icon className="h-8 w-8 text-[#141516] stroke-[1] group-hover:text-[#70a2ad] transition-colors" />}
                              <div className="font-mono text-2xl font-light text-[#70a2ad]">
                                 {benefit.stat}
                              </div>
                           </div>
                           <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{benefit.title}</h3>
                           <p className="text-sm text-gray-500 font-light leading-relaxed">
                              {benefit.description}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Comparison Table */}
         <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="mb-16">
                  <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Tecnología vs Convencional</h2>
                  <div className="h-px w-full bg-[#141516]/10"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#141516]/10 divide-y md:divide-y-0 md:divide-x divide-[#141516]/10 max-w-5xl mx-auto">
                  {pumpData?.content?.pumpTypes?.map((pump, i) => (
                     <div key={i} className={`p-10 bg-white relative group ${pump.recommended ? 'bg-gray-50' : ''}`}>
                        {pump.recommended && (
                           <div className="absolute top-0 right-0">
                              <div className="bg-[#70a2ad] text-white text-[10px] uppercase font-bold px-4 py-1 tracking-widest">
                                 Elección Técnica
                              </div>
                           </div>
                        )}

                        <div className="mb-8">
                           <h3 className="text-2xl font-medium text-[#141516] font-[Urbanist]">{pump.type}</h3>
                           <div className="text-sm font-mono text-gray-500 mt-2 uppercase tracking-wide">{pump.subtitle}</div>
                        </div>

                        <div className="mb-10 pb-10 border-b border-[#141516]/10 flex items-baseline gap-2">
                           <div className="text-4xl font-light text-[#141516]">{pump.price}</div>
                           <div className="text-xs text-gray-400">instalación incl.</div>
                        </div>

                        <div className="space-y-6 mb-10">
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Potencia</div>
                                 <div className="text-[#141516] font-medium">{pump.power}</div>
                              </div>
                              <div>
                                 <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Capacidad</div>
                                 <div className="text-[#141516] font-medium">{pump.pool}</div>
                              </div>
                           </div>

                           <ul className="space-y-3 pt-4 border-t border-[#141516]/5">
                              {pump.features.map((feat, j) => (
                                 <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                    <div className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${pump.recommended ? 'bg-[#70a2ad]' : 'bg-gray-300'}`}></div>
                                    {feat}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <Button
                           onClick={() => onNavigate('contact')}
                           className={`w-full rounded-none h-14 text-xs uppercase tracking-widest font-medium ${pump.recommended
                              ? 'bg-[#141516] text-white hover:bg-[#70a2ad]'
                              : 'bg-transparent border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white'
                              } transition-colors`}
                        >
                           Solicitar Instalación
                        </Button>
                     </div>
                  ))}
               </div>
            </div>
         </section>



         {/* Installation Protocol - Dark Section */}
         <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                  <div className="max-w-2xl">
                     <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                        Protocolo de <span className="text-[#70a2ad]">Sustitución</span>
                     </h2>
                     <p className="text-gray-400 font-light leading-relaxed">
                        Nuestro equipo técnico realiza el cambio minimizando el tiempo de inactividad de su instalación. Proceso limpio, rápido y certificado.
                     </p>
                  </div>
                  <div className="mt-8 md:mt-0 border border-white/10 px-6 py-3 bg-white/5">
                     <span className="font-mono text-[#70a2ad] text-xl mr-2">04</span>
                     <span className="font-light text-sm text-gray-400 uppercase tracking-widest">Fases Técnicas</span>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {pumpData?.content?.installprotocol?.map((step, i) => (
                     <div key={i} className="relative group">
                        <div className="absolute top-0 left-0 text-6xl font-light text-white/5 font-[Urbanist] -translate-y-4 -translate-x-4 select-none group-hover:text-[#70a2ad]/10 transition-colors">
                           {(i + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="relative pt-8 border-t border-white/10 group-hover:border-[#70a2ad] transition-colors">
                           <h3 className="text-lg font-medium text-white mb-3 font-[Urbanist]">{step.title}</h3>
                           <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                              {step.desc}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-32 bg-[#141516] text-white overflow-hidden relative border-t border-white/10">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
               <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
               <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
               <div className="flex justify-center mb-10">
                  <div className="h-px w-24 bg-[#70a2ad]"></div>
               </div>

               <h2 className="text-4xl md:text-5xl font-light mb-8 font-[Urbanist] tracking-tight">
                  Empieza a ahorrar <span className="text-[#70a2ad]">hoy</span>
               </h2>

               <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                  Realizamos el cambio de bomba en una sola visita. Sin obras, sin complicaciones y con garantía de eficiencia.
               </p>

               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                     onClick={() => onNavigate('projects')}
                     size="lg"
                     className="min-w-[240px] bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none h-14 text-sm uppercase tracking-widest font-medium transition-all"
                  >
                     Proyectos
                  </Button>
                  <Button
                     onClick={() => onNavigate('contact')}
                     size="lg"
                     variant="outline"
                     className="min-w-[240px] border border-white/20 text-white hover:bg-white/5 hover:text-white hover:border-white rounded-none bg-transparent h-14 text-sm uppercase tracking-widest font-medium transition-all"
                  >
                     Contactar
                  </Button>
               </div>
            </div>
         </section>
      </div>
   );
}