import React from 'react'
import RootLayout from '../layout/RootLayout'
import Hero from '../components/common/Hero'
import FAQs from '../components/common/FAQs'
import OneToOneHelpForm from '../components/common/OneToOneHelpForm'

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