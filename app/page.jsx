import React from 'react'
import Hero from './Components/Page'
import Improve from './Components/Improve/Page'
import Features from './Components/Features/Page'
import Testimonial from './Components/Testimonial/Page'
import CallToAction from './Components/CallToAction/Page'
import FAQ from './Components/FAQ/Page'
import Join from './Components/Join/Page'
import Footer from './Components/Footer/Page'

const Home = () => {
  return (
    <div>
      <Hero />
      <Improve />
      <Features />
      <Testimonial />
      <CallToAction />
      <FAQ />
      <Join />
      <Footer />
    </div>
  )
}

export default Home
