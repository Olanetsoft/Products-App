import React, { Component } from 'react';

class Event extends Component {
    constructor(props){
        super(props);

        //THis declares the state at first instance
        this.state ={
            foo: 'First Post'
        }
    }

    render() {

        //This is a function created to set the state to any value of your choice 
        let handleClick = ()=>{
            this.setState({
                foo: 'Second Post'
            })
        }

        return (
            <div>
                <button
                    onClick={handleClick}
                >{this.state.foo}</button>
            </div>
        );
    }
}

export default Event;