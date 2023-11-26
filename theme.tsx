import { Components, Theme, createTheme } from "@mui/material";
import { amber, blue, grey, lightGreen, pink, yellow } from "@mui/material/colors";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { Inter } from 'next/font/google'
import { TypographyOptions } from "@mui/material/styles/createTypography";

const font = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "700", "900"]
});

const LinkBehaviour = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => <Link ref={ref} {...props} />)

const defaultComponents: Components<Omit<Theme, "components">> = {
    MuiLink: {
        defaultProps: {
            component: LinkBehaviour
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                fontWeight: 700
            }
        }
    },
    MuiAppBar: {
        defaultProps: {
            elevation: 0
        },
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.background.default,
                boxShadow: "0px 5px 10px rgba(0,0,0, 0.35)",
            })
        }
    },
    MuiChip: {
        styleOverrides: {
            root: {
                color: yellow[200]
            }
        }
    }
}

const typography: TypographyOptions = {
    fontFamily: font.style.fontFamily
}

export const lightTheme = createTheme({
    typography,
    palette: {
        mode: "light",
        primary: {
            contrastText: "#fff",
            main: blue[700]
        },
        success: {
            main: lightGreen[700]
        },
        text: {
            primary: grey[700]
        },
        background: {
            default: grey[100]
        }
    },
    components: {
        ...defaultComponents,
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: grey[100]
                })
            }
        }
    }
});

export const darkTheme = createTheme({
    typography,
    palette: {
        mode: "dark",
        primary: {
            main: amber[800],
            contrastText: "#fff"
        },
        secondary: {
            main: grey[400]
        },
        text: {
            secondary: grey[600]
        },
        background: {
            default: "#131313",
            paper: "#131313"
        }
    },
    components: {
        ...defaultComponents
    }
});

export const greyTheme = createTheme({
    typography,
    palette: {
        primary: {
            main: grey[900],
            contrastText: grey[800]
        },
        secondary: {
            main: grey[900]
        },
        background: {
            default: grey[800],
            paper: grey[800]
        }
    },
    components: {
        ...defaultComponents
    }
});