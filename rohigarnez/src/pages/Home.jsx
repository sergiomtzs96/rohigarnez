import CardElection from "../components/home/CardElection";
import CardServices from "../components/home/CardServices";
import { ArrowRight, Shield } from "lucide-react";
import Benefits from '../components/home/Benefits';
import Stats from '../components/home/Stats';
import WhereWork from "../components/home/WhereWork";
import RecentProyects from "../components/home/RecentProyects";
import Reviews from '../components/home/Reviews';
import CalltoAction from "../components/general/CalltoAction";

import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen ">
            <section className="relative min-h-screen py-20 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1753194931766-211c9f563156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-start space-y-8 md:space-y-16 justify-center">
                    <div className="max-w-3xl space-y-8 text-white">
                        <h1>Mantenimiento Profesional de Piscinas</h1>
                        <p>Más de 15 años cuidando tu piscina con técnicos certificados, productos eco-friendly y precios competitivos. Tu tranquilidad es nuestra prioridad.</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => navigate('/contacto')} className="text-white rounded-lg bg-[var(--color-navbar)] px-4 py-2 text-sm hover:bg-[var(--color-navbar)]/90 hover:scale-105 active:scale-95 transition-all duration-300">Solicitar Presupuesto Gratuito</button>
                        <button onClick={() => navigate('/servicios')} className="text-[var(--color-navbar)] rounded-lg bg-white px-4 py-2 text-sm hover:scale-105 active:scale-95 transition-all duration-300">Ver Servicios</button>
                    </div>
                </div>

            </section>
            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mt-20 space-y-4">
                        <h2>¿Por qué elegir AquaClean Pro?</h2>
                        <p>Somos la empresa líder en mantenimiento de piscinas con los más altos estándares de calidad</p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 gap-10 px-24 py-10">
                        <CardElection />
                        <CardElection />
                        <CardElection />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mt-10 space-y-4">
                        <h2>Nuestros Servicios Principales</h2>
                        <p>Ofrecemos soluciones completas para el cuidado y mantenimiento de tu piscina</p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 gap-10 px-24 py-10">
                        <CardServices />
                        <CardServices />
                        <CardServices />
                    </div>
                    <button onClick={() => navigate('/servicios')} className="flex gap-2 items-center px-26">Ver todos <ArrowRight size={14} /> </button>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto text-justify space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 h-auto py-10 gap-x-6  ">
                        <div className="flex flex-col justify-between row-span-2 space-y-4">
                            <div className="space-y-4 mb-10">
                                <h2>Beneficios del Mantenimiento Regular</h2>
                                <p>Un mantenimiento adecuado no solo mantiene tu piscina hermosa, sino que también protege tu inversión a largo plazo.</p>

                            </div>
                            <Benefits />
                            <Benefits />
                            <Benefits />
                        </div>
                        <div className="row-span-2">
                            <img src="https://images.unsplash.com/photo-1753194931766-211c9f563156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="imagen" className="w-full rounded-lg h-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-navbar)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 text-white p-10">
                        <h2>Nuestros números hablan por sí solos</h2>
                        <p>La confianza de nuestros clientes es nuestro mayor logro</p>
                        <div className="grid grid-cols-4 grid-rows-1 m-10">
                            <Stats />
                            <Stats />
                            <Stats />
                            <Stats />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 grid-rows-1 pt-10 gap-10 items-center">
                    <div className="rows-start-1 rows-span-3">
                        <img src="https://cdn.pixabay.com/photo/2024/01/22/22/09/map-8526430_960_720.jpg" alt="map" className="rounded-lg" />
                    </div>
                    <div className="space-y-6">
                        <h2>Dónde trabajamos</h2>
                        <p>Ofrecemos nuestros servicios de mantenimiento de piscinas en las principales ciudades de España. Nuestro equipo de técnicos certificados está preparado para atender tu piscina donde quiera que estés.</p>
                        <div className="grid grid-cols-2 grid-rows-3 gap-4">
                            <WhereWork />
                            <WhereWork />
                            <WhereWork />
                            <WhereWork />
                            <WhereWork />
                            <WhereWork />
                        </div>
                        <div className="space-y-2 bg-gray-200 p-6 rounded-lg">
                            <h4>¿No encuentras tu ciudad?</h4>
                            <p>Estamos expandiendo constantemente nuestros servicios. Contáctanos para consultar disponibilidad en tu área.</p>
                            <button onClick={() => navigate('/contacto')} className="bg-[var(--color-navbar)] text-white px-4 py-2 rounded-lg text-xs hover:bg-[var(--color-navbar)]/90 active:scale-95 transition-all duration-300">Consultar Disponibilidad</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2>Proyectos recientes</h2>
                        <p>Descubre algunos de nuestros trabajos más recientes. Cada proyecto es único y refleja nuestro compromiso con la calidad y la excelencia.</p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 gap-10 p-24">
                        <RecentProyects />
                        <RecentProyects />
                        <RecentProyects />
                    </div>
                    <div className="text-center">
                        <button onClick={() => navigate('/proyectos')} className="text-xs bg-[var(--color-navbar)]/80 px-6 py-3 rounded-lg text-white/80 hover:bg-[var(--color-navbar)]/40 active:scale-95 transition-all duration-300">Ver todos los proyectos</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto space-y-4">
                    <div className="text-center">
                        <h2>Opiniones de nuestros clientes</h2>
                        <p>La satisfacción de nuestros clientes es nuestra mejor carta de presentación</p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 px-24 py-10 text-center gap-10">
                        <Reviews />
                        <Reviews />
                        <Reviews />
                    </div>
                </div>
            </section>
            <section>
                <CalltoAction />
            </section>
        </div>
    )
}