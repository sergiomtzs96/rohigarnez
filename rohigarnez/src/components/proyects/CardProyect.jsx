import { User, Calendar, MapPin, Watch } from 'lucide-react';
import LabelCaracteristicas from './LabelCaracteristicas';
import ReviewProyect from './ReviewProyect';

export default function CardProyect() {

    return (
        <div className='border border-[var(--color-secundary)]/50  rounded-xl shadow-lg overflow-hidden'>
            <img src="https://cdn.pixabay.com/photo/2025/10/04/10/40/visual-poetry-9872761_960_720.jpg" alt="image" className='hover:scale-105 transition-all duration-300' />
            <div className='text-center p-4'>
                <h4>Piscina Residencial Premium en Urbanización Los Altos</h4>
                <span className='text-sm text-black/60'>Construcción de piscina de obra nueva con zona de relajación, sistema de iluminación LED y clorador salino. Diseño moderno con piedra porcelánica antideslizante.</span>
                <div className='flex flex-col p-6 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <span className='flex gap-2 items-center text-xs'><User size={14} /> Familia García</span>
                        <span className='flex gap-2 items-center text-xs'><Calendar size={14} /> 2024 </span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='flex gap-2 items-center text-xs'><MapPin size={14} /> Urbanización Los Altos, Madrid</span>
                        <span className='flex gap-2 items-center text-xs'><Watch size={14} /> 45 días </span>
                    </div>
                </div>
                <div className='flex flex-col text-start p-4'>
                    <h5 className='font-semibold'>Características Destacadas: </h5>
                    <div className='grid grid-cols-2 gap-2 mt-2'>
                        <LabelCaracteristicas />
                        <LabelCaracteristicas />
                        <LabelCaracteristicas />
                        <LabelCaracteristicas />
                    </div>
                </div>
                <div>
                    <ReviewProyect />
                </div>
                <button className='mt-4 border border-[var(--color-navbar)]/60 px-4 py-1 w-full rounded-lg hover:bg-[var(--color-navbar)]/80 hover:text-white/80 active:scale-95 transition-all duration-300'>Ver detalles del proyecto  <span> &#62; </span> </button>
            </div>
        </div>
    )
}