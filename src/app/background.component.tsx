import { Typography, alpha } from "@mui/material";

export default function Background() {
    return (
        <Typography position="fixed"
            top={0}
            right={0}
            fontWeight={900}
            fontSize={250}
            noWrap={true}
            lineHeight={0.7}
            sx={{
                color: "rgba(255, 255, 255, 0.05)",
                rotate: "-90deg",
                transformOrigin: "bottom right"
            }}>
            EDWIN LEE
        </Typography>
    )
}