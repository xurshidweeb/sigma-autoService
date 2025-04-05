import React from "react";
import onix from "../assets/onix.jpg";
import { FaCar, FaCheck, FaUsers, FaUsersCog } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Result() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${onix})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto",
        }}
        className="py-10 relative mt-10"
      >
        <div className="bg-black/60 absolute w-full h-full top-0"></div>
        <div className="container ">
          <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex flex-col gap-2 items-center">
              <FaCheck className=" z-2 text-4xl text-white" />
              <div className=" z-2 text-white  text-4xl font-bold">15</div>
              <div className=" z-2 text-white font-medium text-md">
                {t("result.text1")}
              </div>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <FaUsersCog className=" z-2 text-4xl text-white" />
              <div className=" z-2 text-white  text-4xl font-bold">20</div>
              <div className=" z-2 text-white font-medium text-md">
                {t("result.text2")}
              </div>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <FaUsers className=" z-2 text-4xl text-white" />
              <div className=" z-2 text-white  text-4xl font-bold">1000</div>
              <div className=" z-2 text-white font-medium text-md">
                {t("result.text3")}
              </div>
            </li>
            <li className="flex flex-col gap-2 items-center">
              <FaCar className=" z-2 text-4xl text-white" />
              <div className=" z-2 text-white  text-4xl font-bold">500</div>
              <div className=" z-2 text-white font-medium text-md">
                {t("result.text4")}
              </div>
              {/* <FaUsersCog /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
