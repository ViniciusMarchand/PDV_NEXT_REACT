import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

    const successToast = (mensagem) => {
        
        toast.success(`${mensagem}`);
    }

    const errorToast = (mensagem) => {
        toast.error(`${mensagem}`);  
    }

    const warningToast = (mensagem) => {
        toast.warn(`${mensagem}`);  
    }


    return (
        <ToastContext.Provider value={{successToast, errorToast, warningToast}}>
            {children}
            <ToastContainer/>
        </ToastContext.Provider>
    )
}