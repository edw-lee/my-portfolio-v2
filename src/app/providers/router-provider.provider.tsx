"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react";

export const RouteContext = createContext<{
    route: string | undefined,
    setRoute: (route?: string) => void
}>({
    route: undefined,
    setRoute: (route?: string) => { }
});

export const useRoute = () => useContext(RouteContext);

export default function RouteProvider({ children }: PropsWithChildren) {
    const [route, setRoute] = useState<string | undefined>();

    return (
        <RouteContext.Provider value={{
            route,
            setRoute
        }}>
            {children}
        </RouteContext.Provider>
    )
}