import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component{

    constructor(form){
        super(form)
        this.state={
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = event  => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }
    handlecommentsChange = event  => {
        this.setState({
            comments: event.target.value
        })
    }
    handleUsertopicChange = event  => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        // alert(`${this.state.username} ${this.state.comments} ${this.state.topic }`);
        // alert(this.state.username);
        // alert( this.state.comments);
        // alert( this.state.topic);
        // alert(this.state.username)+' - '+this.state.comments + ' - ' this.state.topic;
        event.preventDefault()
    }


    render(){
        const {username, comments, topic} = this.state
        return(  
            <form onSubmit={this.handleSubmit}>
                <div style={{paddingTop: '50px'}}>
                    <label>User Name</label>
                    <input type="text" value={username} 
                    onChange={this.handleUsernameChange} />
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label>Comments</label>
                    <textarea value={comments} 
                    onChange={this.handlecommentsChange}></textarea>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label>Topic</label>
                    <select value={topic} 
                    onChange={this.handleUsertopicChange}>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Angular</option>
                    </select>
                </div>
                <button style={{marginTop: '20px'}} type="submit">SUBMIT</button>
            </form>
        )
    }
}

if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}