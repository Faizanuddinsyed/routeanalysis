import React from "react";

const allReports = [
  {
    id: 1,
    title: "Generative AI in Healthcare",
    description:
      "The generative AI in healthcare market is expected to be worth $3.3 billion by 2025, driven by innovation and investment.",
    image: "/images/report5.jpg",
  },
  {
    id: 2,
    title: "Global Gene Therapy Market",
    description:
      "The gene therapy market is projected to exceed $10 billion by 2025 due to increasing approvals and R&D activities.",
    image: "/images/report4.jpg",
  },
  {
    id: 3,
    title: "Large Volume Wearable Injectors",
    description:
      "This market is anticipated to grow at a CAGR of 40% thanks to increasing demand for at-home drug delivery devices.",
    image: "/images/report3.jpg",
  },
  {
    id: 4,
    title: "Biopharmaceutical Manufacturing Outsourcing",
    description:
      "The trend of outsourcing biopharmaceutical manufacturing is growing significantly, with major companies involved in the process.",
    image: "/images/report2.jpg",
  },
  {
    id: 5,
    title: "Medical Drones Market",
    description:
      "The medical drones market is expected to expand significantly, with applications in transporting medical supplies and blood samples.",
    image: "/images/report1.jpg",
  },
];

export default function AllReports() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div
        className="w-full h-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1600x400.png?text=Research+Technology')",
        }}
      >
        <div className="bg-white bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-gray text-4xl font-bold">All Reports</h1>
        </div>
      </div>

      {/* Report Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Explore All Our Reports
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {allReports.map((report) => (
            <div
              key={report.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                <p className="text-gray-600">{report.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
