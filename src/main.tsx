import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const divRoot = document.querySelector('#root');

const Root = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

const root = createRoot(divRoot!);

root.render(Root);
