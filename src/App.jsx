// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";

// // Import Pages
// import Home from "./pages/Home";
// import Market from "./pages/Reports/Market";
// import Indication from "./pages/Reports/Indication";
// import AllReports from "./pages/Reports/AllReports";
// import PressOffice from "./pages/PressOffice";
// import Insights from "./pages/Insights";
// import Blogs from "./pages/Blogs";
// import WhoWeAre from "./pages/AboutUs/WhoWeAre";
// import OurTeam from "./pages/AboutUs/OurTeam";
// import ClientTestimonial from "./pages/AboutUs/ClientTestimonials";
// import OurClients from "./pages/AboutUs/OurClients";
// import ContactUs from "./pages/ContactUs";
// import Footer from "./components/Footer"

// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* Reports */}
//         <Route path="/reports/market" element={<Market />} />
//         <Route path="/reports/indication" element={<Indication />} />
//         <Route path="/reports/all" element={<AllReports />} />

//         {/* Other Pages */}
//         <Route path="/press-office" element={<PressOffice />} />
//         <Route path="/insights" element={<Insights />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<ContactUs />} />

//         {/* About Us */}
//         <Route path="/about/who-we-are" element={<WhoWeAre />} />
//         <Route path="/about/our-team" element={<OurTeam />} />
//         <Route path="/about/testimonial" element={<ClientTestimonial />} />
//         <Route path="/about/our-clients" element={<OurClients />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

// // Import Pages
import Home from "./pages/Home";
import Market from "./pages/Reports/Aerospace";
import Indication from "./pages/Reports/Indication";
import AllReports from "./pages/Reports/Automobile";
import PressOffice from "./pages/PressOffice";
import Insights from "./pages/Insights";
import Blogs from "./pages/Blogs";
import WhoWeAre from "./pages/AboutUs/WhoWeAre";
import OurTeam from "./pages/AboutUs/OurTeam";
import ClientTestimonials from "./pages/AboutUs/ClientTestimonials";
import OurClients from "./pages/AboutUs/OurClients";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Biotechnology from "./pages/Reports/Biotechnology";
import Chemical from "./pages/Reports/Chemical";
import Consumer from "./pages/Reports/Consumer";
import Energy from "./pages/Reports/Energy";
import Food from "./pages/Reports/Food";
import HealthCare from "./pages/Reports/HealthCare";
import Manufacturing from "./pages/Reports/Manufacturing";
import Pharma from "./pages/Reports/Pharma";
import Electronics from "./pages/Reports/Electronics";
import Medical from "./pages/Reports/Medical";
import Communication from "./pages/Reports/Communication";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Reports */}
            <Route path="/reports/aerospace" element={<Market />} />
            <Route path="/reports/indication" element={<Indication />} />
            <Route path="/reports/automobile" element={<AllReports />} />
            <Route path="/reports/bio" element={<Biotechnology />} />
            <Route path="/reports/chemical" element={<Chemical />} />
            <Route path="/reports/consumer" element={<Consumer />} />
            <Route path="/reports/energy" element={<Energy />} />
            <Route path="/reports/food" element={<Food />} />
            <Route path="/reports/health" element={<HealthCare />} />
            <Route path="/reports/manufacturing" element={<Manufacturing />} />
            <Route path="/reports/pharma" element={<Pharma />} />
            <Route path="/reports/electronics" element={<Electronics />} />
            <Route path="/reports/automobile" element={<AllReports />} />
            <Route path="/reports/medical" element={<Medical />} />
            <Route path="/reports/communication" element={<Communication />} />

            {/* Other Pages */}
            <Route path="/press-office" element={<PressOffice />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* About Us */}
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/testimonial" element={<ClientTestimonials />} />
            <Route path="/about/our-clients" element={<OurClients />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
