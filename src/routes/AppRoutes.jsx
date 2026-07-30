import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import AnalyzeMeal from "../pages/AnalyzeMeal";
import MealHistory from "../pages/MealHistory";
import MealPlan from "../pages/MealPlan";
import MealPlanHistory from "../pages/MealPlanHistory";
import FoodNutrition from "../pages/FoodNutrition";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/profile" element={<Profile />} />

                    <Route path="/analyze-meal" element={<AnalyzeMeal />}/>

                    <Route
                        path="/meal-history"
                        element={<MealHistory />}
                    />

                    <Route
                        path="/meal-plan"
                        element={<MealPlan />}
                    />

                    <Route
                        path="/meal-plan-history"
                        element={<MealPlanHistory />}
                    />

                    <Route
                        path="/food-nutrition"
                        element={<FoodNutrition />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}