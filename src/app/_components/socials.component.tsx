import { GitHub, Instagram, Twitter } from "@mui/icons-material";
import { GITHUB, INSTAGRAM, TWITTER } from "../constants";
import { Box, Stack } from "@mui/material";

const links = [
    {
        icon: <GitHub />,
        href: GITHUB
    },
    {
        icon: <Instagram />,
        href: INSTAGRAM
    },
    {
        icon: <Twitter />,
        href: TWITTER
    }
]
export default function Socials() {
    return (
        <Stack spacing={2}
            position="fixed"
            right={20}
            top="50%"
            alignItems="center"
            sx={{
                transform: "translateY(-50%)",
            }}>
            <Box height={70}
                width={0}
                border={1}
                sx={{
                    opacity: 0.65
                }} ></Box>

            {
                links.map((link, idx) =>
                    <Box key={idx}
                        component="a"
                        href={link.href}
                        target="_blank"
                        sx={{
                            opacity: 0.65,
                            transition: "all ease-in-out 250ms",
                            "&:hover": {
                                scale: "1.25",
                                opacity: 1
                            }
                        }}>
                        {link.icon}
                    </Box>
                )
            }

            <Box height={70}
                width={0}
                border={1}
                sx={{
                    opacity: 0.65
                }}
            ></Box>
        </Stack>
    );
}