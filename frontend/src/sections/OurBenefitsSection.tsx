import { Container, Typography, Grid } from "@mui/material";
import { AnimateOnView } from "../utils/framerAnimations";
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
                {[1, 2, 3].map((elem, index) => {
                    return (
                        <>
                            <Grid xs={12} md={4} p={2}>
                                <AnimateOnView>
                                    <Heading as="h2">
                                        {index+1}° Rchitecto illo earum, veniam culpa
                        error atque dignissimos!
                                    </Heading>
                                    <Typography>
                                        sit amet consectetur, adipisicing elit.
                                        Architecto illo earum, veniam culpa
                                        error atque dignissimos minus nemo.
                                        Error cumque distinctio nesciunt a? Quos
                                        quisquam nulla sapiente, necessitatibus
                                        omnis ad.
                                    </Typography>
                                </AnimateOnView>
                            </Grid>
                        </>
                    );
                })}
            </Grid>
        </Container>
    );
};
