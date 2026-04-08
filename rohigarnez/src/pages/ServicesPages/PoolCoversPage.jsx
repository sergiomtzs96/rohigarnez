import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Leaf, 
  DollarSign, 
  Sun, 
  Lock, 
  ArrowRight, 
  Droplets,
  Thermometer,
  Layers,
  Scale
} from 'lucide-react';
import { Button } from '../../components/ui/button';



export function PoolCoversPage({ onNavigate }) {
  const products = [
    {
      name: 'Manta Térmica',
      type: 'Isotérmica',
      material: 'Polietileno Extruido',
      weight: '400 - 500 micras',
      price: 'Desde 12€/m²',
      features: ['Aumento temperatura', 'Evaporación cero', 'Fácil manipulación'],
      recommended: false,
      code: 'ISO-500'
    },
    {
      name: 'Cobertor de Barras',
      type: 'Seguridad Pasiva',
      material: 'PVC + Aluminio',
      weight: '580 g/m²',
      price: 'Desde 35€/m²',
      features: ['Seguridad niños/mascotas', 'Soporta 100kg', 'Uso 4 estaciones'],
      recommended: true,
      code: 'SEC-BAR'
    },
    {
      name: 'Persiana Automática',
      type: 'Premium Motorizada',
      material: 'Lamas Policarbonato',
      weight: '4 kg/m²',
      price: 'Desde 250€/m²',
      features: ['Automatización total', 'Estética superior', 'Aislamiento máximo'],
      recommended: false,
      code: 'AUT-PC'
    }
  ];

  const efficiencyMetrics = [
    {
      label: 'Reducción Evaporación',
      value: '98%',
      desc: 'Eliminación casi total de pérdidas por vapor.',
      icon: Droplets
    },
    {
      label: 'Retención Térmica',
      value: '+8ºC',
      desc: 'Ganancia de temperatura media en temporada.',
      icon: Thermometer
    },
    {
      label: 'Ahorro Químico',
      value: '60%',
      desc: 'Menor fotólisis del cloro por radiación UV.',
      icon: Leaf
    },
    {
      label: 'Seguridad',
      value: '100kg',
      desc: 'Resistencia de carga en modelos de seguridad.',
      icon: Shield
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Aislamiento Térmico</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Sistemas de <br/>
                <span className="text-[#70a2ad] font-medium">Cobertura</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Ingeniería de protección para su piscina. Minimice la evaporación, garantice la seguridad y optimice el consumo energético.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('quote')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                >
                  Solicitar Medición
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
               <div className="absolute top-0 right-0 p-2">
                  <Layers className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-6">
                     <h3 className="text-white font-[Urbanist] mb-2">Perfil de Aislamiento</h3>
                     
                     {/* Layer Diagram */}
                     <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                           <span>ATMÓSFERA</span>
                           <span>20ºC</span>
                        </div>
                        <div className="h-16 border-t border-dashed border-gray-600 flex items-center justify-center bg-transparent">
                            <span className="text-xs text-gray-600">AIRE EXTERIOR</span>
                        </div>
                        
                        {/* Cover Layer */}
                        <div className="h-2 bg-[#70a2ad] w-full relative group cursor-pointer hover:h-4 transition-all duration-300">
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-[#141516] opacity-0 group-hover:opacity-100 whitespace-nowrap">
                              BARRERA TÉRMICA
                           </div>
                        </div>
                        
                        {/* Water Layer */}
                        <div className="h-24 bg-[#141516] border border-white/10 relative overflow-hidden">
                           <div className="absolute inset-0 bg-blue-500/5"></div>
                           <div className="absolute top-2 left-4 text-xs text-blue-300/50">AGUA PISCINA</div>
                           <div className="absolute bottom-2 right-4 font-mono text-xl text-white">28ºC</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center text-xs font-mono text-gray-500">
                     <span>DELTA T: 8ºC</span>
                     <span>EVAPORACIÓN: 0%</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                     Eficiencia <span className="font-medium text-[#70a2ad]">Operativa</span>
                  </h2>
               </div>
               <div className="mt-4 md:mt-0">
                  <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Impacto Directo</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
               {efficiencyMetrics.map((item, i) => (
                  <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                     <item.icon className="h-8 w-8 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
                     <div className="text-3xl font-light text-[#141516] mb-2 font-[Urbanist]">{item.value}</div>
                     <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">{item.label}</h3>
                     <p className="text-xs text-gray-500 font-light leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Products Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Especificaciones Técnicas</h2>
            <div className="h-px w-full bg-[#141516]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#141516]/10 divide-y md:divide-y-0 md:divide-x divide-[#141516]/10">
            {products.map((prod, i) => (
              <div key={i} className={`p-10 bg-white relative group ${prod.recommended ? 'bg-gray-50' : ''}`}>
                {prod.recommended && (
                  <div className="absolute top-0 right-0">
                     <div className="bg-[#70a2ad] text-white text-[10px] uppercase font-bold px-4 py-1 tracking-widest">
                        Estándar Seguridad
                     </div>
                  </div>
                )}
                
                <div className="mb-8">
                   <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{prod.code}</div>
                   <h3 className="text-2xl font-medium text-[#141516] font-[Urbanist]">{prod.name}</h3>
                   <div className="text-sm text-gray-500 mt-1">{prod.type}</div>
                </div>
                
                <div className="space-y-8 mb-10">
                   <div className="grid grid-cols-1 gap-4 pb-8 border-b border-[#141516]/5">
                      <div className="flex justify-between">
                         <span className="text-[10px] uppercase text-gray-400 font-mono">Material</span>
                         <span className="text-sm text-[#141516] font-medium text-right">{prod.material}</span>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-[10px] uppercase text-gray-400 font-mono">Densidad</span>
                         <span className="text-sm text-[#141516] font-medium text-right">{prod.weight}</span>
                      </div>
                   </div>
                   
                   <ul className="space-y-3">
                     {prod.features.map((feat, j) => (
                       <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                         <div className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${prod.recommended ? 'bg-[#70a2ad]' : 'bg-gray-300'}`}></div>
                         {feat}
                       </li>
                     ))}
                   </ul>

                   <div className="text-2xl font-light text-[#141516]">
                      {prod.price}
                      <span className="text-xs text-gray-400 block mt-1 font-normal">instalación no incluida</span>
                   </div>
                </div>
                
                <Button 
                   onClick={() => onNavigate('contact')}
                   className={`w-full rounded-none h-14 text-xs uppercase tracking-widest font-medium ${
                      prod.recommended 
                      ? 'bg-[#141516] text-white hover:bg-[#70a2ad]' 
                      : 'bg-transparent border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white'
                   } transition-colors`}
                >
                   Configurar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section - Dark */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Retorno de <span className="text-[#70a2ad]">Inversión</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                     La instalación de un sistema de cobertura no es un gasto, es una inversión técnica que se amortiza mediante el ahorro operativo.
                  </p>
                  
                  <div className="space-y-6">
                     <div>
                        <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                           <span>AHORRO AGUA ANUAL</span>
                           <span>40.000 Litros</span>
                        </div>
                        <div className="h-1 bg-white/10 w-full">
                           <div className="h-full bg-[#70a2ad] w-[85%]"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                           <span>AHORRO ENERGÍA (BOMBA CALOR)</span>
                           <span>60%</span>
                        </div>
                        <div className="h-1 bg-white/10 w-full">
                           <div className="h-full bg-[#70a2ad] w-[60%]"></div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="border border-white/10 p-8 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                     <Scale className="h-6 w-6 text-[#70a2ad]" />
                     <span className="font-mono text-sm uppercase tracking-widest">Balance Financiero (3 Años)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 text-center">
                     <div>
                        <div className="text-3xl font-light text-white mb-1">1.200€</div>
                        <div className="text-[10px] text-gray-500 uppercase">Coste Aprox.</div>
                     </div>
                     <div>
                        <div className="text-3xl font-light text-[#70a2ad] mb-1">3.600€</div>
                        <div className="text-[10px] text-gray-500 uppercase">Ahorro Generado</div>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                     <p className="text-sm text-gray-300">
                        Amortización estimada: <span className="text-[#70a2ad] font-bold">12-14 meses</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Installation Protocol */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Protocolo de Instalación</h2>
               <p className="text-gray-500">Proceso estandarizado para garantizar ajuste perfecto</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { title: "Medición Láser", desc: "Digitalización del perímetro para un corte milimétrico." },
                  { title: "Fabricación", desc: "Corte y termosellado con control de calidad CNC." },
                  { title: "Anclaje", desc: "Perforación e instalación de tacos escamoteables." },
                  { title: "Entrega", desc: "Ajuste de tensores y formación de usuario." }
               ].map((step, i) => (
                  <div key={i} className="group text-center">
                     <div className="w-12 h-12 border border-[#141516] text-[#141516] flex items-center justify-center mx-auto mb-6 text-lg font-mono group-hover:bg-[#141516] group-hover:text-white transition-colors">
                        {i + 1}
                     </div>
                     <h3 className="text-lg font-medium text-[#141516] mb-2 font-[Urbanist]">{step.title}</h3>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {step.desc}
                     </p>
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
            Protección <span className="text-[#70a2ad]">Integral</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
             Solicite una medición técnica gratuita y descubra cuánto puede ahorrar protegiendo su piscina.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => onNavigate('quote')}
              size="lg"
              className="min-w-[240px] bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Solicitar Medición
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