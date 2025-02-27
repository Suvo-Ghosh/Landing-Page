import { TbHeartsOff } from "react-icons/tb"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Login from "./components/Login"
import { useState } from "react"
import Register from "./components/Register"
import TestimonialCarousel from "./components/TestimonialCarousel"
import Courses from "./components/Courses"

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <Navbar setIsLoginOpen={setIsLoginOpen} setIsRegisterOpen={setIsRegisterOpen} />
      <HeroSection />
      <Courses />
      <Features />
      <TestimonialCarousel />
      <Footer />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </>
  )
}

export default App
