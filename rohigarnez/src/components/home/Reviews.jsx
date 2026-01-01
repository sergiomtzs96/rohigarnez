import { Rate } from 'antd';

export default function Reviews() {
    return (
        <div className='rounded-lg shadow-lg w-full h-auto'>
            <div className='p-6 text-start space-y-2'>
                <div>
                    <Rate disabled={true} />
                </div>
                <p className='text-black/60'>"Comentario de la persona"</p>
                <div className='font-semibold text-sm'>Nombre de la persona</div>
                <div className='text-xs font-medium text-black/60'>Localización</div>
            </div>
        </div>
    )
}