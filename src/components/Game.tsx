import React, { FC, useState } from 'react';
import Quiz from '../models/quiz';
import Card from './Card';
import './Card.scss';

import { selectAnswer, resetGame } from '../actions/gameActions'
import { GameState } from '../reducers/gameSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

interface GameProps {
    quizes: Array<Quiz>,
}

const Game: FC<GameProps> = ({ quizes }) => {

    const dispatch = useAppDispatch();

    const [isStarted, setStarted] = useState<boolean>(false);
    const [isFinish, setFinish] = useState<boolean>(false);
    const [currentQuestion, setCurrentQueston] = useState<Quiz>(quizes[0]);
    const [currentIteration, setCurrentIteration] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const nextQuestion = () => {
        setCurrentIteration(prev => prev + 1);
        if (currentIteration > quizes.length - 1)
            setFinish(true);
        setCurrentQueston(quizes[currentIteration]);
        setAnswered(false);
    }

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = (event.target as HTMLButtonElement).textContent;
        console.log(value)
        dispatch(selectAnswer(currentQuestion, value!));
        setAnswered(true);
    }

    const restartGame = () => {
        dispatch(resetGame);
        setCurrentIteration(0);
        setCurrentQueston(quizes[0]);
        setStarted(false);
        setFinish(false);
    }

    const handleOnButtonStartClick = () => setStarted(true);

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
                    isFinish={isFinish} />}
        </div>
    )
}

export default Game;
