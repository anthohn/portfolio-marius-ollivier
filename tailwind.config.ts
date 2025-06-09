import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
  	extend: {
  		colors: {
			background: {
				light : "#f2f2f2",
				dark : "#171717",
			},
			fadeBackground: {
				light : "#D96161",
				dark : "#462525",
			},
			primary: {
				light : "#000000",
				dark : "#ffffff",
			},
			secondary: {
				light : "#fbbf24",
				dark : "#f59e0b",
			},
			btnBackground: {
				light : "#8A1D1D",		
				dark : "#8A1D1D",
			},
		}
  	}
  },
};
export default config;
