import React, { Component } from 'react';
import Clock from './component/clock';
import Event from './component/event';
import ColorBlock from './component/colorBlock';
import Products from './component/product';




class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Clock />
          <Event />
          <ColorBlock /> */}
         
            <Products />
          
      </div>
    );
  }
}

export default App;