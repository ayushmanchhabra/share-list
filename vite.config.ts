import { defineConfig } from "vite";
import nightwatch from "vite-plugin-nightwatch";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [nightwatch(), react(), svgr(), tsconfigPaths()],
});
