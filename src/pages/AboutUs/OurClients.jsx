const clients = [
  { name: "Abzena", logo: "https://logo.clearbit.com/abzena.com" },
  { name: "Actelion", logo: "https://logo.clearbit.com/actelion.com" },
  { name: "Alcon", logo: "https://logo.clearbit.com/alcon.com" },
  { name: "Althea", logo: "https://logo.clearbit.com/ajinomoto.com" },
  { name: "Pfizer", logo: "https://logo.clearbit.com/pfizer.com" },
  { name: "Moderna", logo: "https://logo.clearbit.com/modernatx.com" },
  { name: "Genentech", logo: "https://logo.clearbit.com/genentech.com" },
  { name: "Roche", logo: "https://logo.clearbit.com/roche.com" },
  { name: "Amgen", logo: "https://logo.clearbit.com/amgen.com" },
  { name: "Thermo Fisher", logo: "https://logo.clearbit.com/thermofisher.com" },
];

export default function OurClients() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            750+ global firms rely on Roots Analysis for strategic market intelligence
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative bg-white p-4 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-40">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-48 object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/192x80?text=${client.name}`;
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gradient-to-t from-gray-900/90 to-transparent w-full h-1/2 rounded-2xl absolute bottom-0" />
                <p className="text-sm font-semibold text-white relative z-10 text-center">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span>Join Our Client Network</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}