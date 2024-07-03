import js from "@eslint/js";

export default [
  // apply recommended rules to JS files
  {
    files: ["**/*.js"],
    rules: js.configs.recommended.rules,
  },

  // apply recommended rules to JS files with an override
  {
    files: ["**/*.js"],
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
    },
  },

  // apply all rules to JS files
  {
    files: ["**/*.js"],
    rules: {
      ...js.configs.all.rules,
      "no-unused-vars": "warn",
    },
  },
];
