import React, { FC, useState } from 'react';
import Quiz from '../models/quiz';
import Card from './Card';
import './Card.scss';

import { selectAnswer, resetGame, startGame } from '../actions/gameActions'
import { GameState } from '../reducers/gameSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { useTimer } from '../utils/useTimer';
import { useCallback } from 'react';
import { NO_ANSWER } from '../utils/types';

interface GameProps {
    quizes: Array<Quiz>,
}

const Game: FC<GameProps> = ({ quizes }) => {

    const [remainingTime, timeIsOver, setIsStarted, clearTimeInterval] = useTimer();

    const dispatch = useAppDispatch();

    const [isStarted, setStarted] = useState<boolean>(false);
    const [isFinish, setFinish] = useState<boolean>(false);
    const [currentQuestion, setCurrentQueston] = useState<Quiz>(quizes[0]);
    const [currentIteration, setCurrentIteration] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const nextQuestion = useCallback(() => {
        setCurrentIteration(prev => prev + 1);
        if (currentIteration + 1 > quizes.length - 1) {
            clearTimeInterval();
            setFinish(true);
            setIsStarted(false);
        }
        setCurrentQueston(quizes[currentIteration + 1]);
        setAnswered(false);
        setIsStarted(true);
    }, [clearTimeInterval, currentIteration, quizes, setIsStarted]);

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = (event.target as HTMLButtonElement).textContent;
        dispatch(selectAnswer(currentQuestion, value!));

        setAnswered(true);
        setIsStarted(false);
        clearTimeInterval();
    }

    const skipAnswer = useCallback(() => {
        dispatch(selectAnswer(currentQuestion, NO_ANSWER));

        setAnswered(true);
        setIsStarted(false);
        clearTimeInterval();
    }, []);

    const restartGame = () => {
        dispatch(resetGame);
        setCurrentIteration(0);
        setCurrentQueston(quizes[0]);
        setStarted(false);
        setFinish(false);
        clearTimeInterval();
    }

    const handleOnButtonStartClick = () => {
        setStarted(true)
        dispatch(startGame);
        setIsStarted(true);
    };

    let gameInformation: GameState = useAppSelector(state => state.game);

    return (
        <div>
            {!isStarted && <button onClick={handleOnButtonStartClick}>Start game</button>}
            {isStarted &&
                <Card
                    question={currentQuestion}
                    checkAnswer={checkAnswer}
                    nextQuestion={nextQuestion}
                    resetGame={restartGame}
                    answered={answered}
                    gameInformation={gameInformation}
                    isFinish={isFinish}
                    remainingTime={remainingTime}
                    timeIsOver={timeIsOver}
                    skipAnswer={skipAnswer}
                    isLastQuestion={currentIteration === quizes.length - 1} />}
        </div>
    )
}

export default Game;
