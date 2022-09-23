import { Section } from "../components/Section";
import { Container, Typography, Button, Stack, Grid } from "@mui/material";
import { Heading } from "../components/Heading";

import Image from "next/image";
import LivingRoomImage from "../assets/imgs/living-room-image.jpg";
export const SectionAboutUs = () => {
    return (
        <Container
        disableGutters={true}

            sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                minHeight: "80vh",
                gap: "30px",
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
                    direction: "rtl",
                    margin: "30px"
                }}
            >
                <Image
                    src={LivingRoomImage}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    alt="faster-container-image"
                />
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
            </Container>
            <Container
                disableGutters={true}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <Image
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
        </Container>
    );
};
