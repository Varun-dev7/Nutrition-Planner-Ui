import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";

import MealSection from "../components/mealplan/MealSection";
import NutritionSummary from "../components/mealplan/NutritionSummary";
import SaveMealPlanButton from "../components/mealplan/SaveMealPlanButton";
import MealPlanCard from "../components/mealplan/MealPlanCard";
import { generateMealPlan } from "../api/mealPlanCrud";

export default function MealPlan() {

    const [loading, setLoading] = useState(true);

    const [mealPlan, setMealPlan] = useState(null);

    const profileId = Number(localStorage.getItem("profileId"));

useEffect(() => {

    setLoading(false);

}, []);

    const loadMealPlan = async () => {

        try {

            const response = await generateMealPlan(3);

            if (response.data.success) {

                setMealPlan(response.data.data);

            } else {

                toast.error(response.data.message);

            }

        } catch (err) {

            console.log(err);

            toast.error("Failed to generate meal plan.");

        } finally {

            setLoading(false);

        }

    };

    if (loading)
        return <Loader />;

  if (!mealPlan)
{
    return (

        <div className="space-y-8">

            <PageHeader
                title="AI Meal Plan"
                subtitle="Generate a personalized meal plan using AI."
            />

            <MealPlanCard
                onGenerate={loadMealPlan}
            />

        </div>

    );
}
const meals = mealPlan?.meals || [];

const breakfast = meals.filter(m => m.mealType === "Breakfast");
const lunch = meals.filter(m => m.mealType === "Lunch");
const dinner = meals.filter(m => m.mealType === "Dinner");
const snacks = meals.filter(m => m.mealType === "Snack");
    return (

    <div className="space-y-8">

        <PageHeader
            title="AI Meal Plan"
            subtitle="Personalized meal plan generated using AI."
        />

        <NutritionSummary mealPlan={mealPlan} />

        <MealSection
            title="Breakfast"
            items={breakfast}
        />

        <MealSection
            title="Lunch"
            items={lunch}
        />

        <MealSection
            title="Snacks"
            items={snacks}
        />

        <MealSection
            title="Dinner"
            items={dinner}
        />

        <div className="flex justify-end">

            <SaveMealPlanButton
                mealPlan={mealPlan}
                userProfileId={3}
            />

        </div>

    </div>

    );

}