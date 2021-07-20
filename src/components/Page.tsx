import { FC } from "react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../utils/hooks";

import { getQuizes } from '../actions/quizActions';
import Quiz from "../models/quiz";

import { Status } from "../utils/types";
import Game from "./Game";
import LoadingIndicator from "./LoadingIndicator";

const Page: FC = () => {

    const dispatch = useAppDispatch();

    const quizes: Array<Quiz> = useAppSelector(state => state.quiz.entries);

    console.log(quizes)

    const loadingStatus: Status = useAppSelector(state => state.quiz.status);

    useEffect(() => {
        const getQuizesThunk = getQuizes();
        dispatch(getQuizesThunk);
    }, []);


    if (loadingStatus === Status.STATUS_LOADING) {
        return <LoadingIndicator />
    };

    return <Game quizes={quizes} />;

}

export default Page;

