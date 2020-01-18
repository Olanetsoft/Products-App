import React, { Component } from 'react';

class ChangeColorButton extends Component {
    constructor(props){
        super(props);
        //This section below is use to bind the handleClick function so as not to loose reference
        this.handleClick = this.handleClick.bind(this)
    }

    //This function is created to get its properties from the parent by props
    handleClick(){
        this.props.onClick();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Change The Color</button>
            </div>
        );
    }
}

export default ChangeColorButton;