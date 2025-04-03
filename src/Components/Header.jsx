import React, { useState } from "react";
import logo from "../assets/header-logo.png";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import Modal from "./Modal";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const showAlert = () => {
    Swal.fire({
      title: "",
      text: "Bu SweetAlert2 misoli.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };
  
  const openModal = () => {
    setModal(!modal);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full fixed  z-100 bg-white shadow-xl">
      <div className="flex items-center justify-between pl-5">
        <a href="/">
          <img src={logo} alt="Logo" className="w-28" />
        </a>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center pt-20 lg:hidden">
            <button className="absolute top-5 right-5 text-3xl" onClick={toggleMenu}>
              <FaTimes />
            </button>
            <nav className="flex flex-col gap-4 text-xl">
              <a onClick={toggleMenu} href="#home" className="hover:text-red-500">Главная</a>
              <a onClick={toggleMenu} href="#services" className="hover:text-red-500">О нас</a>
              <a onClick={toggleMenu} href="#xizmatlar" className="hover:text-red-500">Услуги</a>
              <a onClick={toggleMenu} href="#contact" className="hover:text-red-500">Контакты</a>
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
            <a href="#home" className="text-[18px] hover:text-red-500 font-medium">Главная</a>
            <a href="#services" className="text-[18px] hover:text-red-500 font-medium">О нас</a>
            <a href="#xizmatlar" className="text-[18px] hover:text-red-500 font-medium">Услуги</a>
            <a href="#contact" className="text-[18px] hover:text-red-500 font-medium">Контакты</a>
          </nav>
          <a href="tel:+998971711118" className="text-[17px] font-medium">+998971711118</a>
          <button onClick={openModal} className="flex items-center cursor-pointer bg-red-600 py-6 px-7 gap-2">
            <p className="text-lg font-medium text-white">Вызвать мастера</p>
            <FaArrowRight className="text-lg font-medium text-white" />
          </button>
        </div>
      </div>

      {modal ? (
            <Modal>
              <div className="bg-white my-auto mx-auto w-auto  p-5 pb-3 flex flex-col items-center rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-700">Вызвать мастера</h2>
                <p className="text-center text-gray-600 py-3">Чтобы связаться с администратором,
                  <br />
                  позвоните по этому номеру.</p>
                  <h3 className="text-xl text-red-500 font-medium">+998971711118</h3>
                
                <div className=" flex gap-5 items-center justify-between">
                  
                  <button
                    onClick={openModal}
                    className="px-2 py-1 mt-2 rounded-sm text-white bg-red-500 hover:bg-red-600 active:scale-105 w-22 flex justify-center"
                  >
                    Отменить
                  </button>

                  <a href="tel:+998971711118" className="px-2 py-1 mt-2 rounded-sm text-white bg-emerald-700 hover:bg-emerald-800 active:scale-70 duration-100 w-22 flex justify-center">Связь</a>
                </div>
              </div>
            </Modal>
          ) : (
            ""
          )}
    </header>
  );
}

export default Header;
