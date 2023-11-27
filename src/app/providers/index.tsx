import { PropsWithChildren } from "react";
import ThemeRegistry from "../../../theme-registry";
import RouteProvider from "./router-provider.provider";
import MobileProvider from "./mobile.provider";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeRegistry options={{ key: "mui" }}>
            <RouteProvider>
                <MobileProvider>
                    {children}
                </MobileProvider>
            </RouteProvider>
        </ThemeRegistry>
    )
}