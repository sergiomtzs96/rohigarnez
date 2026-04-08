import {
    Droplets,
    Search,
    Wrench,
    Hammer,
    Settings,
    Package,
    Users,
    ShieldCheck,
    ArrowRight,
    CheckCircle,
    Phone,
    LayoutGrid
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';



export function ServicesPage({ onNavigate }) {
    const serviceCategories = [
        {
            id: 'maintenance',
            title: 'Mantenimiento',
            subtitle: 'Para comunidades de vecinos',
            description: 'Servicios especializados de mantenimiento regular para piscinas comunitarias',
            icon: Droplets,
            color: 'bg-blue-500',
            textAccent: 'text-blue-500',
            services: [
                {
                    id: 'pools-without-lifeguard',
                    name: 'Mantenimiento sin socorristas',
                    description: 'Mantenimiento completo para piscinas comunitarias',
                    page: 'pools-without-lifeguard'
                },
                {
                    id: 'pools-with-lifeguard',
                    name: 'Mantenimiento con socorristas',
                    description: 'Servicio integral con personal de vigilancia cualificado',
                    page: 'pools-with-lifeguard'
                }
            ]
        },
        {
            id: 'detection',
            title: 'Detección y Diagnóstico',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Localización precisa de fugas y problemas técnicos',
            icon: Search,
            color: 'bg-purple-500',
            textAccent: 'text-purple-500',
            services: [
                {
                    id: 'leak-detection',
                    name: 'Localización de fugas con gas trazador',
                    description: 'Tecnología avanzada para detectar fugas',
                    page: 'leak-detection'
                },
                {
                    id: 'pressure-testing',
                    name: 'Pruebas de presión de tuberías',
                    description: 'Verificación exhaustiva del sistema de tuberías',
                    page: 'pressure-testing'
                },
                {
                    id: 'air-testing',
                    name: 'Pruebas mediante aire',
                    description: 'Mayor eficacia en la detección de problemas',
                    page: 'air-testing'
                }
            ]
        },
        {
            id: 'repairs',
            title: 'Reparaciones',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Soluciones profesionales para todo tipo de reparaciones',
            icon: Wrench,
            color: 'bg-orange-500',
            textAccent: 'text-orange-500',
            services: [
                {
                    id: 'pipe-repair',
                    name: 'Reparación de tuberías',
                    description: 'Reparación y sustitución de tuberías de piscinas',
                    page: 'pipe-repair'
                },
                {
                    id: 'crack-repair',
                    name: 'Reparación de grietas',
                    description: 'Según valoración previa in situ',
                    page: 'crack-repair'
                }
            ]
        },
        {
            id: 'construction',
            title: 'Construcción, Rehabilitación y Obra',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Proyectos completos de construcción y renovación',
            icon: Hammer,
            color: 'bg-green-500',
            textAccent: 'text-green-500',
            services: [
                {
                    id: 'liner-rehabilitation',
                    name: 'Rehabilitación con lámina armada',
                    description: 'Varias marcas disponibles',
                    page: 'liner-rehabilitation'
                },
                {
                    id: 'pool-construction',
                    name: 'Construcción de piscinas de obra',
                    description: 'Piscinas personalizadas desde cero',
                    page: 'pool-construction'
                },
                {
                    id: 'gunite',
                    name: 'Gunitado de vasos',
                    description: 'Aplicación profesional de gunita',
                    page: 'gunite'
                },
                {
                    id: 'grouting',
                    name: 'Lechadas y reposición de gresites',
                    description: 'Acabados perfectos y duraderos',
                    page: 'grouting'
                },
                {
                    id: 'stone-replacement',
                    name: 'Cambios de piedras / coronación',
                    description: 'Renovación de acabados exteriores',
                    page: 'stone-replacement'
                },
                {
                    id: 'stairs-construction',
                    name: 'Construcción de escaleras de obra',
                    description: 'Todo tipo de escaleras con diferentes acabados',
                    page: 'stairs-construction'
                },
                {
                    id: 'pump-room-elevation',
                    name: 'Elevación de depuradoras',
                    description: 'Casetas de PVC o de obra',
                    page: 'pump-room-elevation'
                }
            ]
        },
        {
            id: 'installations',
            title: 'Instalaciones y Equipamientos',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Instalación y mantenimiento de equipos especializados',
            icon: Settings,
            color: 'bg-cyan-500',
            textAccent: 'text-cyan-500',
            services: [
                {
                    id: 'salt-chlorinators',
                    name: 'Montaje de cloradores salinos',
                    description: 'Instalación profesional de sistemas de cloración',
                    page: 'salt-chlorinators'
                },
                {
                    id: 'ph-machines',
                    name: 'Instalación de máquinas de pH',
                    description: 'Control automático de pH',
                    page: 'ph-machines'
                },
                {
                    id: 'pump-replacement',
                    name: 'Cambios / sustitución de bombas',
                    description: 'Bombas de piscina de última generación',
                    page: 'pump-replacement'
                },
                {
                    id: 'heat-pumps',
                    name: 'Bombas de calor para piscinas',
                    description: 'Suministro e instalación completa',
                    page: 'heat-pumps'
                },
                {
                    id: 'filter-sand',
                    name: 'Cambios de arenas de filtros',
                    description: 'Renovación de medios filtrantes',
                    page: 'filter-sand'
                }
            ]
        },
        {
            id: 'supplies',
            title: 'Suministros',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Productos y materiales de primera calidad',
            icon: Package,
            color: 'bg-pink-500',
            textAccent: 'text-pink-500',
            services: [
                {
                    id: 'pool-covers',
                    name: 'Lonas para piscinas',
                    description: 'Venta e instalación de cobertores',
                    page: 'pool-covers'
                },
                {
                    id: 'pool-materials',
                    name: 'Materiales de piscina',
                    description: 'Suministro de todo tipo de materiales',
                    page: 'pool-materials'
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative bg-[#141516] pt-32 pb-24 overflow-hidden">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-px bg-[#70a2ad]"></div>
                                <span className="text-[#70a2ad] font-mono text-xs uppercase tracking-[0.2em]">Catálogo de Soluciones</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 font-[Urbanist] leading-none tracking-tight">
                                Ingeniería <br />
                                <span className="font-semibold text-[#70a2ad]">& Mantenimiento</span>
                            </h1>

                            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-white/10 pl-6">
                                Enfoque técnico integral para la gestión del ciclo de vida de sus instalaciones acuáticas.
                                Diagnóstico, intervención y prevención.
                            </p>
                        </div>

                        {/* Technical Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Button
                                onClick={() => onNavigate('contact')}
                                className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold border border-transparent transition-all"
                            >
                                Catálogo Renolit
                            </Button>
                            <Button
                                onClick={() => onNavigate('contact')}
                                variant="outline"
                                className="bg-transparent text-white border-white/20 hover:bg-white/5 hover:border-white/40 rounded-none h-14 px-8 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
                            >
                                Contactar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Dashboard */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Quick Stats - Minimalist Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#141516]/10 mb-32">
                        <div className="p-8 border-r border-b border-[#141516]/10 flex flex-col justify-between h-40 group hover:bg-gray-50 transition-colors">
                            <span className="text-xs font-mono text-[#70a2ad] uppercase tracking-widest">Experiencia</span>
                            <span className="text-5xl font-light text-[#141516] font-[Urbanist]">15+</span>
                        </div>
                        <div className="p-8 border-r border-b border-[#141516]/10 flex flex-col justify-between h-40 group hover:bg-gray-50 transition-colors">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest group-hover:text-[#70a2ad] transition-colors">Garantía</span>
                            <span className="text-5xl font-light text-[#141516] font-[Urbanist]">100%</span>
                        </div>
                        <div className="p-8 border-r border-b border-[#141516]/10 flex flex-col justify-between h-40 group hover:bg-gray-50 transition-colors">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest group-hover:text-[#70a2ad] transition-colors">Proyectos</span>
                            <span className="text-5xl font-light text-[#141516] font-[Urbanist]">500+</span>
                        </div>
                        <div className="p-8 border-r border-b border-[#141516]/10 flex flex-col justify-between h-40 group hover:bg-gray-50 transition-colors">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest group-hover:text-[#70a2ad] transition-colors">Urgencias</span>
                            <span className="text-5xl font-light text-[#141516] font-[Urbanist]">24/7</span>
                        </div>
                    </div>

                    {/* Service Categories */}
                    <div className="space-y-32">
                        {serviceCategories.map((category, idx) => (
                            <div key={category.id} id={category.id} className="scroll-mt-32">
                                {/* Category Header */}
                                <div className="flex flex-col md:flex-row gap-12 mb-12">
                                    <div className="md:w-1/3">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-[#70a2ad] font-mono text-sm">0{idx + 1}</span>
                                            <div className="h-px w-12 bg-[#70a2ad]"></div>
                                        </div>
                                        <h3 className="text-4xl font-light text-[#141516] font-[Urbanist] mb-4">{category.title}</h3>
                                        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{category.subtitle}</p>
                                    </div>

                                    <div className="md:w-2/3 pt-4 md:pt-16">
                                        <p className="text-gray-500 font-light text-lg leading-relaxed mb-8 max-w-2xl border-l border-[#141516]/10 pl-6">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Services Grid - Architectural Table */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#141516]/10">
                                    {category.services.map((service) => (
                                        <div
                                            key={service.id}
                                            onClick={() => onNavigate(service.page)}
                                            className="group cursor-pointer border-r border-b border-[#141516]/10 p-8 hover:bg-gray-50 transition-colors relative"
                                        >
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="w-5 h-5 text-[#70a2ad] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </div>

                                            <h4 className="text-xl font-medium text-[#141516] font-[Urbanist] mb-3 pr-6">
                                                {service.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section - Architectural Closure */}
                    <div className="mt-32 border border-[#141516]/10 bg-[#141516] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

                        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 font-[Urbanist]">
                                    ¿Proyecto <span className="text-[#70a2ad] font-semibold">a Medida?</span>
                                </h2>
                                <p className="text-gray-400 font-light text-lg">
                                    Nuestro departamento técnico estudia la viabilidad de requerimientos especiales y diseños no estándar.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row w-full md:w-auto">
                                <Button
                                    onClick={() => onNavigate('contact')}
                                    className="bg-[#70a2ad] text-white hover:bg-[#5e8b95] rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold border border-transparent"
                                >
                                    Consultar
                                </Button>
                                <Button
                                    onClick={() => onNavigate('projects')}
                                    variant="outline"
                                    className="bg-transparent text-white border-white/20 hover:bg-white/5 rounded-none h-14 px-10 text-xs tracking-[0.15em] uppercase font-bold hover:text-white"
                                >
                                    Proyectos
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
