import { useEffect, useState } from 'react';
import { config } from '../config';

export const useTimer = () => {

    let startedTime = config.timeToAnswerTheQuestion * 1000;
    if (startedTime < 1) {
        startedTime = 1;
    }

    const [isStarted, setIsStarted] = useState(false);

    const [remainingTime, setRemainingTime] = useState(startedTime);
    const [timeIsOver, setTimeIsOver] = useState(false);

    const clearTimeInterval = () => {
        setIsStarted(false);
        setRemainingTime(startedTime);
        setTimeIsOver(false);
    }

    useEffect(() => {
        if (isStarted && !timeIsOver) {
            const interval = setInterval(() => {
                if (remainingTime <= 0) {
                    setTimeIsOver(true);
                    clearInterval(interval);
                    return;
                }
                setRemainingTime(remainingTime - 1000);
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [remainingTime, isStarted, timeIsOver]);

    return [remainingTime, timeIsOver, setIsStarted, clearTimeInterval] as const;
}

