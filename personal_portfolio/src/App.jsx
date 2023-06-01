import { useState, useEffect } from 'react'
import {Navbar, Empty,  HeroSection, About, Projects, Services, Contact, Footer} from '../index'
import './App.css'

function App() {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setisLoading(false)
      }, 1000)
  }, [])


  return (
    <div className="App">
      {isLoading ? (
      <Empty />
    ) : (
      <>
        <Navbar />  


        {/* <Socials />
        <HeroSection />
        <About />
        <Services />
        <Projects /> */}
        {/* <Progress /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </>      
    )}
    </div>
  )
}

export default App
