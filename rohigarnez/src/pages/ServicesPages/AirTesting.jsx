import { Wind, CheckCircle, Target, Clock, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import CalltoActionServices from '@/components/general/CalltoAction';


export default function AirTesting() {

    const advantages = [
        'Mayor eficacia en la detección',
        'Identificación rápida de problemas',
        'Sin riesgo de daños al sistema',
        'Método económico y eficiente',
        'Resultados inmediatos',
        'Compatible con todo tipo de tuberías'
    ];

    const applications = [
        {
            icon: Target,
            title: 'Tuberías de Piscinas',
            description: 'Ideal para detectar fugas en sistemas de circulación y filtrado'
        },
        {
            icon: Shield,
            title: 'Sistemas de Aspiración',
            description: 'Verificación de skimmers y sistemas de limpieza'
        },
        {
            icon: Wind,
            title: 'Líneas de Retorno',
            description: 'Pruebas en tuberías de retorno y jets'
        },
        {
            icon: Clock,
            title: 'Instalaciones Nuevas',
            description: 'Verificación de calidad antes de la puesta en marcha'
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="text-center items-center bg-[var(--color-navbar)]">
                <div className="space-y-4 py-8 max-w-3xl mx-auto text-white">
                    <h1>Pruebas de Aire para mayor eficiencia</h1>
                    <p>Método avanzado de detección de fugas utilizando presión de aire. Resultados rápidos y precisos sin dañar tus instalaciones.</p>
                    <div className="flex gap-8 items-center text-center justify-center">
                        <Button variant={'outline'}>Solicitar Inspección</Button>
                        <Button variant={'ghost'}>Contactar</Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Ventajas de las Pruebas con Aire</h2>
                            <p className="text-gray-600 mb-8">
                                Las pruebas mediante aire son especialmente efectivas para detectar
                                pequeñas fugas que podrían pasar desapercibidas con otros métodos.
                                Este sistema permite presurizar las tuberías de forma controlada
                                para identificar cualquier pérdida de presión.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {advantages.map((advantage, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-[var(--color-navbar)]" />
                                        <span className="text-sm text-gray-700">{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Card className="bg-[var(--color-navbar)]/20 border-0 shadow-lg p-4 rounded-lg">
                            <CardHeader>
                                <CardTitle>¿Cómo Funciona?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-[var(--color-navbar)] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Aislamiento del Sistema</h3>
                                        <p className="text-sm text-gray-600">Cerramos las líneas que vamos a probar</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[var(--color-navbar)] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Presurización</h3>
                                        <p className="text-sm text-gray-600">Introducimos aire a presión controlada</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[var(--color-navbar)] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Monitorización</h3>
                                        <p className="text-sm text-gray-600">Medimos la caída de presión durante un periodo</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-[var(--color-navbar)] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Diagnóstico</h3>
                                        <p className="text-sm text-gray-600">Determinamos la existencia y magnitud de fugas</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Aplicaciones</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Las pruebas con aire son versátiles y se adaptan a diferentes sistemas
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="bg-[var(--color-navbar)]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <app.icon className="h-8 w-8 text-[var(--color-navbar)]" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{app.title}</h3>
                                    <p className="text-sm text-gray-600">{app.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-12">¿Cuándo usar Pruebas con Aire?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-2 border-green-200 bg-green-50 p-4 rounded-lg shadow-lg shadow-green-100">
                            <CardHeader>
                                <CardTitle className="text-green-700">Ideal Para:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Verificación de instalaciones nuevas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Detección rápida de fugas evidentes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Pruebas de estanqueidad pre-llenado</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Sistemas de tuberías accesibles</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Diagnóstico preliminar económico</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-blue-200 bg-blue-50 p-4 rounded-lg shadow-lg shadow-blue-100">
                            <CardHeader>
                                <CardTitle className="text-blue-700">Combinar con Gas Trazador Para:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Localización exacta de fugas pequeñas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Tuberías enterradas o inaccesibles</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Fugas ocultas sin síntomas visibles</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Necesidad de ubicación milimétrica</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Target className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Minimizar obras de excavación</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
           <section>
                        <CalltoActionServices />
           </section>
        </div>
    )
}