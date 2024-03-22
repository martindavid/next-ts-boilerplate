/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require("next/jest")
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: "./"
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
