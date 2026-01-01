

export default function CardBenefits({ benefit }) {

    return(
        <div className="border border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center p-6 space-y-2">
            <div className="bg-[var(--color-navbar)]/30 rounded-lg p-2">
                {benefit.icon}
            </div>
            <div className="text-lg text-[var(--color-navbar)]">{benefit.highlight}</div>
            <h5>{benefit.title}</h5>
            <span className="text-xs text-gray-500">{benefit.description}</span>
        </div>
    )
}