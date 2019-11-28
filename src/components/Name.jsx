import React from 'react';

const Name = (props) => {
            console.log(props.data[0]);
            
    return (
        <div className="container">
            <h1>
               {  Object.values(props.data[0]) }
            </h1>   
        </div>
    )
}


export default Name;