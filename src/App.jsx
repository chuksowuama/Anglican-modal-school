import { Route, Routes } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import Homepage from "./WEBPAGES/Homepage"
import Navigation from "./COMPONENTS/Navigation/Navigation"
import Footer from "./FooterComponent/Footer"
import { useEffect } from "react"
import Aboutpage from "./WEBPAGES/Aboutpage"
import AcademicsPage from "./WEBPAGES/AcademicsPage"
import EventsPage from "./WEBPAGES/EventsPage"
import Contact from "./WEBPAGES/Contact"
import Gallery from "./WEBPAGES/Gallery"
import Admission from "./WEBPAGES/Admission"


function App() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <>
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<Aboutpage/>}/>
        <Route path="/academics" element={<AcademicsPage/>}/>
        <Route path="/ContactUs" element={<Contact/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Admission" element={<Admission/>}/>
        <Route path="/Events" element={<EventsPage/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
