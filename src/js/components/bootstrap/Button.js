import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Button extends Component{
  render(){
    return(
        <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>

    )
  }
}

if (document.getElementById('button')) {
    ReactDOM.render(<Button />, document.getElementById('button'));
}