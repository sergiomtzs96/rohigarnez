import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    Droplets,
    Leaf,
    Zap,
    Heart,
    DollarSign,
    Settings,
    CheckCircle,
    Star,
    Clock,
    Award,
    Sparkles,
    Shield,
    TrendingDown,
    Activity
} from 'lucide-react';

export default function SaltChlorinator() {

    const benefits = [
        {
            title: 'Agua más Suave',
            description: 'Sensación sedosa en la piel, sin irritaciones ni sequedad',
            icon: <Heart className="w-6 h-6" />,
            highlight: '100% Natural'
        },
        {
            title: 'Menos Químicos',
            description: 'Reducción del 80% en el uso de productos químicos tradicionales',
            icon: <Leaf className="w-6 h-6" />,
            highlight: '80% Menos químicos'
        },
        {
            title: 'Ahorro a Largo Plazo',
            description: 'Amortización en 2-3 años por menor coste de mantenimiento',
            icon: <DollarSign className="w-6 h-6" />,
            highlight: 'ROI 2-3 años'
        },
        {
            title: 'Mantenimiento Automático',
            description: 'Sistema inteligente que ajusta la producción automáticamente',
            icon: <Settings className="w-6 h-6" />,
            highlight: '90% Automático'
        }
    ];

    const systems = [
        {
            brand: 'Zodiac TRi',
            capacity: 'Hasta 75m³',
            price: 'Desde 1.200€',
            features: [
                'Control automático pH',
                'Display LED intuitivo',
                'Electrodo auto-limpiante',
                'Garantía 3 años',
                'Producción 20g/h'
            ],
            recommended: false,
            installation: '4-6 horas'
        },
        {
            brand: 'Hayward AquaRite',
            capacity: 'Hasta 110m³',
            price: 'Desde 1.800€',
            features: [
                'Tecnología TurboCell',
                'Control digital avanzado',
                'Función super-cloración',
                'Garantía 5 años',
                'Producción 40g/h'
            ],
            recommended: true,
            installation: '5-7 horas'
        },
        {
            brand: 'Pentair IntelliChlor',
            capacity: 'Hasta 150m³',
            price: 'Desde 2.400€',
            features: [
                'Sistema IntelliTouch',
                'Control por app móvil',
                'Autodiagnóstico completo',
                'Garantía 7 años',
                'Producción 60g/h'
            ],
            recommended: false,
            installation: '6-8 horas'
        }
    ];

    const installation = [
        {
            step: '01',
            title: 'Evaluación Técnica',
            description: 'Análisis de la instalación existente y dimensionado del sistema',
            duration: '1 hora'
        },
        {
            step: '02',
            title: 'Instalación Hidráulica',
            description: 'Montaje de la célula electrolítica en el circuito de retorno',
            duration: '2-3 horas'
        },
        {
            step: '03',
            title: 'Conexión Eléctrica',
            description: 'Instalación del cuadro de control y conexiones eléctricas',
            duration: '1-2 horas'
        },
        {
            step: '04',
            title: 'Configuración',
            description: 'Programación y ajuste de parámetros de funcionamiento',
            duration: '1 hora'
        },
        {
            step: '05',
            title: 'Puesta en Marcha',
            description: 'Equilibrado químico inicial y formación al cliente',
            duration: '1 hora'
        }
    ];

    const maintenance = [
        {
            task: 'Limpieza de Célula',
            frequency: 'Cada 3 meses',
            description: 'Limpieza con ácido para eliminar depósitos calcáreos',
            cost: 'Incluido en mantenimiento'
        },
        {
            task: 'Control de Salinidad',
            frequency: 'Mensual',
            description: 'Verificación y ajuste del nivel de sal (3-4 g/L)',
            cost: 'Incluido en mantenimiento'
        },
        {
            task: 'Revisión General',
            frequency: 'Semestral',
            description: 'Verificación de parámetros y funcionamiento general',
            cost: 'Incluido en mantenimiento'
        }
    ];

    const testimonials = [
        {
            text: 'Desde que instalamos el clorador salino, el agua está perfecta y mis hijos ya no tienen irritaciones en los ojos.',
            author: 'Laura Vázquez',
            role: 'Propietaria Villa Los Altos',
            system: 'Zodiac TRi',
            rating: 5
        },
        {
            text: 'La inversión se ha amortizado rápidamente. Apenas compramos químicos y el mantenimiento es mínimo.',
            author: 'Carlos Mendoza',
            role: 'Presidente Comunidad El Prado',
            system: 'Hayward AquaRite',
            rating: 3
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[var(--color-navbar)]/50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="mb-6 text-primary-foreground text-[48px] font-bold font-[Urbanist]">Cloradores Salinos</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
                        Transforma tu piscina en un oasis natural. Agua más suave, menos químicos
                        y mantenimiento automático con la tecnología de cloración salina.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Badge className="bg-primary text-primary-foreground">
                            <Leaf className="w-4 h-4 mr-2" />
                            100% Ecológico
                        </Badge>
                        <Badge className="bg-primary text-primary-foreground">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Agua Sedosa
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Beneficios del Clorador Salino</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Descubre por qué cada vez más propietarios eligen la cloración salina
                            para sus piscinas.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center rounded-lg group hover:shadow-lg transition-all duration-300">
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

            {/* Systems Comparison */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Sistemas Disponibles</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Seleccionamos las mejores marcas del mercado adaptadas a diferentes volúmenes de piscina.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {systems.map((system, index) => (
                            <Card key={index} className={`relative rounded-lg ${system.recommended ? 'ring-2 rounded-lg ring-[var(--color-navbar)] shadow-lg' : ''}`}>
                                {system.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground">
                                            Más Vendido
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="mb-2 text-[24px] font-bold font-[Urbanist]">{system.brand}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">{system.capacity}</p>
                                        <div className="text-3xl font-bold text-primary mb-2">{system.price}</div>
                                        <Badge variant="outline">{system.installation}</Badge>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {system.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[var(--color-navbar)] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${system.recommended ? 'bg-[var(--color-navbar)] text-primary-foreground' : 'bg-[var(--color-navbar)] border-primary text-white hover:bg-primary hover:text-primary-foreground'}`}
                                        onClick={() => onNavigate('contact')}
                                    >
                                        Solicitar Instalación
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Proceso de Instalación</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Instalación profesional en una sola jornada con garantía total de funcionamiento.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {installation.map((step, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[var(--color-navbar)] rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0">
                                            <span className="text-xl font-bold">{step.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">{step.title}</h4>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <Badge variant="outline">{step.duration}</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Mantenimiento Simplificado</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            El mantenimiento de un clorador salino es mínimo comparado con sistemas tradicionales.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {maintenance.map((item, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">{item.task}</h4>
                                        <Badge variant="outline">{item.frequency}</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                                    <div className="text-center">
                                        <Badge className="bg-primary/10 text-primary">{item.cost}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Experiencias Reales</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Lo que dicen nuestros clientes después de instalar su clorador salino.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4 justify-between">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-300 fill-current" : "text-muted-foreground"}`}
                                                />
                                            ))}
                                        </div>
                                        <Badge className="bg-primary/10 text-primary">
                                            {testimonial.system}
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
            <section className="py-16 bg-[var(--color-navbar)]/60 text-center primary-foreground">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">¿Listo para agua más natural?</h2>
                    <p className="mb-8 max-w-2xl mx-auto opacity-90">
                        Solicita un estudio personalizado gratuito. Te asesoramos sobre el sistema
                        más adecuado para tu piscina y presupuesto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('contact')}
                            className="bg-[var(--color-navbar)] text-white hover:bg-primary-foreground/90 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300"
                        > 
                            Estudio Gratuito
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => onNavigate('projects')}
                            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                        >
                            Ver Instalaciones
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}