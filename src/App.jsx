
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer'
import GettingStarted from './components/GettingStarted/GettingStarted'
import NavBar from './components/NavBar/NavBar'
import StatsSection from './components/StatsSection/StatsSection'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'
import Workflow from './components/Workflow/Workflow'



const getCourses = async () => {
  const response = await fetch("/course.json")
  return response.json()
}

const coursesPromise = getCourses();

function App() {

  const [activeTab, setActiveTab] = useState("product")
  console.log(activeTab)


  return (
    <>

      <header>

        <NavBar></NavBar>

      </header>

      <main>
        <Banner></Banner>

        <StatsSection></StatsSection>
        
        

        <Courses coursesPromise={coursesPromise} activeTab={activeTab}
          setActiveTab={setActiveTab} ></Courses>

        

        <GettingStarted></GettingStarted>
        <TransparentPricing></TransparentPricing>
        <Workflow></Workflow>
      </main>

      <Footer></Footer>




    </>
  )
}

export default App
