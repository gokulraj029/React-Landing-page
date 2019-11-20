import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Api from '../config/Config.js';

export default class FormWithImage extends Component {



    constructor(props){
        super(props);
        this.state={
            file : '',
            body : ''
        };
    }

	changeHandler(e){
        // console.log("hello")
        e.preventDefault()
        // this.setState({ userId: e.target.value, title: e.target.value, body: e.target.value });
        // two way binding 
        this.setState({ [e.target.name]: e.target.value });
        console.log( "State Body =" + this.state.body)
        // console.log("hello000000" + this.setState)

    }
    
    fileSelectHandler(e){
        e.preventDefault();
        console.log(e.target.files[0]);
        //  console.log("hello" + this.setState)

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
            });
        }

        reader.readAsDataURL(file)
        
    }  

    fileUploadHandler(e){
        e.preventDefault();

        console.log('handle uploading-', this.state.file);
        console.log('data update -', this.state.body);
           Api.post('posts', this.state.file, this.state.body)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {e
                console.log(error)
            })        
    }

render() {
    const {body} = this.state
    return (
        <div>
            <h1>Image Upload To Rest API </h1>
            <form > 
                <div className="form-group" >
                    <label>Image upload</label>
                    <input type="file" 
                    onChange={this.fileSelectHandler.bind(this)} 
                    className="form-control" 
                    name="selectFile" 
                    id="selectFile"
                    />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" 
                    className="form-control" 
                    onChange={this.changeHandler.bind(this)} 
                    value={body} name="body" id="Body" 
                    placeholder="Enter Body" />
                </div>                
                <button onClick={ this.fileUploadHandler.bind(this)} type="submit" className="btn btn-primary">Submit</button>
                <h3>{}</h3>
            </form>
        </div>
    );
}
}

if (document.getElementById('formwithimage')) {
ReactDOM.render(<FormWithImage />, document.getElementById('formwithimage'));
}