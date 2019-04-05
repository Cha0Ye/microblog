import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import { connect } from 'react-redux';
import { addNewPost } from '../actions';

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
   
        this.props.addNewPost(post)
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
function mapStateToProps(state, ownProps){
    return {};
}
const mapDispatchToProps = {
    addNewPost
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);