import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import all reducers
import posts from './posts';
import comments from './comment';

const rootReducer = combineReducers({
  'posts': posts,
  'comments':comments,
   routing: routerReducer
})

export default rootReducer;