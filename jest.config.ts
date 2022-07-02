import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	rootDir: './',
	verbose: true,
	setupFilesAfterEnv: ['./jest.setup.ts'],
	preset: 'ts-jest/presets/default-esm', // or other ESM presets
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transform: {}, // This evit to overwrite
	extensionsToTreatAsEsm: ['.tsx', '.ts'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
};

export default config;
