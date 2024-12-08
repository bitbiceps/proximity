
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/Home'
import "./App.css"
import FAQPage from './pages/FAQPage'
import PressReleases from './pages/PressReleases'
import InnerCountry from './pages/InnerCountry'
import ProductPricing from './pages/ProductPricing'
import OurServices from "./components/OurServices"

const App = () => {
  return (
    <div className='font-serif text-app-gray-3 scroll-smooth'>
      <Routes>
        <Route exact path={appRoutes.root} Component={Home} />
        <Route path={appRoutes.faq} Component={FAQPage} />
        <Route path={appRoutes.press_releases} Component={PressReleases} />
        <Route path={appRoutes.inner_country.static} Component={InnerCountry} />
        <Route path={appRoutes.root} Component={Home} />
        <Route path={appRoutes.productPricing} Component={ProductPricing} />
      </Routes>
    </div>
  )
}

export default App