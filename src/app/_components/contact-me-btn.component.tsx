import { Button } from "@mui/material";
import { EMAIL } from "../constants";

export default function ContactMeButton() {
    return (
        <Button LinkComponent="a"
            variant="contained"
            href={`mailto:${EMAIL}`}>
            Contact Me
        </Button>
    )
}