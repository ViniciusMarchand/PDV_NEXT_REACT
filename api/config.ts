import { apiLink } from "@/constants/env";
import { clearCookies, getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "@/lib/utils";
import axios from "axios";
import authApi from "./authApi";

export const Axios = axios.create({
    baseURL: apiLink,
});

Axios.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;
            
            const accessToken = getAccessToken();
            const refreshToken = getRefreshToken();
            
            if (refreshToken && accessToken) {
                try {
                    const res = await authApi.refreshToken(accessToken, refreshToken);
                    if (res.status === 200) {
                        setAccessToken(res.data.accessToken);
                        setRefreshToken(res.data.refreshToken);
                        return Axios(originalRequest);
                    } else {
                        window.location.href = "/";
                    }

                } catch (error: any) {
                    clearCookies();
                    if(error.response.status = 401) {
                            window.location.href = "/";
                        
                    };
                    if (typeof window !== "undefined") {
                        window.location.href = "/";
                    }
                }
            }
        }
        return Promise.reject(error);
    }
);

export default Axios;