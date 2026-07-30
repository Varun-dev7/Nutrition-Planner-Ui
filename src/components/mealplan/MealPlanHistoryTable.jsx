import { Eye } from "lucide-react";
import Button from "../common/Button";

export default function MealPlanHistoryTable({mealPlans,onView,}) {
    return (
        <div className="space-y-5">
            {mealPlans.map((plan) => (
                <div
                    key={plan.mealPlanId}
                    className="bg-white rounded-2xl shadow border p-5 hover:shadow-md transition"
                >
                    <div className="flex justify-between items-start gap-4">

                        <div>
                            <p className="text-sm text-slate-500">
                                {new Date(
                                    plan.createdAt || plan.planDate
                                ).toLocaleDateString()}
                            </p>

                            <h3 className="mt-2 text-lg font-semibold text-slate-800">
                                AI Meal Plan
                            </h3>
                        </div>

                        <Button
                            size="sm"
                            onClick={() => onView(plan)}
                        >
                            <Eye size={16} className="mr-1" />
                            View
                        </Button>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                            <p className="text-sm text-slate-500">
                                Calories
                            </p>

                            <p className="text-xl font-bold text-emerald-600">
                                {plan.totalCalories}
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                            <p className="text-sm text-slate-500">
                                Protein
                            </p>

                            <p className="text-xl font-bold text-blue-600">
                                {plan.totalProtein} g
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                            <p className="text-sm text-slate-500">
                                Carbs
                            </p>

                            <p className="text-xl font-bold text-amber-600">
                                {plan.totalCarbs} g
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                            <p className="text-sm text-slate-500">
                                Fat
                            </p>

                            <p className="text-xl font-bold text-rose-600">
                                {plan.totalFat} g
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}