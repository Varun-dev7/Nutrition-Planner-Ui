import api from "./CreateAxios";

export const getFoodNutrition = () => {
    return api.get("/Meal/FoodNutrition");
};