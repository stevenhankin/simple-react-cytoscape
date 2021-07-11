module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform:{
    '^.+\\.(ts)$': 'ts-jest',
    '^.+\\.(tsx)$': '<rootDir>/node_modules/babel-jest',
  }
};