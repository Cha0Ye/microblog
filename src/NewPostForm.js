import React, { Component } from 'react';
import PostForm from './PostForm';

class NewPostForm extends Component {

    constructor(props) {
        super(props)
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCancel() {
        this.props.history.push('/');
    }
    
    handleSubmit(post) {
        console.log(this.props)
        this.props.triggerAddPost(post)
        this.props.history.push('/');
    }
    
    render() {
        const post = {
            title: "",
            description: "",
            body: ""
        }

        return (
            <PostForm 
              title="New Post"
              handleSubmit={this.handleSubmit}
              handleCancel={this.handleCancel}
              post={post}
            />
        );
    }
}

export default NewPostForm;