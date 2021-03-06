/* eslint-env node */

'use strict';

const path = require('path');

// ESLint Configuration Files enables to include comments.
// https://eslint.org/docs/user-guide/configuring/
module.exports = {
    extends: ['prettier'],

    env: {
        es6: true,
        node: false,
        commonjs: false,
    },

    rules: {
        'no-magic-numbers': 'off',
    },

    overrides: [
        {
            files: ['*.ts'],

            extends: ['../tools/eslint/eslintrc_typescript.cjs', 'prettier'],

            parserOptions: {
                sourceType: 'module',
                project: path.resolve(__dirname, '../tsconfig.eslint.json'),
            },

            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
            },
        },
    ],
};
