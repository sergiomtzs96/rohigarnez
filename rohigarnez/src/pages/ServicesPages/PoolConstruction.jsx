import { Hammer, CheckCircle, Ruler, Palette, Award, Clock, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function PoolConstruction() {

    const features = [
        'Diseño personalizado según tus necesidades',
        'Construcción con hormigón armado',
        'Instalación completa de equipamiento',
        'Sistema de filtración profesional',
        'Iluminación LED subacuática',
        'Acabados premium a elegir',
        'Garantía estructural de 10 años',
        'Proyecto y licencias incluidas'
    ];

    const process = [
        {
            icon: Ruler,
            title: 'Diseño y Proyecto',
            description: 'Elaboramos un diseño personalizado adaptado a tu espacio y preferencias',
            duration: '1-2 semanas'
        },
        {
            icon: Hammer,
            title: 'Excavación y Estructura',
            description: 'Excavamos y construimos la estructura de hormigón armado',
            duration: '2-3 semanas'
        },
        {
            icon: Settings,
            title: 'Instalaciones',
            description: 'Montamos todo el sistema de filtración, iluminación y equipamiento',
            duration: '1-2 semanas'
        },
        {
            icon: Palette,
            title: 'Acabados',
            description: 'Aplicamos el revestimiento elegido: gresite, liner o pintura',
            duration: '1-2 semanas'
        }
    ];

    const finishes = [
        {
            name: 'Gresite',
            description: 'Elegante y duradero, disponible en múltiples colores',
            durability: '20-30 años',
            maintenance: 'Bajo'
        },
        {
            name: 'Lámina Armada',
            description: 'Moderno e impermeable, instalación rápida',
            durability: '15-20 años',
            maintenance: 'Muy bajo'
        },
        {
            name: 'Pintura Epoxi',
            description: 'Económico y versátil, fácil renovación',
            durability: '5-7 años',
            maintenance: 'Medio'
        }
    ];

    const extras = [
        'Clorador salino automático',
        'Bomba de calor',
        'Cobertor automático',
        'Cascadas y fuentes',
        'Jacuzzi integrado',
        'Playa de acceso',
        'Escalera de acero inoxidable',
        'Sistema de limpieza automático'
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Construcción de Piscinas<br />de Obra Nueva
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Construimos la piscina de tus sueños con los más altos estándares de calidad.
                            Diseño personalizado, materiales premium y garantía total.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => onNavigate('quote')}
                                size="lg"
                                className="bg-white text-green-600 hover:bg-white/90"
                            >
                                Solicitar Proyecto
                            </Button>
                            <Button
                                onClick={() => onNavigate('contact')}
                                size="lg"
                                variant="ghost"
                                className="border-white text-white hover:bg-white/10"
                            >
                                Asesoramiento Gratuito
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Piscinas de Obra a Medida</h2>
                            <p className="text-gray-600 mb-8">
                                Con más de 15 años de experiencia, construimos piscinas de hormigón armado
                                totalmente personalizadas. Cada proyecto es único y se adapta perfectamente
                                a tu espacio, estilo y presupuesto.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <Card className="text-center rounded-lg shadow-lg p-2">
                                <CardContent className="pt-6">
                                    <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                                    <div className="text-sm text-gray-600">Piscinas Construidas</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center rounded-lg shadow-lg p-2">
                                <CardContent className="pt-6">
                                    <Clock className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center rounded-lg shadow-lg p-2">
                                <CardContent className="pt-6">
                                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-green-600 mb-1">10</div>
                                    <div className="text-sm text-gray-600">Años de Garantía</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Construcción</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            De la idea a la realidad en aproximadamente 6-8 semanas
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, index) => (
                            <Card key={index} className="relative hover:shadow-lg transition-shadow px-6 pb-6 pt-2">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                    {index + 1}
                                </div>
                                <CardHeader className="pt-8">
                                    <step.icon className="h-8 w-8 text-green-600 mb-3" />
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                                    <Badge className="bg-green-100 text-green-700 border-green-200">
                                        {step.duration}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Finishes Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Acabados Disponibles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige el acabado que mejor se adapte a tu estilo y presupuesto
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {finishes.map((finish, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow p-6 rounded-lg shadow-lg">
                                <CardHeader className={'ms-6'}>
                                    <CardTitle>{finish.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-4">{finish.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Durabilidad:</span>
                                            <span className="font-semibold text-green-700">{finish.durability}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Mantenimiento:</span>
                                            <span className="font-semibold text-green-700">{finish.maintenance}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extras Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Extras y Mejoras</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Personaliza tu piscina con estas opciones adicionales
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {extras.map((extra, index) => (
                            <div key={index} className="flex items-center gap-2 bg-white p-4 rounded-lg border hover:border-green-500 transition-colors">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{extra}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Hammer className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">¿Listo para construir tu piscina?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita un proyecto personalizado sin compromiso. Te asesoramos en todo
                        el proceso, desde el diseño hasta la puesta en marcha.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-green-600 hover:bg-white/90"
                        >
                            Solicitar Proyecto
                        </Button>
                        <Button
                            onClick={() => onNavigate('projects')}
                            size="lg"
                            variant="ghost"
                            className="border-white text-white hover:bg-white/10"
                        >
                            Ver Proyectos Realizados
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}