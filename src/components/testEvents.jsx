import React, { Component } from 'react';


class TestEvents extends Component {

render() {

        return (
            <div className="container">
                <h1>ctm</h1>
                <button onClick={this.handleClickIncrement}>+</button>
                <button onClick={this.handleClickDecrement}>-</button>
            </div>
        )
    }

}


export default TestEvents;