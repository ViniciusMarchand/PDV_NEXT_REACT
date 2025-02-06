import { EndSale, ItemInfo} from '@/global/Types';
import { Axios } from './config';

const salesApi = {
    postItems: async (items: ItemInfo[]) => {
        const URL = "venda/add-itens/lista";
        return await Axios.post(URL, items)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },    
    getProducts: async () => {
        const URL = "venda/ativa/produtos";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    getProductsFromSale: async () => {
        const URL = "venda/ativa/itens";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {

            })
    },
    removeProduct: async (id: number) => {
        const URL = "venda/remover-item/{itemId}?itemId=" + id;
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    cancelSales: async () => {
        const URL = "venda/cancelar";
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error);
            })
    },
    getSale: async () => {
        const URL = "venda/ativa";
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    confirmSale: async (endSale: EndSale) => {
        const URL = "venda/concluir";
        return await Axios.post(URL, endSale)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error);
            })
    },
    addProductByBarCode: async (barCode: string) => {
        const URL = "venda/add-item/codigo-barras?codigoBarras=" + barCode;
        return await Axios.post(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error);
            })
    },

    editItem: async (itemId: number, quantity: number) => {
        const URL = `venda/edit-item/${itemId}?quantidade=${quantity}`;
        return await Axios.post(URL, {itemId, quantity})
            .then((res) => res)
            .catch(error => {
                throw new Error(error.response.data.error);
            })
    },
    getSalesHistory: async (page: number, size: number) => {
        const URL = `venda?page=${page}&size=${size}`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    getSaleById: async (id: number) => {
        const URL = `venda/id/${id}`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    }

}

export default salesApi;

