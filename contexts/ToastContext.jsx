import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

    const sucesso = (mensagem) => {
        
        toast.success(`${mensagem}`);
    }

    const erro = (mensagem) => {
        toast.error(`${mensagem}`);  
    }

    const aviso = (mensagem) => {
        toast.warn(`${mensagem}`);  
    }


    return (
        <ToastContext.Provider value={{sucesso, aviso, erro}}>
            {children}
            <ToastContainer/>
        </ToastContext.Provider>
    )
}