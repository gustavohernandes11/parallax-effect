import { Container, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { Heading } from "../../../components/Heading";

export const UsefulLinks = () => {
    return (
        <Container>
            <Heading as="h4">External links</Heading>
            <Container disableGutters={true} sx={{ display: "flex", flexDirection: "column" }}>
                <Link href="/" passHref={true}>
                    <MuiLink target="_blank">Lorem ipsum</MuiLink>
                </Link>
                <Link href="/" passHref={true}>
                    <MuiLink target="_blank">Dolor sit amet</MuiLink>
                </Link>
                <Link href="/" passHref={true}>
                    <MuiLink target="_blank"></MuiLink>
                </Link>
                <Link href="/" passHref={true}>
                    <MuiLink target="_blank">ipsum</MuiLink>
                </Link>
            </Container>
        </Container>
    );
};
