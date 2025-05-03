import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Industry Expertise",
    desc: "With years of experience, we understand market dynamics and deliver insightful reports.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Data-Driven Insights",
    desc: "Our research is backed by reliable data, helping you make informed decisions.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Global Coverage",
    desc: "We analyze trends across various geographies and industries worldwide.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Client-Centric Approach",
    desc: "We tailor our solutions to meet each client's unique needs and goals.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-600"
  },
];

export default function WhyUs() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Roots Analysis?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep industry insights with reliable data to deliver 
            personalized solutions that drive your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Not convinced yet?{' '}
            <a 
              href="/case-studies" 
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Explore our case studies →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}