import React from 'react';
import RootLayout from '../layout/RootLayout';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import EligibilityCriteria from '../components/Timeline';
import VisaCard from '../components/VisaCard';
import OClassification from '../components/OClassification';
import FAQs from '../components/FAQs';
import Feedback from '../components/Feedback';
import VisaCategories from '../components/VisaCategories';
import VisaGoal from '../components/VisaGoal';
import Flow from '../components/Flow';
import ConsultationForm from '../components/ConsultationForm';
const ProductPricing=()=>{
    return(
        <RootLayout>
              <Hero />
              <Flow/>
              <VisaCategories/>
              <EligibilityCriteria/>
              <VisaCard/>
              <OClassification/>
              <VisaGoal/>
              {/* <Feedback/> */}
              <FAQs />
              <ConsultationForm/>
        </RootLayout>
    )
    
}

export default ProductPricing;

