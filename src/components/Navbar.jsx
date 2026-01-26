import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "./button";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";



const routeMap = {
  "/": { es: "/", en: "/en" },
  "/servicios": { es: "/servicios", en: "/en/services" },
  "/servicios/fiscal": { es: "/servicios/fiscal", en: "/en/services/tax" },
  "/servicios/legal": { es: "/servicios/legal", en: "/en/services/legal" },
  "/servicios/laboral": { es: "/servicios/laboral", en: "/en/services/labor" },
  "/paquetes": { es: "/paquetes", en: "/en/packages" },
  "/contacto": { es: "/contacto", en: "/en/contact" },
  "/nosotros": { es: "/nosotros", en: "/en/about" },
  "/oficinas": { es: "/oficinas", en: "/en/offices" },
  "/legal": { es: "/legal", en: "/en/legal-notice" },
  "/politicas-cookies": { es: "/politicas-cookies", en: "/en/politicas-cookies" },
  "/politicas-privacidad": { es: "/politicas-privacidad", en: "/en/politicas-privacidad" },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = location.pathname.startsWith("/en") ? "en" : "es";
 

  const changeLanguage = (lng) => {
    const currentPath = location.pathname;
    const currentLang = currentPath.startsWith("/en") ? "en" : "es";
  
    const cleanPath = currentLang === "en" ? currentPath.replace(/^\/en/, "") || "/" : currentPath;
  
    const match = Object.entries(routeMap).find(
      ([_, val]) => val[currentLang] === currentPath
    );
  
    if (match) {
      const newPath = match[1][lng];
      i18n.changeLanguage(lng);
      navigate(newPath);
    } else {
      i18n.changeLanguage(lng);
      navigate(lng === "en" ? "/en" : "/");
    }
  };
  
  

  const getLangPath = (key) => {
    const paths = {
      servicios: { es: "/servicios", en: "/en/services" },
      nosotros: { es: "/nosotros", en: "/en/about" },
      contacto: { es: "/contacto", en: "/en/contact" },
      paquetes: { es: "/paquetes", en: "/en/packages" },
      oficinas: { es: "/oficinas", en: "/en/offices" },
    };
    return paths[key][i18n.language] || "/";
  };
  
  

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      } shadow-md`}
    >
      <div className="flex w-full h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={currentLang === "en" ? "/en" : "/"}>
            <img
              src="/images/Branding/logo (4).webp"
              alt="Iberbrit-Legal Logo"
              className="h-16 w-auto rounded-md"
            />
          </Link>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to={getLangPath("servicios")} className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.servicios')}
          </Link>
          <Link to={getLangPath("nosotros")} className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.nosotros')}
          </Link>
          <Link to={getLangPath("contacto")} className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.contacto')}
          </Link>
          <Link to={getLangPath("paquetes")} className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.paquetes')}
          </Link>
          <Link to={getLangPath("oficinas")} className="text-sm font-medium text-red-800 hover:underline">
            {t('navbar.oficinas')}
          </Link>
        </nav>

        {/* Teléfono y selector */}
        <div className="flex items-center gap-4">
          <a href="tel:+34 968 337 392" className="flex flex-col items-center text-red-800">
            <Phone className="mb-2 h-4 w-4" />
            Llámanos
          </a>

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={currentLang}
            className="border border-gray-300 rounded-md text-gray-900 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-800"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
}