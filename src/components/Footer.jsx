// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-red-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Iberbrit</h3>
          <p className="text-sm text-gray-600">
            Despacho de asesores fiscales, laborales y legales, economistas con presencia en
            toda España.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/paquetes" className="hover:underline">Packs</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
            <li><Link to="/legal" className="hover:underline">Aviso Legal</Link></li>
            <li><Link to="/politicas-cookies" className="hover:underline">Política de Cookies</Link></li>
            <li><Link to="/politicas-privacidad" className="hover:underline">Política de Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><a href="mailto:info@iberbrit.com">Email: info@iberbrit.com</a></li>
            <li><a href="tel:+34 968 337 392">Tel: +34 968 337 392</a></li>
            <li><a href="tel:+34 653 979 464">WhatsApp: +34 653 979 464</a></li>
            <li>Madrid · Cartagena · La Manga</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Redes Sociales</h4>
          <ul className="flex space-x-4">
            <li><a href="https://www.linkedin.com/company/iberbrit-legal-sl/" className="hover:text-red-800">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/iberbritlegal/" className="hover:text-red-800">Instagram</a></li>
            <li><a href="https://www.facebook.com/iberbrit/?locale=es_ES" className="hover:text-red-800">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Iberbrit Asesores. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;