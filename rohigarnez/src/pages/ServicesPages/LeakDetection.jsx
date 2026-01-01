import { Button } from "../../components/ui/button";
import { Search, Zap, Shield, AlertTriangle, CheckCircle, TriangleAlert, Dot } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import CalltoActionServices from "@/components/general/CalltoAction";

export default function LeakDetection() {

    const info = {

        sectionOne: [
            {
                title: '¿Por qué usar Gas Trazador?',
                description: 'El gas trazador es la tecnología más avanzada y precisa para localizar fugas en piscinas. Permite detectar pérdidas invisibles sin necesidad de romper pavimentos ni realizar obras costosas.',
                features: [
                    'Detección precisa sin obras invasivas',
                    'Localización exacta del punto de fuga',
                    'Recomendaciones de reparación',
                    'Gas trazador de alta tecnología',
                    'Informe detallado con fotografías',
                    'Ahorro de tiempo y dinero'
                ],
                benefits: [
                    {
                        icon: <Search />,
                        title: 'Precisión Total',
                        description: 'Localización exacta de fugas, incluso las más pequeñas.',
                    },
                    {
                        icon: <Zap />,
                        title: 'Rápido y Eficaz',
                        description: 'Detección en tiempo récord, minimizando interrupciones.',
                    },
                    {
                        icon: <Shield />,
                        title: 'No Invasivo',
                        description: 'Sin necesidad de obras destructivas en su piscina.',
                    },
                    {
                        icon: <AlertTriangle />,
                        title: 'Prevención de Daños',
                        description: 'Evita daños mayores y costosos reparaciones futuras.',
                    }
                ],
            }
        ],
        process: [
            {
                step: 1,
                title: 'Inspección Visual',
                description: 'Evaluamos el área para identificar posibles puntos de fuga.'
            },
            {
                step: 2,
                title: 'Aplicación de Gas Trazador',
                description: 'Introducimos gas trazador en el sistema de la piscina.'
            },
            {
                step: 3,
                title: 'Detección Precisa',
                description: 'Utilizamos detectores especializados para localizar la fuga.'
            },
            {
                step: 4,
                title: 'Informe y Solución',
                description: 'Proporcionamos un informe detallado y recomendaciones de reparación.'
            }
        ],
        warnings: [
            'Pérdida de agua superior a lo normal',
            'Necesidad constante de añadir agua',
            'Zonas húmedas alrededor de la piscina',
            'Grietas o hundimientos en el terreno cercano',
            'Aumento en la factura de agua',
            'Dificultad para mantener el nivel químico del agua'
        ]
    }

    return (

        <div>
            <section className="text-center items-center bg-[var(--color-navbar)]">
                <div className="space-y-4 py-8 max-w-3xl mx-auto text-white">
                    <h1>Localización de Fugas con Gas Trazador</h1>
                    <p>Tecnología avanzada para detectar fugas en piscinas con precisión milimétrica. Sin obras destructivas ni suposiciones.</p>
                    <div className="flex gap-8 items-center text-center justify-center">
                        <Button variant={'outline'}>Solicitar Inspección</Button>
                        <Button variant={'ghost'}>Contactar</Button>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-8">
                <div>
                    {info.sectionOne.map((info) => (
                        <div>
                            <div className="text-center">
                                <h2>{info.title}</h2>
                                <p>{info.description}</p>
                            </div>
                            <div className="grid grid-cols-2 py-8 items-center">

                                <div>
                                    {info.features.map((feature, i) => (
                                        <div key={i} className="flex gap-4 py-2 text-md items-center "> <CheckCircle size={20} className="text-[var(--color-navbar)]" /> {feature} </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {info.benefits.map((benefit, j) => (
                                        <div key={j} className="flex flex-col items-center text-center text-gray-100 p-2 border rounded-lg shadow-lg bg-[var(--color-navbar)]/60 h-40 justify-center space-y-3 hover:scale-105 transition-scale duration-300">
                                            {benefit.icon}
                                            <h3>{benefit.title}</h3>
                                            <span className="text-sm">{benefit.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-8">
                <div className="space-y-8">
                    <div className="text-center">
                        <h2>Proceso de Detección</h2>
                        <p>Nuestro método profesional en 4 pasos garantiza resultados precisos</p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        {info.process.map((process, index) => (
                            <Card className={'w-full h-40 px-6 hover:scale-105 transition-scale duration-300'}>
                                <CardHeader>
                                    <div className="relative -top-2 -left-8 text-gray-200 font-bold rounded-full bg-[var(--color-navbar)]/60 w-6 h-6 text-center ">
                                        {process.step}
                                    </div>
                                    <CardTitle className={'text-start'}>{process.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{process.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-8">
                <div className="border border-red-500 rounded-lg w-full p-4 bg-amber-100">
                    <div className="flex gap-4 justify-center text-center items-center py-6 text-red-500"><TriangleAlert /> Señales de que tu piscina tiene una fuga</div>
                    <div className="grid grid-cols-2 w-full mx-auto gap-4">
                        {info.warnings.map((warning, w) => (
                            <div key={w} className="flex text-gray-500">
                                <Dot color="red" /> {warning}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <CalltoActionServices />
            </section>
        </div>
    )
}
