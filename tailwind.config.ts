import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: "#171717",
			fadeBackground: "#462525",
			primary: "#ffffff",
			secondary: "#f59e0b",
			btnBackground: "#8A1D1D",
		}
  	}
  },
};
export default config;
