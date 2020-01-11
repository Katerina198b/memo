import React from 'react';
import {cn} from '../../lib/classname';

import './index.styl';

export enum IconType {
    close = 'close',
    back = 'back',
    logo = 'logo',
    header = 'header',
}

interface IconProps {
    type: IconType;
    color: string;
    onClick: () => void;
}

const b = cn('icon');

export const Icon = ({
    type,
    color,
    onClick,
}: IconProps) => (
    <div
        className={b({type, color})}
        onClick={onClick}
    />
);
