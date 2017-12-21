import React, { Component } from 'react';
import './../style/Detail.css';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3]
    }
  }
  goPage(){
    window.window.history.back(-1);
  }
  render() {
    return (
      <div className="Detail">
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

export default Detail;
