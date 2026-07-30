import { Eye } from "lucide-react";

export default function MealHistoryTable({
    meals
}) {

    return (

        <div className="bg-white rounded-2xl shadow border overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="text-left p-4">Date</th>

                        <th className="text-left p-4">Description</th>

                        <th className="text-center p-4">Calories</th>

                        <th className="text-center p-4">Protein</th>

                        <th className="text-center p-4">Carbs</th>

                        <th className="text-center p-4">Fat</th>

                        <th className="text-center p-4">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        meals.map((meal) => {

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
                                <tr
                                    key={meal.mealId}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="p-4">

                                        {new Date(meal.mealDate)
                                            .toLocaleDateString()}

                                    </td>

                                    <td className="p-4">

                                        {meal.mealText}

                                    </td>

                                    <td className="text-center">

                                        {totalCalories}

                                    </td>

                                    <td className="text-center">

                                        {totalProtein}

                                    </td>

                                    <td className="text-center">

                                        {totalCarbs}

                                    </td>

                                    <td className="text-center">

                                        {totalFat}

                                    </td>

                                    <td className="text-center">

                                        <button
                                            className="text-emerald-600 hover:text-emerald-700"
                                        >

                                            <Eye size={20} />

                                        </button>

                                    </td>

                                </tr>
                            );
                        })

                    }

                </tbody>

            </table>

        </div>

    );

}