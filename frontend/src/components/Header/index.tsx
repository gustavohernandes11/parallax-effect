import { TopHeader } from "./TopHeader";
import { Nav } from "components/Nav";
import * as Styled from "./styles";
import Image from "next/image";
import Logo from "../../../public/favicon-32x32.png";

export const Header = () => {
    return (
        <>
            <Styled.TopHeader>
                <TopHeader />
            </Styled.TopHeader>
            <Styled.Header>
                <Image
                    unoptimized={true}
                    src={Logo}
                    alt="logo"
                    width={32}
                    height={32}
                />

                <Nav />
            </Styled.Header>
        </>
    );
};
