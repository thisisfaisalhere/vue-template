import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    port: 8000,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(projectRootDir, "src") }],
  },
});
