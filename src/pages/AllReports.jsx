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
} from "lucide-react";
import { Link } from "react-router-dom";

const allReports = [
  {
    title: "Aerospace",
    path: "/reports/aerospace",
    icon: <Rocket size={32} />,
  },
  { title: "Automotive", path: "/reports/automotive", icon: <Car size={32} /> },
  {
    title: "Biotech",
    path: "/reports/biotech",
    icon: <FlaskConical size={32} />,
  },
  { title: "Chemicals", path: "/reports/chemicals", icon: <Atom size={32} /> },
  {
    title: "Food & Beverage",
    path: "/reports/food",
    icon: <Utensils size={32} />,
  },
  {
    title: "Healthcare",
    path: "/reports/healthcare",
    icon: <HeartPulse size={32} />,
  },
  { title: "IT & Comm", path: "/reports/it", icon: <Monitor size={32} /> },
  {
    title: "Manufacturing",
    path: "/reports/manufacturing",
    icon: <Factory size={32} />,
  },
  { title: "Pharma", path: "/reports/pharma", icon: <Pill size={32} /> },
  { title: "Semiconductors", path: "/reports/semi", icon: <Cpu size={32} /> },
  { title: "Energy", path: "/reports/energy", icon: <Lightbulb size={32} /> },
  {
    title: "Consumer Goods",
    path: "/reports/consumer",
    icon: <ShoppingCart size={32} />,
  },
];

export default function AllReports() {
  return (
    <div className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">All Reports</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allReports.map((report, index) => (
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
      </div>
    </div>
  );
}
