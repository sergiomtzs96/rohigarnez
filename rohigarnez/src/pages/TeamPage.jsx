import { React, useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/ImageWithFallback';
import {
  User,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Users,
  Wrench,
  GraduationCap,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

export default function TeamPage({ onNavigate }) {

  const iconsMap = {
    clock: <Clock className="w-8 h-8" />,
    check: <CheckCircle className="w-8 h-8" />,
    star: <Star className="w-8 h-8" />,
    graduation: <GraduationCap className="w-8 h-8" />
  };

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/pages/teampage`
        );

        const data = await res.json();
        setPageData(data);
      } catch (error) {
        console.error('Error cargando TeamPage:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#141516] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop"
            alt="Fondo técnico"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-[#141516]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(112,162,173,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 px-4 py-1 border border-[#70a2ad]/30 bg-[#70a2ad]/5 backdrop-blur-sm">
            <span className="text-[#70a2ad] text-xs font-bold tracking-[0.2em] uppercase">Talento Humano</span>
          </div>

          <h1 className="mb-8 text-white text-5xl md:text-7xl font-light font-[Urbanist] tracking-tight">
            Nuestro <span className="font-semibold text-[#70a2ad]">Equipo</span>
          </h1>

          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Ingenieros, técnicos y especialistas unidos por la excelencia operativa y la pasión por el detalle.
          </p>

          <div className="flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#70a2ad] stroke-[1.5]" />
              <span className="text-gray-300 text-sm font-medium tracking-wide uppercase">6 Especialistas</span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#70a2ad] stroke-[1.5]" />
              <span className="text-gray-300 text-sm font-medium tracking-wide uppercase">Certificaciones ISO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-white border-b border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#141516]/10 border border-[#141516]/10 bg-gray-50/50">
            {pageData?.companyValues?.map((stat, index) => (
              <div key={index} className="group p-10 flex flex-col items-center text-center hover:bg-white transition-colors duration-500 relative">
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#70a2ad] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="mb-6">
                  {/* Icon wrapper - no circle */}
                  {iconsMap[stat.icon]}
                </div>

                <div className="text-4xl md:text-5xl font-light text-[#141516] mb-3 font-[Urbanist] tracking-tight group-hover:-translate-y-1 transition-transform duration-500">
                  {stat.value}
                </div>

                <h4 className="text-sm font-bold text-[#141516] uppercase tracking-[0.15em] mb-2">
                  {stat.title}
                </h4>

                <p className="text-xs text-gray-500 font-light tracking-wide">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
              Cuadro <span className="text-[#70a2ad] font-semibold">Técnico</span>
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Perfiles especializados seleccionados por su rigor y experiencia en instalaciones acuáticas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-[#141516]/10 border border-[#141516]/10">
            {pageData?.teamMembers?.map((member, index) => (
              <div key={index} className="bg-white p-8 md:p-10 group hover:bg-gray-50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Avatar / Photo Area - Square & Technical */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 relative overflow-hidden group-hover:ring-1 ring-[#70a2ad]/50 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#141516]/5 text-[#141516]/20">
                      <User className="w-12 h-12 stroke-[1]" />
                    </div>
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#70a2ad] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info Area */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-medium text-[#141516] font-[Urbanist]">
                        {member.name}
                      </h3>
                      <span className="text-xs font-mono text-[#70a2ad] border border-[#70a2ad]/20 px-2 py-0.5 uppercase tracking-wide">
                        EXP. {member.experience}
                      </span>
                    </div>

                    <p className="text-sm text-[#70a2ad] font-medium uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                      {member.role}
                    </p>

                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                      {member.bio}
                    </p>

                    <div className="space-y-4">
                      {/* Technical Specs List */}
                      <div>
                        <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-2">Especialidades</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.slice(0, 3).map((specialty, i) => (
                            <span key={i} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 border border-gray-200">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Line */}
                      <div className="flex items-center gap-6 pt-4 border-t border-gray-50 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Phone className="w-3 h-3" />
                          <span className="font-mono">{member.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Mail className="w-3 h-3" />
                          <span>{member.contact.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Areas */}
      <section className="py-24 bg-white border-t border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column: Coverage Areas */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                  Radio de <span className="text-[#70a2ad] font-semibold">Acción</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Despliegue operativo en la provincia y zonas limítrofes, optimizado para garantizar tiempos de respuesta mínimos.
                </p>
              </div>

              <div className="space-y-8">
                {pageData?.workingAreas?.map((area, index) => (
                  <div key={index} className="group">
                    <div className="flex items-end justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#141516] stroke-[1.5]" />
                        <span className="font-medium text-[#141516] tracking-wide text-sm uppercase">{area.area}</span>
                      </div>
                      <span className="text-xs font-mono text-[#70a2ad] font-bold">{area.coverage}</span>
                    </div>
                    {/* Architectural Progress Bar */}
                    <div className="w-full h-px bg-[#141516]/10 relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-[#70a2ad] transition-all duration-1000 ease-out group-hover:h-0.5 group-hover:-top-[1px]"
                        style={{ width: area.coverage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Why Choose Us - Technical List */}
            <div className="relative pl-0 lg:pl-12 border-l-0 lg:border-l border-[#141516]/10">
              <h3 className="text-sm font-bold text-[#141516] uppercase tracking-[0.2em] mb-12">
                Estándares de Calidad
              </h3>

              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-[#70a2ad] stroke-[1]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-[#141516] mb-2 group-hover:text-[#70a2ad] transition-colors">Equipo Multidisciplinar</h5>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      Arquitectos, ingenieros y técnicos especializados integrados en un mismo flujo de trabajo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <GraduationCap className="w-6 h-6 text-[#70a2ad] stroke-[1]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-[#141516] mb-2 group-hover:text-[#70a2ad] transition-colors">Formación Continua</h5>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      Actualización constante en normativa sanitaria y nuevas tecnologías de tratamiento de aguas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-[#70a2ad] stroke-[1]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-[#141516] mb-2 group-hover:text-[#70a2ad] transition-colors">Disponibilidad</h5>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      Servicio de asistencia técnica y urgencias operativo todo el año.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <Wrench className="w-6 h-6 text-[#70a2ad] stroke-[1]" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-[#141516] mb-2 group-hover:text-[#70a2ad] transition-colors">Tecnología Avanzada</h5>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      Uso de fotómetros digitales de alta precisión y robótica de limpieza de última generación.
                    </p>
                  </div>
                </div>
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
                  Ingeniería y Diseño <span className="text-[#70a2ad]">al Servicio de su Proyecto</span>
                </h2>
                <p className="text-gray-400 font-light text-lg leading-relaxed">
                  Nuestro equipo técnico analiza sus requerimientos para ofrecer soluciones de vanguardia en mantenimiento y construcción de instalaciones acuáticas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 w-full lg:w-auto">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
                >
                  Contactar Equipo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
                >
                  Sobre Nosotros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}