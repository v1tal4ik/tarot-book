import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages';

import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<HomePage />
		</BrowserRouter>
	</React.StrictMode>
);
