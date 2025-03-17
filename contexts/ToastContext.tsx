import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from "react";

export const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {

    const successToast = (mensagem:string) => {
        toast.success(`${mensagem}`);
    };

    const successToastNoAutoClose = (mensagem:string) => {
        toast.success(`${mensagem}`, {autoClose: false});
    };

    const errorToast = (mensagem:string) => {
        toast.error(`${mensagem}`);  
    };

    const errorToastNoAutoClose = (mensagem:string) => {
        toast.error(`${mensagem}`, {autoClose: false});
    };

    const warningToast = (mensagem:string) => {
        toast.warn(`${mensagem}`);  
    };

    const warningToastNoAutoClose = (mensagem:string, setEvent:Function) => {
        toast.warn(mensagem, {autoClose: false, onClick: () => { toast.dismiss(); setEvent(true); }});
    };

    return (
        <ToastContext.Provider value={{
            successToast,
            errorToast, 
            warningToast, 
            successToastNoAutoClose,
            errorToastNoAutoClose,
            warningToastNoAutoClose
            }}>
            {children}
            <ToastContainer/>
        </ToastContext.Provider>
    )
}