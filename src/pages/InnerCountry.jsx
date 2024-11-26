import React from 'react'
import { useParams } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Hero from '../components/Hero'
import VisaJourney from '../components/VisaJourney'
import GlobalNews from '../components/GlobalNews'
import VisaApplications from '../components/VisaApplications'
import ExtraordinaryAbility from '../components/ExtraordinaryAbility'
import HowWeSupport from '../components/HowWeSupport'
import FAQs from '../components/FAQs'
import OneToOneHelpForm from '../components/OneToOneHelpForm'
import Journals from '../components/Journals'
import Prices from '../components/Prices'

const InnerCountry = () => {
  const { countryName } = useParams()
  return (
    <RootLayout>
      <Hero
        label4={{ normal: "Embark on", italic: " Immigration" }}
        label2={`Journey in ${countryName.toUpperCase()}`}
        label5={`Navigate EB-1A, O-1, and Global Talent Visas for Aspiring Immigrants Seeking PR Services in the ${countryName.toUpperCase()}`}
      />
      <div className='w-[70vw] mx-auto'>
        <VisaJourney />
      </div>
      <div className='w-[75vw] mx-auto'>
        <VisaApplications />
        <div className='mt-[100px]'>
          <GlobalNews innerPage />
        </div>
      </div>
      <ExtraordinaryAbility />
      <HowWeSupport />
      <Prices/>
      <div className='mt-[100px]'>
        <Journals inner />
      </div>
      <div className='md:mx-[102px]'>
        <FAQs inner />
      </div>
      <OneToOneHelpForm />
    </RootLayout>
  )
}

export default InnerCountry