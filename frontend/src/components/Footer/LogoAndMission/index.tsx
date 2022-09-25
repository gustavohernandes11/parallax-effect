import * as Styled from "./styles";
import { Container } from "@mui/material";
import { Heading } from "../../../components/Heading";
import Image from "next/image";
import Logo from "../../../../public/favicon-32x32.png";

export const LogoAndMission = ({ children }: any) => {
    return (
        <Container>
            <Image src={Logo} alt="logo" width={32} height={32} />
            <Container sx={{ marginTop: 2 }} disableGutters={true}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptates pariatur adipisci nihil ducimus iusto
            </Container>
        </Container>
    );
};
