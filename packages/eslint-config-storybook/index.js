import storybookPlugin from 'eslint-plugin-storybook';

const config = storybookPlugin.configs['flat/recommended'];

export default /** @type {import('eslint').Linter.Config[]} */(config);
