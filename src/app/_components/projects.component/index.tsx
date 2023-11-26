import { Stack } from "@mui/material";
import Header from "../header.component";
import { getSortedProjectsData } from "../../lib/contents";
import ProjectsGrid from "./projects-grid.component";
import { use } from "react";

export default function Projects() {
    const projectData = use(getSortedProjectsData());

    return (
        <Stack spacing={10}>
            <Header>Projects</Header>

            <ProjectsGrid projectData={projectData} />
        </Stack>
    );
}