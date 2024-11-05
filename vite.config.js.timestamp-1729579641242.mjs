// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/Bieefilled/Documents/Projects/Bieefilled/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Bieefilled/Documents/Projects/Bieefilled/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Bieefilled/Documents/Projects/Bieefilled/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = ({ mode }) => {
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
              type: "image/png"
            },
            {
              src: "/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "/icons/favicon-16x16.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "/icons/safari-pinned-tab.svg",
              sizes: "512x512",
              type: "svg"
            }
          ]
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
                  maxAgeSeconds: 60 * 60 * 24
                  // 24hours
                },
                networkTimeoutSeconds: 10
              }
            }
          ]
        }
      })
    ],
    public_key: process.env.VITE_APP_YOUR_PUBLIC_KEY,
    template_id: process.env.VITE_APP_TEMPLATE_ID,
    mail_service_id: process.env.VITE_APP_MAIL_SERVICE_ID
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCaWVlZmlsbGVkXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxCaWVlZmlsbGVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCaWVlZmlsbGVkXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxCaWVlZmlsbGVkXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9CaWVlZmlsbGVkL0RvY3VtZW50cy9Qcm9qZWN0cy9CaWVlZmlsbGVkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT4ge1xyXG4gIC8vIExvYWQgYXBwLWxldmVsIGVudiB2YXJzIHRvIG5vZGUtbGV2ZWwgZW52IHZhcnMuXHJcbiAgcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH07XHJcblxyXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xyXG4gICAgLy8gVG8gYWNjZXNzIGVudiB2YXJzIGhlcmUgdXNlIHByb2Nlc3MuZW52XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHJlYWN0KCksXHJcbiAgICAgIFZpdGVQV0Eoe1xyXG4gICAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXHJcbiAgICAgICAgaW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5pY29cIiwgXCJyb2JvdHMudHh0XCIsIFwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIl0sXHJcbiAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgIG5hbWU6IFwibXkgUG9ydGZvbGlvXCIsXHJcbiAgICAgICAgICBzaG9ydF9uYW1lOiBcIkJpZWUgY3ZcIixcclxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiLFxyXG4gICAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcInN2Z1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdvcmtib3g6IHtcclxuICAgICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2FwaS5zZW5kaW5ibHVlLmNvbS92My9zbXRwL2VtYWlsXCJcclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGhhbmRsZXI6IFwiTmV0d29ya0ZpcnN0XCIsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcInNlbmRpbmJsdWUtYXBpXCIsXHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCwgLy8gMjRob3Vyc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kczogMTAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcHVibGljX2tleTogcHJvY2Vzcy5lbnYuVklURV9BUFBfWU9VUl9QVUJMSUNfS0VZLFxyXG4gICAgdGVtcGxhdGVfaWQ6IHByb2Nlc3MuZW52LlZJVEVfQVBQX1RFTVBMQVRFX0lELFxyXG4gICAgbWFpbF9zZXJ2aWNlX2lkOiBwcm9jZXNzLmVudi5WSVRFX0FQUF9NQUlMX1NFUlZJQ0VfSUQsXHJcbiAgfSk7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVYsU0FBUyxjQUFjLGVBQWU7QUFDdlgsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUl4QixJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFM0IsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUVoRSxTQUFPLGFBQWE7QUFBQTtBQUFBLElBRWxCLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGVBQWUsQ0FBQyxlQUFlLGNBQWMsc0JBQXNCO0FBQUEsUUFDbkUsVUFBVTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLGdCQUFnQjtBQUFBLFlBQ2Q7QUFBQSxjQUNFLFlBQVksSUFBSTtBQUFBLGdCQUNkO0FBQUEsY0FDRjtBQUFBLGNBQ0EsU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLGdCQUNQLFdBQVc7QUFBQSxnQkFDWCxZQUFZO0FBQUEsa0JBQ1YsWUFBWTtBQUFBLGtCQUNaLGVBQWUsS0FBSyxLQUFLO0FBQUE7QUFBQSxnQkFDM0I7QUFBQSxnQkFDQSx1QkFBdUI7QUFBQSxjQUN6QjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFlBQVksUUFBUSxJQUFJO0FBQUEsSUFDeEIsYUFBYSxRQUFRLElBQUk7QUFBQSxJQUN6QixpQkFBaUIsUUFBUSxJQUFJO0FBQUEsRUFDL0IsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
