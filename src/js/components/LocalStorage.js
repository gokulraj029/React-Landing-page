import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class LocalStorage extends Component {

    setData(){
        // set data with localstorage

        let obj = {name: 'gokulraj', age: 28, email : 'gokulraj@gmail.com'}
        // localStorage.setItem('myData', "Hello gokulraj");
        localStorage.setItem('myData', JSON.stringify(obj));

        // set data with sessionStorage
        sessionStorage.setItem('mySessionStorageData', JSON.stringify(obj));

    }

    getData(){
        // let data = localStorage.getItem('myData');
        let data = localStorage.getItem('mySessionStorageData');
        data = JSON.parse(data);
        console.log(data)
    }

    render() {
        return(
            <div>
                <h1>LocalStorage</h1>
                <button onClick={() => this.setData()}>Set Datat</button>
                <button onClick={() => this.getData()}>Get Datat</button>
            </div>
        );
    }
}

if (document.getElementById('localstorage')) {
ReactDOM.render(<LocalStorage />, document.getElementById('localstorage'));
}