import React from 'react';
import { Settings, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';



export function GenericServicePage({ 
  onNavigate, 
  title, 
  subtitle, 
  description,
  category,
  color = 'blue'
}) {
  const colorAccents = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500',
    pink: 'bg-pink-500'
  };

  const textAccents = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    orange: 'text-orange-500',
    purple: 'text-purple-500',
    cyan: 'text-cyan-500',
    pink: 'text-pink-500'
  };

  const features = [
    'Profesionales con más de 15 años de experiencia',
    'Materiales y equipos de primera calidad',
    'Presupuesto detallado sin compromiso',
    'Trabajo garantizado y certificado',
    'Atención personalizada',
    'Cumplimiento de plazos acordados'
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
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">{category}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                {title}
              </h1>
              
              {subtitle && <h2 className="text-xl text-gray-400 mb-6 font-light">{subtitle}</h2>}
              
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                {description}
              </p>
            </div>

            {/* Technical Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button 
                onClick={() => onNavigate('projects')}
                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
              >
                Proyectos
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
              >
                <Phone className="h-3 w-3 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Features / Specs */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-light text-[#141516] font-[Urbanist] mb-8">
                Excelencia <span className="text-[#70a2ad] font-medium">Técnica</span>
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed font-light text-lg">
                En AquaClean Pro ofrecemos servicios profesionales de {title.toLowerCase()} bajo estrictos protocolos de calidad. 
                Nuestro equipo técnico garantiza resultados superiores mediante procedimientos estandarizados.
              </p>
              
              <div className="bg-[#f8f9fa] border border-[#141516]/5">
                 <div className="p-4 border-b border-[#141516]/5 bg-white flex justify-between items-center">
                     <h3 className="text-xs font-mono text-[#70a2ad] uppercase tracking-[0.2em]">Especificaciones</h3>
                     <div className="flex gap-1">
                        <div className="w-1 h-1 bg-[#70a2ad]/40"></div>
                        <div className="w-1 h-1 bg-[#70a2ad]"></div>
                     </div>
                 </div>
                 <ul className="divide-y divide-[#141516]/5">
                   {features.map((feature, index) => (
                     <li key={index} className="flex items-start gap-4 p-5 hover:bg-white transition-colors group">
                       <div className="w-1.5 h-1.5 bg-[#70a2ad] mt-2 shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                       <span className="text-sm text-gray-600 font-light">{feature}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
            
            {/* Right: Process / Methodology */}
            <div className="lg:col-span-6 lg:pl-12">
               <div className="border-l border-[#141516]/10 pl-8 relative py-2">
                  <h3 className="text-2xl font-light text-[#141516] mb-12 font-[Urbanist]">
                     Fases de <span className="font-medium">Ejecución</span>
                  </h3>
                  
                  <div className="space-y-12">
                    {[
                      { step: '01', title: 'Contacto Inicial', desc: 'Recepción de requerimientos y análisis preliminar.' },
                      { step: '02', title: 'Visita y Valoración', desc: 'Inspección técnica in-situ para diagnóstico preciso.' },
                      { step: '03', title: 'Propuesta Técnica', desc: 'Presupuesto detallado con desglose de materiales y mano de obra.' },
                      { step: '04', title: 'Ejecución', desc: 'Desarrollo del servicio bajo supervisión técnica constante.' },
                      { step: '05', title: 'Entrega y Garantía', desc: 'Verificación funcional y certificado de garantía.' }
                    ].map((item) => (
                      <div key={item.step} className="relative group">
                        {/* Timeline Marker */}
                        <div className="absolute -left-[41px] top-0.5 bg-white py-1">
                           <span className="text-xs font-mono text-[#70a2ad] border border-[#70a2ad]/30 px-1.5 py-0.5 bg-[#70a2ad]/5">
                              {item.step}
                           </span>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-[#141516] font-[Urbanist] mb-2 group-hover:text-[#70a2ad] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 font-light leading-relaxed">
                            {item.desc}
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

      {/* Why Choose Us - Elegant Grid */}
      <section className="py-24 bg-[#f8f9fa] border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
               <h2 className="text-3xl font-light text-[#141516] font-[Urbanist]">
                  Valores <span className="font-medium text-[#70a2ad]">Diferenciales</span>
               </h2>
            </div>
            <div className="hidden md:block pb-2">
               <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Estándares Corporativos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#141516]/10 border border-[#141516]/10">
            {/* Value 1 */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Settings className="h-10 w-10 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
              <h3 className="text-xl font-medium text-[#141516] mb-3 font-[Urbanist]">Experiencia Técnica</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                Más de 15 años de trayectoria resolviendo desafíos complejos en instalaciones acuáticas.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <CheckCircle className="h-10 w-10 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
              <h3 className="text-xl font-medium text-[#141516] mb-3 font-[Urbanist]">Garantía Certificada</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                Todos nuestros servicios incluyen cobertura post-trabajo y garantía de materiales por escrito.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Phone className="h-10 w-10 text-[#141516] stroke-[1] mb-6 group-hover:text-[#70a2ad] transition-colors" />
              <h3 className="text-xl font-medium text-[#141516] mb-3 font-[Urbanist]">Asesoría Integral</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                Acompañamiento técnico continuo, desde el diagnóstico inicial hasta la entrega final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#141516] text-white overflow-hidden relative border-t border-white/10">
        {/* Architectural Background */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Engineering Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
           
           {/* Technical Accent Lines */}
           <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
           <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-10">
             <div className="h-px w-24 bg-[#70a2ad]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-[Urbanist] tracking-tight">
            ¿Necesitas este <span className="text-[#70a2ad]">servicio?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Contacta con nosotros y te proporcionaremos un presupuesto detallado 
            sin ningún compromiso. Estamos aquí para ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="min-w-[240px] bg-[#70a2ad] text-white hover:bg-[#5b858e] rounded-none h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Contacta con Nosotros
            </Button>
            <Button 
              onClick={() => onNavigate('services-overview')}
              size="lg"
              variant="outline"
              className="min-w-[240px] border border-white/20 text-white hover:bg-white/5 hover:text-white hover:border-white rounded-none bg-transparent h-14 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
