import { apiLink } from '@/constants/env';
import { Axios } from './config';
const dashboardApi = {
    weeklyChart: async () => {
        const URL = apiLink + `dashboard/vendas/grafico-semanal`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },

    monthlyChart: async () => {
        const URL = apiLink + `dashboard/vendas/grafico-mensal`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
  
    lowStock: async (page: number) => {
        const URL = apiLink + `dashboard/produtos/baixo-estoque?page=${page}&size=5&sort=estoque`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                console.error(error);
                throw new Error(error);
            })
    },
}

export default dashboardApi;

