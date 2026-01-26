import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 👈 Importamos traducción

const AreasServicios = () => {
  const { t } = useTranslation(); // 👈 Inicializamos

  const servicios = [
    {
      slug: "laboral",
      imagen: "/images/fotoscartagenas/apoyo7.avif",
      titulo: t("home.areas.laboral.titulo"),
      descripcion: t("home.areas.laboral.descripcion"),
    },
    {
      slug: "legal",
      imagen: "/images/fotoscartagenas/apoyo8.avif",
      titulo: t("home.areas.legal.titulo"),
      descripcion: t("home.areas.legal.descripcion"),
    },
    {
      slug: "fiscal",
      imagen: "/images/fotoscartagenas/apoyo6.avif",
      titulo: t("home.areas.fiscal.titulo"),
      descripcion: t("home.areas.fiscal.descripcion"),
    },
  ];

  return (
    <section id="areas-servicios" className="w-full bg-white py-24 text-cafeOscuro">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-opensans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-12">
          {t('home.areas.titulo')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {servicios.map((area, idx) => (
            <Link
              to={`/servicios/${area.slug}`}
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 block text-left"
            >
              <img
                loading="lazy"
                src={area.imagen}
                alt={area.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">
                  {area.titulo}
                </h3>
                <p className="text-gray-700">
                  {area.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasServicios;
