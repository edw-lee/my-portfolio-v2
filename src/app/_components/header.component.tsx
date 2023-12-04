import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Header({ children }: { children: string }) {
    return (
        <Typography fontWeight={700}
            fontSize={{ xs: 48, md: 64 }}
            noWrap={true}>
            <>{children}</>
        </Typography>
    );
}