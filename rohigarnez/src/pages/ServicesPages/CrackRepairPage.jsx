import React from 'react';
import { Hammer, CheckCircle, AlertTriangle, Shield, Eye, ArrowRight, Activity, Layers } from 'lucide-react';
import { Button } from '../../components/ui/button';


export function CrackRepairPage({ onNavigate }) {
  const crackTypes = [
    {
      title: 'Grietas Superficiales',
      id: 'TYPE-A',
      description: 'Fisuras en el revestimiento sin compromiso estructural inmediato.',
      solution: 'Sellado técnico y acabado estético.',
      severity: 'low'
    },
    {
      title: 'Grietas Estructurales',
      id: 'TYPE-B',
      description: 'Fracturas pasantes que afectan la integridad del vaso de hormigón.',
      solution: 'Grapado estructural e inyección de resinas epoxi.',
      severity: 'critical'
    },
    {
      title: 'Fisuras en Ángulos',
      id: 'TYPE-C',
      description: 'Roturas por tensión en la unión losa-muro.',
      solution: 'Refuerzo perimetral y banda elástica.',
      severity: 'high'
    },
    {
      title: 'Desprendimientos',
      id: 'TYPE-D',
      description: 'Fellos en la adherencia del revestimiento o gresite.',
      solution: 'Saneamiento y reposición de material.',
      severity: 'medium'
    }
  ];

  const process = [
    { title: 'Análisis Estructural', desc: 'Evaluación de la profundidad y causa raíz de la fisura.' },
    { title: 'Preparación Mecánica', desc: 'Apertura de la grieta en "V" para garantizar penetración.' },
    { title: 'Grapado Metálico', desc: 'Inserción de grapas de acero inoxidable cada 20cm.' },
    { title: 'Inyección Química', desc: 'Relleno con resinas epoxi de alta resistencia.' },
    { title: 'Acabado Estético', desc: 'Recubrimiento compatible con el revestimiento existente.' }
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Ingeniería Civil</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Reparación de <br/>
                <span className="font-semibold text-[#70a2ad]">Grietas</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Soluciones definitivas para patologías estructurales en el vaso de la piscina.
                Recuperamos la estanqueidad y la solidez monolítica de su instalación.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Valoración
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis & Types */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Introduction */}
             <div className="lg:col-span-4">
                <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-8">
                  Patologías <span className="text-[#70a2ad] font-medium">Comunes</span>
                </h2>
                <p className="text-gray-500 mb-10 leading-relaxed font-light text-lg">
                   Las grietas no son solo un problema estético; suelen ser síntoma de tensiones estructurales, 
                   asentamientos del terreno o fallos en la construcción original.
                </p>
                <div className="bg-[#f8f9fa] p-8 border border-[#141516]/5">
                   <h3 className="text-sm font-mono text-[#141516] uppercase tracking-widest mb-4">Riesgos Estructurales</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3 items-start">
                        <AlertTriangle className="w-5 h-5 text-[#70a2ad] stroke-1 shrink-0" />
                        <span className="text-sm text-gray-600 font-light">Corrosión de la armadura interna por filtraciones.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <AlertTriangle className="w-5 h-5 text-[#70a2ad] stroke-1 shrink-0" />
                        <span className="text-sm text-gray-600 font-light">Lavado del terreno de asiento (socavones).</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <AlertTriangle className="w-5 h-5 text-[#70a2ad] stroke-1 shrink-0" />
                        <span className="text-sm text-gray-600 font-light">Pérdida masiva de agua y tratamientos químicos.</span>
                      </li>
                   </ul>
                </div>
             </div>
             
             {/* Right: Technical Table */}
             <div className="lg:col-span-8">
                <div className="border border-[#141516]/10">
                   {/* Header Row */}
                   <div className="hidden md:grid grid-cols-12 bg-[#141516] text-white text-xs uppercase tracking-widest py-4 px-6 font-medium">
                      <div className="col-span-4">Tipo de Fisura</div>
                      <div className="col-span-4">Diagnóstico</div>
                      <div className="col-span-4">Solución Técnica</div>
                   </div>
                   
                   {/* Rows */}
                   {crackTypes.map((type, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-[#141516]/10 last:border-b-0 hover:bg-[#f8f9fa] transition-colors items-center group">
                         <div className="col-span-4">
                            <div className="flex items-center gap-3">
                               <span className="font-mono text-[10px] text-gray-400 border border-gray-200 px-1.5 py-0.5">{type.id}</span>
                               <span className="font-medium text-[#141516] group-hover:text-[#70a2ad] transition-colors">{type.title}</span>
                            </div>
                         </div>
                         <div className="col-span-4">
                            <p className="text-sm text-gray-500 font-light">{type.description}</p>
                         </div>
                         <div className="col-span-4 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#70a2ad] shrink-0" />
                            <p className="text-sm text-[#141516] font-medium">{type.solution}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Repair Methodology */}
      <section className="py-24 bg-[#141516] text-white relative overflow-hidden">
         {/* Background Detail */}
         <div className="absolute right-0 top-0 h-full w-1/3 bg-[#70a2ad]/5 skew-x-12 origin-top"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 border-b border-white/10 pb-8">
               <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Protocolo de Intervención</span>
               <h2 className="text-3xl font-light text-white font-[Urbanist]">Sistema de <span className="font-medium">Grapado Estructural</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-l border-white/10">
               {process.map((step, i) => (
                  <div key={i} className="p-8 border-r border-t border-b md:border-t-0 md:border-b-0 border-white/10 hover:bg-white/5 transition-colors group relative">
                     <div className="text-4xl font-light text-white/10 font-mono mb-6 group-hover:text-[#70a2ad] transition-colors">
                        0{i + 1}
                     </div>
                     <h3 className="text-lg font-medium text-white mb-3 font-[Urbanist]">{step.title}</h3>
                     <p className="text-sm text-gray-400 font-light leading-relaxed">
                        {step.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#f8f9fa] p-12 border border-[#141516]/5">
            
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">
                ¿Grietas en su piscina?
              </h2>
              <p className="text-gray-500 font-light">
                Una grieta no tratada puede comprometer toda la estructura. 
                Solicite una valoración técnica in situ sin compromiso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#141516] text-white hover:bg-[#2a2b2c] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold transition-all min-w-[200px]"
              >
                Solicitar Valoración
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-[#141516] border-[#141516]/20 hover:bg-[#141516] hover:text-white rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold min-w-[200px]"
              >
                Contactar
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
