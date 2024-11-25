import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from './Hero'
import GlobalNews from './GlobalNews'
import Journals from './Journals'
import WhyChooseUs from './WhyChooseUs'
import FAQs from '../../components/FAQs'
import TailorPR from './TailorPR/TailorPR'

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