import { Eye } from "lucide-react";

export default function MealHistoryTable({ meals }) {
    return (
        <div className="space-y-5">
            {meals.map((meal) => {
                const totalCalories = meal.mealItems.reduce(
                    (sum, item) => sum + item.calories,
                    0
                );

                const totalProtein = meal.mealItems.reduce(
                    (sum, item) => sum + item.protein,
                    0
                );

                const totalCarbs = meal.mealItems.reduce(
                    (sum, item) => sum + item.carbs,
                    0
                );

                const totalFat = meal.mealItems.reduce(
                    (sum, item) => sum + item.fat,
                    0
                );

                return (
                    <div
                        key={meal.mealId}
                        className="bg-white rounded-2xl shadow border p-5 hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <p className="text-sm text-slate-500">
                                    {new Date(meal.mealDate).toLocaleDateString()}
                                </p>

                                <h3 className="mt-2 text-lg font-semibold text-slate-800">
                                    {meal.mealText}
                                </h3>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-sm text-slate-500">Calories</p>
                                <p className="text-xl font-bold text-emerald-600">
                                    {totalCalories}
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-sm text-slate-500">Protein</p>
                                <p className="text-xl font-bold text-blue-600">
                                    {totalProtein} g
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-sm text-slate-500">Carbs</p>
                                <p className="text-xl font-bold text-amber-600">
                                    {totalCarbs} g
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 text-center">
                                <p className="text-sm text-slate-500">Fat</p>
                                <p className="text-xl font-bold text-rose-600">
                                    {totalFat} g
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}