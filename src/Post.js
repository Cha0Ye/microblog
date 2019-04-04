import React, { Component } from 'react';
import EditPostForm from './EditPostForm';
import Comments from './Comments';
import { connect } from 'react-redux';
import { addNewPost,
         deletePost,
         updatePost,
         addNewComment,
         deleteComment,
         updateComment,
         getAllPosts } from './actions';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditCancel = this.handleEditCancel.bind(this);
        this.handleEditShow = this.handleEditShow.bind(this);
    }
    
    handleDelete() {
        // call this.props.deletePost
        this.props.deletePost(this.props.post.id);
        // then redirect to homepage
        this.props.history.push('/');
    }

    handleEditCancel() {
        this.setState({
            isEditing: false
        });
    }

    handleEditShow(){
        this.setState({
            isEditing: true
        });
    }

    render() {
        let display;
        const {title, description, body, id, comments } = this.props.post;
        const commentComponent = (
            <Comments postId={id} 
                comments={comments} 
                triggerAddComment={this.props.triggerAddComment} 
                triggerDeleteComment={this.props.triggerDeleteComment}/> 
            )

        if (this.state.isEditing === false) {
            display = 
            (<div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{body}</p>
                <button onClick={this.handleEditShow}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                {commentComponent}
             </div>)
        } else {
            display = 
            (<>
                <EditPostForm 
                    setIsEditingFalse={this.handleEditCancel}
                    triggerUpdatePost={this.props.editPost}
                    postData={ this.props.post }
                    comments={comments}
                    rtProps={this.props.rtProps}
                    />
                {commentComponent}
             </>)
        }

        return display;
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

const mapDispatchToProps = {
    addNewPost,
    deletePost,
    updatePost,
    addNewComment,
    deleteComment,
    updateComment,
    getAllPosts
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);