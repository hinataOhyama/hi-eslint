import next from "@next/eslint-plugin-next";

export default {
  plugins: {
    "@next/next": next,
  },
  rules: {
    ...next.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "@next/next/no-img-element": "error",
  },
};