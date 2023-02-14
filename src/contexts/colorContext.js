import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export function ColorProvider({ children }) {
    const [color,setColor] = useState(['#ffadc6', '#ffe4ec'])
    const [darkShade, setDarkShade] = useState(false);

    const changeColor = (color1,color2) => {
		color.length = 0
		setColor([color1,color2])
	}

	return (
		<ColorContext.Provider value={{color,setColor,darkShade,setDarkShade,changeColor}}>
			{children}
		</ColorContext.Provider>
	);
}

export default ColorContext;
