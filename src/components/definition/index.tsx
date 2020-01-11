import React, {useState} from 'react';
import {cn} from '../../lib/classname';
import {Checkbox} from "../checkbox";

import './index.styl';

export enum DefinitionLevel {
    bad = 'bad',
    normal = 'normal',
    good = 'good',
    perfect = 'perfect',
    default = 'default',
}

export interface Definition {
    title: string;
    description: string;
    time: number;
    level: DefinitionLevel;
    id: string;
    checked: boolean;
}

interface DefinitionProps extends Definition{
    onClick: (id: string) => void;
}

const b = cn('definition');

export const Definition = ({
    title,
    time,
    level,
    onClick,
    id,
    checked,
}: DefinitionProps) => {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        onClick(id);
        setActive(!active);
    };

    return(
        <div className={b()}
             onClick={handleClick}
        >
            <div className={b('title')}>
                <div className={b('name')}>{title}</div>
                <div className={b('time')}>Время тренировок: {time} min</div>
            </div>
            <div className={b('level', {level: time === 0 ? DefinitionLevel.default : level})}/>
            <Checkbox
                className={b('check')}
                onClick={handleClick}
                checked={checked}
            />
        </div>
    )
};
