import { Action } from "redux";
import { ALL_QUIZ_QUESTION_GET, ALL_QUIZ_QUESTION_GET_SUCCESS, ALL_QUIZ_QUESTION_GET_FAILED } from "../utils/types";

import Quiz from "../models/quiz";

interface QuizInitialState {
    data: Quiz[]
}

const initialState: QuizInitialState = {
    data: []
}

function quizReducer(state = initialState, action: Action | any) {
    switch (action.type) {
        case ALL_QUIZ_QUESTION_GET:
            return state;
        case ALL_QUIZ_QUESTION_GET_SUCCESS:
            return [
                state,
                ...action.payload
            ]
        default:
            return state;
    }
}

export default quizReducer;