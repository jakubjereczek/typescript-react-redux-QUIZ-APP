import { Action } from "redux";
import { ALL_QUIZ_QUESTION_GET, ALL_QUIZ_QUESTION_GET_SUCCESS, ALL_QUIZ_QUESTION_GET_FAILED, STATUS_IDLE, Status, STATUS_SUCCEDDED, STATUS_FAILED, STATUS_LOADING } from "../utils/types";

import Quiz from "../models/quiz";

interface QuizInitialState {
    status: Status
    entries: Array<Quiz>
}

const initialState: QuizInitialState = {
    status: STATUS_IDLE,
    entries: []
}
// TO DO: jest inny format jakby state...data itd.

function quizReducer(state = initialState, action: Action | any) {
    switch (action.type) {
        case ALL_QUIZ_QUESTION_GET:
            return {
                entries: [],
                status: STATUS_LOADING
            };
        case ALL_QUIZ_QUESTION_GET_SUCCESS:
            return {
                entries: action.payload,
                status: STATUS_SUCCEDDED
            }
        case ALL_QUIZ_QUESTION_GET_FAILED:
            return {
                entries: [],
                status: STATUS_FAILED
            }
        default:
            return state;
    }
}

export default quizReducer;