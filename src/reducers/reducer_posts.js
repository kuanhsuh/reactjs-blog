import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { 
  all: [], //blog posts
  post: null // single post
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_POSTS:
      return { ...state, all:action.payload.data }
    case FETCH_POST:
      return { ...state, post:action.payload.data }  
    default:
      return state;
  }
}