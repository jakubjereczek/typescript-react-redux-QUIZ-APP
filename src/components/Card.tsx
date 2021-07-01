import React, { FC, useMemo } from 'react';
import Quiz from '../models/quiz';
import { GameState } from '../reducers/gameReducer';
import { randomArrayValues } from '../utils/helpers';
import './Card.scss';

interface CardProps {
    question: Quiz,
    checkAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
    nextQuestion: () => void;
    resetGame: () => void;
    answered: boolean,
    gameInformation: GameState,
    isFinish: boolean
}

const Card: FC<CardProps> = ({ question, checkAnswer, nextQuestion, resetGame, answered, gameInformation, isFinish }) => {


    const answersList = useMemo(() => {
        if (!isFinish) {
            return [...question.incorrect_answers, question.correct_answer];
        }
        return [];
    }, [question, isFinish]);

    const randomAnswersList = randomArrayValues(answersList);

    const answers = randomAnswersList.map((answer, index) => (
        <button key={index} onClick={checkAnswer} disabled={answered}>
            {answer}
        </button>
    ))

    return (
        <div>
            <div className="results">
                <p>Corrects answers: {gameInformation.good_answers}</p>
                <p>Wrong answers: {gameInformation.wrong_answers}</p>
            </div>
            {!isFinish ?
                <React.Fragment>
                    <h2 className="question">{question.question}</h2>
                    <div className="answers">
                        {answers}
                    </div>
                    {answered && <button onClick={nextQuestion}>Next question</button>}
                </React.Fragment> :
                <React.Fragment>
                    <h2>Game is finish!</h2>
                    <button onClick={resetGame}>Try once more</button>
                </React.Fragment>}
        </div>
    )
}

export default Card;
