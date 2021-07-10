import React, { FC, useMemo, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getQuizes } from '../actions/quizActions';
import Quiz from "../models/quiz";

import { ApplicationState } from "../utils/store";
import { Status, STATUS_LOADING } from "../utils/types";
import Game from "./Game";
import LoadingIndicator from "./LoadingIndicator";

const Page: FC = () => {

    const dispatch = useDispatch();

    const quizes: Array<Quiz> = useSelector<ApplicationState, Array<Quiz>>(state => state.quiz.entries);

    const loadingStatus: Status = useSelector<ApplicationState, Status>(state => state.quiz.status);

    useEffect(() => {
        const getQuizesThunk = getQuizes();
        dispatch(getQuizesThunk);
    }, []);


    if (loadingStatus === STATUS_LOADING) {
        return <LoadingIndicator />
    };

    return <Game quizes={quizes} />;

}

export default Page;

