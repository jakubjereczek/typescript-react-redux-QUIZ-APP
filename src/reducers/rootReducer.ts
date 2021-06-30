import { combineReducers } from "redux";

import quizReduer from './quizReducer';

const reducers = combineReducers({
    quiz: quizReduer
})

export default reducers;
