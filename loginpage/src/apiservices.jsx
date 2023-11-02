import axios from "axios"
console.log(import.meta.env.VITE_REACT_API_URL)
export const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL
})





