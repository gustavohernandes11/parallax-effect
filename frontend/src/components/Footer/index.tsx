import * as Styled from "./styles";
import { Grid } from "@mui/material";
import { BottomFooter } from "./BottomFooter";
import { LogoAndMission } from "./LogoAndMission";
import { SocialBar } from "./SocialBar";
import { UsefulLinks } from "./UsefulLinks";

export const Footer = () => {
    return (
        <Styled.Container>
            <Grid
                p={{
                    xs: 4,
                    lg: 8,
                }}
                container
                columnSpacing={2}
                rowSpacing={2}
            >
                <Grid xs={12} md={4}>
                    <LogoAndMission />
                </Grid>
                <Grid xs={12} md={4}>
                    <UsefulLinks />
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    xs={12}
                    md={4}
                >
                    <SocialBar />
                </Grid>
            </Grid>
            <hr />
            <BottomFooter>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ipsam incidunt nihil sint praesentium.
            </BottomFooter>
        </Styled.Container>
    );
};
