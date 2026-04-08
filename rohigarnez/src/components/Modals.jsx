import { Save, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Checkbox } from 'radix-ui';


export function ModalProjects({ onClose }) {

    const [text, setText] = useState('');

    const linesArray = text.split('\n');


    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg w-130 relative'>
                <div className='flex items-center justify-between'>
                    <h3>Editar Proyecto</h3>
                    <X size={12} onClick={onClose} />
                </div>
                <div>
                    <form action="" className='flex flex-col items-start space-y-4'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Título</label>
                            <input type="text" placeholder="Título del proyecto" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="" >Descripción</label>
                            <textarea name="description" id="description" placeholder="Descripción del proyecto..." className='rounded-lg border-1 py-2 px-3'></textarea>
                        </div>
                        <div className='flex w-full gap-4'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">Ubicación</label>
                                <input type="text" placeholder="Madrid, España" className='rounded-lg border-1 py-2 px-3' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">Fecha</label>
                                <input type="text" placeholder="2023-2024 o 2024" className='rounded-lg border-1 py-2 px-3' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Categoría</label>
                            <select name="category" id="category" className='rounded-lg border-1 py-2 px-3'>
                                <option value="cat">categoría</option>
                                <option value="cate">categoria</option>
                                <option value="categoria">categoria</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Superficie</label>
                            <input type="number" placeholder='85' className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Volumen</label>
                            <input type="number" placeholder='120' className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Tecnología</label>
                            <input type="text" placeholder='Domótica iAquaLink' className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Detalles</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={5}
                                placeholder='Por cada línea es un detalle específico del proyecto'
                                className='rounded-lg border-1 py-2 px-3 w-full'
                            ></textarea>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">URL de la imagen</label>
                            <input type="text" placeholder="https://example.com/image.jpg" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex gap-4 justify-between w-full'>
                            <Button><Save className="w-4 h-4 mr-2" /> Guardar Proyecto </Button>
                            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export function ModalPackages({ onClose }) {

    const [text, setText] = useState('');

    const linesArray = text.split('\n');

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg w-130 relative'>
                <div className='flex items-center justify-between'>
                    <h3>Editar Paquetes del Servicio</h3>
                    <X size={12} onClick={onClose} />
                </div>
                <div>
                    <form action="" className='flex flex-col items-start space-y-4'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Título</label>
                            <input type="text" placeholder="Nombre del paquete" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="" >Descripción</label>
                            <textarea name="description" id="description" placeholder="Descripción del paquete..." className='rounded-lg border-1 py-2 px-3'></textarea>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Subtítulo</label>
                            <input type="text" placeholder="Segunda descripción del paquete" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Precio</label>
                            <input type="text" placeholder="Desde 580€" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">¿Recomendado?</label>
                            <label htmlFor="">
                                <input type="radio" name="recommended" id="recommended" /> Sí
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="recommended" id="not-recommended" /> No
                            </label>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Detalles</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={5}
                                placeholder='Por cada línea es un detalle específico del proyecto'
                                className='rounded-lg border-1 py-2 px-3 w-full'
                            ></textarea>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Cumplimiento</label>
                            <input type="text" placeholder="Cumple toda la normativa" className='rounded-lg border-1 py-2 px-3' />
                        </div>
                        <div className='flex gap-4 justify-between w-full'>
                            <Button><Save className="w-4 h-4 mr-2" /> Guardar Proyecto </Button>
                            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

