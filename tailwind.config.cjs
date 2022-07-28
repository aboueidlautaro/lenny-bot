module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grafito: "#232323",
        "grafito-light": "#6A6A6A",
        "orange-primary": "#E77528",
        "orange-dark": "#D86315",
        hueso: "#EDEAE5",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
