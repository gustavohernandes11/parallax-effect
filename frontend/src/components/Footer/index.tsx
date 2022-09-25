import * as Styled from "./styles";
import { Container, Typography, Grid } from "@mui/material";
import { BottomFooter } from "./BottomFooter";
import { LogoAndMission } from "./LogoAndMission";
import { SocialBar } from "./SocialBar";
import { UsefulLinks } from "./UsefulLinks";
import { Heading } from "../../components/Heading";

export const Footer = () => {
    return (
        <Styled.Container>
            <Grid
                container
                columnSpacing={2}
                sx={{
                    padding: "50px 20px",
                }}
            >
                <Grid xs={12} md={4}>
                    <LogoAndMission />
                </Grid>
                <Grid xs={12} md={4}>
                    <UsefulLinks />
                </Grid>
                <Grid xs={12} md={4}>
                    <SocialBar />
                </Grid>
            </Grid>
            <BottomFooter>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ipsam incidunt nihil sint praesentium.
            </BottomFooter>
        </Styled.Container>
    );
};
