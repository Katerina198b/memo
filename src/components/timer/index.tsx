import React, {memo, useEffect, useState} from 'react';
import {cn} from "../../../lib/classname";
import {Definition} from "../definition";

import './index.styl';
import {Spinner} from '../spinner';

const b = cn('timer');

function useTimer() {
    const [timer, setTimer] = useState<string>('');
    const getCurrentTime = (i: number) => () => i++;

    const abstractClockTime = (timer: number) => ({
        minutes: Math.floor(timer / 60),
        seconds: timer % 60
    });

    const formatClock = format => time =>
        format.replace("mm", time.minutes).replace("ss", time.seconds);

    const prependZero = key => clockTime => ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    });

    const compose = (...fns) => (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        );

    const doubleDigits = civilianTime =>
        compose(
            prependZero("minutes"),
            prependZero("seconds")
        )(civilianTime);

    const startTicking = (start: number) => setInterval(
        compose(
            getCurrentTime(0),
            abstractClockTime,
            doubleDigits,
            formatClock("mm:ss"),
            setTimer
        ),
        1000
    );

    useEffect(() => startTicking(0), []);
    return timer;
}

export const Timer = memo(() => {
    const timer = useTimer();
    return(
        <Spinner>
            <div className={b()}>{timer}</div>
        </Spinner>
    )
});
