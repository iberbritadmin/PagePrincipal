// src/pages/Oficinas.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async'; // 👈 Importa Helmet

const Oficinas = () => {
  const { t, i18n } = useTranslation();
  const oficinas = t("oficinas.lista", { returnObjects: true });

   // Definimos URLs correctas por idioma
   const currentLang = i18n.language;
   const urlEs = "https://www.iberbrit.com/oficinas";
   const urlEn = "https://www.iberbrit.com/en/offices";

  return (
    <main className="w-full bg-white min-h-screen py-24 px-6 text-cafeOscuro">
      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.oficinas.title')}</title>
        <meta name="description" content={t('seo.oficinas.description')} />
        <meta name="keywords" content={t('seo.oficinas.keywords')} />

        {/* hreflang dinámicos */}
        <link rel="alternate" href={urlEs} hreflang="es" />
        <link rel="alternate" href={urlEn} hreflang="en" />
        <link rel="alternate" href={urlEs} hreflang="x-default" />

        {/* canonical dinámico */}
        <link rel="canonical" href={currentLang === "en" ? urlEn : urlEs} />
      </Helmet>

      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("oficinas.titulo")}
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          {t("oficinas.descripcion")}
        </p>
      </section>

      {oficinas.map((oficina, idx) => (
        <section key={idx} className="max-w-6xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            {t("oficinas.oficina")} {oficina.ciudad}
          </h2>
          <p className="text-gray-600 mb-6">{oficina.direccion}</p>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {oficina.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${t("oficinas.oficina")} ${oficina.ciudad} ${index + 1}`}
                className="rounded-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>

          {/* Descripción SEO */}
          <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed mb-8">
            {oficina.descripcion}
          </div>

          {/* Botón de cita */}
          <Link
            to={`/contacto?cita=${encodeURIComponent(oficina.ciudad)}`}
            className="inline-block  text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            {t("oficinas.boton", { ciudad: oficina.ciudad })}
          </Link>
        </section>
      ))}
    </main>
  );
};

export default Oficinas;
