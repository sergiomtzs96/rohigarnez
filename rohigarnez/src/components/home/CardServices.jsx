

export default function CardServices() {

    return (
        <div className="max-w-xs mx-auto border border-gray-200 rounded-lg shadow-lg max-h-full text-start hover:scale-105 transition-all duration-300">
            <div className="rounded-t-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1753194931766-211c9f563156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2wlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NTkzMTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="imagen" className="hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-6 w-full text-justify space-y-4">
                <h3>Limpieza de Piscinas</h3>
                <p>Servicio completo de limpieza y mantenimiento para mantener tu piscina en perfectas condiciones.</p>
                <button className="border border-gray-200 px-6 py-2 rounded-lg w-full hover:scale-105 transition-all duration-300 hover:bg-gray-50" >Más información</button>
            </div>
        </div>
    )
}