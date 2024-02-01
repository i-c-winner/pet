import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [
    react(),
  vitePluginSvgr(),
    Unfonts({
      google:{
        families: ['Raleway', 'Roboto']
      } ,

    })
  ],

  // base: process.env.NODE_ENV === "development" ? "/" : "/dist/",
});
