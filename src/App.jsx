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
 import Market from "./pages/Reports/Market";
 import Indication from "./pages/Reports/Indication";
 import AllReports from "./pages/Reports/AllReports";
 import PressOffice from "./pages/PressOffice";
 import Insights from "./pages/Insights";
 import Blogs from "./pages/Blogs";
 import WhoWeAre from "./pages/AboutUs/WhoWeAre";
 import OurTeam from "./pages/AboutUs/OurTeam";
 import ClientTestimonial from "./pages/AboutUs/ClientTestimonials";
 import OurClients from "./pages/AboutUs/OurClients";
 import ContactUs from "./pages/ContactUs";
 import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Reports */}
            <Route path="/reports/market" element={<Market />} />
            <Route path="/reports/indication" element={<Indication />} />
            <Route path="/reports/all" element={<AllReports />} />

            {/* Other Pages */}
            <Route path="/press-office" element={<PressOffice />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* About Us */}
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/testimonial" element={<ClientTestimonial />} />
            <Route path="/about/our-clients" element={<OurClients />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
