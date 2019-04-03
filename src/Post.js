import React, { Component } from 'react';
import EditPostForm from './EditPostForm';

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
        debugger
        let post = this.props.posts.find( p => (p.id === this.props.match.params.id))
        console.log("THISS IS THE PROPS", this.props)
        console.log("THISS IS THE POST", post)
        const {title, description, body, id } = post;
    
        if (this.state.isEditing === false) {

            display = (
                        <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>{body}</p>
                            <button onClick={this.handleEditShow}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
            )
        } else {
            display = (<EditPostForm 
                            setIsEditingFalse={this.handleEditCancel}
                            triggerUpdatePost={this.props.editPost}
                            postData={post}
                            />)
        }

        
        return display;
    }
}

export default Post;