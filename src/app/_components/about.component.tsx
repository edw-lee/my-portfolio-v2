import { Box, Stack } from "@mui/material";
import Header from "./header.component";
import { getData } from "../lib/contents";
import { use } from "react";

async function getAboutData() {
    return await getData("about.md");
}

export default function AboutMe() {
    const aboutData = use(getAboutData());

    return (
        <Stack direction="row"
            spacing={15}
            alignItems="center">
            <Box sx={{ flexGrow: 1 }}>
                <Header>About Me</Header>
            </Box>

            <Box component="div" dangerouslySetInnerHTML={{
                __html: aboutData.contentHtml
            }}></Box>
        </Stack>
    );
}