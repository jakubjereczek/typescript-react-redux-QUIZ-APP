import React, { FC, useState } from 'react';
import Quiz from '../models/quiz';
import Card from './Card';
import './Card.scss';

interface GameProps {
    quizes: Array<Quiz>,
}

const Game: FC<GameProps> = ({ quizes }) => {

    const [isStated, setStarted] = useState<boolean>(false);
    const [isFinish, setFinish] = useState<boolean>(false);
    const [currentQuestion, setCurrentQueston] = useState<Quiz>(quizes[0]);
    const [currentIteration, setCurrentIteration] = useState<number>(0);

    const nextQuestion = () => {
        setCurrentIteration(prev => prev + 1);
        if (quizes.length > currentIteration)
            setFinish(true);
        setCurrentQueston(quizes[currentIteration]);
    }

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

    }

    return (
        <div>
            {!isStated && <button>Start game</button>}
            <Card question={currentQuestion} />
            {isFinish && "Gra skończona => fetch"}

        </div>
    )
}

export default Game;
