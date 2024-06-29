import { Fragment, createContext, useContext } from "react";
import getLogin from "../mock/getLogin";
import { useRouter } from "next/navigation";
import authApi from "@/api/authApi";
import { ToastContext } from "./ToastContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const { errorToast } = useContext(ToastContext);

    const router = useRouter();
    async function login(user) {
        try {
            const res = await authApi.login(user);
            const { accessToken } = res.data;
            localStorage.setItem('token', accessToken);
            router.push('/produtos/1');
        } catch (error) {
            errorToast(error.message);
        }
    } 


    return (
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}