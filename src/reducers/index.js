import {combineReducers} from 'redux';
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const rootReducer =combineReducers({
    todos,
    visibilityFilter,
    loadingBar
});

export default rootReducer;
