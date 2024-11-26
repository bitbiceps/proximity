import React from 'react'
import RootLayout from '../layout/RootLayout'
import Hero from '../components/Hero'
import FAQs from '../components/FAQs'
import OneToOneHelpForm from '../components/OneToOneHelpForm'

const FAQPage = () => {
  return (
    <RootLayout>
      <Hero label1={"Your Guide to a Seamless"} label3={"Immigration Journey"} />
      <FAQs />
      <OneToOneHelpForm />
    </RootLayout>
  )
}

export default FAQPage