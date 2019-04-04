import React, { Component } from "react";
import uuid from "uuid/v4";
import Comment from "./Comment";
import NewCommentForm from './NewCommentForm';

class Comments extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: []
  //   };
  //   this.addComment = this.addComment.bind(this);
  // }

  // addComment(newComment) {
  //   const commentID = uuid();
  //   newComment.id = commentID;
  //   this.setState(st => ({
  //     comments: [...st.comments, newComment]
  //   }));
  // }

  render() {
      //FIX ME FIX ME FIXME put delete comment as a prop to comment
    const comments = this.props.comments.map(cmt => (
            <Comment 
                  message={cmt.comment} 
                  key={cmt.id} 
                  id={cmt.id} />
        ));
    return <div>
             {comments}
             <NewCommentForm 
                  triggerAddComment={this.addComment}
                  postId={this.props.postId}
                  />
            </div>;
  }
}

export default Comments;
