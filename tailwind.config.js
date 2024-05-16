/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6647f1",
        primaryBg: "#77777710",
        secondaryBg: "#F7F7FD",
        customGray: "#727272",
      },
    },
  },
  plugins: [],
};
