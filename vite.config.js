import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-1" : "/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        signin: path.resolve(__dirname, "src/sign-in.html"),
        signup: path.resolve(__dirname, "src/sign-up.html"),
        account: path.resolve(__dirname, "src/account.html"),
        collection: path.resolve(__dirname, "src/collection.html"),
        payment: path.resolve(__dirname, "src/payment.html"),
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
