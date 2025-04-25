import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-blue-900 text-white px-6 py-4 shadow-md z-50 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Roots Analysis</h1>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium items-center">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>

            <li className="relative group">
              <div className="cursor-pointer">Industries</div>
              <div className="absolute left-0 top-full opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 bg-white text-black mt-2 p-2 shadow rounded min-w-[160px] z-50">
                <ul>
                  <li>
                    <Link
                      to="/reports/aerospace"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Aerospace and Defense
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/reports/automobile"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Automotive and Transportation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/bio"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Biotechnology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/chemical"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Chemicals and Materials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/consumer"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Consumer Goods
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/energy"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Energy and Power
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/food"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Food and Beverages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/health"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Healthcare IT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/communication"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Information and Communications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/manufacturing"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Manufacturing and Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/pharma"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Pharmaceuticals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/electronics"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Electronics and Semiconductor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/medical"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Medical Devices
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block px-2 py-1 hover:text-blue-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>

            <li className="relative group">
              <div className="cursor-pointer">About Us</div>
              <div className="absolute left-0 top-full opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 bg-white text-black mt-2 p-2 shadow rounded min-w-[180px] z-50">
                <ul>
                  <li>
                    <Link
                      to="/about/who-we-are"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/our-team"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/testimonial"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Client Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/our-clients"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Our Clients
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>

            <li>
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("reports")}
              >
                Industries
                <span>{openDropdown === "reports" ? "▲" : "▼"}</span>
              </div>
              {openDropdown === "reports" && (
                <ul className="ml-4 mt-1 space-y-2">
                 <li>
                    <Link
                      to="/reports/aerospace"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Aerospace and Defense
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/reports/automobile"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Automotive and Transportation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/bio"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Biotechnology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/chemical"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Chemicals and Materials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/consumer"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Consumer Goods
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/energy"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Energy and Power
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/food"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Food and Beverages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/health"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Healthcare IT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/communication"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Information and Communications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/manufacturing"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Manufacturing and Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/pharma"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Pharmaceuticals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/electronics"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Electronics and Semiconductor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/medical"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Medical Devices
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            
            <li>
              <Link to="/blogs" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>

            <li>
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleDropdown("about")}
              >
                About Us
                <span>{openDropdown === "about" ? "▲" : "▼"}</span>
              </div>
              {openDropdown === "about" && (
                <ul className="ml-4 mt-1 space-y-2">
                  <li>
                    <Link to="/about/who-we-are" onClick={handleLinkClick}>
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/our-team" onClick={handleLinkClick}>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/testimonial" onClick={handleLinkClick}>
                      Client Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/our-clients" onClick={handleLinkClick}>
                      Our Clients
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
