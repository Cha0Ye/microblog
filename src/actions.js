import axios from 'axios';
import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
         LOAD_POSTS,
         GET_ALL_POSTS
        } from './actionTypes';


export function addNewPost(newPost){
    return { type: ADD_NEW_POST, 
             payload: newPost 
    };
}

export function deletePost(postID){
    return { type: DELETE_POST,
             payload: postID
    };
}

export function updatePost(postID, updatedPost){
    return { type: UPDATE_POST,
             payload: { postID, updatedPost }
    };
}

export function addNewComment(postID, comment){
    return { type: ADD_NEW_COMMENT, 
             payload: {postID, comment}
    };
}

export function deleteComment(postID, commentID){
    return { type: DELETE_COMMENT, 
             payload: {postID, commentID}
    };
}

export function getAllPostsFromAPI() {
    return async function(dispatch){
        const res = await axios.get('http://localhost:5000/api/posts'); 
        const posts  = res.data;
        console.log('post from action is ', posts);
        dispatch(gotPosts(posts));
    }
    //return { type:  GET_ALL_POSTS };
}

export function gotPosts(posts){
    console.log('in gotPosts', posts)
    return { type: LOAD_POSTS, 
             payload: posts
    };
}

