import React from 'react';
import {cn} from '../../../lib/classname';

import './index.styl';

const b = cn('card');

export enum CardBackground {
    blue = 'blue',
    orange = 'orange',
    green = 'green',
    grey = 'grey',
    pink = 'pink'
}

export interface Card {
    count: number;
    time: number;
    title: string;
    background: CardBackground;
    id: string;
    className?: string;

}

export const Card = ({
    count,
    time,
    title,
    background,
    className = '',
}: Card) => (
    <div className={b({background})}>
        <h1 className={b('title')}>{title}</h1>
        <div className={b('description')}>
            {count} определений | {time} min
        </div>
    </div>
);
