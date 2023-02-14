import React,{ useState , createContext } from 'react';
import './style/App.css';

import Panel from './Panel';
import Start from './Start';

import UserContext from './contexts/userContext';
import { useContext } from 'react';

function App() {

	const {user} = useContext(UserContext)

	if (user) {
		return <div className='App'>{<Start/>}</div>;
	}
	if (!user) {
		return (
			<div className='App'>
				<Panel/>
			</div>
		);
	}
}

export default App;
