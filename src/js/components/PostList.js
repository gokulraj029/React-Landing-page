import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Api from '../config/Config.js';

export default class PostDataList extends Component {

        constructor(props){
            super(props)
            this.state = {
                posts : []
            }
        }

        componentDidMount(){
            Api.get('posts')
            .then(Response => {
                // console.log(Response)
                this.setState({posts: Response.data})
            })
            .catch(error => {
                // console.log(error)
            })
        }

    render() {

        const {posts} = this.state
        console.log(posts)
        return (
            <div>
                <h1>List Of Post Data</h1>
            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title} {post.userId}</div>) : null
            }
            </div>
        );
    }
}

if (document.getElementById('postdatalist')) {
    ReactDOM.render(<PostDataList />, document.getElementById('postdatalist'));
}