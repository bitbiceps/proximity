import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path={appRoutes.root} Component={Home}/>
    </Routes>
    </>
  )
}

export default App