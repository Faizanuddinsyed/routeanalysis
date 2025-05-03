import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/img2.jpg",
    title: "Generative AI in Healthcare Market is Worth $3.3 Billion",
    subtitle: "Cutting-edge analysis of AI applications in healthcare",
    buttons: [
      { text: "Learn More", variant: "primary" },
      { text: "Search Reports", variant: "secondary" },
    ],
  },
  {
    image: "/images/img2.jpg",
    title: "Big Data Visualization and Flow",
    subtitle: "Transform raw data into actionable business insights",
    buttons: [
      { text: "Explore Data", variant: "primary" },
      { text: "Our Insights", variant: "secondary" },
    ],
  },
  {
    image: "/images/img2.jpg",
    title: "Innovations in Scientific Research",
    subtitle: "Discover breakthroughs shaping the future of medicine",
    buttons: [
      { text: "Discover More", variant: "primary" },
      { text: "Contact Us", variant: "secondary" },
    ],
  },
];

export default function HeroCarousel() {
  return (
    <div className="w-full h-screen max-h-[90vh] relative group">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Optimized background image with gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent"
                aria-hidden="true"
              />
              <img
                src={slide.image}
                alt={slide.title}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover object-center"
                decoding="async"
              />

              {/* Content overlay */}
              <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                <div className="max-w-2xl text-black space-y-6 transform transition-all duration-700 group-hover:translate-x-0 -translate-x-10">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-black">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {slide.buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                          btn.variant === "primary"
                            ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30"
                            : "bg-transparent border-2 border-white hover:bg-white hover:text-gray-900"
                        }`}
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev absolute left-4 z-10 hidden group-hover:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="swiper-button-next absolute right-4 z-10 hidden group-hover:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className="swiper-pagination-bullet w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
