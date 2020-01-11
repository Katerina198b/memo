import React from 'react';
import {cn} from "../../lib/classname";
import {Definition} from "../definition";

import './index.styl';

const b = cn('definition-card');

interface TimerPage {
    definition: Definition;
}

export const DefinitionCard = ({
    definition,
}: TimerPage) => (
    <div className={b()}>
        <h1>{definition.title}</h1>
        <div className={b('about')}>выучено на {definition.time}%, {definition.level} понятий</div>
    </div>
)
