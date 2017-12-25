import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
    }
  }
  render() {
    return (
      <div className="About">
        <ul className="list-shop">
          {
            this.state.nums.map((num,index) => {
              return (
                <li key={index}>
                  <Link to={'/about/'+num}>{num}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
