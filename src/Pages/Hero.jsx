import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCarAlt,
  FaCarBattery,
  FaCarCrash,
  FaTired,
  FaTools,
  FaUnlockAlt,
} from "react-icons/fa";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="">
        <div className="container px-10 pt-10">
          <p className="font-medium text-red-500 text-center ">
           // {t("hero.text")} //
          </p>
          <h1 className="text-4xl text-center font-bold pb-4">
            {t("hero.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text1")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaTools className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text2")}</p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text3")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text4")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text5")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text1")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaTools className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text2")}</p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text3")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text4")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text5")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarBattery className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text1")}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaTools className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">{t("hero.text2")}</p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarCrash className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text3")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text4")}
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 justify-center md:justify-start h-25 p-8 bg-gray-100"
            >
              <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />
              <p className="text-md md:text-xl font-medium">
                {t("hero.text5")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
