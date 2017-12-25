import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/Detail.css';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      nums:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
      detail: null,
    }
  }
  componentWillMount() {
    //console.warn('======props====', this.props)
    this.setState({
      arr:[1,2,3,4,5,6,7,8,9,10],
      detail: this.props.match.params.detail
    })
    
  }
  render() {
    const { detail } = this.state
    return (
      <div className="Detail">
        <div className="detail-nav">
          <span>
            <Link to='/about'>返回</Link>
          </span>
        </div>
        <div className="detail-main">
          <div className="detail-main-top">{detail}</div>
          <div className="detail-main-bottom">
            {
              this.state.arr.map((num,index) => {
                return(
                  <li key={index}>{num}</li>
                )
              })
            }
          </div>
          <div className="detail-main-bom"></div>
        </div>
      </div>
    );
  }
}

export default Detail;
