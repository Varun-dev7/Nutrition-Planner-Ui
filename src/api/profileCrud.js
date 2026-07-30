import api from "./CreateAxios";

export const getProfile = (id) =>
    api.get(`/Profile/Get?id=${id}`);

export const saveProfile = (data) =>
    api.post("/Profile/SaveProfile", data);