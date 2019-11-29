import React from 'react';

const Name = ({ name, age })  => {
    return (
        <div className="container">
            <h1>
               { `My name is ${name} and my age is ${age}` }
            </h1>
        </div>
    )
}

Name.displayName = 'Name';

export default Name;