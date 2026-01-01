import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";
function CalltoActionServices() {
    const navigate = useNavigate();
    return (
        <div>
            <Card className="bg-[var(--color-navbar)]/80 text-white text-center p-10">
                <CardHeader>
                    <CardTitle><h2>¿Listo para empezar?</h2></CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CardDescription>
                        <p className="text-gray-300">
                            Solicita un presupuesto sin compromiso y descubre por qué somos la mejor opción para el mantenimiento de tu piscina comunitaria.
                        </p>
                    </CardDescription>
                    <div className="flex gap-4 items-center justify-center">
                        <Button onClick={() => navigate('/contacto')} variant="outline">Solicitar presupuesto</Button>
                        <Button onClick={() => navigate('/servicios')}variant="outline">Ver todos los servicios</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function CalltoActionProyect() {
    return (
        <div>
            <Card className="bg-[var(--color-navbar)]/80 text-white text-center p-10">
                <CardHeader>
                    <CardTitle><h2>¿Tienes un proyecto en mente?</h2></CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CardDescription>
                        <p className="text-gray-300">
                            Permítenos hacer realidad tu proyecto de piscina. Desde la consulta inicial hasta el mantenimiento continuo, estamos aquí para ayudarte.
                        </p>
                    </CardDescription>
                    <div className="flex gap-4 items-center justify-center">
                        <Button variant="outline">Solicitar Consulta Gratuita</Button>
                        <Button variant="outline">Ver Nuestros Servicios</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CalltoActionServices;
export { CalltoActionProyect, CalltoActionServices };