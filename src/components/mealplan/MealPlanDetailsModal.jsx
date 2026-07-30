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
            title="Meal Plan Details"
            width="max-w-3xl"
        >
            <div className="space-y-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div className="rounded-lg border p-3">
                        <p className="text-sm text-gray-500">Calories</p>
                        <p className="font-semibold">
                            {mealPlan.totalCalories} kcal
                        </p>
                    </div>

                    <div className="rounded-lg border p-3">
                        <p className="text-sm text-gray-500">Protein</p>
                        <p className="font-semibold">
                            {mealPlan.totalProtein} g
                        </p>
                    </div>

                    <div className="rounded-lg border p-3">
                        <p className="text-sm text-gray-500">Carbs</p>
                        <p className="font-semibold">
                            {mealPlan.totalCarbs} g
                        </p>
                    </div>

                    <div className="rounded-lg border p-3">
                        <p className="text-sm text-gray-500">Fat</p>
                        <p className="font-semibold">
                            {mealPlan.totalFat} g
                        </p>
                    </div>

                </div>

                <div className="space-y-4">

                    {mealPlan.mealItems?.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4"
                        >
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-semibold">
                                        {item.mealType}
                                    </h3>

                                    <p>{item.food}</p>

                                    <p className="text-sm text-gray-500">
                                        {item.quantity}
                                    </p>
                                </div>

                                <div className="text-right text-sm">
                                    <p>{item.estimatedCalories} kcal</p>
                                    <p>Protein: {item.protein} g</p>
                                    <p>Carbs: {item.carbs} g</p>
                                    <p>Fat: {item.fat} g</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </Modal>
    );
}