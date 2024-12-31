import { Login, UserInputs } from '@/global/Types';
import { apiLink } from '@/constants/env';
import axios from 'axios';
import Axios from './config';
const authApi = {
    login: async (user:Login) => {
        const URL = apiLink + "auth/login";
        return await axios.post(URL, user)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },
    refreshToken: async (accessToken:string, refreshToken:string) => {
        const URL = "auth/refresh-token";
        return await Axios.post(URL, {accessToken, refreshToken})
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },
    getUsers: async () => {
        const URL = "auth/users";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },
    register: async (newUser:UserInputs) => {
        const URL = "auth/register";
        return await Axios.post(URL, newUser)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },
    resetPasswordRequest: async (email:string) => {
        const URL = "/auth/reset-password/request";
        return await Axios.post(URL, {email})
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },

}

export default authApi;

