// src/components/Estadisticas.jsx

import React, { useEffect, useState, useRef } from "react";
import { Users, Clock, ClipboardList, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AnimatedNumber = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value, start]);

  return <span className="text-black">{count.toLocaleString()}</span>;
};

const Estadisticas = () => {
  const { t } = useTranslation(); // 👈 activar traducción
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const datos = [
    { label: t("estadisticas.clientes"), valor: 1900, icon: <Users /> },
    { label: t("estadisticas.anios"), valor: 18, icon: <Clock /> },
    { label: t("estadisticas.operaciones"), valor: 9300, icon: <ClipboardList /> },
    { label: t("estadisticas.paises"), valor: 30, icon: <Globe /> },
  ];

  const imagePaths = [
    "/images/fotoscartagenas/Apoyo4.avif",
    "/images/fotoscartagenas/Apoyo5.avif",
    "/images/fotoscartagenas/Apoyo1.avif",
    "/images/fotoscartagenas/Apoyo2.avif",
    "/images/fotoscartagenas/Apoyo6 (1).avif",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-white to-gray-50 py-24 px-4 text-cafeOscuro"
      style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl shadow-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {t("estadisticas.titulo")}
        </h2>
        <p className="text-white shadow-2xl mb-16 max-w-2xl mx-auto">
          {t("estadisticas.descripcion")}
        </p>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {datos.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-black mb-2">{item.icon}</div>
              <p className="text-black text-4xl font-bold mb-1">
                <AnimatedNumber value={item.valor} start={startAnimation} />
                {item.label.includes("Años") || item.label.includes("Years") ? "+" : ""}
              </p>
              <p className="text-black text-sm text-center max-w-[10rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-lg text-white font-medium mb-4">
            {t("estadisticas.cta")}
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            {t("estadisticas.boton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
