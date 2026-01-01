import CardReview from "./CardReview"

export default function ReviewsClients() {

    return(

        <div className="space-y-4">
            <div className="flex flex-col items-center text-center">
                <h2>Opiniones de nuestros clientes</h2>
                <p>Lo que dicen quienes han confiado en nuestros servicios</p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
                <CardReview />
                <CardReview />
                <CardReview />
            </div>
        </div>

    )
}