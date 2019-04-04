import React, { Component } from "react";
import uuid from "uuid/v4";
import Comment from "./Comment";
import NewCommentForm from './NewCommentForm';

class Comments extends Component {

  render() {

    const comments = this.props.comments.map(cmt => (
            <Comment 
                  message={cmt.comment} 
                  key={cmt.id} 
                  id={cmt.id} 
                  triggerDeleteComment={this.props.triggerDeleteComment}
                  postId={this.props.postId}/>
        ));
    return <div>
             {comments}
             <NewCommentForm 
                  triggerAddComment={this.props.triggerAddComment}
                  postId={this.props.postId}
                  />
            </div>;
  }
}

export default Comments;
