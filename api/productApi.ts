import { RequestXML } from '@/global/Types';
import { Axios } from './config';
const productApi = {
    get: async (page: number, sort:string
    ) => {
        const URL = `produto/ativos?page=${page}&size=22&sort=${sort}`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    post: async (product: FormData) => {
        const URL = "produto";
        return await Axios.post(URL, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    put: async (id: number, product: FormData) => {
        const URL = "produto/" + id;
        return await Axios.put(URL, product, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    delete: async (id: number) => {
        const URL = "produto/" + id;
        return await Axios.delete(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    importCSV: async (file:FormData) => {
        const URL = "produto/importar-via-csv";
        return await Axios.post(URL, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    importXML: async (requestXML:RequestXML) => {
        const { chaveAcessoNfe, porcentagemAumentoPreco } = requestXML;
        const URL = `produto/importar-via-xml?chaveAcessoNfe=${chaveAcessoNfe}&porcentagemAumentoPreco=${porcentagemAumentoPreco}`;
        return await Axios.post(URL, requestXML)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    importCSVResult: async () => {
        const URL = `produto/importar-via-csv/resultado`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    importXMLResult: async () => {
        const URL = `produto/importar-via-xml/resultado`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    searchProduct: async (page: number, sort: string, searchedName: string) => {
        const URL = `produto/buscar?page=${page}&size=22&sort=${sort}&parametro=${searchedName}`;
        return await Axios.get(URL)
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },
    editQuantity: async (id: number | undefined, newQuantity: string) => {
        const URL = `produto/${id}/editar-estoque?novoEstoque=${newQuantity}`;
        return await Axios.patch(URL, { quantidade: newQuantity })
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })
    },

    exportProducts: async () => {
        const URL = 'dashboard/produtos/relatorio-produtos';
        return await Axios.get(URL, {
            responseType: 'blob',
        }
        )
            .then((res) => res)
            .catch(error => {
                throw new Error(error);
            })  
    },
}

export default productApi;

