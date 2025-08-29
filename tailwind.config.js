import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        xs: "650px", // 👈 extra small breakpoint
      },
    },
  },
});
