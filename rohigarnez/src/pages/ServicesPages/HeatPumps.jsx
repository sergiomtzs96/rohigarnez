import { Thermometer, CheckCircle, Zap, Leaf, TrendingUp, Sun } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function HeatPomps() {
    const benefits = [
        'Disfruta de tu piscina todo el año',
        'Hasta 5 veces más eficiente que calderas',
        'Ahorro energético del 70-80%',
        'Ecológica y sostenible',
        'Funcionamiento silencioso',
        'Rápido retorno de inversión',
        'Compatible con todo tipo de piscinas',
        'Instalación profesional incluida'
    ];

    const models = [
        {
            name: 'Bomba Mini',
            power: '5-8 kW',
            pool: '15-30 m³',
            features: ['Ideal piscinas pequeñas', 'Bajo consumo', 'Ultra silenciosa'],
            price: 'Desde 1.200€'
        },
        {
            name: 'Bomba Standard',
            power: '9-13 kW',
            pool: '30-60 m³',
            features: ['Piscinas medianas', 'Inverter', 'Control digital'],
            price: 'Desde 1.800€',
            popular: true
        },
        {
            name: 'Bomba Premium',
            power: '14-18 kW',
            pool: '60-100 m³',
            features: ['Piscinas grandes', 'Wi-Fi', 'Máxima eficiencia'],
            price: 'Desde 2.500€'
        }
    ];

    const features = [
        {
            icon: Leaf,
            title: 'Eco-Friendly',
            description: 'Usa energía renovable del aire exterior'
        },
        {
            icon: Zap,
            title: 'Alta Eficiencia',
            description: 'COP de 5.0 - Genera 5kW por cada 1kW consumido'
        },
        {
            icon: Sun,
            title: 'Todo el Año',
            description: 'Funciona incluso con temperaturas bajas'
        },
        {
            icon: TrendingUp,
            title: 'Ahorro',
            description: 'Reduce tu factura energética hasta un 80%'
        }
    ];
    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Bombas de Calor<br />para Piscinas
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Suministro e instalación completa de bombas de calor de alta eficiencia.
                            Disfruta de tu piscina climatizada todo el año ahorrando energía.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => onNavigate('quote')}
                                size="lg"
                                className="bg-white text-cyan-600 hover:bg-white/90"
                            >
                                Calcular mi Bomba
                            </Button>
                            <Button
                                onClick={() => onNavigate('contact')}
                                size="lg"
                                variant="ghost"
                                className="border-white text-white hover:bg-white/10"
                            >
                                Asesoramiento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">¿Por qué una Bomba de Calor?</h2>
                            <p className="text-gray-600 mb-8">
                                Las bombas de calor son el sistema más eficiente y económico para climatizar
                                tu piscina. Capturan el calor del aire exterior y lo transfieren al agua,
                                consumiendo hasta 5 veces menos energía que sistemas tradicionales.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <Card key={index} className="text-center rounded-lg hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <feature.icon className="h-10 w-10 text-cyan-600 mx-auto mb-3" />
                                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Models Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Modelos Disponibles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige la bomba de calor perfecta para el tamaño de tu piscina
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {models.map((model, index) => (
                            <Card key={index} className={`flex flex-col h-full rounded-lg hover:shadow-lg transition-shadow ${model.popular ? 'border-2 border-cyan-500' : ''
                                }`}>
                                {model.popular && (
                                    <div className="bg-cyan-500 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                                        Más Popular
                                    </div>
                                )}
                                <CardHeader className={'p-6'}>
                                    <CardTitle>{model.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 p-6 flex flex-col flex-1">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-600">Potencia:</span>
                                            <span className="font-semibold text-cyan-700">{model.power}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-600">Volumen piscina:</span>
                                            <span className="font-semibold text-cyan-700">{model.pool}</span>
                                        </div>
                                    </div>
                                    <div className="border-t pt-4">
                                        <h4 className="font-semibold mb-2 text-sm">Características:</h4>
                                        <ul className="space-y-1">
                                            {model.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-t pt-4 flex flex-col mt-auto ">
                                        <div className="text-2xl font-bold text-cyan-600 mb-4">{model.price}</div>
                                        <Button
                                            onClick={() => onNavigate('quote')}
                                            className="w-full bg-cyan-600 hover:bg-cyan-700"
                                        >
                                            Solicitar Presupuesto
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-12">¿Cómo Funciona una Bomba de Calor?</h2>
                    <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 rounded-lg">
                        <CardContent className="py-8">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                        1
                                    </div>
                                    <h3 className="font-semibold mb-2">Captura</h3>
                                    <p className="text-sm text-gray-600">Extrae calor del aire exterior</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                        2
                                    </div>
                                    <h3 className="font-semibold mb-2">Comprime</h3>
                                    <p className="text-sm text-gray-600">Aumenta la temperatura mediante compresión</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                        3
                                    </div>
                                    <h3 className="font-semibold mb-2">Transfiere</h3>
                                    <p className="text-sm text-gray-600">Calienta el agua de la piscina</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                                        4
                                    </div>
                                    <h3 className="font-semibold mb-2">Repite</h3>
                                    <p className="text-sm text-gray-600">Ciclo continuo hasta alcanzar temperatura</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Installation */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Instalación Profesional Incluida</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nuestro servicio incluye todo lo necesario para que disfrutes de tu piscina climatizada
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className={'p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out'}>
                            <CardHeader>
                                <CardTitle>El Precio Incluye:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Bomba de calor de alta eficiencia</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Instalación completa</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Conexiones eléctricas e hidráulicas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Puesta en marcha y configuración</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Formación de uso</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Garantía del fabricante (2-3 años)</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                            <CardHeader>
                                <CardTitle>Tiempo de Instalación:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Instalación Standard:</h4>
                                        <p className="text-sm text-gray-700">1 día (4-6 horas de trabajo)</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Incluye:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            <li>• Colocación de la bomba</li>
                                            <li>• Conexión al sistema de filtración</li>
                                            <li>• Instalación eléctrica</li>
                                            <li>• Pruebas y puesta en marcha</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 italic">
                                            *Instalaciones complejas pueden requerir tiempo adicional
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Thermometer className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Climatiza tu Piscina</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Disfruta de baños confortables durante todo el año con el sistema más eficiente
                        y ecológico del mercado. Solicita un estudio sin compromiso.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-cyan-600 hover:bg-white/90"
                        >
                            Calcular mi Bomba Ideal
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