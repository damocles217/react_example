/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly URL_BACKEND: string;
	PORT_USER: number;
	SUBURL_USER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
