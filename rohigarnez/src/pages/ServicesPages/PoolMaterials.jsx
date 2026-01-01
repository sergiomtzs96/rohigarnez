import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
    Package,
    Droplets,
    Sparkles,
    Wrench,
    TestTube,
    Lightbulb,
    Waves,
    Shield,
    CheckCircle,
    Brush,
    PlayCircle,
    Settings,
    Star,
    TrendingUp,
    ShoppingCart,
    Award,
    Truck,
    Clock
} from 'lucide-react';

export default function PoolMaterials() {

    const categories = [
        {
            title: 'Productos Químicos',
            description: 'Tratamiento y mantenimiento del agua',
            icon: <TestTube className="w-8 h-8" />,
            color: 'bg-blue-500',
            items: [
                'Cloro (pastillas, granulado, líquido)',
                'Reguladores de pH (ácido, alcalino)',
                'Algicidas de acción rápida',
                'Floculantes y clarificadores',
                'Antiincrustantes y descalcificadores',
                'Productos para electrólisis salina',
                'Kits de análisis de agua',
                'Sal especial para cloradores'
            ]
        },
        {
            title: 'Limpieza y Mantenimiento',
            description: 'Herramientas y accesorios de limpieza',
            icon: <Brush className="w-8 h-8" />,
            color: 'bg-green-500',
            items: [
                'Limpiafondos manuales y automáticos',
                'Cepillos para paredes y fondo',
                'Recogehojas superficial y fondo',
                'Pértigas telescópicas',
                'Aspiradores de batería',
                'Robots limpiadores eléctricos',
                'Mangueras de limpieza',
                'Cabezales de aspiración'
            ]
        },
        {
            title: 'Repuestos y Accesorios',
            description: 'Piezas de recambio para instalaciones',
            icon: <Settings className="w-8 h-8" />,
            color: 'bg-orange-500',
            items: [
                'Boquillas de impulsión e inhalación',
                'Tapones y roscas',
                'Juntas tóricas y planas',
                'Crepinas de filtro',
                'Válvulas selectoras',
                'Manómetros',
                'Cestillos de bomba y skimmer',
                'Difusores y toberas'
            ]
        },
        {
            title: 'Iluminación LED',
            description: 'Focos y sistemas de iluminación',
            icon: <Lightbulb className="w-8 h-8" />,
            color: 'bg-yellow-500',
            items: [
                'Focos LED RGB multicolor',
                'Focos LED blancos de bajo consumo',
                'Transformadores y controladores',
                'Proyectores para fuentes',
                'Tiras LED para perímetro',
                'Sistemas con control remoto',
                'Focos para spa y jacuzzi',
                'Iluminación flotante decorativa'
            ]
        },
        {
            title: 'Accesorios de Confort',
            description: 'Para mejorar la experiencia de baño',
            icon: <Waves className="w-8 h-8" />,
            color: 'bg-purple-500',
            items: [
                'Escaleras de acero inoxidable',
                'Duchas solares',
                'Termómetros digitales',
                'Dosificadores flotantes',
                'Cojines y colchonetas',
                'Hamacas flotantes',
                'Barandillas de seguridad',
                'Peldaños antideslizantes'
            ]
        },
        {
            title: 'Recreación y Juegos',
            description: 'Diversión para toda la familia',
            icon: <PlayCircle className="w-8 h-8" />,
            color: 'bg-pink-500',
            items: [
                'Flotadores y manguitos',
                'Colchonetas inflables',
                'Juegos acuáticos',
                'Pelotas y aros',
                'Toboganes portátiles',
                'Canastas de baloncesto',
                'Redes de voleibol',
                'Hinchables gigantes'
            ]
        }
    ];

    const brands = [
        { name: 'CTX', specialty: 'Productos Químicos', rating: 5 },
        { name: 'Zodiac', specialty: 'Limpieza y Repuestos', rating: 5 },
        { name: 'Astralpool', specialty: 'Equipamiento Integral', rating: 5 },
        { name: 'Bayrol', specialty: 'Químicos Premium', rating: 5 },
        { name: 'Maytronics', specialty: 'Robots Limpiadores', rating: 5 },
        { name: 'Pentair', specialty: 'Iluminación LED', rating: 5 }
    ];

    const advantages = [
        {
            title: 'Stock Permanente',
            description: 'Disponibilidad inmediata de los productos más demandados',
            icon: <Package className="w-6 h-6" />,
            highlight: 'Entrega 24-48h'
        },
        {
            title: 'Primeras Marcas',
            description: 'Solo trabajamos con fabricantes de reconocido prestigio',
            icon: <Award className="w-6 h-6" />,
            highlight: 'Calidad Garantizada'
        },
        {
            title: 'Precios Competitivos',
            description: 'Los mejores precios gracias a compras por volumen',
            icon: <TrendingUp className="w-6 h-6" />,
            highlight: 'Ahorra hasta 30%'
        },
        {
            title: 'Asesoramiento Técnico',
            description: 'Te ayudamos a elegir el producto adecuado',
            icon: <Shield className="w-6 h-6" />,
            highlight: 'Expertos Disponibles'
        }
    ];

    const services = [
        {
            title: 'Pedido por Teléfono/Email',
            description: 'Contacta con nosotros y te preparamos tu pedido',
            icon: <ShoppingCart className="w-8 h-8" />,
            time: 'Inmediato'
        },
        {
            title: 'Entrega a Domicilio',
            description: 'Servicio de entrega en 24-48h en toda la zona',
            icon: <Truck className="w-8 h-8" />,
            time: '24-48 horas'
        },
        {
            title: 'Recogida en Almacén',
            description: 'Recoge tu pedido cuando prefieras sin coste',
            icon: <Clock className="w-8 h-8" />,
            time: 'Mismo día'
        }
    ];

    const chemicalPacks = [
        {
            name: 'Pack Mantenimiento Básico',
            description: 'Lo esencial para el día a día',
            price: 'Desde 75€',
            items: [
                'Cloro en pastillas 5kg',
                'Regulador pH 5L',
                'Algicida 1L',
                'Kit análisis de agua'
            ],
            ideal: 'Piscinas hasta 40m³'
        },
        {
            name: 'Pack Mantenimiento Completo',
            description: 'Tratamiento integral profesional',
            price: 'Desde 150€',
            items: [
                'Cloro en pastillas 10kg',
                'Regulador pH 10L',
                'Algicida 3L',
                'Floculante 1kg',
                'Clarificador 1L',
                'Kit análisis profesional'
            ],
            ideal: 'Piscinas 40-80m³',
            recommended: true
        },
        {
            name: 'Pack Comunidades',
            description: 'Para piscinas comunitarias',
            price: 'Desde 300€',
            items: [
                'Cloro en pastillas 25kg',
                'Regulador pH 25L',
                'Algicida 5L',
                'Floculante 5kg',
                'Antiincrustante 5L',
                'Test profesional multirango'
            ],
            ideal: 'Piscinas +80m³'
        }
    ];

    const cleaningEquipment = [
        {
            name: 'Kit Limpieza Manual',
            price: '95€',
            items: ['Limpiafondos', 'Recogehojas', 'Cepillo', 'Pértiga 3m']
        },
        {
            name: 'Robot Limpiafondos',
            price: 'Desde 450€',
            items: ['Robot autónomo', 'Cable 15m', '2 años garantía']
        },
        {
            name: 'Pack Premium Limpieza',
            price: '850€',
            items: ['Robot inteligente', 'Aspirador batería', 'Accesorios completos']
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/95 to-pink-800/95"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="mb-6 text-white">Materiales de Piscina</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Suministro completo de productos químicos, accesorios, repuestos y equipamiento
                        para piscinas. Las mejores marcas al mejor precio con entrega rápida.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Star className="w-4 h-4 mr-2" />
                            Primeras Marcas
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Truck className="w-4 h-4 mr-2" />
                            Entrega 24-48h
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Shield className="w-4 h-4 mr-2" />
                            Stock Permanente
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('contact')}
                            size="lg"
                            className="bg-white text-pink-600 hover:bg-white/90"
                        >
                            Solicitar Catálogo
                        </Button>
                        <Button
                            onClick={() => onNavigate('quote')}
                            size="lg"
                            variant="ghost"
                            className="border-white text-white hover:bg-white/10"
                        >
                            Hacer Pedido
                        </Button>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">¿Por Qué Comprar con Nosotros?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Años de experiencia en el sector nos avalan como tu proveedor de confianza
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <Card key={index} className="text-center rounded-lg group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        {advantage.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-pink-600 mb-2">{advantage.highlight}</div>
                                    <h4 className="mb-2 font-semibold">{advantage.title}</h4>
                                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Catálogo Completo</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Todo lo que necesitas para tu piscina en un solo lugar
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <Card key={index} className="rounded-lg hover:shadow-lg transition-shadow">
                                <CardHeader className={`${category.color} text-white p-4 rounded-t-lg`}>
                                    <div className="flex items-center gap-3">
                                        {category.icon}
                                        <div>
                                            <CardTitle className="text-lg">{category.title}</CardTitle>
                                            <p className="text-sm text-white/80">{category.description}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chemical Packs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Packs de Productos Químicos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ahorra comprando packs completos adaptados al tamaño de tu piscina
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {chemicalPacks.map((pack, index) => (
                            <Card key={index} className={`relative flex flex-col h-full rounded-lg ${pack.recommended ? 'ring-2 ring-pink-600 shadow-lg' : ''}`}>
                                {pack.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-pink-600 text-white">
                                            Más Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <div className="text-center mb-6">
                                        <TestTube className={`w-12 h-12 mx-auto mb-3 ${pack.recommended ? 'text-pink-600' : 'text-gray-400'}`} />
                                        <h3 className="mb-2 font-semibold text-lg">{pack.name}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{pack.description}</p>
                                        <div className="text-3xl font-bold text-pink-600 mb-2">{pack.price}</div>
                                        <Badge variant="outline">{pack.ideal}</Badge>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {pack.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${pack.recommended ? 'bg-pink-600 text-white hover:bg-pink-700' : ''}`}
                                        variant={pack.recommended ? 'default' : 'outline'}
                                        onClick={() => onNavigate('contact')}
                                    >
                                        Solicitar Pack
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cleaning Equipment */}
            <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Equipos de Limpieza</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Desde kits básicos hasta robots inteligentes de última generación
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {cleaningEquipment.map((equipment, index) => (
                            <Card key={index} className="flex flex-col h-full rounded-lg hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                                    <Brush className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">{equipment.name}</h3>
                                    <div className="text-2xl font-bold text-pink-600 mb-4">{equipment.price}</div>
                                    <ul className="space-y-2 mb-6">
                                        {equipment.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-sm text-gray-600">• {item}</li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full" onClick={() => onNavigate('contact')}>
                                        Consultar
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Marcas de Confianza</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Trabajamos exclusivamente con las mejores marcas del sector
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brands.map((brand, index) => (
                            <Card key={index} className="rounded-lg hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="flex items-center justify-center gap-1 mb-2">
                                        {[...Array(brand.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    <h3 className="font-semibold text-xl mb-1">{brand.name}</h3>
                                    <p className="text-sm text-gray-600">{brand.specialty}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Modalidades de Compra</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Elige la opción que más te convenga
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="rounded-lg text-center group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                    <Badge className="bg-pink-100 text-pink-700">{service.time}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-8 border-pink-600 rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Sparkles className="w-8 h-8 text-pink-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-2 text-lg">Descuentos por Volumen</h4>
                                    <p className="text-gray-600 mb-3">
                                        Ofrecemos descuentos especiales para comunidades de propietarios, empresas de
                                        mantenimiento y compras de gran volumen. Consulta condiciones especiales sin compromiso.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Descuentos desde 5%</Badge>
                                        <Badge variant="outline">Pago aplazado disponible</Badge>
                                        <Badge variant="outline">Facturación mensual</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Package className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="mb-4">¿Necesitas Material para tu Piscina?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Contacta con nosotros para solicitar catálogo completo con precios,
                        realizar tu pedido o consultar disponibilidad de productos específicos.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => onNavigate('contact')}
                            size="lg"
                            className="bg-white text-pink-600 hover:bg-white/90"
                        >
                            Contactar Ahora
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