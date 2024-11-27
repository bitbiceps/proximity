import React from 'react'
import RootLayout from "../layout/RootLayout"
import HomeHero from "../components//HomeHero"
import GlobalNews from "../components/common/GlobalNews"
import Journals from "../components/common/Journals"
import WhyChooseUs from "../components/WhyChooseUs"
import TailorPR from "../components/TailorPR/TailorPR"
import FAQs from "../components/common/FAQs"
import BrandsAuthority from '../components/BrandsAuthority'
import SuccessStory from '../components/SuccessStory'
import PRStrategy from '../components/PRStrategy'


const Home = () => {
  return (
    <RootLayout>
      <div className=''>
        <HomeHero label1={"Unlocking your"} label2={"PR Potential with"} label3={"Expertise and Innovation"} />
        {/* Global News Section */}
        <GlobalNews />
        {/* Journey Section */}
        <Journals />
        <WhyChooseUs />
        <TailorPR />
        <BrandsAuthority />
        <SuccessStory />
        <PRStrategy />
        <FAQs />
      </div>
    </RootLayout>
  )
}

export default Home