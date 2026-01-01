

const servicesData = [
    {
        id: 1,
        title: 'Mantenimiento de piscinas comunitarias',
        description: 'Ofrecemos servicios completos de mantenimiento para piscinas comunitarias, asegurando que estén limpias, seguras y en óptimas condiciones durante todo el año.',
        titleServices: 'Servicios incluidos',
        descriptionServices: 'Limpieza regular, control de calidad del agua, inspección de equipos, reparaciones menores y asesoramiento técnico para la gestión de piscinas comunitarias.',
        services: [
            {
                title: 'Control Químico Diario',
                description: 'Análisis y ajuste de pH, cloro, alcalinidad y otros parámetros químicos',
                icon: Droplets,
            },
            {
                title: 'Limpieza Integral',
                description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                icon: Settings,
            },
            {
                title: 'Mantenimiento Preventivo',
                description: 'Revisión de equipos, bombas, sistemas de filtración y automatización',
                icon: Shield,
            },
            {
                title: 'Informes de Gestión',
                description: 'Reportes detallados de estado, consumos y recomendaciones',
                icon: FileText,
            },
            {
                title: 'Servicio de Urgencias',
                description: 'Atención inmediata para problemas críticos las 24 horas',
                icon: Phone,
            },
            {
                title: 'Cumplimiento Normativo',
                description: 'Garantía de cumplimiento de todas las normativas sanitarias',
                icon: Award,
            }
        ],
        titleBenefits: '¿Por qué elegir nuestro servicio?',
        descriptionBenefits: 'Nuestro equipo de profesionales altamente capacitados utiliza tecnología avanzada y productos ecológicos para garantizar que su piscina comunitaria esté siempre en las mejores condiciones, proporcionando un entorno seguro y agradable para todos los usuarios.',
        benefits: [
            {
                title: 'Ahorro Económico',
                description: 'Reducción de costes operativos hasta un 30% mediante mantenimiento preventivo',
                icon: Target,
                highlight: '30% Ahorro'
            },
            {
                title: 'Tranquilidad Total',
                description: 'Gestión completa sin preocupaciones para la comunidad de propietarios',
                icon: Heart,
                highlight: '0 Preocupaciones'
            },
            {
                title: 'Cumplimiento Legal',
                description: 'Garantía de cumplimiento de todas las normativas sanitarias vigentes',
                icon: Shield,
                highlight: '100% Legal'
            },
            {
                title: 'Disponibilidad',
                description: 'Piscina siempre lista para el disfrute de todos los vecinos',
                icon: CheckCircle,
                highlight: '365 Días'
            }
        ],
        titlePackages: 'Nuestros paquetes de mantenimiento',
        descriptionPackages: 'Ofrecemos varios paquetes de mantenimiento adaptados a las necesidades específicas de su comunidad, desde servicios básicos hasta soluciones integrales.',
        packages: [
            {
                name: 'Básico',
                price: 'Desde 180€/mes',
                description: 'Ideal para comunidades pequeñas (hasta 50 viviendas)',
                features: [
                    'Control químico 3 veces/semana',
                    'Limpieza semanal',
                    'Mantenimiento básico mensual',
                    'Informe trimestral',
                    'Soporte telefónico'
                ],
                recommended: false
            },
            {
                name: 'Estándar',
                price: 'Desde 280€/mes',
                description: 'Perfecto para comunidades medianas (50-150 viviendas)',
                features: [
                    'Control químico diario',
                    'Limpieza bi-semanal',
                    'Mantenimiento preventivo mensual',
                    'Informe mensual detallado',
                    'Servicio de urgencias',
                    'Gestión de productos químicos'
                ],
                recommended: true
            },
            {
                name: 'Premium',
                price: 'Desde 450€/mes',
                description: 'Solución completa para grandes comunidades (+150 viviendas)',
                features: [
                    'Control químico automatizado',
                    'Limpieza diaria en temporada alta',
                    'Mantenimiento preventivo quincenal',
                    'Informes semanales digitales',
                    'Servicio 24/7 todo el año',
                    'Gestión completa de instalaciones',
                    'Asesoramiento en mejoras'
                ],
                recommended: false
            }
        ],
        titleReviews: 'Lo que dicen nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la calidad, fiabilidad y profesionalismo de nuestros servicios de mantenimiento de piscinas comunitarias.',
        reviews: [
            {
                text: 'Desde que contratamos a AquaClean Pro, nuestra piscina comunitaria nunca ha estado mejor. Siempre está perfecta y los vecinos están encantados.',
                author: 'María González',
                role: 'Presidenta Comunidad Los Naranjos',
                rating: 5
            },
            {
                text: 'Profesionales, puntuales y muy competentes. Los informes mensuales nos permiten tener todo controlado y justificado ante los vecinos.',
                author: 'José Luis Martín',
                role: 'Administrador Urbanización El Prado',
                rating: 5
            },
            {
                text: 'El servicio de urgencias nos salvó en varias ocasiones. Respuesta rápida y soluciones efectivas. Muy recomendable.',
                author: 'Carmen Ruiz',
                role: 'Administradora Residencial Bellavista',
                rating: 5
            }
        ]
    },
    {
        id: 2,
        title: 'Piscinas con y sin socorrista',
        description: 'Ofrecemos servicios de gestión y mantenimiento para piscinas residenciales y comunitarias, tanto con socorrista como sin él, adaptándonos a las necesidades específicas de cada cliente.',
        titleServices: '¿Cuándo necesitas socorrista?',
        descriptionServices: 'Contar con un socorrista profesional es esencial para garantizar la seguridad en piscinas comunitarias y residenciales, especialmente durante la temporada alta. Evaluamos las necesidades de cada piscina para ofrecer el servicio adecuado.',
        servicesSocorrista: [
            {
                title: 'Vigilancia Activa',
                description: 'Supervisión constante de la actividad acuática y prevención de accidentes',
                icon: Eye,
                critical: true
            },
            {
                title: 'Primeros Auxilios',
                description: 'Atención inmediata en caso de emergencias con certificación oficial',
                icon: Heart,
                critical: true
            },
            {
                title: 'Control de Aforo',
                description: 'Gestión del número de bañistas según normativa vigente',
                icon: Users,
                critical: false
            },
            {
                title: 'Cumplimiento Normativo',
                description: 'Verificación de cumplimiento de todas las normativas de seguridad',
                icon: FileText,
                critical: true
            },

        ],
        servicesSinSocorrista: [
            {
                title: 'Control Químico Avanzado',
                description: 'Monitorización y ajuste continuo de parámetros químicos',
                icon: Droplets,
                frequency: 'Continuo'
            },
            {
                title: 'Control de Temperatura',
                description: 'Mantenimiento de temperatura óptima según normativa',
                icon: ThermometerSun,
                frequency: 'Diario'
            },
            {
                title: 'Limpieza Intensiva',
                description: 'Limpieza reforzada por mayor uso y exigencias sanitarias',
                icon: Settings,
                frequency: 'Diario'
            },
            {
                title: 'Registros Oficiales',
                description: 'Documentación obligatoria para inspecciones sanitarias',
                icon: BookOpen,
                frequency: 'Continuo'
            }
        ],
        titleRegulations: 'Marco Normativo',
        descriptionRegulations: 'El servicio de socorrista en piscinas comunitarias está regulado por normativas específicas que varían según la ubicación. Es fundamental cumplir con estas regulaciones para garantizar la seguridad y el bienestar de los usuarios.',
        regulations: [
            {
                title: 'RD 742/2013',
                description: 'Criterios técnico-sanitarios de piscinas',
                requirements: [
                    'Socorrista obligatorio si profundidad &gt; 1,5m',
                    'Ratio máximo: 1 socorrista por 200m² de lámina',
                    'Certificación en salvamento acuático',
                    'Botiquín y material de primeros auxilios'
                ]
            },
            {
                title: 'Normativa Autonómica',
                description: 'Requisitos específicos de Andalucía',
                requirements: [
                    'Decreto 23/1999 sobre piscinas de uso público',
                    'Control de calidad del agua reforzado',
                    'Registros diarios obligatorios',
                    'Inspecciones sanitarias periódicas'
                ]
            }
        ],
        titlePackages: 'Planes de servicio',
        descriptionPackages: 'Ofrecemos planes de servicio flexibles para piscinas con y sin socorrista, adaptados a las necesidades específicas de cada cliente.',
        packages: [
            {
                name: 'Sin Socorrista',
                subtitle: 'Piscinas de profundidad ≤ 1,5m',
                price: 'Desde 220€/mes',
                description: 'Mantenimiento especializado sin necesidad de socorrista',
                features: [
                    'Control químico diario reforzado',
                    'Limpieza diaria en temporada alta',
                    'Registros oficiales completos',
                    'Control de temperatura continuo',
                    'Informes semanales',
                    'Cumplimiento normativo garantizado'
                ],
                recommended: false,
                compliance: 'Cumple RD 742/2013'
            },
            {
                name: 'Con Socorrista',
                subtitle: 'Piscinas de profundidad &gt; 1,5m',
                price: 'Desde 580€/mes',
                description: 'Servicio completo con socorrista titulado',
                features: [
                    'Socorrista titulado en horario de apertura',
                    'Control químico automatizado',
                    'Limpieza y mantenimiento diario',
                    'Primeros auxilios certificados',
                    'Control de aforo y seguridad',
                    'Registros oficiales digitalizados',
                    'Coordinación con servicios de emergencia'
                ],
                recommended: true,
                compliance: 'Cumple toda la normativa'
            },
            {
                name: 'Premium Integral',
                subtitle: 'Gestión completa todo incluido',
                price: 'Desde 850€/mes',
                description: 'Solución integral con gestión avanzada',
                features: [
                    'Equipo de socorristas (2+ personas)',
                    'Sistemas de control automatizados',
                    'Mantenimiento preventivo semanal',
                    'Gestión de químicos y productos',
                    'Asesoramiento legal continuo',
                    'Formación de personal auxiliar',
                    'Servicio 24/7 todo el año'
                ],
                recommended: false,
                compliance: 'Excelencia normativa'
            }
        ],
        titleReviews: 'Opiniones de nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la seguridad, profesionalismo y eficacia de nuestros servicios de piscinas con y sin socorrista.',
        reviews: [
            {
                text: 'La profesionalidad de sus socorristas es excepcional. Los padres pueden estar tranquilos sabiendo que sus hijos están en buenas manos.',
                author: 'Miguel Rodríguez',
                role: 'Director Club Deportivo Marina',
                type: 'with-lifeguard',
                rating: 5
            },
            {
                text: 'Para nuestra piscina infantil, el servicio sin socorrista es perfecto. Cumplen toda la normativa con un coste muy ajustado.',
                author: 'Ana Fernández',
                role: 'Administradora Residencial Los Pinos',
                type: 'without-lifeguard',
                rating: 5
            }
        ]
    },
    {
        id: 3,
        title: 'Piscinas de obra nueva',
        description: 'Ofrecemos servicios especializados para el diseño, construcción y mantenimiento de piscinas en proyectos de obra nueva, asegurando calidad, durabilidad y estética.',
        titlePhases: 'Proceso de construcción',
        descriptionPhases: 'Nuestro proceso de construcción se divide en varias fases clave para garantizar resultados óptimos.',
        phases: [
            {
                phase: '01',
                title: 'Diseño y Planificación',
                duration: '7-10 días',
                description: 'Análisis del espacio, diseño personalizado y obtención de permisos',
                tasks: [
                    'Visita técnica y medición del terreno',
                    'Diseño 3D personalizado',
                    'Selección de materiales y acabados',
                    'Tramitación de licencias'
                ],
                icon: Ruler
            },
            {
                phase: '02',
                title: 'Excavación y Estructura',
                duration: '5-7 días',
                description: 'Preparación del terreno y construcción de la estructura base',
                tasks: [
                    'Excavación con maquinaria especializada',
                    'Hormigonado de solera',
                    'Montaje de estructura de hormigón',
                    'Instalación de sistemas de drenaje'
                ],
                icon: Settings
            },
            {
                phase: '03',
                title: 'Impermeabilización',
                duration: '3-5 días',
                description: 'Aplicación de sistemas de impermeabilización de máxima calidad',
                tasks: [
                    'Preparación de superficies',
                    'Aplicación de impermeabilizante',
                    'Pruebas de estanqueidad',
                    'Certificación de calidad'
                ],
                icon: Shield
            },
            {
                phase: '04',
                title: 'Instalaciones',
                duration: '5-8 días',
                description: 'Montaje de equipos de filtración, iluminación y automatización',
                tasks: [
                    'Instalación de sistema de filtración',
                    'Montaje de iluminación LED',
                    'Sistemas de limpieza automática',
                    'Automatización y control'
                ],
                icon: Zap
            },
            {
                phase: '05',
                title: 'Acabados',
                duration: '7-10 días',
                description: 'Revestimientos, coronación y elementos decorativos finales',
                tasks: [
                    'Colocación de revestimiento',
                    'Instalación de coronación',
                    'Elementos decorativos',
                    'Paisajismo integrado'
                ],
                icon: Palette
            },
            {
                phase: '06',
                title: 'Puesta en Marcha',
                duration: '2-3 días',
                description: 'Llenado, equilibrado químico y formación al cliente',
                tasks: [
                    'Llenado y equilibrado inicial',
                    'Puesta en marcha de equipos',
                    'Formación al cliente',
                    'Entrega de documentación'
                ],
                icon: CheckCircle
            }
        ],
        titleFeatures: 'Equipamiento y Características',
        descriptionFeatures: 'Equipamiento de última generación y características personalizadas para cada proyecto.',
        features: [
            {
                title: 'Sistemas de Filtración',
                description: 'Equipos Hayward y Pentair de máximo rendimiento',
                icon: Droplets,
                options: ['Filtros de arena', 'Sistemas de cartuchos', 'Filtración con ozono']
            },
            {
                title: 'Iluminación LED',
                description: 'Sistemas RGB programables con control remoto',
                icon: Lightbulb,
                options: ['LED RGB multicolor', 'Control por app móvil', 'Programación automática']
            },
            {
                title: 'Calefacción',
                description: 'Bombas de calor y sistemas solares eficientes',
                icon: Thermometer,
                options: ['Bomba de calor', 'Calentadores solares', 'Intercambiadores de calor']
            },
            {
                title: 'Automatización',
                description: 'Control inteligente de todos los sistemas',
                icon: Settings,
                options: ['Control químico automático', 'Limpieza robotizada', 'Gestión por app']
            },
            {
                title: 'Cloración Salina',
                description: 'Sistemas ecológicos de desinfección',
                icon: Sparkles,
                options: ['Cloradores Zodiac', 'Control automático pH', 'Bajo mantenimiento']
            },
            {
                title: 'Elementos Especiales',
                description: 'Características premium personalizables',
                icon: Star,
                options: ['Cascadas y jets', 'Sistemas infinity', 'Zonas de hidromasaje']
            }
        ],
        titleMaterials: 'Materiales y acabados',
        descriptionMaterials: 'Selección de materiales de alta calidad para un acabado duradero y estético.',
        materials: [
            {
                category: 'Revestimiento',
                options: [
                    { name: 'Gresite Premium', description: 'Mosaico vítreo de máxima calidad', price: 'desde 45€/m²' },
                    { name: 'Liner Armado', description: 'Membrana de PVC reforzado', price: 'desde 25€/m²' },
                    { name: 'Poliéster', description: 'Gelcoat con fibra de vidrio', price: 'desde 35€/m²' }
                ]
            },
            {
                category: 'Coronación',
                options: [
                    { name: 'Piedra Porcelánica', description: 'Rosa Gres antideslizante', price: 'desde 55€/m²' },
                    { name: 'Piedra Natural', description: 'Caliza o travertino', price: 'desde 40€/m²' },
                    { name: 'Hormigón Pulido', description: 'Acabado contemporáneo', price: 'desde 30€/m²' }
                ]
            }
        ],
        titlePackages: 'Planes de construcción',
        descriptionPackages: 'Ofrecemos planes de construcción flexibles adaptados a las necesidades de cada proyecto de obra nueva.',
        packages: [
            {
                name: 'Esencial',
                size: '6x3m',
                price: 'Desde 18.500€',
                description: 'Piscina completa con acabados de calidad',
                features: [
                    'Estructura de hormigón armado',
                    'Impermeabilización Renolit',
                    'Revestimiento liner armado',
                    'Coronación hormigón pulido',
                    'Depuradora básica',
                    'Escalera acero inoxidable',
                    'Garantía 10 años estructura'
                ],
                recommended: false
            },
            {
                name: 'Confort',
                size: '8x4m',
                price: 'Desde 28.900€',
                description: 'Piscina con equipamiento avanzado',
                features: [
                    'Todo lo incluido en Esencial',
                    'Revestimiento gresite premium',
                    'Coronación piedra porcelánica',
                    'Iluminación LED RGB',
                    'Clorador salino Zodiac',
                    'Bomba de calor',
                    'Control automático pH',
                    'Garantía 15 años'
                ],
                recommended: true
            },
            {
                name: 'Premium',
                size: '10x5m',
                price: 'Desde 45.000€',
                description: 'Piscina de lujo totalmente equipada',
                features: [
                    'Todo lo incluido en Confort',
                    'Sistema infinity opcional',
                    'Cascadas y jets de masaje',
                    'Automatización completa',
                    'Robot limpiafondos',
                    'Sistema de calefacción solar',
                    'Control por app móvil',
                    'Paisajismo integrado',
                    'Garantía 20 años'
                ],
                recommended: false
            }
        ]
    },
    {
        id: 4,
        title: 'Rehabilitación de piscinas',
        description: 'Servicios especializados en la rehabilitación y renovación de piscinas existentes.',
        titleProblems: 'Problemas comunes',
        descriptionProblems: 'Identificación y solución de problemas frecuentes en piscinas.',
        problems: [
            {
                problem: 'Fugas y Filtraciones',
                symptoms: ['Pérdida constante de agua', 'Humedad en alrededores', 'Grietas visibles'],
                solution: 'Impermeabilización completa con materiales Renolit',
                urgency: 'high',
                icon: Droplets
            },
            {
                problem: 'Revestimiento Deteriorado',
                symptoms: ['Gresite despegado', 'Superficie rugosa', 'Decoloración'],
                solution: 'Renovación completa del revestimiento',
                urgency: 'medium',
                icon: Palette
            },
            {
                problem: 'Equipos Obsoletos',
                symptoms: ['Alto consumo energético', 'Averías frecuentes', 'Filtración deficiente'],
                solution: 'Modernización con equipos eficientes',
                urgency: 'medium',
                icon: Settings
            },
            {
                problem: 'Estructura Dañada',
                symptoms: ['Fisuras en hormigón', 'Desplomes', 'Problemas estructurales'],
                solution: 'Refuerzo estructural y reparación',
                urgency: 'high',
                icon: Hammer
            }
        ],
        titlePhases: 'Fases de rehabilitación',
        descriptionPhases: 'Descripción de las fases del proceso de rehabilitación.',
        phases: [
            {
                step: '01',
                title: 'Diagnóstico Completo',
                duration: '1-2 días',
                description: 'Evaluación exhaustiva del estado actual de la piscina',
                activities: [
                    'Inspección visual detallada',
                    'Pruebas de estanqueidad',
                    'Análisis de equipos existentes',
                    'Informe técnico con propuestas'
                ]
            },
            {
                step: '02',
                title: 'Vaciado y Preparación',
                duration: '1-2 días',
                description: 'Preparación completa para los trabajos de rehabilitación',
                activities: [
                    'Vaciado completo de la piscina',
                    'Limpieza y desinfección',
                    'Retirada de revestimientos dañados',
                    'Preparación de superficies'
                ]
            },
            {
                step: '03',
                title: 'Reparaciones Estructurales',
                duration: '3-7 días',
                description: 'Reparación de problemas estructurales y impermeabilización',
                activities: [
                    'Reparación de fisuras y grietas',
                    'Refuerzo estructural si necesario',
                    'Nueva impermeabilización',
                    'Pruebas de estanqueidad'
                ]
            },
            {
                step: '04',
                title: 'Renovación de Equipos',
                duration: '2-4 días',
                description: 'Actualización y modernización de equipamiento',
                activities: [
                    'Instalación de nueva depuradora',
                    'Modernización eléctrica',
                    'Sistemas de automatización',
                    'Iluminación LED nueva'
                ]
            },
            {
                step: '05',
                title: 'Nuevos Acabados',
                duration: '5-8 días',
                description: 'Aplicación de revestimientos y acabados finales',
                activities: [
                    'Nuevo revestimiento completo',
                    'Renovación de coronación',
                    'Elementos decorativos',
                    'Acabados de calidad'
                ]
            },
            {
                step: '06',
                title: 'Puesta en Funcionamiento',
                duration: '1-2 días',
                description: 'Llenado, equilibrado y verificación final',
                activities: [
                    'Llenado y equilibrado químico',
                    'Verificación de todos los sistemas',
                    'Pruebas de funcionamiento',
                    'Entrega al cliente'
                ]
            }
        ],
        titleBenefits: 'Beneficios de la Rehabilitación',
        descriptionBenefits: 'Ventajas de optar por la rehabilitación de su piscina.',
        benefits: [
            {
                title: 'Ahorro Energético',
                description: 'Reducción del consumo hasta un 50% con equipos modernos',
                icon: Zap,
                highlight: '50% menos consumo'
            },
            {
                title: 'Mayor Durabilidad',
                description: 'Garantía extendida con materiales de última generación',
                icon: Shield,
                highlight: '15 años garantía'
            },
            {
                title: 'Valor de la Propiedad',
                description: 'Incremento significativo del valor inmobiliario',
                icon: TrendingUp,
                highlight: '+20% valor'
            },
            {
                title: 'Menos Mantenimiento',
                description: 'Sistemas modernos requieren menor mantenimiento',
                icon: Heart,
                highlight: '60% menos averías'
            }
        ],
        titlePackages: 'Paquetes de Rehabilitación',
        descriptionPackages: 'Ofrecemos paquetes de rehabilitación adaptados a diferentes necesidades y presupuestos.',
        packages: [
            {
                name: 'Rehabilitación Básica',
                price: 'Desde 8.500€',
                description: 'Solución de problemas esenciales y mejoras básicas',
                features: [
                    'Reparación de fugas menores',
                    'Nueva impermeabilización básica',
                    'Revestimiento liner estándar',
                    'Limpieza y desinfección completa',
                    'Puesta en marcha',
                    'Garantía 5 años impermeabilización'
                ],
                duration: '7-10 días',
                recommended: false
            },
            {
                name: 'Rehabilitación Completa',
                price: 'Desde 15.800€',
                description: 'Renovación integral con equipos modernos',
                features: [
                    'Todo lo incluido en paquete básico',
                    'Nueva depuradora eficiente',
                    'Revestimiento gresite premium',
                    'Iluminación LED completa',
                    'Renovación parcial coronación',
                    'Clorador salino opcional',
                    'Garantía 10 años'
                ],
                duration: '12-15 días',
                recommended: true
            },
            {
                name: 'Rehabilitación Premium',
                price: 'Desde 25.000€',
                description: 'Transformación total con tecnología avanzada',
                features: [
                    'Todo lo incluido en paquete completo',
                    'Automatización inteligente',
                    'Sistema de calefacción',
                    'Coronación piedra porcelánica',
                    'Elementos decorativos nuevos',
                    'Control por app móvil',
                    'Garantía 15 años estructura'
                ],
                duration: '15-20 días',
                recommended: false
            }
        ],
        titleReviews: 'Testimonios de clientes',
        descriptionReviews: 'Lo que nuestros clientes dicen sobre nosotros.',
        reviews: [
            {
                text: 'La transformación ha sido increíble. Parecía imposible recuperar nuestra piscina, pero AquaClean Pro ha hecho un milagro.',
                author: 'Carmen López',
                role: 'Propietaria Villa Los Rosales',
                rating: 5,
                highlight: 'Transformación increíble'
            },
            {
                text: 'Después de años con problemas de fugas, finalmente tenemos una piscina que funciona perfectamente. Muy profesionales.',
                author: 'José Manuel Ruiz',
                role: 'Presidente Comunidad El Prado',
                rating: 5,
                highlight: 'Sin fugas por fin'
            }
        ]
    },
    {
        id: 5,
        title: 'Reparación de depuradoras',
        description: 'Servicios especializados en la reparación y mantenimiento de depuradoras de piscinas.',
        titleCommonIssues: 'Problemas comunes',
        descriptionCommonIssues: 'Identificación de fallos frecuentes en depuradoras de piscinas.',
        commonIssues: [
            {
                problem: 'Bomba no arranca',
                causes: ['Motor quemado', 'Problemas eléctricos', 'Condensador defectuoso'],
                urgency: 'high',
                avgCost: '150-400€'
            },
            {
                problem: 'Pérdida de caudal',
                causes: ['Rodete obstruido', 'Fugas en aspiración', 'Filtro sucio'],
                urgency: 'medium',
                avgCost: '80-250€'
            },
            {
                problem: 'Ruidos anormales',
                causes: ['Rodamientos gastados', 'Cavitación', 'Desalineación'],
                urgency: 'medium',
                avgCost: '120-300€'
            },
            {
                problem: 'Consumo elevado',
                causes: ['Motor desgastado', 'Fricción interna', 'Sistema desajustado'],
                urgency: 'low',
                avgCost: '200-500€'
            }
        ],
        titleServices: 'Nuestros servicios',
        descriptionServices: 'Ofrecemos una gama completa de servicios para la reparación y mantenimiento de depuradoras de piscinas.',
        services: [
            {
                title: 'Diagnóstico Técnico',
                description: 'Evaluación completa del estado de la depuradora',
                duration: '30-60 min',
                price: 'Gratuito*',
                includes: ['Inspección visual', 'Medición de parámetros', 'Informe detallado']
            },
            {
                title: 'Reparación Urgente',
                description: 'Intervención inmediata para problemas críticos',
                duration: '2-4 horas',
                price: 'Desde 120€',
                includes: ['Diagnóstico express', 'Reparación inmediata', 'Garantía 6 meses']
            },
            {
                title: 'Mantenimiento Preventivo',
                description: 'Revisión programada para evitar averías',
                duration: '1-2 horas',
                price: 'Desde 85€',
                includes: ['Limpieza general', 'Lubricación', 'Ajustes preventivos']
            },
            {
                title: 'Sustitución Completa',
                description: 'Cambio por equipo nuevo más eficiente',
                duration: '4-6 horas',
                price: 'Desde 800€',
                includes: ['Retirada del antiguo', 'Instalación nueva', 'Garantía 2 años']
            }
        ],
        titleBrands: 'Marcas que reparamos',
        descriptionBrands: 'Trabajamos con las principales marcas del mercado para garantizar reparaciones de calidad.',
        brands: [
            { name: 'Hayward', specialty: 'Bombas de alta eficiencia', experience: '15+ años' },
            { name: 'Pentair', specialty: 'Sistemas variables', experience: '12+ años' },
            { name: 'Zodiac', specialty: 'Equipos automáticos', experience: '10+ años' },
            { name: 'AstralPool', specialty: 'Bombas tradicionales', experience: '15+ años' },
            { name: 'Kripsol', specialty: 'Equipos compactos', experience: '8+ años' },
            { name: 'Calpeda', specialty: 'Bombas industriales', experience: '12+ años' }
        ],
        titleReviews: 'Opiniones de nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la rapidez, eficacia y profesionalismo de nuestros servicios de reparación de depuradoras.',
        reviews: [
            {
                text: 'Respondieron en menos de 2 horas a nuestra urgencia. La bomba volvió a funcionar perfectamente.',
                author: 'Miguel Rodríguez',
                role: 'Propietario Villa Los Naranjos',
                problem: 'Bomba parada en pleno verano',
                rating: 5
            },
            {
                text: 'Muy profesionales. Detectaron el problema que otros técnicos no habían visto y lo solucionaron.',
                author: 'Ana Martínez',
                role: 'Administradora Comunidad El Prado',
                problem: 'Pérdida de presión constante',
                rating: 5
            }
        ]
    },
    {
        id: 6,
        title: 'Cloradores salinos',
        description: 'Servicios de instalación, mantenimiento y reparación de cloradores salinos para piscinas.',
        titleBenefits: 'Beneficios del clorador salino',
        descriptionBenefits: 'Ventajas de utilizar un clorador salino en su piscina.',
        benefits: [
            {
                title: 'Agua más Suave',
                description: 'Sensación sedosa en la piel, sin irritaciones ni sequedad',
                icon: Heart,
                highlight: '100% Natural'
            },
            {
                title: 'Menos Químicos',
                description: 'Reducción del 80% en el uso de productos químicos tradicionales',
                icon: Leaf,
                highlight: '80% Menos químicos'
            },
            {
                title: 'Ahorro a Largo Plazo',
                description: 'Amortización en 2-3 años por menor coste de mantenimiento',
                icon: DollarSign,
                highlight: 'ROI 2-3 años'
            },
            {
                title: 'Mantenimiento Automático',
                description: 'Sistema inteligente que ajusta la producción automáticamente',
                icon: Settings,
                highlight: '90% Automático'
            }
        ],
        titleSystems: 'Sistemas que instalamos',
        descriptionSystems: 'Trabajamos con las principales marcas de cloradores salinos del mercado.',
        systems: [
            {
                brand: 'Zodiac TRi',
                capacity: 'Hasta 75m³',
                price: 'Desde 1.200€',
                features: [
                    'Control automático pH',
                    'Display LED intuitivo',
                    'Electrodo auto-limpiante',
                    'Garantía 3 años',
                    'Producción 20g/h'
                ],
                recommended: false,
                installation: '4-6 horas'
            },
            {
                brand: 'Hayward AquaRite',
                capacity: 'Hasta 110m³',
                price: 'Desde 1.800€',
                features: [
                    'Tecnología TurboCell',
                    'Control digital avanzado',
                    'Función super-cloración',
                    'Garantía 5 años',
                    'Producción 40g/h'
                ],
                recommended: true,
                installation: '5-7 horas'
            },
            {
                brand: 'Pentair IntelliChlor',
                capacity: 'Hasta 150m³',
                price: 'Desde 2.400€',
                features: [
                    'Sistema IntelliTouch',
                    'Control por app móvil',
                    'Autodiagnóstico completo',
                    'Garantía 7 años',
                    'Producción 60g/h'
                ],
                recommended: false,
                installation: '6-8 horas'
            }
        ],
        titleInstalations: 'Proceso de instalación',
        descriptionInstalations: 'Pasos para la correcta instalación de un clorador salino.',
        installations: [
            {
                step: '01',
                title: 'Evaluación Técnica',
                description: 'Análisis de la instalación existente y dimensionado del sistema',
                duration: '1 hora'
            },
            {
                step: '02',
                title: 'Instalación Hidráulica',
                description: 'Montaje de la célula electrolítica en el circuito de retorno',
                duration: '2-3 horas'
            },
            {
                step: '03',
                title: 'Conexión Eléctrica',
                description: 'Instalación del cuadro de control y conexiones eléctricas',
                duration: '1-2 horas'
            },
            {
                step: '04',
                title: 'Configuración',
                description: 'Programación y ajuste de parámetros de funcionamiento',
                duration: '1 hora'
            },
            {
                step: '05',
                title: 'Puesta en Marcha',
                description: 'Equilibrado químico inicial y formación al cliente',
                duration: '1 hora'
            }
        ],
        titleMaintenance: 'Mantenimiento del sistema',
        descriptionMaintenance: 'Recomendaciones para el mantenimiento óptimo de su clorador salino.',
        maintenance: [
            {
                task: 'Limpieza de Célula',
                frequency: 'Cada 3 meses',
                description: 'Limpieza con ácido para eliminar depósitos calcáreos',
                cost: 'Incluido en mantenimiento'
            },
            {
                task: 'Control de Salinidad',
                frequency: 'Mensual',
                description: 'Verificación y ajuste del nivel de sal (3-4 g/L)',
                cost: 'Incluido en mantenimiento'
            },
            {
                task: 'Revisión General',
                frequency: 'Semestral',
                description: 'Verificación de parámetros y funcionamiento general',
                cost: 'Incluido en mantenimiento'
            }
        ],
        titleReviews: 'Opiniones de nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la comodidad, eficacia y ahorro de nuestros sistemas de cloración salina.',
        reviews: [
            {
                text: 'Desde que instalamos el clorador salino, el agua está perfecta y mis hijos ya no tienen irritaciones en los ojos.',
                author: 'Laura Vázquez',
                role: 'Propietaria Villa Los Altos',
                system: 'Zodiac TRi',
                rating: 5
            },
            {
                text: 'La inversión se ha amortizado rápidamente. Apenas compramos químicos y el mantenimiento es mínimo.',
                author: 'Carlos Mendoza',
                role: 'Presidente Comunidad El Prado',
                system: 'Hayward AquaRite',
                rating: 5
            }
        ]
    },
    {
        id: 7,
        title: 'Pruebas de presión',
        description: 'Servicios profesionales de pruebas de presión para sistemas de tuberías y componentes de piscinas.',
        titleServices: 'Nuestros servicios',
        descriptionServices: 'Ofrecemos una gama completa de servicios de pruebas de presión para garantizar la integridad de los sistemas de piscinas.',
        services: [
            {
                title: 'Localización de Fugas',
                description: 'Detección precisa de fugas en tuberías y estructura',
                duration: '2-4 horas',
                price: 'Desde 150€',
                equipment: 'Equipos de escucha electrónica',
                accuracy: '95%+'
            },
            {
                title: 'Pruebas de Presión',
                description: 'Verificación de estanqueidad del circuito hidráulico',
                duration: '1-2 horas',
                price: 'Desde 120€',
                equipment: 'Manómetros digitales',
                accuracy: '98%+'
            },
            {
                title: 'Inspección con Cámara',
                description: 'Revisión visual interior de tuberías',
                duration: '1-3 horas',
                price: 'Desde 200€',
                equipment: 'Cámara de inspección',
                accuracy: '100%'
            }
        ],
        titleProblems: 'Problemas comunes detectados',
        descriptionProblems: 'Identificación de fallos frecuentes en sistemas de piscinas.',
        problems: [
            {
                symptom: 'Pérdida constante de agua',
                causes: ['Fisuras en estructura', 'Juntas deterioradas', 'Tuberías dañadas'],
                detection: 'Prueba de presión + localización'
            },
            {
                symptom: 'Humedad en alrededores',
                causes: ['Fugas subterráneas', 'Filtraciones laterales', 'Drenaje deficiente'],
                detection: 'Detección electrónica + cámara'
            },
            {
                symptom: 'Baja presión en jets',
                causes: ['Obstrucciones', 'Fugas en retorno', 'Bomba defectuosa'],
                detection: 'Inspección con cámara'
            },
            {
                symptom: 'Químicos descompensados',
                causes: ['Dilución por fuga', 'Renovación excesiva', 'Entrada de agua'],
                detection: 'Localización + análisis'
            }
        ],
        titleProcess: 'Nuestro proceso de trabajo',
        descriptionProcess: 'Pasos para realizar pruebas de presión efectivas y precisas.',
        process: [
            {
                step: '01',
                title: 'Evaluación Inicial',
                description: 'Análisis visual y determinación del método de detección',
                duration: '30 min'
            },
            {
                step: '02',
                title: 'Preparación',
                description: 'Vaciado parcial y preparación de equipos de detección',
                duration: '45 min'
            },
            {
                step: '03',
                title: 'Detección',
                description: 'Aplicación de técnicas especializadas según el caso',
                duration: '1-3 horas'
            },
            {
                step: '04',
                title: 'Localización Precisa',
                description: 'Marcado exacto de la ubicación de fugas detectadas',
                duration: '30 min'
            },
            {
                step: '05',
                title: 'Informe Técnico',
                description: 'Documentación completa con fotos y recomendaciones',
                duration: '30 min'
            }
        ],
        titleEquipment: 'Equipos utilizados en nuestras pruebas',
        descriptionEquipment: 'Tecnología avanzada para una detección precisa y eficiente.',
        equipment: [
            {
                name: 'Detector Electrónico',
                use: 'Localización de fugas por sonido',
                precision: 'Hasta 10 cm',
                conditions: 'Tuberías presurizadas'
            },
            {
                name: 'Manómetro Digital',
                use: 'Medición de pérdidas de presión',
                precision: '0.1 bar',
                conditions: 'Circuito cerrado'
            },
            {
                name: 'Cámara de Inspección',
                use: 'Visualización interior de tuberías',
                precision: 'Imagen HD',
                conditions: 'Tuberías ≥ 50mm'
            },
            {
                name: 'Gas Trazador',
                use: 'Detección en estructuras complejas',
                precision: 'Muy alta',
                conditions: 'Casos especiales'
            }
        ],
        titleReviews: 'Opiniones de nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la precisión y rapidez de nuestros servicios de pruebas de presión.',
        reviews: [
            {
                text: 'Llevábamos meses perdiendo agua sin saber por qué. En 2 horas encontraron la fuga exacta bajo el césped.',
                author: 'Miguel Torres',
                location: 'Villa Los Naranjos, Sevilla',
                problem: 'Pérdida 500L/día',
                rating: 5
            },
            {
                text: 'Muy profesionales. El informe técnico fue perfecto para la reparación posterior. Problema resuelto.',
                author: 'Carmen Ruiz',
                location: 'Comunidad El Prado',
                problem: 'Humedad perimetral',
                rating: 5
            }
        ]
    },
    {
        id: 8,
        title: 'Piedra porcelánica',
        description: 'Servicios de instalación y mantenimiento de piedra porcelánica para piscinas y áreas exteriores.',
        titleBenefits: 'Beneficios de la piedra porcelánica',
        descriptionBenefits: 'Ventajas de utilizar piedra porcelánica en su piscina y áreas exteriores.',
        benefits: [
            {
                title: 'Antideslizante',
                description: 'Superficie rugosa que garantiza máxima seguridad',
                icon: Shield,
                highlight: 'Clase 3 antideslizante'
            },
            {
                title: 'Resistente a Heladas',
                description: 'Soporta temperaturas extremas sin deteriorarse',
                icon: ThermometerSun,
                highlight: 'Hasta -20°C'
            },
            {
                title: 'Fácil Mantenimiento',
                description: 'Superficie no porosa que repele la suciedad',
                icon: Droplets,
                highlight: 'Limpieza mínima'
            },
            {
                title: 'Resistente al Cloro',
                description: 'No se decolora ni deteriora con productos químicos',
                icon: Sparkles,
                highlight: '100% Químicos'
            }
        ],
        titleProducts: 'Nuestros productos',
        descriptionProducts: 'Ofrecemos una selección de piedra porcelánica de alta calidad para piscinas y exteriores.',
        products: [
            {
                name: 'Rosa Gres Travertino',
                size: '60x40cm',
                thickness: '2cm',
                price: 'Desde 45€/m²',
                finish: 'Rugoso natural',
                features: ['Imitación travertino', 'Antideslizante R11', 'Colores cálidos', 'Junta mínima'],
                colors: ['Beige', 'Crema', 'Arena'],
                recommended: false
            },
            {
                name: 'Rosa Gres Moderno',
                size: '75x37.5cm',
                thickness: '2cm',
                price: 'Desde 52€/m²',
                finish: 'Textura contemporánea',
                features: ['Diseño actual', 'Antideslizante R12', 'Muy resistente', 'Fácil colocación'],
                colors: ['Gris', 'Perla', 'Antracita'],
                recommended: true
            },
            {
                name: 'Rosa Gres Premium',
                size: '90x45cm',
                thickness: '2cm',
                price: 'Desde 68€/m²',
                finish: 'Acabado de lujo',
                features: ['Calidad superior', 'Antideslizante R13', 'Gran formato', 'Máxima elegancia'],
                colors: ['Blanco', 'Negro', 'Titanio'],
                recommended: false
            }
        ],
        titleInstalations: 'Instalaciones de piedra porcelánica',
        descriptionInstalations: 'Realizamos instalaciones de piedra porcelánica con acabados de alta calidad y durabilidad.',
        installations: [
            {
                step: '01',
                title: 'Retirada del Antiguo',
                description: 'Desmontaje cuidadoso del material existente',
                duration: '1-2 días'
            },
            {
                step: '02',
                title: 'Preparación de Base',
                description: 'Nivelación y preparación de la superficie de apoyo',
                duration: '1 día'
            },
            {
                step: '03',
                title: 'Colocación',
                description: 'Instalación de la piedra porcelánica con adhesivos especiales',
                duration: '2-3 días'
            },
            {
                step: '04',
                title: 'Rejuntado',
                description: 'Aplicación de juntas impermeables y acabados',
                duration: '1 día'
            },
            {
                step: '05',
                title: 'Acabados Finales',
                description: 'Limpieza y sellado para máxima protección',
                duration: '1 día'
            }
        ],
        titleComparisons: 'Comparativa con otros materiales',
        descriptionComparisons: 'Ventajas de la piedra porcelánica frente a otros materiales comunes.',
        comparisons: [
            {
                material: 'Piedra Porcelánica',
                durability: '25+ años',
                maintenance: 'Muy bajo',
                safety: 'Máxima',
                appearance: 'Excelente',
                cost: 'Medio-Alto',
                recommended: true
            },
            {
                material: 'Piedra Natural',
                durability: '15-20 años',
                maintenance: 'Alto',
                safety: 'Media',
                appearance: 'Muy buena',
                cost: 'Alto',
                recommended: false
            },
            {
                material: 'Hormigón Pulido',
                durability: '10-15 años',
                maintenance: 'Medio',
                safety: 'Baja',
                appearance: 'Buena',
                cost: 'Bajo',
                recommended: false
            },
            {
                material: 'Madera',
                durability: '8-12 años',
                maintenance: 'Muy alto',
                safety: 'Variable',
                appearance: 'Muy buena',
                cost: 'Medio',
                recommended: false
            }
        ],
        titleReviews: 'Opiniones de nuestros clientes',
        descriptionReviews: 'Nuestros clientes valoran la belleza, durabilidad y facilidad de mantenimiento de la piedra porcelánica.',
        reviews: [
            {
                text: 'La diferencia es increíble. Antes resbalábamos constantemente, ahora la piscina es totalmente segura.',
                author: 'Carlos García',
                role: 'Propietario Villa Los Altos',
                product: 'Rosa Gres Moderno',
                rating: 5
            },
            {
                text: 'Llevamos 3 años y está como el primer día. Se limpia sola, apenas necesita mantenimiento.',
                author: 'Ana Fernández',
                role: 'Propietaria Chalet Las Rosas',
                product: 'Rosa Gres Premium',
                rating: 5
            }
        ]
    }
];

export default servicesData;