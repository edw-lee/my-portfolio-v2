import { PropsWithChildren } from "react";
import ThemeRegistry from "../../theme-registry";
import RouteProvider from "./providers/router-provider.provider";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeRegistry options={{ key: "mui" }}>
            <RouteProvider>
                {children}
            </RouteProvider>
        </ThemeRegistry>
    )
}