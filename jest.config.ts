import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  bail: true,

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*.ts'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  coverageReporters: ['text-summary', 'lcov'],

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testMatch: ['**/*-spec.test.ts'],
}
