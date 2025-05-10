import shopifyPlugin from '@shopify/eslint-plugin';
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ['**/*.{ts,tsx}'] },
  ...shopifyPlugin.configs.react,
  ...shopifyPlugin.configs.typescript,
  ...shopifyPlugin.configs['typescript-type-checking'],
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  {
    rules: {
      yoda: ['error', 'never', { exceptRange: true }],
      'id-length': 'off',
      'no-warning-comments': 'off',
      'import/no-default-export': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      '@shopify/jsx-no-hardcoded-content': 'off',
      '@shopify/react-prefer-private-members': 'off',
      '@shopify/binary-assignment-parens': 'off',
      '@shopify/strict-component-boundaries': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  }
]);
