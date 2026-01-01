

export default function CardServices({ service }) {

    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 text-center">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-[var(--color-navbar)]/30 rounded-lg p-2">
                    {service.icon}
                </div>
                <div className="flex-1">
                    <h4>{service.title}</h4>
                </div>
            </div>
            <span className="text-sm text-gray-500">{service.description}</span>
        </div>
    )
}