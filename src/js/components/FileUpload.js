import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
       axios.post('https://jsonplaceholder.typicode.com/posts', this.state.file)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {e
            console.log(error)
        })    
  }

  _handleImageChange(e) {
    e.preventDefault();

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

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
          <h1>Image Upload</h1>
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit">Upload Image</button>
        </form>
        <div className="imgPreview" style={{width: '300px'}, {height: '300px'}}>
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
if (document.getElementById('fileupload')) {
    ReactDOM.render(<FileUpload />, document.getElementById('fileupload'));
    }