import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {title, description, body} = this.props
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