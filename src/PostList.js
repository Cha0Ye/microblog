import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(p => <Post 
                                                title={p.title}
                                                description={p.description}
                                                body={p.body}
                                         />)}
            </div>
        );
    }
}

export default PostList;