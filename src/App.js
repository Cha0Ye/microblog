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
  }

  deletePost() {}

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
            render={rtProps => <Post {...rtProps} posts={this.state.posts} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
