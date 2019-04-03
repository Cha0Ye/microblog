import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        const {title, description, body, id } = this.props;
        return (
            <div>
                <Link to={`/${id}`}><h3>{title}</h3></Link>
                <p>{description}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;