import Modal from "../common/Modal";

export default function MealPlanDetailsModal({
    isOpen,
    onClose,
    mealPlan,
}) {
    if (!mealPlan) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="🍽️ Meal Plan Details"
            width="max-w-4xl"
        >
            <div className="space-y-8">

                {/* Nutrition Summary */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center">
                        <p className="text-sm text-emerald-700 font-medium">
                            Calories
                        </p>

                        <h2 className="text-3xl font-bold text-emerald-600 mt-2">
                            {mealPlan.totalCalories}
                        </h2>

                        <p className="text-xs text-slate-500 mt-1">
                            kcal
                        </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5 text-center">
                        <p className="text-sm text-blue-700 font-medium">
                            Protein
                        </p>

                        <h2 className="text-3xl font-bold text-blue-600 mt-2">
                            {mealPlan.totalProtein}
                        </h2>

                        <p className="text-xs text-slate-500 mt-1">
                            grams
                        </p>
                    </div>

                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-center">
                        <p className="text-sm text-amber-700 font-medium">
                            Carbs
                        </p>

                        <h2 className="text-3xl font-bold text-amber-600 mt-2">
                            {mealPlan.totalCarbs}
                        </h2>

                        <p className="text-xs text-slate-500 mt-1">
                            grams
                        </p>
                    </div>

                    <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5 text-center">
                        <p className="text-sm text-rose-700 font-medium">
                            Fat
                        </p>

                        <h2 className="text-3xl font-bold text-rose-600 mt-2">
                            {mealPlan.totalFat}
                        </h2>

                        <p className="text-xs text-slate-500 mt-1">
                            grams
                        </p>
                    </div>

                </div>

                {/* Meal List */}

                <div className="space-y-5">

                    {mealPlan.mealItems?.map((item, index) => (

                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all p-5"
                        >

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">

                                <div className="flex-1">

                                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        {item.mealType}
                                    </span>

                                    <h3 className="text-xl font-semibold text-slate-800">
                                        {item.food}
                                    </h3>

                                    <p className="text-slate-500 mt-1">
                                        {item.quantity}
                                    </p>

                                </div>

                                <div className="grid grid-cols-2 gap-3 text-center min-w-[220px]">

                                    <div className="bg-emerald-50 rounded-xl p-3">
                                        <p className="text-xs text-slate-500">
                                            Calories
                                        </p>

                                        <p className="font-bold text-emerald-600">
                                            {item.estimatedCalories}
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-3">
                                        <p className="text-xs text-slate-500">
                                            Protein
                                        </p>

                                        <p className="font-bold text-blue-600">
                                            {item.protein} g
                                        </p>
                                    </div>

                                    <div className="bg-amber-50 rounded-xl p-3">
                                        <p className="text-xs text-slate-500">
                                            Carbs
                                        </p>

                                        <p className="font-bold text-amber-600">
                                            {item.carbs} g
                                        </p>
                                    </div>

                                    <div className="bg-rose-50 rounded-xl p-3">
                                        <p className="text-xs text-slate-500">
                                            Fat
                                        </p>

                                        <p className="font-bold text-rose-600">
                                            {item.fat} g
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </Modal>
    );
}