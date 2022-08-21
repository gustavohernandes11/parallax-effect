import * as Styled from "./styles";
import Link from "next/link";
import { Button } from "@mui/material";

export const Nav = () => {
    return (
        <Styled.Container>
            <Link href="#section-1">
                <Button>Link</Button>
            </Link>
            <Link href="#section-2">
                <Button>Link</Button>
            </Link>

        </Styled.Container>
    );
};
