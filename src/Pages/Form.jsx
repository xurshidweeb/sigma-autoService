import React, { useState } from "react";
import { FaCheckCircle, FaPaperPlane, FaExclamationCircle } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";

function TelegramForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Bot token and chat ID
  const BOT_TOKEN = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
  const CHAT_ID = "6873538625";

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Имя обязательно";
    if (!formData.lastName.trim()) newErrors.lastName = "Фамилия обязательна";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обязателен";
    else if (!/^\d+$/.test(formData.phone)) newErrors.phone = "Только цифры";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    if (e.target.name === "phone" && !/^\d*$/.test(e.target.value)) {
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending || isSent) return;
    
    if (!validate()) return;

    setIsSending(true);

    const text = `
💬 Новый запрос:
👤 Имя: ${formData.firstName}
👤 Фамилия: ${formData.lastName}
📞 Телефон: ${formData.phone}
📝 Сообщение: ${formData.message}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      if (res.ok) {
        setIsSent(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            message: "",
          });
          setIsSent(false);
        }, 3000);
      }
    } catch (err) {
      console.error("Ошибка:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-200 md:h-full p-6 md:w-200  bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl mt-10 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Свяжитесь с нами
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className={`${errors.firstName ? "text-red-500 mt-[-23px]" : "text-gray-400"}`} />
            </div>
            <input
              type="text"
              name="firstName"
              placeholder="Имя"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.firstName && (
              <div className="flex items-center  mt-1 text-sm text-red-500">
                <FaExclamationCircle className="mr-1" />
                {errors.firstName}
              </div>
            )}
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className={`${errors.lastName ? "text-red-500 mt-[-23px]" : "text-gray-400"}`} />
            </div>
            <input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
            {errors.lastName && (
              <div className="flex items-center mt-1 text-sm text-red-500">
                <FaExclamationCircle className="mr-1" />
                {errors.lastName}
              </div>
            )}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiPhone className={`${errors.phone ? "text-red-500 mt-[-23px]" : "text-gray-400"}`} />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
          {errors.phone && (
            <div className="flex items-center mt-1 text-sm text-red-500">
              <FaExclamationCircle className="mr-1" />
              {errors.phone}
            </div>
          )}
        </div>
        
        <div className="relative">
          <div className="absolute top-3 left-3">
            <FiMessageSquare className="text-gray-400" />
          </div>
          <textarea
            name="message"
            placeholder="Сообщение..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending || isSent}
          className={`w-full flex items-center justify-center gap-2 p-4 rounded-xl text-white text-lg font-semibold transition-all duration-300 shadow-md ${
            isSent
              ? "bg-green-500 hover:bg-green-600 cursor-default"
              : isSending
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          } transform hover:scale-[1.01] active:scale-[0.99]`}
        >
          {isSent ? (
            <>
              <FaCheckCircle className="text-white text-xl" />
              Отправлено!
            </>
          ) : isSending ? (
            <>
              <ImSpinner9 className="animate-spin text-white text-xl" />
              Отправка...
            </>
          ) : (
            <>
              <FaPaperPlane className="text-white text-xl" />
              Отправить
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default TelegramForm;