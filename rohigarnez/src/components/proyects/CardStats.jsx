import { CircleCheckBig } from 'lucide-react'

export default function CardStats() {
    return(
        <div className='flex flex-col items-center space-y-2 text-[var(--color-navbar)] border border-[var(--color-navbar)]/30 p-6 rounded-lg shadow-lg'>
            <div> <CircleCheckBig size={35} className='' /> </div>
            <div className='text-2xl font-bold'>+250</div>
            <span className='text-gray-500'>Proyectos Completados</span>
        </div>
    )
}