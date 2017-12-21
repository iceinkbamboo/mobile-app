import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    }
  }
  goPage(){
    
  }
  render() {
    return (
      <div className="App">
        <ul className="list-shop">
          {
            this.state.nums.map((num,index) => {
              return <li key={index} onClick={this.goPage.bind(this)}>{num}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
