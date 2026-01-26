// src/components/KitsResumen.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const KitsResumen = () => {
  const { t } = useTranslation(); // 👈 Activar traducciones
  const navigate = useNavigate();

  const kits = [
    {
      nombre: t("kits.autonomo.nombre"),
      descripcion: t("kits.autonomo.descripcion"),
      beneficios: t("kits.autonomo.beneficios", { returnObjects: true }),
    },
    {
      nombre: t("kits.sociedades.nombre"),
      descripcion: t("kits.sociedades.descripcion"),
      beneficios: t("kits.sociedades.beneficios", { returnObjects: true }),
    },
    {
      nombre: t("kits.noResidentes.nombre"),
      descripcion: t("kits.noResidentes.descripcion"),
      beneficios: t("kits.noResidentes.beneficios", { returnObjects: true }),
    },
  ];

  const solicitarInformacion = (kit) => {
    const query = new URLSearchParams({ kit: kit.nombre }).toString();
    navigate(`/paquetes?${query}`);
  };

  return (
    <section className="w-full bg-gray-100 py-24 px-4 text-cafeOscuro" id="kits">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          {t("kits.titulo")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {kits.map((kit, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between transition hover:-translate-y-1 ${
                kit.nombre === t("kits.autonomo.nombre") ? "border-2 border-red-800" : ""
              }`}
            >
              {/* Badge para el más popular */}
              {kit.nombre === t("kits.autonomo.nombre") && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {t("kits.popular")}
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {kit.nombre}
                </h3>
                <p className="text-gray-700 mb-4">{kit.descripcion}</p>
                <ul className="text-left space-y-2 text-gray-600 mb-6">
                  {kit.beneficios.slice(0, 4).map((item, i) => (
                    <li
                      key={i}
                      className="before:content-['✓'] before:mr-2 before:text-red-800"
                    >
                      {item}
                    </li>
                  ))}
                  {kit.beneficios.length > 4 && (
                    <li className="text-sm text-gray-500 italic mt-2">
                      {t("kits.verMas")}
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => solicitarInformacion(kit)}
                  className="w-full  border-red-800 bg-red-800 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition"
                >
                  {t("kits.solicitarInformacion")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
      onClick={() => navigate("/paquetes")}
      className="w-full border-red-800 bg-red-800 text-white hover:bg-red-700 hover:text-white font-medium py-2 px-4 rounded-md transition"
    >
      {t("kits.verTodos")}
    </button>


      </div>
    </section>
  );
};

export default KitsResumen;
