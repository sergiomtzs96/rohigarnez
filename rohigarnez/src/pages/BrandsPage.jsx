import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Award, Users, Star, ArrowRight } from 'lucide-react';
import { getBadgeColor } from '../utils/badgeUtils';



export function BrandsPage({ onNavigate }) {
  
  const iconMap = {
    Award,
    Star,
    Users
  }

  const [brandsData, setBrandsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/info/brandspage`
        );

        const data = await res.json();
        setBrandsData(data);
      } catch (error) {
        console.error('Error cargando BrandsPage:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141516] pt-32 pb-24 overflow-hidden">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#70a2ad]"></div>
                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Alianzas Estratégicas</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                Red de <br />
                <span className="font-semibold text-[#70a2ad]">Partners Oficiales</span>
              </h1>

              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                Arquitectura de colaboración con los fabricantes más prestigiosos.
                Garantía de origen y soporte técnico certificado para cada componente de su instalación.
              </p>
            </div>

            {/* Technical Stats - Hero Side */}
            <div className="flex flex-col gap-8 md:text-right">
              <div className="group">
                <h3 className="text-4xl font-light text-white font-[Urbanist] mb-1 group-hover:text-[#70a2ad] transition-colors">15+</h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Marcas Globales</span>
              </div>
              <div className="group">
                <h3 className="text-4xl font-light text-white font-[Urbanist] mb-1 group-hover:text-[#70a2ad] transition-colors">100%</h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                Ecosistema de <span className="text-[#70a2ad] font-semibold">Fabricantes</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Selección rigurosa de proveedores basada en criterios de durabilidad, eficiencia energética y soporte post-venta.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-[#141516]/10 ml-12 mb-4"></div>
          </div>

          <div className="space-y-20">
            {brandsData?.partnerships?.map((category, categoryIndex) => {
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[#70a2ad] font-mono text-xs">0{categoryIndex + 1}</span>
                    <h3 className="text-sm font-bold text-[#141516] uppercase tracking-[0.2em]">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 border-t border-l border-[#141516]/10">
                    {(category.brands || []).map((brand, brandIndex) => (
                      <div key={brandIndex} className="group border-r border-b border-[#141516]/10 p-8 hover:bg-gray-50 transition-colors duration-300 relative">
                        {/* Technical Corner Marker */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[6px] border-r-[6px] border-transparent group-hover:border-[#70a2ad] transition-all duration-300"></div>

                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-[#141516]/5 flex items-center justify-center text-[#141516] font-bold font-[Urbanist] text-xl">
                            {brand.name.substring(0, 1)}
                          </div>
                          <span className={`text-[10px] uppercase tracking-wider font-mono px-2 py-1 border ${getBadgeColor(brand.level)}`}>
                            {brand.level}
                          </span>
                        </div>

                        <h4 className="text-xl font-medium text-[#141516] font-[Urbanist] mb-3">
                          {brand.name}
                        </h4>

                        <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 h-auto line-clamp-2">
                          {brand.description}
                        </p>

                        <div className="flex items-center gap-2 text-[#141516] text-xs font-bold uppercase tracking-wider opacity-40 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <span>Ficha Técnica</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white border-y border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-0">
            {/* Header Column */}
            <div className="lg:pr-12 lg:border-r border-[#141516]/10 flex flex-col justify-center">
              <h2 className="text-3xl font-light text-[#141516] mb-4 font-[Urbanist]">
                Calidad <br /><span className="font-semibold text-[#70a2ad]">Certificada</span>
              </h2>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Protocolos de actuación validados por organismos internacionales y nuestros partners fabricantes.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="lg:col-span-3 grid sm:grid-cols-3">
              {brandsData?.certifications?.map((cert, index) => {
                const Icon = iconMap[cert.icon];
                return (
                  <div key={index} className="flex flex-col justify-between p-8 border-b sm:border-b-0 sm:border-r sm:last:border-r-0 border-[#141516]/10 group hover:bg-gray-50 transition-colors duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-12 border border-[#141516]/10 flex items-center justify-center mb-6 group-hover:border-[#70a2ad] transition-colors duration-300">
                        <div className="text-[#141516] group-hover:text-[#70a2ad] transition-colors duration-300 [&>svg]:stroke-[1]">
                          {Icon && <Icon />}
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-[#141516] font-[Urbanist] mb-2">{cert.title}</h4>
                    </div>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Reasons List */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                  Valor <span className="text-[#70a2ad] font-semibold">Añadido</span>
                </h2>
                <div className="w-12 h-px bg-[#70a2ad]"></div>
              </div>

              <div className="space-y-10">
                <div className="group">
                  <h5 className="text-lg font-medium text-[#141516] mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#70a2ad] rounded-full"></span>
                    Garantía de Calidad
                  </h5>
                  <p className="text-gray-500 font-light text-sm leading-relaxed pl-4 border-l border-[#141516]/10 ml-[3px]">
                    Acceso directo a garantías extendidas del fabricante y soporte técnico prioritario para resolución de incidencias.
                  </p>
                </div>

                <div className="group">
                  <h5 className="text-lg font-medium text-[#141516] mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#70a2ad] transition-colors rounded-full"></span>
                    Innovación Continua
                  </h5>
                  <p className="text-gray-500 font-light text-sm leading-relaxed pl-4 border-l border-[#141516]/10 ml-[3px]">
                    Implementación pionera de las últimas tecnologías en domótica y eficiencia energética antes de su llegada al mercado general.
                  </p>
                </div>

                <div className="group">
                  <h5 className="text-lg font-medium text-[#141516] mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#70a2ad] transition-colors rounded-full"></span>
                    Trazabilidad Total
                  </h5>
                  <p className="text-gray-500 font-light text-sm leading-relaxed pl-4 border-l border-[#141516]/10 ml-[3px]">
                    Certificación de origen en todos los componentes y recambios, asegurando la longevidad de la instalación.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-px bg-[#141516]/10 border border-[#141516]/10">
              <div className="bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors aspect-square">
                <span className="text-5xl font-light text-[#141516] mb-2 font-[Urbanist]">15+</span>
                <span className="text-xs text-[#70a2ad] font-bold uppercase tracking-widest">Partners</span>
              </div>
              <div className="bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors aspect-square">
                <span className="text-5xl font-light text-[#141516] mb-2 font-[Urbanist]">08</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Años</span>
              </div>
              <div className="bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors aspect-square">
                <span className="text-5xl font-light text-[#141516] mb-2 font-[Urbanist]">100%</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Original</span>
              </div>
              <div className="bg-white p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors aspect-square">
                <span className="text-5xl font-light text-[#141516] mb-2 font-[Urbanist]">24h</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Soporte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#141516] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border border-white/10 p-12 md:p-20 overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 font-[Urbanist] tracking-wide">
                  Asesoramiento Técnico <span className="text-[#70a2ad]">Especializado</span>
                </h2>
                <p className="text-gray-400 font-light text-lg leading-relaxed">
                  Analizamos la compatibilidad de equipos y diseñamos la configuración óptima para maximizar la eficiencia de su instalación.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 w-full lg:w-auto">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
                >
                  Solicitar Estudio
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('services')}
                  className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
                >
                  Ver Servicios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}