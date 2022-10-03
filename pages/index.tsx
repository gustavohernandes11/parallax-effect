import React from "react";
import type { NextPage } from "next";
import { Heading } from "components/Heading";
import { Main } from "components/Main";
import { Header } from "components/Header";
import { Section } from "components/Section";

import { motion, useScroll, useTransform } from "framer-motion";

const Home: NextPage = () => {
    const { scrollYProgress } = useScroll();
    const fadeOpacityonScroll = useTransform(
        scrollYProgress,
        [0, 0.25],
        [1, 0]
    );
    const shakeOnScroll = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.35, 0.4, 0.5],
        [0, -50, 0, 50, 0]
    );
    const rotateOnScroll = useTransform(scrollYProgress, [0.5, 0.75], [0, 360]);
    const parallaxY = useTransform(scrollYProgress, [0.75, 1], [-500, 0]);

    return (
        <>
            <title>Frame-Motion Animations</title>
            <Main>
                <Header />
                <Section id="1">
                    <motion.span style={{ opacity: fadeOpacityonScroll }}>
                        <Heading size="huge">Fade on Scroll</Heading>
                    </motion.span>
                </Section>
                <Section id="2">
                    <motion.span style={{ x: shakeOnScroll }}>
                        <Heading size="huge">Shake!</Heading>
                    </motion.span>
                </Section>
                <Section id="3">
                    <motion.span style={{ rotate: rotateOnScroll }}>
                        <Heading size="huge">Rotate!</Heading>
                    </motion.span>
                </Section>
                <Section id="4">
                    <motion.span style={{ y: parallaxY }}>
                        <Heading size="huge">Parallax</Heading>
                    </motion.span>
                </Section>
            </Main>
        </>
    );
};

export default Home;
