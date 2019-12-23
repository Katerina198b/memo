import React from 'react';
import {cn} from '../../../lib/classname';
import {CardBackground} from "../card";
import Check from './check.svg?inline';

import './index.styl';

export interface Color {
    background: CardBackground;
    className?: string;
    checked: boolean;
    onClick: () => void;

}

const b = cn('color');

export const Color = ({
    background,
    className = '',
    checked,
    onClick,
}: Color) => (
    <div className={b({background, checked})}
         onClick={onClick}
    >
        <svg viewBox={Check.viewBox}
             className={b('icon')}
        >
            <use xlinkHref={`#${Check.id}`} />
        </svg>
    </div>
);
