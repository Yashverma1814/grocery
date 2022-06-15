import React from "react";
import { List } from "./List";

function Input () {
    
    const [inp,setInp] = React.useState('');
    const i = inp;
    const data = [];
    const setInput =() =>{
        data.push(i);
        console.log(data);
    }

    return(
    <>
        <input type="text" value={inp} onChange={(e)=> setInp(e.target.value)}/>
        <button onClick={setInput}>Add To Cart</button>
        <List list={data}/>
    </>
    );
}
export {Input};