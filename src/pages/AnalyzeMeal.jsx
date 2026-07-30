import { useState } from "react";
import { toast } from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import MealInput from "../components/meal/MealInput";
import MealAnalysisCard from "../components/meal/MealAnalysisCard";
import MealItemTable from "../components/meal/MealItemTable";
import NutritionSummary from "../components/meal/NutritionSummary";
import SaveMealButton from "../components/meal/SaveMealButton";

import { analyzeMeal, saveMeal } from "../api/mealCrud";

export default function AnalyzeMeal() {

    const [mealText, setMealText] = useState("");

    const [meal, setMeal] = useState(null);

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const [saving, setSaving] = useState(false);

    async function handleAnalyze() {

        if (!mealText.trim()) {
            toast.error("Please enter meal description.");
            return;
        }

        setLoading(true);

        try {

            const response = await analyzeMeal({
                userProfileId: 3,
                mealText: mealText
            });

            if (response.data.success) {

                setMeal(response.data.data);

                setItems(response.data.data.mealItems || []);

                toast.success("Meal analyzed successfully.");

            }

        }
        catch {

            toast.error("Analysis failed.");

        }
        finally {

            setLoading(false);

        }

    }

    async function handleSave() {

        setSaving(true);

        try {

            const request = {

                userProfileId: 3,

                mealDescription: mealText,

                mealItems: items

            };

            const response = await saveMeal(request);

            if (response.data.success) {

                toast.success(response.data.message);

                setMeal(null);

                setItems([]);

                setMealText("");

            }

        }
        catch {

            toast.error("Unable to save meal.");

        }
        finally {

            setSaving(false);

        }

    }

    return (

        <div className="space-y-8">

            <PageHeader
                title="Analyze Meal"
                subtitle="Use AI to estimate nutrition from your meal."
            />

            <MealInput
                value={mealText}
                onChange={setMealText}
                onAnalyze={handleAnalyze}
                loading={loading}
            />

            {
                meal &&
                <>
                    <MealAnalysisCard meal={meal} />

                    <MealItemTable
                        items={items}
                        setItems={setItems}
                    />

                    <NutritionSummary
                        items={items}
                    />

                    <SaveMealButton
                        onSave={handleSave}
                        loading={saving}
                    />
                </>
            }

        </div>

    );

}