import { Section } from "../components/Section";
import {
    Container,
    Typography,
    Button,
    Grid,
    Box,
    Card,
    CardContent,
} from "@mui/material";
import { Heading } from "../components/Heading";

const PlaneModal = () => {
    return (
        <Card sx={{ borderRadius: "10px", padding: "20px 10px", boxShadow: 3 }}>
            <CardContent>
                <Heading textAlign="center" as="h3">
                    Lorem ipsum
                </Heading>
                <Typography
                    color="green"
                    textAlign="center"
                    variant="subtitle1"
                    component="h3"
                >
                    R$ 600,00 / year
                </Typography>
            </CardContent>
            <CardContent>
                <Typography textAlign="center" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam minima laborum unde beatae, quibusdam fugiat
                    consequatur dolor iure labore explicabo nam rem quos? Ullam
                    suscipit praesentium at, excepturi animi laborum.
                </Typography>

                <Grid container justifyContent="center">
                    <Button variant="contained">Veja mais</Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export const SectionMeetOurPlans = () => {
    return (
        <Box
        m={8}
            id="section-meet-out-plans"

        >
            <Heading textAlign="center" as="h2">
                Our Pricing Plans
            </Heading>
            <Grid container>
                <Grid xs={12} sm={4} p={2} sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Grid>
                <Grid xs={12} sm={4} p={2} sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Grid>
                <Grid xs={12} sm={4} p={2} sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Grid>
            </Grid>
        </Box>
    );
};
