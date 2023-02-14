import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ColorProvider } from './contexts/colorContext';
import { UserProvider } from './contexts/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <UserProvider>
		<ColorProvider>
			<App />
		</ColorProvider>
    </UserProvider>
	</React.StrictMode>
);
