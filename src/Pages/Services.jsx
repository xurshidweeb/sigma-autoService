import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import about from '../assets/about.jpg'
import Modal from '../Components/Modal'
import { useTranslation } from 'react-i18next'

function Services() {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(!modal)

  const { t } = useTranslation()

  return (
    <div id="services" className="mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-10">
        
        {/* Rasm bloki */}
        <div className="relative w-full lg:w-[500px] mx-auto lg:mx-0">
          <img
            src={about}
            alt="About"
            className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-lg"
          />
          <div className="absolute right-[-20px] top-[-20px] text-3xl text-white font-medium w-[150px] p-4 bg-black/25 rounded-lg">
            <span className="text-5xl">15</span> Лет опытом
          </div>
        </div>

        {/* Matn bloki */}
        <div className="w-full lg:w-1/2">
          <p className="text-red-500 pb-3">{t('service.toptext')}</p>
          <h2 className="text-3xl font-bold text-white">
            <span className="text-red-500">Sigma Avtoservis</span> {t('service.title')}
          </h2>
          <p className="mt-4 text-gray-300">{t('service.text')}</p>

          {/* Xizmatlar */}
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-start gap-4 mt-6">
              <div className="text-xl font-bold text-blue-600 bg-black/10 px-2 py-1">{`0${num}`}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{t(`service.subtitle${num}`)}</h3>
                <p className="text-gray-400">{t(`service.text${num}`)}</p>
              </div>
            </div>
          ))}

          {/* Tugma */}
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 text-white bg-red-500 px-8 py-3 font-semibold mt-6 hover:bg-red-600 duration-150"
          >
            {t('service.btn')} <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <Modal>
          <div className="bg-white my-auto mx-auto max-w-[300px] w-auto p-5 pb-3 flex flex-col items-center rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-gray-700">{t('header.btn')}</h2>
            <p className="text-center text-gray-600 py-3">{t('header.modal.text')}</p>
            <h3 className="text-xl text-red-500 font-medium">+998971711118</h3>

            <div className="flex gap-5 items-center justify-between">
              <button
                onClick={openModal}
                className="px-3 py-1 mt-2 rounded text-white bg-red-500 hover:bg-red-600"
              >
                {t('header.modal.btn1')}
              </button>

              <a
                href="tel:+998971711118"
                className="px-3 py-1 mt-2 rounded text-white bg-emerald-700 hover:bg-emerald-800"
              >
                {t('header.modal.btn2')}
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Services
