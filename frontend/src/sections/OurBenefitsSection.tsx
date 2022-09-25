import { Container, Typography, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

export const OurBenefitsSection = () => {
    return (
        <Container
            id="section-why-us"
            sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                paddingBottom: "60px",
                gap: "30px",
                flexDirection: "row",
            }}
        >
            <Grid container m={5}>
                {[1, 2, 3].map(() => {
                    return (
                        <>
                            <Grid xs={12} md={4} p={2}>
                                <Heading as="h2">
                                    3° Turn your plans into money!
                                </Heading>
                                <Typography>
                                    sit amet consectetur, adipisicing elit.
                                    Architecto illo earum, veniam culpa error
                                    atque dignissimos minus nemo. Error cumque
                                    distinctio nesciunt a? Quos quisquam nulla
                                    sapiente, necessitatibus omnis ad.
                                </Typography>
                            </Grid>
                        </>
                    );
                })}
            </Grid>
        </Container>
    );
};
