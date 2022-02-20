import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://oguz-todo.herokuapp.com/",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export { axiosInstance };
