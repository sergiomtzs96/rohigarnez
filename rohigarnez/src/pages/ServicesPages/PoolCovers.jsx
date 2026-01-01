import { Shield, CheckCircle, Leaf, DollarSign, Sun, Lock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function PoolCovers() {

    const benefits = [
        'Ahorra hasta un 70% en evaporación de agua',
        'Reduce pérdida de calor hasta un 75%',
        'Disminuye el uso de productos químicos en un 60%',
        'Evita la entrada de suciedad y hojas',
        'Mayor seguridad para niños y mascotas',
        'Prolonga la temporada de baño',
        'ROI en 2-3 años por ahorro energético',
        'Instalación profesional incluida'
    ];

    const types = [
        {
            name: 'Lona de Burbujas',
            icon: Sun,
            description: 'Térmica y flotante, ideal para mantener temperatura',
            features: ['Económica', 'Fácil uso', 'Aumenta temperatura'],
            price: 'Desde 200€'
        },
        {
            name: 'Cobertor de Barras',
            icon: Shield,
            description: 'Máxima resistencia y seguridad',
            features: ['Ultra resistente', 'Soporta peso', 'Larga duración'],
            price: 'Desde 800€',
            popular: true
        },
        {
            name: 'Cobertor Automático',
            icon: Lock,
            description: 'Enrollable con motor, máximo confort',
            features: ['Automatizado', 'Muy seguro', 'Gran comodidad'],
            price: 'Desde 2.500€'
        }
    ];

    const advantages = [
        {
            icon: Leaf,
            title: 'Ahorro de Agua',
            description: 'Reduce la evaporación hasta un 95%',
            savings: '3.000-5.000 litros/mes'
        },
        {
            icon: DollarSign,
            title: 'Ahorro Energético',
            description: 'Mantiene el calor del agua',
            savings: '50-70% menos en calefacción'
        },
        {
            icon: Sun,
            title: 'Menos Químicos',
            description: 'Protege del sol y contaminación',
            savings: '60% menos de cloro'
        },
        {
            icon: Shield,
            title: 'Más Limpia',
            description: 'Evita suciedad y hojas',
            savings: 'Menos tiempo de limpieza'
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">
                            Lonas y Cobertores<br />para Piscinas
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Venta e instalación de cobertores de alta calidad. Ahorra agua, energía
                            y productos químicos mientras mantienes tu piscina limpia y segura.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => onNavigate('quote')}
                                size="lg"
                                className="bg-white text-pink-600 hover:bg-white/90"
                            >
                                Solicitar Presupuesto
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
                            <h2 className="mb-6">Beneficios de un Cobertor</h2>
                            <p className="text-gray-600 mb-8">
                                Un cobertor para piscina es una inversión que se paga sola en 2-3 años
                                gracias al ahorro en agua, energía y productos químicos. Además, protege
                                tu piscina y aumenta la seguridad.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {advantages.map((adv, index) => (
                                <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <adv.icon className="h-10 w-10 text-pink-600 mx-auto mb-3" />
                                        <h3 className="font-semibold text-center mb-2">{adv.title}</h3>
                                        <p className="text-xs text-gray-600 text-center mb-2">{adv.description}</p>
                                        <Badge className="w-full justify-center bg-pink-100 text-pink-700 border-pink-200">
                                            {adv.savings}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Cobertores</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tenemos la solución perfecta para cada piscina y presupuesto
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {types.map((type, index) => (
                            <Card key={index} className={`rounded-lg hover:shadow-lg hover:shadow-pink-500 transition-shadow ${type.popular ? 'rounded-lg border-2 border-pink-500' : ''
                                }`}>
                                {type.popular && (
                                    <div className="rounded-t-lg bg-pink-500 text-white text-center py-2 text-sm font-semibold">
                                        Más Vendido
                                    </div>
                                )}
                                <CardHeader>
                                    <type.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                                    <CardTitle className="text-center">{type.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex flex-col h-full p-6">
                                    <p className="text-sm text-gray-600 text-center">{type.description}</p>
                                    <div className="border-t pt-4">
                                        <h4 className="font-semibold mb-2 text-sm">Características:</h4>
                                        <ul className="space-y-1">
                                            {type.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-t pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-pink-600 mb-4 text-center">{type.price}</div>
                                        <Button
                                            onClick={() => onNavigate('quote')}
                                            className="w-full bg-pink-600 hover:bg-pink-700"
                                        >
                                            Solicitar Medida
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Savings Calculator */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-12">Ahorro Anual Estimado</h2>
                    <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 rounded-lg">
                        <CardContent className="py-8">
                            <div className="text-center mb-8">
                                <p className="text-gray-700 mb-4">
                                    Ejemplo para una piscina de 8x4m (32m²) en zona de clima templado:
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <Leaf className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-pink-600 mb-2">4.000€</div>
                                    <h3 className="font-semibold mb-2">Agua Ahorrada</h3>
                                    <p className="text-sm text-gray-600">~40.000 litros/año</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <DollarSign className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-pink-600 mb-2">500€</div>
                                    <h3 className="font-semibold mb-2">Calefacción</h3>
                                    <p className="text-sm text-gray-600">60-70% de ahorro</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <Sun className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-pink-600 mb-2">300€</div>
                                    <h3 className="font-semibold mb-2">Químicos</h3>
                                    <p className="text-sm text-gray-600">60% menos productos</p>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <div className="text-xl font-bold text-pink-700 mb-2">
                                    Ahorro Total: hasta 1.200€/año
                                </div>
                                <p className="text-sm text-gray-600">
                                    La inversión en un cobertor se amortiza en 2-3 años
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Installation */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-12">Instalación Profesional</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className={'rounded-lg p-6'}>
                            <CardHeader>
                                <CardTitle>Proceso:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Toma de Medidas</h3>
                                            <p className="text-sm text-gray-600">Medición precisa de tu piscina</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Fabricación a Medida</h3>
                                            <p className="text-sm text-gray-600">Cobertor personalizado</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Instalación</h3>
                                            <p className="text-sm text-gray-600">Montaje profesional en 1-2 horas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            4
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Formación</h3>
                                            <p className="text-sm text-gray-600">Te enseñamos el uso correcto</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 flex flex-col justify-center">
                            <CardHeader>
                                <CardTitle className={'px-6'}>Incluye:</CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col items-center'}>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Cobertor a medida</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Anclajes y fijaciones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Instalación completa</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Garantía del fabricante</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Manual de uso y mantenimiento</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Shield className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">Protege tu Piscina y Ahorra</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita un presupuesto a medida sin compromiso. Te ayudamos a elegir
                        el cobertor perfecto para tu piscina.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-pink-600 hover:bg-white/90"
                        >
                            Solicitar Medida
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