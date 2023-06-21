module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'padded-blocks': 'off',
    'no-trailing-spaces': 'off',
    '@typescript-eslint/key-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-multi-spaces': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
