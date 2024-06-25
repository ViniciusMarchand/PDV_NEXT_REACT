import "../app/globals.css"
import { createContext, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ProductSelectorModalContent from "@/components/vendas/ProductSelectorModalContent";
import { Item, ProductInputs } from "@/global/Types";
import salesApi from "@/api/salesApi";

export const ProductModalSalesFormContext = createContext<any>(null);

export const ProductModalFormSalesProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [key, setKey] = useState(0);

    const [selectedProductsOnSalesPage, setSelectedProductsOnSalesPage] = useState<Item[]>([]);

    const updateKey = () => {
        setKey(Math.random());
    };

    useEffect(() => {
        salesApi.getProductsFromSale().then(res => {
            const products = res.data;
            const items = products.map((product: ProductInputs) => {
                return {
                    product: product,
                    quantity: 1
                }
            });
            setSelectedProductsOnSalesPage(items);
        }).catch(error => console.error("Erro no servidor"));
    }, []);
    
    //FIX: tailwind @layer base its not working here, that's why I'm using css
    return (
        <ProductModalSalesFormContext.Provider value={{
            updateKey,
            selectedProductsOnSalesPage,
            key
        }}>
            <ProductSelectorModalContent setSelectedProductsOnSalesPage={setSelectedProductsOnSalesPage} selectedProductsOnSalesPage={selectedProductsOnSalesPage}  >
                {children}
            </ProductSelectorModalContent>
        </ProductModalSalesFormContext.Provider>
    )
}