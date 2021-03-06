module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    reporters: [
      'clear-text',
      'html',
      'progress',
      'dashboard',
    ],
    testRunner: 'jest',
    transpilers: ['typescript'],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: [
      'src/**/*.ts',
      '!src/**/*.test.ts',
      '!src/**/*.spec.ts',
    ],
    jest: {
      projectType: 'custom',
      configFile: './jest.config.js',

    }
  })
}
