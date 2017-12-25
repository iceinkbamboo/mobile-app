import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Topics from './Topics';
import Detail from './component/Detail'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class BasicExample extends Component{
    componentDidMount(){
        // var $height = document.body.clientHeight - 102;
        // document.getElementsByClassName("main-content")[0].style.height = $height + 'px';
    }
    render(){
        return (
            <Router>
                <div>
                    <div className="main-nav">
                        <p>首页</p>
                    </div>
                    <div className="main-content">
                        <Route exact path="/" component={App} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/about/:detail" component={Detail} />
                        <div className='mainUl'>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/topics">Topics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
          </Router>
        )
    }
}
ReactDOM.render(<BasicExample />, document.getElementById('root'));

registerServiceWorker();