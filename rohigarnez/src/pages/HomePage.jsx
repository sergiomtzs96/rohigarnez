import React, { useEffect } from "react";
import {
  Star,
  Shield,
  Leaf,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  MapPin,
  Edit,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function HomePage({ onNavigate, user }) {
  const features = [
    {
      icon: Shield,
      title: "Técnicos Cualificados",
      description:
        "Personal altamente cualificado con más de 15 años de experiencia en el sector.",
    },
    {
      icon: Leaf,
      title: "Instaladores autorizados de RENOLIT",
      description:
        "Garantía de calidad y durabilidad en cada proyecto.",
    },
    {
      icon: DollarSign,
      title: "Precios Competitivos",
      description:
        "Ofrecemos los mejores precios del mercado sin comprometer la calidad del servicio.",
    },
  ];

  const services = [
    {
      title: "Limpieza de Piscinas",
      description:
        "Servicio completo de limpieza y mantenimiento para mantener tu piscina en perfectas condiciones.",
      image:
        "https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBtYWludGVuYW5jZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTMxMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Reparación de Piscinas",
      description:
        "Diagnóstico y reparación de averías, fugas y problemas técnicos en instalaciones de piscinas.",
      image:
        "https://images.unsplash.com/photo-1753194931766-211c9f563156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Planes de Mantenimiento",
      description:
        "Programas personalizados de mantenimiento preventivo para asegurar el óptimo funcionamiento.",
      image:
        "https://images.unsplash.com/photo-1758304481804-bc6599801700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzd2ltbWluZyUyMHBvb2wlMjBjb21wbGV4fGVufDF8fHx8MTc1OTMxMjY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const benefits = [
    {
      title: "Salud y Seguridad",
      description:
        "Un mantenimiento adecuado garantiza agua limpia y segura para ti y tu familia.",
      icon: Shield,
    },
    {
      title: "Durabilidad del Equipo",
      description:
        "El mantenimiento preventivo prolonga la vida útil de bombas, filtros y sistemas.",
      icon: Award,
    },
    {
      title: "Ahorro de Costos",
      description:
        "Prevenir problemas es más económico que reparar averías importantes.",
      icon: DollarSign,
    },
  ];

  const stats = [
    { number: "500+", label: "Piscinas Atendidas" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Servicio de Emergencia" },
  ];

  const locations = [
    {
      city: "Madrid",
      region: "Comunidad de Madrid",
      description:
        "Servicio completo en la capital y área metropolitana",
      coverage:
        "Madrid Capital, Alcalá de Henares, Getafe, Móstoles",
    },
    {
      city: "Barcelona",
      region: "Cataluña",
      description:
        "Atendemos toda el área metropolitana de Barcelona",
      coverage:
        "Barcelona, Hospitalet, Badalona, Sabadell, Terrassa",
    },
    {
      city: "Valencia",
      region: "Comunidad Valenciana",
      description:
        "Cobertura en Valencia y municipios cercanos",
      coverage: "Valencia, Gandía, Sagunto, Alzira, Xàtiva",
    },
    {
      city: "Sevilla",
      region: "Andalucía",
      description: "Servicio en Sevilla y provincia",
      coverage:
        "Sevilla, Dos Hermanas, Alcalá de Guadaíra, Utrera",
    },
    {
      city: "Bilbao",
      region: "País Vasco",
      description: "Atendemos el Gran Bilbao y alrededores",
      coverage:
        "Bilbao, Getxo, Barakaldo, Portugalete, Santurtzi",
    },
    {
      city: "Málaga",
      region: "Andalucía",
      description: "Costa del Sol y área metropolitana",
      coverage:
        "Málaga, Marbella, Fuengirola, Torremolinos, Benalmádena",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Rehabilitación Completa en Pozuelo",
      description:
        "Renovación integral de piscina residencial con nuevo sistema de filtración y revestimiento de gresite.",
      location: "Pozuelo de Alarcón, Madrid",
      date: "Octubre 2024",
      category: "Rehabilitación",
      image:
        "https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwcmVub3ZhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzU5MzE0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Piscina de Obra Nueva",
      description:
        "Construcción de piscina moderna con sistema de cloración salina y iluminación LED subacuática.",
      location: "Majadahonda, Madrid",
      date: "Septiembre 2024",
      category: "Construcción",
      image:
        "https://images.unsplash.com/photo-1758448501014-3a6068fb9d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTQ3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Modernización de Piscina Comunitaria",
      description:
        "Actualización de equipos y mejora de la eficiencia energética en complejo residencial.",
      location: "Las Rozas, Madrid",
      date: "Agosto 2024",
      category: "Modernización",
      image:
        "https://images.unsplash.com/photo-1656501379590-2655b905d2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1OTMxNDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Madrid",
      rating: 5,
      comment:
        "Excelente servicio. Muy profesionales y puntuales. Mi piscina nunca ha estado mejor.",
    },
    {
      name: "Carlos Rodríguez",
      location: "Barcelona",
      rating: 5,
      comment:
        "Los recomiendo totalmente. Resolvieron un problema complejo en mi sistema de filtración.",
    },
    {
      name: "Ana Martín",
      location: "Valencia",
      rating: 5,
      comment:
        "Servicio impecable y precios muy competitivos. Llevan manteniendo mi piscina 3 años.",
    },
  ];

  const [pageData, setPageData] = useState(null);
  const [testimonialsData, setTestimonialsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch (`${import.meta.env.VITE_API_URL}/api/info/homepage`);
        const data = await res.json();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch (`${import.meta.env.VITE_API_URL}/api/testimonials/testimonials-homepage`);
        const data = await res.json();
        setTestimonialsData(data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    }
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1753194931766-211c9f563156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl relative z-10 pt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#70a2ad]"></div>
              <span className="text-[#70a2ad] font-bold tracking-[0.3em] text-xs uppercase">
                Premium Pool Care
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-light text-white font-[Urbanist] leading-[1.1] mb-8 tracking-wide">
              Mantenimiento <br />
              <span className="font-semibold text-white">Técnico Integral</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <p className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Elevamos el estándar de cuidado acuático con más de 15 años de experiencia. 
                Tecnología certificada y sostenibilidad para un agua impecable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-0">
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-[#70a2ad] hover:bg-[#5f8b95] text-white rounded-none h-14 px-10 text-xs font-bold uppercase tracking-[0.2em] transition-all border-none"
              >
                Contacta con nosotros
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("services-overview")}
                className="bg-transparent border-white/30 text-white hover:bg-white hover:text-[#141516] rounded-none h-14 px-10 text-xs font-bold uppercase tracking-[0.2em] transition-all backdrop-blur-sm sm:border-l-0"
              >
                Explorar Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#141516]/10 pb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                ¿Por qué elegir <span className="text-[#70a2ad] font-semibold">Rohigarnez S.L.</span>?
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Liderazgo técnico y estándares de calidad superior en el mantenimiento de piscinas.
              </p>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-[#141516]/20 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {pageData?.features?.map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex flex-col items-start h-full">
                  <div className="mb-6 p-4 border border-[#141516]/10 text-[#141516] bg-transparent transition-all duration-300 group-hover:border-[#70a2ad] group-hover:text-[#70a2ad]">
                    <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-[#141516] mb-4 tracking-wide group-hover:text-[#70a2ad] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-t border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                Nuestros <span className="text-[#70a2ad] font-semibold">Servicios</span>
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Soluciones técnicas integrales para el mantenimiento y cuidado de tu piscina.
              </p>
            </div>
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-none border-[#141516]/20 text-[#141516] hover:bg-[#141516] hover:text-white transition-all text-xs uppercase tracking-widest px-8"
                onClick={() => onNavigate("services-overview")}
              >
                Ver catálogo completo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {pageData?.services?.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => onNavigate("services-overview")}
              >
                <div className="relative h-64 overflow-hidden mb-6 w-full bg-gray-200">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#70a2ad] group-hover:w-full transition-all duration-500 ease-out z-20"></div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-light text-[#141516] mb-3 group-hover:text-[#70a2ad] transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div>
                    <span className="inline-block text-xs font-bold text-[#141516] uppercase tracking-widest border-b border-[#141516]/20 pb-1 group-hover:border-[#70a2ad] group-hover:text-[#70a2ad] transition-colors">
                      Más información
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Button
              variant="outline"
              className="w-full rounded-none border-[#141516]/20 text-[#141516] hover:bg-[#141516] hover:text-white transition-all text-xs uppercase tracking-widest"
              onClick={() => onNavigate("services-overview")}
            >
              Ver catálogo completo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light text-[#141516] font-[Urbanist] tracking-wide">
                  Beneficios del <span className="font-semibold text-[#70a2ad]">Mantenimiento</span>
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                  Un cuidado profesional no solo garantiza la estética de tu piscina, sino que protege la salud de los tuyos y revaloriza tu propiedad.
                </p>
              </div>
              
              <div className="grid gap-10">
                {pageData?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#141516]/10 bg-gray-50 text-[#141516] group-hover:border-[#70a2ad] group-hover:text-[#70a2ad] transition-all duration-300">
                        <benefit.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-[#141516] group-hover:text-[#70a2ad] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-3/4 h-full bg-[#141516]/5 -z-10 translate-x-8 -translate-y-8"></div>
              <div className="relative h-[600px] w-full bg-gray-100">
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzd2ltbWluZyUyMHBvb2wlMjBtYWludGVuYW5jZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTMxMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mantenimiento de piscina profesional"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 bg-white p-6 max-w-xs border-t-4 border-[#70a2ad]">
                  <p className="text-[#141516] font-medium text-sm tracking-wide">
                    "La excelencia en el detalle es lo que distingue un servicio premium."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 border-t border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
              Números que <span className="text-[#70a2ad] font-semibold">Hablan</span>
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Datos reales que respaldan nuestra excelencia en el servicio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#141516]/10 border border-[#141516]/10">
            {pageData?.stats?.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 md:p-12 flex flex-col items-center justify-center group hover:bg-white transition-all duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#141516] mb-3 font-[Urbanist] group-hover:text-[#70a2ad] transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#141516] transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-[#141516] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative h-full min-h-[500px] bg-[#1a1c1e] overflow-hidden group">
              <div className="absolute inset-0 bg-[#70a2ad]/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586448910781-172c05784db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFpbiUyMG1hcCUyMGxvY2F0aW9ucyUyMGNpdGllc3xlbnwxfHx8fDE3NTkzMTQ2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mapa de cobertura nacional"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="inline-block py-2 bg-transparent text-white text-xs font-bold uppercase tracking-widest mb-2">
                  Cobertura Nacional
                </div>
                <p className="text-gray-300 text-sm">
                  Desplegando excelencia técnica en las principales capitales.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light text-white font-[Urbanist] tracking-wide">
                  Área de <span className="text-[#70a2ad] font-semibold">Servicio</span>
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Infraestructura logística optimizada para ofrecer respuesta rápida y mantenimiento certificado en toda la Comunidad de Madrid y alrededores.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {pageData?.locations?.map((location, index) => (
                  <div
                    key={index}
                    className="group border-l border-white/10 pl-6 hover:border-[#70a2ad] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-medium text-white group-hover:text-[#70a2ad] transition-colors">
                        {location.city}
                      </h3>
                      <MapPin className="w-4 h-4 text-[#70a2ad] opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                    </div>
                    <p className="text-sm text-gray-400 mb-1 font-light">
                      {location.region}
                    </p>
                    <p className="text-xs text-gray-500 font-mono tracking-tight leading-tight">
                      {location.coverage}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      ¿Tu ubicación no aparece?
                    </h3>
                    <p className="text-sm text-gray-400 font-light">
                      Consultanos sobre planes de expansión y servicios especiales.
                    </p>
                  </div>
                  <Button
                    onClick={() => onNavigate("contact")}
                    variant="outline"
                    className="whitespace-nowrap rounded-none border-white/20 text-primary hover:bg-[#70a2ad] hover:border-[#70a2ad] hover:text-white transition-all text-xs uppercase tracking-widest px-6"
                  >
                    Consultar Disponibilidad
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 bg-white border-t border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                Proyectos <span className="text-[#70a2ad] font-semibold">Recientes</span>
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Galería de excelencia técnica. Cada proyecto refleja precisión y compromiso.
              </p>
            </div>
            {user?.type === 'admin' && (
              <Button
                variant="outline"
                onClick={() => onNavigate('admin')}
                className="rounded-none border-[#141516]/20 text-[#141516] hover:bg-[#141516] hover:text-white transition-all uppercase text-xs tracking-widest px-6"
              >
                <Edit className="w-4 h-4 mr-2" />
                Editar Proyectos
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {pageData?.recentProjects?.map((project) => (
              <div
                key={project.id}
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                  <div className="absolute top-0 left-0 z-10">
                     <span className="inline-block bg-[#141516] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                       {project.category}
                     </span>
                  </div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#70a2ad]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="border-t border-gray-100 pt-6 transition-colors group-hover:border-[#70a2ad]/30">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-[Urbanist] font-light text-[#141516] group-hover:text-[#70a2ad] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono mt-1">
                      {project.date}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <MapPin className="w-3 h-3 mr-2 text-[#70a2ad]" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button
              onClick={() => onNavigate("projects")}
              variant="outline"
              className="rounded-none border-[#141516] text-[#141516] hover:bg-[#141516] hover:text-white px-8 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              Ver Portfolio Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 border-t border-[#141516]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
              Experiencias <span className="text-[#70a2ad] font-semibold">Reales</span>
            </h2>
            <p className="text-gray-500 font-light mb-8">Transparencia y satisfacción en cada proyecto.</p>
            <div className="w-px h-12 bg-[#141516] mx-auto opacity-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonialsData?.testimonials?.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute top-0 left-0 w-full h-px bg-[#141516]/10 group-hover:bg-[#70a2ad] transition-colors duration-500"></div>
                <div className="pt-8">
                  <div className="flex gap-1 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#141516] text-[#141516]"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-lg text-gray-700 font-light italic leading-relaxed mb-8">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#70a2ad] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <div className="font-bold text-[#141516] text-xs uppercase tracking-widest">
                        {testimonial.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono mt-1">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#141516] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/0 via-white/10 to-white/0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 font-[Urbanist] tracking-wide">
            Ingeniería aplicada a tu <span className="text-[#70a2ad] font-normal">Bienestar</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Eleva el estándar de mantenimiento de tu piscina. 
            Precisión técnica, respuesta inmediata y resultados garantizados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              size="lg"
              onClick={() => onNavigate("quote")}
              className="min-w-[240px] bg-[#70a2ad] text-white hover:bg-[#5f8b95] rounded-none px-8 py-7 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(112,162,173,0.2)] hover:shadow-[0_0_30px_rgba(112,162,173,0.4)]"
            >
              Solicitar Diagnóstico
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("services-overview")}
              className="min-w-[240px] bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#141516] rounded-none px-8 py-7 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
            >
              Explorar Servicios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}