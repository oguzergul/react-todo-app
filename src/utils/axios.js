import axios from "axios";

let axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:2020/",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export { axiosInstance };
