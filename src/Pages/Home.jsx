import React, { useEffect, useState } from "react";
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
import Modal from "../Components/Modal";

function Home() {
    const [modal, setModal] = useState();
    const openModal = () => {
      setModal(!modal);
    };
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="home" className="overflow-hidden">
      {/* SWIPER */}
      <Swiper
        loop={true}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {[hero1, hero2, hero3].map((bgImage, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "120vh",
              }}
              className="flex items-center relative aos-init aos-animate"
            >
              <div className="absolute bg-[#00000067] w-full h-full"></div>
              <div className="container z-1 px-10 flex justify-center md:justify-between items-center">
                <div className="text-white flex flex-col items-center md:items-start gap-5">
                  <p className="text-md text-center md:text-left md:text-xl font-bold">
                    // Ремонт автомобилей //
                  </p>
                  <h1
                    data-aos="fade-down"
                    className="text-5xl text-center md:text-left md:text-7xl font-bold"
                  >
                    {index === 2
                      ? "Ремонт автомобиля в рассрочку"
                      : "Помощь на дороге"}
                  </h1>
                  <a
                  onClick={openModal}
                    href="#"
                    className="flex items-center justify-center gap-2 w-40 py-2 bg-red-600"
                  >
                    Узнать больше
                    <FaArrowRight />
                  </a>
                </div>
                <img
                  data-aos="zoom-in"
                  src={index === 2 ? carusel2 : carusel1}
                  alt="mers"
                  className="hidden md:flex w-80 lg:w-100"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper navigatsiya tugmalari */}
      <div className="swiper-button-prev !text-white"></div>
      <div className="swiper-button-next !text-white"></div>

      {modal ? (
            <Modal>
              <div className="bg-white my-auto mx-auto w-auto  p-5 pb-3 flex flex-col items-center rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-700">Вызвать мастера</h2>
                <p className="text-center text-gray-600 py-3">Чтобы связаться с администратором,
                  <br />
                  позвоните по этому номеру.</p>
                  <h3 className="text-xl text-red-500 font-medium">+998971711118</h3>
                
                <div className=" flex gap-5 items-center justify-between">
                  
                  <button
                    onClick={openModal}
                    className="px-2 py-1 mt-2 rounded-sm text-white bg-red-500 hover:bg-red-600 active:scale-105 w-22 flex justify-center"
                  >
                    Отменить
                  </button>

                  <a href="tel:+998971711118" className="px-2 py-1 mt-2 rounded-sm text-white bg-emerald-700 hover:bg-emerald-800 active:scale-70 duration-100 w-22 flex justify-center">Связь</a>
                </div>
              </div>
            </Modal>
          ) : (
            ""
          )}
    </div>
  );
}

export default Home;
