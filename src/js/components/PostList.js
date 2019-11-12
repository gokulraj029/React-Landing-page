import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class PostData extends Component {

        constructor(props){
            super(props)
            this.state = {
                posts : []
            }
        }

        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {
                console.log(Response)
                this.setState({posts: Response.data})
            })
            .catch(error => {
                console.log(error)
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

if (document.getElementById('postdata')) {
    ReactDOM.render(<PostData />, document.getElementById('postdata'));
}