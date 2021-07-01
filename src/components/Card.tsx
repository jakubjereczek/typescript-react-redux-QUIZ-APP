import React, { FC } from 'react';
import Quiz from '../models/quiz';
import './Card.scss';

interface CardProps {
    question: Quiz,
}

const Card: FC<CardProps> = ({ question }) => {

    console.log(question);

    return (
        <div>
            <h2 className="question">{question.question}</h2>
            <div className="answers">
                <button>A</button>
                <button>b</button>
                <button>A</button>
                <button>A</button>
            </div>
        </div>
    )
}

export default Card;
