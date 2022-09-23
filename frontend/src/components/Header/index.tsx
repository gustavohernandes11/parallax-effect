import { Heading } from "components/Heading";
import { TopHeader } from './TopHeader'
import { Nav } from "components/Nav";
import * as Styled from "./styles";

export const Header = () => {
    return (
        <Styled.Header>
            <TopHeader />
            <Styled.Container>
                <Heading size="small">Logo!</Heading>
                <Nav />
            </Styled.Container>
        </Styled.Header>
    );
};
