import { Container, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { Heading } from "../../../components/Heading";

export const UsefulLinks = () => {
    return (
        <Container>
            <Heading as="h4">Links úteis</Heading>
            <Container disableGutters={true} sx={{ display: "flex", flexDirection: "column" }}>
                <Link href="https://stackoverflow.com/" passHref={true}>
                    <MuiLink target="_blank">Apoiadores</MuiLink>
                </Link>
                <Link href="https://stackoverflow.com/" passHref={true}>
                    <MuiLink target="_blank">SAQ</MuiLink>
                </Link>
                <Link href="https://stackoverflow.com/" passHref={true}>
                    <MuiLink target="_blank"></MuiLink>
                </Link>
                <Link href="https://stackoverflow.com/" passHref={true}>
                    <MuiLink target="_blank">StackOverflow</MuiLink>
                </Link>
            </Container>
        </Container>
    );
};
