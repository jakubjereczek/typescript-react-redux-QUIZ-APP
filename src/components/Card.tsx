import React, { FC, useMemo } from 'react';
import { useEffect } from 'react';
import { setTimeCounterValue } from '../actions/gameActions';
import Quiz from '../models/quiz';
import { GameState } from '../reducers/gameSlice';
import { randomArrayValues } from '../utils/helpers';
import { useAppDispatch } from '../utils/hooks';
import './Card.scss';

interface CardProps {
    question: Quiz,
    checkAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
    nextQuestion: () => void;
    resetGame: () => void;
    answered: boolean,
    gameInformation: GameState,
    isFinish: boolean,
    remainingTime: number,
    timeIsOver: boolean,
    skipAnswer: () => void;
    isLastQuestion: boolean,
}

const Card: FC<CardProps> = ({ question, checkAnswer, nextQuestion, resetGame, answered, gameInformation, isFinish, remainingTime, timeIsOver, skipAnswer, isLastQuestion }) => {

    const dispatch = useAppDispatch();

    const answersList = useMemo(() => {
        if (!isFinish) {
            return [...question.incorrect_answers, question.correct_answer];
        }
        return [];
    }, [question, isFinish]);

    const randomAnswersList = useMemo(() => randomArrayValues(answersList), [answersList]);

    const answers = randomAnswersList.map((answer, index) => (
        <button key={index} onClick={checkAnswer} disabled={answered}>
            {answer}
        </button>
    ))

    useEffect(() => {
        if (remainingTime === 0) {
            dispatch(setTimeCounterValue(false)) // Time counter become set as false, the next function will change the value in middleware to true.

            skipAnswer();
        }
    }, [dispatch, remainingTime, skipAnswer])

    return (
        <div>
            <div className="timer">
                {!answered && !isFinish && `${(remainingTime / 1000)} seconds`}
                {/* {timeIsOver && 'Time is over to answer the question! AGGgrr:('} */}
            </div>
            {isFinish && <div className="results">
                <p>Corrects answers: {gameInformation.good_answers}</p>
                <p>Wrong answers: {gameInformation.wrong_answers}</p>
            </div>}
            {!isFinish ?
                <React.Fragment>
                    <h2 className="question">{question.question}</h2>
                    <div className="answers">
                        {answers}
                    </div>
                    {answered && <button onClick={nextQuestion}>{isLastQuestion ? "Show results" : "Next question"}</button>}
                </React.Fragment> :
                <React.Fragment>
                    <h2>The game is finished!</h2>
                    <button onClick={resetGame}>Try once more</button>
                </React.Fragment>}
        </div>
    )
}

export default Card;
