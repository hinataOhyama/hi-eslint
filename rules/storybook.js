import storybook from "eslint-plugin-storybook";

export default {
  ...storybook.configs["flat/recommended"],
  files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
  rules: {
    // example of overriding a rule
    "storybook/hierarchy-separator": "error",
    // example of disabling a rule
    "storybook/default-exports": "off",
  },
};
