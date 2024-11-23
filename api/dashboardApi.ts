import { ProductInputs } from '@/global/Types';
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
}

export default dashboardApi;

