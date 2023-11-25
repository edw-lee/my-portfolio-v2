"use client"

import { AppBar, Box, Link, Stack, Toolbar, styled } from "@mui/material";
import Logo from "./logo.component";
import ContactMeButton from "./contact-me-btn.component";

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none"
}));

export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <Logo />

                <Box sx={{ flexGrow: 1 }}></Box>

                <Stack direction="row"
                    spacing={5}
                    justifyContent="flex-end"
                    alignItems="center">
                    <NavbarLink href="#">Home</NavbarLink>

                    <NavbarLink href="#">About</NavbarLink>

                    <NavbarLink href="#">Experience</NavbarLink>

                    <NavbarLink href="#">Projects</NavbarLink>

                    <ContactMeButton />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}