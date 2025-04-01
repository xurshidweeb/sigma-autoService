import React, { useEffect, useState } from "react";
import logo from "../assets/header-logo.png";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > 700) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`w-full z-10 bg-white shadow-xl transition-all duration-700 ease-in-out ${
        isSticky ? "fixed top-0 translate-y-0 opacity-100" : "relative opacity-100"
      }`}
    >
      <div className="flex items-center justify-between pl-5">
        <a href="/">
          <img src={logo} alt="Logo" className="w-28" />
        </a>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center pt-20 lg:hidden transition-transform duration-500 ease-in-out">
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-4 text-xl">
              <a
                onClick={toggleMenu}
                href="#home"
                className="hover:text-red-500"
              >
                Главная
              </a>
              <a
                onClick={toggleMenu}
                href="#services"
                className="hover:text-red-500"
              >
                О нас
              </a>
              <a onClick={toggleMenu} href="#xizmatlar" className="hover:text-red-500">
                Услуги
              </a>
              <a onClick={toggleMenu} href="#contact" className="hover:text-red-500">
                Контакты
              </a>
            </nav>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl p-2" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 items-center">
          <nav className="hidden lg:flex gap-5 items-center">
            <a
              href="#home"
              className="text-[18px] hover:text-red-500 font-medium"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-[18px] hover:text-red-500 font-medium"
            >
              О нас
            </a>
            <a href="#xizmatlar" className="text-[18px] hover:text-red-500 font-medium">
              Услуги
            </a>
            <a href="#contact" className="text-[18px] hover:text-red-500 font-medium">
              Контакты
            </a>
          </nav>
          <a href="tel:+998971711118" className="text-[17px] font-medium">
            +998971711118
          </a>
          <button className="flex items-center bg-red-600 py-6 px-7 gap-2">
            <p className="text-lg font-medium text-white">
              Tehnikni chaqiring
            </p>
            <FaArrowRight className="text-lg font-medium text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
