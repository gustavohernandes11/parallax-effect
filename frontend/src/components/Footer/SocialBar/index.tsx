import { Container, Link as MuiLink, IconButton } from "@mui/material";
import {
    FacebookWithCircle,
    GooglePlay,
    Youtube,
    Behance,
} from "@styled-icons/entypo-social";
import Link from "next/link";
import { Heading } from "../../../components/Heading";

export const SocialBar = () => {
    return (
        <Container>
            <Container
                disableGutters={true}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link href="https://exemple.com/" passHref={true}>
                    <IconButton>
                        <FacebookWithCircle width={25} height={25} />
                    </IconButton>
                </Link>
                <Link href="https://exemple.com/" passHref={true}>
                    <IconButton>
                        <GooglePlay width={25} height={25} />
                    </IconButton>
                </Link>
                <Link href="https://exemple.com/" passHref={true}>
                    <IconButton>
                        <Youtube width={25} height={25} />
                    </IconButton>
                </Link>
                <Link href="https://exemple.com/" passHref={true}>
                    <IconButton>
                        <Behance width={25} height={25} />
                    </IconButton>
                </Link>
            </Container>
        </Container>
    );
};
