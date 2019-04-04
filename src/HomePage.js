import React, { Component } from 'react';
import PostList from './PostList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>Marketing fluff. Fluffy fluff, so fluffy. Fluffity fluff fluff. Marketing.</p>
                <PostList />
            </div>
        );
    }
}

export default HomePage;