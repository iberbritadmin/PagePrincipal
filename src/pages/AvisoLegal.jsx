import React from "react";

const AvisoLegal = () => {
  return (
    <main className="w-full bg-white text-cafeOscuro py-24 px-6">
      <section className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Aviso Legal</h1>

        <p className="text-gray-700">
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se informa:
        </p>

        <p className="text-gray-700">
          El presente Portal es titularidad de <strong>Iberbrit S.L.</strong>, domiciliada en Avda. Gran Vía, Edificio Monterrey, Bajo, 30380
          La Manga del Mar Menor, Cartagena, Murcia, España. C.I.F.: B30776876. Inscrita en el Registro Mercantil de
          Murcia, Tomo 2107, Folio 139, Hoja MU-46401.
        </p>

        <p className="text-gray-700">Contacto: Teléfono: +34 968 337 392 - Email: info@iberbrit.com</p>

        <h2 className="text-3xl font-semibold text-gray-900">Condiciones de uso</h2>
        <p className="text-gray-700">
          El acceso a este sitio web es gratuito salvo en lo relativo al coste de conexión suministrado por el proveedor
          contratado por el usuario. El uso de este Portal atribuye la condición de usuario e implica la aceptación
          plena de todas las condiciones aquí recogidas.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">Propiedad Intelectual e Industrial</h2>
        <p className="text-gray-700">
          Todos los contenidos de este sitio, textos, imágenes, marcas, logotipos, archivos, software, combinaciones de
          colores o cualquier otro elemento susceptible de protección, son propiedad de Iberbrit o de terceros.
          Queda prohibida la reproducción total o parcial sin autorización expresa.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">Responsabilidad</h2>
        <p className="text-gray-700">
          Iberbrit no se hace responsable de los daños derivados del acceso o uso de los contenidos de este sitio web,
          ni garantiza la ausencia de virus u otros elementos lesivos.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">Enlaces Externos</h2>
        <p className="text-gray-700">
          Este sitio web puede contener enlaces a sitios externos. Iberbrit no se responsabiliza del contenido ni de
          cualquier otro aspecto relacionado con esas páginas.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900">Jurisdicción y Legislación Aplicable</h2>
        <p className="text-gray-700">
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web será de
          aplicación la legislación española, a la que se someten expresamente las partes.
        </p>
      </section>
    </main>
  );
};

export default AvisoLegal;
