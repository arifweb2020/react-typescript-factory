import React from 'react';
import { propsType } from './CommonProps';

// common 

// type helper = {
//     flag?:boolean
// }

// type propsType = helper & {
//     name?:string;
  
// }
function Common({name}:propsType) {
    return (
        <div>
            <p>Hello , {name}</p>
        </div>
    );
}

export default Common;