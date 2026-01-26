// src/pages/Legal.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async'; // 👈 Importa Helmet

const Legal = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white text-cafeOscuro">
      <Helmet> {/* 👈 Añade Helmet aquí */}
        <title>{t('seo.legal.title')}</title>
        <meta name="description" content={t('seo.legal.description')} />
        <meta name="keywords" content={t('seo.legal.keywords')} />

        <link rel="alternate" href="https://www.iberbrit.com/servicios/legal" hreflang="es" />
        <link rel="alternate" href="https://www.iberbrit.com/en/services/legal" hreflang="en" />
        <link rel="alternate" href="https://www.iberbrit.com/servicios/legal" hreflang="x-default" />
      </Helmet>

      {/* HERO */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo2.avif')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("legal.hero.titulo")}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("legal.hero.descripcion")}
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("legal.incluye.titulo")}</h2>
          <p className="text-gray-600">{t("legal.incluye.descripcion")}</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {t("legal.incluye.lista", { returnObjects: true }).map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 text-gray-700">
              <ShieldCheck className="text-red-800 mt-1 w-5 h-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("legal.beneficios.titulo")}</h2>
            <p className="text-gray-600">{t("legal.beneficios.descripcion")}</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {t("legal.beneficios.lista", { returnObjects: true }).map((beneficio, idx) => (
              <p key={idx} className="text-gray-700">{beneficio}</p>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t("legal.metodo.titulo")}</h2>
        </div>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          {t("legal.metodo.pasos", { returnObjects: true }).map((paso, idx) => (
            <li key={idx}>{paso}</li>
          ))}
        </ol>
      </section>

      {/* DIFERENCIA */}
      <section
        className="w-full py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/fotoscartagenas/Apoyo2.avif')" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {t("legal.diferencia.titulo")}
            </h2>
            {t("legal.diferencia.descripcion", { returnObjects: true }).map((texto, idx) => (
              <p key={idx}>{texto}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          {t("legal.faq.titulo")}
        </h2>
        <div className="grid gap-8">
          {t("legal.faq.lista", { returnObjects: true }).map((faq, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-gray-800">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t("legal.cta.titulo")}
        </h2>
        <Link
          to="/contacto"
          className="inline-block  text-red-800 px-8 py-4 rounded-lg font-semibold hover:bg-red-200 transition"
        >
          {t("legal.cta.boton")}
        </Link>
      </section>

    </main>
  );
};

export default Legal;