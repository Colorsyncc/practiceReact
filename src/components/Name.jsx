import React from 'react';

const Name = (props) => {
            console.log(props.name);
            
    return (
        <div className="container">
            <h1>{ props.name }</h1>   
        </div>
    )
}


export default Name;