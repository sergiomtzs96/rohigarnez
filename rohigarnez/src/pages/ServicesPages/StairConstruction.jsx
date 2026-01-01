import { Footprints, CheckCircle, Ruler, Shield, Phone, Layers } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function StairConstruction() {

    const features = [
        'Diseño personalizado según dimensiones de la piscina',
        'Construcción con estructura de hormigón armado',
        'Diferentes tipos de acabados disponibles',
        'Instalación de pasamanos de acero inoxidable',
        'Tratamiento antideslizante en peldaños',
        'Iluminación LED integrada (opcional)',
        'Garantía estructural de 10 años',
        'Cumplimiento de normativas de seguridad'
    ];

    const stairTypes = [
        {
            name: 'Escalera Romana',
            description: 'Entrada gradual y elegante con escalones anchos y suaves',
            characteristics: [
                'Acceso cómodo y seguro',
                'Ideal para piscinas grandes',
                'Acabado clásico y elegante',
                'Perfecta para niños y mayores'
            ],
            recommended: 'Piscinas familiares y comunitarias'
        },
        {
            name: 'Escalera Recta',
            description: 'Diseño tradicional y funcional con escalones uniformes',
            characteristics: [
                'Aprovechamiento del espacio',
                'Construcción más económica',
                'Fácil instalación',
                'Versatilidad de ubicación'
            ],
            recommended: 'Todo tipo de piscinas'
        },
        {
            name: 'Escalera con Playa',
            description: 'Entrada progresiva tipo playa con zona de descanso',
            characteristics: [
                'Máxima comodidad de acceso',
                'Zona infantil segura',
                'Aspecto resort',
                'Gran superficie de contacto'
            ],
            recommended: 'Piscinas de lujo y residenciales'
        },
        {
            name: 'Escalera de Esquina',
            description: 'Aprovecha espacios angulares optimizando el diseño',
            characteristics: [
                'Ahorro de espacio',
                'Diseño ergonómico',
                'Buena profundidad',
                'Estética integrada'
            ],
            recommended: 'Piscinas con espacio limitado'
        }
    ];

    const finishes = [
        {
            type: 'Gresite',
            description: 'Acabado tradicional duradero',
            durability: '20-30 años',
            maintenance: 'Bajo',
            color: 'from-blue-600 to-blue-800'
        },
        {
            type: 'Porcelánico',
            description: 'Moderno y antideslizante',
            durability: '25-35 años',
            maintenance: 'Muy bajo',
            color: 'from-slate-600 to-slate-800'
        },
        {
            type: 'Piedra Natural',
            description: 'Elegante y exclusivo',
            durability: '30+ años',
            maintenance: 'Medio',
            color: 'from-amber-600 to-amber-800'
        }
    ];

    const safetyFeatures = [
        {
            title: 'Antideslizante',
            description: 'Todos los peldaños incluyen tratamiento antideslizante certificado para máxima seguridad',
            icon: Shield
        },
        {
            title: 'Pasamanos',
            description: 'Instalación de pasamanos de acero inoxidable AISI 316L resistente al cloro',
            icon: CheckCircle
        },
        {
            title: 'Dimensiones Normativas',
            description: 'Altura y profundidad de peldaños según normativas de seguridad vigentes',
            icon: Ruler
        },
        {
            title: 'Visibilidad',
            description: 'Opción de iluminación LED subacuática integrada en los peldaños',
            icon: Layers
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Construcción de Escaleras<br />de Obra
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Diseñamos y construimos escaleras personalizadas para tu piscina con diferentes
                            acabados y estilos. Seguridad, comodidad y estética perfectamente integradas.
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
                                <Phone className="h-4 w-4 mr-2" />
                                Asesoramiento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stair Types Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Escaleras</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Cada piscina es única. Te ofrecemos diferentes diseños adaptados a tus necesidades
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {stairTypes.map((stair, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">{stair.name}</CardTitle>
                                    <p className="text-sm text-gray-600 mt-2">{stair.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 mb-2">CARACTERÍSTICAS:</p>
                                            <ul className="space-y-1">
                                                {stair.characteristics.map((char, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs text-gray-700">{char}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-3 border-t border-gray-200">
                                            <p className="text-xs font-semibold text-gray-500 mb-1">RECOMENDADA PARA:</p>
                                            <Badge variant="outline" className="text-xs">{stair.recommended}</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Finishes Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Acabados Disponibles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige el revestimiento que mejor se adapte a tu piscina
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {finishes.map((finish, index) => (
                            <Card key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${finish.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <Layers className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{finish.type}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{finish.description}</p>
                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500">Durabilidad</p>
                                            <p className="text-sm text-gray-700">{finish.durability}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500">Mantenimiento</p>
                                            <p className="text-sm text-gray-700">{finish.maintenance}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Seguridad Garantizada</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Todos nuestros diseños cumplen estrictamente las normativas de seguridad
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {safetyFeatures.map((feature, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-md transition-shadow">
                                <CardContent className="pt-6 text-center">
                                    <feature.icon className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                    <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                                    <p className="text-xs text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Servicio Completo</h2>
                            <p className="text-gray-600 mb-6">
                                Desde el diseño inicial hasta la instalación final, nos encargamos de todo el proceso
                                para garantizar un resultado perfecto. Nuestro equipo de profesionales cuenta con más
                                de 15 años de experiencia en construcción de escaleras de piscina.
                            </p>
                            <Card className="bg-green-50 border-green-200 rounded-lg p-6">
                                <CardContent className="pt-6">
                                    <Ruler className="h-8 w-8 text-green-600 mb-3" />
                                    <h3 className="font-semibold mb-2">Diseño Personalizado</h3>
                                    <p className="text-sm text-gray-700">
                                        Cada escalera se diseña específicamente para las dimensiones de tu piscina,
                                        adaptándose perfectamente al espacio disponible y al estilo deseado.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <Card className="flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 h-full">
                            <CardHeader>
                                <CardTitle>¿Qué Incluye?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Footprints className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Construye tu Escalera Ideal</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Te asesoramos en el diseño perfecto para tu piscina. Solicita una visita gratuita
                        y te mostraremos todas las opciones disponibles con un presupuesto detallado.
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