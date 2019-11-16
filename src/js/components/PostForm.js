import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class PostForm extends Component {


    constructor(props){
        super(props);
        this.state={
            userId : '',
            title : '',
            body : ''
        };
    }

	changeHandler(e){
        // console.log("hello")
        e.preventDefault()
        // this.setState({ userId: e.target.value, title: e.target.value, body: e.target.value });
        // two way binding 
        this.setState({ [e.target.name]: e.target.value });
		// console.log("State User =" + this.state.userId, "State Title =" + this.state.title, "State Body =" + this.state.body)

	}

	submitHandler(e){
		e.preventDefault()
        console.log("State User =" + this.state.userId, "State Title =" + this.state.title, "State Body =" + this.state.body)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {e
            console.log(error)
        })
    }
   
    // Error function handel 
    
	// changeHandler = e => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// }

	// submitHandler = e => {
	// 	e.preventDefault()
	// 	console.log(this.state)
    // }
    

render() {

    const {userId, title, body } = this.state
    return (
        <div>
            <h1>Post Form Data To Rest API </h1>
            <form onSubmit={this.submitHandler.bind(this)}> 
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" onChange={this.changeHandler.bind(this)} value={userId} name="userId" id="userID"  placeholder="Enter User id" />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={this.changeHandler.bind(this)} value={title} name="title" id="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" className="form-control" onChange={this.changeHandler.bind(this)} value={body} name="body" id="Body" placeholder="Enter Body" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
}

if (document.getElementById('postform')) {
ReactDOM.render(<PostForm />, document.getElementById('postform'));
}