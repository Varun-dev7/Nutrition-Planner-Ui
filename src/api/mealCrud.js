import api from "./CreateAxios";

// export const analyzeMeal = data =>
//     api.post("/Meal/AnalyzeMeal", data);

// export const saveMeal = data =>
//     api.post("/Meal/SaveMeal", data);

// export const mealHistory = id =>
//     api.get(`/Meal/MealHistory/${id}`);

// export const dashboard = (userProfileId) =>
//     api.get(`/Meal/Dashboard?userProfileId=${userProfileId}`);

// export const foodNutrition = () =>
//     api.get("/Meal/FoodNutrition");

export const analyzeMeal = (data) =>
    api.post("/Meal/AnalyzeMeal", data);

export const saveMeal = (data) =>
    api.post("/Meal/SaveMeal", data);

export const dashboard = (userProfileId) =>
    api.get(`/Meal/Dashboard?userProfileId=${userProfileId}`);

export const mealHistory = (userProfileId) =>
    api.get(`/Meal/MealHistory?userProfileId=${userProfileId}`);

export const foodNutrition = () =>
    api.get("/Meal/FoodNutrition");