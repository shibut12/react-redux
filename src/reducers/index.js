import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReduer';

const rootReducer = combineReducers({
    courses, // short hand property name, same as courses: courses
    authors
});

export default rootReducer;