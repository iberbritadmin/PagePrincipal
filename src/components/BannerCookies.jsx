// src/components/BannerCookies.jsx
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const BannerCookies = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [isOpen, setIsOpen] = useState(!cookies.cookieConsent);

  const acceptAll = () => {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    setCookie("cookieConsent", "accepted", { path: "/", maxAge: 31536000 });
    setIsOpen(false);
  };

  const rejectAll = () => {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    setCookie("cookieConsent", "rejected", { path: "/", maxAge: 31536000 });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">
      <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-xl text-center space-y-6">
        <h2 className="text-2xl font-bold text-red-800">Gestiona tus Cookies</h2>
        <p className="text-gray-700">
          Utilizamos cookies para analizar el tráfico y personalizar anuncios. Puedes aceptar todas las cookies o configurar tus preferencias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <div className="bg-white dark:bg-white text-black dark:text-black p-4 rounded-lg space-x-4 flex justify-center">
            <button
              onClick={rejectAll}
              className="bg-[#991b1b] border border-[#991b1b] hover:bg-[#7f1d1d] text-white rounded-lg px-6 py-2 transition"
            >
              Solo esenciales
            </button>
            <button
              onClick={acceptAll}
              className="bg-[#991b1b] border border-[#991b1b] hover:bg-[#7f1d1d] text-white rounded-lg px-6 py-2 transition"
            >
              Aceptar todas
            </button>
          </div>


          <a
            href="/politicas-cookies"
            className=" text-sm text-red-800 underline  mt-2 sm:mt-0"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerCookies;
