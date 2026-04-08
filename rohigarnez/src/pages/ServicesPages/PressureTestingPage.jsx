import React from 'react';
import { Search, AlertTriangle, CheckCircle, Clock, Target, Gauge, ArrowRight, Settings, Activity } from 'lucide-react';
import { Button } from '../../components/ui/button';


export function PressureTestingPage({ onNavigate }) {
  const services = [
    {
      title: 'Localización de Fugas',
      description: 'Detección precisa de fugas en tuberías y estructura',
      duration: '2-4 horas',
      price: 'Desde 150€',
      equipment: 'Equipos de escucha electrónica',
      accuracy: '95%+'
    },
    {
      title: 'Pruebas de Presión',
      description: 'Verificación de estanqueidad del circuito hidráulico',
      duration: '1-2 horas',
      price: 'Desde 120€',
      equipment: 'Manómetros digitales',
      accuracy: '98%+'
    },
    {
      title: 'Inspección con Cámara',
      description: 'Revisión visual interior de tuberías',
      duration: '1-3 horas',
      price: 'Desde 200€',
      equipment: 'Cámara de inspección',
      accuracy: '100%'
    }
  ];

  const problems = [
    {
      symptom: 'Pérdida constante de agua',
      causes: ['Fisuras en estructura', 'Juntas deterioradas', 'Tuberías dañadas'],
      detection: 'Prueba de presión + localización'
    },
    {
      symptom: 'Humedad en alrededores',
      causes: ['Fugas subterráneas', 'Filtraciones laterales', 'Drenaje deficiente'],
      detection: 'Detección electrónica + cámara'
    },
    {
      symptom: 'Baja presión en jets',
      causes: ['Obstrucciones', 'Fugas en retorno', 'Bomba defectuosa'],
      detection: 'Inspección con cámara'
    },
    {
      symptom: 'Químicos descompensados',
      causes: ['Dilución por fuga', 'Renovación excesiva', 'Entrada de agua'],
      detection: 'Localización + análisis'
    }
  ];

  const process = [
    { step: '01', title: 'Evaluación', desc: 'Análisis visual inicial' },
    { step: '02', title: 'Preparación', desc: 'Vaciado parcial y sellado' },
    { step: '03', title: 'Detección', desc: 'Aplicación de pruebas' },
    { step: '04', title: 'Localización', desc: 'Marcado exacto' },
    { step: '05', title: 'Informe', desc: 'Reporte técnico completo' }
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Diagnóstico Técnico</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Pruebas de <br/>
                <span className="font-semibold text-[#70a2ad]">Presión</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Detección precisa de fugas y verificación de estanqueidad con equipos profesionales. 
                Diagnóstico certero para reparaciones efectivas.
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
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
              >
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                 <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-4">Servicios de <span className="text-[#70a2ad] font-medium">Diagnóstico</span></h2>
                 <p className="text-gray-500 font-light text-lg">
                   Tecnología punta para la localización de averías hidráulicas.
                 </p>
              </div>
              <div className="hidden md:block pb-2">
                 <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Tarifas Base</span>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-[#141516]/10">
              {services.map((service, index) => (
                <div key={index} className="group p-10 border-r border-t border-b border-[#141516]/10 hover:bg-gray-50 transition-colors relative">
                   <div className="mb-8">
                      <h3 className="text-xl font-medium text-[#141516] font-[Urbanist] mb-2">{service.title}</h3>
                      <div className="text-3xl font-light text-[#70a2ad]">{service.price}</div>
                   </div>
                   
                   <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed min-h-[48px]">
                      {service.description}
                   </p>

                   <div className="space-y-4 pt-8 border-t border-[#141516]/5">
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-gray-400 font-light">Duración est.</span>
                         <span className="text-[#141516] font-mono">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-gray-400 font-light">Precisión</span>
                         <span className="text-[#141516] font-mono">{service.accuracy}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-gray-400 font-light">Equipo</span>
                         <span className="text-[#141516] text-right max-w-[50%]">{service.equipment}</span>
                      </div>
                   </div>
                   
                   <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-[#70a2ad] -rotate-45" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Troubleshooting Matrix */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#141516 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left: Problems */}
              <div className="lg:col-span-7">
                 <div className="flex items-center gap-3 mb-12">
                    <Activity className="w-6 h-6 text-[#70a2ad]" />
                    <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Matriz de <span className="font-medium">Identificación</span></h2>
                 </div>

                 <div className="space-y-0 border border-[#141516]/10 bg-white">
                    {problems.map((problem, i) => (
                       <div key={i} className="flex flex-col md:flex-row gap-6 p-8 border-b last:border-0 border-[#141516]/10 hover:bg-gray-50 transition-colors group">
                          <div className="flex-1">
                             <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="w-4 h-4 text-[#70a2ad]" />
                                <h4 className="font-medium text-[#141516] font-[Urbanist]">{problem.symptom}</h4>
                             </div>
                             <p className="text-sm text-gray-500 font-light pl-7">{problem.causes.join(', ')}</p>
                          </div>
                          <div className="md:text-right flex flex-col md:items-end justify-center">
                             <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Solución Recomendada</span>
                             <span className="text-sm font-medium text-[#70a2ad] bg-[#70a2ad]/5 px-3 py-1 border border-[#70a2ad]/20">
                                {problem.detection}
                             </span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Right: Process Steps */}
              <div className="lg:col-span-5">
                 <div className="bg-[#141516] p-10 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-full bg-[#70a2ad]/10 skew-x-12 transform origin-top"></div>
                    
                    <h3 className="text-2xl font-light text-white font-[Urbanist] mb-8 relative z-10">Proceso Sistemático</h3>
                    
                    <div className="space-y-8 relative z-10">
                       {process.map((step, i) => (
                          <div key={i} className="flex items-start gap-4 group">
                             <div className="text-2xl font-light text-[#70a2ad]/50 group-hover:text-[#70a2ad] transition-colors font-mono mt-[-4px]">
                                {step.step}
                             </div>
                             <div className="pt-1">
                                <h4 className="text-white font-medium mb-1 font-[Urbanist]">{step.title}</h4>
                                <p className="text-sm text-gray-400 font-light leading-relaxed border-l border-white/10 pl-4 group-hover:border-[#70a2ad] transition-colors">
                                   {step.desc}
                                </p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section - Architectural Closure */}
      <section className="py-24 bg-[#141516] border-t border-white/5 relative overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Engineering Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           
           {/* Technical Accent Lines */}
           <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
           <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-left max-w-2xl">
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Soporte Técnico</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                Diagnóstico preciso, <br/>
                <span className="text-[#70a2ad]">reparación</span> efectiva.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                No deje que una pequeña fuga se convierta en un problema estructural. 
                Nuestros ingenieros localizarán la avería sin obras innecesarias.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all min-w-[200px]"
              >
                Solicitar Diagnóstico
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