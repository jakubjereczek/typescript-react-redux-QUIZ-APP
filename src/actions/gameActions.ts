import Quiz from '../models/quiz';
import {
    GAME_ANSWER_QUESTION,
    GAME_START,
    GAME_RESET_STATE,
    GAME_SET_TIMECOUNTER
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

export const startGame = {
    type: GAME_START
}

export const setTimeCounterValue = (value: boolean) => ({
    type: GAME_SET_TIMECOUNTER,
    payload: value
})