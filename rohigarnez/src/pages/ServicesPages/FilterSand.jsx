import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    Filter,
    Droplets,
    Sparkles,
    Recycle,
    AlertCircle,
    CheckCircle,
    Calendar,
    Layers,
    Clock,
    TrendingUp,
    Award,
    Leaf,
    Eye,
    Activity
} from 'lucide-react';

export default function FilterSand() {

    const benefits = [
        {
            title: 'Agua Cristalina',
            description: 'Filtración óptima que elimina impurezas y partículas microscópicas',
            icon: <Sparkles className="w-6 h-6" />,
            highlight: '100% Limpia'
        },
        {
            title: 'Mayor Eficiencia',
            description: 'Medios filtrantes nuevos mejoran el rendimiento del sistema',
            icon: <TrendingUp className="w-6 h-6" />,
            highlight: '+40% Eficaz'
        },
        {
            title: 'Menos Químicos',
            description: 'Mejor filtración reduce la necesidad de productos químicos',
            icon: <Recycle className="w-6 h-6" />,
            highlight: 'Eco-Friendly'
        },
        {
            title: 'Ahorro Energético',
            description: 'Filtro limpio reduce la carga de trabajo de la bomba',
            icon: <Leaf className="w-6 h-6" />,
            highlight: 'Menos Consumo'
        }
    ];

    const filterMedia = [
        {
            type: 'Arena de Sílice',
            particle: '0.4 - 0.8 mm',
            filtration: '30-40 micras',
            price: 'Desde 120€',
            features: [
                'Opción tradicional económica',
                'Buena capacidad de retención',
                'Durabilidad 3-5 años',
                'Apta para todo tipo de piscinas',
                'Fácil mantenimiento'
            ],
            lifespan: '3-5 años',
            recommended: false,
            efficiency: 'Estándar',
            weight: '25 kg/saco'
        },
        {
            type: 'Vidrio Reciclado',
            particle: '0.5 - 1.0 mm',
            filtration: '10-20 micras',
            price: 'Desde 180€',
            features: [
                'Ecológico (vidrio reciclado)',
                'Filtración superior a arena',
                'Durabilidad 5-8 años',
                'No favorece bacterias',
                'Menos retrolavados necesarios',
                'Superficie pulida y suave'
            ],
            lifespan: '5-8 años',
            recommended: true,
            efficiency: 'Alta',
            weight: '20 kg/saco'
        },
        {
            type: 'Zeolita',
            particle: '0.5 - 1.0 mm',
            filtration: '5-10 micras',
            price: 'Desde 240€',
            features: [
                'Mineral volcánico natural',
                'Máxima capacidad filtrante',
                'Durabilidad 8-10 años',
                'Absorbe amoníaco y metales',
                'Ideal aguas problemáticas',
                'Reduce cloro necesario',
                'Anti-algas natural'
            ],
            lifespan: '8-10 años',
            recommended: false,
            efficiency: 'Premium',
            weight: '20 kg/saco'
        }
    ];

    const whenReplace = [
        {
            sign: 'Agua Turbia Persistente',
            description: 'El agua no se aclara incluso con químicos correctos',
            severity: 'high',
            icon: <Eye className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Presión del Manómetro Alta',
            description: 'Presión constantemente elevada incluso después de retrolavado',
            severity: 'medium',
            icon: <Activity className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Arena en el Retorno',
            description: 'Aparece arena o partículas en los retornos de la piscina',
            severity: 'high',
            icon: <AlertCircle className="w-6 h-6 text-red-500" />
        },
        {
            sign: 'Tiempo de Uso',
            description: 'Han pasado más de 3-5 años desde el último cambio',
            severity: 'medium',
            icon: <Calendar className="w-6 h-6 text-orange-500" />
        },
        {
            sign: 'Arena Compactada',
            description: 'La arena se ha endurecido formando grumos o costras',
            severity: 'high',
            icon: <Layers className="w-6 h-6 text-red-500" />
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Drenaje del Filtro',
            description: 'Vaciado completo del agua del filtro y despresurización',
            duration: '20 min'
        },
        {
            step: '02',
            title: 'Extracción del Medio Antiguo',
            description: 'Retirada de arena/vidrio/zeolita usado y limpieza interna',
            duration: '45 min'
        },
        {
            step: '03',
            title: 'Inspección del Filtro',
            description: 'Revisión de crepinas, difusores y estado general del filtro',
            duration: '15 min'
        },
        {
            step: '04',
            title: 'Carga del Nuevo Medio',
            description: 'Llenado con el medio filtrante elegido en capas uniformes',
            duration: '30 min'
        },
        {
            step: '05',
            title: 'Retrolavado Inicial',
            description: 'Limpieza inicial del nuevo medio y compactación',
            duration: '20 min'
        },
        {
            step: '06',
            title: 'Puesta en Marcha',
            description: 'Verificación de presiones y funcionamiento óptimo',
            duration: '15 min'
        }
    ];

    const comparison = [
        {
            feature: 'Capacidad de filtración',
            arena: '30-40 micras',
            vidrio: '10-20 micras',
            zeolita: '5-10 micras'
        },
        {
            feature: 'Durabilidad',
            arena: '3-5 años',
            vidrio: '5-8 años',
            zeolita: '8-10 años'
        },
        {
            feature: 'Coste inicial',
            arena: 'Bajo',
            vidrio: 'Medio',
            zeolita: 'Alto'
        },
        {
            feature: 'Retrolavados',
            arena: 'Frecuentes',
            vidrio: 'Moderados',
            zeolita: 'Menos frecuentes'
        },
        {
            feature: 'Ecología',
            arena: 'Neutral',
            vidrio: 'Reciclado',
            zeolita: 'Natural'
        },
        {
            feature: 'Coste/año',
            arena: '€€',
            vidrio: '€',
            zeolita: '€'
        }
    ];

    const maintenance = [
        {
            task: 'Retrolavado Regular',
            frequency: 'Semanal o quincenal',
            description: 'Limpieza del medio filtrante invirtiendo el flujo de agua',
            importance: 'Alta'
        },
        {
            task: 'Control de Presión',
            frequency: 'Semanal',
            description: 'Verificar el manómetro para detectar suciedad acumulada',
            importance: 'Media'
        },
        {
            task: 'Limpieza Química',
            frequency: 'Anual',
            description: 'Tratamiento con desincrustante para eliminar grasas y cal',
            importance: 'Media'
        },
        {
            task: 'Renovación Completa',
            frequency: 'Cada 3-8 años',
            description: 'Cambio total del medio filtrante según el tipo usado',
            importance: 'Alta'
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
                    <h1 className="mb-6 text-white">Cambios de Arenas de Filtros</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Renovación profesional de medios filtrantes: arena, vidrio reciclado o zeolita.
                        Recupera la eficiencia de tu filtro y disfruta de agua cristalina.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Agua Perfecta
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Recycle className="w-4 h-4 mr-2" />
                            Opciones Ecológicas
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Award className="w-4 h-4 mr-2" />
                            Servicio Profesional
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
                        <h2 className="mb-4">¿Cuándo Cambiar el Medio Filtrante?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Identifica las señales que indican que necesitas renovar la arena de tu filtro
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {whenReplace.slice(0, 3).map((item, index) => (
                            <Card key={index} className="rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        {item.icon}
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.sign}</h3>
                                            <Badge variant="outline" className={`text-xs ${item.severity === 'high' ? 'border-red-500 text-red-500' : 'border-orange-500 text-orange-500'}`}>
                                                {item.severity === 'high' ? 'Urgente' : 'Importante'}
                                            </Badge>
                                        </div>
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
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.sign}</h3>
                                            <Badge variant="outline" className={`text-xs ${item.severity === 'high' ? 'border-red-500 text-red-500' : 'border-orange-500 text-orange-500'}`}>
                                                {item.severity === 'high' ? 'Urgente' : 'Importante'}
                                            </Badge>
                                        </div>
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
                        <h2 className="mb-4">Beneficios del Cambio</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Renovar el medio filtrante devuelve la eficiencia óptima a tu sistema de filtración
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

            {/* Filter Media Types */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Medios Filtrantes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige el medio filtrante que mejor se adapte a tus necesidades y presupuesto
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {filterMedia.map((media, index) => (
                            <Card key={index} className={`relative flex flex-col h-full rounded-lg ${media.recommended ? 'ring-2 ring-[#70a2ad] shadow-lg' : ''}`}>
                                {media.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-[#70a2ad] text-white">
                                            Recomendado
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6 flex flex-col h-full justify-between">
                                    <div className="text-center mb-6">
                                        <h3 className="mb-2 font-semibold text-lg">{media.type}</h3>
                                        <p className="text-sm text-gray-600 mb-1">Partícula: {media.particle}</p>
                                        <p className="text-xs text-gray-500 mb-3">Filtra hasta: {media.filtration}</p>
                                        <div className="text-3xl font-bold text-[#70a2ad] mb-2">{media.price}</div>
                                        <div className="flex gap-2 justify-center flex-wrap mb-2">
                                            <Badge variant="outline" className="text-xs">{media.lifespan}</Badge>
                                            <Badge className={`text-xs ${media.recommended ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                {media.efficiency}
                                            </Badge>
                                        </div>
                                        <div className="text-xs text-gray-500">Peso: {media.weight}</div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {media.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#70a2ad] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${media.recommended ? 'bg-[#70a2ad] text-white hover:bg-[#486871]' : ''}`}
                                        variant={media.recommended ? 'default' : 'outline'}
                                        onClick={() => onNavigate('contact')}
                                    >
                                        Solicitar Cambio
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <Card className={'rounded-lg p-6'}>
                        <CardHeader>
                            <CardTitle>Comparativa Rápida</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4">Característica</th>
                                            <th className="text-center py-3 px-4">Arena</th>
                                            <th className="text-center py-3 px-4 bg-[#70a2ad]/5">Vidrio</th>
                                            <th className="text-center py-3 px-4">Zeolita</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparison.map((row, index) => (
                                            <tr key={index} className="border-b last:border-0">
                                                <td className="py-3 px-4 font-medium">{row.feature}</td>
                                                <td className="text-center py-3 px-4">{row.arena}</td>
                                                <td className="text-center py-3 px-4 bg-[#70a2ad]/5 font-semibold">{row.vidrio}</td>
                                                <td className="text-center py-3 px-4">{row.zeolita}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Proceso de Cambio</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Servicio completo realizado por técnicos especializados
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map((step, index) => (
                            <Card key={index} className="rounded-lg p-6 group hover:shadow-lg transition-all duration-300">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[#70a2ad] rounded-full flex items-center justify-center text-white flex-shrink-0">
                                            <span className="font-bold">{step.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold mb-1">{step.title}</h4>
                                            <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-8 bg-gradient-to-r from-[#70a2ad]/10 to-[#9de8ea]/10 rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[#70a2ad] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-2">Servicio Completo en 2-3 Horas</h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        El cambio completo del medio filtrante se realiza en una mañana, incluyendo
                                        retirada del medio antiguo, limpieza interna del filtro, carga del nuevo medio
                                        y puesta en marcha con retrolavado inicial. Nos llevamos el material usado sin coste.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Incluye retirada</Badge>
                                        <Badge variant="outline">Limpieza del filtro</Badge>
                                        <Badge variant="outline">Retrolavado inicial</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Maintenance Tips */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Mantenimiento del Medio Filtrante</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Consejos para alargar la vida útil y mantener la eficiencia de tu filtro
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {maintenance.map((item, index) => (
                            <Card key={index} className="rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-12 h-12 bg-[#70a2ad]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#70a2ad]">
                                            <Droplets className="w-6 h-6" />
                                        </div>
                                        <h4 className="mb-2 font-semibold text-sm">{item.task}</h4>
                                        <Badge variant="outline" className="text-xs">{item.frequency}</Badge>
                                    </div>
                                    <p className="text-gray-600 text-xs mb-4 text-center">{item.description}</p>
                                    <div className="text-center">
                                        <Badge className={`text-xs ${item.importance === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            Importancia: {item.importance}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-8 border-[#70a2ad] rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Filter className="w-8 h-8 text-[#70a2ad] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-2 text-lg">Mantenimiento Profesional Disponible</h4>
                                    <p className="text-gray-600 mb-3">
                                        Ofrecemos contratos de mantenimiento que incluyen retrolavados programados,
                                        control de presiones, limpiezas químicas anuales y cambio de medio filtrante
                                        cuando sea necesario. Despreocúpate y disfruta de agua perfecta todo el año.
                                    </p>
                                    <Button variant="outline" onClick={() => onNavigate('pools-without-lifeguard')}>
                                        Ver Servicios de Mantenimiento
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#70a2ad] to-[#486871] text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Filter className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="mb-4">¿Necesitas Cambiar la Arena del Filtro?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita presupuesto sin compromiso. Te asesoramos sobre el mejor medio filtrante
                        para tu piscina y tipo de agua.
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