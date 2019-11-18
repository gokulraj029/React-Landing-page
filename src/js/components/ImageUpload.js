import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Api from '../config/Config.js';

export default class ImageUpload extends Component {



    constructor(props){
        super(props);
        this.state={
            file : '',
            imagePreviewUrl: ''
        };
    }

    fileSelectHandler(e){
        e.preventDefault();
        // console.log(e.target.files[0]);
        // this.setState({ file: e.target.files[0] });
        // this.setState({ selectFile : e.target.files[0] });
        // this.setState({ [e.target.name]: e.target.files });
        //  console.log("hello" + this.setState)

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        
    }  

    fileUploadHandler(e){
        // e.preventDefault()
        // var fb = new FormData();
        // fb.append('image', this.state.selectFile, this.state.selectFile.name);
        // console.log(fb)
        // axios.post('https://jsonplaceholder.typicode.com/posts', fb)
        // .then(response =>{
        //     console.log(response)
        // })
        // .catch(error => {e
        //     console.log(error)
        // })
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
           Api.post('posts', this.state.file, {
               onUploadProgress : ProgressEvent =>{
                   console.log( 'Upload Progress' + Math.random(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
               }
           })
            .then(response =>{
                console.log(response)
            })
            .catch(error => {e
                console.log(error)
            })        
    }

render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
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
                <button onClick={ (e)=>this.fileUploadHandler(e)} type="submit" className="btn btn-primary">Submit</button>
                <h3>{}</h3>
            </form>
            <div className="imgPreview">
            {$imagePreview}
            </div>
        </div>
    );
}
}

if (document.getElementById('imageupload')) {
ReactDOM.render(<ImageUpload />, document.getElementById('imageupload'));
}