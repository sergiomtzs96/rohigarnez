import { Paintbrush, CheckCircle, Sparkles, Clock, Phone } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function GroutingReplacementMosaic() {

    const features = [
        'Limpieza y preparación profesional de juntas',
        'Lechadas de alta calidad resistentes al cloro',
        'Reposición de piezas de gresite dañadas',
        'Igualación perfecta de colores y texturas',
        'Sellado impermeabilizante de juntas',
        'Acabado uniforme y duradero',
        'Garantía de 2 años en materiales',
        'Trabajo limpio y organizado'
    ];

    const services = [
        {
            title: 'Renovación de Lechadas',
            description: 'Eliminación de lechadas viejas y deterioradas, aplicación de nuevas juntas impermeables y resistentes',
            icon: Paintbrush,
            details: [
                'Eliminación de lechadas antiguas',
                'Limpieza profunda de juntas',
                'Aplicación de lechada epoxi',
                'Sellado final protector'
            ]
        },
        {
            title: 'Reposición de Gresites',
            description: 'Sustitución de piezas de gresite rotas, desprendidas o manchadas por nuevas a juego',
            icon: Sparkles,
            details: [
                'Extracción de piezas dañadas',
                'Igualación de color y textura',
                'Pegado profesional',
                'Lechado y acabado'
            ]
        },
        {
            title: 'Servicio Integral',
            description: 'Combinación de renovación de lechadas y reposición de gresites para un acabado perfecto',
            icon: CheckCircle,
            details: [
                'Valoración completa del vaso',
                'Lechadas nuevas en toda la piscina',
                'Cambio de todas las piezas dañadas',
                'Acabado como nuevo'
            ]
        }
    ];

    const whyRenew = [
        {
            title: 'Mejora Estética',
            description: 'Las juntas limpias y el gresite en perfecto estado devuelven a tu piscina su aspecto original'
        },
        {
            title: 'Prevención de Filtraciones',
            description: 'Las lechadas deterioradas pueden permitir filtraciones que comprometen la estructura'
        },
        {
            title: 'Higiene Mejorada',
            description: 'Juntas nuevas evitan la acumulación de suciedad, bacterias y algas'
        },
        {
            title: 'Valor de la Propiedad',
            description: 'Una piscina bien mantenida aumenta significativamente el valor de tu propiedad'
        }
    ];

    const signs = [
        'Juntas oscurecidas o con manchas',
        'Gresites sueltos o desprendidos',
        'Piezas rotas o agrietadas',
        'Filtraciones desde las juntas',
        'Acumulación de cal en las juntas',
        'Cambios de color del gresite'
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Lechadas y Reposición<br />de Gresites
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Renovamos las juntas de tu piscina y sustituimos las piezas de gresite dañadas.
                            Recupera el aspecto original de tu piscina con un acabado perfecto.
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
                                Contactar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Nuestros Servicios</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Soluciones profesionales para renovar el acabado de tu piscina
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="rounded-3xl hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <CardTitle className="px-4 text-lg">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className={'px-4'}>
                                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-xs text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Renew Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">¿Por qué Renovar Lechadas y Gresites?</h2>
                            <p className="text-gray-600 mb-6">
                                Con el tiempo, las juntas de las piscinas se deterioran por la acción del cloro,
                                los cambios de temperatura y el uso constante. Las piezas de gresite también pueden
                                dañarse o desprenderse. Renovar estos elementos es fundamental.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                {whyRenew.map((reason, index) => (
                                    <Card key={index} className="border-l-4 border-green-600 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                        <CardContent className="pt-4">
                                            <h3 className="font-semibold mb-1">{reason.title}</h3>
                                            <p className="text-sm text-gray-600">{reason.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md">
                                <CardHeader>
                                    <CardTitle>¿Cuándo es Necesario?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Si observas alguno de estos signos, es momento de renovar:
                                    </p>
                                    <ul className="space-y-3">
                                        {signs.map((sign, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{sign}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="mt-6 bg-green-50 border-green-200 rounded-lg shadow-md p-6">
                                <CardContent className="pt-6">
                                    <Clock className="h-8 w-8 text-green-600 mb-3" />
                                    <h3 className="font-semibold mb-2">Duración del Servicio</h3>
                                    <p className="text-sm text-gray-700">
                                        El tiempo de trabajo depende del tamaño de la piscina y el alcance de la renovación.
                                        Generalmente entre 3-7 días para trabajos completos.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md">
                        <CardHeader>
                            <CardTitle className="text-center">¿Qué Incluye Nuestro Servicio?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Renueva tu Piscina</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Dale un aspecto completamente nuevo a tu piscina. Solicita una valoración gratuita
                        y te proporcionaremos un presupuesto detallado sin compromiso.
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