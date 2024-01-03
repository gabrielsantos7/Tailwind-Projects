/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        "125px": "125px",
      },
      colors: {
        hoverspt: "#18d760",
        "purple-main": "#2d4689",
        "green-main": "#1ed760",
      },
      backgroundImage: (theme) => ({
        "spotify-theme": "url('assets/img/bursts.svg')",
        "spotify-theme-mobile": "url('assets/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },
      backgroundPosition: {
        banner: "46% 4%",
        "banner-mobile": "top 25% center",
      },
      fontSize: {
        "9xl": "9rem",
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
};
