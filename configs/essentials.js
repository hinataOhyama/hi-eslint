import bestPracticesRuleSet from '../rules/best-practices.js';
import es6RuleSet from '../rules/es6.js';
import importsRuleSet from '../rules/imports.js';
import promiseRuleSet from '../rules/promise.js';
import variablesRuleSet from '../rules/variables.js';
import globals from "globals";
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
  },
  prettierConfig,
  bestPracticesRuleSet,
  errorsRuleSet,
  es6RuleSet,
  styleRuleSet,
  variablesRuleSet,
  importsRuleSet,
  promiseRuleSet,
];