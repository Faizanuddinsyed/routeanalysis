// // // import React from "react";

// // // const testimonials = [
// // //   {
// // //     id: 1,
// // //     name: "John Smith",
// // //     company: "MedTech Corp",
// // //     quote:
// // //       "Roots Analysis provided us with data that transformed our market approach. Extremely professional and insightful reports!",
// // //     image: "/images/client1.jpg",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Sarah Lee",
// // //     company: "BioPharma Ltd",
// // //     quote:
// // //       "The insights we gained from their reports have been invaluable. Highly recommend their services.",
// // //     image: "/images/client2.jpg",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "David Kim",
// // //     company: "Genomics Inc.",
// // //     quote:
// // //       "We were impressed by the depth of research. Truly a trusted partner for strategic decisions.",
// // //     image: "/images/client3.jpg",
// // //   },
// // // ];

// // // export default function ClientTestimonials() {
// // //   return (
// // //     <div className="bg-white overflow-x-hidden">
// // //       {/* Hero section */}
// // //       <div
// // //         className="w-full h-20 bg-cover bg-center"
// // //         style={{
// // //           backgroundImage:
// // //             "url('https://via.placeholder.com/1600x400.png?text=Client+Testimonials')",
// // //         }}
// // //       >
// // //         <div className="bg-white bg-opacity-50 h-full flex items-center justify-center">
// // //           <h1 className="text-gray text-4xl font-bold">Client Testimonials</h1>
// // //         </div>
// // //       </div>

// // //       {/* Testimonial Cards */}
// // //       <section className="max-w-6xl mx-auto px-4 py-16">
// // //         <h2 className="text-3xl font-bold text-center mb-12">
// // //           What Our Clients Say
// // //         </h2>

// // //         <div className="grid md:grid-cols-3 gap-10">
// // //           {testimonials.map((client) => (
// // //             <div
// // //               key={client.id}
// // //               className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition duration-300"
// // //             >
// // //               <img
// // //                 src={client.image}
// // //                 alt={client.name}
// // //                 className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
// // //               />
// // //               <h3 className="text-xl font-semibold">{client.name}</h3>
// // //               <p className="text-sm text-gray-500 mb-4">{client.company}</p>
// // //               <p className="text-gray-700 italic">"{client.quote}"</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // import React from "react";

// // const testimonials = [
// //   {
// //     id: 1,
// //     name: "John Smith",
// //     company: "MedTech Corp",
// //     quote:
// //       "Roots Analysis provided us with data that transformed our market approach. Extremely professional and insightful reports!",
// //     image: "/images/client1.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Sarah Lee",
// //     company: "BioPharma Ltd",
// //     quote:
// //       "The insights we gained from their reports have been invaluable. Highly recommend their services.",
// //     image: "/images/client2.jpg",
// //   },
// //   {
// //     id: 3,
// //     name: "David Kim",
// //     company: "Genomics Inc.",
// //     quote:
// //       "We were impressed by the depth of research. Truly a trusted partner for strategic decisions.",
// //     image: "/images/client3.jpg",
// //   },
// // ];

// // export default function ClientTestimonials() {
// //   return (
// //     <div className="bg-white">
// //       {/* Hero Section */}
// //       <div
// //         className="w-full h-40 bg-cover bg-center flex items-center justify-center"
// //         style={{
// //           backgroundImage:
// //             "url('https://via.placeholder.com/1600x400.png?text=Client+Testimonials')",
// //         }}
// //       >
// //         <div className="bg-white bg-opacity-60 p-4 rounded">
// //           <h1 className="text-4xl font-bold text-gray-800">
// //             Client Testimonials
// //           </h1>
// //         </div>
// //       </div>

// //       {/* Testimonials Section */}
// //       <section className="max-w-6xl mx-auto px-4 py-16">
// //         <h2 className="text-3xl font-bold text-center mb-12">
// //           What Our Clients Say
// //         </h2>

// //         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
// //           {testimonials.map((client) => (
// //             <div
// //               key={client.id}
// //               className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition duration-300 flex flex-col items-center"
// //             >
// //               <img
// //                 src={client.image}
// //                 alt={`Photo of ${client.name}`}
// //                 loading="lazy"
// //                 className="w-24 h-24 rounded-full object-cover mb-4"
// //               />
// //               <h3 className="text-xl font-semibold">{client.name}</h3>
// //               <p className="text-gray-500 text-sm mb-4">{client.company}</p>
// //               <p className="text-gray-700 italic">"{client.quote}"</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Smith",
//     company: "MedTech Corp",
//     quote:
//       "Roots Analysis provided us with data that transformed our market approach. Extremely professional and insightful reports!",
//   },
//   {
//     id: 2,
//     name: "Sarah Lee",
//     company: "BioPharma Ltd",
//     quote:
//       "The insights we gained from their reports have been invaluable. Highly recommend their services.",
//   },
//   {
//     id: 3,
//     name: "David Kim",
//     company: "Genomics Inc.",
//     quote:
//       "We were impressed by the depth of research. Truly a trusted partner for strategic decisions.",
//   },
//   {
//     id: 4,
//     name: "Emily Carter",
//     company: "HealthWorks",
//     quote:
//       "Their professionalism and data accuracy helped us navigate market trends effectively.",
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     company: "LifeSciences Pro",
//     quote:
//       "Exceptional reports and fast turnaround. We keep coming back for more!",
//   },
// ];

// export default function ClientTestimonials() {
//   const [current, setCurrent] = useState(0);
//   const length = testimonials.length;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [length]);

//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + length) % length);
//   const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

//   return (
//     <div className="bg-white text-center px-4 py-16 max-w-3xl mx-auto relative overflow-hidden">
//       <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

//       <div className="bg-gray-100 p-6 rounded-lg shadow transition-all duration-500">
//         <p className="italic text-gray-700 text-lg mb-4">
//           "{testimonials[current].quote}"
//         </p>
//         <h3 className="text-xl font-semibold text-gray-800">
//           {testimonials[current].name}
//         </h3>
//         <p className="text-sm text-gray-500">{testimonials[current].company}</p>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
//       >
//         <ChevronRight size={28} />
//       </button>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "MedTech Corp",
    quote:
      "Roots Analysis provided us with data that transformed our market approach. Extremely professional and insightful reports!",
  },
  {
    id: 2,
    name: "Sarah Lee",
    company: "BioPharma Ltd",
    quote:
      "The insights we gained from their reports have been invaluable. Highly recommend their services.",
  },
  {
    id: 3,
    name: "David Kim",
    company: "Genomics Inc.",
    quote:
      "We were impressed by the depth of research. Truly a trusted partner for strategic decisions.",
  },
  {
    id: 4,
    name: "Emily Carter",
    company: "HealthWorks",
    quote:
      "Their professionalism and data accuracy helped us navigate market trends effectively.",
  },
  {
    id: 5,
    name: "Michael Brown",
    company: "LifeSciences Pro",
    quote:
      "Exceptional reports and fast turnaround. We keep coming back for more!",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + length) % length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <div
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

        <div
          key={testimonials[current].id}
          className="bg-white bg-opacity-90 text-gray-800 p-8 rounded-lg shadow-md transition-all duration-500"
        >
          <p className="text-xl italic mb-6">"{testimonials[current].quote}"</p>
          <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
          <p className="text-sm text-gray-600">{testimonials[current].company}</p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}
