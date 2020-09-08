import React,{ useContext } from 'react'
import Context from "../Context";

export default function C(props) {
    let {counterX, setCounterX, counterY, setCounterY} = useContext(Context);
    return (
        <div>
            <h2>Component C, y = {counterY}</h2>
            <button onClick={()=>setCounterX(++counterX)}>Increment X</button>
        </div>
    )
}
