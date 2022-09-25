import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { SectionApresentation } from "../src/sections/SectionApresentation";
import { SectionMeetOurPlans } from "../src/sections/SectionMeetOurPlans";
import { OurBenefitsSection } from "../src/sections/OurBenefitsSection";
import { SectionAboutUs } from "../src/sections/SectionAboutUs";
import { FormSection } from "../src/sections/FormSection";
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>LandingPage Exemple</title>
            </Head>
            <Header />
            <SectionApresentation />
            <OurBenefitsSection />
            <SectionAboutUs />
            <SectionMeetOurPlans />
            <FormSection />
            <Footer />
        </>
    );
};

export default Home;
