'use client'
import { getAccessToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const token = getAccessToken();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!token) {
            router.push('/');
            return;
        }
        setIsAuthenticated(true);
    }, [router, token]);

    return (
        isAuthenticated &&
        <ErrorBoundary>
            <AuthContext.Provider value={{}}>
                {children}
            </AuthContext.Provider>
        </ErrorBoundary>
    );
};