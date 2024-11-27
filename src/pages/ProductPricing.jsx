import React from 'react';
import RootLayout from '../layout/RootLayout';
import Hero from '../components/common/Hero';
// import Timeline from '../components/Timeline';
import EligibilityCriteria from '../components/Timeline';
import VisaCard from '../components/VisaCard';
import OClassification from '../components/OClassification';
import FAQs from '../components/common/FAQs';
import Feedback from '../components/common/Feedback';
import VisaCategories from '../components/VisaCategories';
import VisaGoal from '../components/VisaGoal';
import Flow from '../components/Flow';
import OneToOneHelpForm from '../components/common/OneToOneHelpForm';

const ProductPricing = () => {
    return (
        <RootLayout>
            <Hero label4={{ normal: "Elevate Your", italic: "Visa Application" }} label2={"Process with Expert PR Services"} label6={"Let Us Help You Navigate the Complexities of Visa Applications"} />
            <Flow />
            <VisaCategories />
            <EligibilityCriteria />
            <VisaCard />
            <OClassification />
            <VisaGoal />
            <Feedback />
            <FAQs />
            <OneToOneHelpForm />
        </RootLayout>
    )

}

export default ProductPricing;

