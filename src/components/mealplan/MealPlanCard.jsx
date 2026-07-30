import Button from "../common/Button";
import Card from "../common/Card";
import { Sparkles } from "lucide-react";

export default function MealPlanCard({ onGenerate }) {
    return (
        <Card>
            <div className="text-center py-6">

                <Sparkles
                    size={48}
                    className="mx-auto text-emerald-600 mb-4"
                />

                <h2 className="text-2xl font-semibold">
                    Generate AI Meal Plan
                </h2>

                <p className="text-gray-500 mt-3 mb-6">
                    AI will generate a personalized meal plan based on your
                    calorie target, dietary preference, allergies, and foods to avoid.
                </p>

                <Button
                    className="w-full"
                    onClick={onGenerate}
                >
                    Generate Meal Plan
                </Button>

            </div>
        </Card>
    );
}