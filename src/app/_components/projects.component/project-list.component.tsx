"use client"

import { ProjectDataType } from "@/app/types/md.types";
import { Close, GitHub, OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogContent, DialogProps, DialogTitle, Grow, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Typography, Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import Carousel from "../carousel.component";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Zoom ref={ref} {...props} timeout={350} />;
});

function ProjectDetailsModal({
    open,
    onClose,
    project,
    ...props
}: {
    open: boolean,
    onClose: () => void,
    project?: ProjectDataType
} & DialogProps) {
    return (
        <Dialog
            {...props}
            open={open}
            maxWidth="md"
            fullWidth
            onClose={onClose}
            TransitionComponent={Transition}
            closeAfterTransition
        >
            <DialogContent sx={{
                padding: 0
            }}>
                <Card sx={{
                    position: "relative",
                    borderRadius: 2
                }} component={Stack}
                    flexGrow={1}>
                    <IconButton onClick={onClose}
                        sx={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            zIndex: 1,
                            boxShadow: "0px 0px #000"
                        }}>
                        <Close sx={{ filter: "drop-shadow(0px 0px 2px #000)" }} />
                    </IconButton>

                    <Carousel active={(project?.images.length || 0) > 1}
                        center={true}>
                        {
                            project?.images.map((image, idx) => (
                                <Box key={idx}
                                    component="img"
                                    src={image}
                                    sx={{
                                        objectFit: "contain",
                                        backgroundColor: "#111"
                                    }} />
                            ))
                        }
                    </Carousel>

                    <CardContent component={Stack}
                        flexGrow={1}
                        spacing={2}>
                        <Typography fontWeight={700}
                            fontSize={20}>
                            {project?.title}
                        </Typography>

                        {
                            project?.content &&
                            <Box component="div"
                                dangerouslySetInnerHTML={{ __html: project?.content }} />
                        }

                        <Stack flexWrap="wrap"
                            direction="row"
                            gap={1}>
                            {
                                project?.skills.map((skill, idx) => (
                                    <Chip key={idx} color="primary" label={skill} />
                                ))
                            }
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2 }}>
                        <Stack direction="row"
                            flexGrow={1}
                            justifyContent="start"
                            spacing={1}>
                            {
                                project?.source &&
                                <Button variant="outlined"
                                    color="secondary"
                                    startIcon={<GitHub />}
                                    href={project.source}>
                                    Source
                                </Button>
                            }
                            {
                                project?.link &&
                                <Button variant="outlined"
                                    startIcon={<OpenInNew />}
                                    href={project.link}>
                                    Visit
                                </Button>
                            }
                        </Stack>
                    </CardActions>
                </Card>
            </DialogContent>
        </Dialog>
    )
}


export default function ProjectList({ projectData }: { projectData: ProjectDataType[] }) {
    const [hover, setHover] = useState<number | undefined>();
    const [selectedProject, setSelectedProject] = useState<ProjectDataType | undefined>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isHover = (idx: number) => hover == idx;

    return (
        <>
            <ImageList cols={3} sx={{ overflow: "visible" }}>
                {
                    projectData.map((project, idx) => (
                        <ImageListItem key={idx}
                            cols={project.cols}
                            rows={project.rows}
                            onClick={() => {
                                setSelectedProject(project);
                                setIsModalOpen(true);
                            }}
                            onMouseOver={() => setHover(idx)}
                            onMouseLeave={() => setHover(undefined)}
                            sx={{
                                cursor: "pointer",
                                transition: "all ease-in-out 250ms",
                                WebkitTransition: "all ease-in-out 250ms",
                                borderRadius: 2,
                                overflow: "hidden",
                                zIndex: isHover(idx) ? 1 : undefined,
                                transform: isHover(idx) ? "scale(1.05)" : undefined,
                                boxShadow: isHover(idx) ? "0 0 15px #0007" : undefined,
                                filter: isHover(idx) || hover == undefined ? undefined : "brightness(50%)"
                            }}>
                            <img src={project.thumbnail}
                                alt={project.title}
                                loading="lazy"
                            />

                            <ImageListItemBar
                                title={project.title}
                                position="bottom" />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            <ProjectDetailsModal open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onTransitionExited={() => setSelectedProject(undefined)}
                project={selectedProject} />
        </>
    )
}