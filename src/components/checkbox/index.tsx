import React from 'react';
import {cn} from '../../../lib/classname';

import './index.styl';

interface Checkbox {
    title?: string;
    onClick: () => void;
    active: boolean;
    className?: string;
}

const b = cn('checkbox');

export const Checkbox = ({
    title,
    onClick,
    active,
    className = '',
}: Checkbox) => (
    <label className={`${b()} ${className}`}>
        <input
            type="checkbox"
            className={b('input')}
            checked={active}
            onClick={onClick}
        />
        {title}
    </label>
);

