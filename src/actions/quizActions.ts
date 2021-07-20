import {
    ALL_QUIZ_QUESTION_GET,
    ALL_QUIZ_QUESTION_GET_SUCCESS,
    ALL_QUIZ_QUESTION_GET_FAILED
} from '../utils/types';

import { fetchDatabase } from '../utils/db';
import { RootState } from '../utils/store';
import Quiz from '../models/quiz';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>

export const getQuizes = (): AppThunk<void> =>
    async dispatch => {
        dispatch(quizesLoadedStarted);

        const response: Quiz[] = await fetchDatabase();

        try {
            dispatch(quizesLoadedSuccess(response))
        } catch (error) {
            const errorInstance = new Error(error);
            dispatch(quizesLoadedFailed(errorInstance.message))
        }
    }


const quizesLoadedStarted = (
    {
        type: ALL_QUIZ_QUESTION_GET
    }
)

const quizesLoadedSuccess = (quizes: Quiz[]) => {
    return ({
        type: ALL_QUIZ_QUESTION_GET_SUCCESS,
        payload: quizes,
    })
}

const quizesLoadedFailed = (error: string) => {
    return ({
        type: ALL_QUIZ_QUESTION_GET_FAILED,
        payload: error
    })
}