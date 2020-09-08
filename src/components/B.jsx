import React, {useContext} from 'react';
import Context from "../Context";


export default function B(props) {

    let {counterY, setCounterY, counterX, setCounterX} = useContext(Context);

    return (
    <div>
        <h2>Component B, x = {counterX}</h2>
        <button onClick={()=>setCounterY(++counterY)} >Increment Y</button>
    </div>
    )
}
