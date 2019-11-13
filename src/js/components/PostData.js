import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class PostData extends Component {

    constructor(props){
        super(props)
        this.state = {
            posted : [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts-1')
        .then(Response =>{
            console.log(Response.data)
            this.setState({posted: Response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error Reterive Data'})
        })
    }

render() {

    const {posted, errorMsg} = this.state
    console.log(this.state)
    return (
        <div>
            <h1>Rest API Error Handel </h1>
            {
                posted.length ?
            posted.map(datapost => <div key={datapost.id}>{datapost.title}</div>) : null
            }
            {errorMsg ?<div className="text-danger">{errorMsg}</div> : null}
        </div>
    );
}
}

if (document.getElementById('postdata')) {
ReactDOM.render(<PostData />, document.getElementById('postdata'));
}