import Card from "../common/Card";

export default function MealAnalysisCard({
    meal
}) {

    if(!meal) return null;

    return (

        <Card title="AI Meal Analysis">

            <div className="grid md:grid-cols-2 gap-5">

                <div>

                    <p className="text-slate-500">
                        Total Calories
                    </p>

                    <h2 className="text-4xl font-bold text-orange-500">
                        {meal.totalCalories}
                    </h2>

                </div>

                <div>

                    <p className="text-slate-500">
                        Foods Detected
                    </p>

                    <h2 className="text-4xl font-bold text-emerald-600">
                        {meal.mealItems.length}
                    </h2>

                </div>

            </div>

        </Card>

    );

}