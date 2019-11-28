import React from 'react';

const Name = ({ name })  => {
    return (
        <div className="container">
            <h1>
               { ` My name is ${name}` }
            </h1>   
        </div>
    )
}

export default Name;