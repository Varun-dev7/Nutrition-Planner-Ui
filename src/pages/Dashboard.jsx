import { useEffect, useState } from "react";

import DashboardCards from "../components/dashboard/DashboardCards";
import CaloriesProgress from "../components/dashboard/CaloriesProgress";
import NutritionChart from "../components/dashboard/NutritionChart";

import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";

import { dashboard } from "../api/mealCrud";

export default function Dashboard() {

    const [data, setData] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const response = await dashboard(3);

            setData(response.data.data);

        }
        catch (error) {

            console.log(error);

        }

    }

    if (!data)
        return <p>Loading...</p>;

    return (

        <div className="space-y-8">

            <PageHeader
                title="Dashboard"
                subtitle="Track your nutrition with AI."
            />

            <DashboardCards
                calories={data.dailyCalories}
                protein={data.dailyProtein}
                carbs={data.dailyCarbs}
                fat={data.dailyFat}
            />

            <div className="grid xl:grid-cols-3 gap-6">

                <CaloriesProgress
                    consumed={data.dailyCalories}
                    target={data.calorieTarget}
                />

                <div className="xl:col-span-2">

                    <NutritionChart
                        protein={data.dailyProtein}
                        carbs={data.dailyCarbs}
                        fat={data.dailyFat}
                    />

                </div>

            </div>

            <Card title="Today's Meals">

                {
                    data.meals?.length > 0 ?

                        <div className="space-y-4">

                            {
                                data.meals.map(meal => (

                                    <div
                                        key={meal.id}
                                        className="flex justify-between border-b pb-3"
                                    >

                                        <div>

                                            <h3 className="font-semibold">

                                                {meal.foodName}

                                            </h3>

                                            <p className="text-sm text-slate-500">

                                                {meal.quantity}

                                            </p>

                                        </div>

                                        <span className="font-semibold">

                                            {meal.calories} kcal

                                        </span>

                                    </div>

                                ))
                            }

                        </div>

                        :

                        <p className="text-slate-500">

                            No meals found.

                        </p>
                }

            </Card>

        </div>

    );

}