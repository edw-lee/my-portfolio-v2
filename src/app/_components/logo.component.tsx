import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Logo({
    fontSize = 24
}: {
    fontSize?: number
}) {
    return (
        <Link href="/">
            <Typography fontWeight={900}
                fontSize={fontSize}>
                <Box component="span" sx={{
                    color: (theme) => theme.palette.primary.main
                }}>
                    EDWIN&nbsp;
                </Box>

                <Box component="span">
                    LEE
                </Box>
            </Typography>
        </Link>
    )
}