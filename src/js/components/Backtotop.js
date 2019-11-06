import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Backtotop extends Component {
    render() {
        return (
            <a href="#" className="back-to-top" id="back-to-top"> <i className="mdi mdi-chevron-up"> </i> </a>
        );
    }
}

if (document.getElementById('backtotop')) {
    ReactDOM.render(<Backtotop />, document.getElementById('backtotop'));
}