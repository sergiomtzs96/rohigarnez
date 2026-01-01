import { Filter } from 'lucide-react';

export default function BtnFilterProyects() {
    return(
        <button className='text-[var(--color-navbar)] flex gap-2 items-center text-center border border-[var(--color-navbar)]/50 rounded-lg px-2 py-1 peer-checked:bg-[var(--color-navbar)] hover:bg-[var(--color-navbar)]/10 active:scale-95 transition-all duration-300'>
            <Filter size={16} />
            Todos los proyectos
        </button>
    )
}