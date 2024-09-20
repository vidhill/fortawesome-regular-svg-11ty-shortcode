import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // Automatically clear mock calls and instances between every test
        clearMocks: true,

        // The test environment that will be used for testing
        environment: 'jsdom',

        reporters: ['json', 'junit', 'default'],

        outputFile: {
            junit: '../test-results/jest/results.xml',
            json: '../test-results/jest/results.json',
        },

        // A list of paths to modules that run some code to configure or set up the testing framework before each test
        setupFiles: ['../test-config/index.js'],

        // Exclude files or directories (rootDir is automatically scoped)
        exclude: ['node_modules'],

        // Enable coverage collection
        coverage: {
            enabled: true,
            // Output coverage files to this directory
            reportsDirectory: '../coverage',
            // The provider for coverage (use c8 for Vitest)
            provider: 'v8',
        },

        // Optionally specify the directory to run tests from (default is project root)
        root: 'src',
    },
});
