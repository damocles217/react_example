import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	setupFilesAfterEnv: ['./jest.setup.ts'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default config;
