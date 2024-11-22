
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './utils'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='font-serif'>
      <Routes>
        <Route path={appRoutes.root} Component={Home} />
      </Routes>
    </div>
  )
}

export default App