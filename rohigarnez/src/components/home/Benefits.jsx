import { Shield } from 'lucide-react'

export default function Benefits() {

    return (
        <div>
            <div className="flex items-center gap-4 space-y-2">
                <div className="rounded-full bg-green-200 p-2">
                    <Shield size={32} />
                </div>
                <div>
                    <h4 className='text-xs'>Salud y Seguridad</h4>
                    <p className='text-3xs'>Un mantenimiento adecuado garantiza agua limpia y segura para ti y tu familia.</p>
                </div>
            </div>
        </div>
    )
}