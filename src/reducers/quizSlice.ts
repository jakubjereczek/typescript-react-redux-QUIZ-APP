import { AnyAction } from "redux";
import { ALL_QUIZ_QUESTION_GET, ALL_QUIZ_QUESTION_GET_SUCCESS, ALL_QUIZ_QUESTION_GET_FAILED, Status } from "../utils/types";

import Quiz from "../models/quiz";

export interface QuizState {
    status: Status
    entries: Array<Quiz>
}

const initialState: QuizState = {
    status: Status.STATUS_IDLE,
    entries: []
}
// TO DO: jest inny format jakby state...data itd.

function quizSlice(state = initialState, action: AnyAction) {
    switch (action.type) {
        case ALL_QUIZ_QUESTION_GET:
            return {
                entries: [],
                status: Status.STATUS_LOADING
            };
        case ALL_QUIZ_QUESTION_GET_SUCCESS:
            return {
                entries: action.payload,
                status: Status.STATUS_SUCCEDDED
            }
        case ALL_QUIZ_QUESTION_GET_FAILED:
            return {
                entries: [],
                status: Status.STATUS_FAILED
            }
        default:
            return state;
    }
}

export default quizSlice;