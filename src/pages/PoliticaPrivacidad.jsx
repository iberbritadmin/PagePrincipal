// src/pages/PoliticasPrivacidad.jsx

import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Helmet para SEO técnico
import { useTranslation } from "react-i18next"; // ✅ Traducción si quieres multidioma

const PoliticaPrivacidad = () => {
  return (
    <main className="w-full bg-white text-black py-24 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Política de Privacidad</h1>

        <p className="mb-6">
          Esta Política de Privacidad regula el tratamiento de los datos personales de los usuarios por parte de Iberbrit S.L. (en adelante, "Iberbrit") en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Responsable del tratamiento</h2>
        <p className="mb-6">
          <strong>Iberbrit S.L.</strong> - CIF: B30776876<br />
          Dirección: Avda. Gran Vía, Edificio Monterrey, Bajo, 30380 La Manga del Mar Menor, Cartagena, Murcia, España<br />
          Teléfono: +34 968 337 392<br />
          Correo electrónico: info@iberbrit.com
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Finalidades del tratamiento</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Gestionar solicitudes de contacto o información.</li>
          <li>Prestar servicios fiscales, contables, laborales y legales.</li>
          <li>Enviar comunicaciones comerciales (previo consentimiento).</li>
          <li>Cumplir con obligaciones legales y contractuales.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Legitimación para el tratamiento</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Ejecutar un contrato de servicios.</li>
          <li>Consentimiento del usuario para comunicaciones comerciales.</li>
          <li>Cumplimiento de obligaciones legales.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Conservación de datos</h2>
        <p className="mb-6">
          Los datos se conservarán mientras exista una relación contractual, obligación legal o hasta que el usuario solicite su supresión.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Destinatarios de los datos</h2>
        <p className="mb-6">
          Los datos podrán ser comunicados a:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Administraciones públicas para el cumplimiento de obligaciones legales.</li>
          <li>Proveedores de servicios como hosting, asesoría informática o marketing.</li>
          <li>Google Analytics para el análisis web (ver Política de Cookies).</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. Derechos de los usuarios</h2>
        <p className="mb-6">
          Los usuarios pueden ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad mediante escrito a info@iberbrit.com acompañado de una copia de su documento de identidad.
        </p>
        <p className="mb-6">
          También podrán presentar reclamación ante la Agencia Española de Protección de Datos (AEPD).
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Medidas de seguridad</h2>
        <p className="mb-6">
          Iberbrit ha implementado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Uso de cookies y Google Analytics</h2>
        <p className="mb-6">
          Este sitio utiliza Google Analytics (Google Ireland Limited / Google LLC) con la extensión <code>_anonymizeIp()</code> para garantizar el anonimato de los usuarios. El uso de cookies puede ser gestionado o rechazado según se indica en nuestra <a href="/politicas-cookies" className="text-red-800 underline">Política de Cookies</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Actualización de la política</h2>
        <p className="mb-6">
          Iberbrit se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Última actualización: Abril 2025.
        </p>
      </section>
    </main>
  );
};

export default PoliticaPrivacidad;
