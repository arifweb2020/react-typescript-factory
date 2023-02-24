import React from 'react';
import Button from './Button';

function ChildD() {
    const submit =(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e.target)
    }
    const spansubmit =(e:React.MouseEvent<HTMLSpanElement>)=>{
        console.log(e.target)
    }
    const handleChng =(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target)
    }

    return (
        <div>
            <h1>Events</h1>
            <Button submit={(e)=>submit(e)}/>
            {/* <button onClick={(e)=>submit(e)}>Click</button><br/> */}
            <span onClick={(e)=>spansubmit(e)}>Click</span><br/>
            <>
            <input type="text" value="" onChange={handleChng} />
            </>
        </div>
    );
}

export default ChildD;