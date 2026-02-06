import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
        mono: ["ui-monospace", "SFMono-Regular", "JetBrains Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      }
    },
  },
  plugins: [],
} satisfies Config;
