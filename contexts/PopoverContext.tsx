'use client'
import { createContext, useState } from "react";

export const PopoverContext = createContext({isClosed: true, setIsClosed: (isClosed: boolean) => {}});

import { ReactNode } from "react";

interface PopoverContextProps {
    children: ReactNode;
}

export function PopoverProvider({ children }: PopoverContextProps) {
    const [isClosed, setIsClosed] = useState(true);

    return <PopoverContext.Provider value={{isClosed, setIsClosed}}>
        {children}
    </PopoverContext.Provider>
}