
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/Home'
import "./App.css"
import FAQPage from './pages/FAQPage'
import PressReleases from './pages/PressReleases'
import InnerCountry from './pages/InnerCountry'

const App = () => {
  return (
    <div className='font-serif text-app-gray-3'>
      <Routes>
        <Route exact path={appRoutes.root} Component={Home} />
        <Route path={appRoutes.faq} Component={FAQPage} />
        <Route path={appRoutes.press_releases} Component={PressReleases} />
        <Route path={appRoutes.inner_country} Component={InnerCountry} />
      </Routes>
    </div>
  )
}

export default App