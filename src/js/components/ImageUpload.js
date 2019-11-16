import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class ImageUpload extends Component {



    constructor(props){
        super(props);
        this.state={
            selectFile : ''
        };
    }

    fileSelectHandler(e){
        console.log(e.target.files[0]);
        this.setState({ file: e.target.files[0] });
        // this.setState({ selectFile : e.target.files[0] });
        // this.setState({ [e.target.name]: e.target.files });
         console.log("hello" + this.setState)
        
    }  

    fileUploadHandler(e){
        e.preventDefault()
        var fb = new FormData();
        fb.append('image', this.state.selectFile, this.state.selectFile.name);
        console.log(fb)
        // axios.post('https://jsonplaceholder.typicode.com/posts', fb)
        // .then(response =>{
        //     console.log(response)
        // })
        // .catch(error => {e
        //     console.log(error)
        // })
    }

render() {
    const {selectFile} = this.state
    return (
        <div>
            <h1>Image Upload To Rest API </h1>
            <form > 
                <div className="form-group">
                    <label>Image upload</label>
                    <input type="file" onChange={this.fileSelectHandler.bind(this)} className="form-control" name="selectFile" id="selectFile" />
                </div>
                <button onClick={this.fileUploadHandler} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
}

if (document.getElementById('imageupload')) {
ReactDOM.render(<ImageUpload />, document.getElementById('imageupload'));
}