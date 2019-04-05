import React, { Component } from 'react';
import PostCard from '../Components/PostCard';

class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(
                    p => <PostCard 
                        title={p.title}
                        description={p.description}
                        body={p.body}
                        key={p.id}
                        id={p.id}
                    />)}
            </div>
        );
    }
}

export default PostList;