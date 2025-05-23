
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout"; // Make sure it's YOUR layout, not from lucide-react

// Pages
import Home from "./pages/Home";
import PressOffice from "./pages/PressOffice";
import Insights from "./pages/Insights";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";

import WhoWeAre from "./pages/AboutUs/WhoWeAre";
import OurTeam from "./pages/AboutUs/OurTeam";
import ClientTestimonials from "./pages/AboutUs/ClientTestimonials";
import OurClients from "./pages/AboutUs/OurClients";

import Aerospace from "./pages/Reports/Aerospace";
import Automobile from "./pages/Reports/Automobile";
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
import ReportsPage from "./pages/ReportPage";
import AllReports from "./pages/AllReports";
import GreenHydrogen from "./pages/Reports/energy/GreenHydrogren";
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ✅ Sidebar layout applied to all report routes */}
            <Route element={<Layout />}>
              <Route path="/reports/aerospace" element={<Aerospace />} />
              <Route path="/reports/automobile" element={<Automobile />} />
              <Route path="/reports/bio" element={<Biotechnology />} />
              <Route path="/reports/chemical" element={<Chemical />} />
              <Route path="/reports/consumer" element={<Consumer />} />
              <Route path="/reports/energy" element={<Energy />} />
              

              <Route path="/reports/food" element={<Food />} />
              <Route path="/reports/health" element={<HealthCare />} />
              <Route
                path="/reports/manufacturing"
                element={<Manufacturing />}
              />
             
              <Route path="/reports/pharma" element={<Pharma />} />
              <Route path="/reports/electronics" element={<Electronics />} />
              <Route path="/reports/medical" element={<Medical />} />
              <Route
                path="/reports/communication"
                element={<Communication />}
              />
              <Route path="/reportpage" element={<ReportsPage />} />
              <Route path="/allreports" element={<AllReports />} />
            </Route>

            {/* Other pages without sidebar */}
            <Route path="/press-office" element={<PressOffice />} />
            <Route path="/reports/energy/green-hydrogen" element={<GreenHydrogen />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
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
