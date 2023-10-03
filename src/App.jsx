import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import WhatWeDo from "./components/sections/WhatWeDo"
import CaseStudies from "./components/sections/CaseStudies"
import Brands from "./components/sections/Brands"
import Footer from "./components/sections/Footer"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatWeDo/>
      {/* <CaseStudies/> */}
      <Brands/>
      <Footer/>
    </div>  
  )
}
