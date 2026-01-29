import React from 'react';
import { 
  Thermometer, 
  CheckCircle, 
  Zap, 
  Leaf, 
  TrendingUp, 
  Sun, 
  ArrowRight,
  Maximize2,
  Wind,
  Gauge
} from 'lucide-react';
import { Button } from '../../components/ui/button';



export function HeatPumpsPage({ onNavigate }) {
  const models = [
    {
      name: 'Serie Compact',
      power: '5-8 kW',
      pool: '15-30 m³',
      features: ['Compresor rotativo', 'Intercambiador titanio', 'Desescarche automático'],
      price: 'Desde 1.200€',
      cop: '4.8',
      popular: false
    },
    {
      name: 'Serie Inverter Pro',
      power: '9-13 kW',
      pool: '30-60 m³',
      features: ['Tecnología Full Inverter', 'Control Wi-Fi nativo', 'Funcionamiento hasta -7ºC'],
      price: 'Desde 1.800€',
      cop: '5.2',
      popular: true
    },
    {
      name: 'Serie Advance',
      power: '14-18 kW',
      pool: '60-100 m³',
      features: ['Doble ventilador', 'Modo silencioso plus', 'Eficiencia energética A++'],
      price: 'Desde 2.500€',
      cop: '5.5',
      popular: false
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Eco-Eficiencia',
      description: 'Sistema aerotérmico que aprovecha la energía latente del aire exterior.',
      stat: 'A+++'
    },
    {
      icon: Zap,
      title: 'Alto Rendimiento',
      description: 'Coeficiente de rendimiento (COP) superior a 5.0 en condiciones estándar.',
      stat: 'COP > 5'
    },
    {
      icon: Sun,
      title: 'Clima Extendido',
      description: 'Mantiene la temperatura ideal incluso en meses de entretiempo.',
      stat: '28ºC'
    },
    {
      icon: TrendingUp,
      title: 'Ahorro Operativo',
      description: 'Reducción drástica del coste por kW térmico frente a resistencias.',
      stat: '-80%'
    }
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Aerotermia</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Climatización <br/>
                <span className="text-[#70a2ad] font-medium">Eficiente</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Extiende tu temporada de baño. Tecnología de bomba de calor para un confort térmico sostenible y económico.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('quote')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                >
                  Calcular Potencia
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
               <div className="absolute top-0 right-0 p-2">
                  <Thermometer className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">COP MEDIO</span>
                        <span className="font-mono text-sm text-[#70a2ad]">5.2</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">AHORRO</span>
                        <span className="font-mono text-sm text-[#70a2ad]">80%</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-mono text-sm text-gray-400">TEMP. OBJETIVO</span>
                        <span className="font-mono text-sm text-[#70a2ad]">28ºC</span>
                     </div>
                  </div>
                  
                  {/* Energy Chart Visualization */}
                  <div className="mt-8">
                     <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2">
                        <span>CONSUMO</span>
                        <span>APORTE</span>
                     </div>
                     <div className="flex items-center gap-1 h-8">
                        <div className="h-full bg-gray-600 w-1/5 flex items-center justify-center text-[10px] text-white">1kW</div>
                        <div className="h-full bg-[#70a2ad] w-4/5 flex items-center justify-center text-[10px] text-white">5kW TÉRMICOS</div>
                     </div>
                     <div className="text-center mt-2 text-gray-400 font-mono text-[10px]">MULTIPLICADOR DE ENERGÍA X5</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features Grid */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                  Principios <span className="font-medium text-[#70a2ad]">Termodinámicos</span>
               </h2>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Tecnología Inverter</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
            {features.map((feat, i) => (
              <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group relative overflow-hidden">
                <feat.icon className="h-8 w-8 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
                <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{feat.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                  {feat.description}
                </p>
                <div className="inline-block border border-[#70a2ad]/30 px-2 py-1 text-[10px] font-mono text-[#70a2ad] uppercase">
                   {feat.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Especificaciones Técnicas</h2>
            <div className="h-px w-full bg-[#141516]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#141516]/10 divide-y md:divide-y-0 md:divide-x divide-[#141516]/10">
            {models.map((model, i) => (
              <div key={i} className={`p-8 bg-white relative group ${model.popular ? 'bg-gray-50' : ''}`}>
                {model.popular && (
                  <div className="absolute top-0 right-0">
                     <div className="bg-[#70a2ad] text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                        Recomendado
                     </div>
                  </div>
                )}
                
                <div className="mb-6">
                   <h3 className="text-xl font-medium text-[#141516] font-[Urbanist]">{model.name}</h3>
                   <div className="flex gap-4 mt-2">
                      <div className="text-xs font-mono text-gray-500 border border-gray-200 px-1">{model.power}</div>
                      <div className="text-xs font-mono text-gray-500 border border-gray-200 px-1">COP {model.cop}</div>
                   </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-[#141516]/10">
                   <div className="text-3xl font-light text-[#141516]">{model.price}</div>
                   <div className="text-xs text-gray-400 mt-1">Volumen: {model.pool}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {model.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${model.popular ? 'bg-[#70a2ad]' : 'bg-gray-300'}`}></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Button 
                   onClick={() => onNavigate('contact')}
                   className={`w-full rounded-none h-12 text-xs uppercase tracking-widest font-medium ${
                      model.popular 
                      ? 'bg-[#141516] text-white hover:bg-[#70a2ad]' 
                      : 'bg-white border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white'
                   } transition-colors`}
                >
                   Solicitar Estudio
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation - Dark Section */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Instalación y <span className="text-[#70a2ad]">Puesta en Marcha</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                     La ubicación de la bomba de calor es crítica para su rendimiento. Nuestro equipo técnico evalúa los flujos de aire y la distancia hidráulica para maximizar el COP del sistema.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="border border-white/10 p-4 bg-white/5">
                        <Wind className="h-6 w-6 text-[#70a2ad] mb-2" />
                        <h4 className="font-medium text-white text-sm mb-1">Ventilación</h4>
                        <p className="text-xs text-gray-500">Espacio libre requerido para intercambio de aire.</p>
                     </div>
                     <div className="border border-white/10 p-4 bg-white/5">
                        <Gauge className="h-6 w-6 text-[#70a2ad] mb-2" />
                        <h4 className="font-medium text-white text-sm mb-1">Bypass</h4>
                        <p className="text-xs text-gray-500">Regulación precisa del caudal de agua.</p>
                     </div>
                  </div>
               </div>
               
               <div className="relative">
                  {/* Abstract diagram of heat pump placement */}
                  <div className="border border-white/10 p-8 relative">
                     <div className="absolute top-0 right-0 p-2 text-xs font-mono text-gray-500">DIAGRAMA FLUJO</div>
                     <div className="grid grid-cols-3 gap-4 text-center mt-4">
                        <div className="col-span-1 flex flex-col items-center justify-center">
                           <div className="w-full h-24 border border-dashed border-gray-600 rounded flex items-center justify-center mb-2">
                              <span className="text-xs text-gray-400">AIRE FRIO</span>
                           </div>
                           <ArrowRight className="rotate-90 text-gray-600" />
                        </div>
                        <div className="col-span-1 border border-[#70a2ad] h-32 flex items-center justify-center relative bg-[#70a2ad]/10">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141516] px-2 text-xs text-[#70a2ad]">BOMBA</div>
                           <Maximize2 className="text-[#70a2ad]" />
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center">
                           <div className="w-full h-24 border border-dashed border-gray-600 rounded flex items-center justify-center mb-2">
                              <span className="text-xs text-gray-400">AIRE CALIENTE</span>
                           </div>
                           <ArrowRight className="rotate-90 text-gray-600" />
                        </div>
                     </div>
                     <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">ENTRADA AGUA</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-red-500 mx-4"></div>
                        <span className="text-xs text-gray-500">SALIDA AGUA</span>
                     </div>
                  </div>
               </div>
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
            Disfruta tu piscina <span className="text-[#70a2ad]">todo el año</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
             No dejes que el clima limite tus baños. Solicita un estudio térmico gratuito y descubre la eficiencia de la aerotermia.
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