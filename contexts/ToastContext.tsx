import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from "react";
export const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {

    const successToast = (mensagem:string) => {
        toast.success(`${mensagem}`);
    }

    const errorToast = (mensagem:string) => {
        toast.error(`${mensagem}`);  
    }

    const warningToast = (mensagem:string) => {
        toast.warn(`${mensagem}`);  
    }


    return (
        <ToastContext.Provider value={{successToast, errorToast, warningToast}}>
            {children}
            <ToastContainer/>
        </ToastContext.Provider>
    )
}