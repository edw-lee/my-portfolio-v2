"use client"

import { ExperienceDataType, ProjectDataType } from "@/app/types/md.types";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Chip, Grid2Props, Grid2TypeMap, NoSsr, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import dayjs from "dayjs";
import React, { useState } from "react";
import LinkArrow from "../link-arrow.component";


const formatExperienceDuration = (startDate: string, endDate?: string, isCurrent?: boolean) => {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const format = "MMM YYYY";

    if (isCurrent) {
        return `${start.format(format)} - Present`
    } else if (start.year() == end.year()) {
        return `${start.format("MMM")} - ${end.format(format)}`
    } else if (start.month() == end.month()) {
        return `${start.year()} - ${end.year()}`
    } else {
        return `${start.format(format)} - ${end.format(format)}`
    }
}

function TimelineSection<T extends React.ElementType>({
    experience,
    hover,
    idx,
    ...props
}: {
    experience: ExperienceDataType,
    hover?: number,
    idx?: number
} & Grid2Props<T, { component?: T }>) {
    return (
        <Grid2 {...props}
            container
            spacing={8}
            sx={{
                cursor: "pointer",
                borderTopWidth: 1,
                borderColor: "#fff0",
                backgroundColor: "#fff0",
                borderRadius: 3,
                opacity: hover == undefined || hover == idx ? 1 : 0.4,
                transition: "all ease-in-out 250ms",
                "&:hover": {
                    borderColor: "#fff2",
                    backgroundColor: "#fff1"
                }
            }}>
            <Grid2 xs={3} textAlign="end">
                <Typography noWrap>
                    {formatExperienceDuration(experience.startDate, experience.endDate, experience.isCurrent)}
                </Typography>
            </Grid2>

            <Grid2 xs={9}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>
                        {experience.title} @ {experience.company}
                        &nbsp;
                        {
                            experience.link &&
                            <LinkArrow isActive={hover == idx} />
                        }
                    </Typography>

                    <NoSsr>
                        <Box component="div"
                            color="text.secondary"
                            dangerouslySetInnerHTML={{
                                __html: experience.content
                            }}></Box>
                    </NoSsr>

                    <Stack direction="row" gap={1}>
                        {
                            experience.skills.map((skill, idx) => <Chip key={idx} label={skill} color="primary" />)
                        }
                    </Stack>
                </Stack>
            </Grid2>
        </Grid2>
    );
}

export default function Timeline({ experienceData }: {
    experienceData: ExperienceDataType[]
}) {
    const [hover, setHover] = useState<number | undefined>();

    return (
        <Stack spacing={2}
            px={15}>
            {
                experienceData.map((experience, idx) => {
                    let hyperLinkProps: Grid2Props<"a"> = {}

                    if (experience.link) {
                        hyperLinkProps = {
                            component: "a",
                            href: experience.link,
                            target: "_blank"
                        }
                    }

                    return (
                        <TimelineSection
                            key={idx}
                            {...hyperLinkProps}
                            experience={experience}
                            idx={idx}
                            hover={hover}
                            onMouseOver={() => setHover(idx)}
                            onMouseLeave={() => setHover(undefined)} />
                    );
                })
            }
        </Stack >
    )
}