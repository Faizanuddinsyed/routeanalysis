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
              <div className="cursor-pointer">Reports</div>
              <div className="absolute left-0 top-full opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 bg-white text-black mt-2 p-2 shadow rounded min-w-[160px] z-50">
                <ul>
                  <li>
                    <Link
                      to="/reports/market"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/indication"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      Indication
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports/all"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 hover:bg-gray-200"
                    >
                      All Reports
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/press-office" onClick={handleLinkClick}>
                Press Office
              </Link>
            </li>
            <li>
              <Link to="/insights" onClick={handleLinkClick}>
                Insights
              </Link>
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
                Reports
                <span>{openDropdown === "reports" ? "▲" : "▼"}</span>
              </div>
              {openDropdown === "reports" && (
                <ul className="ml-4 mt-1 space-y-2">
                  <li>
                    <Link to="/reports/market" onClick={handleLinkClick}>
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link to="/reports/indication" onClick={handleLinkClick}>
                      Indication
                    </Link>
                  </li>
                  <li>
                    <Link to="/reports/all" onClick={handleLinkClick}>
                      All Reports
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/press-office" onClick={handleLinkClick}>
                Press Office
              </Link>
            </li>
            <li>
              <Link to="/insights" onClick={handleLinkClick}>
                Insights
              </Link>
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
