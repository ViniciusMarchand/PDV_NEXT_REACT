import { createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
export const ProductModalFormContext = createContext<any>(null);

export const ProductModalFormProvider = (props:{children:React.ReactNode}) => {
    const {children} = props;
    const teste = () => {
        alert("FOI");
    }

    return (
        <ProductModalFormContext.Provider value={{teste}}>
            {children}
        </ProductModalFormContext.Provider>
    )
}