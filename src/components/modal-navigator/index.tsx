import React from 'react';
import {cn} from '../../lib/classname';

import './index.styl';

interface ModalNavigator {
    count: number;
    active: number;
    onClick: (active: number) => void;
}

const b = cn('modal-navigator');

export const ModalNavigator = ({
    count,
    active,
    onClick,
}: ModalNavigator) => (
    <div className={b()}>
        {
            Array.from(Array(count)).map((val, i) => (
                <div className={b('item', {active: i === active})}
                     key={i}
                     onClick={() => onClick(i)}
                />
            ))
        }
    </div>
);
