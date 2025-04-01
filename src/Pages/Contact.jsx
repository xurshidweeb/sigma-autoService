import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="container px-10 flex flex-col items-center pt-15">
        <p className="text-red-500 text-xl md:text-2xl font-medium">
          // Свяжитесь с Нами //
        </p>
        <h2 className="text-[#0B2154] text-2xl md:text-4xl font-bold text-center pb-7 pt-3">
          Свяжитесь с Нами по Любым Вопросам
        </h2>
        <div className="flex gap-5 w-full flex-wrap md:flex-nowrap">
          <div className="bg-gray-200 py-3 px-5 w-full">
            <h3 className="text-[#0B2154] text-xl md:text-3xl font-bold pb-2">
              // Бронирование //
            </h3>
            <div className="flex items-center gap-2">
              <FaEnvelopeOpen className="text-red-500" />
              <p className="text-gray-600">+99897 717 11 18</p>
            </div>
          </div>
          <div className="bg-gray-200 py-3 px-5 w-full">
            <h3 className="text-[#0B2154] text-xl md:text-3xl font-bold pb-2">
              // Бронирование //
            </h3>
            <div className="flex items-center gap-2">
              <FaEnvelopeOpen className="text-red-500" />
              <p className="text-gray-600">+99897 717 11 18</p>
            </div>
          </div>
        </div>

        <iframe
        className="mt-10"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11996.39274892076!2d69.2194!3d41.263198!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzQ3LjUiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2sus!4v1743482167541!5m2!1sru!2sus"
          width="100%"
          height="400"
          // style="border:0;"
          
          loading="lazy"
  
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
