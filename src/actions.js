import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
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

