import { Stack } from "@mui/material";
import Header from "../header.component";
import { getSortedProjectsData } from "../../lib/contents";
import { use } from "react";
import ProjectList from "./project-list.component";

export default function Projects() {
    const projectData = use(getSortedProjectsData());

    return (
        <Stack spacing={10}>
            <Header>Projects</Header>

            <ProjectList projectData={projectData} />
        </Stack>
    );
}