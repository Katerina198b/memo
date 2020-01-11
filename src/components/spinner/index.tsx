import React, {memo} from 'react';
import {cn} from "../../lib/classname";

import './index.styl';

const b = cn('spinner');

export const Spinner = memo(({children}) =>
    <div className="spinner-box">
        <div className="circle-border" />
        <div className="circle-core">{children}</div>
    </div>
);
