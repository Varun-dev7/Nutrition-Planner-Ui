import Card from "../common/Card";
import { Flame, Target, Beef, Wheat, Droplets } from "lucide-react";

export default function NutritionSummary({ mealPlan }) {

    const remaining =
        mealPlan.targetCalories - mealPlan.totalCalories;

    const cards = [
        {
            title: "Target",
            value: `${mealPlan.targetCalories} kcal`,
            icon: <Target size={20} className="text-blue-600" />
        },
        {
            title: "Planned",
            value: `${mealPlan.totalCalories} kcal`,
            icon: <Flame size={20} className="text-orange-600" />
        },
        {
            title: "Remaining",
            value: `${remaining} kcal`,
            icon: <Target size={20} className="text-green-600" />
        },
        {
            title: "Protein",
            value: `${mealPlan.totalProtein} g`,
            icon: <Beef size={20} className="text-red-600" />
        },
        {
            title: "Carbs",
            value: `${mealPlan.totalCarbs} g`,
            icon: <Wheat size={20} className="text-yellow-600" />
        },
        {
            title: "Fat",
            value: `${mealPlan.totalFat} g`,
            icon: <Droplets size={20} className="text-purple-600" />
        }
    ];

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

            {
                cards.map((card, index) => (

                    <Card key={index}>

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-500">
                                    {card.title}
                                </p>

                                <h2 className="text-xl font-bold mt-2">
                                    {card.value}
                                </h2>

                            </div>

                            {card.icon}

                        </div>

                    </Card>

                ))
            }

        </div>
    );
}