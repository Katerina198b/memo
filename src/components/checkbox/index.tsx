import React from 'react';
import {cn} from '../../lib/classname';

import './index.styl';

interface Checkbox {
    title?: string;
    onClick: () => void;
    className?: string;
    checked: boolean;
}

const b = cn('checkbox');

export const Checkbox = ({
    title,
    onClick,
    className = '',
    checked,
}: Checkbox) => (
    <label className={`${b()} ${className}`}>
        <input
            type="checkbox"
            className={b('input')}
            checked={checked}
            onClick={onClick}
        />
        {title}
    </label>
);

