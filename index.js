'use strict';

module.exports = {
  extends: [
    'airbnb/base',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [2, 'always-multiline'],
    'no-use-before-define': [2, 'nofunc'],
    'no-param-reassign': 2,
    'no-underscore-dangle': [0],
    'newline-per-chained-call': [2],
    'object-curly-newline': ['error', { 'minProperties': 3 }],
    'require-await': 2,
    strict: [2, 'global'],
    'vars-on-top': 2,
  },
  globals: {
    describe: true,
    it: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
  },
  env: {
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 10,
  }
};
