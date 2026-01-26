import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Importamos Helmet
import { useTranslation } from "react-i18next"; // ✅ Traducciones (si quieres versiones en varios idiomas)

const PoliticaCookies = () => {
  const { i18n } = useTranslation(); // Detectamos idioma actual

  // URLs canónicas por idioma
  const currentLang = i18n.language;
  const urlEs = "https://www.iberbrit.com/politicas-cookies";
  const urlEn = "https://www.iberbrit.com/en/politicas-cookies";

  return (
    <main className="w-full bg-white text-black py-24 px-6 max-w-5xl mx-auto">
      <Helmet>
        {/* ⚠️ Importante: Bloqueamos indexación de esta página */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Title y Description para orden y control */}
        <title>Política de Cookies | Iberbrit Legal</title>
        <meta name="description" content="Lee nuestra política de cookies y cómo manejamos tus datos de navegación en Iberbrit Legal." />

        {/* Hreflang dinámico */}
        <link rel="alternate" hreflang="es" href={urlEs} />
        <link rel="alternate" hreflang="en" href={urlEn} />
        <link rel="alternate" hreflang="x-default" href={urlEs} />

        {/* Canonical dinámico */}
        <link rel="canonical" href={currentLang === "en" ? urlEn : urlEs} />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>

      <section className="space-y-6 text-gray-700">
        <p>
          Este sitio web utiliza cookies propias y de terceros para optimizar su navegación, analizar el tráfico y personalizar la experiencia del usuario.
        </p>
        <p>
          Las cookies son pequeños archivos de texto almacenados en tu dispositivo al visitar un sitio web. Puedes configurar tu navegador para aceptar o rechazar cookies, o eliminar las existentes.
        </p>
        <p>
          Utilizamos Google Analytics para analizar cómo los visitantes usan este sitio web. La IP del usuario se anonimiza antes de ser transmitida a Google. Puedes desactivar el uso de cookies de Google Analytics <a href="https://tools.google.com/dlpage/gaoptout" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">aquí</a>.
        </p>
        <p>
          Para más información sobre nuestra política de cookies, puedes ponerte en contacto con nosotros en info@iberbrit.com.
        </p>
      </section>
    </main>
  );
};

export default PoliticaCookies;
