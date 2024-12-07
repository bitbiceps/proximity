import React from 'react'
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const RootLayout = ({ children, isHome }) => {
  return (
    <>
      <Header isHome={!!isHome} />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout