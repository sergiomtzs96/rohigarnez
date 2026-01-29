import React from 'react';
import { Button } from '../../components/ui/button';
import { 
  Leaf,
  DollarSign,
  Settings,
  Heart,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';



export function SaltChlorinatorPage({ onNavigate }) {
  const benefits = [
    {
      title: 'Agua más Suave',
      description: 'Sensación sedosa en la piel, sin irritaciones ni sequedad.',
      icon: Heart,
      highlight: '100% Natural'
    },
    {
      title: 'Menos Químicos',
      description: 'Reducción del 80% en el uso de productos químicos tradicionales.',
      icon: Leaf,
      highlight: '80% Menos químicos'
    },
    {
      title: 'Ahorro a Largo Plazo',
      description: 'Amortización en 2-3 años por menor coste de mantenimiento.',
      icon: DollarSign,
      highlight: 'ROI 2-3 años'
    },
    {
      title: 'Mantenimiento Automático',
      description: 'Sistema inteligente que ajusta la producción automáticamente.',
      icon: Settings,
      highlight: '90% Automático'
    }
  ];

  const systems = [
    {
      brand: 'Zodiac TRi',
      capacity: 'Hasta 75m³',
      price: 'Desde 1.200€',
      features: [
        'Control automático pH',
        'Display LED intuitivo',
        'Electrodo auto-limpiante',
        'Garantía 3 años',
        'Producción 20g/h'
      ],
      recommended: false,
      installation: '4-6 horas'
    },
    {
      brand: 'Hayward AquaRite',
      capacity: 'Hasta 110m³',
      price: 'Desde 1.800€',
      features: [
        'Tecnología TurboCell',
        'Control digital avanzado',
        'Función super-cloración',
        'Garantía 5 años',
        'Producción 40g/h'
      ],
      recommended: true,
      installation: '5-7 horas'
    },
    {
      brand: 'Pentair IntelliChlor',
      capacity: 'Hasta 150m³',
      price: 'Desde 2.400€',
      features: [
        'Sistema IntelliTouch',
        'Control por app móvil',
        'Autodiagnóstico completo',
        'Garantía 7 años',
        'Producción 60g/h'
      ],
      recommended: false,
      installation: '6-8 horas'
    }
  ];

  const installation = [
    { step: '01', title: 'Evaluación Técnica', desc: 'Análisis de la instalación hidráulica y dimensionamiento.' },
    { step: '02', title: 'Montaje Hidráulico', desc: 'Instalación de la célula electrolítica en bypass.' },
    { step: '03', title: 'Conexión Eléctrica', desc: 'Instalación del cuadro de control y automatismos.' },
    { step: '04', title: 'Calibración', desc: 'Ajuste de parámetros y configuración de salinidad.' },
    { step: '05', title: 'Puesta en Marcha', desc: 'Equilibrado químico inicial y verificación.' }
  ];

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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Tratamiento Natural</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Cloración <br/>
                <span className="text-[#70a2ad] font-medium">Salina</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Tecnología de electrólisis para un agua pura. Transforma tu piscina en un sistema autosuficiente y libre de químicos agresivos.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('quote')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                >
                  Solicitar Estudio
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
               <div className="absolute top-0 right-0 p-2">
                  <Sparkles className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">PUREZA AGUA</span>
                        <span className="font-mono text-sm text-[#70a2ad]">99.9%</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">QUÍMICOS</span>
                        <span className="font-mono text-sm text-[#70a2ad]">-80%</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">CONFORT</span>
                        <span className="font-mono text-sm text-[#70a2ad]">MÁXIMO</span>
                     </div>
                  </div>
                  <div className="mt-8 text-right">
                     <span className="text-xs font-mono text-gray-500 uppercase">Estado del sistema</span>
                     <div className="text-white font-[Urbanist] text-lg">Operativo / Optimizado</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#141516]/10 pb-8">
            <div>
               <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                  Ventajas <span className="font-medium text-[#70a2ad]">Técnicas</span>
               </h2>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Optimización de recursos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <benefit.icon className="h-12 w-12 text-[#141516]/5 -rotate-12" />
                </div>
                <benefit.icon className="h-8 w-8 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
                <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{benefit.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="inline-block border border-[#70a2ad]/30 px-2 py-1 text-[10px] font-mono text-[#70a2ad] uppercase">
                   {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process - Dark Technical Section */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] border border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute right-0 top-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-4">
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Proceso de <span className="text-[#70a2ad]">Integración</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                     Implementamos el sistema de cloración salina con una intervención mínima, asegurando la integridad hidráulica de su instalación actual.
                  </p>
                  <div className="border border-white/10 p-6 bg-white/5">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center border border-[#70a2ad] text-[#70a2ad]">
                           <Clock className="h-5 w-5" />
                        </div>
                        <div>
                           <div className="text-xs font-mono text-gray-400 uppercase">Tiempo Estimado</div>
                           <div className="text-lg font-medium">4 - 8 Horas</div>
                        </div>
                     </div>
                     <p className="text-xs text-gray-500">
                        La instalación completa se realiza en una sola jornada de trabajo, minimizando el tiempo de inactividad de la piscina.
                     </p>
                  </div>
               </div>
               
               <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 gap-0">
                     {installation.map((step, i) => (
                        <div key={i} className="flex group border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                           <div className="w-16 py-6 text-sm font-mono text-[#70a2ad] flex items-start justify-center pt-7">
                              {step.step}
                           </div>
                           <div className="flex-1 py-6 pr-6 pl-2">
                              <h3 className="text-lg font-medium text-white mb-1 font-[Urbanist] group-hover:text-[#70a2ad] transition-colors">
                                 {step.title}
                              </h3>
                              <p className="text-sm text-gray-400 font-light">
                                 {step.desc}
                              </p>
                           </div>
                           <div className="w-12 py-6 flex items-center justify-center text-gray-600 group-hover:text-white transition-colors">
                              <ArrowRight className="h-4 w-4" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Systems Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Especificaciones de Equipos</h2>
            <div className="h-px w-full bg-[#141516]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#141516]/10 divide-y md:divide-y-0 md:divide-x divide-[#141516]/10">
            {systems.map((sys, i) => (
              <div key={i} className={`p-8 bg-white relative group ${sys.recommended ? 'bg-gray-50' : ''}`}>
                {sys.recommended && (
                  <div className="absolute top-0 right-0">
                     <div className="bg-[#70a2ad] text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                        Recomendado
                     </div>
                  </div>
                )}
                
                <div className="mb-6">
                   <h3 className="text-xl font-medium text-[#141516] font-[Urbanist]">{sys.brand}</h3>
                   <div className="text-sm font-mono text-gray-500 mt-1">{sys.capacity}</div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-[#141516]/10">
                   <div className="text-3xl font-light text-[#141516]">{sys.price}</div>
                   <div className="text-xs text-gray-400 mt-1">Incluye instalación básica</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {sys.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#70a2ad] mt-1.5 flex-shrink-0"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Button 
                   onClick={() => onNavigate('contact')}
                   className={`w-full rounded-none h-12 text-xs uppercase tracking-widest font-medium ${
                      sys.recommended 
                      ? 'bg-[#141516] text-white hover:bg-[#70a2ad]' 
                      : 'bg-white border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white'
                   } transition-colors`}
                >
                   Consultar Disponibilidad
                </Button>
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
            ¿Listo para dar el <span className="text-[#70a2ad]">salto?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Instalación profesional en una sola jornada. Garantía total de funcionamiento y soporte técnico continuo.
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