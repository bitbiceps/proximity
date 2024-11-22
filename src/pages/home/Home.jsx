import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from './Hero'
import GlobalNews from './GlobalNews'
import Journals from './Journals'

const Home = () => {
  return (
    <RootLayout>
      <div className=''>
        <Hero />
        {/* Global News Section */}
        <GlobalNews />
        {/* Journey Section */}
        <Journals />
      </div>
    </RootLayout>
  )
}

export default Home