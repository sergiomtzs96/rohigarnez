

export default function RecentProyects() {

    return (
        <div className="rounded-lg shadow-lg">
            <div className="relative overflow-hidden group rounded-t-lg">
                <img src="https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg" alt="imagen" className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/70 bg-opacity-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 space-y-2">
                    <h5 className="font-bold">Rehabilitación Completa en Pozuelo</h5>
                    <span className="text-sm text-balance w-full">Renovación integral de piscina residencial con nuevo sistema de filtración y revestimiento de gresite.</span>
                    <span className="text-xs text-white/50">Pozuelo de Alarzón, Madrid</span>
                    <span className="text-xs text-white/50">Octubre 2024</span>
                </div>
            </div>
            <div className="p-6 space-y-2">
                <div className="w-full flex justify-between space-y-4">
                    <span className="text-xs rounded-xl bg-gray-200 flex items-center px-4 py-1">Rehabilitación</span>
                    <span className="text-gray-500 text-sm">Octubre 2024</span>
                </div>
                <h5 className="text-md font-semibold">Rehabilitación Completa en Pozuelo</h5>
                <span className="text-sm text-black/50">Pozuelo de Alarcón, Madrid</span>
            </div>
        </div>
    )
}