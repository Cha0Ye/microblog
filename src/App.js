import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Route, Switch } from 'react-router-dom'; 
import PostList from './PostList';
import NewPostForm from './NewPostForm';

import './App.css';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { posts: [] };
  }
  render() {
    return (
      <div className="App">
      <nav>
        <h1>Microblog</h1>
        <p>Get in the Rithm of blogging!</p>
        <NavLink to='/' >Blog</NavLink>
        <NavLink to='/new' >Add a new post</NavLink>
      </nav>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={ () => <PostList />} />
            <Route exact path='/new' render={ () => <NewPostForm />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
