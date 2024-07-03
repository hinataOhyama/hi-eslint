import jsxA11y from 'eslint-plugin-jsx-a11y';

export default {
  plugins: {
    'jsx-a11y': jsxA11y,
  },
  rules: {
    ...jsxA11y.configs.recommended.rules,
    // 追加のルール例
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'] }],
    // ...
  },
};