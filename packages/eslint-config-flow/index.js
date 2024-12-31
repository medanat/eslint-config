import { FlatCompat } from '@eslint/eslintrc';
import hermes from 'hermes-eslint';
import flowPlugin from 'eslint-plugin-ft-flow';

const compat = new FlatCompat();
const oldConfig = compat.config(flowPlugin.configs.recommended)[0];

oldConfig.languageOptions.parser = hermes;
oldConfig.languageOptions.parserOptions = {
  sourceType: 'module'
};
oldConfig.settings['ft-flow'].onlyFilesWithFlowAnnotation = true;

export default [
  oldConfig
];
