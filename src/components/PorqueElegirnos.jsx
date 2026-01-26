// src/components/PorqueElegirnos.jsx

import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PorqueElegirnos = () => {
  const { t } = useTranslation(); // 👈 Activamos traducciones
  const navigate = useNavigate();

  const razones = t("porqueElegirnos.razones", { returnObjects: true });

  return (
    <section className="w-full bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          {t("porqueElegirnos.titulo")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {razones.map((razon, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-black w-6 h-6 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {razon.titulo}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {razon.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg text-black font-medium mb-4">
            {t("porqueElegirnos.tranquilidad")}
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            {t("porqueElegirnos.solicitar")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirnos;
