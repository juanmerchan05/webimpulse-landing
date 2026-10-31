/** Configuración de Tailwind para la landing WebImpulse (compilación local). */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#FAFAF9",
          slate: "#0F172A",
          pulse: "#2563EB",
          sage: "#059669",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"]
      }
    }
  },
  plugins: []
};
