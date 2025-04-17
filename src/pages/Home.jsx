import React from 'react'
import HeroCarousel from '../components/HeroCarousal'
import OurClients from './AboutUs/OurClients'
import AllReports from './Reports/AllReports'
import ClientTestimonials from './AboutUs/ClientTestimonials'
const Home = () => {
  return (
    <main className="flex flex-col gap-16">
        <HeroCarousel/>
        <OurClients/>
        <AllReports/>
        <ClientTestimonials/>
    </main>
  )
}

export default Home