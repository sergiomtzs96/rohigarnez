import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    Zap,
    TrendingDown,
    Gauge,
    Volume2,
    VolumeX,
    Leaf,
    CheckCircle,
    Settings,
    Clock,
    Award,
    Wrench,
    Battery,
    Activity,
    DollarSign
} from 'lucide-react';


export default function ChangePumps() {

    const benefits = [
        {
            title: 'Ahorro Energético',
            description: 'Hasta 90% menos consumo con bombas de velocidad variable',
            icon: <Battery className="w-6 h-6" />,
            highlight: 'Ahorro 90%'
        },
        {
            title: 'Funcionamiento Silencioso',
            description: 'Tecnología ultra silenciosa para máximo confort',
            icon: <VolumeX className="w-6 h-6" />,
            highlight: '< 45 dB'
        },
        {
            title: 'Mayor Durabilidad',
            description: 'Motores de última generación con vida útil extendida',
            icon: <Award className="w-6 h-6" />,
            highlight: '10+ años'
        },
        {
            title: 'Mejor Filtración',
            description: 'Flujo optimizado para agua más limpia y cristalina',
            icon: <Activity className="w-6 h-6" />,
            highlight: 'Agua Perfect'
        }
    ];

    const pumpTypes = [
        {
            type: 'Bomba Velocidad Fija',
            power: '0.5 - 1.5 CV',
            pool: '30-80 m³',
            price: 'Desde 350€',
            features: [
                'Tecnología tradicional',
                'Instalación simple',
                'Fiabilidad probada',
                'Mantenimiento básico',
                'Garantía 2 años'
            ],
            consumption: 'Alto (1100W)',
            recommended: false,
            installation: '2-3 horas',
            savings: 'Estándar'
        },
        {
            type: 'Bomba Doble Velocidad',
            power: '0.75 - 1.5 CV',
            pool: '40-100 m³',
            price: 'Desde 580€',
            features: [
                'Dos velocidades',
                'Modo económico nocturno',
                'Ahorro hasta 50%',
                'Control programable',
                'Garantía 3 años'
            ],
            consumption: 'Medio (550-1100W)',
            recommended: false,
            installation: '2-3 horas',
            savings: 'Ahorro 50%'
        },
        {
            type: 'Bomba Velocidad Variable',
            power: '0.5 - 2.5 CV',
            pool: '30-150 m³',
            price: 'Desde 950€',
            features: [
                'Velocidad infinita (inverter)',
                'Control digital inteligente',
                'Ahorro hasta 90%',
                'Ultra silenciosa',
                'App control (modelos premium)',
                'Garantía 5 años'
            ],
            consumption: 'Muy bajo (100-1400W)',
            recommended: true,
            installation: '3-4 horas',
            savings: 'Ahorro 90%'
        }
    ];

    const whenReplace = [
        {
            sign: 'Consumo Elevado',
            description: 'Factura eléctrica alta por bomba antigua o ineficiente',
            icon: <DollarSign className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Ruido Excesivo',
            description: 'Vibraciones, zumbidos o ruidos anormales durante el funcionamiento',
            icon: <Volume2 className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Rendimiento Bajo',
            description: 'Presión insuficiente, filtración deficiente o agua turbia',
            icon: <Gauge className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Averías Frecuentes',
            description: 'Paradas inesperadas, sobrecalentamiento o fugas recurrentes',
            icon: <Wrench className="w-6 h-6 text-red-500" />
        },
        {
            sign: 'Antigüedad',
            description: 'Bomba con más de 8-10 años, tecnología obsoleta',
            icon: <Clock className="w-6 h-6 text-orange-500" />
        }
    ];

    const installation = [
        {
            step: '01',
            title: 'Evaluación Técnica',
            description: 'Análisis de la instalación actual y cálculo de necesidades',
            duration: '30 min'
        },
        {
            step: '02',
            title: 'Desmontaje Bomba Antigua',
            description: 'Desconexión eléctrica e hidráulica de la bomba existente',
            duration: '45 min'
        },
        {
            step: '03',
            title: 'Preparación Instalación',
            description: 'Adaptación de conexiones si es necesario',
            duration: '30 min'
        },
        {
            step: '04',
            title: 'Montaje Nueva Bomba',
            description: 'Instalación hidráulica de la nueva bomba con juntas nuevas',
            duration: '1 hora'
        },
        {
            step: '05',
            title: 'Conexión Eléctrica',
            description: 'Cableado y conexión del cuadro de control',
            duration: '45 min'
        },
        {
            step: '06',
            title: 'Puesta en Marcha',
            description: 'Cebado, verificación y programación si procede',
            duration: '30 min'
        }
    ];

    const brands = [
        { name: 'Astralpool', logo: '⭐' },
        { name: 'Hayward', logo: '⭐' },
        { name: 'Pentair', logo: '⭐' },
        { name: 'Espa', logo: '⭐' },
        { name: 'Kripsol', logo: '⭐' },
        { name: 'Zodiac', logo: '⭐' }
    ];

    const savingsCalculator = [
        {
            scenario: 'Piscina 50m³ - Bomba Fija 1CV',
            oldConsumption: '1.100W x 8h = 8.8 kWh/día',
            oldCost: '~800€/año',
            newConsumption: '200W x 8h = 1.6 kWh/día',
            newCost: '~145€/año',
            savings: '655€/año',
            roi: 'Amortización en 1.5 años'
        },
        {
            scenario: 'Piscina 80m³ - Bomba Fija 1.5CV',
            oldConsumption: '1.500W x 10h = 15 kWh/día',
            oldCost: '~1.350€/año',
            newConsumption: '300W x 10h = 3 kWh/día',
            newCost: '~270€/año',
            savings: '1.080€/año',
            roi: 'Amortización en 1 año'
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#70a2ad]/95 to-[#486871]/95"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="mb-6 text-white">Cambios y Sustitución de Bombas</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Renueva tu bomba de piscina con tecnología de última generación. Ahorra hasta un 90%
                        en consumo eléctrico con bombas de velocidad variable ultra silenciosas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Battery className="w-4 h-4 mr-2" />
                            Ahorro hasta 90%
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <VolumeX className="w-4 h-4 mr-2" />
                            Ultra Silenciosas
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Leaf className="w-4 h-4 mr-2" />
                            Eco-Friendly
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-[#486871] hover:bg-white/90"
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
            </section>

            {/* When to Replace */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">¿Cuándo Cambiar la Bomba?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Identifica las señales que indican que es momento de renovar tu bomba de piscina
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {whenReplace.slice(0, 3).map((item, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        {item.icon}
                                        <h3 className="font-semibold">{item.sign}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {whenReplace.slice(3).map((item, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        {item.icon}
                                        <h3 className="font-semibold">{item.sign}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Ventajas de las Bombas Modernas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            La tecnología actual ofrece beneficios extraordinarios frente a las bombas tradicionales
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#70a2ad]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#70a2ad] group-hover:bg-[#70a2ad] group-hover:text-white transition-colors">
                                        {benefit.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-[#70a2ad] mb-2">{benefit.highlight}</div>
                                    <h4 className="mb-2 font-semibold">{benefit.title}</h4>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pump Types Comparison */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Bombas Disponibles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comparativa de tecnologías para que elijas la mejor opción para tu piscina
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {pumpTypes.map((pump, index) => (
                            <Card key={index} className={`relative rounded-lg flex flex-col h-full ${pump.recommended ? 'ring-2 ring-[#70a2ad] shadow-lg' : ''}`}>
                                {pump.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-[#70a2ad] text-white">
                                            Recomendada
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6 flex flex-col mt-auto justify-between h-full">
                                    <div className="text-center mb-6">
                                        <h3 className="mb-2 font-semibold text-lg">{pump.type}</h3>
                                        <p className="text-sm text-gray-600 mb-1">{pump.power}</p>
                                        <p className="text-xs text-gray-500 mb-3">{pump.pool}</p>
                                        <div className="text-3xl font-bold text-[#70a2ad] mb-2">{pump.price}</div>
                                        <div className="flex gap-2 justify-center flex-wrap mb-2">
                                            <Badge variant="outline" className="text-xs">{pump.installation}</Badge>
                                            <Badge className={`text-xs ${pump.recommended ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                {pump.savings}
                                            </Badge>
                                        </div>
                                        <div className="text-xs text-gray-500">Consumo: {pump.consumption}</div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {pump.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#70a2ad] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${pump.recommended ? 'bg-[#70a2ad] text-white hover:bg-[#486871]' : ''}`}
                                        variant={pump.recommended ? 'default' : 'outline'}
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

            {/* Savings Calculator */}
            <section className="py-16 bg-gradient-to-br from-[#9de8ea]/10 to-[#70a2ad]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Ahorro Real Demostrado</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ejemplos reales de ahorro energético con bombas de velocidad variable
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {savingsCalculator.map((calc, index) => (
                            <Card key={index} className="rounded-lg hover:shadow-lg transition-shadow">
                                <CardHeader className="bg-[#70a2ad] text-white p-2 text-center rounded-t-lg">
                                    <CardTitle className="text-lg">{calc.scenario}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-xs text-gray-500 mb-1">Sistema Antiguo</div>
                                                <div className="font-semibold text-red-600">{calc.oldCost}</div>
                                                <div className="text-xs text-gray-600">{calc.oldConsumption}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500 mb-1">Sistema Nuevo</div>
                                                <div className="font-semibold text-green-600">{calc.newCost}</div>
                                                <div className="text-xs text-gray-600">{calc.newConsumption}</div>
                                            </div>
                                        </div>

                                        <div className="border-t pt-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-semibold">Ahorro Anual:</span>
                                                <span className="text-2xl font-bold text-[#70a2ad]">{calc.savings}</span>
                                            </div>
                                            <Badge className="w-full bg-green-100 text-green-700 justify-center">
                                                {calc.roi}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-8 border-[#70a2ad] rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <TrendingDown className="w-8 h-8 text-[#70a2ad] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-2 text-lg">Inversión Rentable</h4>
                                    <p className="text-gray-600 mb-3">
                                        Una bomba de velocidad variable se amortiza en 1-2 años gracias al ahorro energético.
                                        Además, beneficios adicionales como menor ruido, mayor durabilidad y mejor filtración
                                        hacen que sea una inversión altamente recomendable.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">ROI 1-2 años</Badge>
                                        <Badge variant="outline">Vida útil 10+ años</Badge>
                                        <Badge variant="outline">Garantía extendida</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Sustitución</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Cambio completo realizado por técnicos especializados en una sola jornada
                        </p>
                    </div>

                    <div className="space-y-4">
                        {installation.map((step, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#70a2ad] rounded-full flex items-center justify-center text-white flex-shrink-0">
                                            <span className="text-xl font-bold">{step.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-1 font-semibold">{step.title}</h4>
                                            <p className="text-sm text-gray-600">{step.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <Badge variant="outline">{step.duration}</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-[#70a2ad]/10 to-[#9de8ea]/10 rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Settings className="w-6 h-6 text-[#70a2ad] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Servicio Completo Incluido</h4>
                                    <p className="text-sm text-gray-600">
                                        La instalación incluye desmontaje de la bomba antigua, adaptación si es necesaria,
                                        montaje de la nueva bomba, conexiones eléctricas e hidráulicas, cebado, verificación
                                        completa y formación en el uso. Retiramos la bomba antigua sin coste adicional.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Brands */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Marcas de Confianza</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Trabajamos con las mejores marcas del mercado, líderes en tecnología y eficiencia
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {brands.map((brand, index) => (
                            <Card key={index} className="rounded-lg hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-2">{brand.logo}</div>
                                    <div className="font-semibold text-sm">{brand.name}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#70a2ad] to-[#486871] text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Zap className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="mb-4">¿Listo para Ahorrar en tu Factura?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita un estudio personalizado gratuito. Calculamos tu ahorro real y te asesoramos
                        sobre la mejor bomba para tu piscina.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-[#486871] hover:bg-white/90"
                        >
                            Calcular Mi Ahorro
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