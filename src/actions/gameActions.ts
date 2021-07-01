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

export const resetGame = {
    type: GAME_RESET_STATE
}

// to do - loading state
export const startGame = {
    type: GAME_START
}