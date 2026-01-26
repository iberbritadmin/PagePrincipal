import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Laboral from "./pages/servicios/Laboral";
import Legal from "./pages/servicios/Legal";
import Fiscal from "./pages/servicios/Fiscal";
import Paquetes from "./pages/Paquetes";
import Footer from "./components/Footer";
import Contacto from "./pages/contacto";
import ScrollToTop from "./components/ScrollToTop";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Oficinas from "./pages/Oficinas";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaCookies from "./pages/PoliticaCookies";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import BannerCookies from "./components/BannerCookies";
import { Helmet } from "react-helmet-async"; // ✅ Nuevo: Para manipular el <html lang="">
import { useTranslation } from "react-i18next"; // ✅ Nuevo: Para detectar el idioma actual

function App() {
  const { i18n } = useTranslation(); // ✅ Detectamos el idioma actual
  return (
    <Router>
      {/* ✅ Helmet dinámico para cambiar el idioma del <html> automáticamente */}
      <Helmet>
        <html lang={i18n.language || 'es'} />
      </Helmet>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Redirección desde /en a /en/ */}
        <Route path="/en" element={<Navigate to="/en/" replace />} />

        {/* 🇪🇸 Español - rutas originales */}
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/laboral" element={<Laboral />} />
        <Route path="/servicios/legal" element={<Legal />} />
        <Route path="/servicios/fiscal" element={<Fiscal />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/oficinas" element={<Oficinas />} />
        <Route path="/legal" element={<AvisoLegal />} />
        <Route path="/politicas-cookies" element={<PoliticaCookies />} />
        <Route path="/politicas-privacidad" element={<PoliticaPrivacidad />} />

        {/* 🇬🇧 Inglés - rutas con prefijo /en */}
        <Route path="/en/" element={<Home />} />
        <Route path="/en/services" element={<Servicios />} />
        <Route path="/en/services/labor" element={<Laboral />} />
        <Route path="/en/services/legal" element={<Legal />} />
        <Route path="/en/services/tax" element={<Fiscal />} />
        <Route path="/en/packages" element={<Paquetes />} />
        <Route path="/en/contact" element={<Contacto />} />
        <Route path="/en/about" element={<Nosotros />} />
        <Route path="/en/offices" element={<Oficinas />} />
        <Route path="/en/legal-notice" element={<AvisoLegal />} />
        <Route path="/en/politicas-cookies" element={<PoliticaCookies />} />
        <Route path="/en/politicas-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>

      <Footer />

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/34653979464"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-50 hover:bg-green-100 text-white p-4 rounded-full shadow-lg z-50"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="h-12 w-12" />
      </a>

      <BannerCookies />
    </Router>
  );
}

export default App;