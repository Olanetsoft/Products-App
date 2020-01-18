import React, { Component } from 'react';
import ChangeColorButton from './changeColorButton';


class ColorBlock extends Component {
    constructor(props){
        super(props);

        //This state is set at the beginning
        this.state = { 
            backgroundColor: "red"
        };
        //This section below is use to bind the changeColor function so as not to loose reference
        this.changeColor = this.changeColor.bind(this);
    }

    //This function is created to set the new state and also check the current color so as enable toggling between the two colors
    changeColor(){
        this.setState((prevState) =>{
            let newColor = prevState.backgroundColor === "red" ? "green" : "red"
        return{
            backgroundColor: newColor
        };
    });
    }

    render() {
        return (
            <div style={{width: "200px", height: "200px", backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton onClick = {this.changeColor}/>
            </div>
        );
    }
}

export default ColorBlock;