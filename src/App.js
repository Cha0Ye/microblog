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
