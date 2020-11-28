module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    'max-len': [
      'warn',
      {
        // code: 80,
        // comments: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
  },
  parser: 'babel-eslint',
};
