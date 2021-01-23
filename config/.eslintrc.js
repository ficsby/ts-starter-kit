const path = require('path');

module.exports = {
    extends: [
        'airbnb-typescript/base', // use "airbnb-typescript" if using react
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        // 'prettier/react',
        'prettier/@typescript-eslint',
    ],
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'jest',
        'promise',
        'unicorn',
    ],
    parserOptions: {
        project: path.join(__dirname, '../tsconfig.json'),
    },
};
