import BtnFilterProyects from "../components/proyects/BtnFilterProyects";
import CardStats from "../components/proyects/CardStats";
import CardProyect from "../components/proyects/CardProyect";
import { Steps } from 'antd';
import StepsWork from "../components/proyects/StepsWork";


export default function Proyects() {

    return (
        <div>
            <section>
                <div className="bg-[var(--color-navbar)]/80 text-white text-center">
                    <div className="flex flex-col items-center text-center p-10 space-y-4">
                        <h1>Nuestros Proyectos</h1>
                        <p className="max-w-2xl">Descubre la calidad y profesionalidad de AquaClean Pro a través de nuestros proyectos realizados. Cada trabajo refleja nuestro compromiso con la excelencia.</p>
                        <div className="flex gap-4 items-center">
                            <span className="text-xs items-center bg-[var(--color-navbar)]/90 px-4 py-1 rounded-lg">+250 Proyectos Completados</span>
                            <span className="text-xs items-center bg-[var(--color-navbar)]/90 px-4 py-1 rounded-lg">98% Satisfacción</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-4 grid-rows-1 gap-10 p-24">
                        <CardStats />
                        <CardStats />
                        <CardStats />
                        <CardStats />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto p-10">
                    <div className="grid grid-cols-6 grid-rows-1 gap-4">
                        <BtnFilterProyects />
                        <BtnFilterProyects />
                        <BtnFilterProyects />
                        <BtnFilterProyects />
                        <BtnFilterProyects />
                        <BtnFilterProyects />

                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto p-10">
                    <div className="text-center">
                        <h2>Galería de Proyectos</h2>
                        <p>Cada proyecto es único y está diseñado para superar las expectativas de nuestros clientes.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 p-24">
                        <CardProyect />
                        <CardProyect />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4">
                        <h2>Nuestro Proceso de trabajo</h2>
                        <p>Un método probado que garantiza resultados excepcionales en cada proyecto.</p>
                        <div className="p-4">
                            <StepsWork />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto text-center p-4 mb-10">
                    <h2>¿Tienes un proyecto en mente?</h2>
                    <p className="max-w-3xl mx-auto py-2 text-black/70">Permítenos hacer realidad tu proyecto de piscina. Desde la consulta inicial hasta el mantenimiento continuo, estamos aquí para ayudarte.</p>
                    <div className="flex gap-4 items-center justify-center">
                        <button className="border border-[var(--color-navbar)] bg-[var(--color-navbar)] text-white px-4 py-2 rounded-lg text-sm hover:scale-105 hover:bg-[var(--color-navbar)]/70 hover:border-[var(--color-navbar)]/70 active:scale-95 transition-all duration-300">Solicitar consulta gratuita</button>
                        <button className="border border-[var(--color-navbar)] px-4 py-2 rounded-lg text-sm text-[var(--color-navbar)] hover:scale-105 hover:bg-[var(--color-navbar)]/40 hover:border-[var(--color-navbar)]/70 active:scale-95 transition-all duration-300">Ver nuestros servicios</button>
                    </div>
                </div>
            </section>
        </div>
    )
}