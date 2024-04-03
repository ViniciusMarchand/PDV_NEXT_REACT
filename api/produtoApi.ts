import axios from 'axios';
import http from '@/utils/http';
import { ProdutoInputs } from '@/global/Types';
const apiProduto = {
    // fetchApi: async () => {
    //     const URL = `${http}api/Grupo`;
    //     return await axios.get(URL)
    //     .then((res) => res)
    //     .catch(error => {
    //         console.error('Erro ao buscar os dados:', error);
    //         throw new Error();

    //     })
    // },
    // getById: async (id) => {
    //     const URL = `${http}api/Grupo` + id;
    //     return await axios.get(URL)
    //     .then((res) => res)
    //     .catch(error => {
    //         console.error('Erro ao buscar os dados:', error);
    //         throw new Error();

    //     })
    // },
    // pagination: async (id) => {
    //     const URL = `${http}api/Grupo/page/` + id;
    //     return await axios.get(URL)
    //     .then((res) => res)
    //     .catch(error => {
    //         console.error('Erro ao buscar os dados:', error);
    //         throw new Error();

    //     })
    // },
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
    // deleteApi: async (id) => {
    //     const URL = `${http}api/Grupo/${id}`;
    //     return await axios.delete(URL)
    //     .then((res) => res)
    //     .catch(error => {
    //         console.error('Erro ao buscar os dados:', error);
    //         throw new Error();

    //     })
    // },
    // putApi: async (id, grupo) => {
    //     const URL = `${http}api/Grupo/${id}`;
    //     return await axios.put(URL, grupo)
    //     .then((res) => res)
    //     .catch(error => {
    //         console.error('Erro ao buscar os dados:', error);
    //         throw new Error();

    //     })
    // }
    
}

export default apiProduto;

