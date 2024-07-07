import "../app/globals.css"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ProductSelectorModalContent from "@/components/vendas/ProductSelectorModalContent";
import { Item, ProductInputs, SalesItem } from "@/global/Types";
import salesApi from "@/api/salesApi";

export const ProductModalSalesFormContext = createContext<any>(null);

export const ProductModalFormSalesProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [key, setKey] = useState(0);

    const [selectedProductsOnSalesPage, setSelectedProductsOnSalesPage] = useState<Item[]>([]);

    const updateKey = () => {
        setKey(Math.random());
    };

    const updateProductsFromSales = useCallback(() => {
        salesApi.getProductsFromSale().then(res => {
            const products = res.data;
            const items = products.map((item: SalesItem) => {
                return {
                    id: item.id,
                    product: item.produto,
                    quantity: item.quantidade,
                }
            });
            setSelectedProductsOnSalesPage(items);
        }).catch(error => setSelectedProductsOnSalesPage([]));
    },[]);

    useEffect(() => {
        updateProductsFromSales();
    }, [updateProductsFromSales]);
    
    //FIX: tailwind @layer base its not working here, that's why I'm using css
    return (
        <ProductModalSalesFormContext.Provider value={{
            updateKey,
            selectedProductsOnSalesPage,
            updateProductsFromSales,
            key
        }}>
            <ProductSelectorModalContent setSelectedProductsOnSalesPage={setSelectedProductsOnSalesPage} selectedProductsOnSalesPage={selectedProductsOnSalesPage} updateProductsFromSales={updateProductsFromSales}>
                {children}
            </ProductSelectorModalContent>
        </ProductModalSalesFormContext.Provider>
    )
}