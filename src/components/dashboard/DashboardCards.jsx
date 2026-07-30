import Card from "../common/Card";

export default function DashboardCards({
    calories = 0,
    protein = 0,
    carbs = 0,
    fat = 0,
}) {

    const cards = [
        {
            title: "Calories",
            value: `${calories} kcal`,
            color: "bg-orange-100 text-orange-600",
        },
        {
            title: "Protein",
            value: `${protein} g`,
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Carbs",
            value: `${carbs} g`,
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Fat",
            value: `${fat} g`,
            color: "bg-pink-100 text-pink-600",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map(card => (

                <Card key={card.title}>

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-slate-500">
                                {card.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {card.value}
                            </h2>

                        </div>

                        <div
                            className={`h-14 w-14 rounded-2xl flex items-center justify-center ${card.color}`}
                        >
                            ★
                        </div>

                    </div>

                </Card>

            ))}

        </div>
    );
}