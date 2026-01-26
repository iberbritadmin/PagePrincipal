import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Hero from "../components/Hero";
import AreasServicios from "../components/AreasServicios";
import KitsResumen from "../components/KitsResumen";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Estadisticas from "../components/Estadisticas";
import Testimonios from "../components/Testimonios";
import Ubicaciones from "../components/Ubicaciones";
import MarcasColaboradoras from "../components/MarcasColaboradoras";

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Este useEffect realmente podría ser innecesario si i18n ya gestiona el idioma.
    const path = window.location.pathname;
    if (!path.startsWith("/en")) {
      i18n.changeLanguage("es");
    }
  }, []);

  // Definimos URLs según el idioma
  const currentLang = i18n.language;
  const urlEs = "https://www.iberbrit.com/";
  const urlEn = "https://www.iberbrit.com/en/";

  return (
    <div className="home-page min-h-screen">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta name="keywords" content={t('seo.home.keywords')} />

        
        {/* hreflang para versiones en distintos idiomas */}
        <link rel="alternate" hreflang="es" href={urlEs} />
        <link rel="alternate" hreflang="en" href={urlEn} />
        <link rel="alternate" hreflang="x-default" href={urlEs} />

        {/* Canonical dinámico */}
        <link rel="canonical" href={currentLang === "en" ? urlEn : urlEs} />
      </Helmet>

      <Hero />

      <section id="areas-servicios">
        <AreasServicios />
      </section>

      <section id="kits">
        <KitsResumen />
      </section>

      <section id="porque-elegirnos">
        <PorqueElegirnos />
      </section>

      <section id="cta">
        <Estadisticas />
      </section>

      <section id="casos-reales">
        <Testimonios />
      </section>

      <section id="ubicaciones">
        <Ubicaciones />
      </section>

      {/* el logo y el pre-marcas */}
      <div className="text-center bg-white py-10 px-4 text-black">
        <h3>MARCAS QUE CONFÍAN EN NOSOTROS</h3>
      </div>


      <section id="marcas">
        <MarcasColaboradoras />
      </section>
    </div>
  );
};

export default Home;
