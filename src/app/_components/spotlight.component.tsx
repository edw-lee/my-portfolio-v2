"use client"

import { Box, alpha } from "@mui/material";
import { useEffect, useState } from "react";

export default function Spotlight() {
    const [pos, setPos] = useState<{ x?: number, y?: number }>();
    const RADIUS = 500

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            setPos({
                x: e.pageX,
                y: e.pageY
            });

        });
    }, []);

    if (!pos?.x || !pos.y) {
        return;
    }

    return (
        <Box position={"absolute"}
            width={"100%"}
            height={"100%"}
            top={0}
            left={0}
            sx={(theme) => ({
                pointerEvents: "none",
                backgroundImage: `radial-gradient(${RADIUS}px at ${pos.x}px ${pos.y}px, 
                    ${alpha(theme.palette.grey[600], 0.125)}, 
                    ${alpha(theme.palette.primary.main, 0)} 80%)`
            })}>

        </Box>
    )
}