import { ItemInfo} from '@/global/Types';
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
    }

}

export default salesApi;

