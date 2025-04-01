import React from "react";
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
} from "react-icons/fa";
import bg from "../assets/tracker.jpg";
import { RiTelegramLine } from "react-icons/ri";

function Footer() {
  return (
    <div
      className="footer-container mt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "30px",
        }}
      >
        {/* Address Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              borderBottom: "2px solid #4CAF50",
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaMapMarkerAlt size={20} /> Адрес
          </h3>
          <p
            style={{
              margin: "8px 0",
              lineHeight: "1.6",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <span style={{ marginTop: "3px" }}>📍</span>
            <span>
              Ул. Якхасарайская,
              <br />
              г. Ташкент, Узбекистан,
              <br />
              Ориентир: Напротив
              <br />
              свадебный ресторан Navruz
            </span>
          </p>
          <div
            style={{
              margin: "15px 0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <a
              href="tel:+998977171118"
              style={{
                color: "red",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaPhone /> +99897 717 11 18
            </a>
            <a
              href="tel:+998977387275"
              style={{
                color: "red",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaPhone /> +99897 738 72 75
            </a>
            <div className="">
              <a href="" className="flex gap-4 px-3">
              <FaInstagram className="text-3xl" />
              <RiTelegramLine className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              borderBottom: "2px solid #4CAF50",
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaClock size={20} /> Часы Работы
          </h3>
          <p
            style={{
              margin: "5px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: "#4CAF50" }}>⏰</span>
            <span>
              <strong>Понедельник - Воскресенье:</strong>
              <br />
              24/7
            </span>
          </p>
        </div>

        {/* Services Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              borderBottom: "2px solid #4CAF50",
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaTools size={20} /> Услуги
          </h3>
          <ul
            style={{
              margin: "5px 0",
              paddingLeft: "0",
              listStyleType: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "",
            }}
          >
            <ServiceItem icon={<FaCarCrash />} text="Диагностика" />
            <ServiceItem icon={<FaCog />} text="Обслуживание Двигателя" />
            <ServiceItem icon={<FaCar />} text="Замена Шип" />
            <ServiceItem icon={<FaOilCan />} text="Замена Масла" />
            <ServiceItem icon={<FaTools />} text="Токарная Услуга" />
            <ServiceItem icon={<FaTint />} text="Тонировка" />
            <ServiceItem icon={<FaFan />} text="Моторист" />
            <ServiceItem icon={<FaTools />} text="Кастапраа" />
            <ServiceItem icon={<FaTools />} text="Вакуумная Чистка" />
            <ServiceItem icon={<FaPlug />} text="Авто-Электрик" />
            <ServiceItem icon={<FaWrench />} text="Авто-Механик" />
            
          </ul>
        </div>

        {/* Contacts Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              borderBottom: "2px solid #4CAF50",
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaPhone size={20} /> Контакты
          </h3>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "14px 28px",
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "16px",
              margin: "10px 0",
              cursor: "pointer",
              borderRadius: "6px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              width: "100%",
              maxWidth: "300px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "red";
              e.target.style.transform = "scale(1.03)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            <FaPhone /> Вызвать мастера
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          fontSize: "14px",
          opacity: "0.8",
        }}
      >
        <p>© 2025 Автосервис. Все права защищены.</p>
      </div>
    </div>
  );
}

// Service item component for hover effects
function ServiceItem({ icon, text }) {
  return (
    <li
      style={{
        transition: "all 0.3s ease",
        padding: "5px 0",
      }}
    >
      <a
        href="#"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#4CAF50";
          e.target.style.paddingLeft = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "white";
          e.target.style.paddingLeft = "0";
        }}
      >
        {icon} {text}
      </a>
    </li>
  );
}

export default Footer;
