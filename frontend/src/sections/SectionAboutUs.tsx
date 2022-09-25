import { Container, Typography, Button, Stack, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

import Image from "next/image";
import LivingRoomImage from "../assets/imgs/living-room-image.jpg";
import maldivesIslandImage from "../assets/imgs/maldives-island.jpg";
import blueSkyImage from "../assets/imgs/blue-sky.jpg";

export const SectionAboutUs = () => {
    return (
        <Container
            id="section-about-us"
            disableGutters={true}
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                minHeight: "80vh",
                justifyContent: "space-evenly",
            }}
        >
            <Container
                disableGutters={true}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <Image
                    unoptimized={true}
                    src={LivingRoomImage}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    alt="faster-container-image"
                />
                <Container>
                    <Heading>Faster!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Container>
            </Container>
            <Container
                disableGutters={true}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <Container>
                    <Heading>Now!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Container>
                <Image
                    unoptimized={true}
                    src={maldivesIslandImage}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    alt="faster-container-image"
                />
            </Container>
            <Container
                disableGutters={true}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <Image
                    src={blueSkyImage}
                    unoptimized={true}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    alt="faster-container-image"
                />
                <Container>
                    <Heading>Faster!</Heading>
                    <Typography>
                        sit amet consectetur, adipisicing elit. Architecto illo
                        earum, veniam culpa error atque dignissimos minus nemo.
                        Error cumque distinctio sit amet consectetur,
                        adipisicing elit. Architecto illo earum, veniam culpa
                        error atque dignissimos minus nemo. Error cumque
                        distinctio nesciunt a? Quos quisquam nulla sapiente,
                        necessitatibus omnis ad.
                    </Typography>
                </Container>
            </Container>
        </Container>
    );
};
