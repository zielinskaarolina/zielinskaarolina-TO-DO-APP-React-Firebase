import React, { createContext, useEffect, useState } from 'react';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { onValue } from 'firebase/database';
import { db } from '../firebase';
import { uid } from 'uid';
import { set, ref ,remove} from 'firebase/database';

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(false);
	const [register, setRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [task, setTask] = useState('');
	const [list, setList] = useState([]);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if(user){
				setUser(true)
				onValue(ref(db ,`/${auth.currentUser.uid}`), DataSnapshot => {
					setList([])
					const data = DataSnapshot.val()
					console.log(data)
					if(data !== null){
						Object.values(data).map((el) => {
							setList((oldArray) => [...oldArray,el])
						})
					}
				})
			}
			else if (!user) {
				setUser(false)
			}
		});
	}, []);

	//DATABASE

	const removeFromList = (uid) => {
		console.log('work')
		remove(ref(db, `/${auth.currentUser.uid}/${uid}`))
	}
	
	const writeToDataBase = () => {
		const uidd = uid();
		set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
			task: task,
			uidd: uidd,
		});

		setTask('');
	};

	//AUTH

	const handleRegister = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setUser(true);
			})
			.catch((err) => console.log(err));
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				setUser(false);
				setRegister(false);
				setEmail('');
				setPassword('');
			})
			.catch((err) => console.log(err));
	};

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setUser(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				register,
				setRegister,
				email,
				setEmail,
				password,
				setPassword,
				handleSignIn,
				handleSignOut,
				handleRegister,
				task,
				list,
				setTask,
				setList,
				writeToDataBase,
				removeFromList
			}}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
