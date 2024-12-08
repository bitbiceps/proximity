import React from 'react'
import { useParams } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import HomeHero from '../components/HomeHero'
import VisaJourney from '../components/VisaJourney'
import GlobalNews from '../components/common/GlobalNews'
import VisaApplications from '../components/VisaApplications'
import ExtraordinaryAbility from '../components/ ExtraordinaryAbility/ExtraordinaryAbility'
import HowWeSupport from '../components/HowWeSupport'
import FAQs from '../components/common/FAQs'
import OneToOneHelpForm from '../components/common/OneToOneHelpForm'
import Journals from '../components/common/Journals'
import Prices from '../components/Prices'
import Feedback from '../components/common/Feedback'
import Qualifying from '../components/Qualifying'
import flag from "../assets/flag.png"
import mapVdo from "../assets/testing/map1.mp4"

const InnerCountry = () => {
  const { countryName } = useParams()
  return (
    <RootLayout>
      <HomeHero
        vdo={mapVdo}
        label4={{ normal: "Embark on", italic: "Immigration" }}
        label2={`Journey in ${countryName.toUpperCase()}`}
        label5={`Navigate EB-1A, O-1, and Global Talent Visas for Aspiring Immigrants Seeking PR Services in the ${countryName.toUpperCase()}`}
      />
      <div className='mx-[160px] justify-center items-center flex'>
        <VisaJourney />
      </div>
      <div className='w-full md:w-[80vw] mx-auto h-[810px] rounded-3xl overflow-hidden bg-app-blue-blend2 relative mt-[120px]'>
        <img src={flag} alt="Flag" className='object-contain w-[60%] opacity-25 relative -top-4 left-1' />
        <Qualifying />
      </div>
      <div className='w-full md:w-[75vw] mx-auto'>
        <VisaApplications />
        <div className='mt-[100px]'>
          <GlobalNews innerPage />
        </div>
      </div>
      <ExtraordinaryAbility />
      <HowWeSupport />
      <Feedback />
      <Prices />
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