/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39ABE0",
        sec: "#5EDEEC",
        font: "#063F5C",
        fontHover: "#5AC6FB",
        zeta: {
          primary: "#1A1C22",
          sec: "#3E3EFF",
        },
        kobo: {
          primary: "#1CBDDD",
          sec: "#AEE8F3",
        },
        kaela: {
          prime: "#EC1A02",
          sec: "#ECC634",
        },
      },
    },
  },
  plugins: [],
};
