import React, { use, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import about from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../Components/Modal";
import { useTranslation } from "react-i18next";

function Services() {
  const [modal, setModal] = useState();
  const openModal = () => {
    setModal(!modal);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div id="services" className="mt-15">
      <div className="container px-10 flex flex-col lg:flex-row justify-between items-start w-full">
        {/* Rasmdagi blok */}
        <div data-aos="zoom-in-right" className="relative w-full md:w-4/5 lg:w-[500px] mx-auto lg:mx-0">
          <img src={about} alt="" className="object-cover w-full h-[600px]" />
          <div className="absolute right-[-20px] top-[-20px] text-3xl text-white font-medium w-[150px] p-4 bg-black/25">
            <span className="text-5xl">15</span> Лет опыом
          </div>
        </div>

        {/* Matnli blok */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <p data-aos="fade-down" className="text-red-500 pb-3">{t("service.toptext")}</p>
          <h2 data-aos="fade-left" className="text-3xl font-bold">
            <span className="text-red-500">Sigma Avtoservis</span> {t("service.title")}
          </h2>
          <p data-aos="fade-down" className="mt-4 text-gray-700">
            {t("service.text")}
          </p>

          {/* Xizmatlar bo‘limi */}
          <div data-aos="fade-left" data-aos-duration="2000" className="flex items-start gap-4 mt-6">
            <div className="text-xl font-bold text-blue-600 bg-black/10 px-2 py-1">
              01
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {t("service.subtitle1")}
              </h3>
              <p className="text-gray-600">
                {t("service.text1")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="flex items-start gap-4 mt-6">
            <div className="text-xl font-bold text-blue-600 bg-black/10 px-2 py-1">
              02
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {t("service.subtitle2")}
              </h3>
              <p className="text-gray-600">
                {t("service.text2")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="flex items-start gap-4 mt-6">
            <div className="text-xl font-bold text-blue-600 bg-black/10 px-2 py-1">
              03
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t("service.subtitle3")}</h3>
              <p className="text-gray-600">
                {t("service.text3")}
              </p>
            </div>
          </div>

          {/* Qo‘ng‘iroq tugmasi */}
          <a
          data-aos="fade-up"
            onClick={openModal}
            href="tel:+998971711118"
            className="inline-flex items-center gap-2 text-white bg-red-500 px-10 py-3 font-semibold mt-6"
          >
            {t("service.btn")} <FaArrowRight />
          </a>
        </div>
      </div>
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
                className="px-2 py-1 mt-2 rounded-sm text-white bg-emerald-700 hover:bg-emerald-800 active:scale-70 duration-100 flex justify-center"
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

export default Services;
