import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';


class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(
                    p => <PostCard 
                        title={p.title}
                        description={p.description}
                        body={p.body}
                        key={p.id}
                        id={p.id}
                    />)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

export default connect(mapStateToProps)(PostList);