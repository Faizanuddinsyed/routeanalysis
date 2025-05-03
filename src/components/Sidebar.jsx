

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true); // show sidebar on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <>
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed md:static 
          top-0 left-0 
          h-full md:h-auto 
          w-64 
          bg-white shadow-lg 
          z-40 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <nav className="p-4 space-y-2">
          <Link to="/reports/aerospace" className="block">
            Aerospace
          </Link>
          <Link to="/reports/automobile" className="block">
            Automobile
          </Link>
          <Link to="/reports/bio" className="block">
            Biotechnology
          </Link>
          <Link to="/reports/chemical" className="block">
            Chemical
          </Link>
          <Link to="/reports/consumer" className="block">
            Consumer
          </Link>
          <Link to="/reports/energy" className="block">
            Energy
          </Link>
          <Link to="/reports/food" className="block">
            Food
          </Link>
          <Link to="/reports/health" className="block">
            HealthCare
          </Link>
          <Link to="/reports/manufacturing" className="block">
            Manufacturing
          </Link>
          <Link to="/reports/pharma" className="block">
            Pharma
          </Link>
          <Link to="/reports/electronics" className="block">
            Electronics
          </Link>
          <Link to="/reports/medical" className="block">
            Medical
          </Link>
          <Link to="/reports/communication" className="block">
            Communication
          </Link>
         
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
