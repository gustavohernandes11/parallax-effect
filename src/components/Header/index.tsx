import { Heading } from "components/Heading";
import { Nav } from "components/Nav";
import * as Styled from "./styles";

export const Header = () => {
    return (
        <>
            <Styled.Container>
                <Heading>Logo!</Heading>
                <Nav />
            </Styled.Container>
        </>
    );
};
