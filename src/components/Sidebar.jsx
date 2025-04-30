// // import { NavLink } from "react-router-dom";

// // const links = [
// //   { path: "/reports/aerospace", label: "Aerospace" },
// //   { path: "/reports/automobile", label: "Automobile" },
// //   { path: "/reports/bio", label: "Biotechnology" },
// //   { path: "/reports/chemical", label: "Chemical" },
// //   { path: "/reports/consumer", label: "Consumer" },
// //   { path: "/reports/energy", label: "Energy" },
// //   { path: "/reports/food", label: "Food" },
// //   { path: "/reports/health", label: "Healthcare" },
// //   { path: "/reports/manufacturing", label: "Manufacturing" },
// //   { path: "/reports/pharma", label: "Pharma" },
// //   { path: "/reports/electronics", label: "Electronics" },
// //   { path: "/reports/medical", label: "Medical" },
// //   { path: "/reports/communication", label: "Communication" },
// // ];

// // const Sidebar = () => {
// //   return (
// //     <>
// //       {/* Left Sidebar - only for big screens */}
// //       <div className="hidden md:block w-64 h-screen fixed bg-gray-900 text-white p-5 space-y-2 overflow-auto">
// //         <h2 className="text-xl font-bold mb-4">Reports</h2>
// //         {links.map((link) => (
// //           <NavLink
// //             key={link.path}
// //             to={link.path}
// //             className={({ isActive }) =>
// //               `block py-2 px-3 rounded hover:bg-gray-700 ${
// //                 isActive ? "bg-gray-700" : ""
// //               }`
// //             }
// //           >
// //             {link.label}
// //           </NavLink>
// //         ))}
// //       </div>

// //       {/* Top Nav - only for small screens */}
// //       <div className="md:hidden w-full bg-gray-900 text-white px-2 py-3 flex flex-wrap gap-2 justify-center sticky top-0 z-50">
// //         {links.map((link) => (
// //           <NavLink
// //             key={link.path}
// //             to={link.path}
// //             className={({ isActive }) =>
// //               `text-sm px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 ${
// //                 isActive ? "bg-gray-700" : ""
// //               }`
// //             }
// //           >
// //             {link.label}
// //           </NavLink>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Sidebar;

// import { NavLink } from "react-router-dom";

// const links = [
//   { path: "/reports/aerospace", label: "Aerospace" },
//   { path: "/reports/automobile", label: "Automobile" },
//   { path: "/reports/bio", label: "Biotechnology" },
//   { path: "/reports/chemical", label: "Chemical" },
//   { path: "/reports/consumer", label: "Consumer" },
//   { path: "/reports/energy", label: "Energy" },
//   { path: "/reports/food", label: "Food" },
//   { path: "/reports/health", label: "Healthcare" },
//   { path: "/reports/manufacturing", label: "Manufacturing" },
//   { path: "/reports/pharma", label: "Pharma" },
//   { path: "/reports/electronics", label: "Electronics" },
//   { path: "/reports/medical", label: "Medical" },
//   { path: "/reports/communication", label: "Communication" },
// ];

// const Sidebar = () => {
//   return (
//     <>
//       {/* Desktop Sidebar - left side */}
//       <div className="hidden md:block w-64 h-screen fixed bg-gray-900 text-white p-5 space-y-2 overflow-auto">
//         <h2 className="text-xl font-bold mb-4">Reports</h2>
//         {links.map((link) => (
//           <NavLink
//             key={link.path}
//             to={link.path}
//             className={({ isActive }) =>
//               `block py-2 px-3 rounded hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             {link.label}
//           </NavLink>
//         ))}
//       </div>

//       {/* Mobile Top Nav */}
//       <div className="md:hidden w-full bg-gray-900 text-white px-2 py-3 overflow-x-auto flex gap-3 sticky top-0 z-50">
//         {links.map((link) => (
//           <NavLink
//             key={link.path}
//             to={link.path}
//             className={({ isActive }) =>
//               `whitespace-nowrap text-sm px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             {link.label}
//           </NavLink>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu } from "lucide-react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // true by default for desktop
//   const location = useLocation();

//   // Auto-close on small screens when route changes
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsOpen(false);
//       }
//     };
//     handleResize(); // run on load
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth < 768) {
//       setIsOpen(false);
//     }
//   }, [location]);

//   return (
//     <>
//       {/* Hamburger icon for mobile */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Menu />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed md:relative top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out`}
//       >
//         <nav className="p-4 space-y-2">
//           <Link to="/reports/aerospace" className="block">Aerospace</Link>
//           <Link to="/reports/automobile" className="block">Automobile</Link>
//           <Link to="/reports/bio" className="block">Biotechnology</Link>
//           <Link to="/reports/chemical" className="block">Chemical</Link>
//           <Link to="/reports/consumer" className="block">Consumer</Link>
//           <Link to="/reports/energy" className="block">Energy</Link>
//           <Link to="/reports/food" className="block">Food</Link>
//           <Link to="/reports/health" className="block">HealthCare</Link>
//           <Link to="/reports/manufacturing" className="block">Manufacturing</Link>
//           <Link to="/reports/pharma" className="block">Pharma</Link>
//           <Link to="/reports/electronics" className="block">Electronics</Link>
//           <Link to="/reports/medical" className="block">Medical</Link>
//           <Link to="/reports/communication" className="block">Communication</Link>
//           <Link to="/reportpage" className="block">Report Page</Link>
//           <Link to="/allreports" className="block">All Reports</Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

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
