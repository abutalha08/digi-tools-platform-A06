
import './App.css'
import Banner from './components/Banner/Banner'
import GettingStarted from './components/GettingStarted/GettingStarted'
import NavBar from './components/NavBar/NavBar'
import StatsSection from './components/StatsSection/StatsSection'

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
    </main>

      


    </>
  )
}

export default App
