import CardBenefits from './componentsViews/CardBenefits.jsx';
import CardServices from './componentsViews/CardServices.jsx';

import { Droplets, Settings, Target, Shield, Heart, CheckCircle } from 'lucide-react';

export default function CommunitaryPoolView() {

    const data = [
        {
            title: 'Mantenimiento de Piscinas Comunitarias',
            description: 'Servicio integral especializado para comunidades de propietarios. Gestión completa, cumplimiento normativo y tranquilidad garantizada.',
            titleServices: 'Servicios incluidos',
            descriptionServices: 'Gestión completa de tu piscina comunitaria con un equipo especializado en cumplimiento normativo y optimización de recursos.',
            services: [
                {
                    id: 1,
                    title: 'Control Químico Diario',
                    description: 'Análisis y ajuste de pH, cloro, alcalinidad y otros parámetros químicos',
                    icon: <Droplets />
                },
                {
                    id: 2,
                    title: 'Limpieza Integral',
                    description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                    icon: <Settings />
                },
                {
                    id: 2,
                    title: 'Limpieza Integral',
                    description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                    icon: <Settings />
                },
                {
                    id: 2,
                    title: 'Limpieza Integral',
                    description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                    icon: <Settings />
                },
                {
                    id: 2,
                    title: 'Limpieza Integral',
                    description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                    icon: <Settings />
                },
                {
                    id: 2,
                    title: 'Limpieza Integral',
                    description: 'Aspirado, cepillado de paredes, limpieza de skimmers y filtros',
                    icon: <Settings />
                }
            ],
            titleBenefits: '¿Por qué elegir nuestro servicio?',
            descriptionBenefits: 'Nuestro equipo de profesionales altamente capacitados utiliza tecnología avanzada y productos ecológicos para garantizar que su piscina comunitaria esté siempre en las mejores condiciones, proporcionando un entorno seguro y agradable para todos los usuarios.',
            benefits: [
                {
                    title: 'Ahorro Económico',
                    description: 'Reducción de costes operativos hasta un 30% mediante mantenimiento preventivo',
                    icon: <Target />,
                    highlight: '30% Ahorro'
                },
                {
                    title: 'Tranquilidad Total',
                    description: 'Gestión completa sin preocupaciones para la comunidad de propietarios',
                    icon: <Heart />,
                    highlight: '0 Preocupaciones'
                },
                {
                    title: 'Cumplimiento Legal',
                    description: 'Garantía de cumplimiento de todas las normativas sanitarias vigentes',
                    icon: <Shield />,
                    highlight: '100% Legal'
                },
                {
                    title: 'Disponibilidad',
                    description: 'Piscina siempre lista para el disfrute de todos los vecinos',
                    icon: <CheckCircle />,
                    highlight: '365 Días'
                }
            ],
        }

    ]

    return (
        <div className='w-full text-center space-y-6'>
            <section className='flex flex-col bg-[var(--color-navbar)]/30 h-50 items-center justify-center'>
                <div>
                    <h1>{data[0].title}</h1>
                    <p className='max-w-2xl'>{data[0].description}</p>
                </div>
            </section>
            <section className='max-w-7xl mx-auto text-center space-y-6'>
                <div>
                    <h2>{data[0].titleServices}</h2>
                    <p>{data[0].descriptionServices}</p>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 gap-6'>
                    {data[0].services.map((service, i) => (
                        <CardServices key={i} service={service} />
                    ))}
                </div>
            </section>
            <section className='max-w-7xl mx-auto text-center space-y-6'>
                <div>
                    <h2>{data[0].titleBenefits}</h2>
                    <p>{data[0].descriptionBenefits}</p>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {data[0].benefits.map((benefit, i) => (
                        <CardBenefits key={i} benefit={benefit} />
                    ))};
                </div>
            </section>
            <section>
                <div>
                    hola
                </div>
                <div>
                    hola
                </div>
            </section>
        </div>
    )
}