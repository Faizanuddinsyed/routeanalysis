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
  Cpu,
  Lightbulb,
  ShoppingCart,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const allReports = [
  {
    title: "Aerospace",
    path: "/reports/aerospace",
    icon: <Rocket size={28} />,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    title: "Automotive", 
    path: "/reports/automotive", 
    icon: <Car size={28} />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Biotech",
    path: "/reports/biotech",
    icon: <FlaskConical size={28} />,
    color: "bg-green-100 text-green-600"
  },
  { 
    title: "Chemicals", 
    path: "/reports/chemicals", 
    icon: <Atom size={28} />,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Food & Beverage",
    path: "/reports/food",
    icon: <Utensils size={28} />,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Healthcare",
    path: "/reports/healthcare",
    icon: <HeartPulse size={28} />,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "IT & Comm",
    path: "/reports/it",
    icon: <Monitor size={28} />,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Manufacturing",
    path: "/reports/manufacturing",
    icon: <Factory size={28} />,
    color: "bg-gray-100 text-gray-600"
  },
  { 
    title: "Pharma", 
    path: "/reports/pharma", 
    icon: <Pill size={28} />,
    color: "bg-teal-100 text-teal-600"
  },
  { 
    title: "Semiconductors", 
    path: "/reports/semi", 
    icon: <Cpu size={28} />,
    color: "bg-orange-100 text-orange-600"
  },
  { 
    title: "Energy", 
    path: "/reports/energy", 
    icon: <Lightbulb size={28} />,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Consumer Goods",
    path: "/reports/consumer",
    icon: <ShoppingCart size={28} />,
    color: "bg-cyan-100 text-cyan-600"
  },
];

export default function AllReports() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            All Industry Reports
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive market analysis across all industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allReports.map((report, index) => (
            <Link
              to={report.path}
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200 flex flex-col"
            >
              <div className={`${report.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                {report.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {report.title}
              </h3>
              <div className="mt-auto pt-2">
                <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">View report</span>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Need a custom report?
          </Link>
        </div>
      </div>
    </div>
  );
}