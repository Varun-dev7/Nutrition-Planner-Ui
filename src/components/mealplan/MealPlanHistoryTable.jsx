import { Eye } from "lucide-react";
import Button from "../common/Button";

export default function MealPlanHistoryTable({
    mealPlans,
    onView,
}) {
    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow">

            <table className="min-w-full">

                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-center">Calories</th>
                        <th className="px-4 py-3 text-center">Protein</th>
                        <th className="px-4 py-3 text-center">Carbs</th>
                        <th className="px-4 py-3 text-center">Fat</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {mealPlans.map((plan) => (

                        <tr
                            key={plan.id}
                            className="border-t hover:bg-gray-50"
                        >
                            <td className="px-4 py-3">
                                {new Date(
                                    plan.createdAt || plan.planDate
                                ).toLocaleDateString()}
                            </td>

                            <td className="px-4 py-3 text-center">
                                {plan.totalCalories}
                            </td>

                            <td className="px-4 py-3 text-center">
                                {plan.totalProtein} g
                            </td>

                            <td className="px-4 py-3 text-center">
                                {plan.totalCarbs} g
                            </td>

                            <td className="px-4 py-3 text-center">
                                {plan.totalFat} g
                            </td>

                            <td className="px-4 py-3 text-center">
                                <Button
                                    size="sm"
                                    onClick={() => onView(plan)}
                                >
                                    <Eye size={16} className="mr-1" />
                                    View
                                </Button>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}