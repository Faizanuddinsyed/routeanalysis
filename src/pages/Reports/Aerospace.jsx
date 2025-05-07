const Aerospace = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Content Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Aerospace & Defense Market Intelligence</h1>
          
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>
              Our comprehensive aerospace reports deliver critical insights into commercial aviation, 
              defense systems, and space technology markets. We analyze:
            </p>
            <ul className="space-y-2">
              <li>Global supply chain dynamics</li>
              <li>Emerging material technologies</li>
              <li>Regulatory impact analysis</li>
              <li>Market sizing and growth projections</li>
              <li>Competitive landscape benchmarking</li>
            </ul>
            <p className="mt-4">
              With 15+ years tracking this sector, our data helps aerospace executives make 
              strategic decisions with confidence.
            </p>
          </div>
        </div>

        {/* Research Action Card */}
        <div className="md:w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sticky top-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Full Report</h3>
            <p className="text-gray-600 mb-6">
              Unlock 120+ pages of detailed analysis, datasets, and executive summaries.
            </p>
            
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              Download Research PDF
            </button>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>• Updated quarterly</p>
              <p>• Enterprise licensing available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aerospace;