import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/Home'
import "./App.css"
import ProductPricing from './pages/ProductPricing'

const App = () => {
  return (
    <div className='font-serif'>
      <Routes>
        <Route path={appRoutes.root} Component={Home} />
        <Route path={appRoutes.productPricing} Component={ProductPricing} />

      </Routes>
    </div>
  )
}

export default App