"use client"

import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Stack, StackProps, SvgIcon, Typography } from "@mui/material";

function ScrollDownIcon(props: StackProps) {
    return (
        <Stack {...props}
            spacing={0}
            alignItems="center">
            <SvgIcon sx={{
                fontSize: 48
            }}>
                <svg fill="currentColor"
                    viewBox="0 0 128 128">
                    <path d="M64 29.472c.896 0 1.792.384 2.432 1.024.64 .64 1.024 1.536 1.024 2.432v13.824c0 .896-.384 1.792-1.024 2.432-.64.64-1.536 1.024-2.432 1.024-.896 0-1.792-.384-2.432-1.024-.64-.64-1.024-1.536-1.024-2.432v-13.824c0-.896.384-1.792 1.024-2.432C62.208 29.792 63.104 29.472 64 29.472L64 29.472zM91.648 84.704c0 7.36-2.944 14.336-8.128 19.52-5.184 5.184-12.224 8.128-19.52 8.128s-14.336-2.944-19.52-8.128c-5.184-5.184-8.128-12.224-8.128-19.52v-41.472c0-7.36 2.944-14.336 8.128-19.52 5.184-5.184 12.224-8.128 19.52-8.128s14.336 2.944 19.52 8.128c5.184 5.184 8.128 12.224 8.128 19.52V84.704zM64 8.736c-9.152 0-17.984 3.648-24.448 10.112-6.464 6.464-10.112 15.296-10.112 24.448V84.704c0 9.152 3.648 17.984 10.112 24.448 6.464 6.464 15.296 10.112 24.448 10.112 9.152 0 17.984-3.648 24.448-10.112s10.112-15.296 10.112-24.448v-41.472c0-9.152-3.648-17.984-10.112-24.448C81.984 12.32 73.152 8.736 64 8.736L64 8.736z" />
                </svg>
            </SvgIcon>

            <KeyboardDoubleArrowDown />
        </Stack>
    )
}

export default function HeroSection() {
    return (
        <Stack height="100vh"
            justifyContent="flex-end"
            pl={10} pb={5}>
            <Typography fontSize={32}
                lineHeight={1}
                color={(theme) => theme.palette.text.secondary}>
                React / Angular / .NET / Express / MongoDB / SQL
            </Typography>

            <Typography fontWeight={700}
                fontSize={150}
                lineHeight={1}                
                color="primary"
                ml={-1}>
                EDWIN LEE
            </Typography>

            <Typography fontSize={100}
                lineHeight={1}>
                Web Developer
            </Typography>

            <ScrollDownIcon mt={5} color={(theme) => theme.palette.text.secondary} />
        </Stack>
    )
}