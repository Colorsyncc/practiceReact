import React from 'react';

const Name = (props) => {
            console.log(props.data);
            
    return (
        <div className="container">
            <h1>
               {  props.data }
            </h1>   
        </div>
    )
}


export default Name;