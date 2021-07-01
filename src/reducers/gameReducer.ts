import { Action } from "redux";
import { GAME_ANSWER_QUESTION, GAME_START, GAME_RESET_STATE } from "../utils/types";

import Quiz from "../models/quiz";

interface GameInitialState {
    questions: number,
    good_answers: number,
    wrong_answers: number,
    lastQuestion: {
        validAnswer: boolean | null,
        answer: string | null,
    }
}

const initialState: GameInitialState = {
    questions: 0,
    good_answers: 0,
    wrong_answers: 0,
    lastQuestion: {
        validAnswer: null,
        answer: null,
    }
}

function gameReducer(state = initialState, action: Action | any) {
    switch (action.type) {
        case GAME_ANSWER_QUESTION:
            const { correct_answer } = action.payload.question;
            const selectedAnswer = action.payload.selectedAnswer;

            const isValidAnswer = correct_answer === selectedAnswer;
            return {
                questions: state.questions + 1,
                good_answers: isValidAnswer ? state.good_answers + 1 : state.good_answers,
                wrong_answers: !isValidAnswer ? state.wrong_answers + 1 : state.wrong_answers,
                lastQuestion: {
                    validAnswer: isValidAnswer ? true : false,
                    answer: selectedAnswer
                }
            }
        case GAME_START:
        case GAME_RESET_STATE:
            return initialState;
        default:
            return state;
    }
}

export default gameReducer;