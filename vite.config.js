import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [react(), Vue()],

  base: "/",
});
