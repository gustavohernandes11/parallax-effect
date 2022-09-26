import { Container, Typography, Button, Stack, Grid, Box } from "@mui/material";
import { AnimateOnView } from "../utils/framerAnimations";
import { Heading } from "../components/Heading";

import Image from "next/image";
import LivingRoomImage from "../assets/imgs/living-room-image.jpg";
import maldivesIslandImage from "../assets/imgs/maldives-island.jpg";
import blueSkyImage from "../assets/imgs/blue-sky.jpg";

const dualContainerProps = {
    justifyContent: "space-around",
    alignItems: "center",
};

export const SectionAboutUs = () => {
    return (
        <Container
            id="section-about-us"
            disableGutters={true}
            sx={{
                minHeight: "80vh",
                justifyContent: "space-evenly",
                background: "#fafafa",
            }}
        >
            <Grid container sx={dualContainerProps}>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    p={{ xs: 2, lg: 3 }}
                    alignItems="center"
                >
                    <Image
                        unoptimized={true}
                        src={blueSkyImage}
                        width={500}
                        height={300}
                        layout="intrinsic"
                        alt="faster-container-image"
                    />
                </Grid>
                <Grid xs={12} sm={5} item p={{ xs: 2, sm: 0 }}>
                    <Heading>Lorem ipsum!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={dualContainerProps}>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    p={{ xs: 2, lg: 3 }}
                    alignItems="center"
                >
                    <Image
                        unoptimized={true}
                        src={LivingRoomImage}
                        width={500}
                        height={300}
                        layout="intrinsic"
                        alt="faster-container-image"
                    />
                </Grid>
                <Grid xs={12} sm={5} item p={{ xs: 2, sm: 0 }}>
                    <Heading>Lorem ipsum!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={dualContainerProps}>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    p={{ xs: 2, lg: 3 }}
                    alignItems="center"
                >
                    <Image
                        unoptimized={true}
                        src={maldivesIslandImage}
                        width={500}
                        height={300}
                        layout="intrinsic"
                        alt="faster-container-image"
                    />
                </Grid>
                <Grid xs={12} sm={5} item p={{ xs: 2, sm: 0 }}>
                    <Heading>Lorem ipsum!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
