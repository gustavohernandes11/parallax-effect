import { TopHeader } from "./TopHeader";
import { Nav } from "components/Nav";
import * as Styled from "./styles";
import Image from "next/image";
import Logo from "../../../public/favicon-32x32.png";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <>
            <Styled.TopHeader id="top">
                <TopHeader />
            </Styled.TopHeader>
            <Styled.Header
                as={motion.header}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
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
