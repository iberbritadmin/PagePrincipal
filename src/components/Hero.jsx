import { useState, useEffect } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 👈 Importar useTranslation

export default function Hero() {
  const { t } = useTranslation(); // 👈 Inicializar traducción
  const imagePaths = [
    "/images/fotoscartagenas/Apoyo4.avif",
    "/images/fotoscartagenas/apoyo7.avif",
    "/images/fotoscartagenas/Apoyo1.avif",
    "/images/fotoscartagenas/Apoyo2.avif",
    "/images/fotoscartagenas/Apoyo3.avif",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1">
      <section
        className="w-full  py-20 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }}
      >

        <div className="min-h-[600px] bg-white/80 backdrop-blur-sm p-6 md:p-12 rounded-xl max-w-6xl mx-auto">

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="font-opensans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                {t('home.hero.titulo')}
              </h1>
              <p className="font-merriweather max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('home.hero.descripcion')}
              </p>
              <div className="flex flex-col text-white gap-2 min-[400px]:flex-row">
                <Link to="/contacto">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto border-red-800 bg-red-800 hover:bg-red-700 text-white">
                    {t('home.hero.botonInformacion')}
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto border-red-800 bg-red-800 hover:bg-red-700 text-white">
                    {t('home.hero.botonServicios')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/Branding/3.avif"
                alt="Iberbrit-Legal Servicios"
                loading="lazy"  // <-- AQUÍ
                width="400"
                height="400"
                className="rounded-lg object-cover w-full max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
