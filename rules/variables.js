export default {
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      { // classやtypeなどは頭大文字（★４）
        'selector': 'typeLike',
        'format': ['PascalCase'],
      },
      { // 変数名はキャメルケース
        'selector': 'variable',
        'format': ['camelCase'],
      },
    ]
  }
}