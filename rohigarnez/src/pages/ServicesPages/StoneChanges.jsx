import { Mountain, CheckCircle, Palette, Shield, Phone, Gem } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';


export default function StoneChanges() {

    const features = [
        'Amplio catálogo de piedras naturales y porcelánicas',
        'Asesoramiento personalizado en elección de materiales',
        'Instalación profesional con nivelación perfecta',
        'Tratamiento antideslizante incluido',
        'Sellado de juntas resistente al agua y cloro',
        'Acabados en diferentes tonalidades',
        'Garantía de instalación de 3 años',
        'Limpieza y retirada de escombros'
    ];

    const materials = [
        {
            name: 'Piedra Natural',
            types: ['Caliza', 'Arenisca', 'Granito', 'Pizarra'],
            advantages: [
                'Aspecto elegante y exclusivo',
                'Gran durabilidad',
                'Resistente a la intemperie',
                'Cada pieza única'
            ],
            icon: Mountain,
            color: 'from-amber-600 to-amber-800'
        },
        {
            name: 'Porcelánico',
            types: ['Imitación madera', 'Imitación piedra', 'Acabado liso', 'Acabado rugoso'],
            advantages: [
                'Máxima resistencia',
                'Mínimo mantenimiento',
                'Gran variedad de diseños',
                'Perfecta uniformidad'
            ],
            icon: Gem,
            color: 'from-slate-600 to-slate-800'
        },
        {
            name: 'Piedra Reconstructada',
            types: ['Mármol reconstituido', 'Cuarzo', 'Composites'],
            advantages: [
                'Precio competitivo',
                'Buena durabilidad',
                'Fácil mantenimiento',
                'Múltiples acabados'
            ],
            icon: Palette,
            color: 'from-green-600 to-green-800'
        }
    ];

    const process = [
        {
            step: 1,
            title: 'Medición y Presupuesto',
            description: 'Visitamos tu piscina, tomamos medidas exactas y te mostramos muestras de materiales'
        },
        {
            step: 2,
            title: 'Demolición Controlada',
            description: 'Retiramos con cuidado la coronación existente sin dañar la estructura'
        },
        {
            step: 3,
            title: 'Preparación de Base',
            description: 'Nivelamos y preparamos la superficie para la nueva instalación'
        },
        {
            step: 4,
            title: 'Instalación',
            description: 'Colocamos las nuevas piezas con adhesivos especiales resistentes al agua'
        },
        {
            step: 5,
            title: 'Acabado Final',
            description: 'Sellamos juntas, aplicamos tratamientos y limpiamos completamente'
        }
    ];

    const considerations = [
        {
            title: 'Antideslizante',
            description: 'Fundamental para la seguridad. Todas nuestras instalaciones incluyen tratamiento antideslizante.',
            icon: Shield
        },
        {
            title: 'Resistencia UV',
            description: 'Materiales seleccionados que no se decoloran con la exposición solar prolongada.',
            icon: CheckCircle
        },
        {
            title: 'Impermeabilidad',
            description: 'Sellado profesional que evita filtraciones de agua hacia el interior.',
            icon: Shield
        },
        {
            title: 'Estética',
            description: 'Amplia gama de colores y texturas para combinar perfectamente con tu jardín.',
            icon: Palette
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Cambios de Piedra<br />y Coronación
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Renueva el acabado exterior de tu piscina con piedra natural o porcelánica de alta calidad.
                            Dale un nuevo aspecto elegante y duradero a tu zona de piscina.
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
                                Ver Catálogo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Materiales</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Trabajamos con los mejores materiales del mercado adaptados a cada necesidad y presupuesto
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {materials.map((material, index) => (
                            <Card key={index} className="rounded-3xl hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className={`w-14 h-14 bg-gradient-to-r ${material.color} rounded-full flex items-center justify-center mb-4`}>
                                        <material.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <CardTitle className="px-6 text-lg">{material.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">TIPOS DISPONIBLES:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {material.types.map((type, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {type}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 mb-2">VENTAJAS:</p>
                                        <ul className="space-y-1 pb-4">
                                            {material.advantages.map((advantage, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-xs text-gray-700">{advantage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Instalación</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un trabajo profesional paso a paso
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {process.map((item, index) => (
                            <div key={index} className="flex gap-6 mb-8 last:mb-0 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    {index < process.length - 1 && (
                                        <div className="h-8 w-1 bg-green-200 ml-6 mt-2"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Considerations Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="mb-6">Aspectos Importantes</h2>
                            <p className="text-gray-600 mb-8">
                                La coronación de la piscina no es solo estética, es un elemento funcional crucial
                                que protege la estructura y garantiza la seguridad. Al elegir el material adecuado
                                hay que considerar varios factores.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {considerations.map((item, index) => (
                                    <Card key={index} className="p-4 rounded-lg hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6">
                                            <item.icon className="h-8 w-8 text-green-600 mb-3" />
                                            <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                                            <p className="text-xs text-gray-600">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                                <CardHeader>
                                    <CardTitle>¿Qué Incluye el Servicio?</CardTitle>
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
                            <Card className="bg-green-50 border-green-200 rounded-lg p-5">
                                <CardContent className="pt-6">
                                    <Palette className="h-8 w-8 text-green-600 mb-3" />
                                    <h3 className="font-semibold mb-2">Asesoramiento Personalizado</h3>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Te mostramos diferentes opciones y muestras de materiales para que elijas
                                        la que mejor se adapte a tu estilo y presupuesto.
                                    </p>
                                    <Button
                                        onClick={() => onNavigate('contact')}
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                    >
                                        Solicitar Catálogo
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Mountain className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Renueva tu Coronación</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Dale un nuevo aspecto a tu piscina con nuestros acabados premium.
                        Solicita una visita gratuita y te mostraremos todas las opciones disponibles.
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