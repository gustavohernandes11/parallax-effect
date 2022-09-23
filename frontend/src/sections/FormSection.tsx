import { Section } from "../components/Section";
import {
    Container,
    TextField,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Stack,
} from "@mui/material";
import { Heading } from "../components/Heading";
import { LeadForm } from "../components/LeadForm";


export const FormSection = () => {
    return (
        <Section
            sx={{
                gap: "30px",
                margin: "90px",
                alignItems: "center",
                justifyContent: "center",
            }}
            color="#fafafa"
        >
            <Heading as="h2" textAlign="center">Stay informed</Heading>
            <LeadForm />
        </Section>
    );
};
