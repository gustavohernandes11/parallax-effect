import { useScroll } from "framer-motion";
import { TopHeader } from "./TopHeader";
import { Nav } from "components/Nav";
import * as Styled from "./styles";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/favicon-32x32.png";

export const Header = () => {
    const headerRef = useRef(null);
    const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["end end", "start start"],
    });

    const showScroll = () => {
        console.log(
            scrollX.getPrevious(),
            scrollXProgress.get(),
            scrollY.get(),
            scrollYProgress.get()
        );
    };

    useEffect(() => {
        showScroll();
    }, [showScroll]);
    return (
        <>
            <Styled.Header>
                <TopHeader />
            </Styled.Header>
            <Styled.Container ref={headerRef} onClick={showScroll}>
                <Image
                    unoptimized={true}
                    src={Logo}
                    alt="logo"
                    width={32}
                    height={32}
                />

                <Nav />
            </Styled.Container>
        </>
    );
};
