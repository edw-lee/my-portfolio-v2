"use client"

import { ProjectDataType } from "@/app/types/md.types";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub } from "@mui/icons-material";
import { Box, BoxProps, Button, Chip, Grid2Props, Link, NoSsr, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LinkArrow from "../link-arrow.component";

function ProjectDetailsOverlay({ project, isHover }
    : { project: ProjectDataType, isHover?: boolean }) {
    return (
        <Box width="100%"
            height="100%"
            position="absolute"
            bottom={0}
            left={0}
            p={3}
            sx={{
                opacity: 0,
                transition: "opacity ease-in-out 350ms",
                cursor: "pointer",
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(0deg, #111D, #1115)",
                "&:hover": {
                    opacity: 1
                }
            }}>
            <Stack height="100%"
                spacing={2}
                justifyContent="flex-end">
                <Typography fontWeight={700}
                    fontSize={18}>
                    {project.title}
                    &nbsp;
                    {
                        project.link &&
                        <LinkArrow isActive={isHover} />
                    }
                </Typography>

                <NoSsr>
                    <Box component={"div"}
                        dangerouslySetInnerHTML={{ __html: project.content }}
                        sx={{ opacity: 0.8 }} >
                    </Box>
                </NoSsr>

                <Stack direction="row" gap={1} flexWrap={"wrap"}>
                    {
                        project.skills.map((skill, idx) =>
                            <Chip key={idx} label={skill} color="primary" />)
                    }
                </Stack>

                <NoSsr>
                    <Stack direction="row">
                        {
                            project.source &&
                            <Button variant="outlined"
                                href={project.source}
                                target="_blank"
                                startIcon={<GitHub />}
                                color="secondary">
                                Source
                            </Button>
                        }
                    </Stack>
                </NoSsr>
            </Stack>
        </Box>
    )
}

function ProjectDetail<T extends React.ElementType>({
    project,
    idx,
    hover,
    boxProps,
    ...props
}: {
    project: ProjectDataType,
    idx: number,
    hover?: number,
    boxProps?: BoxProps
} & Grid2Props<T, { component?: T }>) {
    return (
        <Grid2
            {...props}
            xs={project.xs}
            sm={project.sm}
            md={project.md}
            lg={project.lg}
            xl={project.xl}
            height={project.height}>
            <Box {...boxProps}
                component="div"
                height="100%"
                width="100%"
                border={1}
                borderBottom={2}
                borderColor={"transparent"}
                borderRadius={3}
                overflow="hidden"
                position="relative"
                sx={{
                    backgroundColor: "#222",
                    opacity: hover == idx || hover == undefined ? 1 : 0.3,
                    transition: "opacity ease-in-out 250ms",
                    "&:hover": {
                        borderColor: "#fff5"
                    }
                }}>

                <Box component={"img"}
                    src={project.imageUrl}
                    alt={project.title}
                    width={1600}
                    height={900}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "scale ease-in-out 350ms",
                        scale: hover == idx ? "1.2" : "1"
                    }} />

                <ProjectDetailsOverlay project={project} isHover={hover == idx} />
            </Box>
        </Grid2>
    );
}

export default function ProjectsGrid({ projectData }: { projectData: ProjectDataType[] }) {
    const [hover, setHover] = useState<number | undefined>();

    return (
        <Grid2 container spacing={2}>
            {
                projectData.map((project, idx) => {
                    let hyperLinkProps: Grid2Props<"a"> = {}

                    if (project.link) {
                        hyperLinkProps = {
                            component: "a",
                            href: project.link,
                            target: "_blank"
                        }
                    }

                    return <ProjectDetail
                        {...hyperLinkProps}
                        key={idx}
                        project={project}
                        idx={idx}
                        hover={hover}
                        boxProps={{
                            onMouseOver: () => setHover(idx),
                            onMouseLeave: () => setHover(undefined)
                        }} />
                })
            }
        </Grid2>
    )
}