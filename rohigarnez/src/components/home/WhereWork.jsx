import { MapPin } from "lucide-react"

export default function WhereWork () {

    return(
        <div className="bg-gray-200 rounded-lg p-4 max-w-xs hover:bg-gray-200/80">
            <div className="flex gap-10 font-bold">
                <MapPin /> 
                Madrid
            </div>
            <div className="flex flex-col items-start px-15">
                <span className="font-medium">Comunidad de Madrid</span>
                <span className="font-thin text-xs">Madrid Capital, Alcalá de Henares, Getafe, Móstoles</span>
            </div>
        </div>
    )
}