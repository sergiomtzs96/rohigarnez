import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    Beaker,
    Droplet,
    Zap,
    Shield,
    Activity,
    Settings,
    CheckCircle,
    TrendingUp,
    Clock,
    AlertTriangle,
    Sparkles,
    BarChart3
} from 'lucide-react';

export default function PHMachine() {

    const benefits = [
        {
            title: 'Control Automático',
            description: 'Regulación constante del pH sin intervención manual',
            icon: <Settings className="w-6 h-6" />,
            highlight: '24/7 Automático'
        },
        {
            title: 'Agua Equilibrada',
            description: 'Mantiene el pH ideal entre 7.2 y 7.6 permanentemente',
            icon: <Droplet className="w-6 h-6" />,
            highlight: 'pH Perfecto'
        },
        {
            title: 'Ahorro de Químicos',
            description: 'Dosificación precisa que elimina el desperdicio',
            icon: <TrendingUp className="w-6 h-6" />,
            highlight: 'Ahorro 40%'
        },
        {
            title: 'Protección Equipos',
            description: 'Evita corrosión y calcificación de instalaciones',
            icon: <Shield className="w-6 h-6" />,
            highlight: 'Máxima Durabilidad'
        }
    ];

    const systems = [
        {
            brand: 'Sistema pH Básico',
            capacity: 'Hasta 50m³',
            price: 'Desde 650€',
            features: [
                'Sonda de pH digital',
                'Bomba dosificadora 1.5 l/h',
                'Depósito 5 litros',
                'Display LCD',
                'Garantía 2 años'
            ],
            recommended: false,
            installation: '2-3 horas'
        },
        {
            brand: 'Sistema pH Professional',
            capacity: 'Hasta 100m³',
            price: 'Desde 950€',
            features: [
                'Sonda pH alta precisión',
                'Bomba dosificadora 3 l/h',
                'Depósito 10 litros',
                'Control digital avanzado',
                'Alarmas integradas',
                'Garantía 3 años'
            ],
            recommended: true,
            installation: '3-4 horas'
        },
        {
            brand: 'Sistema pH Premium',
            capacity: 'Hasta 200m³',
            price: 'Desde 1.450€',
            features: [
                'Doble sonda pH redundante',
                'Bomba dosificadora 5 l/h',
                'Depósito 20 litros',
                'Control Wi-Fi app móvil',
                'Registro de datos',
                'Auto-calibración',
                'Garantía 5 años'
            ],
            recommended: false,
            installation: '4-5 horas'
        }
    ];

    const installation = [
        {
            step: '01',
            title: 'Análisis Previo',
            description: 'Evaluación de la instalación existente y calidad del agua',
            duration: '30 min'
        },
        {
            step: '02',
            title: 'Instalación Sonda',
            description: 'Montaje de la sonda de pH en el circuito de retorno',
            duration: '45 min'
        },
        {
            step: '03',
            title: 'Montaje Dosificador',
            description: 'Instalación de bomba dosificadora y depósito de reactivo',
            duration: '1 hora'
        },
        {
            step: '04',
            title: 'Conexión y Calibración',
            description: 'Conexionado eléctrico y calibración de la sonda',
            duration: '45 min'
        },
        {
            step: '05',
            title: 'Puesta en Marcha',
            description: 'Ajuste de parámetros y formación al usuario',
            duration: '30 min'
        }
    ];

    const whyPh = [
        {
            problem: 'pH Bajo (< 7.0)',
            effects: 'Corrosión de metales, irritación ojos y piel, desgaste liner',
            icon: <AlertTriangle className="w-6 h-6 text-red-500" />
        },
        {
            problem: 'pH Alto (> 7.8)',
            effects: 'Formación de cal, agua turbia, menor eficacia del cloro',
            icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
        },
        {
            problem: 'pH Ideal (7.2-7.6)',
            effects: 'Agua cristalina, confort total, máxima eficiencia química',
            icon: <CheckCircle className="w-6 h-6 text-green-500" />
        }
    ];

    const maintenance = [
        {
            task: 'Rellenar Reactivo',
            frequency: 'Mensual',
            description: 'Reposición de ácido o base según necesidad',
            cost: '15-25€/mes'
        },
        {
            task: 'Calibración Sonda',
            frequency: 'Trimestral',
            description: 'Calibración con soluciones buffer estándar',
            cost: 'Incluido'
        },
        {
            task: 'Cambio de Sonda',
            frequency: 'Cada 2 años',
            description: 'Sustitución de la sonda de pH',
            cost: '80-150€'
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
                    <h1 className="mb-6 text-white">Instalación de Máquinas de pH</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Control automático y preciso del pH para agua perfectamente equilibrada.
                        Olvídate de ajustes manuales y disfruta de una piscina siempre en condiciones óptimas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Agua Cristalina
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Shield className="w-4 h-4 mr-2" />
                            Protección Total
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Zap className="w-4 h-4 mr-2" />
                            Control 24/7
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

            {/* Why pH Control */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">¿Por Qué es Crucial el Control del PH?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            El pH es el parámetro más importante del agua. Un pH desequilibrado afecta
                            la salud, el confort y la durabilidad de tu piscina.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {whyPh.map((item, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        {item.icon}
                                        <h3 className="font-semibold">{item.problem}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{item.effects}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="bg-gradient-to-br from-[#9de8ea]/10 to-[#70a2ad]/10 border-[#70a2ad] rounded-lg">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#70a2ad] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-lg">La Solución: Regulación Automática</h3>
                                    <p className="text-gray-600 mb-4">
                                        Un sistema automático de pH analiza constantemente el agua y dosifica el reactivo
                                        necesario (ácido o base) para mantener el pH en el rango ideal de 7.2-7.6.
                                        Esto garantiza agua cristalina, confort máximo y protección de equipos.
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        <li className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[#70a2ad]" />
                                            Control preciso y continuo
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[#70a2ad]" />
                                            Sin intervención manual
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[#70a2ad]" />
                                            Alarmas ante anomalías
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[#70a2ad]" />
                                            Ahorro de químicos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Beneficios de la Regulación Automática</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Descubre todas las ventajas de instalar un sistema automático de control de pH
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

            {/* Systems Comparison */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Sistemas Disponibles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Selecciona el sistema más adecuado para el volumen de tu piscina
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {systems.map((system, index) => (
                            <Card key={index} className={`relative rounded-lg flex flex-col h-full ${system.recommended ? 'ring-2 ring-[#70a2ad] shadow-lg' : ''}`}>
                                {system.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-[#70a2ad] text-white">
                                            Más Vendido
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6 mt-auto flex flex-col justify-between h-full">
                                    <div className="text-center mb-6">
                                        <h3 className="mb-2 font-semibold text-lg">{system.brand}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{system.capacity}</p>
                                        <div className="text-3xl font-bold text-[#70a2ad] mb-2">{system.price}</div>
                                        <Badge variant="outline">{system.installation}</Badge>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {system.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#70a2ad] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${system.recommended ? 'bg-[#70a2ad] text-white hover:bg-[#486871]' : ''}`}
                                        variant={system.recommended ? 'default' : 'outline'}
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

            {/* Installation Process */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Instalación</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Instalación profesional realizada por técnicos especializados
                        </p>
                    </div>

                    <div className="space-y-6">
                        {installation.map((step, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#70a2ad] rounded-full flex items-center justify-center text-white flex-shrink-0">
                                            <span className="text-xl font-bold">{step.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-2 font-semibold">{step.title}</h4>
                                            <p className="text-gray-600">{step.description}</p>
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
                                <Clock className="w-6 h-6 text-[#70a2ad] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Instalación Completa en un Día</h4>
                                    <p className="text-sm text-gray-600">
                                        Todo el proceso de instalación se realiza en una sola jornada, incluyendo
                                        la puesta en marcha y formación completa para el usuario. Tu piscina estará
                                        lista para disfrutar con control automático de pH el mismo día.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Maintenance */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Mantenimiento Simplificado</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            El mantenimiento es mínimo y puede incluirse en el servicio de mantenimiento regular
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {maintenance.map((item, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-12 h-12 bg-[#70a2ad]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#70a2ad]">
                                            <Activity className="w-6 h-6" />
                                        </div>
                                        <h4 className="mb-2 font-semibold">{item.task}</h4>
                                        <Badge variant="outline">{item.frequency}</Badge>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 text-center">{item.description}</p>
                                    <div className="text-center">
                                        <Badge className="bg-[#70a2ad]/10 text-[#70a2ad]">{item.cost}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#70a2ad] to-[#486871] text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Beaker className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="mb-4">¿Listo para Automatizar el Control de pH?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita un estudio personalizado gratuito. Te asesoramos sobre el sistema
                        más adecuado para tu piscina.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-[#486871] hover:bg-white/90"
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