// src/components/Ubicaciones.jsx

import React from "react";

const oficinas = [
  {
    ciudad: "Madrid",
    direccion: "Calle Gran Via 64, Planta 3 - Derecha, Centro, 28013 Madrid",
    link: "https://g.co/kgs/nDg7SyE",
    imagen: "/images/fotoscartagenas/fotoscartagena (11).webp",
  },
  {
    ciudad: "Cartagena",
    direccion:
      "Iberbrit Legal, Calle Dr. Luis Calandre, 30, Bajo - Oficina, 30205 Cartagena, Murcia",
    link: "https://g.co/kgs/3w5qS94",
    imagen: "/images/fotoscartagenas/fotoscartagena (17).webp",
  },
  {
    ciudad: "La Manga",
    direccion:
      "Iberbrit Legal, 30380 La Manga del Mar Menor. Cartagena, Murcia.",
    link: "https://g.co/kgs/3w5qS94",
    imagen: "/images/fotoscartagenas/fotoscartagena (19).webp",
  },
];

const Ubicaciones = () => {
  return (
    <section className="w-full bg-white py-24 px-4 text-cafeOscuro">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Nuestras Oficinas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {oficinas.map((oficina, idx) => (
            <a
              key={idx}
              href={oficina.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl overflow-hidden shadow-lg group h-64 block"
            >
              <img
                src={oficina.imagen}
                alt={`Oficina en ${oficina.ciudad}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold">{oficina.ciudad}</h3>
                <p className="text-white text-sm mt-1">{oficina.direccion}</p>
              </div>
            </a>
             
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Ubicaciones;