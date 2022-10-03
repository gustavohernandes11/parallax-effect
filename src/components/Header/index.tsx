import * as Styled from "./styles";
import { Heading } from "../Heading";
import Link from "next/link";

export const Header = () => {
    return (
        <Styled.HeaderContainer>
            <Heading size="small">Animations</Heading>

            <menu>
                <li>
                    <Link href="#1">Fade</Link>
                </li>
                <li>
                    <Link href="#2">Shake</Link>
                </li>
                <li>
                    <Link href="#3">Rotate</Link>
                </li>
                <li>
                    <Link href="#4">Parallax</Link>
                </li>
            </menu>
        </Styled.HeaderContainer>
    );
};
