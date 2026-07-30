import Card from "../common/Card";
import { UtensilsCrossed } from "lucide-react";

export default function MealSection({ title, items }) {

    if (!items.length) return null;

    return (
        <Card>

            <h2 className="text-xl font-semibold mb-6">
                {title}
            </h2>

            <div className="space-y-4">

                {
                    items.map((meal, index) => (

                        <div
                            key={index}
                            className="border rounded-xl p-5"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <div className="flex items-center gap-2">

                                        <UtensilsCrossed
                                            size={18}
                                            className="text-emerald-600"
                                        />

                                        <h3 className="font-semibold">
                                            {meal.food}
                                        </h3>

                                    </div>

                                    <p className="text-gray-500 mt-2">
                                        {meal.quantity}
                                    </p>

                                </div>

                                <div className="text-right">

                                    <h3 className="text-2xl font-bold text-emerald-600">
                                        {meal.estimatedCalories}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        kcal
                                    </p>

                                </div>

                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-5">

                                <div className="bg-red-50 rounded-lg p-3 text-center">

                                    <p className="text-xs text-gray-500">
                                        Protein
                                    </p>

                                    <h4 className="font-semibold">
                                        {meal.protein} g
                                    </h4>

                                </div>

                                <div className="bg-yellow-50 rounded-lg p-3 text-center">

                                    <p className="text-xs text-gray-500">
                                        Carbs
                                    </p>

                                    <h4 className="font-semibold">
                                        {meal.carbs} g
                                    </h4>

                                </div>

                                <div className="bg-purple-50 rounded-lg p-3 text-center">

                                    <p className="text-xs text-gray-500">
                                        Fat
                                    </p>

                                    <h4 className="font-semibold">
                                        {meal.fat} g
                                    </h4>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </Card>
    );
}