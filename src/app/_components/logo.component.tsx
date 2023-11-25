import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Typography fontWeight={900}
                fontSize={24}>
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