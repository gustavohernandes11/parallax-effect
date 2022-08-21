import React from "react";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Header } from "components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Section id="section-1" full={true}>
                <Heading>Section 1</Heading>
            </Section>
            <Section id="section-2" full={true}>
                <Heading>Section 2</Heading>
            </Section>
        </>
    );
};

export default Home;
