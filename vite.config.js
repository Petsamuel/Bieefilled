import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env
    plugins: [react()],
    public_key: process.env.VITE_APP_YOUR_PUBLIC_KEY,
    template_id: process.env.VITE_APP_TEMPLATE_ID,
    mail_service_id: process.env.VITE_APP_MAIL_SERVICE_ID,
  });
};
