// src/pages/Fiscal.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import { Helmet } from 'react-helmet-async'; // 👈 Importa Helmet

const Fiscal = () => {
  const { t } = useTranslation(); // 🏳️‍🌈 Traducción activa

  const incluye = t("fiscal.incluye", { returnObjects: true });
  const metodologia = t("fiscal.metodologia", { returnObjects: true });
  const faq = t("fiscal.faq", { returnObjects: true });

  return (
    <main className="w-full bg-white text-cafeOscuro">
      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.fiscal.title')}</title>
        <meta name="description" content={t('seo.fiscal.description')} />
        <meta name="keywords" content={t('seo.fiscal.keywords')} />

        <link rel="alternate" href="https://www.iberbrit.com/servicios/fiscal" hreflang="es" />
        <link rel="alternate" href="https://www.iberbrit.com/en/services/tax" hreflang="en" />
        <link rel="alternate" href="https://www.iberbrit.com/servicios/fiscal" hreflang="x-default" />
      </Helmet>

      {/* HERO */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo4.avif')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("fiscal.titulo")}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("fiscal.descripcion")}
          </p>
        </div>
      </section>

      {/* ¿QUÉ INCLUYE? */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("fiscal.queIncluyeTitulo")}</h2>
          <p className="text-gray-600">{t("fiscal.queIncluyeDescripcion")}</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {incluye.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-gray-700">
              <FileText className="text-red-800 mt-1 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("fiscal.beneficiosTitulo")}</h2>
            <p className="text-gray-600">{t("fiscal.beneficiosDescripcion")}</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-gray-700">{t("fiscal.beneficio1")}</p>
              <p className="text-gray-700">{t("fiscal.beneficio2")}</p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">{t("fiscal.beneficio3")}</p>
              <p className="text-gray-700">{t("fiscal.beneficio4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("fiscal.metodologiaTitulo")}</h2>
        </div>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          {metodologia.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* DIFERENCIA */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo4.avif')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">{t("fiscal.diferenciaTitulo")}</h2>
            <p>{t("fiscal.diferenciaDescripcion1")}</p>
            <p>{t("fiscal.diferenciaDescripcion2")}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          {t("fiscal.faqTitulo")}
        </h2>
        <div className="grid gap-8">
          {faq.map((item, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-gray-800">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t("fiscal.ctaTitulo")}
        </h2>
        <Link
          to="/contacto"
          className="inline-block  text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-red-200 transition"
        >
          {t("fiscal.ctaBoton")}
        </Link>
      </section>
    </main>
  );
};

export default Fiscal;
