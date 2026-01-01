import { Hammer, CheckCircle, AlertTriangle, Shield, Eye } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function CrackRepair() {

    const crackTypes = [
        {
            title: 'Grietas Superficiales',
            description: 'Fisuras en el revestimiento sin afectar la estructura',
            solution: 'Sellado y retoque cosmético'
        },
        {
            title: 'Grietas Estructurales',
            description: 'Fracturas que afectan la estructura del vaso',
            solution: 'Reparación en profundidad y refuerzo'
        },
        {
            title: 'Grietas en Esquinas',
            description: 'Fracturas en uniones de paredes y suelo',
            solution: 'Sellado especializado con resinas'
        },
        {
            title: 'Grietas en Revestimiento',
            description: 'Roturas en gresite o pintura',
            solution: 'Reparación y reposición del material'
        }
    ];

    const process = [
        'Inspección detallada y valoración in situ',
        'Análisis del tipo y gravedad de la grieta',
        'Preparación de la superficie afectada',
        'Aplicación de materiales específicos',
        'Sellado y refuerzo de la zona',
        'Acabado estético igualado al original',
        'Prueba de estanqueidad',
        'Garantía de la reparación'
    ];

    return (

        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">     
                        <h1 className="mb-6">
                            Reparación de Grietas<br />en Piscinas
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Solución profesional para grietas en el vaso de tu piscina.
                            Valoración gratuita in situ y presupuesto sin compromiso.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => onNavigate('quote')}
                                size="lg"
                                className="bg-white text-red-600 hover:bg-white/90"
                            >
                                Solicitar Valoración
                            </Button>
                            <Button
                                onClick={() => onNavigate('contact')}
                                size="lg"
                                variant="ghost"
                                className="border-white text-white hover:bg-white/10"
                            >
                                Contactar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warning Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 p-6 rounded-lg shadow-lg shadow-red-100">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-orange-600" />
                                ¿Por qué es importante reparar las grietas?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-3 text-gray-900">Consecuencias de no reparar:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-600">•</span>
                                            <span className="text-sm">Pérdida continua de agua</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-600">•</span>
                                            <span className="text-sm">Deterioro progresivo de la estructura</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-600">•</span>
                                            <span className="text-sm">Daños en el terreno circundante</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-600">•</span>
                                            <span className="text-sm">Aumento del coste de reparación</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-gray-900">Beneficios de reparar a tiempo:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">Evita problemas mayores</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">Ahorro económico a largo plazo</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">Mantiene el valor de la piscina</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">Garantiza la seguridad</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Tipos de Grietas que Reparamos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Cada grieta requiere un análisis y tratamiento específico
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {crackTypes.map((type, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow p-6 rounded-lg">
                                <CardHeader>
                                    <CardTitle>{type.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Shield className="h-4 w-4 text-red-600" />
                                        <span className="font-semibold text-red-700">Solución:</span>
                                        <span className="text-gray-700">{type.solution}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="mb-6">Proceso de Reparación</h2>
                            <p className="text-gray-600 mb-8">
                                Seguimos un protocolo riguroso para garantizar reparaciones duraderas
                                y estéticamente perfectas. Cada caso requiere una valoración previa in situ
                                para determinar el mejor método de reparación.
                            </p>
                            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 p-4 rounded-lg shadow-md">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Eye className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Valoración Gratuita In Situ</h3>
                                            <p className="text-sm text-gray-700">
                                                Nuestros técnicos acuden a inspeccionar la grieta personalmente.
                                                Solo así podemos determinar la causa y la solución más adecuada.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {process.map((step, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border hover:scale-105 transition-scale duration-300 ">
                                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <span className="text-sm text-gray-700 mt-1">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg shadow-red-100">
                        <CardContent className="py-12">
                            <div className="text-center">
                                <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
                                <h2 className="text-3xl mb-4">Garantía en Todas Nuestras Reparaciones</h2>
                                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                                    Ofrecemos garantía completa en todas nuestras reparaciones de grietas.
                                    Trabajamos con materiales de primera calidad y técnicas profesionales
                                    para asegurar resultados duraderos.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2">Materiales Premium</h3>
                                        <p className="text-sm text-white/80">Resinas y selladores de máxima calidad</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2">Técnicos Expertos</h3>
                                        <p className="text-sm text-white/80">Más de 15 años de experiencia</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2">Seguimiento</h3>
                                        <p className="text-sm text-white/80">Revisión post-reparación incluida</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Hammer className="h-16 w-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl mb-4">¿Has detectado grietas en tu piscina?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Solicita una valoración gratuita in situ. Analizaremos el problema
                        y te proporcionaremos un presupuesto detallado sin compromiso.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            className="bg-white text-red-600 hover:bg-white/90"
                        >
                            Solicitar Valoración Gratuita
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