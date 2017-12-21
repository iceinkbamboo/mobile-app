import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Detail from './component/Detail'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3,4,5,6]
    }
  }
  goPage(){
    ReactDOM.render(<Detail />, document.getElementById('root'));
  }
  render() {
    return (
      <div className="About">
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
