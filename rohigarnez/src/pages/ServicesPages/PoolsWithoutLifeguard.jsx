import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { UserCheck, CircleCheck, Shield, Clock, Check } from "lucide-react";
import { CalltoActionServices } from "@/components/general/CalltoAction";


export default function PoolsWithoutLifeguard() {

    const info = {
        title: "Mantenimiento de Piscinas sin Socorrista",
        description: "Servicio completo de mantenimiento para piscinas comunitarias. Garantizamos agua cristalina y equipos en perfecto estado durante toda la temporada.",
        badge: 'Mantenimiento - Comunidades de Vecinos',
        services: [
            'Limpieza y aspirado completo del vaso',
            'Vaciado de skimmers y prefiltros',
            'Limpieza de línea de flotación',
            'Revisión del sistema de filtración',
            'Mantenimiento preventivo de equipos',
            'Cepillado de paredes y fondo',
            'Análisis y control químico del agua',
            'Control y ajuste de PH y cloro',
            'Limpieza de filtros',
            'Informe mensual del estado de la piscina'
        ],
        elections: [
            {
                title: 'Experiencia Profesional',
                description: 'Más de 15 años cuidando piscinas comunitarias',
                icon: <Shield />
            },
            {
                title: 'Puntualidad Garantizada',
                description: 'Visitas programadas sin interrupciones',
                icon: <Clock />
            },
            {
                title: 'Equipo Cualificado',
                description: 'Técnicos certificados y con experiencia',
                icon: <UserCheck />
            },
            {
                title: 'Calidad Asegurada',
                description: 'Productos homologados y de primera calidad',
                icon: <CircleCheck />
            }
        ],
        suscriptions: [
            {
                title: 'Plan Básico',
                description: 'Ideal para piscinas pequeñas con uso moderado.',
                price: '100€/mes',
                features: [
                    'Limpieza semanal completa',
                    'Control químico del agua',
                    'Revisión de equipos'
                ],
                recommended: false
            },
            {
                title: 'Plan Premium',
                description: 'Perfecto para piscinas medianas con uso frecuente.',
                price: '150€/mes',
                features: [
                    'Limpieza bi-semanal',
                    'Control químico optimizado',
                    'Mantenimiento preventivo',
                    'Informe detallado mensual'
                ],
                recommended: true
            },
            {
                title: 'Plan Elite',
                description: 'Para piscinas grandes con alto nivel de uso',
                price: '200€/mes',
                features: [
                    'Limpieza frecuente',
                    'Control diario del agua',
                    'Mantenimiento exhaustivo',
                    'Soporte prioritario'
                ],
                recommended: false
            }
        ]
    }


    return (
        <div>
            <section>
                <Card className={'bg-[var(--color-navbar)]/30'}>
                    <CardHeader>
                        <div className="flex flex-col items-center justify-center space-y-3 max-w-7xl mx-auto py-6">
                            <CardTitle><h1>{info.title}</h1></CardTitle>
                            <CardDescription><p className="max-w-4xl text-center">{info.description}</p></CardDescription>
                            <Badge variant={'secondary'}>{info.badge}</Badge>
                            <div className="flex gap-4">
                                <Button variant={'outline'}>Solicitar Presupuesto</Button>
                                <Button variant={'ghost'}>Más información</Button>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </section>
            <section>
                <div className="max-w-7xl mx-auto mt-4 p-6">
                    <div className="text-center space-y-4">
                        <h2>Servicios incluidos</h2>
                        <p className="mx-w-1xl mx-auto">Nuestro servicio de mantenimiento incluye todas las tareas necesarias para mantener tu piscina comunitaria en perfectas condiciones.</p>
                        <div className="flex gap-4 mx-auto items-center justify-center">

                            <div className="grid grid-cols-2 items-center gap-4">
                                {info.services.map((services, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <CircleCheck size={16} color="var(--color-navbar)" />
                                        <span className="text-sm">{services}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Card className={'px-6 py-4'}>
                                    <CardTitle><h5>¿Por qué elegirnos?</h5></CardTitle>
                                    {info.elections.map((election, j) => (
                                        <div key={j} className="flex items-center gap-4" >
                                            <div>
                                                {election.icon}
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <h6>{election.title}</h6>
                                                <p>{election.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto text-center">
                <div>
                    <div>
                        <h2>Planes de Mantenimiento</h2>
                        <p>Adaptamos la frecuencia del servicio a las necesidades de tu comunidad</p>
                        <div className="grid grid-cols-3 gap-4 p-6">
                            {info.suscriptions.map((suscription, i) => (
                                <Card key={i} className={ `p-4 ${suscription.recommended ? 'border rounded-lg border-[var(--color-navbar)]' : ''}`}>
                                    <CardHeader className={'text-center'}>
                                        <div className="text-end"><Badge className={`${suscription.recommended ? '' : 'invisible'}`}>Recomendado</Badge></div>
                                        <CardTitle><h4>{suscription.title}</h4></CardTitle>
                                        <CardDescription><p>{suscription.description}</p></CardDescription>
                                    </CardHeader>
                                    {suscription.features.map((feature) => (
                                            <CardContent>
                                        <div key={feature} className="flex gap-2 items-center">
                                            <Check size={14} /> {feature}
                                        </div>
                                    </CardContent>
                                    ))}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto p-4">
                <CalltoActionServices />
            </section>

        </div>
    )
}