import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'

export default class App extends Component {

render() {
    return (
        <div>
            <h1>Home </h1>
            <div id="header"></div>
        </div>
    );
}
}

if (document.getElementById('app')) {
ReactDOM.render(<App />, document.getElementById('app'));
}