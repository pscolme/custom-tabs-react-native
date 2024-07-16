// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        eslintIntegration: true,
        stylelintIntegration: true,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
