import React from 'react'
import RootLayout from '../layout/RootLayout'
import HomeHero from '../components/HomeHero'
import FAQs from '../components/common/FAQs'
import OneToOneHelpForm from '../components/common/OneToOneHelpForm'
import mapVdo from "../assets/testing/map1.mp4"

const FAQPage = () => {
  return (
    <RootLayout>
      <HomeHero vdo={mapVdo} label1={"Your Guide to a Seamless"} label3={"Immigration Journey"} />
      <FAQs />
      <OneToOneHelpForm />
    </RootLayout>
  )
}
export default FAQPage