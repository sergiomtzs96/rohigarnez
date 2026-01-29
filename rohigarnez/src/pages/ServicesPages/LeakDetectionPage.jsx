import React from 'react';
import { Search, CheckCircle, AlertTriangle, Zap, Shield, ArrowRight, Activity, Gauge } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function LeakDetectionPage({ onNavigate }) {
  const features = [
    'Detección precisa sin obras invasivas',
    'Gas trazador de alta tecnología',
    'Localización exacta del punto de fuga',
    'Informe detallado con fotografías',
    'Recomendaciones de reparación',
    'Ahorro de tiempo y dinero'
  ];

  const process = [
    {
      step: '01',
      title: 'Inspección Visual',
      description: 'Revisión completa de la piscina y sus instalaciones para identificar posibles zonas de pérdida'
    },
    {
      step: '02',
      title: 'Aplicación de Gas',
      description: 'Introducimos gas trazador no tóxico en el sistema de tuberías de la piscina'
    },
    {
      step: '03',
      title: 'Detección Precisa',
      description: 'Utilizamos equipos especializados para localizar exactamente dónde emerge el gas'
    },
    {
      step: '04',
      title: 'Informe y Solución',
      description: 'Entregamos un informe completo y proponemos la mejor solución de reparación'
    }
  ];

  const benefits = [
    {
      icon: Gauge,
      title: 'Precisión Total',
      description: 'Localización exacta de fugas, incluso las más pequeñas, mediante espectrometría.'
    },
    {
      icon: Zap,
      title: 'Rápido y Eficaz',
      description: 'Detectamos fugas en horas, reduciendo el tiempo de inactividad de la instalación.'
    },
    {
      icon: Shield,
      title: 'No Invasivo',
      description: 'Sin necesidad de obras destructivas ni catas innecesarias en el vaso.'
    },
    {
      icon: Activity,
      title: 'Monitorización',
      description: 'Análisis de presión y estanqueidad del circuito hidráulico completo.'
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Diagnóstico Técnico</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Localización de <br/>
                <span className="font-semibold text-[#70a2ad]">Fugas</span>
              </h1>
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Tecnología de gas trazador para una detección no invasiva y de alta precisión.
                Sin obras destructivas, sin suposiciones.
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Solicitar Inspección
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Benefits Section */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Tech Description */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-8">
                Tecnología de <span className="text-[#70a2ad] font-medium">Precisión</span>
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed font-light text-lg">
                El gas trazador es el estándar industrial más avanzado para la localización de fugas. 
                Utilizamos una mezcla de hidrógeno y nitrógeno (no tóxica) que, debido a su baja densidad, 
                emerge verticalmente desde el punto exacto de la rotura.
              </p>
              
              <div className="border-l-2 border-[#70a2ad] pl-6 py-2 mb-12">
                <p className="text-[#141516] italic font-light">
                  "Detectamos pérdidas invisibles sin necesidad de romper pavimentos ni realizar obras costosas a ciegas."
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-[#141516]/20 group-hover:bg-[#70a2ad] transition-colors"></div>
                    <span className="text-sm text-gray-600 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Benefits Grid */}
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#141516]/10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="p-10 border-b border-r border-[#141516]/10 hover:bg-gray-50 transition-colors group">
                       <benefit.icon className="w-8 h-8 text-[#70a2ad] stroke-[1.5] mb-6 group-hover:scale-110 transition-transform duration-300" />
                       <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{benefit.title}</h3>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#141516 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-2xl">
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Metodología</span>
                <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">Proceso de <span className="font-medium">Detección</span></h2>
             </div>
             <div className="hidden md:block">
                <div className="flex gap-2">
                   <div className="w-12 h-px bg-[#141516]/20"></div>
                   <div className="w-4 h-px bg-[#70a2ad]"></div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-[#141516]/10">
            {process.map((item, index) => (
              <div key={index} className="group relative p-8 border-r border-b border-[#141516]/10 hover:bg-white transition-colors last:border-r-0 md:last:border-r">
                 <div className="text-4xl font-light text-[#141516]/10 group-hover:text-[#70a2ad]/20 font-[Urbanist] mb-6 transition-colors">
                    {item.step}
                 </div>
                 <h3 className="text-lg font-medium text-[#141516] mb-3 font-[Urbanist]">{item.title}</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                 
                 {/* Connector Line (Desktop) */}
                 {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#141516]/10 z-10"></div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs - Technical Panel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#141516] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-full bg-[#70a2ad]/10 skew-x-12 transform origin-top"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12">
                 <div className="lg:col-span-4 p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#70a2ad]/5">
                    <div className="flex items-center gap-3 mb-6">
                       <AlertTriangle className="w-5 h-5 text-[#70a2ad]" />
                       <span className="font-mono text-xs uppercase tracking-widest text-[#70a2ad]">Diagnóstico Previo</span>
                    </div>
                    <h3 className="text-2xl font-light font-[Urbanist] mb-4">Señales de Alarma</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                       Si identifica alguno de estos síntomas en su instalación, es probable que exista una fuga activa que requiera intervención inmediata.
                    </p>
                 </div>
                 
                 <div className="lg:col-span-8 p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                       {[
                         'Pérdida de agua superior a 5cm/semana',
                         'Zonas húmedas perimetrales',
                         'Aumento injustificado en consumo',
                         'Reposición constante de nivel',
                         'Grietas visibles o hundimientos',
                         'Desajustes químicos recurrentes'
                       ].map((sign, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                           <div className="w-1 h-1 bg-[#70a2ad] group-hover:w-4 transition-all duration-300"></div>
                           <span className="text-sm text-gray-300 font-light">{sign}</span>
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
              <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Contacto Técnico</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-[Urbanist] leading-tight">
                ¿Sospecha de una <span className="text-[#70a2ad]">fuga</span>? <br/>
                Actúe a tiempo.
              </h2>
              <p className="text-lg text-gray-400 font-light border-l border-white/10 pl-6 max-w-xl">
                No espere a que el problema empeore. Detectamos y localizamos fugas 
                con precisión milimétrica para una reparación rápida.
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