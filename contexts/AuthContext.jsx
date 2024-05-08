import { Fragment, createContext } from "react";
import getLogin from "../mock/getLogin";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const router = useRouter();
    async function login(user) {
        localStorage.setItem('token', getLogin(user).data.token);
        router.push('/produtos/1');
    } 


    return (
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}