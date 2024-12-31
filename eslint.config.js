import eslintConfig from './packages/eslint-config/index.js';
// import eslintConfigFlow from './packages/eslint-config-flow/index.js';
import eslintConfigNode from './packages/eslint-config-node/index.js';
import eslintConfigReact from './packages/eslint-config-react/index.js';
import eslintConfigStorybook from './packages/eslint-config-storybook/index.js';

export default [
  ...eslintConfig,
  // ...eslintConfigFlow,
  ...eslintConfigNode,
  ...eslintConfigReact,
  ...eslintConfigStorybook,
  { ignores: ['**/node_modules/*'] }
];
