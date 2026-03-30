
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import GettingStarted from './components/GettingStarted/GettingStarted'
import NavBar from './components/NavBar/NavBar'
import StatsSection from './components/StatsSection/StatsSection'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'
import Workflow from './components/Workflow/Workflow'

function App() {


  return (
    <>

    <header>

      <NavBar></NavBar>

    </header>

    <main>
      <Banner></Banner>

      <StatsSection></StatsSection>

      <GettingStarted></GettingStarted>
      <TransparentPricing></TransparentPricing>
      <Workflow></Workflow>
    </main>

    <Footer></Footer>

      


    </>
  )
}

export default App
