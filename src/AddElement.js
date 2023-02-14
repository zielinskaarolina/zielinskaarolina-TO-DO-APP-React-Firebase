import React, { useStat, useEffect } from 'react';
import './style/AddElement.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Elements from './Elements';

import ColorContext from './contexts/colorContext';
import UserContext from './contexts/userContext';
import { useContext } from 'react';

const AddElement = () => {
	const { color } = useContext(ColorContext);
	const {
		user,
		task,
		setTask,
		list,
		setList,
		writeToDataBase,
		removeFromList,
	} = useContext(UserContext);

	return (
		<div className='addElement'>
			<div className='addElement_input'>
				<input
					value={task}
					type='text'
					placeholder='Your task'
					style={{
						backgroundColor: color[1],
					}}
					onChange={(e) => setTask(e.target.value)}
				/>
				<AiOutlinePlus
					style={{
						position: 'absolute',
						top: '20px',
						right: '20px',
						fontSize: '2rem',
						color: '#848484',
						fontWeight: '900',
					}}
					onClick={() => {
						if (task) {
							writeToDataBase();
						}
					}}
				/>
			</div>
			<div className='listElements'>
				{list.map((el) => (
					<div className='element' key={el.uidd}>
						{el.task}
						<div style={{cursor: 'pointer'}} onClick={() => removeFromList(el.uidd)}>
							<AiOutlineMinus  />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddElement;
