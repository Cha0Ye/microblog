import React, { Component } from 'react';
import EditPostForm from './EditPostForm';
import Comments from '../Components/Comments';
import { connect } from 'react-redux';
import { addNewPost,
         deletePost,
         updatePost,
         addNewComment,
         deleteComment
         } from '../actions';

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

        const {title, 
               description, 
               body, 
               id, 
               comments } = this.props.post;

        const commentComponent = (
            <Comments 
              postId={id} 
              comments={comments} 
              triggerAddComment={this.props.addNewComment} 
              triggerDeleteComment={this.props.deleteComment}/> 
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
                    triggerUpdatePost={this.props.updatePost}
                    postData={ this.props.post }
                    />
                {commentComponent}
             </>)
        }

        return display;
    }
}

function mapStateToProps(state, ownProps){
    console.log('OWNNNPROPSSS', ownProps, "STATE.POSTSSS", state.posts)
    const post = state.posts.find(p => ownProps.id == p.id)
    console.log('POSTTTTTTT', post)
    return { post };
}

const mapDispatchToProps = {
    addNewPost,
    deletePost,
    updatePost,
    addNewComment,
    deleteComment,
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);