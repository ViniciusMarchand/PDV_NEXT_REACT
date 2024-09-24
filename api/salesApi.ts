import { EndSale, ItemInfo, Sale} from '@/global/Types';
import { apiLink } from '@/constants/env';
import { Axios } from './config';
const salesApi = {
    postItems: async (items: ItemInfo[]) => {
        const URL = apiLink + "venda/add-itens/lista";
        return await Axios.post(URL, items)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },    
    getProducts: async () => {
        const URL = apiLink + "venda/ativa/produtos";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    getProductsFromSale: async () => {
        const URL = apiLink + "venda/ativa/itens";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    removeProduct: async (id: number) => {
        const URL = apiLink + "venda/remover-item/{itemId}?itemId=" + id;
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    cancelSales: async () => {
        const URL = apiLink + "venda/cancelar";
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error.response.data.error);
            })
    },
    getSale: async () => {
        const URL = apiLink + "venda/ativa";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
    confirmSale: async (endSale: EndSale) => {
        const URL = apiLink + "venda/concluir";
        return await Axios.post(URL, endSale)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error.response.data.error);
            })
    },
    addProductByBarCode: async (barCode: string) => {
        const URL = apiLink + "venda/add-item/codigo-barras?codigoBarras=" + barCode;
        return await Axios.post(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error);
            })
    },

    editItem: async (itemId: number, quantity: number) => {
        const URL = apiLink + `venda/edit-item/${itemId}?quantidade=${quantity}`;
        return await Axios.post(URL, {itemId, quantity})
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error.response.data.error);
            })
    }

}

export default salesApi;

