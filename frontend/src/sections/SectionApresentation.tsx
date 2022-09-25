import { Section } from "../components/Section";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

import Image from "next/image";
import ApresentationImage from "../assets/imgs/mountains.jpg";
export const SectionApresentation = () => {
    return (
        <Box
            p={5}
            sx={{
                display: "grid",
                alignItems: "center",
                gap: "30px",
                minHeight: "80vh",
                backgroundImage: `url(${ApresentationImage.src})`,
                backgroundPosition: "center",
            }}
        >
            <Container sx={{ alignItems: "center", width: "50%", minWidth: "300px" }}>
                <Heading>Turn your plans into money!</Heading>
                <Typography>
                    sit amet consectetur, adipisicing elit. Architecto illo
                    earum, veniam culpa error atque dignissimos minus nemo.
                    Error cumque distinctio nesciunt a? Quos quisquam nulla
                    sapiente, necessitatibus omnis ad.
                </Typography>
                <Typography>
                    sit amet consectetur, adipisicing elit. Architecto illo
                    earum, veniam culpa error atque dignissimos minus nemo.
                    Error cumque distinctio nesciunt a? Quos quisquam nulla
                    sapiente, necessitatibus omnis ad.
                </Typography>
                <Grid container mt={4} gap={2}>
                    <Button color="primary" variant="contained">
                        Saiba mais
                    </Button>
                </Grid>
            </Container>
        </Box>
    );
};
