import React from 'react';
import { Shield, Heart, Lightbulb, Users, Award, Clock, CheckCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/ImageWithFallback';



export function AboutPage({ onNavigate }) {
    const values = [
        {
            icon: Shield,
            title: "Calidad y Confianza",
            description: "Ofrecemos servicios de la más alta calidad con total transparencia y honestidad en cada proyecto."
        },
        {
            icon: Heart,
            title: "Compromiso",
            description: "Nos comprometemos al 100% con la satisfacción de nuestros clientes y el cuidado del medio ambiente."
        },
        {
            icon: Lightbulb,
            title: "Innovación",
            description: "Incorporamos las últimas tecnologías y técnicas más avanzadas en el mantenimiento de piscinas."
        },
        {
            icon: Users,
            title: "Trabajo en Equipo",
            description: "Nuestro equipo multidisciplinar trabaja coordinadamente para ofrecer el mejor servicio posible."
        }
    ];

    const milestones = [
        {
            year: "2009",
            title: "Fundación de Rogigarnez S.L.",
            description: "Iniciamos nuestra actividad en Madrid con un equipo de 3 técnicos especializados."
        },
        {
            year: "2012",
            title: "Expansión Nacional",
            description: "Ampliamos nuestros servicios a Barcelona, Valencia y otras ciudades principales."
        },
        {
            year: "2016",
            title: "Certificación ISO",
            description: "Obtenemos la certificación ISO 9001 en calidad y ISO 14001 en gestión ambiental."
        },
        {
            year: "2020",
            title: "Tecnología Verde",
            description: "Incorporamos productos 100% ecológicos y sistemas de eficiencia energética."
        },
        {
            year: "2024",
            title: "Liderazgo del Sector",
            description: "Nos consolidamos como empresa líder con más de 500 piscinas bajo mantenimiento."
        }
    ];

    const achievements = [
        {
            icon: Award,
            title: "15+ Años de Experiencia",
            description: "Más de una década perfeccionando nuestros servicios"
        },
        {
            icon: Users,
            title: "500+ Clientes Satisfechos",
            description: "Cientos de familias y comunidades confían en nosotros"
        },
        {
            icon: Shield,
            title: "Técnicos Certificados",
            description: "Todo nuestro personal cuenta con certificaciones oficiales"
        },
        {
            icon: Clock,
            title: "Servicio 24/7",
            description: "Atención de emergencias los 365 días del año"
        }
    ];

    const whyChooseUs = [
        "Más de 15 años de experiencia en el sector",
        "Técnicos altamente cualificados y certificados",
        "Productos eco-friendly y respetuosos con el medio ambiente",
        "Precios competitivos sin comprometer la calidad",
        "Servicio de emergencias 24/7 los 365 días del año",
        "Garantía total en todos nuestros trabajos",
        "Cobertura en las principales ciudades de España",
        "Planes de mantenimiento personalizados"
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-[#141516] text-white overflow-hidden">
                {/* Abstract background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1c1e] hidden lg:block"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px w-8 bg-[#70a2ad]"></div>
                                    <span className="text-[#70a2ad] text-xs font-bold uppercase tracking-[0.2em]">Nuestra Historia</span>
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-light font-[Urbanist] leading-tight mb-6">
                                    Sobre <span className="font-semibold text-white">Rohigarnez S.L.</span>
                                </h1>
                                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                                    Somos una empresa familiar con más de 15 años de experiencia dedicada al
                                    mantenimiento profesional de piscinas. Nuestra pasión es mantener tu piscina
                                    en perfecto estado durante todo el año, combinando tradición y tecnología.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-0">
                                <Button
                                    size="lg"
                                    onClick={() => onNavigate('contact')}
                                    className="bg-[#70a2ad] hover:bg-[#5f8b95] text-white rounded-none px-8 py-6 text-xs font-bold uppercase tracking-widest min-w-[180px]"
                                >
                                    Contactar
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => onNavigate('services-overview')}
                                    className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#141516] rounded-none px-8 py-6 text-xs font-bold uppercase tracking-widest min-w-[180px] sm:border-l-0"
                                >
                                    Nuestros Servicios
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1465198901163-2d15b88fecea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9vbCUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1OTMxNDk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Equipo profesional de Rohigarnez S.L."
                                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                />
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#70a2ad]/30 z-0 hidden sm:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-16">
                            <div className="relative pl-8 border-l-2 border-[#141516]/10 hover:border-[#70a2ad] transition-colors duration-500">
                                <div className="absolute -left-[9px] top-0 bg-white py-2">
                                    <Target className="w-4 h-4 text-[#70a2ad]" />
                                </div>
                                <h2 className="text-2xl font-light text-[#141516] mb-6 font-[Urbanist] uppercase tracking-widest">
                                    Nuestra Misión
                                </h2>
                                <p className="text-xl text-gray-600 font-light leading-relaxed">
                                    Proporcionar servicios de mantenimiento de piscinas de la más alta calidad,
                                    utilizando <span className="text-[#141516] font-normal">técnicas avanzadas</span> y productos eco-friendly, para garantizar que
                                    nuestros clientes disfruten de piscinas limpias, seguras y perfectamente
                                    mantenidas.
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-[#141516]/10 hover:border-[#70a2ad] transition-colors duration-500">
                                <div className="absolute -left-[9px] top-0 bg-white py-2">
                                    <Lightbulb className="w-4 h-4 text-[#70a2ad]" />
                                </div>
                                <h2 className="text-2xl font-light text-[#141516] mb-6 font-[Urbanist] uppercase tracking-widest">
                                    Nuestra Visión
                                </h2>
                                <p className="text-xl text-gray-600 font-light leading-relaxed">
                                    Ser la empresa líder en mantenimiento de piscinas en España, reconocida
                                    por nuestra <span className="text-[#141516] font-normal">excelencia técnica</span>, innovación tecnológica y compromiso
                                    con la sostenibilidad ambiental.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <div className="absolute top-4 -right-4 w-full h-full border border-[#141516]/10 z-0"></div>
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1758813307874-136e308cc5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNvbXBhbnklMjBoZWFkcXVhcnRlcnN8ZW58MXx8fHwxNzU5MzE0OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Oficinas corporativas"
                                className="relative z-10 w-full h-full object-cover shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50 border-t border-[#141516]/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                            Pilares <span className="text-[#70a2ad] font-semibold">Fundamentales</span>
                        </h2>
                        <p className="text-gray-500 font-light max-w-2xl mx-auto">
                            Principios inquebrantables que sostienen nuestra excelencia técnica y compromiso.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#141516]/10 border border-[#141516]/10">
                        {values.map((value, index) => (
                            <div key={index} className="bg-gray-50 p-10 group hover:bg-white transition-all duration-300 relative overflow-hidden">
                                <div className="mb-8 relative">
                                    <value.icon className="w-10 h-10 text-[#141516] group-hover:text-[#70a2ad] transition-colors duration-300 stroke-[1]" />
                                </div>
                                <h3 className="text-sm font-bold text-[#141516] mb-4 font-[Urbanist] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-800 transition-colors">
                                    {value.description}
                                </p>
                                {/* Decorative corner */}
                                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#70a2ad] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-4 font-[Urbanist] tracking-wide">
                            Trayectoria <span className="text-[#70a2ad] font-semibold">Evolutiva</span>
                        </h2>
                        <p className="text-gray-500 font-light">
                            Hitos que han marcado nuestro crecimiento y experiencia.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Central Axis */}
                        <div className="absolute left-1/2 transform -translate-x-px w-px h-full bg-[#141516]/10"></div>

                        <div className="space-y-20">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center justify-between gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Content Side */}
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className="group cursor-default">
                                            <div className="mb-2">
                                                <span className="text-5xl md:text-6xl font-light text-[#141516]/10 font-[Urbanist] group-hover:text-[#70a2ad] transition-colors duration-500">
                                                    {milestone.year}
                                                </span>
                                            </div>
                                            <h3 className="text-sm font-bold text-[#141516] uppercase tracking-[0.2em] mb-3">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-500 font-light leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Axis Marker */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-[#70a2ad] rotate-45 z-10"></div>

                                    {/* Empty Side */}
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-24 bg-[#141516] relative overflow-hidden">
                {/* Subtle architectural grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(112,162,173,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,162,173,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-[Urbanist] tracking-wide">
                                Excelencia <span className="text-[#70a2ad] font-semibold">Certificada</span>
                            </h2>
                            <p className="text-gray-400 font-light text-lg">
                                Cifras que demuestran nuestro compromiso técnico y profesionalidad.
                            </p>
                        </div>
                        {/* Technical accent line */}
                        <div className="hidden md:block w-24 h-px bg-[#70a2ad]/50 mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="group py-12 px-6 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors duration-500">
                                <div className="mb-6 relative">
                                    <achievement.icon className="w-10 h-10 text-[#70a2ad] stroke-[1] opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500" />
                                </div>
                                <h3 className="text-3xl font-light text-white mb-3 font-[Urbanist] tracking-tight">
                                    {achievement.title}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white border-b border-[#141516]/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side with Architectural Frame */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute top-6 -left-6 w-full h-full border border-[#141516]/10 hidden lg:block z-0"></div>
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMHRydXN0JTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzU5MzE0OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Confianza y profesionalidad"
                                className="w-full h-[500px] object-cover relative z-10 grayscale-[10%]"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="space-y-10 order-1 lg:order-2">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-light text-[#141516] mb-6 font-[Urbanist] tracking-wide">
                                    ¿Por Qué <span className="text-[#70a2ad] font-semibold">Elegirnos</span>?
                                </h2>
                                <p className="text-gray-500 font-light text-lg leading-relaxed border-l-2 border-[#70a2ad] pl-6">
                                    Somos más que una empresa de mantenimiento. Somos tu socio técnico para garantizar la excelencia operativa de tus instalaciones.
                                </p>
                            </div>

                            <div className="grid gap-0">
                                {whyChooseUs.map((reason, index) => (
                                    <div key={index} className="flex items-center py-5 border-b border-[#141516]/5 group hover:pl-2 transition-all duration-300 cursor-default">
                                        <div className="w-1.5 h-1.5 bg-[#141516]/20 mr-4 group-hover:bg-[#70a2ad] transition-colors duration-300 rotate-45"></div>
                                        <span className="text-gray-600 font-light group-hover:text-[#141516] transition-colors duration-300">
                                            {reason}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-[#141516]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=2000&auto=format&fit=crop"
                        alt="Water background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-[#141516]/60"></div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6 font-[Urbanist] tracking-wide">
                        ¿Preparado para <span className="text-[#70a2ad] font-semibold">Conocernos</span>?
                    </h2>
                    <p className="text-xl mb-12 text-gray-300 font-light max-w-2xl mx-auto leading-relaxed border-b border-[#70a2ad]/30 pb-12">
                        Estaremos encantados de analizar técnicamente tus instalaciones y proponerte un plan de mantenimiento a medida.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            size="lg"
                            onClick={() => onNavigate('contact')}
                            className="bg-[#70a2ad] text-white hover:bg-[#5a828b] rounded-none h-14 px-10 uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-[0_0_20px_rgba(112,162,173,0.2)]"
                        >
                            Contactar Ahora
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => onNavigate('home')}
                            className="border-white text-white hover:bg-white hover:text-[#141516] bg-transparent rounded-none h-14 px-10 uppercase tracking-widest text-xs font-bold transition-all duration-300"
                        >
                            Volver al Inicio
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}