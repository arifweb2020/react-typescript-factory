import React from 'react';

// type propsType={
//     items:string[] | number[];
//     onClick:(value:string | number)=>void
// }

// function Generics({items,onClick}:propsType) {

    type propsType<T>={
        items:T[];
        onClick:(value:T)=>void
    }

function Generics <T extends string | number>({items,onClick}:propsType<T>) {
    return (
        <div>
            <h1>Generic Props</h1>
            {
                items?.map((ele,index)=>{
                    return <p key={index} onClick={()=>onClick(ele)} style={{cursor:'pointer'}}>{ele}</p>
                })
            }
        </div>
    );
}

export default Generics;