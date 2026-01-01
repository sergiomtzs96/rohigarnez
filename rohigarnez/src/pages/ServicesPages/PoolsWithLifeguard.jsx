import { BrushCleaning, ThermometerSun, Eye, Heart, Users, Shield, FileText, Droplets, BookOpen, CheckCircle, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rate } from 'antd';
import CalltoActionServices from "@/components/general/CalltoAction";
export default function PoolsWithLifeguard() {

    const info = {
        title: 'Piscinas con y sin socorrista',
        description: 'Servicios especializados adaptados a la normativa específica de cada tipo de instalación. Cumplimiento garantizado del RD 742/2013 y normativas autonómicas.',
        badge: [
            'Mantenimiento - Comunidades de Vecinos',
            'Cumplimiento RD 742/2013',
            'Socorristas Titulados'
        ],
        LifeguardNeeds: [
            {
                title: 'Vigilancia Activa,',
                description: 'Supervisión constante de la actividad acuática y prevención de accidentes.',
                icon: <Eye />,
                critical: false,
            },
            {
                title: 'Primerios Auxilios',
                description: 'Atención inmediata en caso de emergencias con certificado oficial',
                icon: <Heart />,
                critial: true
            },
            {
                title: 'Control de Aforo',
                description: 'Gestión del número de bañistas según normativa vigente',
                icon: <Users />,
                critical: false
            },
            {
                title: 'Cumplimiento Normativo',
                description: 'Verificación de cumplimiento de todas las normativas de seguridad',
                icon: <FileText />,
                critical: true
            }
        ],

        NoLifeguardNeeds: [
            {
                title: 'Control Químico Avanzado',
                description: 'Monitorización y ajuste continuo de parámetros químicos',
                icon: <Droplets />,
                frequency: 'Continuo'
            },
            {
                title: 'Control de Temperatura',
                description: 'Mantenimiento de temperatura óptima según normativa',
                icon: <ThermometerSun />,
                frequency: 'Diario'
            },
            {
                title: 'Limpieza Intensiva',
                description: 'Limpieza reforazada por mayor uso y existencias sanitarias',
                icon: <BrushCleaning />,
                frequency: 'Diario',
            },
            {
                title: 'Registros Oficiales',
                description: 'Documentación obligatoria para inspecciones sanitarias',
                icon: <BookOpen />,
                frequency: 'Continuo'
            }
        ],
        regulations: {
            one: [
                'Socorrista obligatorio si la profundidad es mayor a 1.5m',
                'Ratio máximo: 1 socorrista por 200m² de lámina',
                'Certificación en salvamento acuático',
                'Botiquín y material de primeros auxilios'
            ],
            normatives: [
                'Decreto 23/1999 sobre piscinas de uso público',
                'Control de calidad del agua reforzado',
                'Registros diarios obligatorios',
                'Inspecciones sanitarias periódicas'
            ]
        },
        suscriptions: [
            {
                title: 'Sin Socorrista',
                subtitle: 'Piscinas de profundidad ≤ 1.5m',
                price: 220,
                description: 'Mantenimiento especializado sin necesidad de socorrista',
                badge: 'Cumple RD  742/2013',
                features: [
                    'Control químico diario',
                    'Limpieza diaria en temperatura alta',
                    'Registros oficiales completos',
                    'Control de temperatura continuo',
                    'Informes semanales',
                    'Cumplimiento normativo garantizado'
                ],
                recommended: false
            },
            {
                title: 'Con Socorrista',
                subtitle: 'Piscinas de profundidad > 1.5m',
                price: 580,
                description: 'Servicio completo con socorrista titulado',
                badge: 'Cumple toda la normativa',
                features: [
                    'Socorristas titulados en horario de apertura',
                    'Control químico automatizado',
                    'Limpieza y mantenimiento diario',
                    'Primeros auxilios certificados',
                    'Control de aforo y seguridad',
                    'Registros oficiales digitalizados',
                    'Coordinación con servicios de emergencia'
                ],
                recommended: true
            },
            {
                title: 'Premium Integral',
                subtitle: 'Gestión completa todo incluido',
                price: 850,
                description: 'Solución integral con gestión avanzada',
                badge: 'Excelencia normativa',
                features: [
                    'Equipo de socorristas (2+ personas)',
                    'Sistemas de control automatizados',
                    'Mantenimiento preventivo semanal',
                    'Gestión de químicos y productos',
                    'Asesoramiento normativo personalizado',
                    'Formación al personal de la comunidad',
                    'Servicio de emergencias 24/7'
                ],
                recommended: false
            }
        ],
        rewiews: [
            {
                rating: 5,
                badge: 'Con socorrista',
                content: 'El servicio con socorrista ha sido excepcional. Nos sentimos seguros sabiendo que hay profesionales atentos en todo momento. Además, el mantenimiento de la piscina es impecable.',
                name: 'Laura M.',
                role: 'Presidenta de Comunidad'
            },
            {
                rating: 5,
                badge: 'Sin socorrista',
                content: 'Optamos por el servicio sin socorrista y ha sido una excelente decisión. La calidad del agua y la limpieza son de primera, y el equipo siempre está disponible para cualquier consulta.',
                name: 'Carlos R.',
                role: 'Administrador de Fincas'
            }
        ]
    }

    return (
        <div>
            <section className="text-center">
                <Card className={'p-6 bg-[var(--color-navbar)]/30'}>
                    <CardHeader>
                        <div className="space-y-4">
                            <CardTitle><h1>{info.title}</h1></CardTitle>
                            <CardDescription><p>{info.description}</p></CardDescription>
                            <div className="flex items-center justify-center gap-4">
                                {info.badge.map((badge, i) => (
                                    <Badge variant={'secondary'} key={i}>{badge}</Badge>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4">
                                <Button variant={'outline'}>Solicitar Presupuesto</Button>
                                <Button variant={'ghost'}>Más información</Button>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </section>
            <section className="max-w-7xl mx-auto py-8">
                <div className="text-center">
                    <h2>¿Cuándo necesitas socorrita?</h2>
                    <p>Según el RD 742/2013, las piscinas con profundidad superior a 1.5 metros requieren obligatoriamente la presencia de socorrista.</p>
                </div>
                <div className="flex py-8">
                    <div className="w-full mx-auto space-y-4 p-4">
                        <div className="flex flex-col text-center justify-center items-center">

                            <div><Shield /></div>
                            <h4>Con Socorrista</h4>
                            <p>Obligatorio para profundidad &gt; 1.5 metros</p>
                        </div>
                        {info.LifeguardNeeds.map((need) => (
                            <div className="flex gap-2 items-start rounded-lg border border-gray-200 px-2 py-4 hover:shadow-lg transition-shadow duration-300">
                                <div>{need.icon}</div>
                                <div>
                                    <div className="flex gap-4"><h5>{need.title}</h5><Badge variant={'destructive'} className={`${need.critical === true ? '' : 'invisible'}`}>Obligatorio</Badge></div>
                                    <p>{need.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mx-auto space-y-4 p-4">
                        <div className="flex flex-col text-center justify-center items-center">
                            <div><Shield /></div>
                            <h4>Sin Socorrista</h4>
                            <p>Obligatorio para profundidad &gt; 1.5 metros</p>
                        </div>
                        {info.NoLifeguardNeeds.map((without) => (
                            <div className="flex gap-2 items-start rounded-lg border border-gray-200 px-2 py-4 hover:shadow-lg transition-shadow duration-300">
                                <div>{without.icon}</div>
                                <div>
                                    <div className="flex gap-4"><h5>{without.title}</h5><Badge variant={'destructive'} className={`${without.critical === true ? '' : 'invisible'}`}>Obligatorio</Badge></div>
                                    <p>{without.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-8">
                <div>
                    <div className="text-center">
                        <h2>Marco Normativo</h2>
                        <p>Conoce las principales normativas que regulan el funcionamiento de piscinas públicas.</p>
                    </div>
                    <div className="flex items-center gap-4 justify-center py-4 w-full">
                        <Card className={'px-2 py-4 w-full'}>
                            <CardHeader className={'text-center'}>
                                <CardTitle><h3>RD 742/2013</h3></CardTitle>
                                <CardDescription><p>Criterios técnico-sanitarios de piscinas</p></CardDescription>
                            </CardHeader>
                            {info.regulations.one.map((regulation) => (
                                <CardContent>
                                    <div key={regulation}>
                                        <div className="flex gap-2 items-center"><CheckCircle size={15} />{regulation}</div>
                                    </div>
                                </CardContent>
                            ))}
                        </Card>
                        <Card className={'px-2 py-4 w-full'}>
                            <CardHeader className={'text-center'}>
                                <CardTitle><h3>Normativa Autonómica</h3></CardTitle>
                                <CardDescription><p>Requisitos específicos de Madrid</p></CardDescription>
                            </CardHeader>
                            {info.regulations.normatives.map((norm) => (
                                <CardContent>
                                    <div key={norm}>
                                        <div className="flex gap-2 items-center"><CheckCircle size={15} />{norm}</div>
                                    </div>
                                </CardContent>
                            ))}
                        </Card>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto text-center py-8">
                <div>
                    <div>
                        <h2>Planes de Mantenimiento</h2>
                        <p>Adaptamos la frecuencia del servicio a las necesidades de tu comunidad</p>
                        <div className="grid grid-cols-3 gap-4 p-6">
                            {info.suscriptions.map((suscription, i) => (
                                <Card key={i} className={`p-4 ${suscription.recommended ? 'border rounded-lg border-[var(--color-navbar)] ' : ''}`}>
                                    <CardHeader className={'text-center'}>
                                        <div className="text-end"><Badge className={`${suscription.recommended ? '' : 'invisible'}`}>Recomendado</Badge></div>
                                        <CardTitle><h4>{suscription.title}</h4></CardTitle>
                                        <CardDescription><p>{suscription.description}</p></CardDescription>
                                    </CardHeader>
                                    <CardContent className={'flex flex-col flex-1'}>
                                        {suscription.features.map((feature) => (
                                            <div key={feature} className="flex gap-2 items-center text-justify mb-2">
                                                <Check size={14} /> {feature}
                                            </div>
                                        ))}
                                        <div className="mt-auto ">
                                            <Button className={'w-full'} variant={'default'}>
                                                Más Información
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div className="py-8">
                    <div className="text-center">
                        <h2>Experiencias de nuestros clientes</h2>
                        <p>Testimonios reales de clientes con diferentes tipos de instalaciones</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-6 w-full mx-auto">
                        {info.rewiews.map((review, i) => (
                            <div className="flex " key={i}>
                                <Card key={i} className={'w-full p-8'}>
                                    <CardHeader>
                                        <div className="flex gap-8 items-center">
                                            <Rate disabled value={review.rating} />
                                            <Badge variant={'default'}>{review.badge}</Badge>
                                        </div>
                                        <div>
                                            <p>"{review.content}"</p>
                                        </div>
                                        <div>
                                            <p><strong>{review.name}</strong></p>
                                            <span className="font-thin text-xs">{review.role}</span>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full">
                <CalltoActionServices />
            </section>
        </div>
    )
}