import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  { ...reactHooksPlugin.configs.flat.recommended, files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker
      }
    }
  }
];
