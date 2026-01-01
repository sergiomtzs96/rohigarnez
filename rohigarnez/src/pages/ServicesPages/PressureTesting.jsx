import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Search, AlertTriangle, Gauge, Star, MapPin, CheckCircle, Shield, FileText } from 'lucide-react'
import { Rate } from 'antd';
import CalltoActionServices from "@/components/general/CalltoAction";



export default function PressureTesting() {

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
        {
            step: '01',
            title: 'Evaluación Inicial',
            description: 'Análisis visual y determinación del método de detección',
            duration: '30 min'
        },
        {
            step: '02',
            title: 'Preparación',
            description: 'Vaciado parcial y preparación de equipos de detección',
            duration: '45 min'
        },
        {
            step: '03',
            title: 'Detección',
            description: 'Aplicación de técnicas especializadas según el caso',
            duration: '1-3 horas'
        },
        {
            step: '04',
            title: 'Localización Precisa',
            description: 'Marcado exacto de la ubicación de fugas detectadas',
            duration: '30 min'
        },
        {
            step: '05',
            title: 'Informe Técnico',
            description: 'Documentación completa con fotos y recomendaciones',
            duration: '30 min'
        }
    ];

    const equipment = [
        {
            name: 'Detector Electrónico',
            use: 'Localización de fugas por sonido',
            precision: 'Hasta 10 cm',
            conditions: 'Tuberías presurizadas'
        },
        {
            name: 'Manómetro Digital',
            use: 'Medición de pérdidas de presión',
            precision: '0.1 bar',
            conditions: 'Circuito cerrado'
        },
        {
            name: 'Cámara de Inspección',
            use: 'Visualización interior de tuberías',
            precision: 'Imagen HD',
            conditions: 'Tuberías ≥ 50mm'
        },
        {
            name: 'Gas Trazador',
            use: 'Detección en estructuras complejas',
            precision: 'Muy alta',
            conditions: 'Casos especiales'
        }
    ];

    const testimonials = [
        {
            text: 'Llevábamos meses perdiendo agua sin saber por qué. En 2 horas encontraron la fuga exacta bajo el césped.',
            author: 'Miguel Torres',
            location: 'Villa Los Naranjos, Sevilla',
            problem: 'Pérdida 500L/día',
            rating: 3
        },
        {
            text: 'Muy profesionales. El informe técnico fue perfecto para la reparación posterior. Problema resuelto.',
            author: 'Carmen Ruiz',
            location: 'Comunidad El Prado',
            problem: 'Humedad perimetral',
            rating: 5
        }
    ];

    return (
        <div>
            <section className="bg-[var(--color-navbar)]/50">
                <Card className={'text-center bg-[var(--color-navbar)]/50 text-gray-200 py-8'}>
                    <CardHeader className={'py-2'}>
                        <CardTitle> <h1>Localización y Pruebas de Presión</h1> </CardTitle>
                    </CardHeader>
                    <CardContent className={'py-2'}>
                        <p className="pb-4">Detección precisa de fugas y verificación de estanqueidad con equipos profesionales. Diagnóstico certero para reparaciones efectivas.</p>
                        <div className="gap-5 flex items-center justify-center">
                            <Badge variant={'secondary'}><Target /> Precisión +95% </Badge>
                            <Badge variant={'secondary'}><Clock /> Resultado en 4h máximo</Badge>
                        </div>
                    </CardContent>
                </Card>
            </section>
            {/* Services */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Servicios de Detección</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Utilizamos tecnología avanzada para localizar fugas con la máxima precisión.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                            <Search className="w-8 h-8" />
                                        </div>
                                        <h3>{service.title}</h3>
                                        <div className="text-2xl font-bold mb-1">{service.price}</div>
                                        <Badge variant="outline">{service.duration}</Badge>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Equipamiento:</span>
                                            <span>{service.equipment}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Precisión:</span>
                                            <Badge className="bg-primary/10 text-primary text-xs">{service.accuracy}</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            {/* Problem Identification */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Síntomas y Detección</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Cada síntoma requiere un método de detección específico para localizar el problema con precisión.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {problems.map((problem, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive">
                                            <AlertTriangle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">{problem.symptom}</h4>
                                            <Badge className="bg-primary text-primary-foreground">
                                                {problem.detection}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className="mb-2 text-muted-foreground">Causas frecuentes:</h6>
                                        <div className="space-y-1">
                                            {problem.causes.map((cause, causeIndex) => (
                                                <div key={causeIndex} className="flex items-center gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                    <span>{cause}</span>
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
            {/* Detection Process */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Proceso de Detección</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Metodología sistemática para garantizar la localización precisa de cualquier fuga.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {process.map((step, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
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
            {/* Equipment */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Equipamiento Profesional</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tecnología de última generación para la detección más precisa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {equipment.map((item, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                                        <Gauge className="w-6 h-6" />
                                    </div>
                                    <h5 className="mb-3 font-bold font-[Urbanist]">{item.name}</h5>
                                    <p className="text-muted-foreground text-sm mb-4">{item.use}</p>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Precisión:</span>
                                            <span>{item.precision}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Condiciones:</span>
                                            <span>{item.conditions}</span>
                                        </div>
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
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">Casos Resueltos</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Problemas reales solucionados gracias a nuestro servicio de detección.
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
                                        <Badge className="bg-destructive/10 text-destructive">
                                            {testimonial.problem}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium">{testimonial.author}</div>
                                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {testimonial.location}
                                            </div>
                                        </div>
                                        <CheckCircle className="w-8 h-8 text-[var(--color-navbar)]" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            {/* Benefits */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="mb-6 text-[30px] font-bold font-[Urbanist]">¿Por qué usar nuestro servicio?</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
                            <CardContent className="p-6">
                                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">Precisión Máxima</h4>
                                <p className="text-muted-foreground text-sm">Localización exacta sin excavaciones innecesarias</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
                            <CardContent className="p-6">
                                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">Resultados Rápidos</h4>
                                <p className="text-muted-foreground text-sm">Diagnóstico completo en pocas horas</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
                            <CardContent className="p-6">
                                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">Informe Detallado</h4>
                                <p className="text-muted-foreground text-sm">Documentación completa para reparaciones</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center rounded-lg shadow-lg hover:scale-105 transition-scale duration-300">
                            <CardContent className="p-6">
                                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="mb-2 text-[18px] font-bold font-[Urbanist]">Sin Daños</h4>
                                <p className="text-muted-foreground text-sm">Métodos no invasivos que preservan las instalaciones</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section>
                <CalltoActionServices />
            </section>
        </div>
    )
}