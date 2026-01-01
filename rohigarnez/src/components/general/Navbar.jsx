import LogoRohigarnez from "../../assets/shared/icons/Logo.svg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {

    const navigate = useNavigate();

    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const mainNavItems = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Nosotros",
      dropdown: [
        { label: "Nuestra Empresa", to: "/nosotros" },
        { label: "Nuestro Equipo", to: "/nosotros/equipo" },
        { label: "Marcas y Partners", to: "/nosotros/marcas" },
      ],
    },
    {
      label: "Servicios",
      dropdown: [
        { label: "Todos los Servicios", to: "/services" },

        { divider: "Mantenimiento" },
        { label: "Sin Socorristas", to: "/services/Pools" },
        { label: "Con Socorristas", to: "/services/con-socorristas" },

        { divider: "Detección y Diagnóstico" },
        { label: "Localización de Fugas", to: "/services/fugas" },
        { label: "Pruebas de Presión", to: "/services/presion" },
        { label: "Pruebas con Aire", to: "/services/aire" },

        { divider: "Reparaciones" },
        { label: "Reparación de Tuberías", to: "/services/tuberias" },
        { label: "Reparación de Grietas", to: "/services/grietas" },

        { divider: "Construcción y Obra" },
        { label: "Construcción de Piscinas", to: "/services/construccion" },
        { label: "Gunitado de vasos", to: "/services/gunitado" },
        { divider: "Instalaciones" },
        { label: "Cloradores Salinos", to: "/services/cloradores" },
        { label: "Bombas de Calor", to: "/services/bombas-calor" },
      ],
    },
    {
      label: "Proyectos",
      to: "/proyectos",
    },
    {
      label: "Contacto",
      to: "/contacto",
    },
  ];

    return (
        <header className="w-full bg-[var(--color-navbar)] px-20">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={LogoRohigarnez} alt="Rohigarnez Logo" className="w-12 h-12" />
          <h3 className="font-bold text-xl text-white">Rohigarnez</h3>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex items-center space-x-4">
          {mainNavItems.map((item, index) => (
            <div key={index} className="relative">
              {!item.dropdown ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-foreground text-primary"
                        : "text-primary-foreground hover:text-primary hover:bg-primary-foreground/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() =>
                      item.label === "Servicios"
                        ? setServicesOpen(!servicesOpen)
                        : setAboutOpen(!aboutOpen)
                    }
                    className="px-3 py-2 rounded-md text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {(item.label === "Servicios" ? servicesOpen : aboutOpen) && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-background border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                      {item.dropdown.map((sub, i) =>
                        sub.divider ? (
                          <div
                            key={i}
                            className="px-4 py-2 text-[11px] font-semibold text-gray-500 uppercase text-center"
                          >
                            — {sub.divider} —
                          </div>
                        ) : (
                          <NavLink
                            key={i}
                            to={sub.to}
                            onClick={() => {
                              setServicesOpen(false);
                              setAboutOpen(false);
                            }}
                            className="block px-4 py-2 text-sm hover:bg-accent hover:text-primary"
                          >
                            {sub.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("/contacto")}
          className="rounded-lg bg-gray-100 text-[var(--color-navbar)] text-sm px-4 py-2 hover:scale-105 transition-all shadow-lg"
        >
          Solicitar presupuesto
        </button>
      </div>
    </header>
  );
}
