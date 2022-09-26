import { Section } from "../components/Section";
import { Box } from "@mui/material";
import { Heading } from "../components/Heading";
import { LeadForm } from "../components/LeadForm";
import ApresentationImage from "../assets/imgs/mountains.jpg";

export const FormSection = () => {
    return (
        <Box
            id="section-contact-us"
            p={5}
            sx={{
                display: "grid",
                alignItems: "center",
                backgroundImage: `url(${ApresentationImage.src})`,
                backgroundPosition: "center",
            }}
        >
            <Heading as="h2" textAlign="center">
                Your best email!
            </Heading>
            <LeadForm />
        </Box>
    );
};
