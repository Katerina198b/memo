import React from 'react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import {cn} from "../../lib/classname";
import DirectionIcon from './direction.svg?inline';
import './index.styl'

const b = cn('swipe');

export enum Direction {
    left = 'left',
    right = 'right'
}

export interface SwipeDefinition {
    direction: Direction;
    onClick: () => void;
}

export const SwipeDefinition = ({direction, onClick}: SwipeDefinition) => (
    <div className={b({[direction]: true})}
         onClick={onClick}
    >
        <svg viewBox={DirectionIcon.viewBox}
             className={b('direction')}
        >
            <use xlinkHref={`#${DirectionIcon.id}`} />
        </svg>
    </div>
);
