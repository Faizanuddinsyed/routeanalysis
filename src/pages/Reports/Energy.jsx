import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Wind,
  Droplets,
  Flame,
  BatteryCharging,
} from 'lucide-react';

const imageUrl = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=120&q=80';

const reports = [
  {
    title: 'Green Hydrogen',
    icon: Droplets, // Or use a custom icon if available
    description:
      'Explore market insights on green hydrogen and e-fuels, key trends, top players, and how they’re reshaping global clean energy transitions.',
    path: '/reports/energy/green-hydrogen',
    image: imageUrl, // You can update this to a more relevant hydrogen-related image
  },
  
  {
    title: 'Wind Energy',
    icon: Wind,
    description:
      'Get insights into onshore and offshore wind farms, turbine innovations, regulatory frameworks, and growth strategies.',
    path: '/reports/energy/wind',
    image: imageUrl,
  },
  {
    title: 'Hydroelectric',
    icon: Droplets,
    description:
      'A comprehensive overview of hydroelectric power projects, dam infrastructure, and ecological impact studies.',
    path: '/reports/energy/hydro',
    image: imageUrl,
  },
  {
    title: 'Geothermal',
    icon: Flame,
    description:
      'Explore deep-earth energy extraction, enhanced geothermal systems (EGS), and clean base-load power trends.',
    path: '/reports/energy/geothermal',
    image: imageUrl,
  },
  {
    title: 'Battery Storage',
    icon: BatteryCharging,
    description:
      'Track the evolution of battery storage across residential, commercial, and utility markets.',
    path: '/reports/energy/battery',
    image: imageUrl,
  },
];

const ITEMS_PER_PAGE = 3;

const Energy = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE);

  const paginatedReports = reports.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Report Cards */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Energy Sector Reports
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore deep-dive market intelligence across major renewable and conventional energy sectors.
          </p>

          {paginatedReports.map((report, index) => {
            const Icon = report.icon;
            return (
              <Link
                to={report.path}
                key={index}
                className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-28 h-40 object-cover rounded-md border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="text-indigo-600 w-5 h-5" />
                      <h2 className="text-xl font-semibold text-gray-800">
                        {report.title}
                      </h2>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Pagination */}
          <div className="flex justify-center space-x-2 pt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium border ${
                  page === i + 1
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - CTA Card */}
        <div className="md:w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sticky top-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Full Report</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Download a 100+ page deep dive report featuring data tables, forecasts, analyst commentary, and strategic recommendations.
            </p>

            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              Download Research PDF
            </button>

            <div className="mt-4 text-sm text-gray-500">
              <p>• Includes 5-year forecasts</p>
              <p>• Updated quarterly</p>
              <p>• Enterprise licensing available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
