import React from 'react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import {cn} from "../../../lib/classname";
import DirectionIcon from './direction.svg?inline';
import './index.styl'

const b = cn('swipe');

export enum Direction {
    left = 'left',
    right = 'right'
}

export const SwipeDefinition = ({direction}) => (
    <div className={b({[direction]: true})}>
        <svg viewBox={DirectionIcon.viewBox}
             className={b('direction')}
        >
            <use xlinkHref={`#${DirectionIcon.id}`} />
        </svg>
    </div>
);
