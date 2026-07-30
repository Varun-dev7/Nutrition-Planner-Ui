import axios from "axios";

export default axios.create({
    // baseURL: "https://localhost:7030/api"
    baseURL: "https://nutrition-planner.somee.com/api",
    timeout: 60000,
    headers: {
        "Content-Type": "application/json"
    }
});
