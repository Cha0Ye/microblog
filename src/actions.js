import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
         GET_ALL_POSTS } from './actionTypes';


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
             payload: { postID, updatePost }
    };
}

export function addNewComment(comment){
    return { type: ADD_NEW_COMMENT, 
             payload: comment
    };
}

export function deleteComment(commentID){
    return { type: DELETE_COMMENT, 
             payload: commentID
    };
}

export function getAllPosts(){
    return { type: GET_ALL_POSTS };
}

