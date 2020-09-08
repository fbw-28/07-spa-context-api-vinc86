import React, { useState } from 'react'
import MyContext from "../Context";

export default function Container(props) {
    const [counterX, setCounterX] = useState(0);
    const [counterY, setCounterY] = useState(0);

    return (
        
        <MyContext.Provider value={{counterX, setCounterX,counterY, setCounterY}}>
            {props.children}
        </MyContext.Provider>
        
    )
}
