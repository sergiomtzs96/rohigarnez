import { Droplets, Dot } from "lucide-react";

export default function ShowServices({ imagePosition = 'right' }) {

    const isRight = imagePosition === 'right';

    return (

        <div>
            {isRight ? (
                <>

                    <div className="p-6 flex items-center justify-between w-full mx-auto">
                        <div className="w-full space-y-4 p-6 mx-auto">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-[var(--color-navbar)]/20"> <Droplets /> </div>
                                <h4>Limpieza de Piscinas</h4>
                            </div>
                            <p className="max-w-md">Servicio completo de limpieza y desinfección para mantener tu piscinas cristalina y segura</p>
                            <div className="w-full mt-4">
                                <h5>¿Qué incluye?</h5>
                                <ul>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Tipos de Servicios</h5>
                                <div className="border-s-3  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                                <div className="border-s-3  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                                <div className="border-l-4  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                            </div>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2025/10/01/00/29/inside-dandlion-9865287_1280.jpg" alt="imagen" className="w-full h-80 rounded-lg shadow-lg" />
                    </div>
                </>
            ) : (
                <>
                    <div className="p-6 flex items-center justify-between gap-20 w-full mx-auto">
                        <img src="https://cdn.pixabay.com/photo/2025/10/01/00/29/inside-dandlion-9865287_1280.jpg" alt="imagen" className="w-full h-80 rounded-lg shadow-lg" />
                        <div className="w-full space-y-4 p-6 mx-auto flex flex-col items-start">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-[var(--color-navbar)]/20"> <Droplets /> </div>
                                <h4>Limpieza de Piscinas</h4>
                            </div>
                            <p className="max-w-md">Servicio completo de limpieza y desinfección para mantener tu piscinas cristalina y segura</p>
                            <div className="w-full mt-4">
                                <h5>¿Qué incluye?</h5>
                                <ul>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                    <li className="flex items-center"><Dot color="var(--color-navbar)" size={40} /><span>Limpieza de superfices y fondo</span></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Tipos de Servicios</h5>
                                <div className="border-s-3  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                                <div className="border-s-3  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                                <div className="border-l-4  border-[var(--color-navbar)] px-4 mt-2 py-1">
                                    <h6>Limpieza Regular</h6>
                                    <span>Mantenimiento semanal o quincenal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>

    )
}