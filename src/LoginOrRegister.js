import React, { useState } from 'react';
import './style/Panel.css';
import { MdColorLens, MdNightlight } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { BsFillSunFill } from 'react-icons/bs';

import ColorContext from './contexts/colorContext';
import UserContext from './contexts/userContext';
import { useContext } from 'react';

const LoginOrRegister = () => {
	const { color, darkShade, setDarkShade, changeColor } =
		useContext(ColorContext);
	const {
		register,
		setRegister,
		email,
		setEmail,
		password,
		setPassword,
		handleSignIn,
		handleRegister,
		setName,
		name
	} = useContext(UserContext);

	const [opacity, setOpacity] = useState(false);

	return (
		<div
			className='login'
			style={
				darkShade
					? { backgroundColor: '#404040' }
					: { backgroundColor: 'white' }
			}>
			<div className='frame'>
				<div className='login_logo'>
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

				<div className='login_container'>
					<input
						type='text'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					{register ? (
						<button
							style={{
								backgroundColor: color[1],
							}}
							className='pink_bgc'
							onClick={handleRegister}>
							Register now
						</button>
					) : (
						<button
							style={{
								backgroundColor: color[1],
							}}
							className='pink_bgc'
							onClick={handleSignIn}>
							Let's plan
						</button>
					)}
				</div>

				<div className='info'>
					<p>You don't have an account?</p>
					{register ? (
						<p
							className='pink_text pointer'
							style={{
								color: color[0],
							}}
							onClick={() => setRegister(false)}>
							Log in
						</p>
					) : (
						<p
							className='pink_text pointer'
							style={{
								color: color[0],
							}}
							onClick={() => setRegister(true)}>
							Register now
						</p>
					)}
				</div>

				<div className='pick_color'>
					<div className='icon'>
						<button
							className='button_icon'
							onClick={() => setOpacity(!opacity)}>
							<IconContext.Provider value={{ size: '2rem' }}>
								<MdColorLens />
							</IconContext.Provider>
						</button>
					</div>
					<div
						className='shades'
						style={!opacity ? { opacity: 0 } : { opacity: 1 }}>
						<div
							className='pink'
							onClick={() => changeColor('#ffadc6', '#ffe4ec')}></div>
						<div
							className='yellow'
							onClick={() => changeColor('#FFF59B', '#FBF6C7')}></div>
						<div
							className='green'
							onClick={() => changeColor('#CCDCC4', '#EBF6E5')}></div>
						<div
							className='blue'
							onClick={() => changeColor('#BFCDFF', '#CBE0FF')}></div>
						<div
							className='purple'
							onClick={() => changeColor('#DCC0FF', '#EBDBFF')}></div>
					</div>
				</div>

				<div className='day_night'>
					<button
						className='button_icon'
						onClick={() => setDarkShade(!darkShade)}>
						<IconContext.Provider value={{ size: '2rem' }}>
							{darkShade ? <MdNightlight /> : <BsFillSunFill />}
						</IconContext.Provider>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginOrRegister;
