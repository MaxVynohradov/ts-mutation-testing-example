module.exports = {
  preset: 'ts-jest',
  rootDir: "src",
  testRegex: ".spec.ts$",
  testEnvironment: "node",
  coverageDirectory: "../reports/jest-coverage",
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  coverageProvider: "v8"
}
