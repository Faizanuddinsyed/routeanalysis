import React from "react";
import HeroCarousel from "../components/HeroCarousal";
import OurClients from "./AboutUs/OurClients";
import AllReports from "./Reports/Automobile";
import ClientTestimonials from "./AboutUs/ClientTestimonials";
const Home = () => {
  return (
    <main className="flex flex-col gap-16">
      <HeroCarousel />
      <OurClients />
      <ClientTestimonials />
    </main>
  );
};

export default Home;
