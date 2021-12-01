module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        vh3: "300vh",
      },
      colors: {
        thewhite: "#fbfbfb",
        thedarkblue: "#022131",
      },
      backgroundImage: {
        "home-bg0": "url('./assets/bg-home.png')",
        "home-bg1": "url('./assets/bg-home2.png')",
        "polyline-bg": "url('./assets/bg-polyline.png')",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
