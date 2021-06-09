module.exports = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: '../coverage',

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'babel',

    // The root directory that Jest should scan for tests and modules within
    rootDir: 'src',

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['../jest-config/index.js'],
    // "<rootDir>/src/setupTests.jsx",

    // The test environment that will be used for testing
    testEnvironment: 'jest-environment-node',
};
