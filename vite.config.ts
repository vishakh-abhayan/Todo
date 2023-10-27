import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "apple-touch-icon.png",
    "masked-icon.svg",
    "ken-cheung-KonWFWUaAuk-unsplash.webp",
  ],
  manifest: {
    name: "ToDo",
    short_name: "ToDo",
    description: "I am a simple Todo app",
    icons: [
      {
        src: "/list_23876352.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/list_23876351.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/list_23876354.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/list_23876351.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
