import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from './Hero'
import GlobalNews from './GlobalNews'
import Journals from './Journals'
import WhyChooseUs from './WhyChooseUs'
import { TailorPR } from './TailorPR'
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