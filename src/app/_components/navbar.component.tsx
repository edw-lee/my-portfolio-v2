"use client"

import { AppBar, Box, Link, Stack, Toolbar, styled } from "@mui/material";
import Logo from "./logo.component";
import ContactMeButton from "./contact-me-btn.component";
import { useRoute } from "../providers/router-provider.provider";

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: "none",
    transition: "ease-in-out 150ms",
    position: "relative",

    "&:before": {
        content: "' '",
        borderStyle: "solid",
        width: "0",
        left: "50%",
        bottom: 0,
        translate: "-50%",
        position: "absolute",
        transition: "all ease-in-out 250ms"
    },

    "&:hover, &.active": {
        color: theme.palette.text.primary,
    },

    "&.active": {
        "&:before": {
            borderWidth: 1,
            width: "100%",
        },
    }
}));

const LINKS = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Experience", link: "#experience" },
    { label: "Projects", link: "#projects" }
]

export default function Navbar() {
    const { route } = useRoute();

    return (
        <AppBar>
            <Toolbar>
                <Logo />

                <Box sx={{ flexGrow: 1 }}></Box>

                <Stack direction="row"
                    spacing={5}
                    justifyContent="flex-end"
                    alignItems="center">
                    {
                        LINKS.map((link, idx) =>
                            <NavbarLink key={idx}
                                href={link.link}
                                className={link.link.replace("#", "") == route ? "active" : undefined}>
                                {link.label}
                            </NavbarLink>
                        )
                    }

                    <ContactMeButton />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}