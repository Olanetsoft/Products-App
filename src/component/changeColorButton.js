import React, { Component } from 'react';

class ChangeColorButton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
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