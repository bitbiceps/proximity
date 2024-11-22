import React from 'react'
import RootLayout from '../../layout/RootLayout'
import Hero from './Hero'
import GlobalNews from './GlobalNews'

const Home = () => {
  return (
    <RootLayout>
      <div className=''>
        <Hero/>
        {/* Global News Section */}
        <GlobalNews/>
      </div>
    </RootLayout>
  )
}

export default Home