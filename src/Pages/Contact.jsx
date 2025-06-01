import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'
import Form from '../Pages/Form'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div id="contact">
      <div className="container px-5 flex flex-col items-center pt-15">
        <p className="text-red-500 text-xl md:text-2xl font-medium">{t('contact.toptext')}</p>
        <h2 className="text-[#fff] text-2xl md:text-4xl font-bold text-center pb-7 pt-3">
          {t('contact.title')}
        </h2>
        <div className="flex gap-5 w-full flex-wrap md:flex-nowrap">
          <div data-aos-duration="2000" className="bg-gray-800/50  py-3 px-5 w-full rounded-xl">
            <h3 className="text-white text-xl md:text-3xl font-bold pb-2">
              {t('contact.left')}
            </h3>
            <div className="flex items-center gap-2">
              <FaEnvelopeOpen className="text-red-500" />
              <p className="text-gray-600">+99897 717 11 18</p>
            </div>
          </div>
          <div data-aos-duration="2000" className="bg-gray-800/50  py-3 px-5 w-full rounded-xl">
            <h3 className="text-white text-xl md:text-3xl font-bold pb-2">
              {t('contact.rigtht')}
            </h3>
            <div className="flex items-center gap-2">
              <FaEnvelopeOpen className="text-red-500" />
              <p className="text-gray-600">+99897 717 11 18</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <Form />
          </div>
          <div className="flex justify-center ">
            <iframe
              className="mt-10 rounded-2xl w-full h-60 md:h-full shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11996.39274892076!2d69.2194!3d41.263198!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzQ3LjUiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2sus!4v1743482167541!5m2!1sru!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
