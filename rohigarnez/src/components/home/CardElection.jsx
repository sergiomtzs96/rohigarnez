import { Shield } from "lucide-react";

export default function Card() {

    return (

        <div className="rounded-xl shadow-xl w-full h-full p-8 bg-white text-center space-y-4 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center mx-auto space-y-4">
                <div className="rounded-full p-4 bg-gray-200">
                    <Shield />
                </div>
                <h3>Técnicos Cualificados</h3>
                <p className="text-gray-500">Personal altamente cualificado con más de 15 años de experiencia en el sector.</p>
            </div>
        </div>
    )
}