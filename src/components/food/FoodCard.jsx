export default function FoodCard({ food }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 border">

            <h2 className="text-xl font-semibold mb-4">
                {food.food}
            </h2>

            <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                    <span>Serving</span>
                    <span>{food.unit}</span>
                </div>

                <div className="flex justify-between">
                    <span>Calories</span>
                    <span>{food.calories} kcal</span>
                </div>

                <div className="flex justify-between">
                    <span>Protein</span>
                    <span>{food.protein} g</span>
                </div>

                <div className="flex justify-between">
                    <span>Carbs</span>
                    <span>{food.carbs} g</span>
                </div>

                <div className="flex justify-between">
                    <span>Fat</span>
                    <span>{food.fat} g</span>
                </div>

            </div>

        </div>
    );
}