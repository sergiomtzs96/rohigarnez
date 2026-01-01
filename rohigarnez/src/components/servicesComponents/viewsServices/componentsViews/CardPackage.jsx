import { CircleCheckBig } from "lucide-react";

export default function CardPackage() {

    return (
        <div>
            {map.services.package((pkg, i) => (
                <div className={border `${pkg.recommended ? 'ring-2 ring-[var(--color-navbar)] rounded-lg shadow-lg' : 'ring-1 rounded-lg'}`} >
                    <div>
                        <h3>{pkg.name}</h3>
                        <div>{pkg.price}</div>
                        <span>{pkg.description}</span>
                    </div>
                    <div>
                        <div>
                            <CircleCheckBig />
                            {map.pkg.features((item, i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                    </div>
                    <button className={text-sm `${pkg.recommended ? 'bg-[var(--color-navbar)] text-white' : ''}`}>Solicitar Presupuesto</button>
                </div>
            ))}
        </div>
    )
}