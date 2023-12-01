import axios from "axios";

export const api = axios.create({
    baseURL:"https://teste-estagio.onrender.com",
    timeout: 8 * 1000
})