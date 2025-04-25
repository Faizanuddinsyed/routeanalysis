// import { Link } from "react-router-dom";
// import {
//   Rocket,
//   Car,
//   FlaskConical,
//   Atom,
//   Utensils,
//   HeartPulse,
//   Monitor,
//   Factory,
//   Pill,
//   Cpu,
//   Stethoscope,
//   Lightbulb,
//   ShoppingCart,
// } from "lucide-react";

// const allReports = [
//   {
//     title: "Aerospace and Defense",
//     path: "/reports/aerospace",
//     icon: <Rocket size={32} />,
//   },
//   {
//     title: "Automotive and Transportation",
//     path: "/reports/automobile",
//     icon: <Car size={32} />,
//   },
//   {
//     title: "Biotechnology",
//     path: "/reports/bio",
//     icon: <FlaskConical size={32} />,
//   },
//   {
//     title: "Chemicals and Materials",
//     path: "/reports/chemical",
//     icon: <Atom size={32} />,
//   },
//   {
//     title: "Consumer Goods",
//     path: "/reports/consumer",
//     icon: <ShoppingCart size={32} />,
//   },
//   {
//     title: "Energy and Power",
//     path: "/reports/energy",
//     icon: <Lightbulb size={32} />,
//   },
//   {
//     title: "Food and Beverages",
//     path: "/reports/food",
//     icon: <Utensils size={32} />,
//   },
//   {
//     title: "Healthcare IT",
//     path: "/reports/health",
//     icon: <HeartPulse size={32} />,
//   },
//   {
//     title: "Information and Communications",
//     path: "/reports/communication",
//     icon: <Monitor size={32} />,
//   },
//   // Remaining will show on Reports page only
// ];

// export default function HomeReportsSection() {
//   return (
//     <div className="px-6 py-12 bg-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-blue-900 mb-8">
//           Top Research Reports
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
//           {allReports.slice(0, 9).map((report, index) => (
//             <Link
//               to={report.path}
//               key={index}
//               className="bg-gray-50 hover:bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm flex flex-col items-center transition"
//             >
//               <div className="text-blue-600 mb-3">{report.icon}</div>
//               <h3 className="text-lg font-medium text-blue-800">
//                 {report.title}
//               </h3>
//             </Link>
//           ))}
//         </div>

//         <Link to="/reportpage">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow">
//             Show More Reports
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import {
  Rocket,
  Car,
  FlaskConical,
  Atom,
  Utensils,
  HeartPulse,
  Monitor,
  Factory,
  Pill,
} from "lucide-react";

const homeReports = [
  {
    title: "Aerospace",
    path: "/reports/aerospace",
    icon: <Rocket size={32} />,
  },
  { title: "Automotive", path: "/reports/automobile", icon: <Car size={32} /> },
  {
    title: "Biotech",
    path: "/reports/bio",
    icon: <FlaskConical size={32} />,
  },
  { title: "Chemicals", path: "/reports/chemical", icon: <Atom size={32} /> },
  {
    title: "Food & Beverage",
    path: "/reports/food",
    icon: <Utensils size={32} />,
  },
  {
    title: "Healthcare",
    path: "/reports/health",
    icon: <HeartPulse size={32} />,
  },
  {
    title: "IT & Comm",
    path: "/reports/communication",
    icon: <Monitor size={32} />,
  },
  {
    title: "Manufacturing",
    path: "/reports/manufacturing",
    icon: <Factory size={32} />,
  },
  { title: "Pharma", path: "/reports/pharma", icon: <Pill size={32} /> },
];

export default function HomeReportsSection() {
  return (
    <div className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Explore Our Reports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {homeReports.map((report, index) => (
            <Link
              to={report.path}
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-3">{report.icon}</div>
              <h3 className="text-md font-semibold text-blue-800">
                {report.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/allreports"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}
