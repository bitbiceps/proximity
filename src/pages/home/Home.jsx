
import RootLayout from '../../layout/RootLayout'
import Hero from './Hero'
import GlobalNews from './GlobalNews'
import WhyChooseUs from './WhyChooseUs'
import { TailorPR } from './TailorPR'
const Home = () => {
  return (
    <RootLayout>
      <div className=''>
        <Hero/>
        {/* Global News Section */}
        <GlobalNews/>
        <WhyChooseUs/>
        <TailorPR/>
      </div>
    </RootLayout>
  )
}

export default Home