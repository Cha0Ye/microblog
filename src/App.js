import React, { Component } from "react";
// import { BrowserRouter } from 'react-router-dom';
import { NavLink, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import "./App.css";
import Post from "./Post";
import uuid from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  deletePost(id) {
    const posts = this.state.posts.filter(p => id !== p.id);
    this.setState({
        posts: posts
    });
  }

  editPost(id, newPost) {
    const idx = this.state.posts.findIndex(p => p.id === id);

    newPost.id = id;

    const newPosts = [...this.state.posts.slice(0,idx), newPost, ...this.state.posts.slice(idx+1)];

    this.setState({
      posts: newPosts
   });
  }

  addPost(post) {
    const id = uuid();
    post.id = id;
    this.setState(st => ({
      posts: [...st.posts, post]
    }));
  }

  addComment(postId, newComment) {
    const commentID = uuid();
    newComment.id = commentID;

    //find the post
    const currentPost = this.state.posts.find(p => p.id === postId)

    //add the new comment in the post
    //FIXME: incase undefined is an issue, we need to add anempty array here
    currentPost.comments = [...currentPost.comments, newComment]

    //find the index of the post
    const currentPostIdx = this.state.posts.findIndex(p => p.id === postId)

    //create new post
    const newPosts = [...this.state.posts.slice(0,currentPostIdx), currentPost, ...this.state.posts.slice(currentPostIdx+1)]

    //MAP over and see if it is a match, then return p 

    this.setState(st => (
      {
          posts: newPosts
      }
    ))

  }

  render() {
    
    return (
      <div className="App">
        <nav>
          <h1>Microblog</h1>
          <p>Get in the Rithm of blogging!</p>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/new">Add a new post</NavLink>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={rtProps => (
              <PostList {...rtProps} posts={this.state.posts} />
            )}
          />
          <Route
            exact
            path="/new"
            render={rtProps => (
              <NewPostForm {...rtProps} triggerAddPost={this.addPost} />
            )}
          />
          <Route
            exact
            path="/:id"
            render={rtProps => <Post 
                                      post={this.state.posts.find( p => (p.id === rtProps.match.params.id))}
                                      {...rtProps} 
                                      deletePost={this.deletePost}
                                      editPost={this.editPost}
                                      />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
