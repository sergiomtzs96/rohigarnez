import { MapPin } from 'lucide-react';


export default function LabelLocation() {

    return(
        <div className='flex flex-col items-center justify-center bg-gray-100 shadow-lg w-full gap-4 p-6 rounded-lg'>
            <MapPin />
            Madrid
        </div>
    )
}