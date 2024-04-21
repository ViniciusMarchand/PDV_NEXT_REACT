import axios from 'axios';
import http from '@/utils/http';
import { ProdutoInputs } from '@/global/Types';
import { apiLink } from '@/constants/env';
const apiProduto = {
    getApi: async (page:number, size:Number
        // sort:string[]
    ) => {
    
        const URL = apiLink + `produto/ativos?page=${page}&size=${size}&sort=id`;
        return await axios.get(URL)
        .then((res) => res)
        .catch(error => {
            console.error(error);
            throw new Error();
        })
    },
    postApi: async (produto: ProdutoInputs) => {
        const URL = `http://localhost:8080/produto`;
        return await axios.post(URL, produto, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then((res) => res)
        .catch(error => {
            console.error(error);
            throw new Error();
        })
    },
    
}

export default apiProduto;

