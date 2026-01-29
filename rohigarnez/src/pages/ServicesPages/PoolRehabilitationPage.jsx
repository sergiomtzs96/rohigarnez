import React from 'react';
import { RefreshCw, AlertTriangle, CheckCircle, Shield, Clock, Droplets, Hammer, Palette, Settings, Zap, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';



export function PoolRehabilitationPage({ onNavigate }) {
  const problems = [
    {
      problem: 'Fugas y Filtraciones',
      symptoms: ['Pérdida constante de agua', 'Humedad en alrededores', 'Grietas visibles'],
      solution: 'Impermeabilización técnica garantizada.',
      urgency: 'high',
      icon: Droplets
    },
    {
      problem: 'Deterioro Estructural',
      symptoms: ['Fisuras en hormigón', 'Desplomes', 'Oxidación armadura'],
      solution: 'Refuerzo y saneamiento integral.',
      urgency: 'high',
      icon: Hammer
    },
    {
      problem: 'Instalaciones Obsoletas',
      symptoms: ['Alto consumo', 'Filtración deficiente', 'Ruidos mecánicos'],
      solution: 'Modernización de equipos hidráulicos.',
      urgency: 'medium',
      icon: Settings
    },
    {
      problem: 'Estética Desactualizada',
      symptoms: ['Gresite despegado', 'Decoloración', 'Acabados antiguos'],
      solution: 'Renovación completa de revestimientos.',
      urgency: 'medium',
      icon: Palette
    }
  ];

  const phases = [
    {
      step: '01',
      title: 'Diagnóstico',
      duration: '1-2 días',
      description: 'Evaluación exhaustiva del estado estructural y funcional.',
      activities: ['Inspección visual', 'Pruebas de estanqueidad', 'Informe técnico']
    },
    {
      step: '02',
      title: 'Demolición',
      duration: '2-3 días',
      description: 'Retirada controlada de materiales deteriorados.',
      activities: ['Decapado', 'Saneamiento', 'Gestión de residuos']
    },
    {
      step: '03',
      title: 'Obra Civil',
      duration: '3-7 días',
      description: 'Intervención estructural y preparación de superficies.',
      activities: ['Grapado', 'Impermeabilización', 'Nivelación']
    },
    {
      step: '04',
      title: 'Instalaciones',
      duration: '2-4 días',
      description: 'Montaje de nuevos sistemas hidráulicos y eléctricos.',
      activities: ['Tuberías', 'Iluminación', 'Equipos']
    },
    {
      step: '05',
      title: 'Revestimiento',
      duration: '5-8 días',
      description: 'Aplicación de acabados finales de alta calidad.',
      activities: ['Colocación', 'Junteo', 'Coronación']
    },
    {
      step: '06',
      title: 'Entrega',
      duration: '1-2 días',
      description: 'Puesta en marcha, verificación y formación.',
      activities: ['Llenado', 'Equilibrado', 'Certificación']
    }
  ];

  const packages = [
    {
      name: 'Básica',
      price: 'Desde 8.500€',
      description: 'Recuperación funcional esencial.',
      features: [
         'Reparación de fugas puntuales',
         'Impermeabilización bicomponente',
         'Sustitución de revestimiento (Liner/Gresite)',
         'Revisión de equipos existentes',
         'Garantía de estanqueidad 5 años'
      ],
      recommended: false
    },
    {
      name: 'Integral',
      price: 'Desde 15.800€',
      description: 'Renovación completa y modernización.',
      features: [
         'Reparación estructural profunda',
         'Revestimiento Premium de alta gama',
         'Renovación sistema de filtración',
         'Iluminación LED subacuática',
         'Nueva coronación perimetral',
         'Garantía de obra 10 años'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: 'Desde 25.000€',
      description: 'Transformación total inteligente.',
      features: [
         'Diseño arquitectónico a medida',
         'Automatización domótica (Cloración/pH)',
         'Climatización y cubierta',
         'Acabados en piedra natural/porcelánico',
         'Sistema MagnaPool (Magnesio)',
         'Garantía integral extendida'
      ],
      recommended: false
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Renovación Integral</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Rehabilitación <br/>
                <span className="font-semibold text-[#70a2ad]">de Piscinas</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Transformamos instalaciones deterioradas en espacios modernos, eficientes y seguros.
                Ingeniería aplicada a la recuperación de activos acuáticos.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Diagnóstico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Matrix */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Patologías <span className="font-medium text-[#70a2ad]">Frecuentes</span></h2>
                 <p className="text-gray-500 font-light mt-4">Identificación técnica de problemas estructurales y funcionales.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#141516]/10">
              {problems.map((item, i) => (
                 <div key={i} className="p-8 border-r border-b border-[#141516]/10 hover:bg-[#f8f9fa] transition-colors group">
                    <div className="flex justify-between items-start mb-6">
                       <item.icon className={`w-6 h-6 stroke-[1.5] ${
                          item.urgency === 'high' ? 'text-[#141516]' : 'text-[#70a2ad]'
                       }`} />
                       {item.urgency === 'high' && (
                          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-[#141516] text-[#141516]">
                             Crítico
                          </span>
                       )}
                    </div>
                    
                    <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{item.problem}</h3>
                    <ul className="mb-4 space-y-1">
                       {item.symptoms.map((sym, j) => (
                          <li key={j} className="text-xs text-gray-500 font-light">• {sym}</li>
                       ))}
                    </ul>
                    <div className="pt-4 border-t border-[#141516]/5">
                       <p className="text-xs font-medium text-[#70a2ad] uppercase tracking-wider">{item.solution}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         {/* Background Detail */}
         <div className="absolute left-0 bottom-0 h-1/2 w-full bg-[#70a2ad]/5 skew-y-3 origin-bottom-left"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 border-b border-white/10 pb-8">
               <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Planificación de Obra</span>
               <h2 className="text-3xl font-light text-white font-[Urbanist]">Cronograma de <span className="font-medium">Ejecución</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-white/10">
               {phases.map((phase, i) => (
                  <div key={i} className="p-6 border-r border-t border-b md:border-t-0 md:border-b-0 border-white/10 hover:bg-white/5 transition-colors group relative flex flex-col justify-between min-h-[280px]">
                     <div>
                        <div className="text-3xl font-light text-white/20 font-mono mb-4 group-hover:text-[#70a2ad] transition-colors">
                           {phase.step}
                        </div>
                        <h3 className="text-base font-medium text-white mb-2 font-[Urbanist]">{phase.title}</h3>
                        <div className="text-xs text-[#70a2ad] font-mono mb-4 border border-[#70a2ad]/30 inline-block px-2 py-0.5">
                           {phase.duration}
                        </div>
                        <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                           {phase.description}
                        </p>
                     </div>
                     <ul className="space-y-1 border-t border-white/5 pt-4">
                        {phase.activities.map((act, j) => (
                           <li key={j} className="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-2">
                              <div className="w-1 h-1 bg-[#70a2ad] rounded-full"></div>
                              {act}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Investment Options */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-[#141516] font-[Urbanist] mb-4">Niveles de Intervención</h2>
              <p className="text-gray-500 font-light">Propuestas técnicas adaptadas al estado de la instalación.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-x border-[#141516]/10">
              {packages.map((pkg, i) => (
                 <div key={i} className={`relative p-10 border-b border-[#141516]/10 bg-white group hover:z-10 transition-all ${
                    pkg.recommended ? 'ring-1 ring-[#70a2ad] z-10' : ''
                 }`}>
                    {pkg.recommended && (
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141516] text-white px-4 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#70a2ad]">
                          Recomendado
                       </div>
                    )}
                    
                    <h3 className="text-xl font-medium text-[#141516] mb-2 font-[Urbanist]">{pkg.name}</h3>
                    <div className="text-3xl font-light text-[#70a2ad] mb-8 font-[Urbanist]">{pkg.price}</div>
                    <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-[#141516]/5 font-light min-h-[60px]">
                       {pkg.description}
                    </p>
                    
                    <ul className="space-y-4">
                       {pkg.features.map((feat, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                             <div className="w-1 h-1 bg-[#141516] mt-2 shrink-0"></div>
                             {feat}
                          </li>
                       ))}
                    </ul>

                    <div className="mt-10 pt-6 border-t border-[#141516]/5">
                       <Button 
                          onClick={() => onNavigate('contact')}
                          className={`w-full rounded-none h-12 text-xs tracking-[0.15em] uppercase font-bold transition-all ${
                             pkg.recommended 
                                ? 'bg-[#70a2ad] hover:bg-[#5e8b95] text-white' 
                                : 'bg-transparent border border-[#141516]/20 text-[#141516] hover:bg-[#141516] hover:text-white'
                          }`}
                       >
                          Consultar
                       </Button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-[#141516] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-left max-w-2xl">
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Consultoría Técnica</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                ¿Su piscina necesita una <br/>
                <span className="text-[#70a2ad]">segunda vida</span>?
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                Solicite un diagnóstico estructural gratuito. Nuestros ingenieros evaluarán el estado real 
                de su instalación.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Diagnóstico Gratuito
              </Button>
              <Button 
                onClick={() => onNavigate('projects')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white min-w-[200px]"
              >
                Ver Proyectos
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}