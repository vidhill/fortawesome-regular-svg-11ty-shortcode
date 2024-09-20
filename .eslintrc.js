/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['vidhill'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    ignorePatterns: ['build/**/*'],
    overrides: [
        {
            // unit test overrides
            files: ['*.spec.js'],
            env: {
                jest: false,
            },
            rules: {
                'jest/no-deprecated-functions': 'off',
            },
        },
    ],
};
