import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	rootDir: './',
	verbose: true,
	setupFilesAfterEnv: ['./jest.setup.ts'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};

export default config;
