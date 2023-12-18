"use client"

import { AppBar, Box, BoxProps, Button, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, StackProps, Toolbar, styled } from "@mui/material";
import Logo from "./logo.component";
import ContactMeButton from "./contact-me-btn.component";
import { useRoute } from "../providers/router-provider.provider";
import { FeedOutlined, HomeOutlined, InfoOutlined, Menu, MenuOpenOutlined, WorkOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { SocialsFooter } from "./socials.component";
import { useRouter } from "next/navigation";

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

interface ILink {
    label: string;
    id: string;
    route: string;
    icon: React.ReactNode
}

const LINKS: ILink[] = [
    { label: "Home", id: "#home", route: "home", icon: <HomeOutlined /> },
    { label: "About", id: "#about", route: "about", icon: <InfoOutlined /> },
    { label: "Experience", id: "#experience", route: "experience", icon: <WorkOutline /> },
    { label: "Projects", id: "#projects", route: "projects", icon: <FeedOutlined /> }
]

function Nav({ route, ...props }
    : { route?: string } & StackProps) {
    return (
        <Stack {...props}
            direction="row"
            spacing={5}
            justifyContent="flex-end"
            alignItems="center">
            {
                LINKS.map((link, idx) =>
                    <NavbarLink key={idx}
                        href={link.id}
                        className={link.route == route ? "active" : undefined}>
                        {link.label}
                    </NavbarLink>
                )
            }

            <ContactMeButton />
        </Stack>
    );
}

function SidebarNav({ route, ...props }
    : { route?: string } & BoxProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const onLinkClick = (link: ILink) => {
        setOpen(false);
    }

    return (
        <Box {...props}>
            <Button variant="outlined"
                sx={{
                    minWidth: 0,
                    p: 1
                }}
                onClick={() => setOpen(!open)}>
                {
                    !open ? <Menu /> : <MenuOpenOutlined sx={{
                        transform: "scaleX(-1)"
                    }} />
                }
            </Button>

            <Drawer open={open}
                anchor="right"
                elevation={2}
                onClose={() => setOpen(false)}>
                <Toolbar />
                <List sx={{ minWidth: 250 }}>
                    {
                        LINKS.map((link, idx) =>
                            <ListItem key={idx}
                                disablePadding sx={{
                                    my: 1
                                }}>
                                <Link href={link.id} sx={{
                                    flexGrow: 1,
                                    textDecoration: "none"
                                }}>
                                    <ListItemButton
                                        selected={link.route == route}
                                        onClick={() => onLinkClick(link)}>
                                        <ListItemIcon>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.label} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )
                    }

                    <ListItem sx={{ justifyContent: "center" }}>
                        <ContactMeButton fullWidth />
                    </ListItem>
                </List>

                <List sx={{ mt: "auto" }}>
                    <ListItem disablePadding sx={{ justifyContent: "center", }}>
                        <Logo fontSize={16} />
                    </ListItem>
                    <ListItem sx={{ justifyContent: "center", }}>
                        <SocialsFooter />
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    )
}

export default function Navbar() {
    const { route } = useRoute();

    return (
        <AppBar sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
            <Toolbar>
                <Logo />

                <Box sx={{ flexGrow: 1 }}></Box>

                <Nav display={{ xs: "none", md: "initial" }} route={route} />

                <SidebarNav display={{ xs: "initial", md: "none" }} route={route} />
            </Toolbar>
        </AppBar>
    )
}