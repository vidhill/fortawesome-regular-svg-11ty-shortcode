module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    plugins: ['prettier', 'import'],
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'prefer-const': 'error',
        'import/no-unresolved': 'error',
    },
    ignorePatterns: ['build/**/*'],
    overrides: [
        {
            // unit test overrides
            files: ['jest-config/*', '*.spec.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            env: {
                jest: true,
            },
        },
    ],
};
