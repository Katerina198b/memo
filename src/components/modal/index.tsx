import React, {ReactChild} from "react";
import {cn} from '../../lib/classname';

import './index.styl';

const b = cn('modal');

interface Modal {
    children: ReactChild,
    active: boolean,
}

export const Modal = ({
    children,
    active,
}: Modal) => (
    <div className={b({active})}>
        <div className={b('body')}>
            {children}
        </div>
    </div>
);


