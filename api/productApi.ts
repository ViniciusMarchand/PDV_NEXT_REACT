import axios from 'axios';
import { ProductInputs } from '@/global/Types';
import { apiLink } from '@/constants/env';
const productApi = {
    get: async (page: number
        // sort:string[]
    ) => {
        const URL = apiLink + `produto/ativos?page=${page}&size=22&sort=id`;
        return await axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    post: async (product: ProductInputs) => {
        const URL = apiLink + "produto";
        return await axios.post(URL, product)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    put: async (id: number, product: ProductInputs) => {
        const URL = apiLink + "produto/" + id;
        return await axios.put(URL, product)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    delete: async (id: number) => {
        const URL = apiLink + "produto/" + id;
        return await axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
}

export default productApi;

