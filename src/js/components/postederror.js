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
        console.log("hello")
        this.setState({ [e.target.name]: e.target.value });
	}

	submitHandler(e){
		e.preventDefault()
		console.log("State =" + this.state)
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
            <form onSubmit={this.submitHandler}> 
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" onChange={this.changeHandler} value={userId} name="userId" id="userID"  placeholder="Enter User id" />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={this.changeHandler} value={title} name="title" id="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" className="form-control" onChange={this.changeHandler} value={body} name="body" id="Body" placeholder="Enter Body" />
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