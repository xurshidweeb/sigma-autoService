import React, { useState } from "react";
import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCogs,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";
import "aos/dist/aos.css";
import Modal from "../Components/Modal";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: 1,
    titleKey: "left1",
    descriptionKey: "text1",
    benefits: ["bottom1", "bottom2", "bottom3"],
    image: service1,
    icon: <FaCar />,
  },
  {
    id: 2,
    titleKey: "left2",
    descriptionKey: "text2",
    benefits: ["bottom1", "bottom2", "bottom3"],
    image: service2,
    icon: <FaTools />,
  },
  {
    id: 3,
    titleKey: "left3",
    descriptionKey: "text3",
    benefits: ["bottom1", "bottom2", "bottom3"],
    image: service3,
    icon: <FaCogs />,
  },
  {
    id: 4,
    titleKey: "left4",
    descriptionKey: "text4",
    benefits: ["bottom1", "bottom2", "bottom3"],
    image: service4,
    icon: <FaOilCan />,
  },
];

function Xizmatlar() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div id="xizmatlar" className="container flex flex-col md:flex-row p-5 gap-5">
      {/* Left side - Service buttons */}
      <div data-aos="fade-right" className="w-full md:w-1/4 flex flex-col gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            className={`flex items-center gap-2 p-5 text-left text-[20px] font-bold transition-all ${
              selectedService.id === service.id
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service.icon} {t(`xizmat.${service.titleKey}`)}
          </button>
        ))}
      </div>

      {/* Right side - Service details */}
      <div  className="w-full md:w-3/4 flex flex-col md:flex-row gap-5">
        <img
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
          src={selectedService.image}
          alt={t(`xizmat.${selectedService.titleKey}`)}
          className="w-full md:w-1/2 h-110 object-cover shadow-lg"
        />
        
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("xizmat.title")}
          </h2>
          
          <p className="mt-2 text-2xl text-gray-700">
            {t(`xizmat.${selectedService.descriptionKey}`)}
          </p>
          
          <ul className="mt-4 space-y-2">
            {selectedService.benefits.map((benefitKey, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-green-600" />
                {t(`xizmat.${benefitKey}`)}
              </li>
            ))}
          </ul>
          
          <button
            onClick={openModal}
            className="mt-5 px-5 py-3 bg-red-600 text-white flex items-center gap-2 shadow-md w-full md:w-auto"
          >
            {t("header.btn")}
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <Modal onClose={openModal}>
          <div className="bg-white my-auto max-w-[300px] mx-auto w-auto p-5 pb-3 flex flex-col items-center rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-gray-700">
              {t("header.btn")}
            </h2>
            <p className="text-center text-gray-600 py-3">
              {t("header.modal.text")}
            </p>
            <h3 className="text-xl text-red-500 font-medium">+998971711118</h3>

            <div className="flex gap-5 items-center justify-between">
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
      )}
    </div>
  );
}

export default Xizmatlar;