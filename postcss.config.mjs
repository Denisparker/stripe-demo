/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: {
    tailwindcss: {
      config: "./src/styles/tailwind.ts"
    },
    autoprefixer: {}
  },
};

export default config;
