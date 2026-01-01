import { Home, CheckCircle, Hammer, Shield, Phone, Box } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
export default function LiftingTreatmentPlants() {

    const features = [
        'Diseño personalizado según espacio disponible',
        'Casetas de PVC o construcción de obra',
        'Protección contra intemperie y vandalismo',
        'Ventilación adecuada para equipos',
        'Acceso cómodo para mantenimiento',
        'Aislamiento acústico incluido',
        'Sistema de cierre con llave',
        'Garantía de 5 años en estructuras'
    ];

    const casetaTypes = [
        {
            name: 'Casetas de PVC',
            description: 'Solución moderna, rápida y económica',
            icon: Box,
            color: 'from-blue-600 to-blue-800',
            advantages: [
                'Instalación rápida (1-2 días)',
                'Mantenimiento mínimo',
                'Resistente a corrosión',
                'Múltiples acabados y colores',
                'Precio competitivo',
                'Fácil limpieza'
            ],
            sizes: ['Pequeña (1x1m)', 'Mediana (1.5x1.5m)', 'Grande (2x2m)', 'Personalizada'],
            durability: '15-20 años'
        },
        {
            name: 'Casetas de Obra',
            description: 'Construcción sólida y permanente',
            icon: Hammer,
            color: 'from-green-600 to-green-800',
            advantages: [
                'Máxima durabilidad',
                'Integración arquitectónica',
                'Aislamiento superior',
                'Resistencia extrema',
                'Diseño personalizado total',
                'Valor añadido a la propiedad'
            ],
            sizes: ['Según diseño personalizado'],
            durability: '50+ años'
        }
    ];

    const constructionProcess = [
        {
            step: 1,
            title: 'Evaluación y Diseño',
            description: 'Visitamos el lugar, evaluamos el espacio y diseñamos la caseta ideal',
            duration: '1 día'
        },
        {
            step: 2,
            title: 'Preparación del Terreno',
            description: 'Nivelación y preparación de la base con hormigón armado',
            duration: '1-2 días'
        },
        {
            step: 3,
            title: 'Construcción/Instalación',
            description: 'Montaje de caseta PVC o construcción de estructura de obra',
            duration: '1-5 días'
        },
        {
            step: 4,
            title: 'Instalación de Equipos',
            description: 'Colocación y conexión de depuradora y equipamiento',
            duration: '1 día'
        },
        {
            step: 5,
            title: 'Acabados Finales',
            description: 'Revestimientos, puerta, ventilación y detalles finales',
            duration: '1-2 días'
        }
    ];

    const whyElevate = [
        {
            title: 'Protección de Equipos',
            description: 'Los equipos quedan protegidos de la intemperie, aumentando su vida útil significativamente',
            icon: Shield
        },
        {
            title: 'Mejor Accesibilidad',
            description: 'Facilita las tareas de mantenimiento y reparación al tener todo organizado y accesible',
            icon: CheckCircle
        },
        {
            title: 'Estética Mejorada',
            description: 'Oculta los equipos técnicos mejorando el aspecto general de la zona de piscina',
            icon: Home
        },
        {
            title: 'Seguridad',
            description: 'Evita el acceso de niños y animales a equipos eléctricos y productos químicos',
            icon: Shield
        }
    ];

    const included = [
        'Base de hormigón nivelada',
        'Estructura completa (PVC u obra)',
        'Puerta de acceso con cerradura',
        'Ventilación regulable',
        'Iluminación interior LED',
        'Estanterías para productos químicos',
        'Conexiones eléctricas certificadas',
        'Revestimiento interior resistente'
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Elevación de Depuradoras
                        </h1>
                        <h2 className="text-2xl text-white/90 mb-6">Casetas de PVC o de Obra</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Construimos e instalamos casetas para proteger y organizar los equipos de depuración
                            de tu piscina. Soluciones en PVC o construcción de obra según tus necesidades.
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
                                Más Información
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Casetas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige la solución que mejor se adapte a tu piscina y presupuesto
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {casetaTypes.map((type, index) => (
                            <Card key={index} className="rounded-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                                        <type.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="px-6 atext-xl">{type.name}</CardTitle>
                                    <p className="px-6 text-sm text-gray-600 mt-2">{type.description}</p>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 mb-2">VENTAJAS:</p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {type.advantages.map((advantage, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-xs text-gray-700">{advantage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <div className="grid grid-cols-2 gap-4 pb-4">
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 mb-1">TAMAÑOS:</p>
                                                {type.sizes.map((size, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                                                        {size}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-500 mb-1">DURABILIDAD:</p>
                                                <p className="text-sm text-gray-700 font-semibold">{type.durability}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Elevate Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">¿Por qué Elevar la Depuradora?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Múltiples beneficios para tu piscina y equipamiento
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyElevate.map((reason, index) => (
                            <Card key={index} className="text-center rounded-lg p-4 hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <reason.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                                    <p className="text-sm text-gray-600">{reason.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Instalación</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Del diseño a la instalación completa
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {constructionProcess.map((item, index) => (
                            <div key={index} className="flex rounded-lg gap-6  mb-6 last:mb-0 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    {index < constructionProcess.length - 1 && (
                                        <div className="h-6 w-0.5 bg-green-200 ml-7 mt-3"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Included Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Servicio Integral</h2>
                            <p className="text-gray-600 mb-6">
                                Nos encargamos de todo el proceso, desde el diseño hasta la instalación final.
                                Nuestro equipo cuenta con más de 15 años de experiencia en construcción de
                                infraestructuras para piscinas.
                            </p>
                            <Card className="bg-green-50 border-green-200 rounded-lg p-6">
                                <CardContent className="pt-6">
                                    <Home className="h-8 w-8 text-green-600 mb-3" />
                                    <h3 className="font-semibold mb-2">Diseño Personalizado</h3>
                                    <p className="text-sm text-gray-700 mb-3">
                                        Adaptamos el diseño de la caseta al espacio disponible y al estilo de tu jardín,
                                        eligiendo materiales y colores que se integren perfectamente.
                                    </p>
                                    <Button
                                        onClick={() => onNavigate('contact')}
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                    >
                                        Solicitar Asesoramiento
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 flex flex-col h-full justify-center">
                            <CardHeader>
                                <CardTitle>¿Qué Incluye?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {included.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
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
                    <Home className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Protege tu Equipamiento</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Instala una caseta profesional para tus equipos. Solicita una visita gratuita
                        y te mostraremos las mejores opciones para tu piscina.
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