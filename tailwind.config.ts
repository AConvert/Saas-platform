import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#0f70e6',
      light: '#f3f4f6',
      success: '#93e3c0',
      secondary: '#54616c',
      indigo: '#6610f2',
      white: '#fff',
      hoverPrimary: '#0000FF',
      error: '#eb4034'
    },
    extend: {
       backgroundImage: {
        'hero': "url('../public/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
