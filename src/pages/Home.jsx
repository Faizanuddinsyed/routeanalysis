import React from 'react'
import HeroCarousel from '../components/HeroCarousal'
import OurClients from './AboutUs/OurClients'
import AllReports from './Reports/AllReports'
import ClientTestimonials from './AboutUs/ClientTestimonials'
const Home = () => {
  return (
    <div>
        <HeroCarousel/>
        <OurClients/>
        <AllReports/>
        <ClientTestimonials/>
    </div>
  )
}

export default Home