
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Rocket } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(null);

  const industriesItems = [
    ["Aerospace", "/reports/aerospace"],
    ["Automotive", "/reports/automobile"],
    ["Biotech", "/reports/bio"],
    ["Chemicals", "/reports/chemical"],
    ["Consumer Goods", "/reports/consumer"],
    ["Energy", "/reports/energy"],
    ["Food&Beverage", "/reports/food"],
    ["Healthcare IT", "/reports/health"],
    ["Communication", "/reports/communication"],
    ["Manufacturing", "/reports/manufacturing"],
    ["Pharmaceutical", "/reports/pharma"],
    ["Electronics", "/reports/electronics"],
    ["Medical Devices", "/reports/medical"],
    ["View All", "/reports/reportpage"],
  ];

  const aboutItems = [
    ["Our Company", "/about/who-we-are"],
    ["Team", "/about/our-team"],
    ["Testimonials", "/about/testimonial"],
    ["Clients", "/about/our-clients"],
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setHoverDropdown(null);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors" />
            <span className="text-2xl font-bold text-blue-500 group-hover:text-blue-600 transition-all group-hover:scale-[1.02] active:scale-95 duration-200">
              Roots Analysis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-300 transition-all duration-200 font-medium"
            >
              Home
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoverDropdown("industries")}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <button className="px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-300 transition-all duration-200 font-medium flex items-center gap-1">
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    hoverDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {hoverDropdown === "industries" && (
                <div className="absolute left-0 top-full pt-2 w-96 z-50">
                  <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-blue-600">
                      Industry Reports
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {industriesItems.map(([title, path]) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={handleLinkClick}
                          className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                          <span className="font-medium">{title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blogs"
              className="px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-300 transition-all duration-200 font-medium"
            >
              Blogs
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoverDropdown("about")}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <button className="px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-300 transition-all duration-200 font-medium flex items-center gap-1">
                About
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    hoverDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {hoverDropdown === "about" && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-4 border border-gray-200">
                    <h3 className="text-lg font-bold mb-3 text-blue-600">
                      About Us
                    </h3>
                    <div className="space-y-2">
                      {aboutItems.map(([title, path]) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={handleLinkClick}
                          className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                          <span className="font-medium">{title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium ml-2"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 bg-gray-900 mt-2 rounded-lg">
            <div className="space-y-2 px-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block py-4 px-6 hover:bg-gray-800 rounded-lg text-lg font-medium transition-colors"
              >
                Home
              </Link>

              {/* Mobile collapsible version still uses click */}
              <div>
                <button
                  onClick={() =>
                    setHoverDropdown(
                      hoverDropdown === "industries" ? null : "industries"
                    )
                  }
                  className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-800 rounded-lg text-lg font-medium transition-colors"
                >
                  <span>Industries</span>
                  {hoverDropdown === "industries" ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {hoverDropdown === "industries" && (
                  <div className="ml-6 mt-2 space-y-3 bg-gray-800 p-4 rounded-lg">
                    {industriesItems.map(([title, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors font-medium"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blogs"
                onClick={handleLinkClick}
                className="block py-4 px-6 hover:bg-gray-800 rounded-lg text-lg font-medium transition-colors"
              >
                Blogs
              </Link>

              <div>
                <button
                  onClick={() =>
                    setHoverDropdown(hoverDropdown === "about" ? null : "about")
                  }
                  className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-800 rounded-lg text-lg font-medium transition-colors"
                >
                  <span>About Us</span>
                  {hoverDropdown === "about" ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {hoverDropdown === "about" && (
                  <div className="ml-6 mt-2 space-y-3 bg-gray-800 p-4 rounded-lg">
                    {aboutItems.map(([title, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors font-medium"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium text-center transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
