import {
    ALL_QUIZ_QUESTION_GET,
    ALL_QUIZ_QUESTION_GET_SUCCESS,
    ALL_QUIZ_QUESTION_GET_FAILED
} from '../utils/types';

import { fetchDatabase } from '../utils/db';
import { AppDispatch, RootState } from '../utils/store';
import Quiz from '../models/quiz';

export const getQuizes = () => {

    return async function getQuizesFetchThunk(dispatch: AppDispatch, getState: RootState) {
        dispatch(quizesLoadedStarted);

        // It's only simulation of async data fetch.
        const response: Quiz[] = await fetchDatabase();

        try {
            dispatch(quizesLoadedSuccess(response))
        } catch (error) {
            dispatch(quizesLoadedFailed)
        }
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