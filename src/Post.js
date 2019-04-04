import React, { Component } from 'react';
import EditPostForm from './EditPostForm';
import Comments from './Comments';

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
        this.props.deletePost(this.props.match.params.id);
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
    
        if (this.state.isEditing === false) {
                console.log('posts are ', this.props.post);  
            display = (
                        <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>{body}</p>
                            <button onClick={this.handleEditShow}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                            <Comments postId={id} 
                                      comments={comments} 
                                      triggerAddComment={this.props.triggerAddComment} 
                                      triggerDeleteComment={this.props.triggerDeleteComment}/>
                        </div>
            )
        } else {
            display = (<>
                            <EditPostForm 
                                setIsEditingFalse={this.handleEditCancel}
                                triggerUpdatePost={this.props.editPost}
                                postData={ this.props.post }
                                comments={comments}
                                />
                            <Comments postId={id} 
                                      comments={comments} 
                                      triggerAddComment={this.props.triggerAddComment} 
                                      triggerDeleteComment={this.props.triggerDeleteComment}/>
                        </>)
        }

        return display;
    }
}

export default Post;