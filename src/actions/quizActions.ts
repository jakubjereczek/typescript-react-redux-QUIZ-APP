import {
    ALL_QUIZ_QUESTION_GET,
    ALL_QUIZ_QUESTION_GET_SUCCESS,
    ALL_QUIZ_QUESTION_GET_FAILED
} from '../utils/types';

import { Dispatch } from 'react';
import { fetchDatabase } from '../utils/db';

export const getQuizes = () => {

    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: ALL_QUIZ_QUESTION_GET
        })

        // It's only simulation of async data fetch.
        const response = await fetchDatabase();
        console.log(response)

        try {
            dispatch({
                type: ALL_QUIZ_QUESTION_GET_SUCCESS,
                payload: response,
            })
        } catch (error) {
            dispatch({
                type: ALL_QUIZ_QUESTION_GET_FAILED,
                payload: error
            })
        }
    }
}