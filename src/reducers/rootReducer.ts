import { combineReducers } from "redux";

import gameReducer from "./gameReducer";
import quizReduer from './quizReducer';

const reducers = combineReducers({
    quiz: quizReduer,
    game: gameReducer

})

export default reducers;
