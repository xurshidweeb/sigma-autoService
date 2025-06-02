import React, { useEffect } from 'react'
import {
  FaMapMarkerAlt,
  FaClock,
  FaTools,
  FaPhone,
  FaCar,
  FaOilCan,
  FaTint,
  FaCog,
  FaFan,
  FaPlug,
  FaWrench,
  FaCarCrash,
  FaInstagram,
} from 'react-icons/fa'
import { RiTelegramLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next' // ✅ TIL QO‘SHILDI
import bg from '../assets/tracker.jpg'

function Footer() {
  const { t } = useTranslation()

  return (
    <div
      className="mt-20 bg-cover bg-center bg-fixed text-white p-10 font-sans"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${bg})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Address Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="border-b-2 border-green-500 pb-2.5 mb-5 flex items-center gap-2.5">
            <FaMapMarkerAlt size={20} /> {t('footer.address.title')}
          </h3>
          <p className="my-2 leading-relaxed flex items-start gap-2.5">
            <span className="mt-0.5">📍</span>
            <span>{t('footer.address.full')}</span>
          </p>
          <div className="my-4 flex flex-col gap-2">
            <a
              href="tel:+998977171118"
              className="text-red-500 no-underline flex items-center gap-2.5 hover:text-red-400"
            >
              <FaPhone /> +99897 717 11 18
            </a>
            <a
              href="tel:+998977387275"
              className="text-red-500 no-underline flex items-center gap-2.5 hover:text-red-400"
            >
              <FaPhone /> +99897 738 72 75
            </a>
            <div className="flex gap-4 px-3">
              <FaInstagram className="text-3xl hover:text-pink-500 cursor-pointer" />
              <RiTelegramLine className="text-3xl hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="border-b-2 border-green-500 pb-2.5 mb-5 flex items-center gap-2.5">
            <FaClock size={20} /> {t('footer.hours.title')}
          </h3>
          <p className="my-1 flex items-center gap-2.5">
            <span className="text-green-500">⏰</span>
            <span>{t('footer.hours.schedule')}</span>
          </p>
        </div>

        {/* Services Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="border-b-2 border-green-500 pb-2.5 mb-5 flex items-center gap-2.5">
            <FaTools size={20} /> {t('footer.services.title')}
          </h3>
          <ul className="my-1 pl-0 list-none grid grid-cols-1">
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaCarCrash /> {t('footer.services.items.diagnostics')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaCog /> {t('footer.services.items.engine')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaCar /> {t('footer.services.items.spike')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaOilCan /> {t('footer.services.items.oil')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaTools /> {t('footer.services.items.lathe')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaTint /> {t('footer.services.items.tinting')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaFan /> {t('footer.services.items.motorist')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaTools /> {t('footer.services.items.castapra')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaTools /> {t('footer.services.items.vacuum')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaPlug /> {t('footer.services.items.electrician')}
              </a>
            </li>
            <li className="py-1 hover:pl-1 transition-all">
              <a
                href="#"
                className="text-white no-underline flex items-center gap-2 hover:text-green-500"
              >
                <FaWrench /> {t('footer.services.items.mechanic')}
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="border-b-2 border-green-500 pb-2.5 mb-5 flex items-center gap-2.5">
            <FaPhone size={20} /> {t('footer.contacts.title')}
          </h3>
          <button className="bg-green-500 text-white border-none py-3.5 px-7 text-center no-underline flex items-center justify-center gap-2.5 text-base my-2.5 cursor-pointer rounded font-bold transition-all w-full max-w-[300px] hover:bg-red-500 hover:scale-103 hover:shadow-md">
            <FaPhone /> {t('footer.contacts.button')}
          </button>
        </div>
      </div>

      <div className="text-center mt-2.5 pt-5 border-t border-white/30 text-sm opacity-80">
        <p>© 2025 {t('footer.copyright')}</p>
      </div>
    </div>
  )
}

export default Footer
