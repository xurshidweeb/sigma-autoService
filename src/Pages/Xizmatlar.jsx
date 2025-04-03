import React, { useState } from "react";
import { FaCar, FaTools, FaOilCan, FaCogs, FaCheck, FaArrowRight } from "react-icons/fa";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";
import "aos/dist/aos.css";
import Modal from "../Components/Modal";

const services = [
  {
    id: "diagnostics",
    title: "Диагностика",
    description:
      "Мы предоставляем высококачественные услуги по диагностике вашего автомобиля, используя самые современные технологии и оборудование.",
    benefits: [
      "Качественное Обслуживание",
      "Опытные Специалисты",
      "Современное Оборудование",
    ],
    image: service1,
    icon: <FaCar />,
  },
  {
    id: "engine",
    title: "Обслуживание Двигателя",
    description:
      "Наши специалисты готовы предложить вам комплексное обслуживание двигателя, чтобы ваш автомобиль всегда работал на максимальной производительности.",
    benefits: ["Гарантия Качества", "Проверенные Технологии", "Профессионалы"],
    image: service2,
    icon: <FaTools />,
  },
  {
    id: "tires",
    title: "Замена Шин",
    description:
      "Мы предлагаем профессиональную замену шин, чтобы ваш автомобиль был безопасен на дороге при любых погодных условиях.",
    benefits: [
      "Быстро и Качественно",
      "Новейшее Оборудование",
      "Опытные Мастера",
    ],
    image: service3,
    icon: <FaCogs />,
  },
  {
    id: "oil",
    title: "Замена Масла",
    description:
      "Мы предлагаем быструю и качественную замену масла, чтобы ваш двигатель работал плавно и эффективно.",
    benefits: [
      "Качественные Масла",
      "Быстро и Надежно",
      "Профессиональный Подход",
    ],
    image: service4,
    icon: <FaOilCan />,
  },
];

function Xizmatlar() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [modal, setModal] = useState();
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div id="xizmatlar" className="container flex flex-col md:flex-row p-5 gap-5">
      <div className="w-full md:w-1/4 flex flex-col gap-4">
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
            {service.icon} {service.title}
          </button>
        ))}
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-5">
        <img
          src={selectedService?.image}
          alt={selectedService.title}
          className="w-full md:w-1/2 h-110 object-cover shadow-lg"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">
            15 Лет Опыта в Автосервисе
          </h2>
          <p className="mt-2 text-2xl text-gray-700">{selectedService.description}</p>
          <ul className="mt-4 space-y-2">
            {selectedService.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
          <button onClick={openModal} className="mt-5 px-5 py-3 bg-red-600 text-white flex items-center gap-2  shadow-md w-full md:w-auto">
            ПОЗВОНИТЬ 
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
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

export default Xizmatlar;
