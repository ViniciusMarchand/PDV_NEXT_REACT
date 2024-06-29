import { getAccessToken } from "@/lib/utils";
import axios from "axios";

const token = getAccessToken();
export const Axios = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + token
    }
});