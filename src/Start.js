import React, { useState } from 'react';
import './style/Start.css';
import { signOut } from 'firebase/auth';

import AddElement from './AddElement';
import { ImExit } from 'react-icons/im';

import ColorContext from './contexts/colorContext';
import { useContext } from 'react';

import UserContext from './contexts/userContext';

const Start = () => {
	const { color, darkShade } = useContext(ColorContext);
	const { handleSignOut, email } = useContext(UserContext);

	return (
		<div
			className='start'
			style={
				darkShade
					? { backgroundColor: '#404040' }
					: { backgroundColor: 'white' }
			}>
				<div className="exit" onClick={handleSignOut}>
				<ImExit
				style={{
					fontSize: '1.5rem',
					cursor: 'pointer'
				}}
			/>
				</div>
			<div className='start_left'>
				<div className='login_logo start_login_logo'>
					<p className='text'>YOUR</p>
					<p
						className='date'
						style={{
							color: color[0],
						}}>
						2023
					</p>
					<p className='text text2'>PLANNER</p>
				</div>
			</div>
			<div className='start_right'>
				<AddElement />
			</div>
		</div>
	);
};

export default Start;
