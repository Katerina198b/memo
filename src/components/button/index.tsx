import React, {ReactChild} from 'react';
import {cn} from '../../lib/classname';

import './index.styl';

const b = cn('button');

interface Button {
    onClick: () => void;
    className?: string;
    children: ReactChild;
}

export const Button = ({
    onClick,
    className = '',
    children,
}: Button) => (
    <button className={b()}
            onClick={onClick}
    >
        {children}
    </button>
);
