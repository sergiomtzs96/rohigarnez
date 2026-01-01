

export default function LabelCaracteristicas({ color, texto, colorText }) {

    return(
        <span className={`bg-${color} text-xs text-${colorText} px-3 py-1 rounded-xl text-center`}>
            {texto}
        </span>
    )
}