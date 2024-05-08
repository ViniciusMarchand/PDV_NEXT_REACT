import { createContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
export const ProductModalFormContext = createContext<any>(null);

export const ProductModalFormProvider = (props:{children:React.ReactNode}) => {
    const {children} = props;
    const [key, setKey] = useState("");
    const teste = () => {
        alert("FOI");
    }

    const updateKey = () => {
        setKey(crypto.randomUUID());
    }
    console.warn(key)
    return (
        <ProductModalFormContext.Provider value={{teste, updateKey, key}}>
            {children}
        </ProductModalFormContext.Provider>
    )
}