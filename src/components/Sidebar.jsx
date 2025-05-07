

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  Rocket,
  Car,
  FlaskConical,
  Atom,
  ShoppingCart,
  BatteryFull,
  Utensils,
  HeartPulse,
  Factory,
  Pill,
  Smartphone,
  Stethoscope,
  Satellite,
  FileText
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/reports/aerospace", name: "Aerospace", icon: Rocket },
    { path: "/reports/automobile", name: "Automobile", icon: Car },
    { path: "/reports/bio", name: "Biotechnology", icon: FlaskConical },
    { path: "/reports/chemical", name: "Chemical", icon: Atom },
    { path: "/reports/consumer", name: "Consumer", icon: ShoppingCart },
    { path: "/reports/energy", name: "Energy", icon: BatteryFull },
    { path: "/reports/food", name: "Food", icon: Utensils },
    { path: "/reports/health", name: "HealthCare", icon: HeartPulse },
    { path: "/reports/manufacturing", name: "Manufacturing", icon: Factory },
    { path: "/reports/pharma", name: "Pharma", icon: Pill },
    { path: "/reports/electronics", name: "Electronics", icon: Smartphone },
    { path: "/reports/medical", name: "Medical", icon: Stethoscope },
    { path: "/reports/communication", name: "Communication", icon: Satellite },
  ];

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 p-2 bg-white text-gray-900 rounded-lg
                   hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black/30 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} 
        fixed md:sticky
        top-6 left-0 
        max-h-[calc(100vh-3rem)] 
        w-64 
        bg-white 
        z-40 
        transition-transform duration-300 ease-in-out
        md:translate-x-0
        border border-gray-200
        shadow-xl 
        rounded-2xl 
        overflow-hidden
        mx-4
      `}
      >
        {/* Spacer matching header height */}
        <div className="h-24 md:h-20 px-4 flex items-center border-b border-gray-200">
        <div className="h-24 md:h-20 px-4 flex items-center border-b border-gray-200 bg-white">
  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
    Industry Reports
  </h2>
</div>
        </div>

        <nav className="px-4 space-y-1 overflow-y-auto h-[calc(100vh-6rem)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg
                  transition-all hover:pl-6
                  ${
                    isActive
                      ? "bg-indigo-50 border-l-4 border-indigo-600 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-indigo-400"
                  }
                `}
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-indigo-600" : "text-gray-500"
                  }`}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
