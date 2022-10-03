import React from "react";
import type { NextPage } from "next";
import { Heading } from "components/Heading";
import { Main } from "components/Main";
import { Header } from "components/Header";
import { ParallaxItem } from "components/ParallaxItem";
import { Section } from "components/Section";

const Home: NextPage = () => {
    return (
        <>
            <title>Frame-Motion Animations</title>
            <Main>
                <Header />
                <div className="flex flex-row fixed top-01 min-w-full">
                    <ParallaxItem maxY={150}>Item 1</ParallaxItem>
                    <ParallaxItem maxY={300}>Item 2</ParallaxItem>
                    <ParallaxItem maxY={450}>Item 3</ParallaxItem>
                    <ParallaxItem maxY={600}>Item 4</ParallaxItem>
                </div>
                <Section>
                    <Heading>Section =)</Heading>
                </Section>
            </Main>
        </>
    );
};

export default Home;
