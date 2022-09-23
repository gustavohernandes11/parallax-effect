import { Section } from "../components/Section";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Stack,
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
        <Container
            disableGutters={true}
            sx={{
                width: "100%",
                paddingTop: "60px",
                background: "#FAFAFA"
            }}
        >
            <Heading textAlign="center" as="h2">
                Our Pricing Plans
            </Heading>
            <Container
                disableGutters={true}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    alignItems: "center",
                    minHeight: "80vh",
                }}
            >
                <Container sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Container>
                <Container sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Container>
                <Container sx={{ alignItems: "center" }}>
                    <PlaneModal />
                </Container>
            </Container>
        </Container>
    );
};
