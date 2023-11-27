import { Button, Stack } from "@mui/material";
import Header from "../header.component";
import Timeline from "./timeline.component";
import { getSortedExperienceData } from "@/app/lib/contents";
import { use } from "react";

export default function Experience() {
    const experienceData = use(getSortedExperienceData());

    return (
        <Stack spacing={5}
            alignItems="center">
            <Header>Experience</Header>

            <Timeline experienceData={experienceData} />

            <Button href="/experience/EdwinLee_Resume.pdf"
                target="_blank">
                View My Resume
            </Button>
        </Stack>
    )
}