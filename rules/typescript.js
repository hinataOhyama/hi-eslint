import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import bestPractices from './best-practices.js';

export default {
  plugins: {
    '@typescript-eslint': typescriptEslint,
  },
  languageOptions: {
    parser,
    parserOptions: {
      project: true,
      sourceType: "module",
    },
  },
  rules: {
    ...typescriptEslint.configs['eslint-recommended'].overrides[0].rules,
    ...typescriptEslint.configs['strict-type-checked'].rules,
    ...typescriptEslint.configs['stylistic-type-checked'].rules,

    // 追加のルール例
    '@typescript-eslint/dot-notation': bestPractices.rules['dot-notation'],
    // ESLint 本体のルールを TypeScript 用に上書きする場合は以下のように記述する
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': bestPractices.rules['no-unused-expressions'],
    // ...
  }
};