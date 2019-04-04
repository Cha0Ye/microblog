import uuid from 'uuid/v4';

import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
         UPDATE_COMMENT,
         GET_ALL_POSTS } from './actionTypes';



const INITIAL_STATE = { 
    posts: [],
};


export function rootReducer(state = INITIAL_STATE , action){
    if(action.type === ADD_NEW_POST){
        return { posts: [...state.posts, action.payload ]};
    }
    else if(action.type === DELETE_POST){
        const posts = state.posts.filter( p => p.id === action.payload.id )
        return { posts };
    }
    // payload: { postID, updatePost }
    else if(action.type === UPDATE_POST){
        const updatedPosts = state.posts.map( p => 
            p.id === action.payload.postID
            ? 
            p = action.payload.updatePost
            : 
            p );
        return {posts: updatedPosts};
    }
    else if(action.type === ADD_NEW_COMMENT){
        return {};
    }
    else if(action.type === DELETE_COMMENT){
        return {};
    }
    else if(action.type === UPDATE_COMMENT){
        return {};
    }
    else if(action.type === GET_ALL_POSTS){
        return {};
    }
    else{
        return state;
    }
    

}