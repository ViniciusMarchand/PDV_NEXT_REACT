import { Login } from '@/global/Types';
import { apiLink } from '@/constants/env';
import axios from 'axios';
const authApi = {
    login: async (user:Login) => {
        const URL = apiLink + "auth/login";
        return await axios.post(URL, user)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error)
            })
    },
}

export default authApi;

