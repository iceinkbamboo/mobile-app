import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    }
  }
  render() {
    return (
      <div className="Topics">
        <ul className="list-shop">
          {
            this.state.nums.map((num,index) => {
              return <li key={index}>{num}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
