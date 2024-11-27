import React from 'react'
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout