import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
      image: "/images/roots1.jpg",
      title: "Generative AI in Healthcare Market is Worth $3.3 Billion",
      buttons: ["Learn More", "Search Reports"]
    },
    {
      image: "/images/roots2.jpg",
      title: "Big Data Visualization and Flow",
      buttons: ["Explore Data", "Our Insights"]
    },
    {
      image: "/images/roots3.jpg",
      title: "Innovations in Scientific Research",
      buttons: ["Discover More", "Contact Us"]
    }
  ];
  

export default function HeroCarousel() {
  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 text-white text-center p-6 rounded max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                <div className="flex gap-4 justify-center">
                  {slide.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
