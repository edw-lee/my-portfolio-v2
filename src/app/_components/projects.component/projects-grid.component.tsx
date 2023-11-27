"use client"

import { ProjectDataType } from "@/app/types/md.types";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Box, BoxProps, Button, Chip, Grid2Props, Link, NoSsr, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function ProjectDetailsOverlay({ project, isHover }
    : { project: ProjectDataType, isHover?: boolean }) {
    const projectDetailsRef = useRef<HTMLDivElement>(null);
    const [projectDetailsHeight, setProjectDetailsHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (projectDetailsRef?.current) {
            setProjectDetailsHeight(projectDetailsRef.current.scrollHeight);

            const resizeObserver = new ResizeObserver(() => {
                setProjectDetailsHeight(projectDetailsRef.current?.scrollHeight);
            });

            resizeObserver.observe(projectDetailsRef.current);
        }
    }, []);

    return (
        <Box width="100%"
            position="absolute"
            bottom={0}
            left={0}
            p={3}
            sx={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(0deg, #000e, #0009)",
            }}>
            <Stack spacing={isHover ? 1 : 0}
                justifyContent="flex-end">

                {/* Project Title */}
                <Typography fontWeight={700}
                    fontSize={18}
                    lineHeight={1}>
                    {project.title}
                </Typography>

                {/* Project Details */}
                <Stack ref={projectDetailsRef}
                    spacing={2}
                    overflow="hidden"
                    height={isHover ? projectDetailsHeight : 0}
                    sx={{
                        transition: "all ease-in-out 300ms",
                    }}>

                    <Stack component={"div"}
                        dangerouslySetInnerHTML={{ __html: project.content }}>
                    </Stack>

                    <Stack direction="row"
                        gap={1}
                        flexWrap={"wrap"}
                    >
                        {
                            project.skills.map((skill, idx) =>
                                <Chip key={idx} label={skill} color="primary" />)
                        }
                    </Stack>

                    <Stack direction="row" spacing={2}>
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
                        {
                            project.link &&
                            <Button variant="outlined"
                                href={project.link}
                                target="_blank"
                                startIcon={<OpenInNew />}
                                color="primary">
                                Visit
                            </Button>
                        }
                    </Stack>

                </Stack>
            </Stack>
        </Box >
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
            {...project.size}
            height={project.height}>
            <Box {...boxProps}
                component="div"
                height="100%"
                width="100%"
                border={1}
                borderTop={2}
                borderColor={"transparent"}
                borderRadius={3}
                overflow="hidden"
                position="relative"
                sx={{
                    backgroundColor: "#222",
                    //opacity: hover == idx || hover == undefined ? 1 : 0.3,
                    transition: "all ease-in-out 250ms",
                    "&:hover": {
                        borderColor: "#fff1"
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
                        scale: hover == idx ? "1.05" : "1"
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
                    return <ProjectDetail
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