import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // short habd version, same as courses: courses
});