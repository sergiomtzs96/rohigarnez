import { Quote } from "lucide-react";
import { Rate } from 'antd';
export default function ReviewProyect() {

    return(
        <div className="flex p-2 justify-center">
            <Quote />
            <div className="text-start px-8">
                <span className="text-sm text-balance">"Superaron todas nuestras expectativas. El equipo fue profesional, puntual y el resultado final es espectacular."</span>
                <div className=" flex gap-4 items-center">
                    <Rate className="" />
                    <span className="text-xs">- María García</span>
                </div>
            </div>
        </div>
    )
}