// src/components/Testimonios.jsx

import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonios = [
  {
    nombre: "Sandra Infante",
    texto:
      "Lo único transparente por la zona. Vine de una muy mala experiencia por otro administrador de la zona y me salvaron la vida. Y no exagero!! Muy profesionales. Se ponen en la piel del otro, te aconsejan, te ayudan y no te timan, algo muy practicado en este mundo. Mi consejo es que te pongas en sus manos. ¡No te arrepentirás!",
  },
  {
    nombre: "Javier Cervantes García",
    texto:
      "Un equipo muy profesional y un trato excelente. Acudí por sugerencia de un compañero de trabajo. La declaración de la renta fue como la seda y sin ningún problema. Aproveché para pedir asesoramiento por unos temas legales y me aconsejaron al detalle, siempre con buena atención y un servicio de primera. Para todos aquellos que busquen soluciones, muy recomendable!",
  },
  {
    nombre: "Lau Mcci",
    texto:
      "Quería analizar opciones para iniciar mi actividad comercial, pero el proceso me parecía complicado. Me asesoraron en cada paso, explicándome todo con claridad y ayudándome a elegir la mejor opción fiscal. Gracias a todo el equipo!",
  },
];

const Testimonios = () => {
  return (
    <section className="w-full bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonios.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="flex items-center gap-2 mb-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-4">"{t.texto}"</p>
              <p className="font-semibold text-gray-900">{t.nombre}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://www.google.com/search?q=Iberbrit+Asesores"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Ver más reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;