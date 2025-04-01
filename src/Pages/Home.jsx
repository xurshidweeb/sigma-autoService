import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import hero1 from "../assets/captiva.jpeg";
import hero2 from "../assets/lacetti.png";
import hero3 from "../assets/malibu2.jpg";
import { FaArrowRight } from "react-icons/fa";
import carusel1 from "../assets/carousel-1.png";
import carusel2 from "../assets/carousel-2.png";
import AOS from "aos";
import "aos/dist/aos.css";
  

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div id="home" className="">
      <Swiper
        loop={true}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "120vh",
            }}
            className="flex items-center relative"
          >
            <div className="absolute bg-[#00000067] w-full h-full"></div>
            <div className="container z-1 px-10 flex justify-center md:justify-between items-center">
              <div className="text-white flex flex-col items-center md:items-start gap-5">
                <p className="text-md text-center md:text-left md:text-xl font-bold ">
                  // Ремонт автомобилей //
                </p>
                <h1
                  data-aos="fade-down"
                  className="text-5xl text-center md:text-left md:text-7xl font-bold"
                >
                  Помощь на дороге
                </h1>
                <a
                  href=""
                  className="flex items-center justify-center  gap-2 w-40 py-2 bg-red-600"
                >
                  Узнать больше
                  <FaArrowRight />
                </a>
              </div>
              <img
                data-aos="zoom-in"
                src={carusel1}
                alt="mers"
                className="hidden md:flex  w-80 lg:w-100"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "120vh",
            }}
            className="flex items-center relative"
          >
            <div className="absolute bg-[#0000008b] w-full h-full"></div>
            <div className="container z-1 px-10 flex justify-center md:justify-between items-center">
              <div className="text-white flex flex-col items-center md:items-start gap-5">
                <p className="text-md text-center md:text-left md:text-xl font-bold ">
                  // Ремонт автомобилей //
                </p>
                <h1
                  data-aos="fade-down"
                  className="text-5xl text-center md:text-left md:text-7xl font-bold"
                >
                  Помощь на дороге
                </h1>
                <a
                  href=""
                  className="flex items-center justify-center  gap-2 w-40 py-2 bg-red-600"
                >
                  Узнать больше
                  <FaArrowRight />
                </a>
              </div>
              <img
                data-aos="zoom-in"
                src={carusel2}
                alt="mers"
                className="hidden md:flex  w-80 lg:w-100"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hero3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "120vh",
            }}
            className="flex items-center relative"
          >
            <div className="absolute bg-[#00000067] w-full h-full"></div>
            <div className="container z-1 px-10 flex justify-center md:justify-between items-center">
              <div className="text-white flex flex-col items-center md:items-start gap-5">
                <p className="text-md text-center md:text-left md:text-xl font-bold ">
                  // Ремонт автомобилей //
                </p>
                <h1
                  data-aos="fade-down"
                  className="text-5xl text-center md:text-left md:text-7xl font-bold"
                >
                  Ремонт автомобиля в рассрочку
                </h1>
                <a
                  href=""
                  className="flex items-center justify-center  gap-2 w-40 py-2 bg-red-600"
                >
                  Узнать больше
                  <FaArrowRight />
                </a>
              </div>
              <img
                data-aos="zoom-in"
                src={carusel2}
                alt="mers"
                className="hidden md:flex  w-80 lg:w-100"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-prev !text-white"></div>
      <div className="swiper-button-next !text-white"></div>
    </div>
  );
}

export default Home;
