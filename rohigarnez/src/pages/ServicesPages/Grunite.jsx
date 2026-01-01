import { Hammer, CheckCircle, Shield, Clock, Layers, Droplets } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function Grunite() {

    const features = [
        'Hormigón proyectado de alta resistencia',
        'Aplicación profesional con maquinaria especializada',
        'Acabado uniforme y duradero',
        'Estructuras monolíticas sin juntas',
        'Adaptable a cualquier forma y tamaño',
        'Resistencia superior a 350 kg/cm²',
        'Impermeabilización completa',
        'Garantía estructural de 15 años'
    ];

    const process = [
        {
            icon: Shield,
            title: 'Preparación del Terreno',
            description: 'Excavación y nivelación del terreno, preparación de armaduras de acero'
        },
        {
            icon: Layers,
            title: 'Aplicación de Gunita',
            description: 'Proyección de hormigón a alta presión creando una estructura monolítica'
        },
        {
            icon: Droplets,
            title: 'Curado y Fratasado',
            description: 'Proceso de curado controlado y acabado superficial profesional'
        },
        {
            icon: CheckCircle,
            title: 'Impermeabilización',
            description: 'Tratamiento impermeabilizante y preparación para acabado final'
        }
    ];

    const advantages = [
        {
            title: 'Máxima Resistencia',
            description: 'El hormigón proyectado ofrece mayor densidad y resistencia que el hormigón tradicional',
            icon: Shield
        },
        {
            title: 'Sin Juntas',
            description: 'Estructura monolítica que elimina puntos débiles y posibles fugas',
            icon: Layers
        },
        {
            title: 'Adaptabilidad Total',
            description: 'Permite crear cualquier forma, tamaño o característica especial',
            icon: Hammer
        },
        {
            title: 'Durabilidad Extrema',
            description: 'Mayor vida útil que otras técnicas constructivas',
            icon: Clock
        }
    ];

    const applications = [
        'Construcción de piscinas de formas irregulares',
        'Rehabilitación de vasos deteriorados',
        'Refuerzo estructural de piscinas existentes',
        'Piscinas infinity o desbordantes',
        'Lagos artificiales y estanques',
        'Toboganes y elementos recreativos'
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">Gunitado de Vasos</h1>
                        <p className="text-xl text-white/90 mb-8">
                            Construcción de estructuras de piscinas con hormigón proyectado de alta resistencia.
                            La técnica más avanzada para piscinas duraderas y de máxima calidad.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => onNavigate('quote')}
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-white/90"
                            >
                                Solicitar Presupuesto
                            </Button>
                            <Button
                                onClick={() => onNavigate('contact')}
                                size="lg"
                                variant="ghost"
                                className="border-white text-white hover:bg-white/10"
                            >
                                Más Información
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Gunite */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">¿Qué es el Gunitado?</h2>
                            <p className="text-gray-600 mb-4">
                                El gunitado es una técnica especializada de construcción que consiste en la proyección
                                de hormigón a alta presión sobre una estructura de armadura de acero. Este proceso
                                crea una capa monolítica de hormigón de alta densidad y resistencia.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Es considerado el método más profesional y duradero para la construcción de piscinas,
                                ofreciendo ventajas significativas sobre otros métodos tradicionales.
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {advantages.map((advantage, index) => (
                                <Card key={index} className="rounded-lg p-4 hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <advantage.icon className="h-10 w-10 text-green-600 mb-3" />
                                        <h3 className="font-semibold mb-2 text-sm">{advantage.title}</h3>
                                        <p className="text-xs text-gray-600">{advantage.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Gunitado</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un proceso técnico y preciso que garantiza resultados excepcionales
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, index) => (
                            <Card key={index} className="relative rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <CardContent className="pt-6">
                                    <div className="absolute -top-4 left-1 bg-gradient-to-r from-green-600 to-green-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <step.icon className="h-12 w-12 text-green-600 mb-4 mt-2" />
                                    <h3 className="font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md">
                            <CardHeader>
                                <CardTitle>Aplicaciones del Gunitado</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {applications.map((application, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{application}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <h2 className="mb-4">Ventajas del Gunitado</h2>
                            <div className="space-y-4">
                                <Card className="border-l-4 border-green-600 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out px-4">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Calidad Superior</h3>
                                        <p className="text-sm text-gray-600">
                                            El proceso de proyección a alta presión compacta el hormigón eliminando
                                            burbujas de aire y creando una estructura extremadamente densa y resistente.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-green-600 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out px-4">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Versatilidad de Diseño</h3>
                                        <p className="text-sm text-gray-600">
                                            Permite crear cualquier forma imaginable, desde diseños clásicos hasta
                                            formas orgánicas complejas, playas caribeñas o piscinas desbordantes.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-green-600 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out px-4">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Inversión a Largo Plazo</h3>
                                        <p className="text-sm text-gray-600">
                                            Aunque el coste inicial puede ser superior, la durabilidad extrema y el
                                            mínimo mantenimiento lo convierten en la opción más económica a largo plazo.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Hammer className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">¿Necesitas Gunitado Profesional?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Somos especialistas en gunitado de piscinas con más de 15 años de experiencia.
                        Solicita tu presupuesto personalizado sin compromiso.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-gray-900 hover:bg-white/90"
                        >
                            Solicitar Presupuesto
                        </Button>
                        <Button
                            onClick={() => onNavigate('services-overview')}
                            size="lg"
                            variant="ghost"
                            className="border-white text-white hover:bg-white/10"
                        >
                            Ver Todos los Servicios
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}