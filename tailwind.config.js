/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          rojoiber2: 'red-800',   // Rojo más claro
          rojoiber1: 'red-800',   // Rojo principal (el que usas en botones)
          cafeOscuro: '#1B1213',  // Marrón oscuro que usas de fondo
          grisIberbrit: '#262425', // Gris oscuro de tu marca
        },
      },
    },
    plugins: [],
  }
  