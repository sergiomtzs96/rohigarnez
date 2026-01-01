import { Rate } from 'antd';

export default function CardReview() {

    return(

        <div className='w-full p-6 border border-gray-300 rounded-lg shadow-md flex flex-col gap-2'>
            <Rate />
            <p className='text-gray-500 border-b py-2'>"Excelente servicio de limpieza. Muy profesionales y siempre puntuales. Mi piscina está perfecta todo el año."</p>
            <span className='text-sm font-medium'>Nombre del cliente</span>
            <span className='text-xs text-blue-500'>Servicio ejecutado</span>

        </div>

    )
}