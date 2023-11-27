"use client"

import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

export const MobileContext = createContext<{
    isMobile: boolean
}>({
    isMobile: false
});

export const useMobile = () => useContext(MobileContext);

export default function MobileProvider({ children }: PropsWithChildren) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (navigator) {
            setIsMobile(!!navigator.userAgent.match("/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/")?.length)
        }
    }, []);

    return (
        <MobileContext.Provider value={{
            isMobile
        }}>
            {children}
        </MobileContext.Provider>
    )
}