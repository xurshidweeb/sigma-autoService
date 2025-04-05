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
import Modal from "../Components/Modal";
import { useTranslation } from "react-i18next";

function Home() {
  const [modal, setModal] = useState();
  const openModal = () => {
    setModal(!modal);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
                  <p
                    data-aos="fade-right"
                    data-aos-delay="100"
                   className="text-md text-center md:text-left md:text-xl font-bold">
                    {t("home.title")}
                  </p>
                  <h1
                    data-aos="fade-down"
                    className="text-5xl text-center md:text-left md:text-7xl font-bold"
                  >
                    {index === 1
                      ? t("home.text2")
                      : index === 2
                      ? t("home.text3")
                      : t("home.text1")}
                  </h1>
                  <a
                    data-aos="fade-right"
                    data-aos-delay="300"
                    onClick={openModal}
                    href="#"
                    className="flex items-center justify-center gap-2 w-40 py-2 bg-red-600"
                  >
                    {t("home.btn")}
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
          <div className="bg-white my-auto mx-auto max-w-[300px] w-auto  p-5 pb-3 flex flex-col items-center rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-gray-700">
              {t("header.btn")}
            </h2>
            <p className="text-center text-gray-600 py-3">
              {t("header.modal.text")}
            </p>
            <h3 className="text-xl text-red-500 font-medium">+998971711118</h3>

            <div className=" flex gap-5 items-center justify-between">
              <button
                onClick={openModal}
                className="px-2 py-1 mt-2 rounded-sm text-white bg-red-500 hover:bg-red-600 active:scale-105 flex justify-center"
              >
                {t("header.modal.btn1")}
              </button>

              <a
                href="tel:+998971711118"
                className="px-2 py-1 mt-2 rounded-sm text-white bg-emerald-700 hover:bg-emerald-800 active:scale-70 duration-100  flex justify-center"
              >
                {t("header.modal.btn2")}
              </a>
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
