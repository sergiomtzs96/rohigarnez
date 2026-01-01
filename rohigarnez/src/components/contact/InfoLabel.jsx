import { Phone, Mail, MapPin, Watch} from 'lucide-react'

export default function InfoLabel() {
    return(
        <div className='border border-gray-200 shadow-lg rounded-lg p-6 w-full'>
            <div className='flex gap-4 items-start'>
                <div className='bg-[var(--color-navbar)]/70 flex items-center p-4 rounded-full'> <Phone size={20} /> </div>
                <div className='flex flex-col'>
                    <h4>Teléfono</h4>
                    <i className='text-black/60 text-sm'>Llamadas y WhatsApp</i>
                    <i className='font-semibold text-sm'>123 456 789</i>
                </div>
            </div>
            
        </div>
    )
}