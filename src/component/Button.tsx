import React from 'react';

type btnProps={
    submit:(e:React.MouseEvent<HTMLButtonElement>)=> void
}

function Button(props:btnProps) {
   
    return (
        <div>
         <button onClick={(e)=>props.submit(e)}>Click</button>    
        </div>
    );
}

export default Button;