import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

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
            <Container
                sx={{ alignItems: "center", width: "60%", minWidth: "300px" }}
            >
                    <Heading>Landing page!</Heading>
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
                        Atque dignissimos
                        </Button>
                    </Grid>
            </Container>
        </Box>
    );
};
