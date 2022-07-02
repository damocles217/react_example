/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_URL_USER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
