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
  ChevronRight
} from "lucide-react";

const homeReports = [
  {
    title: "Aerospace",
    path: "/reports/aerospace",
    icon: <Rocket size={32} />,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    title: "Automotive", 
    path: "/reports/automobile", 
    icon: <Car size={32} />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Biotech",
    path: "/reports/bio",
    icon: <FlaskConical size={32} />,
    color: "bg-green-100 text-green-600"
  },
  { 
    title: "Chemicals", 
    path: "/reports/chemical", 
    icon: <Atom size={32} />,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Food & Beverage",
    path: "/reports/food",
    icon: <Utensils size={32} />,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Healthcare",
    path: "/reports/health",
    icon: <HeartPulse size={32} />,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "IT & Comm",
    path: "/reports/communication",
    icon: <Monitor size={32} />,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Manufacturing",
    path: "/reports/manufacturing",
    icon: <Factory size={32} />,
    color: "bg-gray-100 text-gray-600"
  },
  { 
    title: "Pharma", 
    path: "/reports/pharma", 
    icon: <Pill size={32} />,
    color: "bg-teal-100 text-teal-600"
  },
];

export default function HomeReportsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Reports
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive market analysis across key industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeReports.map((report, index) => (
            <Link
              to={report.path}
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200"
            >
              <div className={`${report.color} w-16 h-16 rounded-lg flex items-center justify-center mb-5`}>
                {report.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {report.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Latest market trends and analysis
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">View Report</span>
                <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/allreports"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse All Reports
            <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}