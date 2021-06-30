import { Action } from "redux";
import { ALL_QUIZ_QUESTION_GET } from "../utils/types";

import Quiz from '../models/quiz';

interface QuizInitialState {
    quizes: Quiz[]
}

const initialState: QuizInitialState = {
    quizes: []
}

function quizReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ALL_QUIZ_QUESTION_GET:
            return {
                ...state
            }
    }
}

export default quizReducer;