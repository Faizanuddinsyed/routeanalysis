import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Industry Expertise",
    desc: "With years of experience, we understand market dynamics and deliver insightful reports.",
    icon: <CheckCircle className="text-blue-600 w-8 h-8" />,
  },
  {
    title: "Data-Driven Insights",
    desc: "Our research is backed by reliable data, helping you make informed decisions.",
    icon: <CheckCircle className="text-green-600 w-8 h-8" />,
  },
  {
    title: "Global Coverage",
    desc: "We analyze trends across various geographies and industries worldwide.",
    icon: <CheckCircle className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "Client-Centric Approach",
    desc: "We tailor our solutions to meet each client's unique needs and goals.",
    icon: <CheckCircle className="text-yellow-600 w-8 h-8" />,
  },
];

export default function WhyUs() {
  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">Why Choose Us?</h2>
        <p className="text-gray-700 mb-10">
          Roots Analysis offers deep industry insights, reliable data, and
          personalized client solutions — here's why we stand out:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              {feature.icon}
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
