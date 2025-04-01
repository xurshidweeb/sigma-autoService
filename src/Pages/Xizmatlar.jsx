import React, { useState } from "react";
import { FaCar, FaTools, FaOilCan, FaCogs } from "react-icons/fa";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";

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

  return (
    <div id="xizmatlar" className="container flex flex-col md:flex-row p-5 gap-5">
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            className={`flex items-center gap-2 p-5 text-left text-3xl transition-all ${
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
                ✅ {benefit}
              </li>
            ))}
          </ul>
          <button className="mt-5 px-5 py-2 bg-red-600 text-white  shadow-md w-full md:w-auto">
            ПОЗВОНИТЬ ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default Xizmatlar;
