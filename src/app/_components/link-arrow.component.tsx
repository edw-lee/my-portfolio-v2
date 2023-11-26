import { ArrowOutward } from "@mui/icons-material";

export default function LinkArrow({ isActive }: { isActive?: boolean }) {
    return (
        <ArrowOutward fontSize="small"
            sx={{
                transition: "translate ease-in-out 150ms",
                translate: isActive ? "3px -3px" : undefined
            }} />
    )
}