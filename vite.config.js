import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env
    plugins: [
      react(),

      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          name: "my Portfolio",
          short_name: "Biee cv",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/icons/favicon-16x16.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/icons/safari-pinned-tab.svg",
              sizes: "512x512",
              type: "svg",
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: new RegExp(
                "https://api.sendinblue.com/v3/smtp/email"
              ),
              handler: "NetworkFirst",
              options: {
                cacheName: "sendinblue-api",
                expiration: {
                  maxEntries: 1,
                  maxAgeSeconds: 60 * 60 * 24, // 24hours
                },
                networkTimeoutSeconds: 10,
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    public_key: process.env.VITE_APP_YOUR_PUBLIC_KEY,
    template_id: process.env.VITE_APP_TEMPLATE_ID,
    mail_service_id: process.env.VITE_APP_MAIL_SERVICE_ID,
  });
};
