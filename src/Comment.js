import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const {message} =  this.props;
        return (
            <div>
                <button>X</button>
                {message}
            </div>
        );
    }
}

export default Comment;