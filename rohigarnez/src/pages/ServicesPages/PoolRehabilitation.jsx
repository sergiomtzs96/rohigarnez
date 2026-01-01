import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    RefreshCw,
    AlertTriangle,
    CheckCircle,
    Shield,
    Clock,
    Droplets,
    Hammer,
    Sparkles,
    Star,
    Eye,
    Palette,
    Settings,
    TrendingUp,
    Award,
    Target,
    Heart,
    Zap
} from 'lucide-react';

export default function PoolRehabilitation() {

    const problems = [
        {
            problem: 'Fugas y Filtraciones',
            symptoms: ['Pérdida constante de agua', 'Humedad en alrededores', 'Grietas visibles'],
            solution: 'Impermeabilización completa con materiales Renolit',
            urgency: 'high',
            icon: <Droplets className="w-6 h-6" />
        },
        {
            problem: 'Revestimiento Deteriorado',
            symptoms: ['Gresite despegado', 'Superficie rugosa', 'Decoloración'],
            solution: 'Renovación completa del revestimiento',
            urgency: 'medium',
            icon: <Palette className="w-6 h-6" />
        },
        {
            problem: 'Equipos Obsoletos',
            symptoms: ['Alto consumo energético', 'Averías frecuentes', 'Filtración deficiente'],
            solution: 'Modernización con equipos eficientes',
            urgency: 'medium',
            icon: <Settings className="w-6 h-6" />
        },
        {
            problem: 'Estructura Dañada',
            symptoms: ['Fisuras en hormigón', 'Desplomes', 'Problemas estructurales'],
            solution: 'Refuerzo estructural y reparación',
            urgency: 'high',
            icon: <Hammer className="w-6 h-6" />
        }
    ];

    const phases = [
        {
            step: '01',
            title: 'Diagnóstico Completo',
            duration: '1-2 días',
            description: 'Evaluación exhaustiva del estado actual de la piscina',
            activities: [
                'Inspección visual detallada',
                'Pruebas de estanqueidad',
                'Análisis de equipos existentes',
                'Informe técnico con propuestas'
            ]
        },
        {
            step: '02',
            title: 'Vaciado y Preparación',
            duration: '1-2 días',
            description: 'Preparación completa para los trabajos de rehabilitación',
            activities: [
                'Vaciado completo de la piscina',
                'Limpieza y desinfección',
                'Retirada de revestimientos dañados',
                'Preparación de superficies'
            ]
        },
        {
            step: '03',
            title: 'Reparaciones Estructurales',
            duration: '3-7 días',
            description: 'Reparación de problemas estructurales y impermeabilización',
            activities: [
                'Reparación de fisuras y grietas',
                'Refuerzo estructural si necesario',
                'Nueva impermeabilización',
                'Pruebas de estanqueidad'
            ]
        },
        {
            step: '04',
            title: 'Renovación de Equipos',
            duration: '2-4 días',
            description: 'Actualización y modernización de equipamiento',
            activities: [
                'Instalación de nueva depuradora',
                'Modernización eléctrica',
                'Sistemas de automatización',
                'Iluminación LED nueva'
            ]
        },
        {
            step: '05',
            title: 'Nuevos Acabados',
            duration: '5-8 días',
            description: 'Aplicación de revestimientos y acabados finales',
            activities: [
                'Nuevo revestimiento completo',
                'Renovación de coronación',
                'Elementos decorativos',
                'Acabados de calidad'
            ]
        },
        {
            step: '06',
            title: 'Puesta en Funcionamiento',
            duration: '1-2 días',
            description: 'Llenado, equilibrado y verificación final',
            activities: [
                'Llenado y equilibrado químico',
                'Verificación de todos los sistemas',
                'Pruebas de funcionamiento',
                'Entrega al cliente'
            ]
        }
    ];

    const benefits = [
        {
            title: 'Ahorro Energético',
            description: 'Reducción del consumo hasta un 50% con equipos modernos',
            icon: <Zap className="w-6 h-6" />,
            highlight: '50% menos consumo'
        },
        {
            title: 'Mayor Durabilidad',
            description: 'Garantía extendida con materiales de última generación',
            icon: <Shield className="w-6 h-6" />,
            highlight: '15 años garantía'
        },
        {
            title: 'Valor de la Propiedad',
            description: 'Incremento significativo del valor inmobiliario',
            icon: <TrendingUp className="w-6 h-6" />,
            highlight: '+20% valor'
        },
        {
            title: 'Menos Mantenimiento',
            description: 'Sistemas modernos requieren menor mantenimiento',
            icon: <Heart className="w-6 h-6" />,
            highlight: '60% menos averías'
        }
    ];

    const packages = [
        {
            name: 'Rehabilitación Básica',
            price: 'Desde 8.500€',
            description: 'Solución de problemas esenciales y mejoras básicas',
            features: [
                'Reparación de fugas menores',
                'Nueva impermeabilización básica',
                'Revestimiento liner estándar',
                'Limpieza y desinfección completa',
                'Puesta en marcha',
                'Garantía 5 años impermeabilización'
            ],
            duration: '7-10 días',
            recommended: false
        },
        {
            name: 'Rehabilitación Completa',
            price: 'Desde 15.800€',
            description: 'Renovación integral con equipos modernos',
            features: [
                'Todo lo incluido en paquete básico',
                'Nueva depuradora eficiente',
                'Revestimiento gresite premium',
                'Iluminación LED completa',
                'Renovación parcial coronación',
                'Clorador salino opcional',
                'Garantía 10 años'
            ],
            duration: '12-15 días',
            recommended: true
        },
        {
            name: 'Rehabilitación Premium',
            price: 'Desde 25.000€',
            description: 'Transformación total con tecnología avanzada',
            features: [
                'Todo lo incluido en paquete completo',
                'Automatización inteligente',
                'Sistema de calefacción',
                'Coronación piedra porcelánica',
                'Elementos decorativos nuevos',
                'Control por app móvil',
                'Garantía 15 años estructura'
            ],
            duration: '15-20 días',
            recommended: false
        }
    ];

    const beforeAfter = [
        {
            title: 'Piscina Comunitaria El Prado',
            location: 'Dos Hermanas, Sevilla',
            problems: ['Fugas constantes', 'Gresite deteriorado', 'Equipos obsoletos'],
            solutions: ['Impermeabilización Renolit', 'Gresite premium', 'Depuradora Hayward'],
            result: 'Ahorro del 40% en mantenimiento',
            year: '2024'
        },
        {
            title: 'Villa Residencial Bellavista',
            location: 'Sevilla Capital',
            problems: ['Pérdida de agua', 'Alto consumo energético', 'Aspecto deteriorado'],
            solutions: ['Nueva impermeabilización', 'Bomba variable', 'Revestimiento completo'],
            result: '50% reducción consumo energético',
            year: '2023'
        }
    ];

    const testimonials = [
        {
            text: 'La transformación ha sido increíble. Parecía imposible recuperar nuestra piscina, pero AquaClean Pro ha hecho un milagro.',
            author: 'Carmen López',
            role: 'Propietaria Villa Los Rosales',
            rating: 5,
            highlight: 'Transformación increíble'
        },
        {
            text: 'Después de años con problemas de fugas, finalmente tenemos una piscina que funciona perfectamente. Muy profesionales.',
            author: 'José Manuel Ruiz',
            role: 'Presidente Comunidad El Prado',
            rating: 3,
            highlight: 'Sin fugas por fin'
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0">

                    <div className="absolute inset-0 bg-[var(--color-navbar)]/60"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="mb-6 text-primary-foreground text-[48px] font-bold font-[Urbanist]">Rehabilitación de Piscinas</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                        Devolvemos la vida a tu piscina. Solucionamos problemas estructurales,
                        fugas y modernizamos equipos para que disfrutes de una piscina como nueva.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge className="bg-primary text-primary-foreground">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            +200 Rehabilitaciones
                        </Badge>
                        <Badge className="bg-primary text-primary-foreground">
                            <Award className="w-4 h-4 mr-2" />
                            Garantía hasta 15 años
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Common Problems */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Problemas Más Comunes</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Identificamos y solucionamos los problemas más frecuentes que afectan
                            a las piscinas con el paso del tiempo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {problems.map((problem, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 rounded-lg shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${problem.urgency === 'high'
                                            ? 'bg-destructive/10 text-destructive'
                                            : 'bg-amber-500/10 text-amber-600'
                                            }`}>
                                            {problem.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">{problem.problem}</h4>
                                            <Badge variant={problem.urgency === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                                                {problem.urgency === 'high' ? 'Urgente' : 'Moderado'}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h6 className="mb-2 text-muted-foreground">Síntomas:</h6>
                                            <div className="space-y-1">
                                                {problem.symptoms.map((symptom, symptomIndex) => (
                                                    <div key={symptomIndex} className="flex items-center gap-2 text-sm">
                                                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                                        <span>{symptom}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h6 className="mb-2 text-muted-foreground">Nuestra solución:</h6>
                                            <div className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                <span>{problem.solution}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rehabilitation Process */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Proceso de Rehabilitación</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Metodología probada en 6 fases para garantizar una rehabilitación exitosa
                            y duradera de tu piscina.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {phases.map((phase, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
                                <CardContent className="p-6">
                                    <div className="grid lg:grid-cols-5 gap-6 items-center">
                                        <div className="text-center lg:text-left">
                                            <div className="w-16 h-16 bg-[var(--color-navbar)] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 text-primary-foreground">
                                                <span className="text-xl font-bold">{phase.step}</span>
                                            </div>
                                            <Badge variant="outline">{phase.duration}</Badge>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <h3 className="mb-3 text-[24px] font-bold font-[Urbanist]">{phase.title}</h3>
                                            <p className="text-muted-foreground">{phase.description}</p>
                                        </div>

                                        <div className="lg:col-span-2 space-y-2">
                                            {phase.activities.map((activity, activityIndex) => (
                                                <div key={activityIndex} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                    <span>{activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Beneficios de Rehabilitar</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Una rehabilitación profesional no solo soluciona problemas, sino que aporta
                            beneficios a largo plazo.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center rounded-lg shadow-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-[var(--color-navbar)] group-hover:text-primary-foreground transition-colors">
                                        {benefit.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-primary mb-2">{benefit.highlight}</div>
                                    <h4 className="mb-3 text-[18px] font-[Urbanist]">{benefit.title}</h4>
                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Paquetes de Rehabilitación</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Soluciones escalables según el alcance de la rehabilitación necesaria.
                            Todos los precios incluyen materiales y mano de obra.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card key={index} className={`relative rounded-lg ${pkg.recommended ? 'ring-2 ring-[var(--color-navbar)] shadow-lg' : ''}`}>
                                {pkg.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-[var(--color-navbar)] text-primary-foreground">
                                            Más Elegida
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6 flex flex-col flex-1 justify-between">
                                    <div className="text-center mb-6">
                                        <h3 className="mb-2 text-[24px] font-bold font-[Urbanist]">{pkg.name}</h3>
                                        <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                                        <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                                        <div className="flex items-center justify-center gap-2">
                                            <Clock className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {pkg.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${pkg.recommended ? 'bg-[var(--color-navbar)] text-primary-foreground' : 'bg-[var(--color-navbar)] border-primary text-white hover:bg-primary hover:text-primary-foreground'}`}
                                        onClick={() => onNavigate('contact')}
                                    >
                                        Solicitar Diagnóstico
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Cases */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Casos de Éxito</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Rehabilitaciones reales que demuestran el impacto transformador de nuestro trabajo.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {beforeAfter.map((project, index) => (
                            <Card key={index} className="overflow-hidden rounded-lg group hover:shadow-lg hover:scale-105 transition-all duration-300">
                                <div className="aspect-video bg-gradient-to-br from-destructive/20 via-muted to-primary/20 flex items-center justify-center">
                                    
                                    <div className="text-center">
                                        <RefreshCw className="w-16 h-16 text-primary/60 mx-auto mb-2" />
                                        <div className="text-sm text-muted-foreground">Antes → Después</div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="mb-1 text-[18px] font-bold font-[Urbanist]">{project.title}</h4>
                                            <p className="text-sm text-muted-foreground">{project.location}</p>
                                        </div>
                                        <Badge variant="outline">{project.year}</Badge>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h6 className="mb-2 text-destructive">Problemas iniciales:</h6>
                                            <div className="space-y-1">
                                                {project.problems.map((problem, problemIndex) => (
                                                    <div key={problemIndex} className="flex items-center gap-2 text-sm">
                                                        <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                                                        <span>{problem}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h6 className="mb-2 text-primary">Soluciones aplicadas:</h6>
                                            <div className="space-y-1">
                                                {project.solutions.map((solution, solutionIndex) => (
                                                    <div key={solutionIndex} className="flex items-center gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                        <span>{solution}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-primary/5 rounded-lg p-4">
                                            <div className="flex items-center gap-2">
                                                <Target className="w-5 h-5 text-primary" />
                                                <span className="font-medium text-primary">Resultado: {project.result}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Testimonios de Transformación</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            La satisfacción de nuestros clientes es la mejor prueba de la calidad de nuestro trabajo.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-300 fill-current" : "text-muted-foreground"}`}
                                                />
                                            ))}
                                        </div>
                                        <Badge className="bg-primary/10 text-primary">
                                            {testimonial.highlight}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                                    <div>
                                        <div className="font-medium">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-background">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">¿Tu piscina necesita una segunda oportunidad?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Solicita un diagnóstico gratuito. Nuestros expertos evaluarán el estado de tu piscina
                        y te proporcionarán un presupuesto detallado sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('contact')}
                            className="bg-[var(--color-navbar)] text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 transition-transform duration-300"
                        >
                            Diagnóstico Gratuito
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => onNavigate('projects')}
                            className="border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-transform duration-300"
                        >
                            Ver Rehabilitaciones Realizadas
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}