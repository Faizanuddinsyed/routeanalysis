import React from "react";
import HeroCarousel from "../components/HeroCarousal";
import OurClients from "./AboutUs/OurClients";

import ClientTestimonials from "./AboutUs/ClientTestimonials";
import WhyUs from "./AboutUs/WhoWeAre";
import ReportsPage from "./ReportPage";
const Home = () => {
  return (
    <main className="flex flex-col gap-16">
      <HeroCarousel />
      <ReportsPage />
      <OurClients />
      <WhyUs />
      <ClientTestimonials />
    </main>
  );
};

export default Home;
