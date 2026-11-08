// Build tooling preset — includes tanstackStart, react, tailwind, path aliases. Do NOT add those manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// MOBILE_BUILD=1 produces a fully static app (dist/client) that is bundled inside the Android APK
// so it runs without internet.
const mobile = process.env["MOBILE_BUILD"] === "1";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(mobile ? { spa: { enabled: true, prerender: { outputPath: "/index.html" } } } : {}),
  },
});
