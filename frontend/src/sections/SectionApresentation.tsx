import { Section } from "../components/Section";
import { Container, Typography, Button, Stack, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

import Image from "next/image";
import LivingRoomImage from "../assets/imgs/living-room-image.jpg";
export const SectionApresentation = () => {
    return (
        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                alignItems: "center",
                gap: "30px",
                minHeight: "80vh",
            }}
        >
            <Container sx={{ alignItems: "center"}}>
                <Heading>
                    Turn your plans into money!
                </Heading>
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
                    <Button variant="outlined">Download</Button>
                </Grid>
            </Container>

        </Container>
    );
};
