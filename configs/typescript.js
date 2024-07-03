import typescriptRuleSet from '../rules/typescript.js';

export default [
  {
    files: ['**/*.@(ts|tsx|cts|mts)'],
    ...typescriptRuleSet,
  },
];