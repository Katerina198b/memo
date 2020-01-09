import React from 'react';
import {cn} from '../../../lib/classname';

import './index.styl';
import {Progress} from "../progress";
import {CardType} from "../cards-container";
import {Link} from "react-router-dom";
import {Definition} from "../definition";

const b = cn('card');

export enum CardBackground {
    blue = 'blue',
    orange = 'orange',
    peach = 'peach',
    grey = 'grey',
    pink = 'pink',
    fiolet = 'fiolet'
}

export enum TextColor {
    white = 'white',
    black = 'black'
}

export interface Card {
    count: number;
    time?: number;
    title: string;
    background?: CardBackground;
    id: string;
    className?: string;
    color?: TextColor;
    progress?: number;
    type: CardType;
    definitions: Definition[];
}

export const Card = ({
    count,
    time,
    title,
    background = CardBackground.fiolet,
    color = TextColor.black,
    progress,
    type,
    id,
}: Card) => (
    <Link className={b({background, color})} to={`${type === CardType.exams ? 'exam' : 'card'}/${id}`}>
        {progress &&
            <Progress
                percent={progress}
                className={b('progress')}
            />
        }
        <h1 className={b('title')}>{title}</h1>
        <div className={b('description')}>
            {count} определений!!! {time === undefined ? null : `| ${time} min`}
        </div>
    </Link>
);

