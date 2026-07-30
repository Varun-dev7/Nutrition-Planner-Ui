import api from "./CreateAxios";

export const generateMealPlan = (userProfileId) =>
    api.get(`/MealPlan/GenerateMealPlan?userProfileId=${userProfileId}`);

export const saveMealPlan = (data) =>
    api.post("/MealPlan/SaveMealPlan", data);

export const getMealPlanHistory = (profileId) =>
    api.get(`/MealPlan/MealPlanHistory?userProfileId=${profileId}`);