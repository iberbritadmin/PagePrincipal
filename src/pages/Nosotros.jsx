// src/pages/Nosotros.jsx

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async'; // 👈 Importa Helmet
import Equipo from "../components/Equipo";

const Nosotros = () => {
  const { t, i18n } = useTranslation(); // 👈 Traducciones

  const imagePaths = [
    "/images/fotoscartagenas/Apoyo1.avif",
    "/images/fotoscartagenas/Apoyo2.avif",
    "/images/fotoscartagenas/Apoyo3.avif",
    "/images/fotoscartagenas/Apoyo4.avif",
    "/images/fotoscartagenas/fotoscartagena (10).avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

   // URLs correctas según el idioma
   const currentLang = i18n.language;
   const urlEs = "https://www.iberbrit.com/nosotros";
   const urlEn = "https://www.iberbrit.com/en/about";

  return (
    <div className="w-full bg-white text-cafeOscuro">
      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.nosotros.title')}</title>
        <meta name="description" content={t('seo.nosotros.description')} />
        <meta name="keywords" content={t('seo.nosotros.keywords')} />

        {/* Hreflang dinámicos */}
        <link rel="alternate" href={urlEs} hreflang="es" />
        <link rel="alternate" href={urlEn} hreflang="en" />
        <link rel="alternate" href={urlEs} hreflang="x-default" />

        {/* Canonical dinámico */}
        <link rel="canonical" href={currentLang === "en" ? urlEn : urlEs} />
      </Helmet>

      {/* Sección: Quiénes Somos */}
      <section className="w-full py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('nosotros.quienesSomos')}
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          {t('nosotros.subtitulo')}
        </p>
        <p className="text-gray-600 text-md">
          {t('nosotros.descripcion')}
        </p>
      </section>

      {/* Sección: Origen y Valores con fondo tipo Hero rotativo */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {t('nosotros.origen.titulo')}
              </h2>
              <p className="text-gray-700">
                {t('nosotros.origen.texto')}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {t('nosotros.valores.titulo')}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t('nosotros.valores.etica')}</li>
                <li>{t('nosotros.valores.trato')}</li>
                <li>{t('nosotros.valores.compromiso')}</li>
                <li>{t('nosotros.valores.transparencia')}</li>
                <li>{t('nosotros.valores.residentes')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestro equipo */}
      <Equipo />

      {/* Sección: ¿Quieres trabajar con nosotros? */}
      <section className="w-full bg-white text-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {t('nosotros.trabajaConNosotros.titulo')}
          </h2>
          <p className="text-lg mb-6">
            {t('nosotros.trabajaConNosotros.descripcion')}
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-red-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            {t('nosotros.trabajaConNosotros.boton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
