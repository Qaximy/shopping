import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/banner5.webp";
import img2 from "../../assets/banner6.webp";
import img3 from "../../assets/banner7.webp";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[80vh] w-full">
            <img
              src={img1}
              alt="Vacation Ready Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
                  Vacation <br /> Ready
                </h1>
                <p className="text-sm md:text-lg mb-6 max-w-xl mx-auto">
                  Explore our vacation-ready outfits with fast worldwide shipping.
                </p>
                <Link
                  to="/shop"
                  className="bg-white text-gray-950 px-6 py-3 rounded-sm text-lg font-medium hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[80vh] w-full">
            <img
              src={img2}
              alt="Summer Collection Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
                  Summer <br /> Collection
                </h1>
                <p className="text-sm md:text-lg mb-6 max-w-xl mx-auto">
                  Discover fresh looks for your summer adventures.
                </p>
                <Link
                  to="/shop"
                  className="bg-white text-gray-950 px-6 py-3 rounded-sm text-lg font-medium hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[80vh] w-full">
            <img
              src={img3}
              alt="New Arrivals Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
                  New <br /> Arrivals
                </h1>
                <p className="text-sm md:text-lg mb-6 max-w-xl mx-auto">
                  Upgrade your style with our latest drops.
                </p>
                <Link
                  to="/shop"
                  className="bg-white text-gray-950 px-6 py-3 rounded-sm text-lg font-medium hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
