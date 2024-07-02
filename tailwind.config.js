
import cat from "@catppuccin/daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "black",
      "night",
      "dark",
      "dim",
      "synthwave",
      cat("mocha","mauve"),
      cat("macchiato","mauve"),
      cat("frappe","mauve"),
      cat("latte","mauve"),
      "light",
      "cupcake",
      "nord"
    ]
  }
}

