"use client"

import { Box, Stack, Toolbar, Typography, alpha } from "@mui/material";
import Logo from "./logo.component";
import { EmailOutlined } from "@mui/icons-material";
import { EMAIL } from "../constants";

export default function Footer() {
    return (
        <Toolbar sx={{
            borderTop: 1,
            borderColor: alpha("#fff", 0.3)
        }}>
            <Logo fontSize={18} />

            <Box sx={{ flexGrow: 1 }}></Box>

            <Stack direction="row">
                <a href={`mailto:${EMAIL}`}>
                    <Typography noWrap>
                        <EmailOutlined />
                        &nbsp;
                        {EMAIL}
                    </Typography>
                </a>
            </Stack>
        </Toolbar>
    );
}