import React from 'react';
import { 
  Beaker, 
  Droplet, 
  Shield, 
  Settings, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Activity,
  Maximize2
} from 'lucide-react';
import { Button } from '../../components/ui/button';



export function PhMachinesPage({ onNavigate }) {
  const benefits = [
    {
      title: 'Control Automático',
      description: 'Regulación constante del pH sin intervención manual.',
      icon: Settings,
      stat: '24/7'
    },
    {
      title: 'Agua Equilibrada',
      description: 'Mantiene el pH ideal entre 7.2 y 7.6 permanentemente.',
      icon: Droplet,
      stat: 'pH 7.4'
    },
    {
      title: 'Ahorro de Químicos',
      description: 'Dosificación precisa que elimina el desperdicio.',
      icon: TrendingUp,
      stat: '-40%'
    },
    {
      title: 'Protección Equipos',
      description: 'Evita corrosión y calcificación de instalaciones.',
      icon: Shield,
      stat: '100%'
    }
  ];

  const systems = [
    {
      brand: 'Sistema pH Básico',
      capacity: 'Hasta 50m³',
      price: 'Desde 650€',
      features: [
        'Sonda de pH digital',
        'Bomba dosificadora 1.5 l/h',
        'Depósito 5 litros',
        'Display LCD',
        'Garantía 2 años'
      ],
      recommended: false
    },
    {
      brand: 'Sistema pH Professional',
      capacity: 'Hasta 100m³',
      price: 'Desde 950€',
      features: [
        'Sonda pH alta precisión',
        'Bomba dosificadora 3 l/h',
        'Depósito 10 litros',
        'Control digital avanzado',
        'Alarmas integradas',
        'Garantía 3 años'
      ],
      recommended: true
    },
    {
      brand: 'Sistema pH Premium',
      capacity: 'Hasta 200m³',
      price: 'Desde 1.450€',
      features: [
        'Doble sonda pH redundante',
        'Bomba dosificadora 5 l/h',
        'Depósito 20 litros',
        'Control Wi-Fi app móvil',
        'Registro de datos',
        'Auto-calibración'
      ],
      recommended: false
    }
  ];

  const installation = [
    { step: '01', title: 'Análisis Inicial', desc: 'Evaluación de parámetros del agua' },
    { step: '02', title: 'Montaje Sonda', desc: 'Instalación en tubería de retorno' },
    { step: '03', title: 'Dosificación', desc: 'Conexión de bomba inyectora' },
    { step: '04', title: 'Calibración', desc: 'Ajuste fino de sensores' },
    { step: '05', title: 'Validación', desc: 'Pruebas de funcionamiento' }
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Automatización</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Control de <br/>
                <span className="text-[#70a2ad] font-medium">pH y Dosificación</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Precisión digital para el equilibrio perfecto del agua. Elimina la manipulación de químicos y asegura la salud de tu piscina.
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
                  <Activity className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">RANGO pH</span>
                        <span className="font-mono text-sm text-[#70a2ad]">7.2 - 7.6</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">PRECISIÓN</span>
                        <span className="font-mono text-sm text-[#70a2ad]">±0.1</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">DOSIFICACIÓN</span>
                        <span className="font-mono text-sm text-[#70a2ad]">AUTO</span>
                     </div>
                  </div>
                  
                  {/* pH Scale Visualization */}
                  <div className="mt-8">
                     <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2">
                        <span>ACID</span>
                        <span>NEUTRAL</span>
                        <span>BASE</span>
                     </div>
                     <div className="h-2 w-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white rounded-full shadow-glow"></div>
                     </div>
                     <div className="text-center mt-2 text-white font-mono text-xs">TARGET: 7.4</div>
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
                   {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process - Dark Technical Section */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] border border-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-4">
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Proceso de <span className="text-[#70a2ad]">Integración</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                     Implementación no intrusiva con sensores de alta sensibilidad. Calibración certificada para una lectura fiable desde el primer minuto.
                  </p>
                  <div className="border border-white/10 p-6 bg-white/5">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center border border-[#70a2ad] text-[#70a2ad]">
                           <Clock className="h-5 w-5" />
                        </div>
                        <div>
                           <div className="text-xs font-mono text-gray-400 uppercase">Tiempo Estimado</div>
                           <div className="text-lg font-medium">2 - 4 Horas</div>
                        </div>
                     </div>
                     <p className="text-xs text-gray-500">
                        Intervención rápida sin necesidad de vaciado. Compatible con todos los sistemas de filtración.
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
            Olvídate de medir el <span className="text-[#70a2ad]">pH</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Automatiza el cuidado de tu piscina y disfruta de un agua perfecta siempre. Solicita presupuesto sin compromiso.
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