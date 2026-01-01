import { useNavigate, useParams } from "react-router-dom";

import ReviewsClients from "../components/servicesComponents/ReviewsClients";
import ShowServices from "../components/servicesComponents/ShowServices";
import CardStats from "../components/proyects/CardStats";
import CalltoAction from "../components/general/CalltoAction";

import PoolsWithoutLifeguard from "./ServicesPages/PoolsWithoutLifeguard";
import PoolsWithLifeguard from "./ServicesPages/PoolsWithLifeguard";
import LeakDetection from "./ServicesPages/LeakDetection";
import PressureTesting from "./ServicesPages/PressureTesting";
import AirTesting from "./ServicesPages/AirTesting";
import PipeRepair from "./ServicesPages/PipeRepair";
import CrackRepair from "./ServicesPages/CrackRepair";
import PoolRehabilitation from "./ServicesPages/PoolRehabilitation";
import PoolConstruction from "./ServicesPages/PoolConstruction";
import SaltChlorinator from "./ServicesPages/SaltChlorinator";
import HeatPumps from "./ServicesPages/HeatPumps";
import Grunite from "./ServicesPages/Grunite";
import GroutingReplacementMosaic from "./ServicesPages/GroutingReplacementMosaic";
import StoneChanges from "./ServicesPages/StoneChanges";
import StairConstruction from "./ServicesPages/StairConstruction";
import LiftingTreatmentPlants from "./ServicesPages/LiftingTreatmentPlants";
import PoolCovers from "./ServicesPages/PoolCovers";
import PHMachine from "./ServicesPages/PHMachine";
import ChangePumps from "./ServicesPages/ChangePumps";
import FilterSand from "./ServicesPages/FilterSand";
import PoolMaterials from "./ServicesPages/PoolMaterials";

import {
    Droplets,
    Search,
    Wrench,
    Hammer,
    Settings,
    Package,
    ArrowRight
} from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";

export default function Services() {
    const { service } = useParams();
    const navigate = useNavigate();

    const serviceCategories = [
        // Mantén exactamente tus categorías y servicios aquí
        // Igual que en tu código actual, no cambié nada
        {
            id: 'maintenance',
            title: 'Mantenimiento',
            subtitle: 'Para comunidades de vecinos',
            description: 'Servicios especializados de mantenimiento regular para piscinas comunitarias',
            icon: Droplets,
            services: [
                { id: 'sin-socorristas', name: 'Mantenimiento sin socorristas', description: 'Mantenimiento completo para piscinas comunitarias', page: 'sin-socorristas' },
                { id: 'con-socorristas', name: 'Mantenimiento con socorristas', description: 'Servicio integral con personal de vigilancia cualificado', page: 'con-socorristas' }
            ]
        },
        {
            id: 'detection',
            title: 'Detección y Diagnóstico',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Localización precisa de fugas y problemas técnicos',
            icon: Search,
            services: [
                { id: 'fugas', name: 'Localización de fugas con gas trazador', description: 'Tecnología avanzada para detectar fugas', page: 'fugas' },
                { id: 'presion', name: 'Pruebas de presión de tuberías', description: 'Verificación exhaustiva del sistema de tuberías', page: 'presion' },
                { id: 'aire', name: 'Pruebas mediante aire', description: 'Mayor eficacia en la detección de problemas', page: 'aire' }
            ]
        },
        {
            id: 'repairs',
            title: 'Reparaciones',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Soluciones profesionales para todo tipo de reparaciones',
            icon: Wrench,
            services: [
                { id: 'tuberias', name: 'Reparación de tuberías', description: 'Reparación y sustitución de tuberías de piscinas', page: 'tuberias' },
                { id: 'grietas', name: 'Reparación de grietas', description: 'Según valoración previa in situ', page: 'grietas' }
            ]
        },
        {
            id: 'construction',
            title: 'Construcción, Rehabilitación y Obra',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Proyectos completos de construcción y renovación',
            icon: Hammer,
            services: [
                { id: 'rehabilitacion-lamina', name: 'Rehabilitación con lámina armada', description: 'Varias marcas disponibles', page: 'rehabilitacion-lamina' },
                { id: 'pool-construction', name: 'Construcción de piscinas de obra', description: 'Piscinas personalizadas desde cero', page: 'pool-construction' },
                { id: 'gunite', name: 'Gunitado de vasos', description: 'Aplicación profesional de gunita', page: 'gunite' },
                { id: 'grouting', name: 'Lechadas y reposición de gresites', description: 'Acabados perfectos y duraderos', page: 'grouting' },
                { id: 'stone-replacement', name: 'Cambios de piedras / coronación', description: 'Renovación de acabados exteriores', page: 'stone-replacement' },
                { id: 'stairs-construction', name: 'Construcción de escaleras de obra', description: 'Todo tipo de escaleras con diferentes acabados', page: 'stairs-construction' },
                { id: 'pump-room-elevation', name: 'Elevación de depuradoras', description: 'Casetas de PVC o de obra', page: 'pump-room-elevation' }
            ]
        },
        {
            id: 'installations',
            title: 'Instalaciones y Equipamientos',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Instalación y mantenimiento de equipos especializados',
            icon: Settings,
            services: [
                { id: 'cloradores', name: 'Montaje de cloradores salinos', description: 'Instalación profesional de sistemas de cloración', page: 'cloradores' },
                { id: 'ph', name: 'Instalación de máquinas de pH', description: 'Control automático de pH', page: 'ph' },
                { id: 'cambio-bombas', name: 'Cambios / sustitución de bombas', description: 'Bombas de piscina de última generación', page: 'cambio-bombas' },
                { id: 'bombas-calor', name: 'Bombas de calor para piscinas', description: 'Suministro e instalación completa', page: 'bombas-calor' },
                { id: 'arena-filtro', name: 'Cambios de arenas de filtros', description: 'Renovación de medios filtrantes', page: 'arena-filtro' }
            ]
        },
        {
            id: 'supplies',
            title: 'Suministros',
            subtitle: 'Para todo tipo de piscinas',
            description: 'Productos y materiales de primera calidad',
            icon: Package,
            services: [
                { id: 'lonas', name: 'Lonas para piscinas', description: 'Venta e instalación de cobertores', page: 'lonas' },
                { id: 'materiales', name: 'Materiales de piscina', description: 'Suministro de todo tipo de materiales', page: 'materiales' }
            ]
        }
    ];

    const servicePages = {
        'sin-socorristas': <PoolsWithoutLifeguard />,
        'con-socorristas': <PoolsWithLifeguard />,
        'fugas': <LeakDetection />,
        'presion': <PressureTesting />,
        'aire': <AirTesting />,
        'tuberias': <PipeRepair />,
        'grietas': <CrackRepair />,
        'rehabilitacion-lamina': <PoolRehabilitation />,
        'pool-construction': <PoolConstruction />,
        'gunite': <Grunite />,
        'grouting': <GroutingReplacementMosaic />,
        'stone-replacement': <StoneChanges />,
        'stairs-construction': <StairConstruction />,
        'pump-room-elevation': <LiftingTreatmentPlants />,
        'cloradores': <SaltChlorinator />,
        'ph': <PHMachine />,
        'cambio-bombas': <ChangePumps />,
        'bombas-calor': <HeatPumps />,
        'arena-filtro': <FilterSand />,
        'lonas': <PoolCovers />,
        'materiales': <PoolMaterials />
    };

    // Si hay un servicio en la URL, mostrar su página
    if (service) {
        return (
            <section className="bg-transparent">
                <button
                    onClick={() => navigate("/servicios")}
                    className=" mt-4 px-6 mb-6 text-sm text-muted-foreground hover:underline"
                >
                    ← Volver a servicios
                </button>
                {servicePages[service] ?? <p>Servicio no encontrado</p>}
            </section>
        );
    }

    // Vista general de servicios
    return (
        <>
            <section className="flex flex-col justify-center items-center h-50 text-center mb-10 bg-[var(--color-navbar)]/50">
                <h1>Nuestros servicios</h1>
                <p className="max-w-2xl mx-auto text-gray-700">Ofrecemos una gama completa de servicios profesionales para el cuidado, mantenimiento y reparación de piscinas residenciales y comunitarias.</p>
            </section>
            <section className="max-w-7xl mx-auto grid grid-cols-4 gap-6 mb-10">
                <CardStats />
                <CardStats />
                <CardStats />
                <CardStats />
            </section>
            <section className="max-w-7xl mx-auto space-y-6">
                {serviceCategories.map((category) => (
                    <div key={category.id} id={category.id}>
                        <Card className='overflow-hidden rounded-lg'>
                            <CardHeader>
                                <div className="flex items-start gap-4 bg-[var(--color-navbar)]/50 p-6">
                                    <div className="bg-white/30 p-2 rounded-lg">
                                        <category.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col items-start space-y-2">
                                        <CardTitle ><h4 className='text-gray-100'>{category.title}</h4></CardTitle>
                                        <Badge variant="outline" className='text-gray-100'>{category.subtitle}</Badge>
                                        <CardDescription><p className="text-gray-100">{category.description}</p></CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className='p-6'>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.services.map((service) => (
                                        <Card key={service.id} className=' rounded-lg hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border/50' onClick={() => navigate(`/servicios/${service.page}`)}>
                                            <CardContent className='p-6'>
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3>{service.name}</h3>
                                                    <ArrowRight />
                                                </div>
                                                <p>{service.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </section>
            <section className="mt-4">
                <CalltoAction title={'¿No encuentras lo que buscas?'} description={'Ofrecemos soluciones personalizadas para cada cliente. Contacta con nosotros y te asesoraremos sin compromiso.'} btn1={'Contactar Ahora'} btn2={'Solicitar Presupuesto'} />
            </section>
        </>
    )
}
