import React, { ComponentType } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// * Pages
import HomePage from '../pages/HomePage';

const App: ComponentType = () => {
	// TODO here is how to env data is selected const data = import.meta.env.VITE_URL_BACKEND;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<div />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
