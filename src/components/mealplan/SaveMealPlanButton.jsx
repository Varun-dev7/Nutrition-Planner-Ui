import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../common/Button";
import { saveMealPlan } from "../../api/mealPlanCrud";

export default function SaveMealPlanButton({
    mealPlan,
    userProfileId,
}) {

    const [saving, setSaving] = useState(false);

    const handleSave = async () => {

        try {

            setSaving(true);

            const payload = {

                userProfileId,

                targetCalories: mealPlan.targetCalories,

                planText: JSON.stringify(mealPlan),

                mealItems: mealPlan.meals.map(meal => ({

                    mealType: meal.mealType,

                    food: meal.food,

                    quantity: meal.quantity,

                    estimatedCalories: meal.estimatedCalories,

                    protein: meal.protein,

                    carbs: meal.carbs,

                    fat: meal.fat

                }))

            };

            const response = await saveMealPlan(payload);

            if (response.data.success) {

                toast.success(response.data.message);

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            console.error(error);

            toast.error("Failed to save meal plan.");

        } finally {

            setSaving(false);

        }

    };

    return (

        <Button
            onClick={handleSave}
            disabled={saving}
        >
            {saving ? "Saving..." : "Save Meal Plan"}
        </Button>

    );
}