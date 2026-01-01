import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
 
export default function Footer() {


    return (
        <div className="bg-[var(--color-navbar)] text-white px-20 py-10 space-y-6">
            <div className="flex jusify-between items-start gap-3">
                <div className="w-full space-y-2">
                    <h3 className="text-h3">Rohigarnez</h3>
                    <p className="w-2/3 text-justify">Más de 15 años de experiencia en mantenimiento y construcción de piscinas. Personal cualificado e instaladores autorizados RENOLIT.</p>
                    <div className="flex items-center space-x-4 mt-4">
                        <a href="Facebook"><Facebook size={18} /></a>
                        <a href="Instagram"><Instagram size={18} /></a>
                    </div>
                </div>
                <div className="w-full space-y-2">
                    <h4>Servicios</h4>
                    <ul className="space-y-1">
                        <li><a href="">Mantenimiento Comunitario</a></li>
                        <li><a href="">Piscinas Nuevas</a></li>
                        <li><a href="">Rehabilitación</a></li>
                        <li><a href="">Reparación Depuradoras</a></li>
                    </ul>
                </div>
                <div className="w-full space-y-2">
                    <h4>Empresa</h4>
                    <ul className="space-y-1">
                        <li><a href="">Sobre Nosotros</a></li>
                        <li><a href="">Nuestro equipo</a></li>
                        <li><a href="">Marcas y Partners</a></li>
                        <li><a href="">Proyectos</a></li>
                    </ul>
                </div>
                <div className="w-full space-y-2">
                    <h4>Contacto</h4>
                    <ul className="space-y-3">
                        <li className="flex gap-3"><Phone size={18} /> +34 123 456 789</li>
                        <li className="flex gap-3"><Mail size={18} /> info@aquacleanpro.es</li>
                        <li className="flex gap-3"><MapPin size={18} /> Calle Ejemplo 123, Madrid, España</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 pt-4 text-center">
                <p>&copy; 2024 Rohigarnez. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}
