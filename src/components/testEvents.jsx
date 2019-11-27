import React from 'react';

const TestEvents = ({ handleClickDecrement , handleClickIncrement , count}) => {

    return (
        <div className="container">
            <h1>{ count }</h1>
            <button onClick={handleClickIncrement}>+</button>
            <button onClick={handleClickDecrement}>-</button>
        </div>
    )
}


export default TestEvents;