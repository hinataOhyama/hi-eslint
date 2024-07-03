import promisePlugin from 'eslint-plugin-promise';

export default {
  plugins: {
    promise: promisePlugin,
  },
  rules: {
    ...promisePlugin.configs.recommended.rules,
    // 追加のルール例
    'promise/always-return': ['off', { ignoreLastCallback: true }],
    // ...
  },
};