import React, {memo, useEffect, useState, useRef} from 'react';
import {Spinner} from 'components/spinner';

import {cn} from "lib/classname";

import './index.styl';

const b = cn('timer');

interface Time {
    minutes: number;
    seconds: number;
}

function useTimer(id: string) {

    const timerId = useRef(null);
    const [timer, setTimer] = useState<string>('');
    const getCurrentTime = (i: number) => () => i++;

    const abstractClockTime = (timer: number) => ({
        minutes: Math.floor(timer / 60),
        seconds: timer % 60
    });

    const formatClock = (format: string) => (time: Time) =>
        format.replace("mm", String(time.minutes)).replace("ss", String(time.seconds));

    const prependZero = (key: keyof Time) => (clockTime: Time) => ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    });

    const compose = (...fns: Function[]) => (arg: any) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        );

    const doubleDigits = (civilianTime: Time) =>
        compose(
            prependZero("minutes"),
            prependZero("seconds")
        )(civilianTime);

    const startTicking = () => {
        clearInterval(timerId.current);
        setTimer('00:00');
        timerId.current = setInterval(
            compose(
                getCurrentTime(1),
                abstractClockTime,
                doubleDigits,
                formatClock("mm:ss"),
                setTimer
            ),
            1000
        );

    };

    useEffect(() => startTicking(), [id]);
    return [timer, setTimer];
}

interface Timer {
    id: string;
}

export const Timer = memo(({id}: Timer) => {
    const [timer] = useTimer(id);

    return(
        <Spinner>
            <div className={b()}>{timer}</div>
        </Spinner>
    )
});
