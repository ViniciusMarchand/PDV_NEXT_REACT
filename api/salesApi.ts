import axios from 'axios';
import { ItemInfo} from '@/global/Types';
import { apiLink } from '@/constants/env';
const salesApi = {
    postItems: async (items: ItemInfo[]) => {
        console.warn(items)
        const URL = apiLink + "venda/add-itens/lista/produtos";
        return await axios.post(URL, items)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },    
    getProducts: async () => {
        const URL = apiLink + "venda/ativa/produtos";
        return await axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },

}

export default salesApi;

