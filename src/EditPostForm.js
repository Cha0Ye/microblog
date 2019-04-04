import React, { Component } from 'react';
import PostForm from './PostForm';

class EditPostForm extends Component {

    constructor(props) {
        super(props)
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCancel() {
        this.props.setIsEditingFalse()
    }

    handleSubmit(post, id) {
        this.props.triggerUpdatePost(post, id)
        this.props.setIsEditingFalse()
    }

    render() {
        return (
            <PostForm 
            title="Edit Post" 
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            post={this.props.postData}
            />
        );
    }
}

export default EditPostForm;