import React, { ComponentType } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// * Pages
import HomePage from '../pages/HomePage/HomePage';
import SignupPage from '../pages/SignupPage/SignupPage';

const App: ComponentType = () => {
	// TODO here is how to env data is selected const data = import.meta.env.VITE_URL_BACKEND;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="*" element={<div />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
