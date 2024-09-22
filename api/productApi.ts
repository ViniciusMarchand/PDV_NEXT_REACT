import { ProductInputs } from '@/global/Types';
import { apiLink } from '@/constants/env';
import { Axios } from './config';
const productApi = {
    get: async (page: number, sort:string
    ) => {
        const URL = apiLink + `produto/ativos?page=${page}&size=22&sort=${sort}`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    post: async (product: ProductInputs) => {
        const URL = apiLink + "produto";
        return await Axios.post(URL, product)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    put: async (id: number, product: ProductInputs) => {
        const URL = apiLink + "produto/" + id;
        return await Axios.put(URL, product)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    delete: async (id: number) => {
        const URL = apiLink + "produto/" + id;
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    importCSV: async (file:FormData) => {
        const URL = apiLink + "produto/importar-csv";
        return await Axios.post(URL, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
}

export default productApi;

