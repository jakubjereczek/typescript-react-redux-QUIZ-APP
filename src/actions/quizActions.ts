import {
    ALL_QUIZ_QUESTION_GET,
    ALL_QUIZ_QUESTION_GET_SUCCESS,
    ALL_QUIZ_QUESTION_GET_FAILED
} from '../utils/types';

import { API } from '../utils/api';

import { Dispatch } from 'react';

export const getQuiz = () => {

    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: ALL_QUIZ_QUESTION_GET
        })
        try {
            const request = await fetch(API);
            dispatch({
                type: ALL_QUIZ_QUESTION_GET_SUCCESS,
                payload: request.body
            })
        } catch (error) {
            dispatch({
                type: ALL_QUIZ_QUESTION_GET_FAILED,
                payload: error
            })
        }
    }
}