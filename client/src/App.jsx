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
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()

  return (
    <>
      <Navbar setIsLoginOpen={setIsLoginOpen} setIsRegisterOpen={setIsRegisterOpen} loggedIn={loggedIn} user={user} />
      <HeroSection />
      <Courses />
      <Features />
      <TestimonialCarousel />
      <Footer />
      <Login isOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} setLoggedIn={setLoggedIn} setUser={setUser} />
      <Register isOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} setIsLoginOpen={setIsLoginOpen} />
    </>
  )
}

export default App
