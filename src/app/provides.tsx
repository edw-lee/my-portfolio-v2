import { PropsWithChildren } from "react";
import ThemeRegistry from "../../theme-registry";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeRegistry options={{ key: "mui" }}>
            {children}
        </ThemeRegistry>
    )
}