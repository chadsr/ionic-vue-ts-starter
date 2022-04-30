module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
  plugins: ['jest', 'cypress'],
  env: {
    mocha: true,
    'cypress/globals': true,
  },
  rules: {
    strict: 'off',
  },
};
