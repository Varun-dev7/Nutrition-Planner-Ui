import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import FoodCard from "../components/food/FoodCard";

import { getFoodNutrition } from "../api/foodNutritionCrud";

export default function FoodNutrition() {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFoods();
    }, []);

    const loadFoods = async () => {
        try {

            const response = await getFoodNutrition();

            if (response.data.success) {
                setFoods(response.data.data);
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to load food nutrition.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="space-y-6">

            <PageHeader
                title="Food Nutrition"
                subtitle="Nutrition values of available foods."
            />

            {foods.length === 0 ? (
                <EmptyState
                    title="No Foods Found"
                    description="Food nutrition data is not available."
                />
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foods.map((food, index) => (
                        <FoodCard
                            key={index}
                            food={food}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}