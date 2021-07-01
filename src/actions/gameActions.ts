import Quiz from '../models/quiz';
import {
    GAME_ANSWER_QUESTION,
    GAME_START,
    GAME_RESET_STATE
} from '../utils/types';

export const selectAnswer = (question: Quiz, selectedAnswer: string) => {
    return {
        type: GAME_ANSWER_QUESTION,
        payload: {
            question,
            selectedAnswer
        }
    }
}

export const resetGame = () => {
    return {
        type: GAME_RESET_STATE
    }
}

export const startGame = () => {
    return {
        type: GAME_START
    }
}