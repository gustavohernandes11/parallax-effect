import React from "react";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Header } from "components/Header";
import { SectionApresentation } from '../src/sections/SectionApresentation'
import { SectionMeetOurPlans } from '../src/sections/SectionMeetOurPlans'
import { SectionAboutUs } from '../src/sections/SectionAboutUs'
import { FormSection } from '../src/sections/FormSection'
const Home: NextPage = () => {
    return (
        <>
            <Header />
            <SectionApresentation />
            <SectionAboutUs />
            <SectionMeetOurPlans />
            <FormSection />
        </>
    );
};

export default Home;
