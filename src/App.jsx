import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import MyWork from './Components/MyWorks/MyWork'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
// import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <MyWork/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App