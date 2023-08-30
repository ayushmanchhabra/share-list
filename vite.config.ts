import { defineConfig } from "vite";
import nightwatch from 'vite-plugin-nightwatch';
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc"; 
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    nightwatch(),
    react(),
    svgr(),
    tsconfigPaths(),
  ]
});
