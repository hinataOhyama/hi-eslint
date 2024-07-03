import n from 'eslint-plugin-n';

export default {
  plugins: {
    n,
  },
  rules: {
    ...n.configs['flat/recommended'].rules,
    // 追加のルール例
    'n/global-require': ['error'],
    // ...
  },
};