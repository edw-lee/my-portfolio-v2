import { Button, ButtonProps } from "@mui/material";
import { EMAIL } from "../constants";

export default function ContactMeButton(props: ButtonProps) {
    return (
        <Button {...props}
            LinkComponent="a"
            variant="contained"
            href={`mailto:${EMAIL}`}>
            Contact Me
        </Button>
    )
}