import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaCarAlt, FaCarBattery, FaCarCrash, FaTired, FaTools, FaUnlockAlt } from "react-icons/fa";

function Hero() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div>
      <div className="">
        <div className="container px-10 pt-10">
          <p className="font-medium text-red-500 text-center ">Наши Услуги</p>
          <h1 className="text-4xl text-center font-bold pb-4">Ознакомьтесь С Нашими Услугами</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Электрик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaTools className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Механик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Ремонт Авто на Выезд</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Вулканизация</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Вскрытия Автомобиля</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Электрик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaTools className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Механик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Ремонт Авто на Выезд</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Вулканизация</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Вскрытия Автомобиля</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Электрик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaTools className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Механик</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Ремонт Авто на Выезд</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Авто-Вулканизация</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100">
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl"/>
              <p className="text-md md:text-xl font-medium">Вскрытия Автомобиля</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
