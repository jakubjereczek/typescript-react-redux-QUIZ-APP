import { Action } from "redux";
import { ALL_QUIZ_QUESTION_GET, ALL_QUIZ_QUESTION_GET_SUCCESS, ALL_QUIZ_QUESTION_GET_FAILED } from "../utils/types";

import Quiz from "../models/quiz";

interface QuizInitialState {
}

const initialState: QuizInitialState = {
}

function quizReducer(state = initialState, action: Action | any) {
    switch (action.type) {
        case ALL_QUIZ_QUESTION_GET:
            return state;
        case ALL_QUIZ_QUESTION_GET_SUCCESS:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}

export default quizReducer;