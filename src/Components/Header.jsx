import React, { useState } from 'react'
import logo from '../assets/logotive.png'
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState(false)

  const showAlert = () => {
    Swal.fire({
      title: '',
      text: 'Bu SweetAlert2 misoli.',
      icon: 'info',
      confirmButtonText: 'OK',
    })
  }

  const openModal = () => {
    setModal(!modal)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const { t, i18n } = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className="w-full fixed z-100 bg-white/30 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between px-3 md:px-10 py-5">
        <div className="flex gap-10 items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="w-28" />
          </a>

          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e?.target?.value)}
            className="focus:outline-none py-[2px] px-1 rounded-md text-white text-md font-bold bg-black/10 shadow-md"
          >
            <option className="bg-gray-500" value="uz">
              Uz
            </option>
            <option className="bg-gray-500" value="eng">
              Eng
            </option>
            <option className="bg-gray-500" value="ru">
              Ru
            </option>
          </select>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center pt-20 lg:hidden">
            <button className="absolute top-5 right-5 text-3xl" onClick={toggleMenu}>
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-4 text-xl">
              <a onClick={toggleMenu} href="#home" className="hover:text-red-500 text-center">
                {t('header.nav1')}
              </a>
              <a onClick={toggleMenu} href="#services" className="hover:text-red-500 text-center">
                {t('header.nav2')}
              </a>
              <a onClick={toggleMenu} href="#xizmatlar" className="hover:text-red-500 text-center">
                {t('header.nav3')}
              </a>
              <a onClick={toggleMenu} href="#contact" className="hover:text-red-500 text-center">
                {t('header.nav4')}
              </a>
            </nav>
            <button
              onClick={openModal}
              className="flex items-center cursor-pointer bg-red-600 py-2 px-4 mt-2 rounded-2xl gap-2"
            >
              <p className="text-lg font-medium text-white">{t('header.btn')}</p>
              <FaArrowRight className="text-lg font-medium text-white" />
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl p-2" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 items-center">
          <nav className="hidden lg:flex gap-5 items-center text-white">
            <a href="#home" className="text-[18px] hover:text-red-500 font-medium">
              {t('header.nav1')}
            </a>
            <a href="#services" className="text-[18px] hover:text-red-500 font-medium">
              {t('header.nav2')}
            </a>
            <a href="#xizmatlar" className="text-[18px] hover:text-red-500 font-medium">
              {t('header.nav3')}
            </a>
            <a href="#contact" className="text-[18px] hover:text-red-500 font-medium">
              {t('header.nav4')}
            </a>
          </nav>
          <a href="tel:+998971711118" className="text-[17px] font-medium text-white">
            +998971711118
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
