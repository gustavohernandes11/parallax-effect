import * as Styled from "./styles";
import { TextField, Button } from "@mui/material";

export const LeadForm = () => {
    return (
        <Styled.Form>
            <TextField label="Name" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <Button variant="contained">Assinar</Button>
        </Styled.Form>
    );
};
