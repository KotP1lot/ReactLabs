import { useState } from "react";

export default function Input({ChangeState})
{
    console.log(ChangeState)
    const[name, SetName] = useState('');
    return(
        <>
        <input type="text" onChange={(event)=> SetName(event.target.value)}></input>
        <button onClick={()=>ChangeState(name)}>Add</button>
        </>
    );
}