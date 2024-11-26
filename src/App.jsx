import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/Home'
import "./App.css"
import FAQPage from './pages/FAQPage'

const App = () => {
  return (
    <div className='font-serif'>
      <Routes>
        <Route path={appRoutes.root} Component={Home} />
        <Route path={appRoutes.faq} Component={FAQPage} />
      </Routes>
    </div>
  )
}

export default App