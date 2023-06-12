module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'no-unneeded-ternary': 'warn',
        '@typescript-eslint/naming-convention': [
          'off',
          {
            leadingUnderscore: 'allow',
          },
        ],
        'react-native/no-inline-styles': 0,
        'prettier/prettier': [
          'error',
          {
            'no-inline-styles': false,
          },
        ],
        'react/no-unstable-nested-components': ['off'],
      },
      env: {
        jasmine: true,
        jest: true,
      },
      globals: {
        JSX: true,
      },
    },
  ],
};
