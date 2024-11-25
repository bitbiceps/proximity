import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from '../../components/Hero'
import GlobalNews from '../../components/GlobalNews'
import Journals from '../../components/Journals'
import WhyChooseUs from '../../components/WhyChooseUs'
import TailorPR from '../../components/TailorPR/TailorPR'
import FAQs from '../../components/FAQs'

const Home = () => {
  return (
    <RootLayout>
      <div className=''>
        <Hero />
        {/* Global News Section */}
        <GlobalNews />
        {/* Journey Section */}
        <Journals />
        <WhyChooseUs/>
        <TailorPR/>
        <FAQs/>
      </div>
    </RootLayout>
  )
}

export default Home