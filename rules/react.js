import react from 'eslint-plugin-react';

export default {
  plugins: {
    react,
  },
  languageOptions: {
    ...react.configs.recommended.languageOptions,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    // 追加のルール例
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    // ...
  },
};