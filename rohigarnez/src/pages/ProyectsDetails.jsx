import { ArrowLeft, User, MapPin, Calendar, Clock, CircleCheckBig, Circle, Ruler, Wrench, ShieldCheck, TrendingUp } from 'lucide-react';
import LabelCaracteristicas from '../components/proyects/LabelCaracteristicas';
import Reviews from '../components/home/Reviews';

export default function ProyectDetails() {

    return (
        <div>
            <section>
                <div className="relative h-150 py-20 bg-cover bg-center bg-no-repeat w-full" style={{
                    backgroundImage: `url(https://media.istockphoto.com/id/1700606833/es/foto/piscina-en-el-patio-trasero-exterior-de-una-extraordinaria-casa-de-lujo.jpg?s=2048x2048&w=is&k=20&c=BDm2-JZzkwKKYvt5yrDE3MhJJG8EWOpoOdrCjW-az1g=)`
                }}>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30'></div>
                </div>
                <div className='absolute top-100 pl-60 text-white space-y-4'>
                    <button className='flex gap-2 items-center text-sm border border-white px-4 py-1 rounded-lg bg-white/20 hover:bg-white/40 active:scale-95 transition-all duration-300'> <ArrowLeft /> Volver a Proyectos </button>
                    <LabelCaracteristicas />
                    <h1 className='text-white'>Mantenimiento Anual Residencial Bellavista</h1>
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-2 text-sm'> <User /> <span>Urbanización Bellavista</span> </div>
                        <div className='flex items-center gap-2 text-sm'> <MapPin /> <span>Sevilla Capital</span> </div>
                        <div className='flex items-center gap-2 text-sm'> <Calendar /> <span>2023-2024</span> </div>
                        <div className='flex items-center gap-2 text-sm'> <Clock /> <span>Contrato actual</span> </div>
                    </div>

                </div>
            </section>
            <section>
                <div className='max-w-7xl mx-auto py-6'>
                    <div className='flex justify-between gap-15 px-16'>
                        <div className='max-w-3xl mx-auto border border-gray-300 rounded-lg p-10'>
                            <div className='space-y-4'>
                                <h2>Descripción del Proyecto</h2>
                                <p>Gestión completa del mantenimiento de piscina comunitaria con más de 150 viviendas. Incluye tratamiento químico, limpieza y supervisión técnica.</p>
                                <div className='border-t mt-3 pt-3 border-gray-300'>
                                    <h3>El Desafío</h3>
                                    <p>El cliente requería un servicio de mantenimiento confiable que garantizara agua cristalina y sistemas funcionando correctamente durante todo el año.</p>
                                </div>
                                <div>
                                    <h3>Nuestra Solución</h3>
                                    <p>Implementamos un plan de mantenimiento preventivo con visitas programadas, análisis químico continuo mediante sonda digital y limpieza automática con robot de última generación.</p>
                                </div>
                                <div className='space-y-2'>
                                    <h3>Resultados</h3>
                                    <ul className='space-y-2'>
                                        <li className='flex gap-6 items-center'><CircleCheckBig /> <span className='text-sm'>Renovación completa finalizada según cronograma</span></li>
                                        <li className='flex gap-6 items-center'><CircleCheckBig /> <span className='text-sm'>Cliente completamente satisfecho con el resultado</span></li>
                                        <li className='flex gap-6 items-center'><CircleCheckBig /> <span className='text-sm'>Mejora significativa en la calidad del agua</span></li>
                                        <li className='flex gap-6 items-center'><CircleCheckBig /> <span className='text-sm'>Sistema de mantenimiento optimizado y eficiente</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='max-w-sm mx-auto border border-gray-300 rounded-lg p-6'>
                                <h3>Especifícaciones Técnicas</h3>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-6 my-4'>
                                        <div> <Ruler /> </div>
                                        <div>
                                            <span>Dimensiones</span>
                                            <p>Según proyecto original</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6 my-4'>
                                        <div> <Wrench /> </div>
                                        <div>
                                            <span>Equipamiento</span>
                                            <p>Mantenimiento 365 días</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6 my-4'>
                                        <div> <ShieldCheck /> </div>
                                        <div>
                                            <span>Garantía</span>
                                            <p>5 años en estructura</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-6 my-4'>
                                        <div> <TrendingUp /> </div>
                                        <div>
                                            <span>Eficiencia</span>
                                            <p>Optimizado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-xs mx-auto border border-gray-300 rounded-lg p-6 space-y-2'>
                                <h3>Características Destacadas</h3>
                                <div className='flex gap-2 items-center'> <CircleCheckBig /> <span>Fácil instalación</span></div>
                                <div className='flex gap-2 items-center'> <CircleCheckBig /> <span>Fácil instalación</span></div>
                                <div className='flex gap-2 items-center'> <CircleCheckBig /> <span>Fácil instalación</span></div>
                                <div className='flex gap-2 items-center'> <CircleCheckBig /> <span>Fácil instalación</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-6xl mx-auto py-6'>
                        <div className='border border-gray-300 p-6 rounded-lg space-y-4'>
                            <h2>Galería del proceso</h2>
                            <div className='grid grid-cols-3 gap-4'>
                                <img src='https://media.istockphoto.com/id/1700606833/es/foto/piscina-en-el-patio-trasero-exterior-de-una-extraordinaria-casa-de-lujo.jpg?s=2048x2048&w=is&k=20&c=BDm2-JZzkwKKYvt5yrDE3MhJJG8EWOpoOdrCjW-az1g=' alt='Proceso 1' className='w-full h-auto rounded-lg' />
                                <img src='https://media.istockphoto.com/id/1700606833/es/foto/piscina-en-el-patio-trasero-exterior-de-una-extraordinaria-casa-de-lujo.jpg?s=2048x2048&w=is&k=20&c=BDm2-JZzkwKKYvt5yrDE3MhJJG8EWOpoOdrCjW-az1g=' alt='Proceso 2' className='w-full h-auto rounded-lg' />
                                <img src='https://media.istockphoto.com/id/1700606833/es/foto/piscina-en-el-patio-trasero-exterior-de-una-extraordinaria-casa-de-lujo.jpg?s=2048x2048&w=is&k=20&c=BDm2-JZzkwKKYvt5yrDE3MhJJG8EWOpoOdrCjW-az1g=' alt='Proceso 3' className='w-full h-auto rounded-lg' />
                            </div>

                        </div>
                    </div>
                    <div className='max-w-6xl mx-auto py-6'>
                        <Reviews />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto text-center p-4 mb-10">
                    <h2>¿Tienes un proyecto en mente?</h2>
                    <p className="max-w-3xl mx-auto py-2 text-black/70">Permítenos hacer realidad tu proyecto de piscina. Desde la consulta inicial hasta el mantenimiento continuo, estamos aquí para ayudarte.</p>
                    <div className="flex gap-4 items-center justify-center">
                        <button className="border border-[var(--color-navbar)] bg-[var(--color-navbar)] text-white px-4 py-2 rounded-lg text-sm hover:scale-105 hover:bg-[var(--color-navbar)]/70 hover:border-[var(--color-navbar)]/70 active:scale-95 transition-all duration-300">Solicitar presupuesto</button>
                        <button className="border border-[var(--color-navbar)] px-4 py-2 rounded-lg text-sm text-[var(--color-navbar)] hover:scale-105 hover:bg-[var(--color-navbar)]/40 hover:border-[var(--color-navbar)]/70 active:scale-95 transition-all duration-300">Ver nuestros servicios</button>
                    </div>
                </div>
            </section>
        </div>
    )
}