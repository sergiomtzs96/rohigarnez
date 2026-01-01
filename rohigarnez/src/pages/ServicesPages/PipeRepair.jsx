import { Wrench, CheckCircle, AlertCircle, Settings, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function PipeRepair() {

    const services = [
        'Reparación de tuberías rotas o agrietadas',
        'Sustitución de tramos deteriorados',
        'Actualización de tuberías obsoletas',
        'Reparación de uniones y codos',
        'Sellado de fugas en conexiones',
        'Instalación de nuevas tuberías',
        'Modernización del sistema de circulación',
        'Reparaciones de emergencia 24/7'
    ];

    const materials = [
        {
            title: 'PVC',
            description: 'Resistente y económico, ideal para la mayoría de piscinas',
            icon: Shield
        },
        {
            title: 'Polietileno',
            description: 'Flexible y duradero, perfecto para instalaciones complejas',
            icon: Shield
        },
        {
            title: 'PVC Presión',
            description: 'Alta resistencia para sistemas de alta presión',
            icon: Shield
        }
    ];

    const problems = [
        {
            title: 'Fugas Visibles',
            description: 'Pérdida evidente de agua en conexiones o tuberías',
            severity: 'high'
        },
        {
            title: 'Baja Presión',
            description: 'Disminución del caudal en jets y sistemas de retorno',
            severity: 'medium'
        },
        {
            title: 'Ruidos Extraños',
            description: 'Silbidos o ruidos en el sistema de circulación',
            severity: 'medium'
        },
        {
            title: 'Tuberías Antiguas',
            description: 'Más de 15 años sin renovación del sistema',
            severity: 'low'
        }
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="text-center items-center bg-[var(--color-navbar)]">
                <div className="space-y-4 py-8 max-w-3xl mx-auto text-white">
                    <h1>Reparación de Tuberías de Piscinas</h1>
                    <p>Solución profesional para todo tipo de averías en el sistema de tuberías. Reparaciones duraderas con materiales de primera calidad.</p>
                    <div className="flex gap-8 items-center text-center justify-center">
                        <Button variant={'outline'}>Solicitar Inspección</Button>
                        <Button variant={'ghost'}>Contactar</Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Servicios de Reparación</h2>
                            <p className="text-gray-600 mb-8">
                                Nuestro equipo de técnicos especializados cuenta con más de 15 años de experiencia
                                en reparación de tuberías de piscinas. Trabajamos con los mejores materiales
                                y ofrecemos garantía en todas nuestras reparaciones.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 p-4 rounded-lg shadow-lg shadow-orange-100">
                                <CardHeader>
                                    <CardTitle>Proceso de Reparación</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Diagnóstico</h3>
                                            <p className="text-sm text-gray-600">Localización exacta del problema</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Presupuesto</h3>
                                            <p className="text-sm text-gray-600">Valoración detallada sin compromiso</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Reparación</h3>
                                            <p className="text-sm text-gray-600">Trabajo profesional con materiales premium</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            4
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Pruebas</h3>
                                            <p className="text-sm text-gray-600">Verificación completa del sistema</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            5
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Garantía</h3>
                                            <p className="text-sm text-gray-600">Cobertura completa de la reparación</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Materiales de Primera Calidad</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Utilizamos solo los mejores materiales para garantizar reparaciones duraderas
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {materials.map((material, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow rounded-lg p-6">
                                <CardContent className="pt-6">
                                    <material.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">{material.title}</h3>
                                    <p className="text-sm text-gray-600">{material.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center mb-12">Problemas Comunes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {problems.map((problem, index) => (
                            <Card key={index} className={`border-2 p-4 rounded-lg shadow-lg ${problem.severity === 'high' ? 'border-red-200 bg-red-50' :
                                problem.severity === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                                    'border-blue-200 bg-blue-50'
                                }`}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <AlertCircle className={`h-5 w-5 ${problem.severity === 'high' ? 'text-red-600' :
                                                problem.severity === 'medium' ? 'text-yellow-600' :
                                                    'text-blue-600'
                                                }`} />
                                            {problem.title}
                                        </CardTitle>
                                        <Badge className={
                                            problem.severity === 'high' ? 'bg-red-100 text-red-700 border-red-200' :
                                                problem.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                                                    'bg-blue-100 text-blue-700 border-blue-200'
                                        }>
                                            {problem.severity === 'high' ? 'Urgente' :
                                                problem.severity === 'medium' ? 'Importante' : 'Preventivo'}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-700">{problem.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-600/50 to-orange-800/50 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Wrench className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">¿Problemas con las tuberías de tu piscina?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        No dejes que una fuga se convierta en un problema mayor.
                        Ofrecemos servicio de reparación rápido y profesional con garantía.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-white/90"
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