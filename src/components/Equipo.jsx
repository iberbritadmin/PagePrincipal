// src/components/Equipo.jsx

import React from "react";

const equipo = [

    { nombre: "Javier Gutiérrez", cargo: "Partner, co-founder", especialidad: "", imagen: "/images/Iberbrit blanco/Javier.webp" },
    { nombre: "Daniel Codes", cargo: "Partner, co-founder", especialidad: "", imagen: "/images/Iberbrit blanco/Daniel.webp" },
    { nombre: "Susana Ponce", cargo: "Dirección", especialidad: "", imagen: "/images/Iberbrit blanco/Susana.webp" },
    { nombre: "Tamara Conesa", cargo: "Adjunta dirección", especialidad: "", imagen: "/images/Iberbrit blanco/Tamara.webp" },
    { nombre: "Grisel Fernandez", cargo: "Departamento Atención al Cliente", especialidad: "", imagen: "/images/Iberbrit blanco/Grisell.webp" },
    { nombre: "Marissa- Clares Rabadán", cargo: "Atención al Cliente", especialidad: "", imagen: "/images/Iberbrit blanco/Mariela.webp" },
    { nombre: "Mariano Martín", cargo: "Departamento Fiscal y Contable", especialidad: "", imagen: "/images/Iberbrit blanco/Mariano.webp" },
    { nombre: "Patricia Amat", cargo: "Departamento Fiscal y Contable", especialidad: "", imagen: "/images/Iberbrit blanco/9.webp" },
    { nombre: "Francisco Lopez", cargo: "Departamento Fiscal y Contable", especialidad: "", imagen: "/images/Iberbrit blanco/13.webp" },
    { nombre: "Nancy Fernandez", cargo: "Departamento Fiscal y Contable", especialidad: "", imagen: "/images/Iberbrit blanco/Nancy.webp" },
    { nombre: "Miguel", cargo: "Departamento Legal", especialidad: "", imagen: "/images/Iberbrit blanco/Miguel.webp" },
    { nombre: "Maribel Aznar García", cargo: "Departamento Legal", especialidad: "", imagen: "/images/Iberbrit blanco/Maribel.webp" },
    { nombre: "Alberto Valera", cargo: "Departamento Legal", especialidad: "", imagen: "/images/Iberbrit blanco/Alberto.webp" },
    { nombre: "Pilar Lorente", cargo: "Departamento Legal", especialidad: "", imagen: "/images/Iberbrit blanco/Pilar.webp" },
    { nombre: "Tomas Gutierrez", cargo: "Asistente Legal", especialidad: "", imagen: "/images/Iberbrit blanco/Tommy.webp" },
    { nombre: "Michael Castrillon", cargo: "IT Manager", especialidad: "", imagen: "/images/Iberbrit blanco/Michael.webp" },
    { nombre: "Adela Gamboa", cargo: "Departamento Fiscal y Contable", especialidad: "", imagen: "/images/Iberbrit blanco/Adela.webp" },
];

const Equipo = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {equipo.map((persona, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg group h-72"
            >
              <img
                src={persona.imagen}
                alt={`Foto de ${persona.nombre}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent px-6 py-4 flex flex-col justify-end">
                <h3 className="text-white text-xl font-semibold">{persona.nombre}</h3>
                <p className="text-white text-sm">{persona.cargo}{persona.especialidad && ` — ${persona.especialidad}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
