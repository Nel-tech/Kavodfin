import React from 'react'
import HeroSection from './HeroSection'
import Value from './Value'
import Signal from './Signal'
import Performance from './Performance'
import Testimonials from './Testimonials'
import TrustSec from './TrustSec'
import FinalCTA from './FinalCTA'
import Footer from '@/components/(landing)/Footer'

function Details() {
  return (
    <div>
      <HeroSection/>
      <Value/>
      <Signal/>
      <Performance/>
      <Testimonials/>
      <TrustSec/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default Details