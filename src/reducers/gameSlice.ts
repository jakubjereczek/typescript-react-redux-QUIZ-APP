import { AnyAction } from "redux";
import { GAME_ANSWER_QUESTION, GAME_START, GAME_RESET_STATE } from "../utils/types";

export interface GameState {
    questions: number,
    good_answers: number,
    wrong_answers: number,
    lastQuestion: {
        valid_answer: boolean | null,
        answer: string | null,
    }
}

const initialState: GameState = {
    questions: 0,
    good_answers: 0,
    wrong_answers: 0,
    lastQuestion: {
        valid_answer: null,
        answer: null,
    }
}

function gameSlice(state = initialState, action: AnyAction) {
    switch (action.type) {
        case GAME_ANSWER_QUESTION:
            const { correct_answer } = action.payload.question;
            const selectedAnswer = action.payload.selectedAnswer;

            const isValidAnswer = correct_answer === selectedAnswer;
            return {
                ...state,
                questions: state.questions + 1,
                good_answers: isValidAnswer ? state.good_answers + 1 : state.good_answers,
                wrong_answers: !isValidAnswer ? state.wrong_answers + 1 : state.wrong_answers,
                lastQuestion: {
                    valid_answer: isValidAnswer ? true : false,
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

export default gameSlice;