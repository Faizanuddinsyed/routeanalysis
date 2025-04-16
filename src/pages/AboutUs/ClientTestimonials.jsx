import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "MedTech Corp",
    quote:
      "Roots Analysis provided us with data that transformed our market approach. Extremely professional and insightful reports!",
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    company: "BioPharma Ltd",
    quote:
      "The insights we gained from their reports have been invaluable. Highly recommend their services.",
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    name: "David Kim",
    company: "Genomics Inc.",
    quote:
      "We were impressed by the depth of research. Truly a trusted partner for strategic decisions.",
    image: "/images/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white mt-2 min-h-screen overflow-x-hidden">
      {/* Hero section */}
      <div
        className="w-full h-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1600x400.png?text=Client+Testimonials')",
        }}
      >
        <div className="bg-white bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-gray text-4xl font-bold">Client Testimonials</h1>
        </div>
      </div>

      {/* Testimonial Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((client) => (
            <div
              key={client.id}
              className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{client.company}</p>
              <p className="text-gray-700 italic">"{client.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
