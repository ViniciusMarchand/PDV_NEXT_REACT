import "../app/globals.css"
import { createContext, useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ProductSelectorModalContent from "@/components/vendas/ProductSelectorModalContent";
import { ProductInputs } from "@/global/Types";

export const ProductModalSalesFormContext = createContext<any>(null);

export const ProductModalFormSalesProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [key, setKey] = useState("");

    const [selectedProductsOnSalesPage, setSelectedProductsOnSalesPage] = useState<ProductInputs[]>([]);

    const updateKey = () => {
        setKey(crypto.randomUUID());
    };
    
    //FIX: tailwind @layer base its not working here, that's why I'm using css
    return (
        <ProductModalSalesFormContext.Provider value={{
            updateKey,
            selectedProductsOnSalesPage,
            key
        }}>
            <ProductSelectorModalContent setSelectedProductsOnSalesPage={setSelectedProductsOnSalesPage} >
                {children}
            </ProductSelectorModalContent>
        </ProductModalSalesFormContext.Provider>
    )
}