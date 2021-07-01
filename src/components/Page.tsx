import React, { FC, useMemo, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getQuizes } from '../actions/quizActions';
import Quiz from "../models/quiz";

import { ApplicationState } from "../utils/store";
import Game from "./Game";
import LoadingIndicator from "./LoadingIndicator";

const Page: FC = () => {

    const [isLoaded, setLoaded] = useState(false);

    const dispatch = useDispatch();

    let quizes: Array<Quiz> = useSelector<ApplicationState, Array<Quiz>>(state => state.quiz);

    useEffect(() => {
        dispatch(getQuizes());
    }, []);

    const initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            const isLoaded: boolean = quizes.length > 0 ? true : false;
            setLoaded(isLoaded);
        } else {
            initialRender.current = false;
        }
    }, [quizes])

    return isLoaded ? (
        <Game quizes={quizes} />
    ) : <LoadingIndicator />
}

export default Page;