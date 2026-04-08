import React from 'react';
import { 
  Filter, 
  Sparkles, 
  Recycle, 
  AlertCircle, 
  CheckCircle, 
  Activity, 
  ArrowRight,
  Microscope,
  Layers,
  Droplets
} from 'lucide-react';
import { Button } from '../../components/ui/button';



export function FilterSandPage({ onNavigate }) {
  const filterMedia = [
    {
      type: 'Arena de Sílice',
      filtration: '30-40 micras',
      price: 'Desde 120€',
      lifespan: '3-5 años',
      features: ['Estándar industrial', 'Coste inicial bajo', 'Mantenimiento regular'],
      recommended: false,
      code: 'SiO2'
    },
    {
      type: 'Vidrio Reciclado',
      filtration: '10-20 micras',
      price: 'Desde 180€',
      lifespan: '8-10 años',
      features: ['Filtración superior', 'Ahorro agua 25%', 'Bacteriostático'],
      recommended: true,
      code: 'AFM'
    },
    {
      type: 'Zeolita',
      filtration: '5-10 micras',
      price: 'Desde 240€',
      lifespan: '5-7 años',
      features: ['Filtración ultra-fina', 'Captura de amonio', 'Reducción de cloraminas'],
      recommended: false,
      code: 'ZEO'
    }
  ];

  const signs = [
    { title: 'Turbidez', desc: 'Partículas en suspensión visibles tras ciclo de filtrado.', icon: Droplets },
    { title: 'Sobrepresión', desc: 'Manómetro indica > 1.2 bar post-lavado.', icon: Activity },
    { title: 'Retorno', desc: 'Retorno de suciedad por impulsores.', icon: Recycle },
    { title: 'Colmatación', desc: 'Apelmazamiento del lecho filtrante (canales preferentes).', icon: Layers }
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-widest">Mantenimiento Técnico</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight font-[Urbanist]">
                Renovación de <br/>
                <span className="text-[#70a2ad] font-medium">Carga Filtrante</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed border-l border-[#70a2ad] pl-6">
                Restablece la capacidad de retención de tu equipo. Sustitución técnica por medios de alto rendimiento: Vidrio Activo o Zeolita.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('quote')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none px-8 h-12 uppercase tracking-widest text-xs font-medium"
                >
                  Solicitar Cambio
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-full min-h-[300px] border border-white/10 bg-white/5 backdrop-blur-sm p-8">
               <div className="absolute top-0 right-0 p-2">
                  <Filter className="h-6 w-6 text-[#70a2ad] opacity-50" />
               </div>
               <div className="h-full flex flex-col justify-between">
                  <div className="space-y-6">
                     <h3 className="text-white font-[Urbanist] mb-2">Micraje de Retención</h3>
                     
                     <div className="space-y-4">
                        <div className="relative">
                           <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                              <span>ARENA SÍLICE</span>
                              <span>40 micras</span>
                           </div>
                           <div className="h-px bg-white/20 w-full relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-gray-500 rounded-full"></div>
                           </div>
                        </div>

                        <div className="relative">
                           <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                              <span>VIDRIO ECO</span>
                              <span className="text-[#70a2ad]">15 micras</span>
                           </div>
                           <div className="h-px bg-white/20 w-full relative">
                              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-[#70a2ad] rounded-full shadow-[0_0_10px_#70a2ad]"></div>
                           </div>
                        </div>

                        <div className="relative">
                           <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                              <span>ZEOLITA</span>
                              <span>5 micras</span>
                           </div>
                           <div className="h-px bg-white/20 w-full relative">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-1 bg-white rounded-full"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                     <p className="text-xs text-gray-500 leading-relaxed">
                        *El ojo humano solo percibe partículas &gt; 40 micras. El vidrio filtra lo que no ves.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Grid */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                     Indicadores de <span className="font-medium text-[#70a2ad]">Saturación</span>
                  </h2>
               </div>
               <div className="mt-4 md:mt-0">
                  <span className="text-xs font-mono text-[#141516] uppercase tracking-widest">Diagnóstico</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#141516]/10 border border-[#141516]/10">
               {signs.map((item, i) => (
                  <div key={i} className="bg-white p-8 hover:bg-gray-50 transition-colors group">
                     <item.icon className="h-8 w-8 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
                     <h3 className="text-lg font-medium text-[#141516] mb-2 font-[Urbanist]">{item.title}</h3>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Media Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">Matriz de Rendimiento</h2>
            <div className="h-px w-full bg-[#141516]/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#141516]/10 divide-y md:divide-y-0 md:divide-x divide-[#141516]/10">
            {filterMedia.map((media, i) => (
              <div key={i} className={`p-10 bg-white relative group ${media.recommended ? 'bg-gray-50' : ''}`}>
                {media.recommended && (
                  <div className="absolute top-0 right-0">
                     <div className="bg-[#70a2ad] text-white text-[10px] uppercase font-bold px-4 py-1 tracking-widest">
                        Recomendado
                     </div>
                  </div>
                )}
                
                <div className="mb-8">
                   <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{media.code}</div>
                   <h3 className="text-2xl font-medium text-[#141516] font-[Urbanist]">{media.type}</h3>
                </div>
                
                <div className="space-y-8 mb-10">
                   <div className="grid grid-cols-2 gap-4 pb-8 border-b border-[#141516]/5">
                      <div>
                         <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Filtración</div>
                         <div className="text-[#141516] font-medium">{media.filtration}</div>
                      </div>
                      <div>
                         <div className="text-[10px] uppercase text-gray-400 font-mono mb-1">Vida Útil</div>
                         <div className="text-[#141516] font-medium">{media.lifespan}</div>
                      </div>
                   </div>
                   
                   <ul className="space-y-3">
                     {media.features.map((feat, j) => (
                       <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                         <div className={`h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 ${media.recommended ? 'bg-[#70a2ad]' : 'bg-gray-300'}`}></div>
                         {feat}
                       </li>
                     ))}
                   </ul>

                   <div className="text-2xl font-light text-[#141516]">
                      {media.price}
                      <span className="text-xs text-gray-400 block mt-1 font-normal">material + mano de obra</span>
                   </div>
                </div>
                
                <Button 
                   onClick={() => onNavigate('contact')}
                   className={`w-full rounded-none h-14 text-xs uppercase tracking-widest font-medium ${
                      media.recommended 
                      ? 'bg-[#141516] text-white hover:bg-[#70a2ad]' 
                      : 'bg-transparent border border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white'
                   } transition-colors`}
                >
                   Seleccionar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Protocol - Dark Section */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-light mb-6 font-[Urbanist]">
                     Protocolo de <span className="text-[#70a2ad]">Sustitución</span>
                  </h2>
                  <p className="text-gray-400 font-light leading-relaxed">
                     Operación crítica que requiere precisión para evitar daños en los colectores internos del filtro (crepinas).
                  </p>
               </div>
               <div className="mt-8 md:mt-0 border border-white/10 px-6 py-3 bg-white/5">
                  <span className="font-mono text-[#70a2ad] text-xl mr-2">04</span>
                  <span className="font-light text-sm text-gray-400 uppercase tracking-widest">Pasos Ejecución</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { title: "Extracción", desc: "Vaciado manual o por aspiración del lecho saturado." },
                  { title: "Verificación", desc: "Inspección visual de crepinas y colectores internos." },
                  { title: "Carga", desc: "Llenado estratificado con el nuevo medio filtrante." },
                  { title: "Lavado", desc: "Ciclo de retrolavado y enjuague para eliminar polvo." }
               ].map((step, i) => (
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
            Transparencia <span className="text-[#70a2ad]">Cristalina</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            El cambio de carga filtrante es la inversión más económica para recuperar la calidad del agua de su piscina.
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