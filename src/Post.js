import React, { Component } from 'react';

class Post extends Component {
    
    render() {
        
        let post = this.props.posts.find( p => (p.id === this.props.match.params.id))
        const {title, description, body, id } = post;
        return (
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;